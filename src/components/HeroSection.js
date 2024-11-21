"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Vortex } from "./ui/vortex";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function AnimatedHeroSection() {
  const { theme } = useTheme();

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 md:py-20 lg:py-25 xl:py-25 mb-8 md:mb-12 lg:mb-16 xl:mb-20">
      <Vortex removeBackground>
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col justify-center items-center text-center space-y-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Title */}
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Practical Solutions for Everyday Challenges
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              className=" text-xl max-w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We create software that solves problems, saves time, and makes
              complex tasks easier to manage.
            </motion.p>

            {/* Call-to-Actions */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={scrollToServices}
              >
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Vortex>
    </section>
  );
}
