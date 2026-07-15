import { getTestimonials } from "@/lib/api/testimonials";
import { TestimonialsClient } from "@/components/sections/home/testimonials-client";

export async function Testimonials() {
  const testimonials = await getTestimonials();
  return <TestimonialsClient testimonials={testimonials} />;
}
