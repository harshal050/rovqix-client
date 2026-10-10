import { pricingPlans } from "@/lib/constants/pricing";

export type PricingPlanItem = {
  name: string;
  description: string;
  price: string;
  period: string;
  featured: boolean;
  features: string[];
};

export async function getPricingPlans(): Promise<PricingPlanItem[]> {
  return pricingPlans.map((p) => ({ ...p, features: [...p.features] }));
}
