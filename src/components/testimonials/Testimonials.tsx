"use client";

import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { useTestimonials } from "./useTestimonials";

export function Testimonials() {
  const { testimonials } = useTestimonials();

  return (
    <div className="w-full relative">
      <TestimonialsHeader />

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
