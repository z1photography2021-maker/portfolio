import React from 'react';
import { Code, Lightbulb, Target, Users, Globe, ShoppingCart, Package, Truck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import amitavPhoto from 'figma:asset/2d6658324d0d15ed3040044250efe77ca3392d41.png';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', percentage: 95 },
    { name: 'Backend Development', percentage: 88 },
    { name: 'Mobile Development', percentage: 85 },
    { name: 'IoT & Smart Systems', percentage: 82 },
    { name: 'E-commerce Solutions', percentage: 90 },
    { name: 'International Trade', percentage: 88 },
  ];

  const values = [
    {
      icon: <Code className="h-8 w-8 text-[var(--gold-accent)]" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[var(--gold-accent)]" />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: <Target className="h-8 w-8 text-[var(--gold-accent)]" />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations and drive business growth.'
    },
    {
      icon: <Users className="h-8 w-8 text-[var(--gold-accent)]" />,
      title: 'Collaboration',
      description: 'Working closely with teams and clients to bring visions to life through technology.'
    },
  ];

  const businessExpertise = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-[var(--gold-accent)]" />,
      title: 'Car Parts & Automotive',
      description: 'E-commerce platforms and direct importing from China'
    },
    {
      icon: <Package className="h-6 w-6 text-[var(--gold-accent)]" />,
      title: 'Fashion & Lifestyle',
      description: 'Clothing, cosmetics, and lifestyle products sourcing'
    },
    {
      icon: <Globe className="h-6 w-6 text-[var(--gold-accent)]" />,
      title: 'Electronics & Equipment',
      description: 'Hospital equipment and electronic items importing'
    },
    {
      icon: <Truck className="h-6 w-6 text-[var(--gold-accent)]" />,
      title: 'B2B Wholesale',
      description: 'Factory prices with door-to-door worldwide delivery'
    },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--silver-gray-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--deep-blue)] mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack developer and tech entrepreneur with diverse experience across technology 
            development and international trade operations.
          </p>
        </div>

        <div className="grid-12 items-start gap-16">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              {/* Profile Section with Image */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-3 border-[var(--gold-accent)] shadow-lg">
                    <ImageWithFallback
                      src={amitavPhoto}
                      alt="Amitav Burman"
                      className="w-full h-full object-cover object-center"
                      fallbackSrc="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTQzMDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[var(--deep-blue)] mb-2">Amitav Burman</h3>
                  <p className="text-[var(--gold-accent)] font-medium mb-2">Full-Stack Developer & Tech Entrepreneur</p>
                  <p className="text-gray-600 text-sm">
                    Based in Dhaka, Bangladesh | Available for Remote & On-site Projects
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  I'm Amitav Burman, a full-stack developer and tech entrepreneur with a passion for 
                  creating digital solutions that make a real impact. My journey began in web development 
                  and has since expanded to mobile applications, IoT systems, and e-commerce platforms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What truly sets me apart is my diverse experience across multiple industries. I've built 
                  car parts e-commerce platforms, developed smart parking management systems, and created 
                  innovative solutions for complex problems. My expertise extends beyond technology to 
                  international trade—I have hands-on experience importing car parts, fashion, clothing, 
                  cosmetics & lifestyle products, hospital equipment, and electronic items directly from China, 
                  offering factory prices and B2B wholesale, with door-to-door worldwide delivery.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This unique combination of technical skill and global business operations enables me to 
                  deliver practical, scalable solutions for organizations and enterprises across industries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech trends, mentoring junior 
                  developers, or working on my next entrepreneurial venture. I thrive at the intersection 
                  of technology and business, always seeking new ways to leverage innovation for real-world results.
                </p>
              </div>

              {/* Business Expertise Section */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[var(--silver-gray)]">
                <h4 className="text-[var(--deep-blue)] mb-4">International Trade Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {businessExpertise.map((expertise, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-[var(--gold-accent)]/10 rounded-lg flex-shrink-0">
                        {expertise.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-[var(--deep-blue)] text-sm mb-1">
                          {expertise.title}
                        </h5>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {expertise.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <h4 className="text-[var(--deep-blue)] mb-6">Technical Skills</h4>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-[var(--silver-gray)] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--gold-accent)] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              {/* Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[var(--silver-gray)]"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-[var(--gold-accent)]/10 rounded-lg">
                        {value.icon}
                      </div>
                      <h4 className="text-[var(--deep-blue)]">{value.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Unique Value Proposition */}
              <div className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--deep-blue-dark)] rounded-xl p-8 text-white">
                <h4 className="text-white mb-4">What Makes Me Different</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--gold-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--silver-gray)] text-sm leading-relaxed">
                      <strong className="text-white">Tech + Business:</strong> Unique combination of 
                      technical development skills and hands-on international trade experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--gold-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--silver-gray)] text-sm leading-relaxed">
                      <strong className="text-white">Global Operations:</strong> Direct sourcing from 
                      China with factory prices and worldwide delivery capabilities
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--gold-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--silver-gray)] text-sm leading-relaxed">
                      <strong className="text-white">Industry Diversity:</strong> Experience across 
                      automotive, fashion, electronics, healthcare, and lifestyle sectors
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--gold-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--silver-gray)] text-sm leading-relaxed">
                      <strong className="text-white">End-to-End Solutions:</strong> From ideation and 
                      development to global supply chain management and delivery
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[var(--silver-gray)] text-center">
                <h4 className="text-[var(--deep-blue)] mb-3">Ready to Work Together?</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Let's discuss how my unique combination of technical expertise and 
                  global business operations can benefit your project.
                </p>
                <a
                  href="#contact"
                  className="btn-secondary inline-flex items-center px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;