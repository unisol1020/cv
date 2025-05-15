"use client";

import { useCursor } from "@/hooks/useCursor";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HoverableTextProps {
  defaultText: string;
  hiddenText: string;
  className?: string;
}

const expandedRadius = 100;

export function HoverableText({
  defaultText,
  hiddenText,
  className = "",
}: HoverableTextProps) {
  const { setExpanded } = useCursor();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = elementRef.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    elementRef.addEventListener("mousemove", handleMouseMove);
    return () => {
      elementRef.removeEventListener("mousemove", handleMouseMove);
    };
  }, [elementRef]);

  return (
    <motion.div
      ref={setElementRef}
      className={`relative cursor-none ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setExpanded(false);
      }}
    >
      {isHovered ? (
        <div
          className="relative"
          style={{
            maskImage: `radial-gradient(circle ${expandedRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 100%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${expandedRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 100%, black 100%)`,
          }}
        >
          <span
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: defaultText }}
          />
        </div>
      ) : (
        <span
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: defaultText }}
        />
      )}

      {isHovered && (
        <motion.div
          className="absolute left-0 top-0 overflow-hidden"
          style={{
            width: "100%",
            height: "100%",
            maskImage: `radial-gradient(circle ${expandedRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${expandedRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
          }}
        >
          <span
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: hiddenText }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
