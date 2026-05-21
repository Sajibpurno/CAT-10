"use client";

import { authClient } from "../lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaHome, FaSearch, FaPlus, FaCat } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { MdDashboard, MdLogout } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { useDashboard } from "../context/DashboardContext";
import { Avatar } from "@heroui/react";
import { PawPrint } from "lucide-react";

const centerNavLinks = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/all-cats", label: "All Pets", icon: FaSearch },
];

const mobileMenuLinks = [
  { href: "/", label: "Home", icon: FaHome, action: "link" },
  { href: "/all-cats", label: "All Pets", icon: FaSearch, action: "link" },
  { label: "Dashboard", icon: MdDashboard, action: "dashboard" },
  { label: "Logout", icon: MdLogout, action: "logout" },
];

const Navbar = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user;
  // console.log(user)   

  // const user = true;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDashboard } = useDashboard();

  const openDashboardSidebar = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    openDashboard("listings");
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleMobileAction = (action) => {
    if (action === "dashboard") openDashboardSidebar();
    else closeMobileMenu();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 text-gray-900 backdrop-blur-md dark:border-white/10 dark:bg-[#081224]/95 dark:text-white">
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 shadow-md shadow-yellow-400/20">
              <PawPrint className="text-lg text-[#081224]" />
            </div>
            <h1 className="text-base font-bold tracking-wide sm:text-xl">
              Pet<span className="text-yellow-500 dark:text-yellow-400">Haven</span>
            </h1>
          </Link>   

          <div className="hidden items-center justify-center gap-6 lg:flex">
            {centerNavLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Icon className="text-yellow-500 dark:text-yellow-400/80" />
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <ThemeToggle />

            {user ? (
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                    <Avatar.Image alt={user.name} src={user?.image} />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar> 
                  <span className="text-sm font-medium">{user.name}</span>
                  </div>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className=" rounded-full py-1 pl-1 pr-2 transition hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  <IoChevronDown
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                </div>

                {dropdownOpen && (
                  <>
                    <button
                      type="button"
                      aria-label="Close dropdown"
                      className="fixed inset-0 z-40"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0f172a]">
                      <button
                        type="button"
                        onClick={openDashboardSidebar}
                        className="flex w-full items-center gap-2 px-4 py-3 text-sm text-gray-700 transition hover:bg-yellow-400 hover:text-black dark:text-gray-200"
                      >
                        <MdDashboard className="text-lg" />
                        Dashboard
                      </button>
                      <button
                        type="button"
                        onClick={async () => { setDropdownOpen(false); await authClient.signOut(); }}
                        className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-500 transition hover:bg-red-50 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white"
                      >
                        <MdLogout className="text-lg" />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full border border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-400 hover:text-black dark:text-yellow-400"
                >
                  <BiLogIn />
                  Login
                </button>
                </Link>
                <Link href="/signup">
                <button
                  type="button"
                  className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#081224] transition hover:bg-yellow-300"
                >
                  Get started
                </button>
                </Link>
              </div>
            )}
          </div>

          {user && (
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <img
                src="https://i.ibb.co/4pDNDk1/avatar.png"
                alt="user"
                className="h-8 w-8 rounded-full border-2 border-yellow-400 object-cover"
              />
              <span className="text-sm font-medium">Moncy</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenuAlt3 className="text-2xl" />
                )}
              </button>
              
            </div>
          )}
        </div>

        {mobileMenuOpen && user && (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={closeMobileMenu}
            />
            <div className="absolute right-4 top-[calc(100%+4px)] z-50 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl lg:hidden dark:border-white/10 dark:bg-[#0f172a]">
              {mobileMenuLinks.map((item) =>
                item.action === "link" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <item.icon className="text-lg text-yellow-500 dark:text-yellow-400" />
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleMobileAction(item.action)}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-sm transition ${
                      item.action === "logout"
                        ? "text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                        : "text-gray-700 hover:bg-yellow-400 hover:text-black dark:text-gray-200"
                    }`}
                  >
                    <item.icon className="text-lg text-yellow-500 dark:text-yellow-400" />
                    {item.label}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;