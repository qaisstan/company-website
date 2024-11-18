"use client";

import AnimatedCardService from "@/components/AnimatedServiceCard";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 ">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Explore a variety of services tailored to help your business thrive.
        </p>
      </header>

      {/* Services Section */}
      <section className="mt-10">
        <AnimatedCardService />
      </section>
    </div>
  );
}
