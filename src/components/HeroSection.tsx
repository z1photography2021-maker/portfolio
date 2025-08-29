import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import amitavPhoto from 'figma:asset/2d6658324d0d15ed3040044250efe77ca3392d41.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[var(--deep-blue)] to-[var(--deep-blue-dark)] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid-12 items-center">
          <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[var(--gold-accent)] font-medium text-lg tracking-wider uppercase">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="text-[var(--gold-accent)]">Amitav Burman</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--silver-gray)] max-w-2xl">
                  Full-Stack Developer & Tech Entrepreneur specializing in Web Development, 
                  Mobile Apps, and Smart Solutions
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#portfolio"
                  className="btn-secondary inline-flex items-center px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-[var(--deep-blue)] inline-flex items-center px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300"
                >
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-[var(--silver-gray)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold-accent)]">50+</div>
                  <div>Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold-accent)]">5+</div>
                  <div>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold-accent)]">98%</div>
                  <div>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative flex justify-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--gold-accent)] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[var(--gold-accent)] shadow-2xl">
                  <ImageWithFallback
                    src={amitavPhoto}
                    alt="Amitav Burman - Professional Photo"
                    className="w-full h-full object-cover object-center"
                    fallbackSrc="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTQzMDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--gold-accent)] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;