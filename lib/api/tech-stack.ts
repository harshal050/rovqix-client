import { fetchPublicRaw } from "@/lib/api/client";
import { techStack as staticTechStack } from "@/lib/constants/tech-stack";

type ApiTechStackItem = { name: string };

export async function getTechStack(): Promise<string[]> {
  const items = await fetchPublicRaw<ApiTechStackItem[]>("/tech-stack");
  if (!items || items.length === 0) return [...staticTechStack];
  return items.map((item) => item.name);
}
