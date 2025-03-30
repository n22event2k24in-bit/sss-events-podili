const WeddingDecor = () => {
  return (
    <section className="py-6 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4 animate-fadeInDown">
          Wedding Decor & Tenting
        </h2>

        {/* Centered Decor Line Image */}
        <div className="flex justify-center">
          <img src="decor-line.png" className="w-40 md:w-56" alt="Decor Line" />
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="sss1.jpg"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              alt="Wedding Setup 1"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="sss2.jpg"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              alt="Wedding Setup 2"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="sss3.jpg"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              alt="Wedding Setup 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDecor;
