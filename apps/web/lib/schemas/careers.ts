import { z } from "zod";

export const careerApplySchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(1, "Select a position"),
  message: z.string().optional(),
});

export type CareerApplyValues = z.infer<typeof careerApplySchema>;
