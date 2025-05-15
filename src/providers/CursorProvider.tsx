"use client";

import Cursor from "@/components/Cursor";
import { createContext, PropsWithChildren, useState } from "react";

interface CursorContextType {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export const CursorContext = createContext<CursorContextType>({
  expanded: false,
  setExpanded: () => {},
});

export function CursorProvider({ children }: PropsWithChildren) {
  const [expanded, setExpanded] = useState(false);

  return (
    <CursorContext.Provider value={{ expanded, setExpanded }}>
      <Cursor />
      {children}
    </CursorContext.Provider>
  );
}
