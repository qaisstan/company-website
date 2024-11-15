"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Search } from "lucide-react";

export default function SEOOptimization() {
  return (
    <section className="container py-12">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Search className="h-8 w-8" />
            <CardTitle>SEO Optimization</CardTitle>
          </div>
          <CardDescription>
            Improve your online visibility and drive organic traffic to your
            website with our SEO services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our SEO optimization services are designed to enhance your
            website&apos;s visibility in search engine results. We focus on both
            on-page and off-page SEO strategies, including keyword research,
            content optimization, and link building, to help your business reach
            the right audience and improve its online presence.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
