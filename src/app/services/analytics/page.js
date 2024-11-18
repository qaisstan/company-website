"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Data Insights",
    description:
      "Transform raw data into actionable insights. Our analytics solutions help you make informed decisions with ease.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Analytics.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Data Insights"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track metrics and KPIs in real time. Stay ahead of the competition with up-to-date insights into your performance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Analytics.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Real-Time Analytics"
        />
      </div>
    ),
  },
  {
    title: "Custom Dashboards",
    description:
      "Create tailored dashboards to visualize the data that matters most to your business.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Analytics.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Custom Dashboards"
        />
      </div>
    ),
  },
  {
    title: "Predictive Analytics",
    description:
      "Utilize AI-driven predictive analytics to anticipate trends and make proactive decisions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Analytics.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Predictive Analytics"
        />
      </div>
    ),
  },
];

export default function AnalyticsPage() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
