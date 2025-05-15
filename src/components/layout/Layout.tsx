import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />

      <main className="relative flex min-h-svh flex-col bg-background max-w-screen-lg w-full mx-auto py-20">
        {children}
      </main>
    </div>
  );
}
