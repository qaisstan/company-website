"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | TRUSTON</title>
        <meta
          name="description"
          content="Learn more about TRUSTON, your partner in AI, web development, automation, and cloud solutions. Empowering businesses globally since 2024."
        />
        <meta
          name="keywords"
          content="TRUSTON, AI solutions, web development, software development, automation, cloud solutions, custom software"
        />
        <meta name="author" content="TRUSTON" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At TRUSTON, we focus on using technology to make things easier for
            businesses. Since 2024, we’ve been working with companies of all
            sizes, creating software that solves problems and improves how
            things work.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our team builds tools for tasks like AI integration, web
            development, cloud infrastructure, and software tailored to specific
            needs. We aim to create solutions that are practical, efficient, and
            fit naturally into the way businesses operate.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We prioritize quality and thoughtful design in everything we do,
            staying up-to-date with the latest technology to deliver work we can
            be proud of—and that our clients find genuinely useful.
          </p>
          <div className="pt-6 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
