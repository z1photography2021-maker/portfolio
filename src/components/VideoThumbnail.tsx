import React, { useState, useRef } from 'react';
import { Play, Clock, Star, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatDuration, type VideoAsset } from './VideoAssets';

interface VideoThumbnailProps {
  video: VideoAsset;
  onClick: () => void;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
  showPreview?: boolean;
  className?: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  video,
  onClick,
  featured = false,
  size = 'medium',
  showPreview = false,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  const sizeClasses = {
    small: 'h-24',
    medium: 'h-48',
    large: 'h-64'
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (showPreview && previewVideoRef.current) {
      setIsLoading(true);
      previewVideoRef.current.currentTime = 0;
      previewVideoRef.current.play().catch(() => {
        setIsLoading(false);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (showPreview && previewVideoRef.current) {
      previewVideoRef.current.pause();
      setIsLoading(false);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className={`group cursor-pointer ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative overflow-hidden rounded-xl bg-white border border-[var(--silver-gray)] hover:border-[var(--gold-accent)] transition-all duration-300 hover:shadow-lg`}>
        {/* Main Thumbnail Image */}
        <div className="relative">
          <ImageWithFallback
            src={video.thumbnailUrl}
            alt={video.title}
            className={`w-full ${sizeClasses[size]} object-cover group-hover:scale-110 transition-transform duration-500 ${showPreview && isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          />
          
          {/* Video Preview (only when showPreview is true) */}
          {showPreview && (
            <video
              ref={previewVideoRef}
              className={`absolute inset-0 w-full ${sizeClasses[size]} object-cover ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              src={video.videoUrl}
              muted
              loop
              playsInline
              preload="none"
              onLoadedData={handleVideoLoad}
              onError={() => setIsLoading(false)}
            />
          )}
        </div>

        {/* Loading Overlay for Preview */}
        {showPreview && isLoading && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Loader2 className="h-6 w-6 animate-spin text-white" />
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-3 bg-[var(--gold-accent)] hover:bg-[var(--gold-accent-dark)] rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-2xl">
            <Play className={`text-[var(--deep-blue)] ml-1 ${size === 'small' ? 'h-4 w-4' : size === 'medium' ? 'h-6 w-6' : 'h-8 w-8'}`} />
          </div>
        </div>

        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              <span className="text-xs">{formatDuration(video.duration)}</span>
            </div>
            {featured && (
              <div className="flex items-center gap-1 bg-[var(--gold-accent)] text-[var(--deep-blue)] px-2 py-1 rounded-full text-xs font-medium">
                <Star className="h-3 w-3" />
                <span>Featured</span>
              </div>
            )}
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-[var(--deep-blue)]/90 text-white rounded-full text-xs font-medium capitalize backdrop-blur-sm">
            {video.category === 'import' ? 'Import/Export' : video.category}
          </span>
        </div>

        {/* Featured Star Badge */}
        {featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-[var(--gold-accent)] text-[var(--deep-blue)] p-1.5 rounded-full">
              <Star className="h-3 w-3" />
            </div>
          </div>
        )}

        {/* Quality/HD Badge */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2 py-1 bg-black/60 text-white rounded text-xs font-medium backdrop-blur-sm">
            HD
          </span>
        </div>
      </div>

      {/* Video Title and Info */}
      {size !== 'small' && (
        <div className="mt-3">
          <h4 className="text-[var(--deep-blue)] font-medium group-hover:text-[var(--gold-accent)] transition-colors duration-300 line-clamp-2">
            {video.title}
          </h4>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
            <span className="capitalize">
              {video.category === 'import' ? 'Import/Export' : video.category}
            </span>
            <span>{formatDuration(video.duration)}</span>
          </div>
          {video.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {video.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[var(--deep-blue)]/10 text-[var(--deep-blue)] rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {video.tags.length > 3 && (
                <span className="px-2 py-1 bg-[var(--silver-gray)] text-gray-600 rounded text-xs">
                  +{video.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;