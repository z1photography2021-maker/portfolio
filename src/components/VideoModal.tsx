import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Loader2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  duration?: number;
  category?: string;
  tags?: string[];
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  thumbnailUrl,
  title, 
  description,
  duration = 0,
  category,
  tags = []
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(duration);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      setIsLoading(true);
      setHasError(false);
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  }, [isOpen, videoUrl]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === ' ' && isOpen) {
        e.preventDefault();
        togglePlayPause();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setHasError(true);
          setIsLoading(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && videoRef.current) {
      videoRef.current.requestFullscreen().catch(() => {
        // Fallback for browsers that don't support fullscreen
        console.log('Fullscreen not supported');
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    if (videoRef.current && isOpen) {
      videoRef.current.play().catch(() => {
        setHasError(true);
      });
      setIsPlaying(true);
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && videoDuration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * videoDuration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-4 overflow-hidden transform transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--silver-gray)]">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-[var(--deep-blue)] flex-1">{title}</h3>
              {category && (
                <span className="px-3 py-1 bg-[var(--gold-accent)]/10 text-[var(--gold-accent-dark)] rounded-full text-sm font-medium capitalize">
                  {category}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[var(--deep-blue)]/10 text-[var(--deep-blue)] rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--silver-gray)]/50 rounded-full transition-colors duration-200 flex-shrink-0"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black group">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[70vh] object-contain"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleVideoEnd}
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
            onError={handleError}
            poster={thumbnailUrl}
            preload="metadata"
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading Overlay */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="flex items-center space-x-3 text-white">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="text-lg font-medium">Loading video...</span>
              </div>
            </div>
          )}

          {/* Error Overlay */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="text-center text-white p-6">
                <div className="text-6xl mb-4">📹</div>
                <h4 className="text-xl mb-2">Video Unavailable</h4>
                <p className="text-gray-300 mb-4">Unable to load the video. Please try again later.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary px-6 py-2 rounded-lg"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Video Controls Overlay */}
          {!isLoading && !hasError && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Bar */}
              <div 
                className="mb-4 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-[var(--gold-accent)] h-2 rounded-full transition-all duration-200 relative"
                    style={{ width: `${videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--gold-accent)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white" />
                    )}
                  </button>

                  {/* Restart Button */}
                  <button
                    onClick={restartVideo}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                  >
                    <RotateCcw className="h-5 w-5 text-white" />
                  </button>

                  {/* Volume Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="h-5 w-5 text-white" />
                      ) : (
                        <Volume2 className="h-5 w-5 text-white" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-2 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--gold-accent)] [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                  </div>

                  {/* Time Display */}
                  <span className="text-white text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(videoDuration)}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                  >
                    <Maximize className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-[var(--silver-gray-light)]">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Duration:</span> {formatTime(videoDuration)} • 
              <span className="font-medium ml-2">Demo Video</span>
              {category && (
                <>
                  <span className="mx-2">•</span>
                  <span className="font-medium capitalize">{category} Project</span>
                </>
              )}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={restartVideo}
                className="btn-tertiary px-4 py-2 rounded-lg transition-all duration-300 text-sm"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Restart
              </button>
              <button
                onClick={onClose}
                className="btn-primary px-6 py-2 rounded-lg transition-all duration-300 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;