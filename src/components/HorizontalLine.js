"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedHorizontalLine({
  className,
  color = "bg-primary/30", // Lightened default color
  thickness = 1,
  animationDuration = 1,
}) {
  return (
    <div
      className="w-full flex items-center justify-center my-8"
      role="separator"
      aria-orientation="horizontal"
    >
      <motion.div
        className={cn("w-0", color, className)}
        style={{ height: `${thickness}px` }}
        initial={{ width: "0%" }}
        animate={{ width: "80%" }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
