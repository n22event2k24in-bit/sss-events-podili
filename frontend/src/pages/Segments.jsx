import { FaHeart } from "react-icons/fa";

const Segments = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/flower-bg.jpg')" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Row 1 - Wedding Decor */}
          <div className="flex flex-col justify-center items-center text-center bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <FaHeart className="text-red-500" /> Decorations
            </h3>
            <hr className="border-dashed border-gray-300 w-full my-3" />
            <p className="mt-2 text-gray-100">
              SSS Events specializes in creating beautiful and thoughtfully designed decorations that perfectly match the theme of any occasion. From elegant setups to vibrant, immersive displays, we transform spaces into visually stunning experiences, making every event unforgettable.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="sss1.jpg"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              alt="Wedding Setup 1"
            />
          </div>

          {/* Row 2 - Destination Weddings */}
          
          <div className="flex flex-col justify-center items-center text-center bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <FaHeart className="text-red-500" />Lightings
            </h3>
            <hr className="border-dashed border-gray-300 w-full my-3" />
            <p className="mt-2 text-gray-100">
              SSS Events delivers stunning lighting solutions with vibrant effects and dynamic designs, creating the perfect ambiance for any occasion. From soft glows to dramatic highlights, our lighting transforms spaces into unforgettable experiences.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="light.jpg"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              alt="Wedding Setup 2"
            />
          </div>

          {/* Row 3 - Corporate Events */}
          <div className="flex flex-col justify-center items-center text-center bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <FaHeart className="text-red-500" /> Dj Sounds
            </h3>
            <hr className="border-dashed border-gray-300 w-full my-3" />
            <p className="mt-2 text-gray-100">
              SSS Events provides a high-energy DJ sound system that brings life to any event with powerful beats and top-quality sound. Whether it's a wedding, party, or corporate gathering, our skilled DJs create the perfect playlist to match the vibe, making the atmosphere fun, dynamic, and unforgettable.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="dj.jpg"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              alt="Wedding Setup 3"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Segments;
