import React from 'react';
import { FaPaw, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const Catcard = ({ data }) => {
  const { 
    petName, 
    breed, 
    age, 
    gender, 
    location, 
    adoptionFee, 
    petImageUrl, 
    species, 
    healthStatus 
  } = data;

  return (

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-cyan-500 flex flex-col justify-between">
      
      {/* Top Image Section */}
      <div className="relative w-full h-56 bg-gray-100">
        <img 
          src={petImageUrl || "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"} 
          alt={petName} 
          className="w-full h-full object-cover"
        />
        
        {/* Species Tag (Top Left) */}
        
        <div className="absolute top-3 left-3 bg-black/40 text-yellow-400 border border-black/10 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm">
          <FaPaw className="text-[10px]" />
          <span>{species || "Cat"}</span>
        </div>

        {/* Health Status Tag (Top Right) */}
        <div className={`absolute top-3 right-3 border px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
          healthStatus === 'Healthy' 
            ? 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30' 
            : 'bg-amber-500/20 text-amber-600 border-amber-500/30'
        }`}>
          {healthStatus || "Available"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Main Info */}
        <div>
          
          <h2 className="text-gray-800 text-2xl font-bold tracking-wide mb-1">
            {petName}
          </h2>
          
          <p className="text-gray-500 text-sm font-medium">
            {breed || "Unknown Breed"} • {age} years old • {gender}
          </p>
        </div>

        
        <div className="space-y-2 pt-3 border-t border-gray-100">
          
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaMapMarkerAlt className="text-pink-500 text-xs shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          {/* Adoption Fee */}
          <div className="flex items-center gap-1.5 text-gray-600 text-sm font-semibold">
            <FaDollarSign className="text-cyan-600 text-xs shrink-0" />
            <span>
              {Number(adoptionFee) === 0 ? (
                <span className="text-emerald-600 font-bold">Free Adoption</span>
              ) : (
                <span className="text-gray-700">{adoptionFee} adoption fee</span>
              )}
            </span>
          </div>
        </div>

        {/* Button Section */}
        <div className="pt-2">
          
          <button 
            type="button" 
            className="w-full bg-gray-100 hover:bg-cyan-500 hover:text-white text-gray-700 text-sm font-semibold py-3 px-4 rounded-xl transition duration-200 border border-gray-200/50"
          >
            View Details
          </button>
        </div>

      </div>

    </div>
  );
};

export default Catcard;