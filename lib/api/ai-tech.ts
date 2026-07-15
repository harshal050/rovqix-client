import { fetchPublicRaw } from "@/lib/api/client";
import { aiTechnologies as staticAiTechnologies } from "@/lib/constants/ai-tech";

export type AiTechItemType = {
  name: string;
  category: string;
  description: string;
  icon: string;
  gradient: string;
};

type ApiAiTechItem = {
  name: string;
  category: string;
  description: string;
  icon: string;
};

const GRADIENTS = [
  "from-brand-blue to-brand-cyan",
  "from-brand-violet to-brand-blue",
  "from-brand-cyan to-brand-violet",
  "from-brand-blue via-brand-violet to-brand-cyan",
];

export async function getAiTechnologies(): Promise<AiTechItemType[]> {
  const items = await fetchPublicRaw<ApiAiTechItem[]>("/ai-tech");
  if (!items || items.length === 0) return staticAiTechnologies.map((t) => ({ ...t }));
  return items.map((item, index) => ({
    name: item.name,
    category: item.category,
    description: item.description,
    icon: item.icon,
    gradient: GRADIENTS[index % GRADIENTS.length],
  }));
}
