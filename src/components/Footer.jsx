import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full bg-white dark:bg-[#050d18] transition-colors duration-300">
      
      {/* 1. Top Gorgeous Gradient Call-to-Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="w-full bg-gradient-to-r from-[#eb5e8d] via-[#a176c4] to-[#25cbd6] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left text-white max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to find your perfect companion?
            </h2>
            <p className="mt-2 text-white/80 text-sm sm:text-base">
              Thousands of pets are waiting for their forever homes.
            </p>
          </div>
          <Link href="/all-pets">
            <button className="flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition shadow-md whitespace-nowrap text-sm sm:text-base group">
              Browse Pets 
              <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* 2. Main Footer Section */}
      <footer className="px-6 py-16 text-gray-600 dark:text-gray-400 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                PetHaven
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Connecting loving families with pets in need. Every adoption saves a life and creates a beautiful bond.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition">
                <FaXTwitter size={14} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition">
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">All Pets</li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">Add a Pet</li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">My Requests</li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">My Listings</li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">About Us</li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">Success Stories</li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">Pet Care Tips</li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition">Why Adopt?</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-pink-500 shrink-0 mt-0.5" />
                <span>123 Paw Street, Animal City, AC 12345</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-pink-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-pink-500 shrink-0" />
                <span className="truncate">hello@pethaven.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-6 md:flex-row text-xs sm:text-sm">
          <p>© 2026 PetHaven. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1 text-gray-500 dark:text-gray-400">
            Made with <span className="text-red-500 text-base">❤️</span> for every pet.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;