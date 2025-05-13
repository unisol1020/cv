import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="relative flex min-h-svh flex-col bg-background">
      {children}
    </main>
  );
}
