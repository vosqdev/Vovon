export type MediaCategory =
  | 'Project'
  | 'Gebied'
  | 'Nieuws'
  | 'Impressie'
  | 'Kaart'
  | 'Logo'
  | 'Overig';

export interface ImageVariantMeta {
  blob: Blob;
  dataUrl: string;
  width: number;
  height: number;
  fileSize: number;
}

export interface OptimizedVariantsResult {
  thumbnail: ImageVariantMeta;
  medium: ImageVariantMeta;
  full: ImageVariantMeta;
  originalFileSize: number;
  originalWidth: number;
  originalHeight: number;
  originalType: string;
}

export interface MediaItem {
  id: string;
  filename: string;
  storagePath: string;
  url: string;              // Standard/full image URL
  thumbnailUrl: string;     // Thumbnail image URL (<= 600px)
  mediumUrl: string;        // Medium image URL (<= 1200px)
  fullUrl: string;          // Full resolution image URL (<= 2MB WebP)
  altText: string;
  title: string;
  projectId?: string;
  category: MediaCategory;
  uploadedBy?: string;
  uploadedAt: string;
  width: number;
  height: number;
  thumbnailWidth: number;
  thumbnailHeight: number;
  mediumWidth: number;
  mediumHeight: number;
  fullWidth: number;
  fullHeight: number;
  originalFileSize: number;
  optimizedFileSize: number;
  thumbnailFileSize: number;
  mediumFileSize: number;
  fullFileSize: number;
  mimeType: string;
}
