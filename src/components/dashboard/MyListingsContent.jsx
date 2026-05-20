"use client";

import { Plus } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaCat } from "react-icons/fa";

const MyListingsContent = () => {
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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 py-16 dark:border-gray-600 dark:bg-white/5">
        <FaCat className="mb-4 text-5xl text-yellow-500" />
        <p className="text-gray-500 dark:text-gray-400">No listings yet.</p>
      <Link href='/add-cat'>
      <Button type="submit" 
                className="w-full bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 text-white font-bold hover:bg-linear-to-l hover:from-yellow-400 hover:to-gray-400 py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 mt-2">
                <Plus/>
         Add Your First Pet
      </Button>
      </Link>
      </div>
    </div>
  );
};

export default MyListingsContent;
