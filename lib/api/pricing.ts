import { fetchPublicRaw } from "@/lib/api/client";
import { pricingPlans as staticPricingPlans } from "@/lib/constants/pricing";

export type PricingPlanItem = {
  name: string;
  description: string;
  price: string;
  period: string;
  featured: boolean;
  features: string[];
};

export async function getPricingPlans(): Promise<PricingPlanItem[]> {
  const items = await fetchPublicRaw<PricingPlanItem[]>("/pricing");
  if (!items || items.length === 0) return staticPricingPlans.map((p) => ({ ...p, features: [...p.features] }));
  return items.map((item) => ({
    name: item.name,
    description: item.description,
    price: item.price,
    period: item.period,
    featured: item.featured,
    features: item.features,
  }));
}
