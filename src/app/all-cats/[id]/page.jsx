import { getCatDetailsData } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const CardDetailsPage = async ({ params }) => {
  const { id } = await params;
  const SingleCard = await getCatDetailsData(id);

  // Fallback data (Jodi API theke kono data miss hoy jate tor page crash na kore)
  const pet = {
    petName: SingleCard?.petName ,
    species: SingleCard?.species ,
    breed: SingleCard?.breed ,
    age: SingleCard?.age ,
    location: SingleCard?.location ,
    adoptionFee: SingleCard?.adoptionFee ,
    healthStatus: SingleCard?.healthStatus ,
    vaccinated: SingleCard?.vaccinationStatus ,
    about: SingleCard?.description ,
    image: SingleCard?.petImageUrl ,
  };

  return (
    <div className="min-h-screen container mx-auto bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-white p-6 md:p-12 transition-colors duration-200">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link href="/all-cats">
        <Button className="bg-linear-to-r from-rose-400 to-cyan-400 hover:opacity-90 flex items-center gap-2 text-sm font-medium hover:underline opacity-80 hover:bg-linear-to-l hover:from-rose-400 hover:to-cyan-400 hover:hover:opacity-90">
          <span>←</span> Back to All Pets
        </Button>
        </Link>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Section: Details & Grid (Takes 2 Columns on Large Screens) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Pet Large Image */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 aspect-[16/10]">
            <img 
              src={pet.image} 
              alt={pet.petName} 
              className="w-full h-full object-cover"
            />
            {/* Available Tag */}
            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
              Available
            </span>
          </div>

          {/* Title and Badges */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-extrabold capitalize mb-2">{pet.petName}</h1>
              <div className="flex gap-2">
                <span className="bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs px-3 py-1 rounded-full font-medium">
                  {pet.species}
                </span>
                <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-medium">
                  {pet.breed}
                </span>
              </div>
            </div>
            
            {/* Adoption Fee display for mob/tablet overview */}
            <div className="text-right">
              <p className="text-xs text-slate-500 dark:text-slate-400">Adoption Fee</p>
              <p className="text-3xl font-black text-rose-500">${pet.adoptionFee}</p>
            </div>
          </div>

          {/* 2x4 Grid Specs Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Species */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center">
              <span className="text-2xl text-rose-500">🐾</span>
              <div>
                <p className="text-xs text-slate-400">Species</p>
                <p className="font-semibold">{pet.species}</p>
              </div>
            </div>

            {/* Breed */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center">
              <span className="text-2xl text-rose-500">🐕</span>
              <div>
                <p className="text-xs text-slate-400">Breed</p>
                <p className="font-semibold">{pet.breed}</p>
              </div>
            </div>

            {/* Age */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center">
              <span className="text-2xl text-rose-500">📅</span>
              <div>
                <p className="text-xs text-slate-400">Age</p>
                <p className="font-semibold">{pet.age}</p>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center">
              <span className="text-2xl text-rose-500">📍</span>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="font-semibold text-sm truncate">{pet.location}</p>
              </div>
            </div>

            {/* Adoption Fee */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center">
              <span className="text-2xl text-rose-500">💲</span>
              <div>
                <p className="text-xs text-slate-400">Adoption Fee</p>
                <p className="font-semibold">${pet.adoptionFee}</p>
              </div>
            </div>

            {/* Health Status */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center">
              <span className="text-2xl text-rose-500">🛡️</span>
              <div>
                <p className="text-xs text-slate-400">Health Status</p>
                <p className="font-semibold">{pet.healthStatus}</p>
              </div>
            </div>

            {/* Vaccinated */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 dark:border-none dark:bg-[#161D30] flex gap-3 items-center sm:col-span-2">
              <span className="text-2xl text-rose-500">💉</span>
              <div>
                <p className="text-xs text-slate-400">Vaccinated</p>
                <p className="font-semibold">{pet.vaccinated}</p>
              </div>
            </div>

          </div>

          {/* About Section */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold mb-2">About {pet.petName}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {pet.about}
            </p>
          </div>

        </div>

        {/* Right Section: Form Card (Takes 1 Column) */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-slate-200 dark:border-none dark:bg-[#111827] rounded-2xl p-6 shadow-xl sticky top-6">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-1">
              <span className="text-rose-500">❤️</span> Request to Adopt {pet.petName}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Fill out this form and the owner will review your request.
            </p>

            <form className="space-y-4">
              {/* Pet Name Input */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-80">Pet Name</label>
                <input 
                  type="text" 
                  value={pet.petName}
                  defaultValue={pet.petName}
                  disabled 
                  className="w-full bg-slate-100 font-bold dark:bg-[#1F2937] text-slate-500 dark:text-slate-300 rounded-lg p-2.5 text-sm outline-none border border-slate-200 dark:border-slate-700 capitalize cursor-not-allowed"
                />
              </div>

              {/* Your Name Input */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-80">Your Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 pl-8 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                  <span className="absolute left-2.5 top-3 text-xs opacity-50">👤</span>
                </div>
              </div>

              {/* Your Email Input */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-80">Your Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="yourmail@gmail.com" 
                    className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 pl-8 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                  <span className="absolute left-2.5 top-3 text-xs opacity-50">✉️</span>
                </div>
              </div>

              {/* Preferred Pickup Date */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-80">Preferred Pickup Date</label>
                <input 
                  type="date" 
                  className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none dark:[color-scheme:dark]"
                />
              </div>

              {/* Message to Owner */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-80">Message to Owner</label>
                <textarea 
                  rows="4"
                  placeholder={`Tell the owner why you'd be a great match for ${pet.petName}...`}
                  className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
                ></textarea>
              </div>

              {/* Adopt Gradient Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-400 to-cyan-400 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 mt-2"
              >
                Adopt {pet.petName} 🐾
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardDetailsPage;