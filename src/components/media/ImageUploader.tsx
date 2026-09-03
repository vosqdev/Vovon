import React, { useState, useEffect, useRef } from 'react';
import {
  UploadCloud,
  X,
  Check,
  RefreshCw,
  Image as ImageIcon,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { MediaCategory, MediaItem } from '../../types/media';
import { uploadMediaItem } from '../../services/mediaService';
import { formatFileSize, validateImageFile } from '../../utils/imageOptimizer';

export interface ImageUploaderProps {
  value?: string; // Current image URL
  thumbnailValue?: string;
  mediumValue?: string;
  fullValue?: string;
  mediaItem?: MediaItem | null;
  onChange: (result: {
    url: string;
    thumbnailUrl?: string;
    mediumUrl?: string;
    fullUrl?: string;
    mediaItem?: MediaItem;
    title?: string;
    altText?: string;
  }) => void;
  onRemove?: () => void;
  defaultCategory?: MediaCategory;
  defaultProjectId?: string;
  label?: string;
  sublabel?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  compact?: boolean;
  className?: string;
  language?: 'nl' | 'en';
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  value,
  thumbnailValue,
  mediumValue,
  fullValue,
  mediaItem: initialMediaItem,
  onChange,
  onRemove,
  defaultCategory = 'Project',
  defaultProjectId,
  label = 'Afbeelding',
  sublabel = 'Sleep een afbeelding, kies een bestand of plak direct met Ctrl+V.',
  aspectRatio = '16/9',
  compact = false,
  className = '',
  language = 'nl'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{
    stage: string;
    message: string;
    percent?: number;
    originalSize?: number;
    optimizedSize?: number;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentMedia, setCurrentMedia] = useState<MediaItem | null>(initialMediaItem || null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state if initialMediaItem changes
  useEffect(() => {
    if (initialMediaItem) {
      setCurrentMedia(initialMediaItem);
    }
  }, [initialMediaItem]);

  // Handle Clipboard Paste (Ctrl+V / Cmd+V)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      // Check if event happened within this uploader or when window has focus and no text input is active
      const activeElement = document.activeElement;
      const isInputActive = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');

      const isInsideContainer = containerRef.current?.contains(activeElement);
      if (isInputActive && !isInsideContainer) return;

      const clipboardItems = e.clipboardData?.items;
      if (!clipboardItems) return;

      for (let i = 0; i < clipboardItems.length; i++) {
        if (clipboardItems[i].type.startsWith('image/')) {
          const blob = clipboardItems[i].getAsFile();
          if (blob) {
            e.preventDefault();
            processAndUploadFile(blob, 'Klembord Afbeelding');
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [defaultCategory, defaultProjectId]);

  const processAndUploadFile = async (file: File | Blob, customTitle?: string) => {
    setErrorMessage(null);

    // 1. Client-side format validation
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setErrorMessage(validation.error || 'Ongeldige afbeelding.');
      return;
    }

    setIsUploading(true);

    const title = customTitle || (file instanceof File ? file.name.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ') : 'VOVON Afbeelding');

    try {
      // 2. Optimization, 3 variants generation, and upload to Firebase Storage & Firestore
      const uploadedItem = await uploadMediaItem({
        file,
        title,
        altText: title,
        category: defaultCategory,
        projectId: defaultProjectId,
        onProgress: (status) => {
          setUploadStatus(status);
        }
      });

      setCurrentMedia(uploadedItem);
      onChange({
        url: uploadedItem.fullUrl || uploadedItem.url,
        thumbnailUrl: uploadedItem.thumbnailUrl,
        mediumUrl: uploadedItem.mediumUrl,
        fullUrl: uploadedItem.fullUrl,
        mediaItem: uploadedItem,
        title: uploadedItem.title,
        altText: uploadedItem.altText
      });

      // Clear upload status after short delay
      setTimeout(() => {
        setUploadStatus(null);
        setIsUploading(false);
      }, 1200);
    } catch (err: any) {
      console.error('Image upload failed:', err);
      setIsUploading(false);
      setErrorMessage(err.message || 'Upload is mislukt. Probeer opnieuw.');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processAndUploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentMedia(null);
    if (onRemove) {
      onRemove();
    } else {
      onChange({ url: '', thumbnailUrl: '', mediumUrl: '', fullUrl: '' });
    }
  };

  const currentPreviewUrl =
    currentMedia?.mediumUrl ||
    currentMedia?.fullUrl ||
    currentMedia?.url ||
    mediumValue ||
    fullValue ||
    thumbnailValue ||
    value;

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : 'min-h-[180px]';

  return (
    <div ref={containerRef} className={`w-full space-y-2 ${className}`}>
      {/* Label and Helper Header */}
      {label && (
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold text-slate-900 tracking-tight">
            {label}
          </label>
          <span className="text-[11px] font-medium text-slate-500">
            {language === 'nl' ? 'Max 2 MB (auto WebP)' : 'Max 2 MB (auto WebP)'}
          </span>
        </div>
      )}

      {/* Hidden native file picker */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            processAndUploadFile(e.target.files[0]);
          }
        }}
      />

      {/* If an image is already selected or uploaded */}
      {currentPreviewUrl && !isUploading ? (
        <div className="relative group bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
          <div className={`w-full ${aspectClass} overflow-hidden bg-slate-100 flex items-center justify-center`}>
            <img
              src={currentPreviewUrl}
              alt={currentMedia?.altText || 'Voorbeeld'}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
            />
          </div>

          {/* Overlay Actions Header */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold">
                {currentMedia?.category || defaultCategory}
              </span>

              <button
                type="button"
                onClick={handleRemove}
                className="p-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-md transition-transform hover:scale-110"
                title="Afbeelding verwijderen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2 px-3 bg-white/90 hover:bg-white text-slate-900 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <UploadCloud className="w-3.5 h-3.5 text-vovon-600" />
                <span>Vervang bestand</span>
              </button>
            </div>
          </div>

          {/* Quick Info Bar at Bottom of Image */}
          {currentMedia && (
            <div className="px-3.5 py-2 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-semibold text-slate-800 truncate max-w-[200px]">
                {currentMedia.title}
              </span>
              <span>
                {currentMedia.width} × {currentMedia.height} px · {formatFileSize(currentMedia.optimizedFileSize || 0)}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* Empty / Active Upload Zone */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl transition-all duration-200 flex flex-col items-center justify-center text-center ${
            isDragging
              ? 'border-vovon-600 bg-vovon-50/50 scale-[1.01]'
              : 'border-slate-300 hover:border-slate-400 bg-slate-50/70 hover:bg-slate-50'
          } ${compact ? 'p-4' : 'p-6 sm:p-8'}`}
        >
          {isUploading ? (
            /* Upload & Compression Progress Animation */
            <div className="w-full max-w-xs space-y-3 py-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-vovon-100 text-vovon-700 flex items-center justify-center animate-bounce">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h5 className="text-xs font-bold text-slate-900">
                  {uploadStatus?.message || 'Afbeelding verwerken...'}
                </h5>
                {uploadStatus?.originalSize && uploadStatus?.optimizedSize && (
                  <p className="text-[11px] text-emerald-700 font-semibold">
                    Geoptimaliseerd: {formatFileSize(uploadStatus.originalSize)} → {formatFileSize(uploadStatus.optimizedSize)}
                  </p>
                )}
              </div>

              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-vovon-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${uploadStatus?.percent || 60}%` }}
                />
              </div>
            </div>
          ) : (
            /* Standard Upload Zone Content */
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 text-vovon-600 flex items-center justify-center">
                <UploadCloud className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {language === 'nl' ? 'Sleep afbeelding hierheen of kies bestand' : 'Drag image here or choose file'}
                </p>
                <p className="text-[11px] text-slate-500 max-w-xs">
                  {sublabel}
                </p>
              </div>

              {/* Action Buttons: Choose File */}
              <div className="flex items-center gap-2 pt-1 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-2xs transition-colors flex items-center gap-1.5"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{language === 'nl' ? 'Bladeren' : 'Browse File'}</span>
                </button>

                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-slate-400 font-medium px-2">
                  <span>of</span>
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-[9px] font-mono text-slate-600">
                    Ctrl+V
                  </kbd>
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
