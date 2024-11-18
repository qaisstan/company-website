"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Keyword Research",
    description:
      "Discover the most effective keywords to drive traffic and rank higher in search engines.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/SEO.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Keyword Research"
        />
      </div>
    ),
  },
  {
    title: "Content Optimization",
    description:
      "Enhance your website's content for better visibility, engagement, and conversions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/SEO.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content Optimization"
        />
      </div>
    ),
  },
  {
    title: "Technical SEO",
    description:
      "Fix technical issues to improve site speed, structure, and search engine accessibility.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/SEO.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Technical SEO"
        />
      </div>
    ),
  },
  {
    title: "Analytics and Reporting",
    description:
      "Track your SEO performance with detailed analytics and actionable insights.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/SEO.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Analytics and Reporting"
        />
      </div>
    ),
  },
];

export default function SEOOptimization() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
