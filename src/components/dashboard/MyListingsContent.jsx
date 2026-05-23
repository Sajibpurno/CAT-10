"use client";

import { Plus } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import { useEffect, useState } from "react";
import { Eye, PawPrint } from "lucide-react"; 
import { DeleteAlert } from "../DeleteAlert";
import { EditModal } from "../EditModal";
import { AdoptionRequestsModal } from "../AdoptionRequestsModal";

const MyListingsContent = () => {
  const { data: session } = authClient.useSession();
  const [myCards, setMyCards] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      const fetchCards = async () => {
        try {
          // ✅ TOKEN নাও
          const { data: tokenData } = await authClient.token();
          const token = tokenData?.token;

          // ✅ সরাসরি fetch করো
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/myCards?email=${session.user.email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
              }
            }
          );

          const data = await res.json();
          setMyCards(data || []);
          setLoad(false);
        } catch (err) {
          console.error("Error:", err);
          setLoad(false);
        }
      };

      fetchCards();
    }
  }, [session?.user?.email]);

  const totalListings = myCards.length;
  const availableListings = myCards.filter(card => card.status === 'Available' || !card.status).length;
  const adoptedListings = myCards.filter(card => card.status === 'Adopted').length;

  if (load) {
    return <div className="flex h-64 items-center justify-center"><p>Loading...</p></div>;
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            My Listings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Your posted pets will appear here.</p>
        </div>
        <Link href='/add-cat'>
          <Button className="bg-linear-to-r from-yellow-400 to-gray-400">
            <Plus/> Add New
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 dark:bg-[#0f1422]">
          <span className="text-4xl font-bold text-pink-500">{totalListings}</span>
          <span className="text-sm text-gray-500 mt-1">Total Listings</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 dark:bg-[#0f1422]">
          <span className="text-4xl font-bold text-emerald-500">{availableListings}</span>
          <span className="text-sm text-gray-500 mt-1">Available</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 dark:bg-[#0f1422]">
          <span className="text-4xl font-bold text-red-500">{adoptedListings}</span>
          <span className="text-sm text-gray-500 mt-1">Adopted</span>
        </div>
      </div>

      {myCards.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-16">
          <PawPrint className="text-5xl text-yellow-500 mb-4" />
          <p className="text-gray-500">No listings yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCards.map((card) => (
            <div key={card._id} className="flex flex-col overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#0f1422]">
              <div className="relative aspect-4/3 w-full bg-gray-200">
                <img src={card.petImageUrl || "https://via.placeholder.com/400"} alt={card.petName} className="h-full w-full object-cover" />
                <span className="absolute top-3 right-3 rounded-full bg-emerald-600/90 px-3 py-1 text-xs text-white">
                  {card.status || "Available"}
                </span>
              </div>

              <div className="p-4 flex flex-col grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold">{card.petName}</h3>
                  <span className="text-lg font-bold text-pink-500">${card.adoptionFee || "0"}</span>
                </div>

                <p className="text-xs text-gray-500 mb-4">{card.species} • {card.breed}</p>

                <div className="mt-auto grid grid-cols-2 gap-2">
                  <Link href={`/all-cats/${card._id}`}>
                    <button className="flex items-center justify-center gap-1.5 rounded-lg border w-full py-2 text-xs">
                      <Eye size={14} /> View
                    </button>
                  </Link>
                  <EditModal card={card} />
                  <AdoptionRequestsModal card={card} />
                  <DeleteAlert card={card}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListingsContent;