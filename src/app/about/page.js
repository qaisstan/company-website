"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 max-w-3xl"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          At InnovateTech, we&apos;re passionate about leveraging cutting-edge
          technology to solve complex business challenges. Founded in 2010,
          we&apos;ve grown from a small startup to a leading software solutions
          provider, serving clients across the globe.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Our team of expert developers, designers, and strategists work
          tirelessly to deliver innovative solutions that drive growth and
          efficiency for our clients. We specialize in web development, cloud
          solutions, AI integration, and custom software development.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          With a focus on quality, creativity, and client satisfaction,
          we&apos;ve built a reputation for excellence in the tech industry. Our
          commitment to staying at the forefront of technological advancements
          ensures that our clients always receive state-of-the-art solutions.
        </p>
        <motion.div
          className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Team working together"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="pt-6 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.div>
  );
}
