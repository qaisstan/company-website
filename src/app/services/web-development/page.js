"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function WebDevelopment() {
  return (
    <section className="container py-12">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Globe className="h-8 w-8" />
            <CardTitle>Web Development</CardTitle>
          </div>
          <CardDescription>
            Create responsive and dynamic websites tailored to your business
            needs with our web development services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our web development services are focused on building modern,
            responsive, and user-friendly websites that help your business stand
            out. From simple landing pages to complex web applications, we use
            the latest technologies to deliver high-quality, scalable solutions
            that meet your unique requirements.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
