"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AnimatedHeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-25 xl:py-25 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col justify-center items-center text-center space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Revolutionize Your Digital Landscape
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-xl max-w-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Harness the power of cutting-edge software solutions to propel your
            business into the future. We deliver innovative technologies that
            transform industries.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg">
              Get a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
