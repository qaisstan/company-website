"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Head from "next/head";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Web Development",
  "API Integration",
  "Cloud Solutions",
  "SEO",
  "Full Stack Application",
  "Other",
];

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          service: service === "Other" ? otherService : service,
          description,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000); // Remove success message after 5 seconds
        setEmail("");
        setService("");
        setOtherService("");
        setDescription("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | TRUSTON</title>
        <meta
          name="description"
          content="Get in touch with TRUSTON for inquiries about web development, API integration, cloud solutions, SEO, and more."
        />
        <meta
          name="keywords"
          content="TRUSTON, contact, web development, API integration, cloud solutions, SEO"
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        {success && (
          <p className="text-green-500 text-center" aria-live="polite">
            Message sent successfully!
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center" aria-live="polite">
            {errorMessage}
          </p>
        )}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed</Label>
            <Select
              value={service}
              onValueChange={setService}
              aria-required="true"
            >
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {service === "Other" && (
            <div className="space-y-2">
              <Label htmlFor="otherService">Specify Other Service</Label>
              <Input
                id="otherService"
                placeholder="Specify the service you need"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                required
                aria-required="true"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Tell us more about your project or inquiry"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </motion.div>
    </>
  );
}
