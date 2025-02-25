"use client";

import React from "react";
import Link from "next/link";
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
      "Build smarter systems that automate tasks, improve processes, and provide insights to help you make better decisions.",
    icon: <Zap />,
    link: "/services/ai",
  },
  {
    title: "Automation",
    description:
      "Make your workflows more efficient and save time by automating repetitive and complex tasks.",
    icon: <Repeat />,
    link: "/services/automation",
  },
  {
    title: "Web Development",
    description:
      "Create modern, responsive websites that look great and work seamlessly on any device.",
    icon: <Globe />,
    link: "/services/web-development",
  },
  {
    title: "API Integration",
    description:
      "Connect your systems with external services to enhance functionality and ensure everything works smoothly together.",
    icon: <Cpu />,
    link: "/services/api-integration",
  },
  {
    title: "Cloud and Infrastructure",
    description:
      "Set up secure and scalable cloud solutions that keep your data accessible and your operations reliable.",
    icon: <Cloud />,
    link: "/services/cloud-infrastructure",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility in search results to help more people find and connect with your business.",
    icon: <Search />,
    link: "/services/seo-optimization",
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Build reliable applications that handle both front-end and back-end needs effectively.",
    link: "/services/full-stack-development",
  },
  {
    title: "Analytics",
    description:
      "Turn your data into clear, actionable insights that make it easier to plan and grow.",
    icon: <BarChart />,
    link: "/services/analytics",
  },
];

export default function AnimatedCardService() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 p-0 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </div>
  );
}

const ServiceCard = ({ title, description, icon, link, index }) => {
  return (
    <Link
      href={link}
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
    </Link>
  );
};
