import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mithunPhoto from 'figma:asset/2bf7c9456a378a541ecff6a3d060c452821f93a9.png';
import pisethPhoto from 'figma:asset/121d8f33e9e830242a4d9e52d609875eff83eea4.png';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mithun Ghosh',
      position: 'Founder & CEO',
      company: 'EduNet',
      businessType: 'Student Consulting Firm',
      location: 'Dhaka, Bangladesh',
      image: mithunPhoto,
      rating: 5,
      content: 'Amitav delivered an outstanding website for our student consulting firm that perfectly captures our vision and mission. His technical expertise and understanding of our business needs resulted in a professional, user-friendly platform that has significantly enhanced our online presence. The website has helped us connect with more students and streamline our consulting services. Highly recommended for any business looking for quality web development!',
      project: 'Complete Website Development for Student Consulting Firm',
      services: ['Website Design', 'Development', 'User Experience Optimization'],
      impact: 'Enhanced Online Presence & Student Outreach',
      imagePosition: 'object-center'
    },
    {
      id: 2,
      name: 'EK Piseth',
      position: 'Founder & CEO',
      company: 'ANTI PEST',
      businessType: 'Pest Control & Cleaning Company',
      location: 'Cambodia',
      image: pisethPhoto,
      rating: 5,
      content: 'Amitav created an outstanding professional website for ANTI PEST that perfectly represents our pest control and cleaning services. His technical expertise and understanding of our business requirements resulted in a modern, user-friendly platform that has significantly improved our online presence and customer engagement. The website effectively showcases our services and has helped us reach more clients across Cambodia. Excellent work and highly professional service!',
      project: 'Professional Website Development for Pest Control & Cleaning Services',
      services: ['Professional Website Design', 'Service Showcase', 'Customer Engagement'],
      impact: 'Enhanced Online Presence & Customer Reach',
      imagePosition: 'object-center'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-[var(--gold-accent)] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--deep-blue)] mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--deep-blue-dark)] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold-accent)]/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Quote Icon */}
              <div className="lg:col-span-3 flex justify-center">
                <Quote className="h-16 w-16 text-[var(--gold-accent)] opacity-50" />
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-center lg:justify-start">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
                
                <blockquote className="text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                  "{testimonials[currentSlide].content}"
                </blockquote>

                <div className="text-center lg:text-left">
                  <div className="text-[var(--gold-accent)] font-semibold text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-[var(--silver-gray)]">
                    {testimonials[currentSlide].position}
                  </div>
                  <div className="text-[var(--silver-gray-dark)] text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                  <div className="text-[var(--silver-gray-dark)] text-sm">
                    {testimonials[currentSlide].businessType} • {testimonials[currentSlide].location}
                  </div>
                  <div className="text-[var(--gold-accent-light)] text-sm mt-2">
                    Project: {testimonials[currentSlide].project}
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-[var(--gold-accent)] bg-white shadow-lg">
                    <ImageWithFallback
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className={`w-full h-full object-cover ${testimonials[currentSlide].imagePosition} transition-all duration-300`}
                      fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--gold-accent)] rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="h-4 w-4 text-[var(--deep-blue)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[var(--deep-blue)] text-white hover:bg-[var(--deep-blue-dark)] transition-colors duration-200 shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-[var(--deep-blue)] scale-125' : 'bg-[var(--silver-gray)]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[var(--deep-blue)] text-white hover:bg-[var(--deep-blue-dark)] transition-colors duration-200 shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Updated Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '75+', label: 'Projects Completed' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[var(--gold-accent)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects Overview */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* EduNet Project Card */}
          <div className="bg-[var(--silver-gray-light)] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--gold-accent)] bg-white shadow-md">
                <ImageWithFallback
                  src={mithunPhoto}
                  alt="Mithun Ghosh"
                  className="w-full h-full object-cover object-center"
                  fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                />
              </div>
              <div>
                <h4 className="text-[var(--deep-blue)] font-semibold">EduNet Website</h4>
                <p className="text-gray-600 text-sm">Student Consulting Platform</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[var(--gold-accent)] font-medium text-sm">Industry:</span>
                <span className="text-gray-700 text-sm">Education & Consulting</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gold-accent)] font-medium text-sm">Location:</span>
                <span className="text-gray-700 text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gold-accent)] font-medium text-sm">Services:</span>
                <span className="text-gray-700 text-sm">Complete Web Development</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-[var(--silver-gray)]">
              <p className="text-gray-600 text-xs italic">
                "Enhanced our online presence and helped us connect with more students seeking academic guidance."
              </p>
            </div>
          </div>

          {/* ANTI PEST Project Card */}
          <div className="bg-[var(--silver-gray-light)] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--gold-accent)] bg-white shadow-md">
                <ImageWithFallback
                  src={pisethPhoto}
                  alt="EK Piseth"
                  className="w-full h-full object-cover object-center"
                  fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                />
              </div>
              <div>
                <h4 className="text-[var(--deep-blue)] font-semibold">ANTI PEST Website</h4>
                <p className="text-gray-600 text-sm">Pest Control & Cleaning Services</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[var(--gold-accent)] font-medium text-sm">Industry:</span>
                <span className="text-gray-700 text-sm">Pest Control & Cleaning</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gold-accent)] font-medium text-sm">Location:</span>
                <span className="text-gray-700 text-sm">Cambodia</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gold-accent)] font-medium text-sm">Services:</span>
                <span className="text-gray-700 text-sm">Professional Website Design</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-[var(--silver-gray)]">
              <p className="text-gray-600 text-xs italic">
                "Significantly improved our online presence and helped us reach more clients across Cambodia."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;