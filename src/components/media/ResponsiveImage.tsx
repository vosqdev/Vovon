import React, { useState } from 'react';
import { MediaItem } from '../../types/media';

export interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  media?: MediaItem | null;
  src?: string;
  thumbnailUrl?: string;
  mediumUrl?: string;
  fullUrl?: string;
  alt: string;
  aspectRatio?: string; // e.g. '16/9', '4/3', '1/1', 'auto'
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  media,
  src,
  thumbnailUrl: propThumb,
  mediumUrl: propMedium,
  fullUrl: propFull,
  alt,
  aspectRatio,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const thumb = media?.thumbnailUrl || propThumb;
  const medium = media?.mediumUrl || propMedium;
  const full = media?.fullUrl || media?.url || propFull || src || '';

  // Construct responsive srcSet if variants exist
  let srcSet: string | undefined = undefined;
  if (thumb && medium && full) {
    srcSet = `${thumb} 600w, ${medium} 1200w, ${full} 2560w`;
  } else if (thumb && full) {
    srcSet = `${thumb} 600w, ${full} 1600w`;
  }

  const defaultSrc = thumb || medium || full;

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${className}`}
      style={aspectRatio && aspectRatio !== 'auto' ? { aspectRatio } : undefined}
    >
      <img
        src={defaultSrc}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt || media?.altText || 'VOVON Afbeelding'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'hidden' : ''}`}
        {...rest}
      />

      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200/60 animate-pulse" />
      )}

      {/* Fallback Error Display */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-slate-100 text-slate-400 text-xs">
          <span>Afbeelding niet beschikbaar</span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;
