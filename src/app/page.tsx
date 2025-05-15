import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-40">
      <About />

      <Experience />

      <Testimonials />
    </div>
  );
}
