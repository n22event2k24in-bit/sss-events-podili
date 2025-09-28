import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Star, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToGallery = () => {
    document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('19b.jpg')" }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-royal-blue-900/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-gold-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-gold-400/30 rounded-full animate-pulse delay-1000"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo with enhanced styling */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl"></div>
            <img 
              src="logo.png" 
              alt="SSS Events Logo" 
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gold-400 shadow-2xl mx-auto"
            />
          </div>
        </motion.div>

        {/* Main heading with enhanced typography */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Creating
          <span className="block text-gold-400 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
            Magical Moments
          </span>
        </motion.h1>

        {/* Enhanced subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your celebrations with our premium decorations, stunning lighting, 
          and unforgettable event experiences
        </motion.p>

        {/* Stats section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-10"
        >
          {[
            { icon: Award, label: '30+ Years', desc: 'Experience' },
            { icon: Users, label: '1000+', desc: 'Happy Clients' },
            { icon: Star, label: '5 Star', desc: 'Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToGallery}
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Our Gallery
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Quote
          </motion.button>
        </motion.div>

        {/* Proprietor info with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-1">SUDHAKAR REDDY BADAM</h3>
          <p className="text-gold-300 font-medium">Proprietor & Founder</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToGallery}
        >
          <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;