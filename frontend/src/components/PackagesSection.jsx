import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Gem } from 'lucide-react';

const PackagesSection = () => {
  const packages = [
    {
      name: "Essential",
      icon: Star,
      price: "₹25,000",
      duration: "Starting from",
      description: "Perfect for intimate celebrations and small gatherings",
      features: [
        "Basic decoration setup",
        "Standard lighting arrangement",
        "Sound system included",
        "4-hour event coverage",
        "Basic floral arrangements",
        "Setup and cleanup service"
      ],
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Premium",
      icon: Crown,
      price: "₹75,000",
      duration: "Starting from",
      description: "Comprehensive package for memorable celebrations",
      features: [
        "Premium decoration themes",
        "Advanced LED lighting effects",
        "Professional DJ services",
        "8-hour event coverage",
        "Designer floral arrangements",
        "Stage and entrance decor",
        "Photography coordination",
        "Dedicated event coordinator"
      ],
      color: "from-gold-500 to-gold-600",
      popular: true
    },
    {
      name: "Luxury",
      icon: Gem,
      price: "₹1,50,000",
      duration: "Starting from",
      description: "Ultimate luxury experience for grand celebrations",
      features: [
        "Luxury custom decorations",
        "Dynamic lighting shows",
        "Premium entertainment setup",
        "Full day event coverage",
        "Exotic floral designs",
        "Complete venue transformation",
        "Professional photography/videography",
        "Personal event manager",
        "Guest coordination services",
        "Custom theme development"
      ],
      color: "from-purple-600 to-purple-700",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Choose Your Perfect <span className="text-gold-400">Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored packages designed to meet every budget and celebration style, 
            from intimate gatherings to grand luxury events
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 ${
                pkg.popular ? 'ring-2 ring-gold-400 transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${pkg.color} mb-6`}>
                <pkg.icon className="w-8 h-8 text-white" />
              </div>

              {/* Package Name */}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gold-400">{pkg.price}</span>
                <span className="text-gray-400 ml-2">{pkg.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{pkg.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-lg hover:shadow-gold-400/25'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
                }`}
              >
                Choose {pkg.name}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-royal-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Every celebration is unique. Let us create a personalized package that perfectly fits your vision and budget.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Request Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;