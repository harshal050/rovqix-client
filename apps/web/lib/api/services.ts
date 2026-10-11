import { services } from "@/lib/constants/services";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export async function getServices(): Promise<ServiceItem[]> {
  return services.map((s) => ({ ...s }));
}
