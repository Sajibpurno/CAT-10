import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 px-6 py-16 text-gray-600 dark:border-white/10 dark:bg-[#050d18] dark:text-gray-400 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white md:text-7xl">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="mb-3 tracking-wide text-gray-900 dark:text-white">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-200 px-4 py-3 dark:bg-gray-800">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <span className="text-lg text-gray-900 dark:text-white">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 tracking-wide text-gray-900 dark:text-white">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">Destinations</li>
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">My Bookings</li>
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3 tracking-wide text-gray-900 dark:text-white">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">Help Center</li>
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
                Terms of Service
              </li>
              <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 tracking-wide text-gray-900 dark:text-white">CONTACT US</h3>
            <ul className="space-y-2">
              <li>786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-300 pt-6 dark:border-gray-800 md:flex-row">
          <p className="text-sm">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="mt-4 flex gap-5 text-lg text-gray-900 dark:text-white md:mt-0">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;