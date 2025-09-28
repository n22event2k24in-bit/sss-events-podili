import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Clock, number: "30+", label: "Years Experience" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Award, number: "500+", label: "Events Completed" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About <span className="text-gold-600">SSS Events</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SSS Events is a premier wedding designing and event planning company with nearly three decades of 
              experience in creating magical moments. Founded by <strong>Sudhakar Reddy Badam</strong>, we have 
              established ourselves as the trusted choice for celebrations across Andhra Pradesh.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our well-equipped in-house production facility allows us to handle everything from start to finish. 
              Whether it's selecting the perfect fabrics, designing beautiful decorations, arranging stunning 
              floral setups, or creating mesmerizing lighting effects, we bring every detail of your dream event 
              to life with creativity and perfection.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {[
                "Complete in-house production facility",
                "Expert team of designers and technicians",
                "Custom theme development and execution",
                "Premium quality materials and equipment",
                "End-to-end event management services"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-3 h-3 bg-gold-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="sss.jpg"
                alt="SSS Events Setup"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gold-100 rounded-lg p-2">
                        <stat.icon className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gold-50 to-royal-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              "To transform every celebration into an unforgettable experience through innovative designs, 
              exceptional service, and unwavering attention to detail. We believe that every moment deserves 
              to be celebrated with elegance, creativity, and joy."
            </p>
            <div className="mt-6">
              <span className="text-gold-600 font-semibold">- Sudhakar Reddy Badam, Founder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;