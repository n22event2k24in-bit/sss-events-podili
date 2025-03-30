import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp,FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white text-center relative overflow-hidden"
      style={{ backgroundImage: "url('19b.jpg')" }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Middle Top Image */}
      <div className="mb-12">
        <motion.img 
          src="xxx.png" 
          alt="Special Banner" 
          className="absolute top-0 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Content (Moved Upwards) */}
      <div className="relative z-10 flex flex-col items-center p-3 sm:p-8 md:p-10 max-w-7xl mx-auto mt-[-20px]">
        {/* Logo with animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="logo.png" 
            alt="Logo" 
            className="w-32 sm:w-36 md:w-40 rounded-full shadow-2xl border-4 border-white/80 hover:border-white/40 transition-all duration-300" 
          />
        </motion.div>
        
        {/* Heading with animation */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 text-white drop-shadow-lg"
        >
          Creating Magical Moments
        </motion.h1>

        {/* Description with animation */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl max-w-lg mx-auto text-gray-200 drop-shadow-md"
        >
          Let us make your special events unforgettable with elegance and perfection.
        </motion.p>

        {/* Proprietor Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mt-6"
        >
          {/* <img 
            src="proprietor.jpg" 
            alt="Proprietor" 
            className="w-25 h-30 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg"
          /> */}
          <h2 className="text-lg sm:text-xl font-bold mt-3">SUDHAKAR REDDY BADAM</h2>
          <p className="text-sm sm:text-base text-red-300">Proprietor</p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-6 mt-40"
        >
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaFacebook /></a>
          <a href="https://www.instagram.com/sri__srinivasa__saplayars?igsh=aXFmZDlqdmczbnZm" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaInstagram /></a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaWhatsapp /></a>
          <a href="https://srisrinivasasaplayarspodili.blogspot.com/?m=1" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaGlobe /></a>
          <a href="https://maps.app.goo.gl/by78U36v3MFMoJab6" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaMapMarkerAlt /></a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomePage;
