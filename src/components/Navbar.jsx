"use client";

import Link from "next/link";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaPaw, FaHome, FaSearch, FaPlus, FaCat } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { MdDashboard, MdLogout } from "react-icons/md";

const centerNavLinks = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/all-cats", label: "All Cats", icon: FaSearch },
  { href: "/add-cat", label: "Add Cat", icon: FaPlus },
];

const mobileMenuLinks = [
  { href: "/", label: "Home", icon: FaHome, action: "link" },
  { href: "/all-cats", label: "All Cats", icon: FaSearch, action: "link" },
  { label: "Dashboard", icon: MdDashboard, action: "dashboard" },
  { label: "Logout", icon: MdLogout, action: "logout" },
];

const dashboardLinks = [
  { href: "/dashboard", label: "Overview", icon: MdDashboard },
  { href: "/add-cat", label: "Add Cat", icon: FaPlus },
  { href: "/all-cats", label: "My Cats", icon: FaSearch },
];

const Navbar = () => {
  const user = true;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openDashboardSidebar = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setSidebarOpen(true);
  };

  const closeSidebar = () => setSidebarOpen(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleMobileAction = (action) => {
    if (action === "dashboard") openDashboardSidebar();
    else closeMobileMenu();
  };

  return (
    <>
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/60"
          onClick={closeSidebar}
        />
      )}

      {/* Dashboard sidebar — desktop dropdown + mobile menu */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 flex-col bg-[#0a1628] text-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
              <MdDashboard className="text-lg text-[#081224]" />
            </div>
            <span className="text-lg font-bold">Dashboard</span>
          </div>
          <button
            type="button"
            onClick={closeSidebar}
            className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
            aria-label="Close sidebar"
          >
            <HiX className="text-xl" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 px-4 py-6">
          {dashboardLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeSidebar}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="text-yellow-400" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/10 p-4">
          <button
            type="button"
            onClick={closeSidebar}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-400 hover:bg-red-500/10"
          >
            <MdLogout />
            Logout
          </button>
        </div>
      </aside>

      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#081224]/95 backdrop-blur-md">
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-2">
            {/* Left — logo + name */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 shadow-md shadow-yellow-400/20">
                <FaCat className="text-lg text-[#081224]" />
              </div>
              <h1 className="text-base font-bold tracking-wide text-white sm:text-xl">
                Cat<span className="text-yellow-400">-10</span>
              </h1>
            </Link>

            {/* Middle — desktop only */}
            <div className="hidden items-center justify-center gap-6 lg:flex">
              {centerNavLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
                >
                  <Icon className="text-yellow-400/80" />
                  {label}
                </Link>
              ))}
            </div>

            {/* Right — desktop: dropdown */}
            <div className="hidden items-center justify-end lg:flex">
              {user ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-white/5"
                  >
                    <img
                      src="https://i.ibb.co/4pDNDk1/avatar.png"
                      alt="user"
                      className="h-9 w-9 rounded-full border-2 border-yellow-400 object-cover"
                    />
                    <span className="text-sm font-medium text-white">Moncy</span>
                    <IoChevronDown
                      className={`text-white transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <>
                      <button
                        type="button"
                        aria-label="Close dropdown"
                        className="fixed inset-0 z-40"
                        onClick={() => setDropdownOpen(false)}
                      />
                      <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0f172a] shadow-xl">
                        <button
                          type="button"
                          onClick={openDashboardSidebar}
                          className="flex w-full items-center gap-2 px-4 py-3 text-sm text-gray-200 transition hover:bg-yellow-400 hover:text-black"
                        >
                          <MdDashboard className="text-lg" />
                          Dashboard
                        </button>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(false)}
                          className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500 hover:text-white"
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
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full border border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    <BiLogIn />
                    Login
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#081224] transition hover:bg-yellow-300"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>

            {/* Right — mobile: avatar + name + hamburger */}
            {user && (
              <div className="flex items-center gap-2 lg:hidden">
                <img
                  src="https://i.ibb.co/4pDNDk1/avatar.png"
                  alt="user"
                  className="h-8 w-8 rounded-full border-2 border-yellow-400 object-cover"
                />
                <span className="text-sm font-medium text-white">Moncy</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="rounded-lg p-2 text-white hover:bg-white/10"
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

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && user && (
            <>
              <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                onClick={closeMobileMenu}
              />
              <div className="absolute right-4 top-[calc(100%+4px)] z-50 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#0f172a] shadow-xl lg:hidden">
                {mobileMenuLinks.map((item) =>
                  item.action === "link" ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-200 transition hover:bg-white/10 hover:text-white"
                    >
                      <item.icon className="text-lg text-yellow-400" />
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleMobileAction(item.action)}
                      className={`flex w-full items-center gap-3 px-4 py-3.5 text-sm transition ${
                        item.action === "logout"
                          ? "text-red-400 hover:bg-red-500/10"
                          : "text-gray-200 hover:bg-yellow-400 hover:text-black"
                      }`}
                    >
                      <item.icon className="text-lg text-yellow-400" />
                      {item.label}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
