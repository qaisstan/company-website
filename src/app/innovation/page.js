"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const innovationItems = [
  {
    title: "SaaS Solutions",
    description:
      "Scalable software-as-a-service platforms tailored to your business needs.",
    icon: Cloud,
  },
  {
    title: "API Integrations",
    description:
      "Seamless connectivity between your systems and third-party services.",
    icon: Code,
  },
  {
    title: "Custom Applications",
    description:
      "Bespoke software solutions designed to address your unique challenges.",
    icon: Zap,
  },
];

export default function InnovationPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Driving Innovation
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions for
            enhanced efficiency and scalability.
          </p>
        </div>

        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Modern Tools for Optimized Workflows
          </h2>
          <p className="text-gray-600 mb-6">
            Our innovative solutions leverage the latest technologies to
            streamline your business processes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>AI-powered automation for repetitive tasks</li>
            <li>Cloud-based collaboration tools for remote teams</li>
            <li>Data analytics platforms for informed decision-making</li>
            <li>Blockchain solutions for enhanced security and transparency</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Innovative Offerings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {innovationItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <item.icon className="h-6 w-6 mr-2 text-blue-500" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Custom Innovation Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            We specialize in developing tailored applications that address your
            unique business challenges. Our team of experts works closely with
            you to create innovative solutions that drive growth and efficiency.
          </p>
          <Button>
            Explore Custom Solutions <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Innovate?</h2>
          <p className="text-gray-600 mb-6">
            Let&apos;s discuss how our cutting-edge solutions can transform your
            business.
          </p>
          <Button size="lg">Get in Touch</Button>
        </section>
      </motion.div>
    </div>
  );
}
