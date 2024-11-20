"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Workflow Optimization",
    description:
      "Revolutionize your operations with TRUSTON’s workflow optimization services. We use intelligent automation to streamline repetitive tasks, reduce human error, and improve productivity. From automating data entry to managing supply chains, our solutions are tailored to your unique needs. Ideal for industries like manufacturing, healthcare, retail, and logistics, workflow automation helps businesses save time, reduce costs, and focus on strategic goals.",
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
      "Automate repetitive and mundane tasks with TRUSTON’s intelligent task management solutions. Free up valuable time and resources, allowing your team to focus on high-value activities. Whether it’s automating email responses, scheduling, or inventory updates, our automation tools are designed to increase efficiency. This is perfect for businesses in customer service, e-commerce, and administration that want to improve operations without increasing workload.",
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
      "Integrate advanced automation tools into your existing systems with ease. TRUSTON ensures a seamless connection between automation workflows and your current technology stack, including CRMs, ERPs, and cloud platforms. By ensuring smooth integration, we help businesses reduce downtime and ensure consistent performance. Perfect for enterprises looking to enhance operational efficiency without overhauling their systems.",
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
      "Future-proof your operations with scalable automation solutions from TRUSTON. As your business grows, our automation processes adapt to your evolving needs, ensuring continuous efficiency. From small businesses to large enterprises, our solutions are built to handle increasing complexity and volume. Whether you’re scaling production, managing a growing customer base, or expanding globally, TRUSTON’s scalable automation is your reliable partner in growth.",
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
    <>
      <Head>
        <title>Automation Services | TRUSTON</title>
        <meta
          name="description"
          content="Discover TRUSTON's automation services, including workflow optimization, task management, seamless integration, and scalable solutions. Automate processes and enhance efficiency."
        />
        <meta
          name="keywords"
          content="automation services, workflow optimization, intelligent task management, seamless integration, scalable automation, business automation, TRUSTON automation tools, process automation solutions"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
