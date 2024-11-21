"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mansoor Najmee",
    role: "CTO, Najme.com",
    content:
      "Their API integration streamlined our processes and saved us a ton of time.",
    avatar: "/placeholder.jpg",
  },
  {
    id: 2,
    name: "Josef Ahmadi",
    role: "Founder, StartupCrypto",
    content:
      "They delivered a complex app on time, and it works perfectly for our needs.",
    avatar: "/placeholder.jpg",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Marketing Director, GrowthCo",
    content: "The SEO optimization services improved our online visibility.",
    avatar: "/placeholder.jpg",
  },
];

export default function EnhancedAnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-10  from-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="border-none shadow-xl bg-background/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <Avatar className="w-24 h-24 border-4 border-primary/10">
                        <AvatarImage
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                        />
                        <AvatarFallback>
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                        <Quote className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                    <blockquote className="text-lg italic max-w-2xl">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </blockquote>
                    <div>
                      <p className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
