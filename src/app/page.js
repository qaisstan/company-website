"use client";

import React from "react";
import Head from "next/head";
import AnimatedHeroSection from "@/components/HeroSection";
import AnimatedServiceCards from "@/components/AnimatedServiceCard";
import EnhancedAnimatedTestimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrustOn | Empowering Businesses with Innovative Solutions</title>
        <meta
          name="description"
          content="Welcome to TrustOn! We provide cutting-edge services including web development, SEO optimization, cloud solutions, automation, and more to help your business thrive in the digital age."
        />
        <meta
          name="keywords"
          content="TrustOn, innovative business solutions, web development, SEO optimization, cloud solutions, automation services, full-stack development, API integration, business growth solutions"
        />
      </Head>
      <AnimatedHeroSection />
      <AnimatedServiceCards />
      <EnhancedAnimatedTestimonials />
    </>
  );
}
