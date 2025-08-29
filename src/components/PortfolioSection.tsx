import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Play, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import VideoModal from './VideoModal';
import { videoAssets, videoCategories, getVideoByCategory, formatDuration, type VideoAsset } from './VideoAssets';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoAsset | null>(null);

  const portfolioItems = videoAssets.map((video, index) => ({
    id: index + 1,
    title: video.title,
    category: video.category,
    image: video.thumbnailUrl,
    description: video.description.split('.')[0] + '.',  // First sentence for card
    technologies: video.tags,
    liveUrl: '#',
    githubUrl: '#',
    videoAsset: video,
    featured: video.featured
  }));

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleViewLive = (item: typeof portfolioItems[0]) => {
    setSelectedVideo(item.videoAsset);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-[var(--silver-gray-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--deep-blue)] mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my projects across technology development and international trade, 
            demonstrating expertise in web/mobile development and global import/export operations.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Click any project to watch demo video</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>30-60 second demos</span>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {videoCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-[var(--deep-blue)] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-[var(--silver-gray)] border border-[var(--silver-gray)] hover:scale-105'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-[var(--silver-gray)] text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-[var(--silver-gray)] transform hover:-translate-y-2"
            >
              {/* Image with Video Preview Overlay */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Video Preview Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handleViewLive(item)}
                      className="p-4 bg-[var(--gold-accent)] hover:bg-[var(--gold-accent-dark)] rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-2xl"
                    >
                      <Play className="h-8 w-8 text-[var(--deep-blue)] ml-1" />
                    </button>
                  </div>
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{formatDuration(item.videoAsset.duration)}</span>
                      </div>
                      {item.featured && (
                        <div className="flex items-center gap-1 bg-[var(--gold-accent)] text-[var(--deep-blue)] px-2 py-1 rounded-full text-xs font-medium">
                          <Star className="h-3 w-3" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[var(--deep-blue)]/90 text-white rounded-full text-xs font-medium capitalize backdrop-blur-sm">
                    {item.category === 'import' ? 'Import/Export' : item.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-[var(--gold-accent)] text-[var(--deep-blue)] p-2 rounded-full">
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[var(--deep-blue)] mb-2 group-hover:text-[var(--gold-accent)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Technologies/Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--deep-blue)]/10 text-[var(--deep-blue)] rounded-full text-xs font-medium hover:bg-[var(--deep-blue)]/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-[var(--silver-gray)] text-gray-600 rounded-full text-xs font-medium">
                      +{item.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Video Duration and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--silver-gray)]">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Play className="h-4 w-4" />
                    <span>Demo: {formatDuration(item.videoAsset.duration)}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewLive(item)}
                      className="btn-secondary py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Watch Demo
                    </button>
                    <a
                      href={item.githubUrl}
                      className="p-2 border border-[var(--deep-blue)] text-[var(--deep-blue)] rounded-lg hover:bg-[var(--deep-blue)] hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects Section */}
        {activeFilter === 'all' && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-[var(--deep-blue)] mb-2">Featured Projects</h3>
              <p className="text-gray-600">Highlighted projects showcasing our core capabilities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.filter(item => item.featured).map((item) => (
                <div 
                  key={`featured-${item.id}`}
                  className="group cursor-pointer"
                  onClick={() => handleViewLive(item)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white border border-[var(--silver-gray)] hover:border-[var(--gold-accent)] transition-all duration-300 hover:shadow-lg">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="text-[var(--deep-blue)] text-sm font-medium group-hover:text-[var(--gold-accent)] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 capitalize mt-1">
                      {item.category === 'import' ? 'Import/Export' : item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--deep-blue-dark)] rounded-2xl p-8 text-white">
            <h3 className="text-white mb-2">Ready to see your project come to life?</h3>
            <p className="text-[var(--silver-gray)] mb-6 max-w-2xl mx-auto">
              Each demo showcases real functionality and attention to detail. Let's discuss how we can create something amazing together.
            </p>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideoModal}
          videoUrl={selectedVideo.videoUrl}
          thumbnailUrl={selectedVideo.thumbnailUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
          duration={selectedVideo.duration}
          category={selectedVideo.category}
          tags={selectedVideo.tags}
        />
      )}
    </section>
  );
};

export default PortfolioSection;