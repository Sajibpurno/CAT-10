import Link from 'next/link';
import React from 'react';

const FeaturedPetSection = () => {
  return (
    <section className="bg-white dark:bg-[#161c2d] text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center  transition-colors duration-300">
      
      {/* 1. Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 tracking-tight flex items-center justify-center gap-2">
        Need a Partner for Crazy Adventures? 🐾
      </h2>

      {/* 2. Content Container */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
        
        {/* Left Side: Animated Gradient Image Wrapper */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-1 shrink-0 overflow-hidden group cursor-pointer shadow-xl dark:shadow-2xl">
          {/* Exact Background Gradient (Reverses smoothly on Hover) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#a28f56] to-[#437164] transition-all duration-700 ease-in-out bg-[length:200%_200%] bg-left-top group-hover:bg-right-bottom" />
          
          {/* Inside Card / Image Container */}
          <div className="relative w-full h-full bg-transparent rounded-[22px] overflow-hidden flex items-end justify-center">
            <img 
              src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1777493682/husky_wmm2u9.png" 
              alt="Goofy Husky with Sunglasses" 
              className="w-[95%] h-[95%] object-contain transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Text & Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold leading-snug">
            I am Fluffy, Funny, and Ready to Turn Your Life Upside Down!
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Hi hooman! Yeah, you! Need someone to interrupt Zoom meetings, steal your 
            snacks, and warm your heart all at once? Adopt me, and lets make life paw-some together!
          </p>

          {/* Glowing Action Button (Adjusted opacity for light mode readability) */}
          <Link href="/all-cats">
          <button className="mt-2 px-6 py-3 bg-gradient-to-r from-[#d946ef]/90 to-[#06b6d4]/90 dark:from-[#d946ef]/80 dark:to-[#06b6d4]/80 hover:from-[#d946ef] hover:to-[#06b6d4] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
            Adopt this Goofy Floof 🐾
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedPetSection;