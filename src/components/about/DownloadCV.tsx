"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function DownloadCV() {
  return (
    <motion.a
      href="/Max_Levchuk_CV.pdf"
      download="Max_Levchuk_CV.pdf"
      className="mx-auto"
      whileTap={{ scale: 0.85 }}
    >
      <Button variant="outline" className="text-xl p-5">
        <Download className="size-5" />
        Download PDF
      </Button>
    </motion.a>
  );
}
