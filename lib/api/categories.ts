import { fetchPublicRaw } from "@/lib/api/client";
import { websiteCategories as staticCategories } from "@/lib/constants/categories";

export type CategoryItem = { label: string; icon: string };

export async function getCategories(): Promise<CategoryItem[]> {
  const items = await fetchPublicRaw<CategoryItem[]>("/categories");
  if (!items || items.length === 0) return staticCategories.map((c) => ({ ...c }));
  return items.map((item) => ({ label: item.label, icon: item.icon }));
}
