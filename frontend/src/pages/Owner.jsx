import React from "react";
import { motion } from "framer-motion";

const Proprietor = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-6 left-6 flex items-center bg-white/20 p-3 rounded-xl shadow-lg backdrop-blur-md"
    >
      {/* Proprietor's Image */}
      <img 
        src="proprietor.jpg" 
        alt="Proprietor" 
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
      />

      {/* Proprietor's Name & Title */}
      <div className="ml-3 text-left text-white">
        <h2 className="text-lg sm:text-xl font-bold">John Doe</h2>
        <p className="text-sm sm:text-base text-gray-300">Proprietor</p>
      </div>
    </motion.div>
  );
};

export default Proprietor;
