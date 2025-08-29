import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'amitavburman01@gmail.com',
      action: 'mailto:amitavburman01@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+855 16 358 310',
      action: 'tel:+85516358310'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Dhaka, Bangladesh',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--silver-gray-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--deep-blue)] mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss your requirements 
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[var(--deep-blue)] mb-6">Let's Talk</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with 
                innovative teams. Whether you need a complete solution or want to 
                discuss an idea, I'm here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--silver-gray)]">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[var(--deep-blue)]/10 rounded-lg text-[var(--deep-blue)]">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-[var(--deep-blue)] mb-1">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-gray-600 hover:text-[var(--deep-blue)] transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
              <div className="flex items-center space-x-4">
                <MessageCircle className="h-8 w-8" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">Quick Chat on WhatsApp</h4>
                  <p className="text-green-100 text-sm">
                    Get instant responses to your questions
                  </p>
                </div>
                <a
                  href="https://wa.me/85516358310?text=Hi%20Amitav,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-[var(--silver-gray-light)] transition-colors duration-200"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[var(--silver-gray)]">
            <h3 className="text-[var(--deep-blue)] mb-6">Send Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-green-500 mb-2">Message Sent!</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[var(--silver-gray)] rounded-lg focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[var(--silver-gray)] rounded-lg focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--silver-gray)] rounded-lg focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="automotive">Car Parts E-Commerce</option>
                    <option value="parking">Smart Parking System</option>
                    <option value="electronics">Electronics Import Solutions</option>
                    <option value="other">Other/Custom Project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--silver-gray)] rounded-lg focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;