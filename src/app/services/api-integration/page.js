"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Seamless Integration",
    description:
      "Easily connect your applications with third-party APIs to extend their functionality and improve user experience. TrustOn’s seamless integration services ensure smooth communication between systems, enabling you to integrate payment gateways, social media platforms, cloud services, and more. Our experts simplify the process, helping businesses streamline workflows, enhance operational efficiency, and unlock the full potential of their applications.",
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
      "Create APIs that are tailored to your business’s unique requirements. Whether you need APIs for mobile apps, web applications, or internal tools, TrustOn specializes in developing robust, scalable, and secure APIs. Our custom API solutions are designed to improve communication between systems, optimize performance, and provide flexibility for future growth. Ideal for industries like e-commerce, healthcare, SaaS, and financial services.",
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
    title: "Real-Time Data Synchronization",
    description:
      "Enable real-time data exchange between platforms with our data synchronization solutions. TrustOn ensures that your systems stay updated with the latest information, improving accuracy and efficiency. Real-time synchronization is crucial for businesses managing large-scale operations, inventory tracking, or financial transactions. Our solutions are designed to support fast, reliable data exchange across multiple applications, ensuring your business runs smoothly and without delays.",
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
      "Protect your sensitive data with TrustOn’s robust API security protocols. We implement advanced authentication, encryption, and threat detection systems to ensure that your APIs are safe from unauthorized access and breaches. Our security solutions are designed to safeguard communication between systems, giving businesses peace of mind. Whether you’re handling customer data, processing financial transactions, or managing internal communications, our API security solutions are tailored to meet the highest industry standards.",
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
    <>
      <Head>
        <title>API Integration Services | TrustOn</title>
        <meta
          name="description"
          content="Explore TrustOn's API integration services, including seamless integration, custom API development, real-time data synchronization, and robust API security. Enhance your systems with cutting-edge solutions."
        />
        <meta
          name="keywords"
          content="API integration, custom API development, real-time data synchronization, API security, third-party API integration, secure APIs, data exchange solutions, API development services, TrustOn API solutions"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
