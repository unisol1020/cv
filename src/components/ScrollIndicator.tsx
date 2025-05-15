"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MousePointer } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-50 cursor-pointer flex flex-row items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        exit={{
          opacity: 0,
          y: 10,
          transition: { duration: 0.5 },
        }}
        whileHover={{ scale: 1.05 }}
        onClick={() => window.scrollBy({ top: 300, behavior: "smooth" })}
      >
        <motion.div
          className="flex h-10 w-10 items-center justify-center"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <MousePointer className="text-primary" size={20} />
        </motion.div>

        <div className="relative h-16 w-0.5 mx-auto mb-1">
          <motion.div
            className="absolute top-0 h-full w-full bg-primary rounded-full"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{
              scaleY: 1,
              transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                repeatType: "reverse",
              },
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
