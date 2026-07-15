import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, "Tell us a bit more — at least 20 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
