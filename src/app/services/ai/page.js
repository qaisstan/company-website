"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Collaborative Editing"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Changes",
    description:
      "See changes as they happen. Track every modification in real time and ensure alignment across your team without confusion or delays.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Real-Time Changes"
        />
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Eliminate the stress of version control. Stay updated with real-time versions of your project and maintain uninterrupted workflows.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Version Control"
        />
      </div>
    ),
  },
  {
    title: "AI Features",
    description:
      "Our AI solutions simplify complex tasks, offering intelligent insights to help you make data-driven decisions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI Features"
        />
      </div>
    ),
  },
];

export default function AiPage() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
