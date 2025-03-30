import React from "react";
import { motion } from "framer-motion";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
    "9.jpg",
    "10.jpg",
 "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpeg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
    "19.jpg",
    "20.jpg",
 "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
    "29.jpg",
    "30.jpg",
 "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
    "39.jpg",
    "40.jpg",
 "41.jpg",
  "42.jpg",
  "43.jpg",
  "44.jpg",
  "45.jpg",
  "46.jpg",
  "47.jpg",
  "48.jpg",
 "49.jpg",
 "50.jpg",
  "51.jpg",
  "52.jpg",
  "53.jpg",
  "54.jpg",
  "55.jpg",
  "56.jpg",
  "57.jpg",
  "58.jpg",
  "59.jpg",
  "60.jpg",
  "61.jpg",
  "62.jpg",

];

const WeddingGallery = () => {
  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Stunning Event Memories
        </motion.h2>

        {/* Scrollable Gallery */}
        <motion.div
          className="overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            drag="x"
            dragConstraints={{ right: 0, left: -2000 }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="snap-center flex-shrink-0 w-72 sm:w-96 h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vertical Scrolling Effect */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={src}
                alt={`Vertical Image ${index + 1}`}
                className="w-full h-40 sm:h-56 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingGallery;
