"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Seamless Integration",
    description:
      "Connect your systems effortlessly with third-party APIs. Enhance your application's functionality with seamless integration solutions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Api.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Seamless Integration"
        />
      </div>
    ),
  },
  {
    title: "Custom API Development",
    description:
      "Build tailored APIs to meet your unique business needs. Our solutions ensure reliability and scalability.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Api.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Custom API Development"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Data Sync",
    description:
      "Enable real-time data synchronization across platforms. Keep your systems updated with the latest information effortlessly.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Api.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Real-Time Data Sync"
        />
      </div>
    ),
  },
  {
    title: "API Security",
    description:
      "Implement robust security protocols to protect sensitive data and ensure safe communication between systems.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Api.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="API Security"
        />
      </div>
    ),
  },
];

export default function ApiIntegration() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
