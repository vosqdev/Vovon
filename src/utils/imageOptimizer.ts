import { OptimizedVariantsResult, ImageVariantMeta } from '../types/media';

export const MAX_ALLOWED_STORAGE_FILE_SIZE = 2 * 1024 * 1024; // 2 MB Hard Limit (2,097,152 bytes)
export const TARGET_FULL_MIN_SIZE = 400 * 1024; // ~400 KB
export const TARGET_FULL_MAX_SIZE = 1.8 * 1024 * 1024; // ~1.8 MB

export const SUPPORTED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const val = bytes / Math.pow(k, i);
  return `${val.toFixed(val >= 10 || i === 0 ? 1 : 2).replace('.', ',')} ${sizes[i]}`;
}

export function validateImageFile(file: File | Blob): ValidationResult {
  if (!file) {
    return { valid: false, error: 'Geen bestand geselecteerd.' };
  }

  const type = file.type.toLowerCase();
  const isSupported = SUPPORTED_MIME_TYPES.includes(type) || 
    type.startsWith('image/');

  if (!isSupported) {
    return {
      valid: false,
      error: 'Niet-ondersteund bestandsformaat. Kies een JPG, JPEG, PNG of WebP afbeelding.'
    };
  }

  return { valid: true };
}

export function generateCleanFileName(
  originalName: string,
  category: string = 'media',
  projectId?: string
): string {
  // Extract base name without extension
  const rawBase = originalName
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .trim();

  // Slugify
  let slug = rawBase
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);

  if (!slug) {
    slug = 'afbeelding';
  }

  const cleanCategory = category.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanProject = projectId ? `-${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}` : '';
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 6);

  return `vovon-${cleanCategory}${cleanProject}-${slug}-${timestamp}-${randomSuffix}.webp`;
}

function loadImageElement(fileOrBlob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(fileOrBlob);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(new Error('Kon afbeelding niet laden of decoderen in browser.'));
    };

    img.src = url;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string = 'image/webp',
  quality: number = 0.85
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Canvas toBlob conversie is mislukt.'));
        }
      },
      type,
      quality
    );
  });
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Compresses and scales an image to a specific target width while preserving aspect ratio (no upscaling).
 */
async function renderVariant(
  img: HTMLImageElement,
  targetMaxWidth: number,
  initialQuality: number = 0.85,
  hardLimitBytes?: number
): Promise<ImageVariantMeta> {
  const origW = img.naturalWidth || img.width;
  const origH = img.naturalHeight || img.height;

  // Do NOT upscale if source image is smaller than target max width
  let width = origW;
  let height = origH;

  if (origW > targetMaxWidth) {
    const scale = targetMaxWidth / origW;
    width = Math.round(origW * scale);
    height = Math.round(origH * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Kon 2D context van canvas niet initialiseren.');
  }

  // Use high-quality image smoothing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);

  let currentQuality = initialQuality;
  let blob: Blob = await canvasToBlob(canvas, 'image/webp', currentQuality);

  // If hard limit is provided, iteratively reduce quality or dimensions to guarantee <= hardLimitBytes
  if (hardLimitBytes && blob.size > hardLimitBytes) {
    // Quality steps
    const qualitySteps = [0.85, 0.80, 0.75, 0.70, 0.65, 0.58, 0.50];
    for (const q of qualitySteps) {
      if (blob.size <= hardLimitBytes) break;
      currentQuality = q;
      blob = await canvasToBlob(canvas, 'image/webp', currentQuality);
    }

    // If still over hard limit, scale down resolution progressively
    let downscaleFactor = 0.85;
    while (blob.size > hardLimitBytes && width > 400 && height > 300) {
      width = Math.round(width * downscaleFactor);
      height = Math.round(height * downscaleFactor);

      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);

      blob = await canvasToBlob(canvas, 'image/webp', Math.min(currentQuality, 0.75));
    }
  }

  const dataUrl = await blobToDataUrl(blob);

  return {
    blob,
    dataUrl,
    width,
    height,
    fileSize: blob.size
  };
}

export interface OptimizationProgressCallback {
  (status: {
    stage: 'validating' | 'optimizing' | 'done' | 'error';
    message: string;
    originalSize?: number;
    optimizedSize?: number;
  }): void;
}

/**
 * Optimizes an uploaded image and automatically generates 3 variants:
 * 1. Thumbnail (max width 600px, WebP, ~50-250 KB)
 * 2. Medium (max width 1200px, WebP, ~150-700 KB)
 * 3. Full (max width 2560px, WebP, guaranteed <= 2 MB hard limit)
 */
export async function optimizeAndGenerateVariants(
  fileOrBlob: File | Blob,
  onProgress?: OptimizationProgressCallback
): Promise<OptimizedVariantsResult> {
  const originalFileSize = fileOrBlob.size;
  const originalType = fileOrBlob.type || 'image/jpeg';

  onProgress?.({
    stage: 'validating',
    message: originalFileSize > MAX_ALLOWED_STORAGE_FILE_SIZE
      ? `Deze afbeelding is ${formatFileSize(originalFileSize)}. De afbeelding wordt automatisch geoptimaliseerd voor webgebruik.`
      : `Afbeelding wordt geoptimaliseerd en geconverteerd naar WebP...`,
    originalSize: originalFileSize
  });

  const validation = validateImageFile(fileOrBlob);
  if (!validation.valid) {
    onProgress?.({
      stage: 'error',
      message: validation.error || 'Ongeldige afbeelding.'
    });
    throw new Error(validation.error || 'Ongeldige afbeelding.');
  }

  const img = await loadImageElement(fileOrBlob);
  const origWidth = img.naturalWidth || img.width;
  const origHeight = img.naturalHeight || img.height;

  onProgress?.({
    stage: 'optimizing',
    message: 'Geoptimaliseerde varianten genereren (Thumbnail, Medium, Full)...',
    originalSize: originalFileSize
  });

  // Generate 3 variants in parallel or sequential
  const [thumbnail, medium, full] = await Promise.all([
    renderVariant(img, 600, 0.80),
    renderVariant(img, 1200, 0.85),
    renderVariant(img, 2560, 0.90, MAX_ALLOWED_STORAGE_FILE_SIZE) // Enforce 2MB hard limit!
  ]);

  // Final check on the 2MB limit
  if (full.fileSize > MAX_ALLOWED_STORAGE_FILE_SIZE) {
    const errorMsg = 'Deze afbeelding kan niet voldoende worden verkleind. Kies een afbeelding met een lagere resolutie.';
    onProgress?.({
      stage: 'error',
      message: errorMsg
    });
    throw new Error(errorMsg);
  }

  onProgress?.({
    stage: 'done',
    message: `Afbeelding geoptimaliseerd: ${formatFileSize(originalFileSize)} → ${formatFileSize(full.fileSize)}`,
    originalSize: originalFileSize,
    optimizedSize: full.fileSize
  });

  return {
    thumbnail,
    medium,
    full,
    originalFileSize,
    originalWidth: origWidth,
    originalHeight: origHeight,
    originalType
  };
}
