"use client";

import { useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FaPlus, FaListUl } from "react-icons/fa";
import { MdDashboard, MdLogout } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";
import { useDashboard } from "../../context/DashboardContext";
import AddCatForm from "./AddCatForm";
import MyListingsContent from "./MyListingsContent";
import MyRequestsContent from "./MyRequestsContent";

const sidebarItems = [
  { id: "listings", label: "My Listings", icon: FaListUl },
  { id: "requests", label: "My Request", icon: IoMdPaw },
  { id: "add-cat", label: "Add Pet", icon: FaPlus },
];

const DashboardPanel = () => {
  const { sidebarOpen, activeTab, setActiveTab, closeDashboard } = useDashboard();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  if (!sidebarOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "add-cat":
        return <AddCatForm />;
      case "requests":
        return <MyRequestsContent />;
      case "listings":
      default:
        return <MyListingsContent />;
    }
  };

  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 z-40 flex flex-col bg-gray-100 dark:bg-[#0f172a] md:flex-row">
      <aside className="flex w-full shrink-0 flex-col border-b border-gray-200 bg-white dark:border-white/10 dark:bg-[#0a1628] md:h-full md:w-72 md:border-b-0 md:border-r">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
              <MdDashboard className="text-lg text-[#081224]" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Dashboard
            </span>
          </div>
          <button
            type="button"
            onClick={closeDashboard}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close dashboard"
          >
            <HiX className="text-xl" />
          </button>
        </div>

        <ul className="flex flex-row gap-1 overflow-x-auto p-3 md:flex-col md:overflow-visible md:p-4 md:py-6">
          {sidebarItems.map(({ id, label, icon: Icon }) => (
            <li key={id} className="min-w-fit md:w-full">
              <button
                type="button"
                onClick={() => setActiveTab(id)}
                className={`flex w-full items-center gap-3 whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium transition ${
                  activeTab === id
                    ? "bg-yellow-400 text-[#081224]"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                <Icon
                  className={
                    activeTab === id
                      ? "text-[#081224]"
                      : "text-yellow-500 dark:text-yellow-400"
                  }
                />
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-auto hidden border-t border-gray-200 p-4 dark:border-white/10 md:block">
          <button
            type="button"
            onClick={closeDashboard}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 font-semibold text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
          >
            <MdLogout />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-gray-50 p-5 dark:bg-[#0f172a] sm:p-8">
        <div className="mx-auto max-w-4xl">{renderContent()}</div>
      </main>
    </div>
  );
};

export default DashboardPanel;
