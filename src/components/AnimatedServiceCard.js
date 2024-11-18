"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  Cpu,
  Cloud,
  Search,
  Code,
  Zap,
  BarChart,
  Repeat,
} from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    description:
      "Implement advanced AI systems to automate tasks and unlock valuable insights.",
    icon: <Zap />,
  },
  {
    title: "Automation",
    description:
      "Simplify complex workflows with intelligent, automated solutions.",
    icon: <Repeat />,
  },
  {
    title: "Web Development",
    description:
      "Build fast, modern websites that provide seamless user experiences.",
    icon: <Globe />,
  },
  {
    title: "API Integration",
    description:
      "Integrate external services to enhance your system's functionality.",
    icon: <Cpu />,
  },
  {
    title: "Cloud and Infrastructure",
    description:
      "Deploy scalable and secure cloud systems tailored to your needs.",
    icon: <Cloud />,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your site's visibility with data-driven search optimization.",
    icon: <Search />,
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Create feature-rich applications with a focus on performance and reliability.",
    icon: <Code />,
  },
  {
    title: "Analytics",
    description:
      "Transform your data into actionable insights with intuitive analytics tools.",
    icon: <BarChart />,
  },
];

export default function AnimatedCardService() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 p-0 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  );
}

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
