import type { LandingPage } from "@/lib/content/landing/types";

export const industryPages: LandingPage[] = [
  {
    slug: "saas-startups",
    group: "industries",
    title: "Web development for SaaS startups",
    seoTitle: "Web Development for SaaS Startups | ROVQIX",
    description:
      "Engineering partner for SaaS startups — MVP builds, multi-tenant architecture, billing, onboarding and marketing sites that convert trials into customers.",
    excerpt:
      "The parts of a SaaS product that are painful to retrofit: tenancy, billing, permissions and onboarding.",
    eyebrow: "SaaS",
    primaryKeyword: "saas startup development",
    secondaryKeywords: [
      "saas mvp development agency",
      "startup web development partner",
      "multi-tenant saas build",
      "saas marketing site development",
    ],
    answer:
      "ROVQIX builds SaaS products for early-stage companies: multi-tenant architecture, authentication and roles, Stripe billing, onboarding flows, product dashboards and the marketing site around them. MVPs typically ship in 8 to 14 weeks.",
    intro:
      "Four decisions made in month one determine how painful month twelve is: tenant isolation, the permission model, the billing structure and the data schema. Everything else can be changed later.",
    proof: [
      { metric: "8–14 wks", label: "MVP to launch" },
      { metric: "Stripe", label: "Billing from day one" },
      { metric: "Multi-tenant", label: "Isolated at the data layer" },
      { metric: "No equity", label: "Fixed paid engagements" },
    ],
    deliverables: [
      {
        title: "Tenant isolation",
        description:
          "Row-level scoping enforced in the data layer, so a permission bug cannot expose another customer's records.",
        icon: "Building2",
      },
      {
        title: "Billing that handles reality",
        description:
          "Plans, trials, upgrades, proration, failed payments and a customer portal — not just a checkout link.",
        icon: "CreditCard",
      },
      {
        title: "Onboarding designed, not bolted on",
        description:
          "The first-run experience that decides whether a signup becomes a paying customer.",
        icon: "Sparkles",
      },
      {
        title: "Marketing site that ranks",
        description:
          "Fast, server-rendered pages with the SEO foundations in place, in the same codebase as the product.",
        icon: "Search",
      },
      {
        title: "Admin and support tools",
        description:
          "Impersonation, usage visibility and manual overrides, so supporting your first customers is not a database query.",
        icon: "LifeBuoy",
      },
      {
        title: "Audit logging",
        description:
          "Who did what and when, built in early because retrofitting it during your first enterprise deal is worse.",
        icon: "ScrollText",
      },
    ],
    sections: [
      {
        heading: "What should an MVP include and exclude?",
        body: [
          {
            type: "table",
            head: ["Build now", "Defer deliberately"],
            rows: [
              ["One core workflow, done well", "Adjacent features nobody asked for"],
              ["Signup, teams, roles", "SSO and SCIM provisioning"],
              ["Subscription billing", "Usage metering and complex pricing"],
              ["Basic admin tooling", "A full analytics suite"],
              ["Audit logging", "Compliance certification"],
              ["Transactional email", "In-app notification centre"],
            ],
          },
          {
            type: "callout",
            title: "Deferred is not abandoned",
            text: "We build foundations so the right-hand column is straightforward to add later. What we avoid is building it speculatively before anyone has asked, which is the most common way seed funding disappears.",
          },
        ],
      },
      {
        heading: "How do you handle the marketing site and the product together?",
        answer:
          "One Next.js codebase: static marketing pages, an authenticated product area, and a shared design system.",
        body: [
          {
            type: "p",
            text: "Splitting them across two stacks means two deployments, two design systems that drift, and a login flow that bounces users between domains. Keeping them together means your pricing page and your dashboard look like the same product, and a component built for one is available to the other.",
          },
          {
            type: "list",
            items: [
              "Marketing pages statically generated and served from the edge for speed and SEO.",
              "Product routes rendered per request behind authentication.",
              "One component library and token set across both.",
              "A blog and content system in the same repository, because content is how most SaaS companies acquire.",
            ],
          },
        ],
      },
      {
        heading: "What happens after launch?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Two weeks of close monitoring: errors, performance and the first real user behaviour.",
              "A round of changes based on what the first cohort actually does rather than what the roadmap assumed.",
              "Then either a retainer for continued delivery, or a handover to your first engineering hires.",
              "If you hire, we plan the transition properly: documentation, pairing and a tapering period.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Validation sprint",
        range: "$3,000 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Pre-build clarity and a costed plan",
        includes: [
          "Product definition workshops",
          "Clickable prototype",
          "Architecture plan",
          "Costed MVP roadmap",
        ],
      },
      {
        name: "MVP build",
        range: "$15,000 – $45,000",
        timeline: "8–14 weeks",
        bestFor: "Getting a chargeable product live",
        includes: [
          "Product and interface design",
          "Multi-tenant application",
          "Auth, roles and Stripe billing",
          "Marketing site",
          "Deployment, monitoring and handover",
        ],
        featured: true,
      },
      {
        name: "Product team",
        range: "from $9,000 / month",
        timeline: "Ongoing",
        bestFor: "Post-launch, shipping continuously",
        includes: [
          "Dedicated engineers and a lead",
          "Two-week delivery cycles",
          "Design capacity included",
          "Infrastructure and cost management",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a SaaS MVP cost?",
        answer:
          "A focused MVP with one core workflow, authentication and billing is typically $15,000 to $45,000 over 8 to 14 weeks. Wider scope, complex permissions or heavy integrations push it higher.",
      },
      {
        question: "Do you take equity?",
        answer:
          "No. Fixed paid engagements only, which keeps our advice honest — including when the advice is that a feature should not be built.",
      },
      {
        question: "Can you work with our technical founder?",
        answer:
          "Yes, and it usually works well. Shared repository, shared review, and a division of areas so nobody is blocking anybody. Many technical founders use us for velocity while they focus on the core product.",
      },
      {
        question: "What if we pivot?",
        answer:
          "30 days notice, everything in your accounts, and a foundation built on a conventional stack rather than something exotic. Pivots should not be a contractual problem.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["saas-development", "web-development-company-san-francisco", "dedicated-development-team"],
    readMore: [
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Designing for trust in SaaS products", href: "/blog/designing-for-trust-in-saas" },
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "healthcare",
    group: "industries",
    title: "Web development for healthcare organisations",
    seoTitle: "Healthcare Web Development Services | ROVQIX",
    description:
      "Websites and patient portals for healthcare providers — accessible, fast and built with access control, audit logging and careful handling of health information.",
    excerpt:
      "Patient portals and provider sites built with access control and audit logging treated as requirements, not extras.",
    eyebrow: "Healthcare",
    primaryKeyword: "healthcare web development",
    secondaryKeywords: [
      "medical website development",
      "patient portal development",
      "hipaa aware web development",
      "healthcare software development",
    ],
    answer:
      "ROVQIX builds websites, patient portals and internal tools for healthcare organisations, with role-based access control, audit logging, minimal data exposure and WCAG 2.2 AA accessibility. We build the technical controls HIPAA and similar frameworks expect and are explicit about where policy and audit work sits outside engineering.",
    intro:
      "Healthcare software fails in two directions: too locked down to use, or too open to be defensible. The work is finding the version clinicians will actually adopt that still holds up under review.",
    proof: [
      { metric: "WCAG 2.2 AA", label: "Accessibility standard" },
      { metric: "Audit logged", label: "Every record access" },
      { metric: "Least privilege", label: "Role-based access" },
      { metric: "BAA", label: "Signed where applicable" },
    ],
    deliverables: [
      {
        title: "Access control",
        description:
          "Role-based permissions enforced at the data layer, so what a user can see is a property of the query, not the interface.",
        icon: "ShieldCheck",
      },
      {
        title: "Audit logging",
        description:
          "A record of who accessed or changed what, retained per your policy and queryable when someone asks.",
        icon: "ScrollText",
      },
      {
        title: "Patient portals",
        description:
          "Appointments, documents, forms and secure messaging, designed for people who are unwell and in a hurry.",
        icon: "HeartPulse",
      },
      {
        title: "Accessibility",
        description:
          "WCAG 2.2 AA including keyboard operation, contrast and screen reader testing — a legal and practical necessity here.",
        icon: "Accessibility",
      },
      {
        title: "Data minimisation",
        description:
          "Collect only what is needed, expose only what a role requires, and delete on a defined retention schedule.",
        icon: "Database",
      },
      {
        title: "Integration",
        description:
          "Connecting practice management, scheduling and records systems where documented interfaces exist.",
        icon: "Plug",
      },
    ],
    sections: [
      {
        heading: "What can we cover and what sits outside engineering?",
        answer:
          "We build the technical safeguards; administrative and physical safeguards, policies and formal certification sit with you and your compliance advisors.",
        body: [
          {
            type: "table",
            head: ["We handle", "You or your advisors handle"],
            rows: [
              ["Access control and authentication", "Workforce training and policies"],
              ["Audit logging and monitoring", "Risk assessment documentation"],
              ["Encryption in transit and at rest", "Physical safeguards"],
              ["Minimum-necessary data exposure", "Business associate management"],
              ["Secure development practices", "Formal certification and audit"],
              ["Infrastructure in compliant regions", "Breach notification procedures"],
            ],
          },
          {
            type: "callout",
            title: "We will not claim to make you compliant",
            text: "Any vendor promising HIPAA compliance from a website build is overstating what software alone can do. We build the technical controls properly and tell you exactly where the boundary is.",
          },
        ],
      },
      {
        heading: "What do we build for healthcare clients?",
        body: [
          {
            type: "list",
            items: [
              "Provider and practice websites with accessible service information and online booking.",
              "Patient portals for appointments, documents, results access and secure messaging.",
              "Intake and consent forms replacing paper and PDF workflows.",
              "Internal scheduling, referral and coordination tools for clinical teams.",
              "Directory and location sites for multi-site providers.",
            ],
          },
        ],
      },
      {
        heading: "Why does accessibility matter more here?",
        body: [
          {
            type: "p",
            text: "Your users are disproportionately likely to have a disability, be older, be using assistive technology, or be trying to complete a task while unwell or distressed. An inaccessible healthcare site excludes exactly the people it exists to serve, and it carries clear legal exposure in most jurisdictions.",
          },
          {
            type: "list",
            items: [
              "Text readable at 200% zoom without horizontal scrolling.",
              "Every form field labelled, with errors announced and linked to the field.",
              "Full keyboard operation with a visible focus indicator throughout.",
              "Plain language for critical instructions, tested with real users where possible.",
              "No information conveyed by colour alone.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Practice website",
        range: "$3,500 – $9,000",
        timeline: "4–7 weeks",
        bestFor: "Providers needing a credible, accessible site",
        includes: [
          "Custom accessible design",
          "Service and location pages",
          "Online booking integration",
          "Accessibility audit and fixes",
        ],
      },
      {
        name: "Patient portal",
        range: "$18,000 – $60,000",
        timeline: "10–20 weeks",
        bestFor: "Secure patient-facing functionality",
        includes: [
          "Authentication and role-based access",
          "Appointments, documents and forms",
          "Audit logging and monitoring",
          "System integrations",
          "Security review and handover",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $1,200 / month",
        timeline: "Ongoing",
        bestFor: "Systems patients depend on",
        includes: [
          "Security patching and monitoring",
          "Backups with restore testing",
          "Accessibility regression checks",
          "Priority incident response",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you sign a Business Associate Agreement?",
        answer:
          "Where the engagement involves protected health information, yes. We also scope access so that in many projects we never need to touch live patient data at all, using seeded or anonymised datasets instead.",
      },
      {
        question: "Do you work with existing practice management systems?",
        answer:
          "Where a documented API or integration interface exists, yes. Feasibility is confirmed during discovery before you commit to a build — some legacy systems genuinely cannot be integrated with cleanly.",
      },
      {
        question: "How do you handle patient data during development?",
        answer:
          "We do not copy production data to development environments. Work uses seeded or anonymised datasets, and any production access is via named, scoped, audited accounts.",
      },
      {
        question: "Is your work HIPAA compliant?",
        answer:
          "We implement the technical safeguards the Security Rule describes. Compliance as a whole includes administrative and physical safeguards and documentation that sit with your organisation. We will map clearly which parts we deliver.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-application-development", "web-development-company-texas", "custom-software-development"],
    readMore: [
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Privacy compliance for websites", href: "/blog/privacy-compliance-for-websites" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "fintech",
    group: "industries",
    title: "Web development for fintech companies",
    seoTitle: "Fintech Web Development Services | ROVQIX",
    description:
      "Web development for fintech — dashboards, onboarding flows, payment integrations and marketing sites, with the security and audit expectations the sector requires.",
    excerpt:
      "Financial products where correctness, auditability and security review are the baseline, not a later phase.",
    eyebrow: "Fintech",
    primaryKeyword: "fintech web development",
    secondaryKeywords: [
      "financial services web development",
      "fintech dashboard development",
      "payment integration development",
      "fintech saas engineering",
    ],
    answer:
      "ROVQIX builds fintech web products — customer dashboards, onboarding and KYC flows, payment integrations and marketing sites — with authorisation enforced at the data layer, full audit logging, idempotent money movement and the documentation your security reviewers will ask for.",
    intro:
      "In fintech the interesting engineering is not the interface. It is making sure a retried request does not charge twice, that two concurrent operations cannot spend the same balance, and that every action is reconstructable afterwards.",
    proof: [
      { metric: "Idempotent", label: "Money operations" },
      { metric: "Audit trail", label: "Every state change" },
      { metric: "Reviewed", label: "Security questionnaires" },
      { metric: "PCI scope", label: "Kept minimal" },
    ],
    deliverables: [
      {
        title: "Correctness under concurrency",
        description:
          "Balances and limits handled with database-level guarantees, not read-modify-write patterns that lose updates.",
        icon: "Scale",
      },
      {
        title: "Idempotent operations",
        description:
          "Idempotency keys on every creating request, so a network retry cannot produce a duplicate transaction.",
        icon: "RefreshCw",
      },
      {
        title: "Audit logging",
        description:
          "Immutable records of who did what, when and from where — the first thing any reviewer asks to see.",
        icon: "ScrollText",
      },
      {
        title: "Onboarding and KYC",
        description:
          "Multi-step flows with document upload, verification provider integration and clear status communication.",
        icon: "UserCheck",
      },
      {
        title: "Payment integrations",
        description:
          "Stripe, Adyen and similar, with webhooks handled idempotently and reconciliation built in from the start.",
        icon: "CreditCard",
      },
      {
        title: "Security documentation",
        description:
          "Architecture notes, data flow diagrams and control descriptions your reviewers and enterprise customers will request.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What breaks in financial applications?",
        answer:
          "Lost updates under concurrency, duplicate operations from retries, and state changes nobody can reconstruct afterwards.",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `-- Wrong: two concurrent requests both read 100 and both write 20
SELECT balance FROM accounts WHERE id = $1;
UPDATE accounts SET balance = $2 WHERE id = $1;

-- Right: atomic, and the affected row count tells you if it succeeded
UPDATE accounts SET balance = balance - $2
WHERE id = $1 AND balance >= $2;`,
          },
          {
            type: "list",
            items: [
              "Money movement modelled as immutable ledger entries rather than a mutable balance column.",
              "Idempotency keys stored with the response so a replay returns the original result.",
              "Serialisable isolation with retry handling where invariants span multiple rows.",
              "Reconciliation jobs comparing your records against the provider's, daily.",
              "Webhook handlers that assume at-least-once delivery, because that is what they get.",
            ],
          },
        ],
      },
      {
        heading: "How do we handle security review?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Authorisation checked at the data layer on every read and write, tested with two accounts on every endpoint.",
              "No card data touching your infrastructure — payment provider elements keep PCI scope minimal.",
              "Secrets in a manager, injected at runtime, rotated on schedule, never in the repository or image.",
              "Dependency scanning in CI with a documented patch window by severity.",
              "Structured logs that never contain card numbers, tokens or personal data.",
              "Written answers to vendor security questionnaires, prepared as part of delivery.",
            ],
          },
          {
            type: "callout",
            title: "Enterprise customers will audit you",
            text: "The first large customer will send a security questionnaire that assumes controls exist. Building audit logging, access control and documented data flows early is far cheaper than retrofitting them during a deal.",
          },
        ],
      },
      {
        heading: "What do we build for fintech clients?",
        body: [
          {
            type: "list",
            items: [
              "Customer dashboards showing balances, transactions, statements and exports.",
              "Onboarding and KYC flows with document capture and verification provider integration.",
              "Payment and subscription integrations with reconciliation and dispute handling.",
              "Internal operations tools for support, review queues and manual intervention.",
              "Marketing sites that convey trust and stand up to scrutiny from a cautious audience.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Security & architecture review",
        range: "$3,000 – $7,000",
        timeline: "1–2 weeks",
        bestFor: "Preparing for a customer audit or raise",
        includes: [
          "Authorisation and data-layer review",
          "Concurrency and idempotency assessment",
          "Dependency and secrets audit",
          "Prioritised findings and remediation plan",
        ],
      },
      {
        name: "Product build",
        range: "$20,000 – $70,000",
        timeline: "10–20 weeks",
        bestFor: "Dashboards, onboarding and payment products",
        includes: [
          "Product and interface design",
          "Application build with audit logging",
          "Payment and verification integrations",
          "Security documentation",
          "Deployment, monitoring and handover",
        ],
        featured: true,
      },
      {
        name: "Engineering retainer",
        range: "from $4,000 / month",
        timeline: "Ongoing",
        bestFor: "Continuous delivery with compliance pressure",
        includes: [
          "Dedicated engineering capacity",
          "Security patching within agreed windows",
          "Audit and questionnaire support",
          "Monitoring and incident response",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you handle card data?",
        answer:
          "No, deliberately. We integrate payment provider elements so card details never touch your servers, which keeps your PCI scope at the lowest practical level.",
      },
      {
        question: "Can you support our SOC 2 process?",
        answer:
          "We implement and document the technical controls auditors look for — access control, logging, change management, encryption. The policy, evidence collection and audit itself sit with you and your compliance platform or auditor.",
      },
      {
        question: "How do you test money-handling logic?",
        answer:
          "Heavily, with unit tests on every calculation and edge case, concurrency tests on balance operations, and reconciliation checks against the payment provider in staging before launch.",
      },
      {
        question: "Do you sign NDAs and undergo background checks?",
        answer:
          "Yes to both. We routinely complete vendor onboarding, security questionnaires and background verification for financial services clients.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["saas-development", "web-development-company-new-york", "custom-software-development"],
    readMore: [
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "API security best practices", href: "/blog/api-security-best-practices" },
      { label: "Designing reliable webhooks", href: "/blog/webhooks-design-guide" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "real-estate",
    group: "industries",
    title: "Web development for real estate businesses",
    seoTitle: "Real Estate Web Development Services | ROVQIX",
    description:
      "Property websites and portals — listing search, IDX and feed integrations, agent tools and fast image-heavy pages that still pass Core Web Vitals.",
    excerpt:
      "Listing search that is fast, image-heavy pages that still load quickly, and feeds that do not break every month.",
    eyebrow: "Real estate",
    primaryKeyword: "real estate web development",
    secondaryKeywords: [
      "property website development",
      "idx website development",
      "real estate portal development",
      "property listing search",
    ],
    answer:
      "ROVQIX builds real estate websites and portals: property listing search with fast faceted filtering, IDX and feed integrations, agent and agency tools, lead capture, and image-heavy pages engineered to stay within Core Web Vitals thresholds.",
    intro:
      "Property sites have a specific engineering shape: a large, frequently-changing dataset, heavy imagery, complex filtering, and an SEO structure that can easily generate a million useless URLs.",
    proof: [
      { metric: "Faceted", label: "Search without crawl bloat" },
      { metric: "< 2.5s", label: "LCP on listing pages" },
      { metric: "ISR", label: "Listings fresh and cached" },
      { metric: "Feed-safe", label: "Resilient imports" },
    ],
    deliverables: [
      {
        title: "Listing search",
        description:
          "Fast faceted filtering by location, price, type and features, with results that stay quick as the catalogue grows.",
        icon: "Search",
      },
      {
        title: "Feed integration",
        description:
          "IDX, MLS or portal feed imports that validate, log failures and keep working when the provider changes a field.",
        icon: "Plug",
      },
      {
        title: "Image performance",
        description:
          "Galleries with modern formats, correct sizing and lazy loading, so a 30-photo listing still loads fast on mobile.",
        icon: "Images",
      },
      {
        title: "SEO structure",
        description:
          "Location and property-type pages that target real demand, with filter combinations controlled so crawl budget is not wasted.",
        icon: "Network",
      },
      {
        title: "Lead capture and CRM",
        description:
          "Enquiry forms, viewing requests and valuation tools wired directly into your CRM with source attribution.",
        icon: "UserPlus",
      },
      {
        title: "Agent tools",
        description:
          "Portals for listing management, enquiry handling and performance visibility across offices or agents.",
        icon: "LayoutDashboard",
      },
    ],
    sections: [
      {
        heading: "How do you stop faceted search destroying SEO?",
        answer:
          "By deciding which filter combinations are indexable pages targeting real search demand, and blocking the rest.",
        body: [
          {
            type: "p",
            text: "Four filters with ten options each produce ten thousand URL combinations. Left unmanaged, crawlers spend their budget on 'three-bedroom flats in Zone 4 under £400k sorted by price ascending' and never reach the pages that matter.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Identify the combinations with genuine search volume — usually location plus property type, sometimes plus bedrooms.",
              "Give those real indexable pages with unique content, not just a filtered grid.",
              "Canonicalise other combinations to the nearest indexable parent.",
              "Keep sort order and pagination parameters out of the indexable set.",
              "Verify with crawl stats that budget is going to the pages you chose.",
            ],
          },
        ],
      },
      {
        heading: "How do you keep image-heavy pages fast?",
        body: [
          {
            type: "list",
            items: [
              "Only the first gallery image loads eagerly; everything else is lazy-loaded on scroll or gallery open.",
              "Modern formats with responsive sizing, typically cutting image payload by more than half.",
              "Fixed aspect ratios so the gallery never shifts the layout as images arrive.",
              "Derivatives generated once and cached, not transformed per request.",
              "A CDN in front of everything, with long cache lifetimes on immutable image URLs.",
            ],
          },
          {
            type: "callout",
            title: "The listing grid is usually the problem",
            text: "Forty thumbnails at full resolution on a search results page is the single most common cause of poor mobile performance on property sites. Correct sizing there often halves the page weight on its own.",
          },
        ],
      },
      {
        heading: "How do you handle feeds that break?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Validate every incoming record against a schema and quarantine failures rather than rejecting the whole import.",
              "Log what changed each run so a provider's silent field rename is visible immediately.",
              "Never delete listings because they vanished from one feed run — mark and confirm across runs.",
              "Alert on anomalies: a feed returning 4 listings when it returned 400 yesterday is an incident.",
              "Keep the previous good import so you can roll back a bad one.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Agency website",
        range: "$4,000 – $10,000",
        timeline: "4–7 weeks",
        bestFor: "Agencies with a manageable listing count",
        includes: [
          "Custom design and build",
          "Listing search and detail pages",
          "Single feed integration",
          "Lead capture with CRM handoff",
        ],
      },
      {
        name: "Property portal",
        range: "$18,000 – $60,000",
        timeline: "10–20 weeks",
        bestFor: "Multi-agency or large-catalogue portals",
        includes: [
          "Advanced faceted search",
          "Multiple feed integrations",
          "Agent and admin portals",
          "SEO architecture for location pages",
          "Performance engineering and monitoring",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $900 / month",
        timeline: "Ongoing",
        bestFor: "Sites depending on live feeds",
        includes: [
          "Feed monitoring and fixes",
          "Performance and uptime checks",
          "Security patching",
          "Monthly change hours",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our MLS or IDX provider?",
        answer:
          "Where the provider offers a documented feed or API, yes. We confirm feasibility and licensing constraints during discovery, since some providers restrict how data may be displayed and cached.",
      },
      {
        question: "How many listings can the site handle?",
        answer:
          "Tens of thousands without difficulty using incremental static regeneration and a properly indexed database. Beyond that we introduce a dedicated search index.",
      },
      {
        question: "Can agents manage their own listings?",
        answer:
          "Yes, through an agent portal with role-based access, or by syncing from your existing system if that is where listings are already managed.",
      },
      {
        question: "Do you build valuation or mortgage calculators?",
        answer:
          "Yes. They are effective lead capture tools when the calculation is honest and the follow-up is fast. We build the tool and wire the lead into your CRM with attribution.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["web-application-development", "ecommerce-development", "website-development"],
    readMore: [
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "ecommerce-brands",
    group: "industries",
    title: "Web development for ecommerce brands",
    seoTitle: "Ecommerce Development for DTC Brands | ROVQIX",
    description:
      "Development partner for ecommerce and DTC brands — headless storefronts, checkout optimisation, campaign pages and the performance work that shows up in revenue.",
    excerpt:
      "Storefronts where speed, merchandising control and checkout friction are treated as revenue levers.",
    eyebrow: "Ecommerce",
    primaryKeyword: "ecommerce development for brands",
    secondaryKeywords: [
      "dtc brand web development",
      "headless shopify agency",
      "ecommerce conversion optimization",
      "online store development partner",
    ],
    answer:
      "ROVQIX works with ecommerce and direct-to-consumer brands on headless storefronts, checkout optimisation, campaign landing pages and site performance — with conversion measured before and after so the work is judged on revenue, not on a Lighthouse score.",
    intro:
      "Two numbers matter on an ecommerce site: how fast the product page loads and how many steps stand between wanting the thing and having bought it. Almost everything else is secondary.",
    proof: [
      { metric: "< 2.5s", label: "LCP on product pages" },
      { metric: "Headless", label: "Design without limits" },
      { metric: "Measured", label: "Conversion before/after" },
      { metric: "5–10 days", label: "Campaign page turnaround" },
    ],
    deliverables: [
      {
        title: "Headless storefront",
        description:
          "Next.js front end on Shopify or a commerce API, with statically generated category and product pages.",
        icon: "ShoppingBag",
      },
      {
        title: "Checkout friction work",
        description:
          "Fewer steps, express payment methods, clear shipping and tax, and recovery flows for abandoned carts.",
        icon: "CreditCard",
      },
      {
        title: "Speed as a revenue lever",
        description:
          "Image, script and rendering work, with the conversion effect measured rather than assumed.",
        icon: "Zap",
      },
      {
        title: "Campaign pages",
        description:
          "Landing pages for launches and paid traffic, quoted in two days and delivered in five to ten.",
        icon: "Target",
      },
      {
        title: "Merchandising control",
        description:
          "Collections, bundles, badges and upsells your marketing team can run without a developer.",
        icon: "LayoutGrid",
      },
      {
        title: "Clean analytics",
        description:
          "Ecommerce events, consent handling and server-side tagging where it improves both data quality and page speed.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "Where do ecommerce sites actually lose money?",
        body: [
          {
            type: "table",
            head: ["Leak", "Typical cause", "Fix"],
            rows: [
              ["Slow product pages", "Oversized images, script bloat", "Format and sizing, script audit"],
              ["Checkout abandonment", "Too many steps, surprise costs", "Fewer fields, costs shown early"],
              ["Mobile bounce", "Layout shift, slow first paint", "Reserved space, priority loading"],
              ["Poor search results", "Weak matching and filtering", "Proper search index"],
              ["Failed campaign traffic", "Generic landing pages", "Message-matched pages per campaign"],
              ["Broken tracking", "Consent and tag misconfiguration", "Verified event implementation"],
            ],
          },
          {
            type: "callout",
            title: "Fix tracking first",
            text: "On more than one audit we have found the client optimising against numbers that were wrong — duplicate purchase events, or a consent banner blocking half the data. Verify measurement before you act on it.",
          },
        ],
      },
      {
        heading: "When should a brand go headless?",
        answer:
          "When design differentiation or page speed materially affects revenue, and there is enough volume to justify the build.",
        body: [
          {
            type: "p",
            text: "A store doing its first few thousand dollars a month should stay on a good theme and spend the money on product and acquisition. Once the site is a meaningful part of the brand and traffic is significant, the constraints of a theme start costing more than the build would.",
          },
          {
            type: "list",
            items: [
              "Go headless when: design is a differentiator, performance is measurably costing conversion, or merchandising needs behaviour a theme cannot express.",
              "Stay on a theme when: you are still finding product-market fit, the team is small, or the app ecosystem is doing real work for you.",
            ],
          },
        ],
      },
      {
        heading: "How do we work with brands ongoing?",
        body: [
          {
            type: "list",
            items: [
              "A monthly retainer covering campaign pages, tests and iterations at an agreed volume.",
              "Priority turnaround before peak periods, planned well in advance.",
              "A pre-peak readiness check: load testing, monitoring and a freeze plan before your biggest trading days.",
              "Quarterly review of performance and conversion data with a prioritised list of next changes.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Conversion audit",
        range: "$1,800 – $4,000",
        timeline: "1–2 weeks",
        bestFor: "Knowing what to fix before spending on a rebuild",
        includes: [
          "Performance and Core Web Vitals analysis",
          "Checkout and funnel review",
          "Tracking verification",
          "Prioritised recommendations with estimates",
        ],
      },
      {
        name: "Headless build",
        range: "$12,000 – $35,000",
        timeline: "8–14 weeks",
        bestFor: "Brands where the storefront is the differentiator",
        includes: [
          "Custom design across all templates",
          "Next.js headless storefront",
          "Commerce platform integration",
          "Search, filtering and merchandising",
          "Migration with full redirect mapping",
        ],
        featured: true,
      },
      {
        name: "Growth retainer",
        range: "from $2,500 / month",
        timeline: "Ongoing",
        bestFor: "Brands running continuous campaigns",
        includes: [
          "Campaign landing pages",
          "A/B tests and conversion work",
          "Peak-period readiness",
          "Performance monitoring and reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you migrate our store without losing rankings?",
        answer:
          "Migration includes a complete URL map with 301 redirects for every product and category, structured data carried over, and daily monitoring of coverage and rankings for the first month.",
      },
      {
        question: "Can our team still use Shopify admin?",
        answer:
          "Yes. In a headless setup Shopify remains your admin, catalogue, orders and checkout. Only the storefront presentation moves.",
      },
      {
        question: "How do you prove the work paid off?",
        answer:
          "We record conversion rate, revenue per session and Core Web Vitals before starting and report the same metrics after. If a change does not move them, we say so rather than presenting activity as results.",
      },
      {
        question: "Can you handle Black Friday traffic?",
        answer:
          "Statically generated pages served from a CDN absorb traffic spikes well. We run load testing and a readiness review before peak periods, with a change freeze and monitoring plan agreed in advance.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["ecommerce-development", "landing-page-design", "web-development-company-australia"],
    readMore: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "The anatomy of a converting landing page", href: "/blog/anatomy-of-a-converting-landing-page" },
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "agencies-and-studios",
    group: "industries",
    title: "Development partner for agencies and design studios",
    seoTitle: "Development Partner for Agencies | ROVQIX",
    description:
      "Engineering partner for design studios and marketing agencies — white label builds from your designs, reserved capacity, two-day quotes and contractual non-solicitation.",
    excerpt:
      "The engineering half of your studio: reserved capacity, fast quotes, and a contract that keeps us behind you.",
    eyebrow: "For agencies",
    primaryKeyword: "development partner for agencies",
    secondaryKeywords: [
      "white label development studio",
      "agency development outsourcing",
      "figma to code agency partner",
      "subcontract development team",
    ],
    answer:
      "ROVQIX works as the engineering partner for design studios and marketing agencies: building from your Figma files under your brand, quoting within two working days, reserving monthly capacity for partners, and operating under contractual non-solicitation so your client relationships stay yours.",
    intro:
      "Studios lose good work for two reasons: no capacity to build it, and no reliable quote to put in the proposal. We exist to remove both.",
    proof: [
      { metric: "2 days", label: "Quote turnaround" },
      { metric: "Reserved", label: "Monthly capacity" },
      { metric: "Non-solicit", label: "In writing" },
      { metric: "Invisible", label: "No attribution" },
    ],
    deliverables: [
      {
        title: "Two-day quotes",
        description:
          "Send a design or scope; get a fixed number in two working days so you can quote while the client is engaged.",
        icon: "Timer",
      },
      {
        title: "Faithful implementation",
        description:
          "Built to match your designs precisely, with questions raised early instead of assumptions made quietly.",
        icon: "PenTool",
      },
      {
        title: "Reserved capacity",
        description:
          "Partner agencies get an allocated block each month, so you can sell work knowing it can be staffed.",
        icon: "CalendarCheck",
      },
      {
        title: "Complete invisibility",
        description:
          "No credits, no links, no client contact unless you bring us onto a call as your team.",
        icon: "EyeOff",
      },
      {
        title: "Non-solicitation",
        description:
          "A binding commitment not to approach your clients, because the partnership only works if that is certain.",
        icon: "ShieldCheck",
      },
      {
        title: "Resellable maintenance",
        description:
          "Ongoing support delivered under your brand, with reports you forward and a margin you set.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "What do agencies bring us most often?",
        body: [
          {
            type: "list",
            items: [
              "Next.js marketing sites from studio designs, with a CMS for the client's team.",
              "Ecommerce storefronts beyond what an in-house team can build.",
              "Web applications and client portals outside a typical agency's engineering range.",
              "Complex animation and interaction work that needs real engineering.",
              "Performance and accessibility remediation on sites you have already shipped.",
              "Retainers you resell for ongoing maintenance and small changes.",
            ],
          },
        ],
      },
      {
        heading: "What makes designs cheap or expensive to build?",
        answer:
          "Consistency and specified states. Not visual ambition.",
        body: [
          {
            type: "table",
            head: ["Cheaper to build", "More expensive"],
            rows: [
              ["Reused components across pages", "Every section structurally unique"],
              ["States specified in the file", "States we have to infer and confirm"],
              ["A defined type and spacing scale", "Arbitrary values per screen"],
              ["Mobile designed, not implied", "Desktop only, mobile 'as you see fit'"],
              ["Realistic content lengths", "Perfect-length placeholder copy"],
              ["Ambitious but consistent animation", "One-off effects on every section"],
            ],
          },
          {
            type: "callout",
            title: "Send us the file before you quote",
            text: "A ten-minute look at the Figma file lets us flag the two or three decisions that will double the build cost — usually while they are still cheap for you to change.",
          },
        ],
      },
      {
        heading: "How does the partnership work commercially?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "We quote you a fixed build cost. What you charge your client is entirely your business and we never ask.",
              "You are our client, contractually. We invoice you; you invoice them.",
              "Partner retainers get discounted project rates and priority scheduling.",
              "Payment terms are net 15 with us, so you can align them with your own client terms.",
              "We report to you on an agreed cadence, in your tooling or ours.",
            ],
          },
        ],
      },
      {
        heading: "What do we need from a partner?",
        body: [
          {
            type: "list",
            items: [
              "One decision-maker on your side who can answer design questions quickly.",
              "Deadlines shared with us before they are promised to the client.",
              "Early visibility of pipeline so capacity can be reserved.",
              "Designs with states, or a willingness to resolve gaps as they come up.",
              "Direct feedback when something is not working, early enough to fix it.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Project basis",
        range: "Quoted in 2 working days",
        timeline: "Per scope",
        bestFor: "Occasional overflow",
        includes: [
          "Fixed quote from your designs",
          "Milestone delivery",
          "White label throughout",
          "Documented handover",
        ],
      },
      {
        name: "Partner retainer",
        range: "from $4,500 / month",
        timeline: "Ongoing",
        bestFor: "Studios with steady project flow",
        includes: [
          "Reserved monthly capacity",
          "Priority quoting and scheduling",
          "Discounted project rates",
          "One named technical lead",
        ],
        featured: true,
      },
      {
        name: "Maintenance resale",
        range: "from $250 / site / month",
        timeline: "Ongoing",
        bestFor: "Recurring revenue from past clients",
        includes: [
          "Updates, monitoring and backups",
          "Reports branded for forwarding",
          "Agreed change hours per site",
          "You set the resale price",
        ],
      },
    ],
    faqs: [
      {
        question: "How do we know you will not poach our clients?",
        answer:
          "Non-solicitation is in the partner agreement, and our name appears nowhere in the code, CMS or deployment. Practically, our business depends on agency partners trusting that — one breach would end the model.",
      },
      {
        question: "Can you meet aggressive client deadlines?",
        answer:
          "Often, if we know early. Tell us the date before you commit to it and you will get an honest yes or no rather than an optimistic yes followed by a difficult conversation.",
      },
      {
        question: "What if the design has gaps?",
        answer:
          "We list the questions in one batch rather than dripping them out, and propose sensible defaults so you can approve quickly instead of reopening the design file.",
      },
      {
        question: "Do you work in our project tools?",
        answer:
          "Yes — Slack, Jira, Linear, Asana, Basecamp, ClickUp, Notion. We adapt to your process rather than asking you to adopt ours.",
      },
      {
        question: "Can you handle the client's technical questions?",
        answer:
          "Yes, either by briefing you so you answer confidently, or by joining the call as a member of your team if you prefer.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["white-label-web-development", "website-maintenance", "web-development-company-new-york"],
    readMore: [
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
      { label: "How to scope a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "Technical SEO checklist", href: "/blog/technical-seo-checklist-developers" },
    ],
    publishedAt: "2026-08-12",
  },
];
