"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";
import { Testimonial } from "./types";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      const { data, error } = await supabase
        .from("testimonials")
        .select("name, title, default_text, hidden_text");

      if (error) {
        console.error("Error fetching testimonials:", error);
        return;
      }

      const formattedData = data.map((item) => ({
        name: item.name,
        title: item.title,
        defaultText: item.default_text,
        hiddenText: item.hidden_text,
      }));

      setTestimonials(formattedData);
      setIsLoading(false);
    }

    fetchTestimonials();
  }, []);

  return {
    testimonials,
    isLoading,
  };
}
