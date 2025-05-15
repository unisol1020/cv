import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-40">
      <About />

      <Testimonials />
    </div>
  );
}
