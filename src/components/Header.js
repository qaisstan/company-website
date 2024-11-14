"use client";

import Navigation from "@/components/Navigation";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold">MyCompany</div>
      </div>
      <Navigation />
      <div className="flex items-center space-x-4">
        <ModeToggle /> {/* Add the theme toggle */}
        <button className="text-blue-500">Login</button>
      </div>
    </header>
  );
}
