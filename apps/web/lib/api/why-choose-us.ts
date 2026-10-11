import { whyChooseUs } from "@/lib/constants/why-choose-us";

export type WhyChooseUsItemType = {
  title: string;
  description: string;
  icon: string;
  stat: string;
  statLabel: string;
};

export async function getWhyChooseUs(): Promise<WhyChooseUsItemType[]> {
  return whyChooseUs.map((w) => ({ ...w }));
}
