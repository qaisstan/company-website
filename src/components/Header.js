"use client";

import Navigation from "@/components/Navigation";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="relative z-50 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      {/* Company Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold">MyCompany</div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <Navigation />
      </div>

      {/* Theme Toggle and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <ModeToggle /> {/* Add theme toggle */}
        <div className="md:hidden">
          <Navigation isMobile />
        </div>
      </div>
    </header>
  );
}
