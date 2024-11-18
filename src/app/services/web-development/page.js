"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Responsive Design",
    description:
      "Build websites that adapt seamlessly to any device, offering a great user experience across desktop, tablet, and mobile platforms.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Webdevelopment.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Responsive Design"
        />
      </div>
    ),
  },
  {
    title: "Custom Development",
    description:
      "Tailor-made solutions designed to meet your unique business needs, ensuring functionality and scalability.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Webdevelopment.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Custom Development"
        />
      </div>
    ),
  },
  {
    title: "E-commerce Platforms",
    description:
      "Create robust and scalable online stores to enhance your sales and deliver a seamless shopping experience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Webdevelopment.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="E-commerce Platforms"
        />
      </div>
    ),
  },
  {
    title: "Website Maintenance",
    description:
      "Ensure your website remains up-to-date, secure, and optimized with our continuous support services.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Webdevelopment.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Website Maintenance"
        />
      </div>
    ),
  },
];

export default function WebDevelopment() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
