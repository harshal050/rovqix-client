import type { LandingPage } from "./types";

export const servicePagesUs: LandingPage[] = [
  {
    slug: "customer-portal-development",
    group: "services",
    title: "Customer portal development",
    seoTitle: "Customer Portal Development Services | ROVQIX",
    description:
      "Custom customer portals — account status, documents, self-service requests and support — that reduce inbound calls and give customers visibility without a phone call.",
    excerpt:
      "The fastest way to reduce inbound support calls is to answer the question before it is asked.",
    eyebrow: "Customer portals",
    primaryKeyword: "customer portal development",
    secondaryKeywords: [
      "client portal development",
      "self service portal software",
      "secure customer portal",
      "b2b customer portal",
    ],
    answer:
      "ROVQIX builds custom customer portals with authentication, role-based access, account and order status, document exchange, self-service requests and support history — typically reducing routine inbound enquiries substantially by making status visible without a call.",
    intro:
      "Most support volume is not problems. It is people asking where something is. A portal answers that question once instead of forty times a day.",
    proof: [
      { metric: "Status-first", label: "The top support question" },
      { metric: "Role-scoped", label: "Enforced at data layer" },
      { metric: "Audit logged", label: "Who saw and changed what" },
      { metric: "8–16 wks", label: "Typical build" },
    ],
    deliverables: [
      {
        title: "Authentication and roles",
        description:
          "Sessions, invitations, team accounts and permissions enforced at the data layer, not in the interface.",
        icon: "ShieldCheck",
      },
      {
        title: "Status visibility",
        description:
          "Orders, cases, projects or policies — whatever your customers currently phone to ask about.",
        icon: "Activity",
      },
      {
        title: "Document exchange",
        description:
          "Secure upload and download with versioning and retention, replacing email attachments.",
        icon: "FileText",
      },
      {
        title: "Self-service actions",
        description:
          "The requests your team currently processes manually from an email or a phone call.",
        icon: "MousePointerClick",
      },
      {
        title: "Notifications",
        description:
          "Proactive updates when status changes, which prevents the enquiry rather than answering it.",
        icon: "MessageSquare",
      },
      {
        title: "System integration",
        description:
          "Connected to the systems of record so the portal shows truth rather than a stale copy.",
        icon: "Plug",
      },
    ],
    sections: [
      {
        heading: "What should a portal contain?",
        answer:
          "Start with whatever your support team is asked most often, and build only that first.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Review a month of inbound enquiries and categorise them. The top three categories are your first phase.",
              "Status visibility almost always ranks first — where is my order, case, project, claim.",
              "Document access is usually second, replacing 'can you resend that'.",
              "Self-service actions come third: change details, request something, raise a case.",
              "Everything else can wait until you see what people actually use.",
            ],
          },
          {
            type: "callout",
            title: "Notifications beat portals",
            text: "A portal answers the question when someone remembers to look. A notification when status changes prevents the question entirely. Build both, and expect the notifications to do more work.",
          },
        ],
      },
      {
        heading: "How do you keep portal data accurate?",
        body: [
          {
            type: "list",
            items: [
              "Read from the system of record rather than maintaining a second copy that will drift.",
              "Cache for performance with a short, explicit lifetime and a visible last-updated time.",
              "Where a system cannot be queried live, sync on a schedule and show the sync time honestly.",
              "Never show a status you cannot verify — 'processing' with no source is worse than no portal.",
              "Reconcile daily and alert on disagreement rather than silently preferring one source.",
            ],
          },
        ],
      },
      {
        heading: "What about security?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Authorisation checked at the data layer on every read, tested with two accounts on every endpoint.",
              "Customers can see only their own records, enforced by the query rather than by the UI.",
              "Audit logging of access to sensitive records, retained per your policy.",
              "Document access via short-lived signed URLs rather than guessable paths.",
              "Session handling, rate limiting and account recovery designed rather than defaulted.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Discovery",
        range: "$2,500 – $5,000",
        timeline: "2 weeks",
        bestFor: "Defining scope from real enquiry data",
        includes: [
          "Support enquiry analysis",
          "Integration feasibility",
          "Clickable prototype",
          "Fixed-price proposal",
        ],
      },
      {
        name: "Portal build",
        range: "$15,000 – $50,000",
        timeline: "8–16 weeks",
        bestFor: "Reducing support load and improving service",
        includes: [
          "Design and full build",
          "Auth, roles and audit logging",
          "System integrations",
          "Notifications and documents",
          "Training and handover",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $1,500 / month",
        timeline: "Ongoing",
        bestFor: "Portals customers depend on",
        includes: [
          "Priority response",
          "Monthly enhancement hours",
          "Integration monitoring",
          "Security patching",
        ],
      },
    ],
    faqs: [
      {
        question: "How much support volume will this remove?",
        answer:
          "It depends entirely on what proportion of your enquiries are status questions. We analyse a month of real enquiries during discovery and give you a grounded estimate rather than a generic claim.",
      },
      {
        question: "Can it integrate with our existing systems?",
        answer:
          "Where an API, replica or scheduled export exists, yes. We confirm feasibility during discovery, because a portal showing stale data is worse than no portal.",
      },
      {
        question: "Do customers need to create accounts?",
        answer:
          "Usually yes for a portal, but consider magic-link access for low-sensitivity status checks. Forced registration for a simple status query loses more people than it protects.",
      },
      {
        question: "Can we start small?",
        answer:
          "Yes, and you should. Build status visibility first, measure whether people use it, then add documents and self-service based on what you learn.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-application-development", "custom-software-development", "insurance"],
    readMore: [
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "dashboard-development",
    group: "services",
    title: "Dashboard and data visualisation development",
    seoTitle: "Dashboard Development Services | ROVQIX",
    description:
      "Custom dashboards and data visualisation — built around the decisions they support, with performance that holds when the dataset grows.",
    excerpt:
      "Dashboards built around a decision, not around whatever data happened to be available.",
    eyebrow: "Dashboards",
    primaryKeyword: "dashboard development services",
    secondaryKeywords: [
      "custom dashboard development",
      "data visualization development",
      "business intelligence dashboard",
      "analytics dashboard build",
    ],
    answer:
      "ROVQIX builds custom dashboards and data visualisation interfaces — designed around the specific decisions they support, with server-side aggregation, sensible refresh strategies and performance that holds as the underlying dataset grows.",
    intro:
      "Most dashboards fail the same way: they display everything available and support no decision in particular. People look once, then never again.",
    proof: [
      { metric: "Decision-first", label: "Not data-first" },
      { metric: "Aggregated", label: "Server-side, indexed" },
      { metric: "Accessible", label: "Charts with data tables" },
      { metric: "Exportable", label: "Because people want CSV" },
    ],
    deliverables: [
      {
        title: "Decision mapping",
        description:
          "Establishing what decision each view supports, then removing everything that does not serve it.",
        icon: "Target",
      },
      {
        title: "Server-side aggregation",
        description:
          "Query and aggregate in the database with proper indexes, not by shipping rows to the browser.",
        icon: "Database",
      },
      {
        title: "Appropriate chart types",
        description:
          "Charts chosen for the comparison being made, not for visual variety.",
        icon: "BarChart3",
      },
      {
        title: "Filtering and drill-down",
        description:
          "Shareable filter state in the URL so a colleague sees exactly what you saw.",
        icon: "Search",
      },
      {
        title: "Accessible visualisation",
        description:
          "Colour-independent encoding, keyboard navigation and an equivalent data table for every chart.",
        icon: "Accessibility",
      },
      {
        title: "Export",
        description:
          "CSV and PDF, because someone always needs the numbers in a spreadsheet for a board pack.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "Why do most dashboards go unused?",
        answer:
          "Because they were designed around available data rather than around a decision someone has to make.",
        body: [
          {
            type: "table",
            head: ["Unused dashboard", "Used dashboard"],
            rows: [
              ["Shows every metric available", "Shows the metrics for one decision"],
              ["No sense of good or bad", "Targets and thresholds visible"],
              ["Same view for everyone", "Role-appropriate views"],
              ["Requires interpretation", "States the conclusion"],
              ["Loads in twelve seconds", "Loads immediately"],
              ["No export", "CSV export on every table"],
            ],
          },
          {
            type: "callout",
            title: "Ask what happens next",
            text: "For each panel: what does someone do differently based on this number? If there is no answer, remove it. A dashboard with four panels that drive action beats one with thirty that drive scrolling.",
          },
        ],
      },
      {
        heading: "How do you keep dashboards fast as data grows?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Aggregate in the database, not in the browser. Never ship a hundred thousand rows to compute a sum.",
              "Index for the actual query shapes, including the date-range filters every dashboard uses.",
              "Pre-compute expensive aggregates on a schedule where real-time is not genuinely required.",
              "Paginate and virtualise long tables rather than rendering everything.",
              "Set a performance budget per panel and enforce it as data volume grows.",
            ],
          },
          {
            type: "p",
            text: "Most slow dashboards are slow because a query that was fine at ten thousand rows is doing a sequential scan at ten million. It is usually an indexing problem, not a charting one.",
          },
        ],
      },
      {
        heading: "How real-time does it need to be?",
        body: [
          {
            type: "table",
            head: ["Use case", "Refresh", "Why"],
            rows: [
              ["Operational monitoring", "Real-time", "Decisions made continuously"],
              ["Sales pipeline", "Every few minutes", "Nobody watches it per second"],
              ["Management reporting", "Hourly or daily", "Decisions are not made per minute"],
              ["Financial reporting", "Daily, after close", "Accuracy matters more than freshness"],
              ["Historical analysis", "Batch", "Real-time adds cost, not value"],
            ],
          },
          {
            type: "p",
            text: "Real-time is the most expensive default in dashboard work. We size refresh frequency to the decision, which frequently removes most of the infrastructure cost.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Single dashboard",
        range: "$4,000 – $12,000",
        timeline: "3–6 weeks",
        bestFor: "One well-defined view",
        includes: [
          "Decision mapping and design",
          "Server-side aggregation",
          "Filtering and export",
          "Accessible chart implementation",
        ],
      },
      {
        name: "Dashboard platform",
        range: "$15,000 – $45,000",
        timeline: "8–16 weeks",
        bestFor: "Multiple roles and views",
        includes: [
          "Role-based views and permissions",
          "Multiple integrated data sources",
          "Scheduled reports and alerting",
          "Performance engineering",
          "Handover and documentation",
        ],
        featured: true,
      },
      {
        name: "Dashboard rescue",
        range: "$2,500 – $7,000",
        timeline: "2–4 weeks",
        bestFor: "Dashboards that are slow or unused",
        includes: [
          "Usage and performance analysis",
          "Query and index optimisation",
          "View simplification",
          "Before-and-after measurement",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we build custom or use a BI tool?",
        answer:
          "Use a BI tool for internal analysis by analysts who want to explore. Build custom when the dashboard is part of your product, needs your design system, or serves a specific operational decision repeatedly.",
      },
      {
        question: "Can you connect to multiple data sources?",
        answer:
          "Yes. Where sources disagree we build reconciliation that surfaces the disagreement rather than silently preferring one, because a dashboard nobody trusts is worse than none.",
      },
      {
        question: "How do you make charts accessible?",
        answer:
          "Never encode meaning in colour alone, provide an equivalent data table for every chart, make interactive elements keyboard-operable, and ensure text alternatives describe the trend rather than the image.",
      },
      {
        question: "Can users build their own views?",
        answer:
          "We can build a report builder, but it is substantially more work than fixed views. Most teams need three well-designed views far more than they need a builder they will use twice.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-application-development", "database-design-services", "react-development"],
    readMore: [
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "design-system-development",
    group: "services",
    title: "Design system and component library development",
    seoTitle: "Design System Development Services | ROVQIX",
    description:
      "Design systems that get adopted — tokens, accessible components, documentation and the governance that stops it drifting back into inconsistency within a year.",
    excerpt:
      "Most design systems fail on adoption, not on craft. That is a governance problem.",
    eyebrow: "Design systems",
    primaryKeyword: "design system development",
    secondaryKeywords: [
      "component library development",
      "design tokens implementation",
      "react component library",
      "design system consulting",
    ],
    answer:
      "ROVQIX builds design systems for product teams — design tokens, accessible React components, documentation and contribution governance — designed so the system is easier to use than working around it, which is what determines adoption.",
    intro:
      "Every design system we have been asked to rescue was well made. It failed because using it was harder than not using it.",
    proof: [
      { metric: "Adoption", label: "The actual success metric" },
      { metric: "WCAG 2.2 AA", label: "Components accessible" },
      { metric: "Documented", label: "With usage guidance" },
      { metric: "Governed", label: "Contribution path defined" },
    ],
    deliverables: [
      {
        title: "Design tokens",
        description:
          "Colour, spacing, typography and radius as a single source shared between design tools and code.",
        icon: "Palette",
      },
      {
        title: "Accessible primitives",
        description:
          "Components with keyboard operation, focus management and ARIA handled correctly once, not per team.",
        icon: "Accessibility",
      },
      {
        title: "Composable APIs",
        description:
          "Composition over configuration, so components stay readable instead of growing nineteen boolean props.",
        icon: "Blocks",
      },
      {
        title: "Documentation",
        description:
          "Live examples, props, and — critically — when not to use each component.",
        icon: "FileText",
      },
      {
        title: "Adoption path",
        description:
          "Incremental migration so teams can adopt component by component rather than in a big-bang rewrite.",
        icon: "GitBranch",
      },
      {
        title: "Governance",
        description:
          "A defined contribution process, versioning and deprecation policy so the system stays alive.",
        icon: "Compass",
      },
    ],
    sections: [
      {
        heading: "Why do design systems fail?",
        body: [
          {
            type: "table",
            head: ["Failure", "Cause", "Fix"],
            rows: [
              ["Teams work around it", "Missing the component they need", "Fast contribution path"],
              ["It drifts out of date", "No owner after launch", "Named maintainer and budget"],
              ["Components are unusable", "Configuration over composition", "Composable APIs"],
              ["Nobody knows it exists", "No documentation or onboarding", "Docs site and sessions"],
              ["Design and code disagree", "Tokens duplicated in two places", "Single token source"],
              ["Adoption stalls", "All-or-nothing migration", "Incremental adoption"],
            ],
          },
          {
            type: "callout",
            title: "Measure adoption, not component count",
            text: "The success metric is what percentage of the interface is built from system components. A beautiful system used on two screens has failed. We instrument this so it is visible rather than assumed.",
          },
        ],
      },
      {
        heading: "What should be in the system, and what should not?",
        body: [
          {
            type: "list",
            items: [
              "In: primitives used across products — button, input, select, modal, table, toast, form field.",
              "In: tokens, layout primitives and typography, which are what create visual consistency.",
              "In: accessibility behaviour that is genuinely hard to get right repeatedly.",
              "Out: product-specific components used in one place. They belong in that product.",
              "Out: page templates, which age faster than the components they contain.",
              "Out: anything nobody has needed twice yet. Wait for the second use case.",
            ],
          },
        ],
      },
      {
        heading: "How do teams adopt it without stopping work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ship tokens first. Colour and spacing consistency lands immediately with minimal risk.",
              "Replace the highest-frequency component next — usually buttons and form fields.",
              "Adopt within features being actively worked on, not as a separate migration project.",
              "Provide codemods where an API change is mechanical.",
              "Track adoption percentage and report it, so progress is visible to leadership.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Foundations",
        range: "$4,000 – $9,000",
        timeline: "3–5 weeks",
        bestFor: "Tokens and core primitives",
        includes: [
          "Token architecture and theming",
          "8–12 accessible primitives",
          "Documentation site",
          "Integration into one product",
        ],
      },
      {
        name: "Full design system",
        range: "$12,000 – $35,000",
        timeline: "8–16 weeks",
        bestFor: "Multi-product organisations",
        includes: [
          "Complete token and component set",
          "Figma library aligned to code",
          "Documentation and usage guidance",
          "Governance and contribution process",
          "Adoption support across teams",
        ],
        featured: true,
      },
      {
        name: "System rescue",
        range: "$3,000 – $9,000",
        timeline: "2–5 weeks",
        bestFor: "A system teams are avoiding",
        includes: [
          "Adoption audit and interviews",
          "API and accessibility fixes",
          "Documentation overhaul",
          "Governance recommendations",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we build on a headless component library?",
        answer:
          "Usually yes. Radix, Base UI or React Aria handle the accessibility behaviour that is genuinely hard, and you style on top. Building a combobox or date picker from scratch is rarely a good use of budget.",
      },
      {
        question: "Who maintains it after launch?",
        answer:
          "Someone must own it with allocated time. A system with no maintainer drifts within two quarters. If nobody internally can own it, we can maintain it on a retainer until someone can.",
      },
      {
        question: "How do we keep Figma and code in sync?",
        answer:
          "One token source generating both, and a contribution process where a component is not done until both sides ship. Perfect sync is unrealistic; a defined process for resolving drift is achievable.",
      },
      {
        question: "Is a design system worth it for one product?",
        answer:
          "A component library is; a full design system with governance probably is not. The overhead pays off with multiple products or teams. For one product, focus on consistent components and skip the ceremony.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["react-development", "ui-ux-design", "accessibility-remediation-services"],
    readMore: [
      { label: "React component architecture", href: "/blog/react-component-architecture" },
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "code-audit-and-technical-due-diligence",
    group: "services",
    title: "Code audit and technical due diligence",
    seoTitle: "Code Audit & Technical Due Diligence | ROVQIX",
    description:
      "Independent code audits and technical due diligence — architecture, security, maintainability and delivery risk, reported plainly for investors or leadership.",
    excerpt:
      "An independent read on a codebase, written for the person who has to make a decision about it.",
    eyebrow: "Audit",
    primaryKeyword: "technical due diligence",
    secondaryKeywords: [
      "code audit services",
      "software due diligence",
      "codebase assessment",
      "technical risk assessment",
    ],
    answer:
      "ROVQIX performs independent code audits and technical due diligence covering architecture, security, maintainability, test coverage, dependency risk and delivery velocity — delivered as a plain-language report with severity-ranked findings and remediation estimates.",
    intro:
      "Whether you are acquiring a company, inheriting a codebase or deciding whether to rebuild, the question is the same: what is actually here, and what will it cost to live with.",
    proof: [
      { metric: "1–3 wks", label: "Typical audit" },
      { metric: "Ranked", label: "Findings by severity" },
      { metric: "Costed", label: "Remediation estimates" },
      { metric: "Independent", label: "No incentive to find work" },
    ],
    deliverables: [
      {
        title: "Architecture review",
        description:
          "How the system is structured, whether it matches its scale, and where it will strain next.",
        icon: "Compass",
      },
      {
        title: "Security assessment",
        description:
          "Authorisation, input handling, secrets, dependencies and exposure reviewed against OWASP guidance.",
        icon: "ShieldCheck",
      },
      {
        title: "Maintainability",
        description:
          "Test coverage, documentation, consistency and how quickly a new engineer could become productive.",
        icon: "Blocks",
      },
      {
        title: "Dependency and licence risk",
        description:
          "Outdated, unmaintained or vulnerable dependencies, plus licence compatibility for commercial use.",
        icon: "Plug",
      },
      {
        title: "Delivery assessment",
        description:
          "CI, deployment, rollback and monitoring — how safely the team can actually ship.",
        icon: "GitBranch",
      },
      {
        title: "Plain-language report",
        description:
          "Written for a decision-maker, with severity, cost to remediate and what happens if you do nothing.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What do we actually look at?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Repository history: commit patterns, contributor concentration, review practice.",
              "Architecture: boundaries, coupling, and whether the structure fits the problem.",
              "Data layer: schema quality, migration safety, indexing and query patterns.",
              "Security: authorisation enforcement, input validation, secrets handling, dependency advisories.",
              "Testing: what is covered, what is not, and whether the suite is trustworthy.",
              "Operations: CI, deployment, rollback, monitoring, incident history.",
              "Key-person risk: how much knowledge sits with one individual.",
            ],
          },
        ],
      },
      {
        heading: "What does the report contain?",
        answer:
          "Severity-ranked findings, each with evidence, business impact and a remediation estimate.",
        body: [
          {
            type: "table",
            head: ["Severity", "Meaning", "Expected action"],
            rows: [
              ["Critical", "Active security or data-loss risk", "Fix before anything else"],
              ["High", "Will cause an incident or block growth", "Fix within a quarter"],
              ["Medium", "Slows delivery or raises cost", "Plan into roadmap"],
              ["Low", "Worth doing when nearby", "Opportunistic"],
              ["Observation", "Context, not a defect", "Awareness only"],
            ],
          },
          {
            type: "callout",
            title: "We report what is good too",
            text: "An audit that lists only problems is not useful for a decision. If the architecture is sound and the tests are trustworthy, that is the most important finding in the report.",
          },
        ],
      },
      {
        heading: "How is this different from a vendor pitching a rebuild?",
        body: [
          {
            type: "p",
            text: "An audit is priced and delivered independently of any implementation work. We are paid the same whether the conclusion is 'this is in good shape' or 'this needs significant work'.",
          },
          {
            type: "list",
            items: [
              "Fixed fee, agreed before we look at anything.",
              "No obligation to engage us for remediation, and no discount for doing so.",
              "Findings include what would be needed for your own team to fix them.",
              "We say plainly when a system is fine and the perceived problem is elsewhere.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Focused audit",
        range: "$2,500 – $5,000",
        timeline: "1 week",
        bestFor: "One specific concern",
        includes: [
          "Targeted review of one area",
          "Severity-ranked findings",
          "Remediation estimates",
          "Written report and walkthrough",
        ],
      },
      {
        name: "Full codebase audit",
        range: "$5,000 – $15,000",
        timeline: "2–3 weeks",
        bestFor: "Inheriting or acquiring a codebase",
        includes: [
          "Architecture, security and data review",
          "Testing and operations assessment",
          "Dependency and licence review",
          "Key-person risk analysis",
          "Full report and presentation",
        ],
        featured: true,
      },
      {
        name: "Investment due diligence",
        range: "$8,000 – $25,000",
        timeline: "2–4 weeks",
        bestFor: "Investors and acquirers",
        includes: [
          "Everything in the full audit",
          "Team capability assessment",
          "Scalability and cost modelling",
          "Roadmap feasibility review",
          "Investor-ready summary",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you need production access?",
        answer:
          "No. Read access to the repository, plus conversations with the team, covers most of it. Some findings need infrastructure visibility, which can be a walkthrough rather than access.",
      },
      {
        question: "How long does an audit take?",
        answer:
          "One week for a focused review, two to three for a full codebase audit, and up to four for investment due diligence including team assessment.",
      },
      {
        question: "Will you recommend a rewrite?",
        answer:
          "Rarely. Rewrites are usually the wrong answer and we say so. When one is genuinely justified we explain specifically why incremental improvement will not work.",
      },
      {
        question: "Can you audit a codebase in a language you do not build in?",
        answer:
          "For architecture, security patterns, testing and operations, often yes. For deep language-specific idiom review in Java, Go or C#, we would tell you to use a specialist rather than charging you to learn.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["rebuild-vs-refactor", "custom-software-development", "devops-and-cloud-services"],
    readMore: [
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Dependency security and supply chain", href: "/blog/dependency-security-supply-chain" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "conversion-rate-optimization",
    group: "services",
    title: "Conversion rate optimisation for websites",
    seoTitle: "Conversion Rate Optimization Services | ROVQIX",
    description:
      "CRO grounded in measurement — funnel analysis, friction removal, test design and implementation, reported on revenue rather than on micro-conversions.",
    excerpt:
      "Most CRO wins come from removing friction, not from testing button colours.",
    eyebrow: "Conversion",
    primaryKeyword: "conversion rate optimization services",
    secondaryKeywords: [
      "cro agency",
      "website conversion optimization",
      "ab testing implementation",
      "funnel optimization service",
    ],
    answer:
      "ROVQIX provides conversion rate optimisation as an engineering service: verifying measurement first, analysing where the funnel leaks, removing friction, then designing and implementing tests where traffic supports them — reported against revenue rather than micro-conversions.",
    intro:
      "The first thing we usually find is that the analytics are wrong. Optimising against numbers that are double-counting or blocked by consent is worse than doing nothing.",
    proof: [
      { metric: "Measure first", label: "Tracking verified" },
      { metric: "Friction", label: "Where most wins are" },
      { metric: "Revenue", label: "The reported metric" },
      { metric: "Honest", label: "About sample size" },
    ],
    deliverables: [
      {
        title: "Measurement audit",
        description:
          "Verifying events fire once, correctly, and that consent handling is not silently removing half the data.",
        icon: "Activity",
      },
      {
        title: "Funnel analysis",
        description:
          "Where people leave, segmented by device and source, so the biggest leak is addressed first.",
        icon: "BarChart3",
      },
      {
        title: "Friction removal",
        description:
          "Fewer steps, fewer fields, faster pages — usually a larger effect than any test you could run.",
        icon: "Zap",
      },
      {
        title: "Test design",
        description:
          "Hypotheses with an expected mechanism, and an honest calculation of whether you have the traffic.",
        icon: "FlaskConical",
      },
      {
        title: "Implementation",
        description:
          "Variants built properly rather than injected by a script that causes a visible flicker.",
        icon: "Code2",
      },
      {
        title: "Reporting",
        description:
          "Results against revenue per session, including tests that did not work and what that tells you.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "Why verify measurement first?",
        answer:
          "Because a meaningful share of the sites we audit are optimising against numbers that are wrong.",
        body: [
          {
            type: "list",
            items: [
              "Duplicate purchase events from a tag configured in both the platform and the tag manager.",
              "Consent handling blocking analytics for a large share of visitors, skewing every segment.",
              "Cross-domain tracking broken by a payment redirect, so conversions attribute to the processor.",
              "Bot traffic inflating sessions and depressing apparent conversion rate.",
              "Goals configured on the wrong event, so the number moving is not the one that matters.",
            ],
          },
          {
            type: "callout",
            title: "One week of verification saves a quarter of wasted testing",
            text: "We have seen teams run tests for months against a conversion event that double-counted. Every result was noise. Verification is unglamorous and it is the highest-return week in most CRO engagements.",
          },
        ],
      },
      {
        heading: "Where do the actual wins come from?",
        body: [
          {
            type: "table",
            head: ["Change", "Typical impact", "Effort"],
            rows: [
              ["Removing form fields", "High", "Low"],
              ["Fixing mobile page speed", "High", "Medium"],
              ["Removing a checkout step", "High", "Medium"],
              ["Showing costs earlier", "Medium to high", "Low"],
              ["Clarifying the headline", "Medium", "Low"],
              ["Adding specific proof", "Medium", "Low"],
              ["Button colour and copy tests", "Low", "Low"],
            ],
          },
          {
            type: "p",
            text: "The industry's association of CRO with button-colour testing is unfortunate. The large effects come from removing steps and making the page fast, both of which are engineering work rather than experiments.",
          },
        ],
      },
      {
        heading: "Do you have enough traffic to test?",
        body: [
          {
            type: "p",
            text: "Statistical significance needs conversions, not visitors. As a rough guide you want a few hundred conversions per variant to trust a result. Below that, tests will produce numbers that look conclusive and are not.",
          },
          {
            type: "list",
            items: [
              "High traffic: test properly, including multivariate where justified.",
              "Moderate traffic: test one change at a time, expect longer run times, and only test large changes.",
              "Low traffic: do not run A/B tests. Fix known friction, use qualitative research, and measure before and after.",
              "We will tell you which category you are in rather than selling a testing programme regardless.",
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
        bestFor: "Knowing where the leaks are",
        includes: [
          "Measurement verification",
          "Funnel and segment analysis",
          "Friction and performance review",
          "Prioritised recommendations",
        ],
      },
      {
        name: "Audit and implementation",
        range: "$5,000 – $15,000",
        timeline: "4–10 weeks",
        bestFor: "Fixing what the audit found",
        includes: [
          "Everything in the audit",
          "Friction removal and page changes",
          "Performance improvements",
          "Test implementation where justified",
          "Before-and-after reporting",
        ],
        featured: true,
      },
      {
        name: "Ongoing programme",
        range: "from $2,000 / month",
        timeline: "Ongoing",
        bestFor: "Sites with traffic to test continuously",
        includes: [
          "Monthly test design and build",
          "Analysis and reporting",
          "Continuous funnel monitoring",
          "Quarterly strategy review",
        ],
      },
    ],
    faqs: [
      {
        question: "How much can you improve our conversion rate?",
        answer:
          "We will not give a number before looking. Sites with obvious friction and slow pages often see substantial improvement; well-optimised sites see incremental gains. The audit gives a grounded estimate.",
      },
      {
        question: "Which testing tool do you use?",
        answer:
          "We implement variants in code rather than through a script-injection tool where possible, because those cause a visible flicker and slow the page — which biases the result against the variant.",
      },
      {
        question: "Do you do the design work too?",
        answer:
          "Yes, or we work from your designs. Most of the highest-impact changes are structural — removing steps and fields — rather than visual.",
      },
      {
        question: "What if a test shows no difference?",
        answer:
          "That is a legitimate result and we report it plainly. Knowing a change does not matter saves you building more of it. Reporting only wins is how CRO programmes lose credibility.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["landing-page-design", "website-speed-optimization", "ecommerce-brands"],
    readMore: [
      { label: "The anatomy of a converting landing page", href: "/blog/anatomy-of-a-converting-landing-page" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "booking-and-scheduling-software",
    group: "services",
    title: "Booking and scheduling software development",
    seoTitle: "Booking & Scheduling Software Development | ROVQIX",
    description:
      "Custom booking and scheduling systems — availability logic, capacity, timezones, reminders and payment, for businesses whose calendar is their revenue.",
    excerpt:
      "Availability logic and timezones are where booking systems quietly go wrong.",
    eyebrow: "Booking systems",
    primaryKeyword: "booking system development",
    secondaryKeywords: [
      "scheduling software development",
      "appointment booking system",
      "custom reservation system",
      "availability management software",
    ],
    answer:
      "ROVQIX builds custom booking and scheduling systems — availability and capacity rules, resource allocation, timezone handling, reminders, cancellation policies and payment — for businesses where the calendar directly determines revenue.",
    intro:
      "Booking systems look simple and are not. Availability with multiple resources, buffers, timezones and cancellation rules is genuinely difficult logic to get right.",
    proof: [
      { metric: "No double-booking", label: "Enforced at the database" },
      { metric: "Timezone-safe", label: "Including DST edges" },
      { metric: "Reminders", label: "Cut no-shows measurably" },
      { metric: "Integrated", label: "With your calendar" },
    ],
    deliverables: [
      {
        title: "Availability engine",
        description:
          "Working hours, buffers, lead times, blackout dates and multi-resource requirements handled correctly.",
        icon: "CalendarCheck",
      },
      {
        title: "Concurrency safety",
        description:
          "Booking enforced with database constraints, so two simultaneous requests cannot take the same slot.",
        icon: "Scale",
      },
      {
        title: "Timezone handling",
        description:
          "Stored in UTC, displayed in the user's zone, correct across daylight saving transitions.",
        icon: "Clock",
      },
      {
        title: "Reminders",
        description:
          "Email and SMS reminders, which reduce no-shows more reliably than any other single feature.",
        icon: "MessageSquare",
      },
      {
        title: "Payments and deposits",
        description:
          "Deposits, full payment or hold-on-file, with cancellation and refund policy enforced in code.",
        icon: "CreditCard",
      },
      {
        title: "Calendar integration",
        description:
          "Two-way sync with Google and Outlook so staff availability reflects their real calendars.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "Why is availability logic hard?",
        answer:
          "Because real availability depends on several resources, buffers and rules that interact in ways a simple calendar cannot express.",
        body: [
          {
            type: "list",
            items: [
              "A booking may need a person, a room and a piece of equipment, all free at once.",
              "Buffers before and after differ by service type, and sometimes by staff member.",
              "Lead time and cut-off rules interact with working hours and holidays.",
              "Recurring bookings must handle exceptions without breaking the series.",
              "Group bookings need capacity tracking rather than binary availability.",
              "Two people clicking the same slot simultaneously must not both succeed.",
            ],
          },
          {
            type: "callout",
            title: "Enforce it in the database",
            text: "Checking availability then inserting is a race condition. Under concurrency two requests both see the slot free. The constraint must be enforced by the database, or you will double-book on your busiest day.",
          },
        ],
      },
      {
        heading: "How do you handle timezones correctly?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Store every timestamp in UTC. Never store a local time without its zone.",
              "Store the business's zone with the resource, not just as a display setting.",
              "Display in the user's zone, with the zone shown explicitly on confirmations.",
              "Handle daylight saving transitions — the hour that does not exist, and the hour that occurs twice.",
              "Test bookings across a DST boundary specifically. It is where these systems break.",
              "Put the zone in reminder emails, because a customer travelling will otherwise miss the appointment.",
            ],
          },
        ],
      },
      {
        heading: "Should you build or buy?",
        body: [
          {
            type: "table",
            head: ["Buy an existing tool when", "Build custom when"],
            rows: [
              ["Standard appointments with one resource", "Multiple resources must align"],
              ["A tool's rules fit your service", "Your availability rules are unusual"],
              ["Booking is peripheral to the business", "Booking is the business"],
              ["Volume is modest", "Volume justifies the build"],
              ["You need it next week", "You need it to fit exactly"],
            ],
          },
          {
            type: "p",
            text: "We recommend existing booking tools regularly. They are mature, cheap and handle the standard cases well. Build custom when the availability rules genuinely do not fit, or when booking is embedded in a larger product.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Booking integration",
        range: "$2,500 – $6,000",
        timeline: "2–4 weeks",
        bestFor: "Connecting an existing tool to your site",
        includes: [
          "Provider evaluation",
          "On-domain booking flow",
          "Calendar and payment setup",
          "Confirmation and reminder configuration",
        ],
      },
      {
        name: "Custom booking system",
        range: "$15,000 – $50,000",
        timeline: "8–18 weeks",
        bestFor: "Unusual availability rules or embedded booking",
        includes: [
          "Availability and capacity engine",
          "Multi-resource allocation",
          "Payments and cancellation policy",
          "Calendar sync and reminders",
          "Admin console and reporting",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $900 / month",
        timeline: "Ongoing",
        bestFor: "Systems that carry your revenue",
        includes: [
          "Priority incident response",
          "Monthly enhancement hours",
          "Integration monitoring",
          "Peak-period readiness",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we just use Calendly or similar?",
        answer:
          "For standard one-person appointments, very likely yes. They are inexpensive and handle the common cases well. Build custom when multiple resources must align, rules are unusual, or booking is part of a larger product.",
      },
      {
        question: "Can it sync with staff calendars?",
        answer:
          "Yes, two-way with Google and Outlook, so a personal appointment blocks availability automatically. Sync conflicts need a defined resolution policy, which we agree during design.",
      },
      {
        question: "Can we take deposits?",
        answer:
          "Yes — deposits, full payment or card-on-file with charge on no-show. Cancellation windows and refund rules are enforced in code rather than left to staff discretion.",
      },
      {
        question: "How do you prevent double-booking?",
        answer:
          "A database-level constraint, not an application check. Application-level checks fail under concurrency, and concurrency is exactly what happens when a popular slot opens.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-application-development", "hospitality-and-restaurants", "home-services"],
    readMore: [
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
    ],
    publishedAt: "2026-08-13",
  },
];
