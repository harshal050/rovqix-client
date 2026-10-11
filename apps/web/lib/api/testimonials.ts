import { testimonials } from "@/lib/constants/testimonials";

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

export async function getTestimonials(): Promise<TestimonialItem[]> {
  return testimonials.map((t) => ({ ...t }));
}
