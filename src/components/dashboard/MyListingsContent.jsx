"use client";

import { Plus } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaCat } from "react-icons/fa";
import { authClient } from "../../lib/auth-client";
import { useEffect, useState } from "react";
import { getMyCards } from "../../lib/data";
import { Eye, Edit3, Users, Trash2, PawPrint } from "lucide-react"; 
import { DeleteAlert } from "../DeleteAlert";
import { EditModal } from "../EditModal";

const MyListingsContent = () => {
  const { data: session , isPending  } = authClient.useSession();
  console.log(session)
  
  const [myCards, setMyCards] = useState([]);

  useEffect(() => {
  if (session?.user?.email) {
    console.log("Fetching cards for:", session.user.email);
    
    getMyCards(session.user.email)
      .then((data) => {
        console.log("API Response Data:", data); // এখানে চেক করুন ডেটা আসছে কি না
        if (data) {
          setMyCards(data);
        }
      })
      .catch((err) => {
        console.error("Error fetching cards:", err);
      });
  }
}, [session]);

  
  const totalListings = myCards.length;
  
  const availableListings = myCards.filter(card => card.status === 'Available' || !card.status).length;
  const adoptedListings = myCards.filter(card => card.status === 'Adopted').length;

  
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            My{" "}
            <span className="bg-linear-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent hover:opacity-95 transition-opacity cursor-pointer">
              Listings
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your posted pets will appear here.
          </p>
        </div>
        <Link href='/add-cat'>
          <Button 
            type="submit" 
            className="bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 mt-2"
          >
            <Plus/> Add New
          </Button>
        </Link>
      </div>

      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        {/* ১. Total Listings */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 dark:bg-[#0f1422] border border-gray-200 dark:border-gray-800 text-center">
          <span className="text-4xl font-bold text-pink-500 dark:text-pink-400 mb-2">
            {totalListings}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Listings</span>
        </div>

        {/* ২. Available */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 dark:bg-[#0f1422] border border-gray-200 dark:border-gray-800 text-center">
          <span className="text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
            {availableListings}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Available</span>
        </div>

        {/* ৩. Adopted */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 dark:bg-[#0f1422] border border-gray-200 dark:border-gray-800 text-center">
          <span className="text-4xl font-bold text-red-500 dark:text-red-400 mb-2">
            {adoptedListings}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Adopted</span>
        </div>
      </div>
      

      {myCards.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 py-16 dark:border-gray-600 dark:bg-white/5">
          <PawPrint className="mb-4 text-5xl text-yellow-500" />
          <p className="text-gray-500 dark:text-gray-400">No listings yet.</p>
          <Link href='/add-cat'>
            <Button 
              type="submit" 
              className="w-full bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 mt-2"
            >
              <Plus/> Add Your First Pet
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCards.map((card) => {
            const { 
              _id, 
              petName, 
              species, 
              breed, 
              petImageUrl, 
              adoptionFee, 
              description 
            } = card;

            return (
              <div 
                key={_id} 
                className="flex flex-col overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#0f1422] border border-gray-200 dark:border-gray-800 shadow-sm w-full"
              >
                <div className="relative aspect-4/3 w-full bg-gray-200 dark:bg-gray-800">
                  <img 
                    src={petImageUrl || "https://via.placeholder.com/400"} 
                    alt={petName} 
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-600/90 dark:bg-emerald-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs">
                    {card.status || "Available"}
                  </span>
                </div>

                <div className="p-4 flex flex-col grow">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="truncate text-lg font-bold text-gray-900 dark:text-white">
                      {petName || "Pet Name"}
                    </h3>
                    <span className="text-lg font-bold text-pink-500 dark:text-pink-400 shrink-0">
                      ${adoptionFee || "0"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <p className="truncate">
                      {species || "Pet"} • {breed || "Unknown"} • {description || "No description"}
                    </p>
                    <span className="shrink-0">0 requests</span>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <Link href={`/all-cats/${_id}`}>
                      <button className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161c2d] px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                        <Eye size={14} /> View
                      </button>
                    </Link>

                    {/* Edit */}
                    <EditModal card={card} />

                    <button className="flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition">
                      <Users size={14} /> Requests
                    </button>

                    {/* delete part */}
                    <DeleteAlert card={card}/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyListingsContent;