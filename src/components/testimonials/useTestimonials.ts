"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "./types";

async function fetchTestimonials(): Promise<Testimonial[]> {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("testimonials")
    .select("name, title, default_text, hidden_text");

  if (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }

  return data.map((item) => ({
    name: item.name,
    title: item.title,
    defaultText: item.default_text,
    hiddenText: item.hidden_text,
  }));
}

export function useTestimonials() {
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });

  return {
    testimonials,
    isLoading,
  };
}
