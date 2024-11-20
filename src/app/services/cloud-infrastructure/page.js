"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Scalable Cloud Solutions",
    description:
      "Empower your business with scalable cloud solutions designed to grow alongside your needs. At TrustOn, we specialize in creating and deploying cloud architectures that adapt to your business's evolving demands. Whether you’re managing increased traffic, expanding operations, or scaling global services, our solutions ensure seamless scalability and unmatched performance. Perfect for industries like e-commerce, SaaS, and enterprise IT, our cloud solutions allow you to stay agile in today’s competitive landscape.",
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
      "Protect your data and applications with TrustOn’s secure cloud infrastructure solutions. We implement industry-leading security measures, including encryption, identity access management, and threat monitoring, to safeguard sensitive information and prevent unauthorized access. Whether you handle financial data, healthcare records, or intellectual property, our robust security protocols ensure peace of mind and compliance with global data protection regulations. Partner with TrustOn to build a cloud environment that prioritizes safety and reliability.",
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
      "Maximize your return on investment with TrustOn’s cloud cost optimization services. We help businesses leverage cloud infrastructure to reduce operational costs, eliminate unnecessary expenses, and improve overall efficiency. By analyzing your usage patterns, we design cost-effective solutions tailored to your needs, ensuring you only pay for what you use. Ideal for startups, enterprises, and businesses transitioning to the cloud, our optimization strategies combine performance and savings for long-term success.",
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
      "Achieve unparalleled reliability and availability for your applications with TrustOn’s cloud services. Our solutions are designed to ensure consistent performance, minimize downtime, and provide a seamless user experience. Whether hosting mission-critical applications, running enterprise systems, or delivering global services, our state-of-the-art cloud infrastructure guarantees that your operations remain uninterrupted. TrustOn’s commitment to reliability keeps your business running smoothly, 24/7.",
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
    <>
      <Head>
        <title>Cloud Infrastructure Services | TrustOn</title>
        <meta
          name="description"
          content="Explore TrustOn's cloud infrastructure services, including scalable cloud solutions, secure infrastructure, cost optimization, and reliable performance. Empower your business with cutting-edge cloud technology."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, scalable cloud solutions, secure infrastructure, cloud cost optimization, reliable cloud performance, cloud hosting, cloud security, TrustOn cloud services"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
