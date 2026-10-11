import { faqs } from "@/lib/constants/faq";

export type FaqItemType = { question: string; answer: string };

export async function getFaqs(): Promise<FaqItemType[]> {
  return faqs.map((f) => ({ ...f }));
}
