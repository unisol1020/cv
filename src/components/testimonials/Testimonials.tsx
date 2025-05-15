"use client";

import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { useTestimonials } from "./useTestimonials";

export function Testimonials() {
  const { testimonials, isLoading } = useTestimonials();

  if (isLoading || testimonials.length === 0) {
    return (
      <div className="w-full mt-32 mb-32 text-center">
        Loading testimonials...
      </div>
    );
  }

  return (
    <div className="w-full mt-32 mb-32 relative">
      <TestimonialsHeader />

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
