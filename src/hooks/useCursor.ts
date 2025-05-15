"use client";

import { CursorContext } from "@/providers/CursorProvider";
import { useContext } from "react";

export function useCursor() {
  const context = useContext(CursorContext);

  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }

  return context;
}
