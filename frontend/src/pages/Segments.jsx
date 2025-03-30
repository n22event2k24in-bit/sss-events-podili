import { FaHeart } from "react-icons/fa";

const Segments = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/flower-bg.jpg')" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Wedding Decor */}
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold mt-4 flex items-center gap-2 text-white">
              <FaHeart className="text-red-500" /> Wedding Decor & Tenting
            </h3>
            <hr className="border-dashed border-gray-300 w-full my-3" />
            <p className="mt-2 text-gray-100">
              We specialize in Wedding Decor Design. Every wedding design is an artistic vision, brought to life through our exceptional in-house production.
            </p>
          </div>

          {/* Card 2 - Destination Weddings */}
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold mt-4 flex items-center gap-2 text-white">
              <FaHeart className="text-red-500" /> Destination Weddings
            </h3>
            <hr className="border-dashed border-gray-300 w-full my-3" />
            <p className="mt-2 text-gray-100">
              Whether in India or overseas, RTH ensures flawless execution of weddings, from venue selection to decor, entertainment, and logistics.
            </p>
          </div>

          {/* Card 3 - Corporate Events */}
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold mt-4 flex items-center gap-2 text-white">
              <FaHeart className="text-red-500" /> Corporate Events
            </h3>
            <hr className="border-dashed border-gray-300 w-full my-3" />
            <p className="mt-2 text-gray-100">
              RTH specializes in organizing Corporate Events, Award Functions, Musical Nights, Exhibitions & Stall Designing across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;