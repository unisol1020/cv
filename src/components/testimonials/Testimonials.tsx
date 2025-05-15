import { getTestimonials } from "./getTestimonials";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialsHeader } from "./TestimonialsHeader";

export async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <div className="w-full relative">
      <TestimonialsHeader />

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
