import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-fixed bg-cover bg-center py-10 text-white"
      style={{ backgroundImage: "url('/flower-bg.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center backdrop-blur-lg bg-white/20 p-6 rounded-lg shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Have questions or need to book an event?  
        </h2>
        <p className="text-lg font-light mb-6">
          Get in touch with us today! We’d love to make your celebrations <span className="italic font-semibold">unforgettable</span> ✨🎉
        </p>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-2 text-lg">
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-xl text-red-400" /> +91 9010791332 , +91 9618816011
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-xl text-yellow-400" /> srinubadam85@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-xl text-green-400" /> Podili, Prakasam Dist, Andhra Pradesh, 523240 🌍
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaFacebook /></a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaInstagram /></a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaTwitter /></a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition duration-300"><FaLinkedin /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-6 opacity-80">
          &copy; {new Date().getFullYear()} All rights reserved. Designed with ❤️
        </p>

      </div>
    </footer>
  );
};

export default Footer;
