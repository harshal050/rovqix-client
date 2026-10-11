import { aiTechnologies } from "@/lib/constants/ai-tech";

export type AiTechItemType = {
  name: string;
  category: string;
  description: string;
  icon: string;
  gradient: string;
};

export async function getAiTechnologies(): Promise<AiTechItemType[]> {
  return aiTechnologies.map((t) => ({ ...t }));
}
