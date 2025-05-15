"use client";

import { CursorContext } from "@/providers/CursorProvider";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

const defaultSize = 32;
const expandedSize = 260;

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { expanded } = useContext(CursorContext);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-primary-foreground dark:bg-foreground mix-blend-difference"
      animate={{
        x: mousePosition.x - (expanded ? expandedSize / 2 : defaultSize / 2),
        y: mousePosition.y - (expanded ? expandedSize / 2 : defaultSize / 2),
        width: expanded ? expandedSize : defaultSize,
        height: expanded ? expandedSize : defaultSize,
      }}
      initial={{
        opacity: 0,
        width: defaultSize,
        height: defaultSize,
      }}
      whileInView={{ opacity: 1 }}
    />
  );
}
