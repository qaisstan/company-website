"use client";

import Navigation from "@/components/Navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative z-50 flex items-center justify-between p-4">
      {/* Company Logo */}
      <div className="flex items-center space-x-4">
        {mounted && (
          <Image
            src={theme === "dark" ? "/logo-black.png" : "/logo-white.png"}
            alt="Company Logo"
            width={100} // Adjust width as needed
            height={40} // Adjust height as needed
            priority
          />
        )}
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
