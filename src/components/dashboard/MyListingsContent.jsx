"use client";

import { Plus } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCat, FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { authClient } from "../../lib/auth-client";

const MyListingsContent = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [myPets, setMyPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:8000/myCards?email=${user.email}`) 
        .then((res) => res.json())
        .then((data) => {
          setMyPets(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Data loading problrm:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (isPending || loading) {
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        Loading listings...
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        My{" "}
        <span className="bg-linear-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent hover:opacity-95 transition-opacity cursor-pointer">
          Listings
        </span>
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Your posted pets will appear here.
      </p>

 
      {myPets.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 py-16 dark:border-gray-600 dark:bg-white/5">
          <FaCat className="mb-4 text-5xl text-yellow-500" />
          <p className="text-gray-500 dark:text-gray-400">No listings yet.</p>
          <Link href="/add-cat">
            <Button
              type="submit"
              className="w-full bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 mt-2"
            >
              <Plus />
              Add Your First Pet
            </Button>
          </Link>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myPets.map((pet) => (
            <Card
              key={pet._id}
              className="relative p-4 rounded-3xl bg-[#0f172a] dark:bg-[#090e1a] text-white border border-gray-800 shadow-xl overflow-hidden"
            >
              
              <span className="absolute top-6 right-6 z-10 bg-emerald-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/50 backdrop-blur-xs">
                Available
              </span>

              
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4">
                <img
                  src={pet.petImageUrl || "https://via.placeholder.com/400"}
                  alt={pet.petName}
                  className="w-full h-full object-cover"
                />
              </div>

              
              <div className="flex justify-between items-start mb-1">
                <h2 className="text-xl font-bold tracking-tight text-white">
                  {pet.petName}
                </h2>
                <span className="text-pink-500 font-bold text-lg">
                  {pet.adoptionFee === "0" || pet.adoptionFee === 0
                    ? "Free"
                    : `$${pet.adoptionFee}`}
                </span>
              </div>

              
              <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                <p>
                  {pet.species} • {pet.breed || "Unknown"}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span>0 requests</span>
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <Button
                  size="sm"
                  className="bg-[#1e293b] hover:bg-gray-700 text-gray-200 rounded-xl font-medium flex items-center justify-center gap-2 border border-gray-700/50"
                >
                  <FaRegEye className="text-base" /> View
                </Button>
                <Button
                  size="sm"
                  className="bg-[#1e293b] hover:bg-gray-700 text-gray-200 rounded-xl font-medium flex items-center justify-center gap-2 border border-gray-700/50"
                >
                  <FaEdit className="text-base" /> Edit
                </Button>
                <Button
                  size="sm"
                  className="bg-[#1e293b] hover:bg-gray-700 text-gray-200 rounded-xl font-medium flex items-center justify-center gap-2 border border-gray-700/50"
                >
                  <LuUsers className="text-base" /> Requests
                </Button>
                <Button
                  size="sm"
                  className="bg-transparent hover:bg-red-950/30 text-red-500 rounded-xl font-medium flex items-center justify-center gap-2 border border-red-900/40"
                >
                  <FaTrashAlt className="text-base" /> Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListingsContent;