import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the ROVQIX website and engagement with our studio.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "1. Overview",
          body: [
            `These terms govern your use of the ${siteConfig.name} website and any engagement you enter into with us for design and development services.`,
          ],
        },
        {
          heading: "2. Project Engagements",
          body: [
            "Specific project scope, pricing, timelines, and deliverables are agreed upon separately in a project proposal or contract before work begins.",
            "Package pricing shown on this site is indicative and subject to change based on final project scope.",
          ],
        },
        {
          heading: "3. Intellectual Property",
          body: [
            "Upon full payment, clients receive ownership of the final deliverables created specifically for their project, excluding any third-party assets, libraries, or tools used in production.",
          ],
        },
        {
          heading: "4. Payments",
          body: [
            "Payment terms are defined per project agreement. Work may be paused if agreed payment milestones are not met.",
          ],
        },
        {
          heading: "5. Limitation of Liability",
          body: [
            `${siteConfig.name} is not liable for indirect, incidental, or consequential damages arising from the use of delivered products, to the extent permitted by law.`,
          ],
        },
        {
          heading: "6. Changes to These Terms",
          body: [
            "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
          ],
        },
        {
          heading: "7. Contact",
          body: [`Questions about these terms can be directed to ${siteConfig.email}.`],
        },
      ]}
    />
  );
}
