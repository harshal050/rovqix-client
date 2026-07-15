import { fetchPublicRaw } from "@/lib/api/client";
import { clientLogos as staticClientLogos } from "@/lib/constants/clients";

type ApiClientLogo = { name: string };

export async function getClientLogos(): Promise<string[]> {
  const items = await fetchPublicRaw<ApiClientLogo[]>("/clients");
  if (!items || items.length === 0) return [...staticClientLogos];
  return items.map((item) => item.name);
}
