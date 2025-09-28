import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Instagram, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wedding Decorations',
    'Event Lighting',
    'DJ & Sound Systems',
    'Floral Arrangements',
    'Stage Design',
    'Complete Event Planning'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="relative bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/flower-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="logo.png" 
                  alt="SSS Events" 
                  className="h-12 w-12 rounded-full border-2 border-gold-400"
                />
                <div>
                  <h3 className="text-2xl font-bold">SSS Events</h3>
                  <p className="text-gold-300">Creating Magical Moments</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                With nearly three decades of experience, SSS Events specializes in creating unforgettable 
                celebrations through premium decorations, stunning lighting, and comprehensive event planning services.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-400" />
                  <span>+91 9010791332, +91 9618816011</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-400" />
                  <span>srinubadam85@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <span>Podili, Prakasam Dist, AP 523240</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 text-gold-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 text-gold-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-white/20 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-300">Follow us:</span>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/sri__srinivasa__saplayars?igsh=aXFmZDlqdmczbnZm"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://srisrinivasasaplayarspodili.blogspot.com/?m=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://maps.app.goo.gl/by78U36v3MFMoJab6"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Book Your Event</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-300">
                  &copy; {new Date().getFullYear()} SSS Events. All rights reserved.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Designed with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> by 
                  <span className="text-gold-400 ml-1">Rakesh Mummana & Srinu Badam</span>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gold-300 font-semibold">SUDHAKAR REDDY BADAM</p>
                <p className="text-sm text-gray-400">Proprietor & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;