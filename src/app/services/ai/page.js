"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Transform the way your team works with advanced collaborative editing capabilities. Empower your team, clients, and stakeholders to work together in real time on projects, documents, and ideas. TrustOn’s AI-powered platform ensures seamless collaboration, enabling you to share files instantly, brainstorm solutions, and finalize decisions faster. Perfect for businesses in content creation, remote work, project management, and creative industries. With our platform, you reduce inefficiencies, align team efforts, and achieve your goals quicker.",
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
      "Say goodbye to outdated workflows with real-time updates that keep your team aligned. TrustOn's real-time collaboration tools enable instant visibility into changes made by team members, preventing confusion and miscommunication. Whether you're designing websites, writing reports, or building applications, you can see updates instantly and keep projects moving forward. Our solution is ideal for dynamic industries such as agile development, digital marketing, e-commerce, and software engineering. Keep your team synchronized and projects on track.",
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
      "Eliminate versioning headaches with TrustOn’s AI-enhanced version control tools. Track, manage, and restore any version of your project with ease. Ensure that every team member is always working on the latest version, reducing errors and saving time. Whether you're a developer managing source code, a designer refining assets, or a writer producing content, our intelligent version control system guarantees continuity and clarity. It’s the ideal solution for professionals in software development, publishing, and creative industries who demand seamless version management.",
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
    title: "AI-Powered Insights",
    description:
      "Unlock the true potential of your data with TrustOn’s AI-powered insights. Our advanced artificial intelligence tools provide predictive analytics, automate repetitive tasks, and uncover patterns that drive smarter decision-making. Whether you’re analyzing market trends, personalizing customer experiences, or streamlining operations, our AI solutions are designed to meet your business’s unique needs. From natural language processing (NLP) to machine learning (ML), our services are tailored for industries such as finance, healthcare, retail, and technology. Stay ahead of the competition with actionable intelligence powered by AI.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI-Powered Insights"
        />
      </div>
    ),
  },
];

export default function AiPage() {
  return (
    <>
      <Head>
        <title>AI Services | TrustOn</title>
        <meta
          name="description"
          content="Explore TrustOn’s comprehensive AI services, including collaborative editing, real-time updates, version control, and AI-powered insights. Revolutionize your business operations with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI services, collaborative editing, real-time updates, version control, predictive analytics, AI-powered insights, machine learning, natural language processing, automation, data-driven decisions, TrustOn AI tools"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
