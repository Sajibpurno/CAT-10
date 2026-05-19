"use client";

import { FaCat } from "react-icons/fa";

const MyListingsContent = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        My Listings
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Your posted pets will appear here.
      </p>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 py-16 dark:border-gray-600 dark:bg-white/5">
        <FaCat className="mb-4 text-5xl text-yellow-500" />
        <p className="text-gray-500 dark:text-gray-400">No listings yet.</p>
      </div>
    </div>
  );
};

export default MyListingsContent;
