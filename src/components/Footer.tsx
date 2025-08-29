import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    services: [
      { name: 'Website Development', href: '#services' },
      { name: 'Mobile App Development', href: '#services' },
      { name: 'Car Parts E-Commerce', href: '#services' },
      { name: 'Smart Parking Systems', href: '#services' },
      { name: 'Electronics Import Solutions', href: '#services' }
    ],
    company: [
      { name: 'About Me', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    contact: [
      { 
        icon: <Mail className="h-4 w-4" />, 
        text: 'amitavburman01@gmail.com',
        href: 'mailto:amitavburman01@gmail.com'
      },
      { 
        icon: <Phone className="h-4 w-4" />, 
        text: '+855 16 358 310',
        href: 'tel:+85516358310'
      },
      { 
        icon: <MapPin className="h-4 w-4" />, 
        text: 'Dhaka, Bangladesh',
        href: null
      }
    ]
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://linkedin.com/in/amitavburman',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub', 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/amitavburman',
      color: 'hover:text-white'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="h-5 w-5" />, 
      href: 'https://facebook.com/amitavburman',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="h-5 w-5" />, 
      href: 'https://twitter.com/amitavburman',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-[var(--deep-blue)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Amitav Burman</h3>
              <p className="text-[var(--silver-gray)] leading-relaxed">
                Full-Stack Developer & Tech Entrepreneur creating innovative 
                digital solutions for modern businesses.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-[var(--silver-gray)] hover:text-[var(--gold-accent)] transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[var(--silver-gray)] hover:text-[var(--gold-accent)] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {footerSections.contact.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-[var(--gold-accent)]">{contact.icon}</span>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-[var(--silver-gray)] hover:text-white transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-[var(--silver-gray)] text-sm">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-[var(--silver-gray)] text-sm mb-3">
                Get the latest updates on new technologies and projects.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-[var(--silver-gray)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent"
                />
                <button className="bg-[var(--gold-accent)] text-[var(--deep-blue)] px-4 py-2 rounded-r-lg hover:bg-[var(--gold-accent-dark)] transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[var(--silver-gray)] text-sm">
              © {new Date().getFullYear()} Amitav Burman. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[var(--silver-gray)] hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--silver-gray)] hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 bg-[var(--gold-accent)] text-[var(--deep-blue)] rounded-lg hover:bg-[var(--gold-accent-dark)] transition-all duration-300 hover:shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;