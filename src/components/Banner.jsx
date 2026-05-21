import React from 'react';
import { Separator } from "@heroui/react";
import { Search, MapPin, PawPrint, DollarSign, Calendar } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative text-white flex flex-col items-center justify-between gap-5 min-h-[600px] sm:h-[600px] w-full pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[url('/assets/Banner.jpg')] bg-cover bg-center">
      
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-[length:400%400%] mix-blend-screen opacity-40"
        style={{
          animation: 'gradient 10s ease infinite'
        }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />

      <div className="relative z-10 p-4 text-center flex flex-col justify-center items-center gap-4 flex-1 max-w-4xl">
        <span className="bg-slate-900/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20 animate-pulse">
          Adopt, Dont Shop 🐾
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]">
          <span className="text-slate-900">Find Your New </span><br />
          <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Best Friend
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl leading-relaxed font-medium">
          Every pet deserves a loving home. Explore hundreds of cute companions waiting to meet you today.
        </p>

        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <button className="uppercase font-bold tracking-wider text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl shadow-lg transition duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer">
            Adopt Now 🐾
          </button>
          
          <button className="uppercase font-bold tracking-wider text-xs sm:text-sm bg-slate-200/60 hover:bg-slate-200/80 text-slate-900 backdrop-blur-md px-6 py-3 rounded-xl border border-slate-300 shadow-md transition duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer">
            List a Pet
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full mt-10 md:mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-xl flex flex-col md:flex-row justify-between gap-4 md:gap-2 w-full items-center p-3 rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-slate-300">
          
          <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-slate-100/80 rounded-xl cursor-pointer transition group">
            <MapPin className="text-pink-500 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
            <div>
              <h3 className="text-sm font-bold text-slate-800">Location</h3>
              <p className="text-xs text-slate-500 whitespace-nowrap">Address, City or Zip</p>
            </div>
          </div>

          <div className="hidden md:flex items-center h-8">
            <Separator orientation="vertical" className="bg-slate-200 w-[1px]" />
          </div>

          <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-slate-100/80 rounded-xl cursor-pointer transition group">
            <PawPrint className="text-purple-500 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
            <div>
              <h3 className="text-sm font-bold text-slate-800">Pet Type</h3>
              <p className="text-xs text-slate-500 whitespace-nowrap">Dogs, Cats, Rabbits</p>
            </div>
          </div>

          <div className="hidden md:flex items-center h-8">
            <Separator orientation="vertical" className="bg-slate-200 w-[1px]" />
          </div>

          <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-slate-100/80 rounded-xl cursor-pointer transition group">
            <DollarSign className="text-emerald-500 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
            <div>
              <h3 className="text-sm font-bold text-slate-800">Budget</h3>
              <p className="text-xs text-slate-500 whitespace-nowrap">$0 - $3,000</p>
            </div>
          </div>

          <div className="hidden md:flex items-center h-8">
            <Separator orientation="vertical" className="bg-slate-200 w-[1px]" />
          </div>

          <div className="flex items-center gap-3 px-4 py-2 w-full md:w-auto flex-1 hover:bg-slate-100/80 rounded-xl cursor-pointer transition group">
            <Calendar className="text-cyan-500 shrink-0 transform transition-transform group-hover:scale-110" size={20} />
            <div>
              <h3 className="text-sm font-bold text-slate-800">Age Group</h3>
              <p className="text-xs text-slate-500 whitespace-nowrap">Puppy, Kitten, Adult</p>
            </div>
          </div>

          <button className="w-full md:w-auto bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-bold py-3 px-8 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition duration-200 active:scale-98 shrink-0 md:ml-2 cursor-pointer">
            <Search size={16} />
            <span>Search</span>
          </button>

        </div>
      </div>

    </div>
  );
};

export default Banner;