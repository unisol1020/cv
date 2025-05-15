"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExperienceDetail } from "./types";

interface ExperienceItemProps {
  companyName: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string | null;
  details: ExperienceDetail[];
}

export default function ExperienceItem({
  companyName,
  location,
  position,
  startDate,
  endDate,
  details,
}: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-10 border-l-2 border-primary pl-6 relative"
    >
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary" />
      
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="text-xl font-bold">{position}</h3>
        <p className="text-muted-foreground">
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <h4 className="text-lg font-semibold text-primary">{companyName}</h4>
        <p className="text-muted-foreground">{location}</p>
      </div>
      
      <ul className="list-disc pl-5 space-y-2">
        {details.map((detail) => (
          <li key={detail.id} className="text-base">
            {detail.description}
          </li>
        ))}
      </ul>
    </motion.div>
  );
} 