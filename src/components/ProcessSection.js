"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const processSteps = [
  {
    step: "1",
    icon: "🎯",
    title: "Consultation & Discovery",
    description:
      "We start by understanding your vision, goals, and challenges through in-depth discussions and requirement analysis.",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    step: "2",
    icon: "📋",
    title: "Planning & Strategy",
    description:
      "Our team creates a comprehensive roadmap, including technical architecture, timeline, and resource allocation.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    step: "3",
    icon: "⚙️",
    title: "Development & Testing",
    description:
      "We follow agile methodology with regular sprints, code reviews, and thorough testing procedures.",
    color: "from-pink-500/20 to-orange-500/20",
  },
  {
    step: "4",
    icon: "🚀",
    title: "Deployment & Optimization",
    description:
      "Your solution is deployed with careful monitoring and performance optimization for the best results.",
    color: "from-orange-500/20 to-green-500/20",
  },
  {
    step: "5",
    icon: "🌱",
    title: "Ongoing Support & Growth",
    description:
      "We provide continuous support, updates, and improvements to ensure long-term success.",
    color: "from-green-500/20 to-blue-500/20",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            🛠 Our Process – How We Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery and
            exceeds expectations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 mb-12 relative"
            >
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b bg-border/50 -z-10" />
              )}

              <div
                className={`w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-inner`}
              >
                <span className="text-3xl">{step.icon}</span>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {step.step}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-10 flex justify-center mx-auto"
        >
          <Link href="/contact">Book a call</Link>
        </Button>
      </div>
    </section>
  );
}
