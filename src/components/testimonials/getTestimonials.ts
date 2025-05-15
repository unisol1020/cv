import { createClient } from "@/utils/supabase/server";
import { Testimonial } from "./types";

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient();

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
