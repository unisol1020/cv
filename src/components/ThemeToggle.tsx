"use client";

import { cn } from "@/lib/utils";
import { motion, useSpring, useTransform } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const springConfig = { damping: 15, stiffness: 150 };
const magneticRange = 100;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const xMotion = useSpring(0, springConfig);
  const yMotion = useSpring(0, springConfig);

  const transformX = useTransform(xMotion, (value) => value * 0.3);
  const transformY = useTransform(yMotion, (value) => value * 0.3);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < magneticRange) {
        setIsHovered(true);
        xMotion.set(distanceX);
        yMotion.set(distanceY);
      } else if (isHovered) {
        setIsHovered(false);
        xMotion.set(0);
        yMotion.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xMotion, yMotion, isHovered]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: transformX,
        y: transformY,
      }}
      className="inline-block"
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Moon className="hidden h-5 w-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
