import { fetchPublicRaw } from "@/lib/api/client";
import { whyChooseUs as staticWhyChooseUs } from "@/lib/constants/why-choose-us";

export type WhyChooseUsItemType = {
  title: string;
  description: string;
  icon: string;
  stat: string;
  statLabel: string;
};

export async function getWhyChooseUs(): Promise<WhyChooseUsItemType[]> {
  const items = await fetchPublicRaw<WhyChooseUsItemType[]>("/why-choose-us");
  if (!items || items.length === 0) return staticWhyChooseUs.map((w) => ({ ...w }));
  return items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
    stat: item.stat,
    statLabel: item.statLabel,
  }));
}
