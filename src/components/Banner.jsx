import React from 'react';
import { Separator } from "@heroui/react";
import { Search, MapPin, PawPrint, DollarSign, Calendar } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative bg-[url('/assets/Banner.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-between gap-5 min-h-[550px] sm:h-[600px] w-full pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      
      {/* Background Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* 1. Hero Content Section */}
      <div className="relative z-10 p-4 text-center flex flex-col justify-center items-center gap-4 flex-1 max-w-4xl">
        {/* Updated from Travel to Pet Theme Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Find Your New <br />
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Best Friend
          </span>
        </h1>

        {/* Updated Paragraph */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Every pet deserves a loving home. Explore hundreds of cute companions waiting to meet you today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <button className="uppercase font-bold tracking-wider text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg transition duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer">
            Adopt Now 🐾
          </button>
          
          <button className="uppercase font-bold tracking-wider text-xs sm:text-sm bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 shadow-md transition duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer">
            List a Pet
          </button>
        </div>
      </div>

      {/* 2. Search Bar Section */}
<div className="relative z-10 w-full mt-10 md:mt-16 px-4 sm:px-6 lg:px-8">
  {/* Container with backdrop blur, border, and responsive layout */}
  <div className="bg-transparent backdrop-blur-lg flex flex-col md:flex-row justify-between gap-4 md:gap-2 w-full items-center p-3 rounded-2xl border border-white/20 shadow-2xl transition-all duration-300">
    
    {/* 1. Location Selection */}
    <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-white/10 rounded-xl cursor-pointer transition group">
      <MapPin className="text-yellow-400 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
      <div>
        <h3 className="text-sm font-bold text-white">Location</h3>
        <p className="text-xs text-white/60 whitespace-nowrap">Address, City or Zip</p>
      </div>
    </div>

    {/* Custom Vertical Separator using white border with opacity */}
    <div className="hidden md:flex items-center h-8">
      <Separator orientation="vertical" className="bg-white/20 w-[1px]" />
    </div>

    {/* 2. Pet Type / Species */}
    <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-white/10 rounded-xl cursor-pointer transition group">
      <PawPrint className="text-white/70 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
      <div>
        <h3 className="text-sm font-bold text-white">Pet Type</h3>
        <p className="text-xs text-white/60 whitespace-nowrap">Dogs, Cats, Rabbits</p>
      </div>
    </div>

    {/* Custom Vertical Separator */}
    <div className="hidden md:flex items-center h-8">
      <Separator orientation="vertical" className="bg-white/20 w-[1px]" />
    </div>

    {/* 3. Adoption Budget */}
    <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-white/10 rounded-xl cursor-pointer transition group">
      <DollarSign className="text-white/70 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
      <div>
        <h3 className="text-sm font-bold text-white">Budget</h3>
        <p className="text-xs text-white/60 whitespace-nowrap">$0 - $3,000</p>
      </div>
    </div>

    {/* Custom Vertical Separator */}
    <div className="hidden md:flex items-center h-8">
      <Separator orientation="vertical" className="bg-white/20 w-[1px]" />
    </div>

    {/* 4. Age / Size Group */}
    <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-white/10 rounded-xl cursor-pointer transition group">
      <Calendar className="text-white/70 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
      <div>
        <h3 className="text-sm font-bold text-white">Age Group</h3>
        <p className="text-xs text-white/60 whitespace-nowrap">Puppy, Kitten, Adult</p>
      </div>
    </div>

    {/* 5. Premium Gradient Search Button */}
    <button className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-gray-400 hover:opacity-95 text-white font-bold py-3 px-8 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition duration-200 active:scale-98 shrink-0 md:ml-2 cursor-pointer">
      <Search size={16} />
      <span>Search</span>
    </button>

  </div>
</div>

    </div>
  );
};

export default Banner;