import React from 'react';
import { Globe, Smartphone, Car, ParkingCircle, Zap, Package, Watch, Heart, Stethoscope, Shirt, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Website Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      price: 'Starting from $2,500'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter technologies.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      price: 'Starting from $5,000'
    },
    {
      icon: <Car className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Auto Parts Import & Export',
      description: 'Complete automotive parts sourcing and trading solutions from China with worldwide distribution network.',
      features: ['OEM & Aftermarket Parts', 'Quality Assurance', 'Global Shipping', 'Bulk Orders'],
      price: 'MOQ Based Pricing'
    },
    {
      icon: <Package className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Electronics & Gadgets Trading',
      description: 'Import and export of consumer electronics, smart devices, and tech gadgets from China to global markets.',
      features: ['Latest Tech Products', 'Competitive Pricing', 'Quality Control', 'Fast Shipping'],
      price: 'Volume Based Pricing'
    },
    {
      icon: <Briefcase className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Bags & Accessories Import',
      description: 'Premium quality bags, backpacks, travel accessories, and fashion items sourced directly from manufacturers.',
      features: ['Fashion & Travel Bags', 'Custom Branding', 'Quality Materials', 'Trend Analysis'],
      price: 'Wholesale Pricing'
    },
    {
      icon: <Watch className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Watches & Timepieces',
      description: 'Smart watches, fashion watches, and timepieces import with comprehensive after-sales support.',
      features: ['Smart & Analog Watches', 'Brand Partnerships', 'Warranty Support', 'Market Research'],
      price: 'Competitive Rates'
    },
    {
      icon: <Heart className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Cosmetics & Lifestyle',
      description: 'Beauty products, skincare, personal care, and lifestyle items with regulatory compliance and quality assurance.',
      features: ['Beauty & Skincare', 'Regulatory Compliance', 'Private Labeling', 'Market Entry'],
      price: 'Custom Quotations'
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Hospital Equipment Import',
      description: 'Medical devices, hospital equipment, and healthcare technology import from China with global distribution capabilities.',
      features: ['Medical Devices', 'FDA Compliance', 'Technical Support', 'Global Distribution'],
      price: 'Enterprise Pricing'
    },
    {
      icon: <ParkingCircle className="h-12 w-12 text-[var(--gold-accent)]" />,
      title: 'Smart Parking Systems',
      description: 'IoT-enabled parking management solutions with real-time monitoring, automated billing, and mobile integration.',
      features: ['Real-time Monitoring', 'Automated Billing', 'Mobile Integration', 'Analytics Dashboard'],
      price: 'Starting from $15,000'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--deep-blue)] mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions and international trade services spanning web development, 
            mobile applications, and global import/export operations from China to worldwide markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-[var(--silver-gray)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:border-[var(--gold-accent)]/30 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold-accent)]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="p-4 bg-[var(--deep-blue)]/5 rounded-2xl w-fit group-hover:bg-[var(--deep-blue)]/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-[var(--deep-blue)] group-hover:text-[var(--gold-accent)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[var(--gold-accent)] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-[var(--silver-gray)]">
                    <p className="text-[var(--deep-blue)] font-semibold">
                      {service.price}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-6 bg-[var(--deep-blue)] text-white py-3 rounded-lg hover:bg-[var(--deep-blue-dark)] transition-all duration-300 hover:shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--deep-blue-dark)] rounded-2xl p-8 text-white">
            <h3 className="text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-[var(--silver-gray)] mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements 
              and create a tailored solution that fits your needs perfectly.
            </p>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;