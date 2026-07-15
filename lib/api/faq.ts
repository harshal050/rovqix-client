import { fetchPublicRaw } from "@/lib/api/client";
import { faqs as staticFaqs } from "@/lib/constants/faq";

export type FaqItemType = { question: string; answer: string };

export async function getFaqs(): Promise<FaqItemType[]> {
  const items = await fetchPublicRaw<FaqItemType[]>("/faq");
  if (!items || items.length === 0) return staticFaqs.map((f) => ({ ...f }));
  return items.map((item) => ({ question: item.question, answer: item.answer }));
}
