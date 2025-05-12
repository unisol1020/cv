"use client";

import { motion } from "framer-motion";

const menuItems = ["About", "Work", "Contact"];

export default function Menu() {
  return (
    <div className="flex flex-col justify-center gap-2 absolute right-0">
      {menuItems.map((item) => (
        <motion.div
          key={item}
          className="relative h-6 flex overflow-hidden cursor-pointer justify-end"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-foreground"
            initial={{ scaleY: 0 }}
            variants={{
              hover: {
                scaleY: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
            style={{ originY: 0.5 }}
          />
          <motion.span
            className="relative z-10 px-4 font-bold"
            variants={{
              hover: { color: "var(--background)" },
            }}
          >
            {item}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}
