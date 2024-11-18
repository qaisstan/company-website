"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "End-to-End Solutions",
    description:
      "Delivering comprehensive development from frontend to backend, ensuring seamless functionality and performance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="End-to-End Solutions"
        />
      </div>
    ),
  },
  {
    title: "User-Centric Frontend",
    description:
      "Create intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="User-Centric Frontend"
        />
      </div>
    ),
  },
  {
    title: "Scalable Backend",
    description:
      "Design and implement robust backend systems that handle complex processes and scale with your business.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Scalable Backend"
        />
      </div>
    ),
  },
  {
    title: "Integration and Deployment",
    description:
      "Seamlessly integrate APIs and deploy applications with cutting-edge tools and technologies.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Integration and Deployment"
        />
      </div>
    ),
  },
];

export default function FullStackDevelopment() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
