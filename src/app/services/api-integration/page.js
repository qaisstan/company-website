"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Cpu } from "lucide-react";

export default function ApiIntegration() {
  return (
    <section className="container py-12">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Cpu className="h-8 w-8" />
            <CardTitle>API Integration</CardTitle>
          </div>
          <CardDescription>
            Seamlessly connect your systems with third-party services and platforms to enhance your business capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our API integration services enable your software to communicate effectively with other platforms, providing smooth
            data flow and enhancing overall functionality. Whether you need to integrate payment gateways, social media
            platforms, or any other third-party APIs, we ensure a reliable and secure connection.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
