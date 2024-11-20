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
            At TRUSTON, we&apos;re passionate about leveraging cutting-edge
            technology to solve complex business challenges. Founded in 2024,
            we&apos;ve grown to become a trusted partner for businesses
            globally, delivering innovative software solutions tailored to their
            needs.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our team of expert developers, designers, and strategists work
            tirelessly to deliver solutions that drive growth and efficiency for
            our clients. We specialize in AI integration, web development, cloud
            infrastructure, and custom software development.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            With a focus on quality, creativity, and client satisfaction,
            we&apos;ve built a reputation for excellence in the tech industry.
            Our commitment to staying at the forefront of technological
            advancements ensures that our clients always receive
            state-of-the-art solutions.
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
