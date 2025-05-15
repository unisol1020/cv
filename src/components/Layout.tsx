"use client";

import { useIsTabletOrMobile } from "@/hooks/useMediaQuery";
import { PropsWithChildren } from "react";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import SocialLinks from "./SocialLinks";

export default function Layout({ children }: PropsWithChildren) {
  const isTabletOrMobile = useIsTabletOrMobile();

  return (
    <div>
      <Header />

      <main className="relative flex min-h-svh flex-col bg-background max-w-screen-lg w-full mx-auto pb-10">
        {children}
      </main>

      {!isTabletOrMobile && (
        <>
          <ScrollIndicator />

          <SocialLinks />
        </>
      )}
    </div>
  );
}
