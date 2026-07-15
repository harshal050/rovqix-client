import { fetchPublicRaw } from "@/lib/api/client";
import { testimonials as staticTestimonials } from "@/lib/constants/testimonials";

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

export async function getTestimonials(): Promise<TestimonialItem[]> {
  const items = await fetchPublicRaw<TestimonialItem[]>("/testimonials");
  if (!items || items.length === 0) return staticTestimonials.map((t) => ({ ...t }));
  return items.map((item) => ({
    name: item.name,
    role: item.role,
    quote: item.quote,
    rating: item.rating,
    initials: item.initials,
  }));
}
