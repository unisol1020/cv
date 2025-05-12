import { PropsWithChildren } from "react";
import { Header } from "./header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="relative flex min-h-svh flex-col bg-background">
      <Header />

      {children}
    </main>
  );
}
