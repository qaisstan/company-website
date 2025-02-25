"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">TRUSTON</h2>
            <p className="text-sm">
              Practical Solutions for Everyday Challenges
            </p>
            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              {/* <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/company/truston-dev/"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ai"
                  className="hover:text-white transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation"
                  className="hover:text-white transition-colors"
                >
                  Automation
                </Link>
              </li>
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
              <li>
                <Link
                  href="/services/analytics"
                  className="hover:text-white transition-colors"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive the latest updates and
              industry insights.
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

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © {currentYear} TRUSTON. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            {/* <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link> */}
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>Qais@truston.dev</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
