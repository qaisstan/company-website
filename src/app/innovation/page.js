"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const innovationItems = [
  {
    title: "SaaS Solutions",
    description:
      "Scalable software-as-a-service platforms tailored to your business needs.",
    icon: Cloud,
  },
  {
    title: "API Integrations",
    description:
      "Seamless connectivity between your systems and third-party services.",
    icon: Code,
  },
  {
    title: "Custom Applications",
    description:
      "Bespoke software solutions designed to address your unique challenges.",
    icon: Zap,
  },
];

export default function InnovationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        Driving Innovation
      </h1>
      <p className="text-lg leading-relaxed text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Empowering businesses with cutting-edge technology solutions for
        enhanced efficiency and scalability.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Innovative Offerings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {innovationItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <item.icon className="h-6 w-6 mr-2 text-primary" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Tailored Innovation Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto text-center mb-6">
            We specialize in developing tailored applications that address your
            unique business challenges. Let&apos;s craft solutions that drive
            growth and efficiency together.
          </p>
          <div className="flex justify-center">
            <Button>
              Explore Custom Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
