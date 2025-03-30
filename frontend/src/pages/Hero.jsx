const Hero = () => {
  return (
    <section className="pt-10 pb-16 bg-gray-100 text-gray-800 text-center animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
          Welcome to SSS Tent House!
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          RTH is a wedding designing and event planning company, set up almost
          three decades ago with an extensive in-house production facility. From
          idea to reality, from fabric to upholstery, and from flowers to
          lighting, we bring your dream event to life.
        </p>

        {/* Decorative Line Image */}
        <div className="flex justify-center my-6">
          <img src="decor-line.png" alt="Decorative Line" className="w-48 md:w-64" />
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto border-t-2 border-gray-300 my-8"></div>

        {/* Section Heading */}
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 pt-10 md:pt-5">
          Our Segments
        </h3>

        {/* Decorative Line Image */}
        <div className="flex justify-center mt-6">
          <img src="decor-line.png" alt="Decorative Line" className="w-48 md:w-64" />
        </div>
      </div>
    </section>
  );
};

export default Hero;