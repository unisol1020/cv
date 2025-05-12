"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useHoverEffect } from "./useHoverEffect";

interface HoverTextProps {
  defaultText: string;
  hoverText: string;
  flashlightRadius?: number;
  fontSize?: string;
  textAlign?: "left" | "right" | "center";
}

export default function HoverText({
  defaultText,
  hoverText,
  flashlightRadius = 150,
  fontSize = "text-4xl",
  textAlign = "center",
}: HoverTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    isHovering,
    jellyPosition,
    animatedRadius,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverEffect({ flashlightRadius });

  const isIdenticalText = defaultText === hoverText;

  const textAlignmentClasses = {
    left: "justify-start items-start text-left",
    right: "justify-end items-end text-right",
    center: "justify-center items-center text-center",
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative p-20 rounded-lg bg-background dark:bg-background transition-all duration-300",
        {
          "text-left": textAlign === "left",
          "text-right": textAlign === "right",
          "text-center": textAlign === "center",
        }
      )}
      onMouseMove={(e) => handleMouseMove(e, containerRef)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.span
        className={cn(
          fontSize,
          "block text-foreground dark:text-foreground whitespace-pre-line cursor-default font-medium select-none"
        )}
        animate={{ opacity: isHovering ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
        dangerouslySetInnerHTML={{ __html: defaultText }}
      />

      <motion.div
        className={cn(
          "absolute inset-0 overflow-hidden flex bg-foreground",
          textAlignmentClasses[textAlign]
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: animatedRadius > 0 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          clipPath: `circle(${animatedRadius}px at ${jellyPosition.x}px ${jellyPosition.y}px)`,
          pointerEvents: "none",
          padding: "5rem", // Match the p-20 of parent
        }}
      >
        <motion.span
          className={cn(
            fontSize,
            "block text-background whitespace-pre-line cursor-default font-medium select-none"
          )}
          initial={{ y: isIdenticalText ? 0 : 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          dangerouslySetInnerHTML={{ __html: hoverText }}
        />
      </motion.div>
    </motion.div>
  );
}
