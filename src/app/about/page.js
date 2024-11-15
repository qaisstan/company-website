"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            About
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            At InnovateTech, we&apos;re passionate about leveraging cutting-edge
            technology to solve complex business challenges. Founded in 2010,
            we&apos;ve grown from a small startup to a leading software
            solutions provider, serving clients across the globe.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our team of expert developers, designers, and strategists work
            tirelessly to deliver innovative solutions that drive growth and
            efficiency for our clients. We specialize in web development, cloud
            solutions, AI integration, and custom software development.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            With a focus on quality, creativity, and client satisfaction,
            we&apos;ve built a reputation for excellence in the tech industry.
            Our commitment to staying at the forefront of technological
            advancements ensures that our clients always receive
            state-of-the-art solutions.
          </p>

          <div className="pt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-[400px] w-full md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Team working together"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
