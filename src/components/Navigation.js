"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  Home,
  Briefcase,
  Newspaper,
  Lightbulb,
  Users,
  Globe,
  Cpu,
  Search,
  Cloud,
  PhoneCall,
  Code,
  ChevronDown,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "AI", href: "/ai", icon: Zap, isSpecial: true },
  {
    name: "Services",
    href: "/services",
    icon: Briefcase,
    dropdownItems: [
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
    ],
  },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "Innovation", href: "/innovation", icon: Lightbulb },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

const predefinedPositions = [
  // Existing positions
  { x: -3, y: -5 },
  { x: 5, y: 3 },
  { x: -4, y: 7 },
  { x: 6, y: -6 },
  { x: -6, y: -4 },
  { x: 4, y: 6 },
  { x: -5, y: 5 },
  { x: 7, y: -3 },
  { x: -6, y: 4 },
  { x: 5, y: -7 },

  // Additional dots on the left
  { x: -8, y: 0 },
  { x: -10, y: 5 },
  { x: -12, y: -3 },
  { x: -9, y: 8 },
  { x: -11, y: -6 },
  { x: -15, y: 2 },
  { x: -14, y: -4 },
  { x: -13, y: 6 },
  { x: -16, y: -2 },
  { x: -18, y: 4 },

  // Additional dots on the right
  { x: 8, y: -2 },
  { x: 10, y: 4 },
  { x: 12, y: -7 },
  { x: 9, y: 6 },
  { x: 11, y: -5 },
  { x: 14, y: 3 },
  { x: 13, y: -6 },
  { x: 15, y: 0 },
  { x: 16, y: 5 },
  { x: 18, y: -3 },
];

const SparkleEffect = ({ xOffset = 0, yOffset = 0 }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      transform: `translate(${xOffset}px, ${yOffset}px)`, // Offset applied here
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4 }}
  >
    {predefinedPositions.map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-green-400 rounded-full"
        initial={{
          x: pos.x,
          y: pos.y,
          scale: 0,
        }}
        animate={{
          x: pos.x,
          y: pos.y,
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.7,
        }}
      />
    ))}
  </motion.div>
);

export default function Navbar({ isMobile = false }) {
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
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
                    className={`flex items-center space-x-2 w-full justify-start ${
                      item.isSpecial ? "relative overflow-hidden" : ""
                    }`}
                  >
                    <Link href={item.href}>
                      {item.isSpecial && <SparkleEffect />}
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
      className="flex space-x-4"
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
            className={`flex items-center space-x-1 ${
              item.isSpecial ? "relative overflow-hidden" : ""
            }`}
          >
            <Link href={item.href} className="relative">
              {item.isSpecial && <SparkleEffect xOffset={-1} yOffset={0} />}
              <item.icon className="h-4 w-4 z-10" />
              <span className="z-10">{item.name}</span>
            </Link>
          </Button>
        )
      )}
    </motion.nav>
  );
}
