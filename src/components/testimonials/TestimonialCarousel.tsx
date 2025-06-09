"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { TestimonialAuthor } from "./TestimonialAuthor";
import { TestimonialQuote } from "./TestimonialQuote";
import { Testimonial } from "./types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const autoplayTimer = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 10000);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      clearInterval(autoplayTimer);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="absolute -top-8 left-0 right-0 flex gap-2 justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`group relative h-1 transition-all duration-300 overflow-hidden`}
            style={{
              width: `${100 / testimonials.length}%`,
              maxWidth: "100px",
              backgroundColor:
                index === selectedIndex ? "var(--color-primary)" : "#525252",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col gap-16">
                <TestimonialQuote
                  defaultText={testimonial.defaultText}
                  hiddenText={testimonial.hiddenText}
                />

                <TestimonialAuthor
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
