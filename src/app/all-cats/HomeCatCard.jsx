import React from 'react';
import { getAllCatData } from '../../lib/data';
import { FaPaw, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@heroui/react';
const HomeCatCard = async () => {
    const CatData = await getAllCatData();
    const CatSixData = CatData?.slice(0, 6);

    if (!CatSixData || CatSixData.length === 0) {
        return <div className="my-20 text-center text-gray-600 dark:text-gray-400">No cats available right now.</div>;
    }

    return (
        <div className="container mx-auto my-20 px-6">
            <div className="flex justify-between items-center">
            
            <h1 className="mb-8 text-4xl font-bold text-cyan-500">All Cats</h1>
            <Link href="/all-cats">
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-md">View All</button>
            </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CatSixData.map((data) => {
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
                        <div key={_id} className="flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                            
                            <div className="relative h-56 w-full bg-gray-100 dark:bg-gray-900">
                                <img 
                                    src={petImageUrl || "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"} 
                                    alt={petName} 
                                    className="w-full h-full object-cover"
                                />
                                
                                <div className="absolute top-3 left-3 bg-black/40 text-yellow-400 border border-black/10 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm">
                                    <FaPaw className="text-[10px]" />
                                    <span>{species || "Cat"}</span>
                                </div>
                        
                                <div className={`absolute top-3 right-3 border px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                                    healthStatus === 'Healthy' 
                                        ? 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30' 
                                        : 'bg-amber-500/20 text-amber-600 border-amber-500/30'
                                }`}>
                                    {healthStatus || "Available"}
                                </div>
                            </div>
                        
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                
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
                })}
            </div>
        </div>
    );
};

export default HomeCatCard;