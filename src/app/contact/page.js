"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
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
        // Clear form after successful submission
        setEmail("");
        setService("");
        setOtherService("");
        setDescription("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      {success && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
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
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service Needed</Label>
          <Select value={service} onValueChange={setService}>
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
          />
        </div>
        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4" /> Send Message
        </Button>
      </form>
    </motion.div>
  );
}
