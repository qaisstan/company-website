"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Head from "next/head";

const content = [
  {
    title: "Data Insights",
    description:
      "Turn complex data into meaningful insights with TRUSTON analytics solutions. We help you extract actionable information from raw data, empowering you to make smarter business decisions. From sales performance to customer behavior analysis, our data-driven approach ensures you stay ahead of the curve. Ideal for businesses in retail, finance, healthcare, and technology, our analytics tools simplify decision-making and enhance operational efficiency.",
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
      "Gain instant access to critical metrics and KPIs with TRUSTON’s real-time analytics solutions. Monitor your business’s performance as it happens, enabling quick adjustments and data-backed decisions. Whether tracking website traffic, monitoring sales, or analyzing customer engagement, our tools provide up-to-the-minute insights that give you a competitive edge. Perfect for industries like e-commerce, digital marketing, and SaaS companies that require immediate feedback.",
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
      "Visualize the data that matters most to your business with custom dashboards tailored to your unique needs. At TRUSTON, we design dashboards that provide clarity and focus, helping you track KPIs, trends, and progress effortlessly. Whether you’re monitoring marketing campaigns, financial reports, or project milestones, our dashboards deliver a centralized view of your business’s performance. Simplify your data management with intuitive and personalized dashboard solutions.",
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
      "Stay ahead of the competition with TRUSTON’s AI-powered predictive analytics. Our advanced tools leverage machine learning and big data to forecast trends, anticipate customer needs, and identify opportunities. Predictive analytics helps you make proactive decisions, optimize resource allocation, and boost profitability. From demand forecasting in retail to risk assessment in finance, our solutions empower businesses to plan for the future with confidence.",
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
    <>
      <Head>
        <title>Analytics Services | TRUSTON</title>
        <meta
          name="description"
          content="Discover TRUSTON's analytics services, including data insights, real-time analytics, custom dashboards, and predictive analytics. Unlock the power of data for smarter decision-making and enhanced business performance."
        />
        <meta
          name="keywords"
          content="analytics services, data insights, real-time analytics, custom dashboards, predictive analytics, machine learning, AI-driven analytics, data visualization, KPI tracking, TRUSTON analytics tools"
        />
      </Head>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
