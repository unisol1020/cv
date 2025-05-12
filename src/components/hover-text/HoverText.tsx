"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useHoverEffect } from "./useHoverEffect";

interface HoverTextProps {
  defaultText: string;
  hoverText: string;
  flashlightRadius?: number;
}

export default function HoverText({
  defaultText,
  hoverText,
  flashlightRadius = 150,
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

  return (
    <motion.div
      ref={containerRef}
      className="relative p-20 rounded-lg bg-background dark:bg-background transition-all duration-300 text-center"
      onMouseMove={(e) => handleMouseMove(e, containerRef)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.span
        className="text-8xl block text-foreground dark:text-foreground whitespace-pre-line cursor-default font-medium select-none"
        animate={{ opacity: isHovering ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {defaultText}
      </motion.span>

      <motion.div
        className="absolute inset-0 overflow-hidden flex items-center justify-center bg-foreground dark:bg-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: animatedRadius > 0 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          clipPath: `circle(${animatedRadius}px at ${jellyPosition.x}px ${jellyPosition.y}px)`,
          pointerEvents: "none",
        }}
      >
        <motion.span
          className="text-8xl text-background dark:text-background whitespace-pre-line cursor-default font-medium select-none"
          initial={{ y: 20 }}
          animate={{ y: isHovering ? 0 : 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {hoverText}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
