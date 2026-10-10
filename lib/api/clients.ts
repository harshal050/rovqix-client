import { clientLogos } from "@/lib/constants/clients";

export async function getClientLogos(): Promise<string[]> {
  return [...clientLogos];
}
