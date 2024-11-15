"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Code } from "lucide-react";

export default function FullStackDevelopment() {
  return (
    <section className="container py-12">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Code className="h-8 w-8" />
            <CardTitle>Full-Stack Application Development</CardTitle>
          </div>
          <CardDescription>
            End-to-end development of robust and scalable applications to meet
            your business needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our full-stack development services cover both front-end and
            back-end development, ensuring a seamless user experience and
            efficient server-side logic. We leverage modern technologies to
            build scalable, maintainable, and high-performing applications that
            can grow with your business.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
