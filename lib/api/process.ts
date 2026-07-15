import { fetchPublicRaw } from "@/lib/api/client";
import { processSteps as staticProcessSteps } from "@/lib/constants/process";

export type ProcessStepItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type ApiProcessStep = {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
};

export async function getProcessSteps(): Promise<ProcessStepItem[]> {
  const items = await fetchPublicRaw<ApiProcessStep[]>("/process");
  if (!items || items.length === 0) return staticProcessSteps.map((s) => ({ ...s }));
  return items.map((item) => ({
    id: item.stepNumber,
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));
}
