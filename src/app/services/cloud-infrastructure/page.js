"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Cloud } from "lucide-react";

export default function CloudInfrastructure() {
  return (
    <section className="container py-12">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Cloud className="h-8 w-8" />
            <CardTitle>Cloud and Infrastructure</CardTitle>
          </div>
          <CardDescription>
            Build scalable and reliable cloud solutions to ensure the stability
            and efficiency of your applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our cloud infrastructure services help you design and implement
            solutions that can scale as your business grows. We assist with
            cloud architecture, deployment, and management, ensuring your
            applications are always available, secure, and performing optimally.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
