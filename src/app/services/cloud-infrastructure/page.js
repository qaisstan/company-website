"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Scalable Cloud Solutions",
    description:
      "Design and deploy cloud systems that grow with your business, ensuring seamless scalability and performance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Cloud.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Scalable Cloud Solutions"
        />
      </div>
    ),
  },
  {
    title: "Secure Infrastructure",
    description:
      "Build robust cloud environments with industry-leading security measures to protect your data and applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Cloud.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Secure Infrastructure"
        />
      </div>
    ),
  },
  {
    title: "Cost Optimization",
    description:
      "Leverage cloud infrastructure to reduce costs and improve efficiency without compromising on performance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Cloud.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Cost Optimization"
        />
      </div>
    ),
  },
  {
    title: "Reliable Performance",
    description:
      "Ensure high availability and reliability for your applications with state-of-the-art cloud services.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Cloud.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Reliable Performance"
        />
      </div>
    ),
  },
];

export default function CloudInfrastructure() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
