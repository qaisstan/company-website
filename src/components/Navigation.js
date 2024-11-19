"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  Home,
  Briefcase,
  Newspaper,
  Users,
  Globe,
  Cpu,
  Search,
  Cloud,
  PhoneCall,
  Code,
  ChevronDown,
  Zap,
  Repeat,
  BarChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog"; // Add this import for accessibility

const navItems = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "Services",
    href: "/services",
    icon: Briefcase,
    dropdownItems: [
      {
        name: "AI",
        href: "/services/ai",
        icon: Zap,
      },
      {
        name: "Automation",
        href: "/services/automation",
        icon: Repeat,
      },
      {
        name: "Web Development",
        href: "/services/web-development",
        icon: Globe,
      },
      { name: "API Integration", href: "/services/api-integration", icon: Cpu },
      {
        name: "Cloud and Infrastructure",
        href: "/services/cloud-infrastructure",
        icon: Cloud,
      },
      {
        name: "SEO Optimization",
        href: "/services/seo-optimization",
        icon: Search,
      },
      {
        name: "Full-Stack Application Development",
        href: "/services/full-stack-development",
        icon: Code,
      },
      {
        name: "Analytics",
        href: "/services/analytics",
        icon: BarChart,
      },
    ],
  },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

export default function Navbar({ isMobile = false }) {
  const [isSheetOpen, setSheetOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          {/* Add accessible title for SheetContent */}
          <DialogTitle className="hidden">Navigation Menu</DialogTitle>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.dropdownItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="flex items-center space-x-2"
                            onClick={() => setSheetOpen(false)} // Close the Sheet on link click
                          >
                            <dropdownItem.icon className="h-4 w-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className="flex items-center space-x-2 w-full justify-start"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setSheetOpen(false)} // Close the Sheet on link click
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                )}
              </React.Fragment>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex space-x-4 border-none"
    >
      {navItems.map((item) =>
        item.dropdownItems ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.dropdownItems.map((dropdownItem) => (
                <DropdownMenuItem key={dropdownItem.name} asChild>
                  <Link
                    href={dropdownItem.href}
                    className="flex items-center space-x-2"
                  >
                    <dropdownItem.icon className="h-4 w-4" />
                    <span>{dropdownItem.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            key={item.name}
            variant="ghost"
            asChild
            className="flex items-center space-x-1"
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          </Button>
        )
      )}
    </motion.nav>
  );
}
