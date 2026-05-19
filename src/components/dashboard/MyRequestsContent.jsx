"use client";

import { FaSearch } from "react-icons/fa";

const MyRequestsContent = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        My Request
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Adoption requests you sent will appear here.
      </p>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 py-16 dark:border-gray-600 dark:bg-white/5">
        <FaSearch className="mb-4 text-5xl text-yellow-500" />
        <p className="text-gray-500 dark:text-gray-400">No requests yet.</p>
      </div>
    </div>
  );
};

export default MyRequestsContent;
