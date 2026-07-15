import { fetchPublicRaw } from "@/lib/api/client";
import { services as staticServices } from "@/lib/constants/services";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type ApiService = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export async function getServices(): Promise<ServiceItem[]> {
  const items = await fetchPublicRaw<ApiService[]>("/services");
  if (!items || items.length === 0) return staticServices.map((s) => ({ ...s }));
  return items.map((item) => ({
    id: item.slug,
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));
}
