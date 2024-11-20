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
      "Leverage advanced AI systems to automate tasks, optimize processes, and gain valuable insights. TrustOn delivers tailored AI solutions to meet your business needs.",
    icon: <Zap />,
    link: "/services/ai",
  },
  {
    title: "Automation",
    description:
      "Streamline complex workflows and improve efficiency with intelligent automation. Let TrustOn simplify your operations with scalable solutions.",
    icon: <Repeat />,
    link: "/services/automation",
  },
  {
    title: "Web Development",
    description:
      "Design and build fast, responsive, and modern websites that deliver exceptional user experiences across devices. Elevate your digital presence with TrustOn.",
    icon: <Globe />,
    link: "/services/web-development",
  },
  {
    title: "API Integration",
    description:
      "Enhance functionality by integrating external APIs seamlessly into your systems. TrustOn ensures smooth connectivity for improved performance.",
    icon: <Cpu />,
    link: "/services/api-integration",
  },
  {
    title: "Cloud and Infrastructure",
    description:
      "Deploy secure, scalable, and reliable cloud infrastructure solutions tailored to your business needs. TrustOn helps you harness the power of the cloud.",
    icon: <Cloud />,
    link: "/services/cloud-infrastructure",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website's search engine visibility and drive traffic with data-driven SEO strategies. TrustOn ensures your site ranks higher and attracts the right audience.",
    icon: <Search />,
    link: "/services/seo-optimization",
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Develop feature-rich and high-performance full-stack applications tailored to your business needs. TrustOn specializes in reliable and scalable solutions.",
    icon: <Code />,
    link: "/services/full-stack-development",
  },
  {
    title: "Analytics",
    description:
      "Transform raw data into actionable insights with intuitive and powerful analytics tools. TrustOn empowers your decision-making with data-driven strategies.",
    icon: <BarChart />,
    link: "/services/analytics",
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
