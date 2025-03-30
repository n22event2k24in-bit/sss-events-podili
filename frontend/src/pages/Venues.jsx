import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Venues = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        

        {/* Venue Categories */}
       
        <div className="flex justify-center my-6 mb-12">
          <img src="decor-line.png" alt="Decorative Line" className="w-48 md:w-64" />
        </div>
        {/* Venue Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["sss4.jpg", "sss5.jpg", "desti3.jpg"].map((image, index) => (
            <motion.div
              key={image}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
            >
              <img src={image} alt="Venue" className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Venues;
