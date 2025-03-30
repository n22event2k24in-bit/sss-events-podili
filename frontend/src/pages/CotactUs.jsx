import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundImage: "url('/flower-bg.jpg')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-200 mb-6">
            Have questions or need to book an event? Reach out to us today!
          </p>

          <div className="space-y-4 text-gray-200">
            <p className="flex items-center gap-3 text-lg">
              <FaPhone className="text-red-400 text-xl" /> +91 9010791332 , +91 9618816011
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-yellow-400 text-xl" /> srinubadam85@gmail.com
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-green-400 text-xl" /> Podili, Prakasam Dist, Andhra Pradesh, 523240
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-200 font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-lg bg-white/70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg bg-white/70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full mt-1 p-3 border rounded-lg bg-white/70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
