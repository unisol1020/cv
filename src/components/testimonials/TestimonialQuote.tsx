"use client";

import { HoverableText } from "../HoverableText";

interface TestimonialQuoteProps {
  defaultText: string;
  hiddenText: string;
}

export function TestimonialQuote({
  defaultText,
  hiddenText,
}: TestimonialQuoteProps) {
  return (
    <div className="relative">
      <span className="text-6xl text-primary/50 absolute">&ldquo;</span>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-300/90 leading-tight pl-8">
        <HoverableText
          defaultText={defaultText}
          hiddenText={hiddenText}
          className="block"
        />
      </h2>
    </div>
  );
}
