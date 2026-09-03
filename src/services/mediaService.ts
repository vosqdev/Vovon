import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore';
import { db, storage, ensureAuthenticated } from '../lib/firebase';
import { MediaItem, MediaCategory } from '../types/media';
import {
  optimizeAndGenerateVariants,
  generateCleanFileName,
  OptimizationProgressCallback
} from '../utils/imageOptimizer';

const MEDIA_COLLECTION = 'media';

export interface UploadMediaParams {
  file: File | Blob;
  title: string;
  altText: string;
  category: MediaCategory;
  projectId?: string;
  uploadedBy?: string;
  originalFileName?: string;
  onProgress?: (progress: {
    stage: 'validating' | 'optimizing' | 'uploading' | 'saving' | 'done' | 'error';
    message: string;
    percent?: number;
    originalSize?: number;
    optimizedSize?: number;
  }) => void;
}

/**
 * Uploads an image with automatic 3-variant generation, WebP conversion, 2MB limit enforcement,
 * upload to Firebase Storage, and metadata persistence in Firestore.
 */
export async function uploadMediaItem(params: UploadMediaParams): Promise<MediaItem> {
  const {
    file,
    title,
    altText,
    category,
    projectId,
    uploadedBy = 'VOVON Beheerder',
    originalFileName = (file instanceof File ? file.name : 'afbeelding.jpg'),
    onProgress
  } = params;

  // 1. Ensure Firebase Auth is ready
  await ensureAuthenticated();

  // 2. Client-side validation & 3-variant generation (WebP, hard <= 2MB limit)
  const optimizationCallback: OptimizationProgressCallback = (status) => {
    onProgress?.({
      stage: status.stage,
      message: status.message,
      originalSize: status.originalSize,
      optimizedSize: status.optimizedSize,
      percent: status.stage === 'optimizing' ? 30 : (status.stage === 'done' ? 50 : 10)
    });
  };

  const variants = await optimizeAndGenerateVariants(file, optimizationCallback);

  // 3. Generate clean unique filename and storage base paths
  const filename = generateCleanFileName(originalFileName, category, projectId);
  const cleanCat = category.toLowerCase().replace(/[^a-z0-9]/g, '');
  const projectPath = projectId ? `${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}/` : '';

  const basePath = `media/${cleanCat}/${projectPath}`;
  const thumbPath = `${basePath}thumb/${filename}`;
  const mediumPath = `${basePath}medium/${filename}`;
  const fullPath = `${basePath}full/${filename}`;

  onProgress?.({
    stage: 'uploading',
    message: 'Varianten uploaden naar Firebase Cloud Storage...',
    percent: 60,
    originalSize: variants.originalFileSize,
    optimizedSize: variants.full.fileSize
  });

  // 4. Upload all 3 variants to Firebase Storage
  const thumbStorageRef = ref(storage, thumbPath);
  const mediumStorageRef = ref(storage, mediumPath);
  const fullStorageRef = ref(storage, fullPath);

  const [thumbUpload, mediumUpload, fullUpload] = await Promise.all([
    uploadBytes(thumbStorageRef, variants.thumbnail.blob, { contentType: 'image/webp' }),
    uploadBytes(mediumStorageRef, variants.medium.blob, { contentType: 'image/webp' }),
    uploadBytes(fullStorageRef, variants.full.blob, { contentType: 'image/webp' })
  ]);

  onProgress?.({
    stage: 'uploading',
    message: 'Publieke CDN/Storage URL’s ophalen...',
    percent: 85
  });

  // 5. Retrieve public download URLs
  const [thumbnailUrl, mediumUrl, fullUrl] = await Promise.all([
    getDownloadURL(thumbUpload.ref),
    getDownloadURL(mediumUpload.ref),
    getDownloadURL(fullUpload.ref)
  ]);

  onProgress?.({
    stage: 'saving',
    message: 'Metadata en koppelingen opslaan in Cloud Firestore...',
    percent: 95
  });

  // 6. Construct Firestore Media Document
  const mediaId = doc(collection(db, MEDIA_COLLECTION)).id;
  const nowIso = new Date().toISOString();

  const mediaItem: MediaItem = {
    id: mediaId,
    filename,
    storagePath: basePath,
    url: fullUrl, // standard fallback
    thumbnailUrl,
    mediumUrl,
    fullUrl,
    altText: altText.trim() || title.trim() || 'VOVON Media',
    title: title.trim() || originalFileName.replace(/\.[^/.]+$/, ''),
    projectId: projectId || '',
    category,
    uploadedBy,
    uploadedAt: nowIso,
    width: variants.full.width,
    height: variants.full.height,
    thumbnailWidth: variants.thumbnail.width,
    thumbnailHeight: variants.thumbnail.height,
    mediumWidth: variants.medium.width,
    mediumHeight: variants.medium.height,
    fullWidth: variants.full.width,
    fullHeight: variants.full.height,
    originalFileSize: variants.originalFileSize,
    optimizedFileSize: variants.full.fileSize,
    thumbnailFileSize: variants.thumbnail.fileSize,
    mediumFileSize: variants.medium.fileSize,
    fullFileSize: variants.full.fileSize,
    mimeType: 'image/webp'
  };

  // 7. Write to Firestore
  const docRef = doc(db, MEDIA_COLLECTION, mediaId);
  await setDoc(docRef, mediaItem);

  onProgress?.({
    stage: 'done',
    message: `Succesvol geüpload! ${formatBytesHelper(variants.originalFileSize)} → ${formatBytesHelper(variants.full.fileSize)}`,
    percent: 100,
    originalSize: variants.originalFileSize,
    optimizedSize: variants.full.fileSize
  });

  return mediaItem;
}

function formatBytesHelper(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const val = bytes / Math.pow(k, i);
  return `${val.toFixed(val >= 10 || i === 0 ? 1 : 2).replace('.', ',')} ${sizes[i]}`;
}

/**
 * Fetches all media items from Firestore with optional filtering.
 */
export async function getMediaItems(options?: {
  category?: MediaCategory | 'All';
  projectId?: string;
  searchQuery?: string;
}): Promise<MediaItem[]> {
  try {
    const mediaRef = collection(db, MEDIA_COLLECTION);
    const q = query(mediaRef, orderBy('uploadedAt', 'desc'));
    const snapshot = await getDocs(q);

    let items: MediaItem[] = [];
    snapshot.forEach((d) => {
      items.push({ id: d.id, ...d.data() } as MediaItem);
    });

    // In-memory filters for flexibility
    if (options?.category && options.category !== 'All') {
      items = items.filter((item) => item.category === options.category);
    }

    if (options?.projectId) {
      items = items.filter((item) => item.projectId === options.projectId);
    }

    if (options?.searchQuery && options.searchQuery.trim() !== '') {
      const qLower = options.searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.title?.toLowerCase().includes(qLower) ||
          item.altText?.toLowerCase().includes(qLower) ||
          item.filename?.toLowerCase().includes(qLower) ||
          item.projectId?.toLowerCase().includes(qLower) ||
          item.category?.toLowerCase().includes(qLower)
      );
    }

    return items;
  } catch (error) {
    console.error('Fout bij ophalen van media uit Firestore:', error);
    return [];
  }
}

/**
 * Updates metadata (title, altText, category, projectId) of a MediaItem in Firestore.
 */
export async function updateMediaMetadata(
  id: string,
  updates: Partial<Pick<MediaItem, 'title' | 'altText' | 'category' | 'projectId'>>
): Promise<void> {
  const docRef = doc(db, MEDIA_COLLECTION, id);
  await updateDoc(docRef, updates);
}

/**
 * Deletes all 3 variants from Firebase Cloud Storage and removes document from Firestore.
 */
export async function deleteMediaItem(mediaItem: MediaItem): Promise<void> {
  const { id, filename, storagePath, category, projectId } = mediaItem;

  // Derive storage paths if storagePath isn't exact
  const cleanCat = (category || 'media').toLowerCase().replace(/[^a-z0-9]/g, '');
  const projectPath = projectId ? `${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}/` : '';
  const basePath = storagePath || `media/${cleanCat}/${projectPath}`;

  const thumbPath = `${basePath}thumb/${filename}`;
  const mediumPath = `${basePath}medium/${filename}`;
  const fullPath = `${basePath}full/${filename}`;

  // 1. Delete all 3 files from Storage (ignoring 404 if file was already moved/absent)
  const deleteVariant = async (path: string) => {
    try {
      const storageRef = ref(storage, path);
      await deleteObject(storageRef);
    } catch (err: any) {
      if (err.code !== 'storage/object-not-found') {
        console.warn(`Kon storage variant niet verwijderen (${path}):`, err);
      }
    }
  };

  await Promise.all([
    deleteVariant(thumbPath),
    deleteVariant(mediumPath),
    deleteVariant(fullPath)
  ]);

  // 2. Delete Firestore Document
  const docRef = doc(db, MEDIA_COLLECTION, id);
  await deleteDoc(docRef);
}
