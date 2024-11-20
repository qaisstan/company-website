"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Responsive Design",
    description:
      "Deliver exceptional user experiences with TRUSTON’s responsive web design services. We build websites that adapt seamlessly to any device, including desktops, tablets, and mobile platforms. Our designs ensure optimal performance, fast loading times, and intuitive navigation, meeting the demands of modern users. Perfect for businesses aiming to engage their audience across diverse devices and platforms, our responsive designs boost usability and accessibility.",
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
      "Transform your ideas into reality with TRUSTON’s custom web development solutions. Our team creates tailor-made websites that align with your unique business goals, ensuring functionality, scalability, and a seamless user experience. Whether you need a dynamic web application, a feature-rich corporate website, or custom integrations, our solutions are built to meet the highest standards. Ideal for businesses seeking bespoke solutions to differentiate themselves in competitive markets.",
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
      "Boost your online sales with TRUSTON’s robust and scalable e-commerce platforms. We design and develop online stores that provide a seamless shopping experience, from product browsing to secure checkout. Our solutions include custom features like inventory management, payment gateway integration, and personalized shopping experiences, tailored to your industry and customer needs. Perfect for retailers, startups, and enterprises looking to grow their online presence and maximize conversions.",
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
      "Keep your website running smoothly with TRUSTON’s website maintenance services. We provide ongoing support to ensure your site remains secure, up-to-date, and optimized for performance. From regular updates and backups to performance monitoring and bug fixes, our maintenance services are designed to give you peace of mind. Perfect for businesses looking to focus on growth while leaving the technical details to experts.",
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
    <>
      <Head>
        <title>Web Development Services | TRUSTON</title>
        <meta
          name="description"
          content="Explore TRUSTON's web development services, including responsive design, custom development, e-commerce platforms, and website maintenance. Build, grow, and optimize your online presence with expert solutions."
        />
        <meta
          name="keywords"
          content="web development, responsive design, custom development, e-commerce platforms, website maintenance, web solutions, TRUSTON web services, build online presence, optimize website"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
