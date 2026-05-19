import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaPaw, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const Catcard = ({ data }) => {
  const { 
    _id,
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

    <div className="flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      
      {/* Top Image Section */}
      <div className="relative h-56 w-full bg-gray-100 dark:bg-gray-900">
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
          
          <h2 className="mb-1 text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
            {petName}
          </h2>
          
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {breed || "Unknown Breed"} • {age} years old • {gender}
          </p>
        </div>

        
        <div className="space-y-2 border-t border-gray-100 pt-3 dark:border-gray-700">
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="text-pink-500 text-xs shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          {/* Adoption Fee */}
          <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <FaDollarSign className="text-cyan-600 text-xs shrink-0" />
            <span>
              {Number(adoptionFee) === 0 ? (
                <span className="text-emerald-600 font-bold">Free Adoption</span>
              ) : (
                <span className="text-gray-700 dark:text-gray-200">{adoptionFee} adoption fee</span>
              )}
            </span>
          </div>
        </div>

        {/* Button Section */}
        <div className="pt-2">
          
          <Link href={`/all-cats/${_id}`}>
          <Button 
            variant="outline"
            className="w-full rounded-xl border border-gray-200/50 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 transition duration-200 hover:bg-cyan-500 hover:text-white dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          >
            View Details
          </Button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Catcard;