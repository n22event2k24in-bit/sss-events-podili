import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // All your existing images
  const galleryImages = [
    { src: "1.jpg", category: "Wedding", title: "Elegant Wedding Setup" },
    { src: "2.jpg", category: "Wedding", title: "Bridal Decoration" },
    { src: "3.jpg", category: "Wedding", title: "Reception Hall" },
    { src: "4.jpg", category: "Lighting", title: "Ambient Lighting" },
    { src: "5.jpg", category: "Wedding", title: "Mandap Design" },
    { src: "6.jpg", category: "Decoration", title: "Floral Arrangements" },
    { src: "7.jpg", category: "Wedding", title: "Stage Decoration" },
    { src: "8.jpg", category: "Lighting", title: "LED Effects" },
    { src: "9.jpg", category: "Wedding", title: "Traditional Setup" },
    { src: "10.jpg", category: "Decoration", title: "Entrance Decor" },
    { src: "11.jpg", category: "Wedding", title: "Ceremony Hall" },
    { src: "12.jpg", category: "Lighting", title: "Colorful Lights" },
    { src: "gallery1.jpg", category: "Wedding", title: "Wedding Celebration" },
    { src: "gallery10.jpg", category: "Birthday", title: "Birthday Party" },
    { src: "haldii.jpg", category: "Traditional", title: "Haldi Ceremony" },
    { src: "sss1.jpg", category: "Decoration", title: "Premium Decor" },
    { src: "sss2.jpg", category: "Wedding", title: "Wedding Setup" },
    { src: "light.jpg", category: "Lighting", title: "Professional Lighting" },
    { src: "dj.jpg", category: "Entertainment", title: "DJ Setup" }
  ];

  const categories = ['All', 'Wedding', 'Decoration', 'Lighting', 'Traditional', 'Birthday', 'Entertainment'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="text-gold-600">Stunning</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic we create through our premium decorations, lighting, and event setups
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gold-50 hover:text-gold-600 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                  
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/weddingGallery'}
            className="bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Complete Gallery
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;