"use client";

import { motion } from "framer-motion";
import { Cat } from "lucide-react";

export default function CatIcon() {
  return (
    <motion.div
      className="w-8 h-8 rounded-full bg-background flex items-center justify-center"
      whileHover={{
        backgroundColor: "var(--foreground)",
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      <motion.div
        initial={{ color: "var(--primary)" }}
        whileHover={{ color: "var(--background)" }}
        transition={{ duration: 0.2 }}
      >
        <Cat className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
}
