import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Music, Camera, Sparkles, Crown } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Premium Decorations",
      description: "Elegant and thoughtfully designed decorations that perfectly match your event theme with stunning visual displays.",
      image: "sss1.jpg",
      features: ["Floral Arrangements", "Stage Design", "Entrance Decor", "Theme Setup"]
    },
    {
      icon: Lightbulb,
      title: "Professional Lighting",
      description: "Stunning lighting solutions with vibrant effects and dynamic designs that create the perfect ambiance.",
      image: "light.jpg",
      features: ["LED Effects", "Ambient Lighting", "Color Themes", "Dynamic Shows"]
    },
    {
      icon: Music,
      title: "DJ & Sound Systems",
      description: "High-energy DJ sound systems with powerful beats and top-quality audio for unforgettable entertainment.",
      image: "dj.jpg",
      features: ["Professional DJs", "Sound Systems", "Music Curation", "Live Entertainment"]
    },
    {
      icon: Crown,
      title: "Wedding Specialists",
      description: "Complete wedding planning and decoration services with three decades of experience in creating magical moments.",
      image: "gallery1.jpg",
      features: ["Mandap Design", "Bridal Setup", "Reception Decor", "Traditional Ceremonies"]
    },
    {
      icon: Sparkles,
      title: "Event Planning",
      description: "Full-service event planning from concept to execution, handling every detail with creativity and perfection.",
      image: "gallery10.jpg",
      features: ["Birthday Parties", "Corporate Events", "Celebrations", "Custom Themes"]
    },
    {
      icon: Camera,
      title: "Complete Production",
      description: "In-house production facility handling everything from fabric selection to final setup with professional expertise.",
      image: "sss2.jpg",
      features: ["Custom Fabrication", "Design Consultation", "Setup & Installation", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            Our Premium <span className="text-gold-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With nearly three decades of experience, we offer comprehensive event solutions 
            that transform your celebrations into unforgettable experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your vision and bring your dream event to life with our expertise
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-royal-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;