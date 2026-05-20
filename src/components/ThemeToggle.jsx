"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = ({ className = "" }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/5 ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 transition hover:bg-yellow-400 hover:text-[#081224] dark:border-white/10 dark:bg-white/10 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-[#081224] ${className}`}
    >
      {isDark ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
    </button>
  );
};

export default ThemeToggle;