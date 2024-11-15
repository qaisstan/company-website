"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cpu, Cloud, Search, Code } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Create responsive and dynamic websites tailored to your business needs.",
    icon: Globe,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly connect your systems with third-party services and platforms.",
    icon: Cpu,
  },
  {
    title: "Cloud and Infrastructure",
    description:
      "Build scalable and reliable cloud solutions for your applications.",
    icon: Cloud,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your online visibility and drive organic traffic to your website.",
    icon: Search,
  },
  {
    title: "Full-Stack Application Development",
    description: "End-to-end development of robust and scalable applications.",
    icon: Code,
  },
];

export default function AnimatedServiceCards() {
  return (
    <section className="w-full pb-20 md:pb-20 lg:py-20 bg-background">
      <div className="container justify-center px-4 md:px-6">
        <motion.h2
          className="text-3xl  font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardContent>
                  <Button variant="ghost" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
