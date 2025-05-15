"use client";

import { PropsWithChildren } from "react";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import SocialLinks from "./SocialLinks";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />

      <main className="relative flex min-h-svh flex-col bg-background max-w-screen-lg w-full mx-auto pb-10 px-4 md:px-0">
        {children}
      </main>

      <ScrollIndicator />

      <SocialLinks />
    </div>
  );
}
