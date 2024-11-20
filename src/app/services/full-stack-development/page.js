"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "End-to-End Solutions",
    description:
      "TrustOn provides comprehensive full-stack development services, covering every aspect of your application from frontend to backend. Our expert developers ensure seamless functionality, exceptional performance, and a unified user experience. Whether you’re building a web application, mobile app, or enterprise software, our end-to-end solutions guarantee smooth integration and flawless execution, empowering businesses across industries such as e-commerce, healthcare, SaaS, and finance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="End-to-End Solutions"
        />
      </div>
    ),
  },
  {
    title: "User-Centric Frontend",
    description:
      "Create visually stunning and intuitive interfaces that captivate users and elevate engagement. At TrustOn, we focus on crafting user-centric frontend designs that not only look great but also deliver smooth navigation and a memorable user experience. Using the latest technologies like React, Next.js, and Vue.js, we design interfaces tailored to your brand and audience, ensuring accessibility, responsiveness, and satisfaction.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="User-Centric Frontend"
        />
      </div>
    ),
  },
  {
    title: "Scalable Backend",
    description:
      "Build the backbone of your applications with TrustOn’s scalable backend solutions. Our developers design robust systems that manage complex workflows, ensure data security, and support your business growth. Using powerful technologies like Node.js, Python, and .NET, we create backend architectures that are efficient, reliable, and tailored to handle high-performance demands. Perfect for businesses managing large-scale operations, databases, or cloud-based services.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Scalable Backend"
        />
      </div>
    ),
  },
  {
    title: "Integration and Deployment",
    description:
      "Seamlessly integrate third-party APIs and deploy applications with TrustOn’s cutting-edge tools and methodologies. From CI/CD pipelines to containerization with Docker and Kubernetes, we streamline deployment processes, ensuring your applications are delivered efficiently and reliably. Our expertise in API integration and cloud deployment ensures smooth operations across platforms, making your product ready for users in record time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Integration and Deployment"
        />
      </div>
    ),
  },
];

export default function FullStackDevelopment() {
  return (
    <>
      <Head>
        <title>Full-Stack Development Services | TrustOn</title>
        <meta
          name="description"
          content="Explore TrustOn's full-stack development services, including end-to-end solutions, user-centric frontend designs, scalable backends, and seamless API integration. Build your applications with excellence."
        />
        <meta
          name="keywords"
          content="full-stack development, end-to-end solutions, frontend development, scalable backend, API integration, application deployment, TrustOn full-stack services, web application development"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
