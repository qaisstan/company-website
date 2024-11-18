"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Workflow Optimization",
    description:
      "Streamline repetitive tasks and improve productivity with intelligent automation tailored to your needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Automation.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Workflow Optimization"
        />
      </div>
    ),
  },
  {
    title: "Intelligent Task Management",
    description:
      "Automate mundane tasks and focus on what matters most. Our solutions help you save time and resources.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Automation.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Intelligent Task Management"
        />
      </div>
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate automation tools into your existing systems effortlessly, ensuring a smooth workflow.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Automation.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Seamless Integration"
        />
      </div>
    ),
  },
  {
    title: "Scalable Automation",
    description:
      "Build scalable automation processes that grow with your business and adapt to evolving needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Automation.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Scalable Automation"
        />
      </div>
    ),
  },
];

export default function AutomationPage() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
