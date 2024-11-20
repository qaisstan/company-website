"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Vortex } from "./ui/vortex";
import { useTheme } from "next-themes";

export default function AnimatedHeroSection() {
  const { theme } = useTheme();

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
              Revolutionize Your Digital Landscape
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              className="text-muted-foreground text-xl max-w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Empower your business with innovative software solutions designed
              to drive growth, enhance efficiency, and transform industries.
              TRUSTON is your partner in achieving digital excellence.
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
              >
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg">
                Get a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Vortex>
    </section>
  );
}
