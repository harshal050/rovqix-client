import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { Faq } from "@/components/sections/home/faq";
import { withBaseKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell ROVQIX about your project — business website, SaaS platform, or AI product. We reply within one business day.",
  keywords: withBaseKeywords(
    "contact web design agency",
    "hire website developer",
    "get a website quote"
  ),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us what you're building. We'll get back to you within one business day with next steps."
      />
      <section className="relative mx-auto max-w-6xl px-6 pb-28 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      <Faq />
    </>
  );
}
