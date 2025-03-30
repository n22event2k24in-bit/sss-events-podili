import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();
  // Example gallery items - replace with your actual data
  const galleryItems = [
    { id: 1, image: "gallery1.jpg", title: "Wedding Celebration" },
    { id: 2, image: "gallery10.jpg", title: "Birthday Party" },
    { id: 3, image: "haldii.jpg", title: "House Warming & Haldi" },

  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-br from-blue-300 to-purple-500">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of memorable moments and beautiful events
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <div className="absolute bottom-0 left-0 right-0 p-6">
    <h3 className="text-white text-xl font-semibold transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      {item.title}
    </h3>
    <button
      className="text-white text-sm font-semibold transform translate-y-0 md:translate-y-4 translate-x-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
      onClick={() => navigate("/weddingGallery")}
    >
      View More...
    </button>
  </div>
</div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
       
      </div>
    </section>
  );
};

export default Gallery;