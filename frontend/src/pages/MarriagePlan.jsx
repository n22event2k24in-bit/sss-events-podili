const MarriagePlan = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-red-100 to-gray-200 text-gray-800">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Circular Image with Hover Border */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:border-4 hover:border-green-500">
            <img
              src="c.jpg"
              alt="Plan 1"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Center Content with Two Vertical Images */}
          <div className="flex flex-col items-center">
            
            {/* First Section with Border */}
            <div className="w-52 md:w-[83%] h-auto shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 py-8 px-4 bg-white">
              
              {/* Heading */}
              <p className="text-2xl md:text-3xl font-bold mb-2 text-center animate-fadeInDown">
                Plan a Event
              </p>

              {/* Horizontal Lines & "With Us" Text */}
              <div className="flex items-center w-full justify-center my-2">
                <hr className="w-16 md:w-28 border-gray-400" />
                <p className="text-lg md:text-xl text-gray-600 mx-3">With Us</p>
                <hr className="w-16 md:w-28 border-gray-400" />
              </div>

              {/* First Vertical Image */}
              <img
                src="sss.jpg"
                alt="Doli"
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            
            </div>

            {/* Second Section with Border */}
            <div className="mt-4 w-52 md:w-96 h-auto shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 py-6 px-2 bg-white">
              <img
                src="sss2.jpg"
                alt="Wedding Plan"
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Circular Image with Hover Border */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:border-4 hover:border-green-500">
            <img
              src="plan2.jpg"
              alt="Plan 2"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarriagePlan;
