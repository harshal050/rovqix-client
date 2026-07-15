import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ROVQIX collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "When you contact us through our website, forms, email, or WhatsApp, we collect the information you provide directly — such as your name, email address, company, and project details.",
            "We may also collect basic technical information (browser type, device, and general usage patterns) to help us improve the site's performance and reliability.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "We use the information you share to respond to inquiries, scope projects, and communicate about ongoing engagements.",
            "We do not sell, rent, or trade your personal information to third parties.",
          ],
        },
        {
          heading: "3. Cookies & Analytics",
          body: [
            "We may use cookies or similar technologies to understand how visitors use our site and to improve the experience over time.",
          ],
        },
        {
          heading: "4. Data Retention",
          body: [
            "We retain project and communication records for as long as necessary to fulfill the purposes described in this policy, or as required by law.",
          ],
        },
        {
          heading: "5. Your Rights",
          body: [
            "You can request access to, correction of, or deletion of your personal information at any time by contacting us at " +
              siteConfig.email +
              ".",
          ],
        },
        {
          heading: "6. Contact Us",
          body: [
            `Questions about this policy can be directed to ${siteConfig.email} or ${siteConfig.phone}.`,
          ],
        },
      ]}
    />
  );
}
