"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">TrustOn</h2>
            <p className="text-sm">
              Empowering businesses through innovative software solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/api-integration"
                  className="hover:text-white transition-colors"
                >
                  API Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-infrastructure"
                  className="hover:text-white transition-colors"
                >
                  Cloud and Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-optimization"
                  className="hover:text-white transition-colors"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/full-stack-development"
                  className="hover:text-white transition-colors"
                >
                  Full-Stack Application Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and
              innovations.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © {currentYear} TRUSTON. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>123 Innovation Street, Tech City, TC 12345</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>contact@truston.dev</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
