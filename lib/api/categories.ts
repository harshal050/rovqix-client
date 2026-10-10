import { websiteCategories } from "@/lib/constants/categories";

export type CategoryItem = { label: string; icon: string };

export async function getCategories(): Promise<CategoryItem[]> {
  return websiteCategories.map((c) => ({ ...c }));
}
