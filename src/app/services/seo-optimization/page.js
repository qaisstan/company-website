"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Keyword Research",
    description:
      "Unlock the power of strategic keyword research with TRUSTON’s SEO experts. We identify high-impact keywords that drive traffic, improve rankings, and align with your target audience's search behavior. Our research process ensures you focus on the right keywords to capture intent, increase visibility, and outperform competitors. Perfect for businesses in any industry looking to dominate search engine results and attract qualified leads.",
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
      "Boost your website’s visibility and engagement with TRUSTON’s content optimization services. We fine-tune your website’s content by strategically integrating keywords, improving readability, and crafting compelling calls to action. Whether it’s blogs, landing pages, or product descriptions, our optimization techniques ensure your content ranks higher in search engines and converts visitors into customers. Ideal for businesses wanting to enhance their online presence and customer experience.",
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
      "Ensure your website meets the highest technical standards with TRUSTON’s Technical SEO services. We address site speed, mobile responsiveness, URL structure, and schema markup to enhance search engine accessibility. Our team identifies and resolves critical issues that hinder your website's performance, ensuring faster load times, better indexing, and improved user experience. Perfect for businesses aiming for long-term SEO success and compliance with search engine algorithms.",
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
      "Make data-driven decisions with TRUSTON’s Analytics and Reporting services. We provide detailed insights into your SEO performance, tracking metrics like traffic, rankings, conversions, and user behavior. Our actionable reports help you measure the success of your campaigns and identify areas for improvement. Ideal for businesses looking to maximize ROI and maintain a competitive edge in their industry.",
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
    <>
      <Head>
        <title>SEO Optimization Services | TRUSTON</title>
        <meta
          name="description"
          content="Explore TRUSTON's SEO Optimization services, including keyword research, content optimization, technical SEO, and analytics. Improve your rankings, drive traffic, and grow your business with expert solutions."
        />
        <meta
          name="keywords"
          content="SEO optimization, keyword research, content optimization, technical SEO, analytics and reporting, search engine optimization, TRUSTON SEO services, SEO for businesses, improve website ranking"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
