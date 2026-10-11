import type { LandingPage } from "./types";

/**
 * Proof points are commitments and targets we hold ourselves to, not claimed
 * historical statistics — keep them that way when adding pages.
 */
export const servicePages: LandingPage[] = [
  {
    slug: "website-development",
    group: "services",
    title: "Website development services for growing companies",
    seoTitle: "Website Development Services | ROVQIX",
    description:
      "Custom website development for businesses in the US, UK and worldwide. Fast, accessible, SEO-ready sites built on Next.js — scoped, fixed-price and delivered in 4–8 weeks.",
    excerpt:
      "Custom-built business websites on a modern stack, scoped to a fixed price and delivered in weeks rather than quarters.",
    eyebrow: "Website development",
    primaryKeyword: "website development services",
    secondaryKeywords: [
      "custom website development",
      "business website design",
      "professional web development company",
      "next.js website development",
    ],
    answer:
      "ROVQIX builds custom business websites on Next.js and React — designed, developed, optimised for search and Core Web Vitals, and handed over with full code ownership. A typical marketing site takes 4 to 8 weeks at a fixed, agreed price.",
    intro:
      "No page builders, no bloated themes, no surprise invoices. We scope the exact set of pages and components upfront, design them, build them properly, and hand you a codebase your own team can maintain.",
    proof: [
      { metric: "4–8 wks", label: "Typical delivery" },
      { metric: "90+", label: "Lighthouse target" },
      { metric: "100%", label: "Code ownership" },
      { metric: "< 24h", label: "Reply time" },
    ],
    deliverables: [
      {
        title: "Custom design, not a template",
        description:
          "Every page designed for your positioning and content, in Figma, reviewed with you before a line of code is written.",
        icon: "PenTool",
      },
      {
        title: "Next.js + React build",
        description:
          "Server-rendered, statically generated where possible, with a component system your team can extend.",
        icon: "Code2",
      },
      {
        title: "Technical SEO built in",
        description:
          "Metadata, canonical URLs, structured data, sitemap, robots and clean semantic HTML from the first commit.",
        icon: "Search",
      },
      {
        title: "Core Web Vitals",
        description:
          "Performance budget agreed upfront and enforced — images, fonts and JavaScript optimised, not fixed later.",
        icon: "Gauge",
      },
      {
        title: "Content editing",
        description:
          "Optional headless CMS integration so your marketing team can publish without a developer.",
        icon: "FileText",
      },
      {
        title: "Handover and support",
        description:
          "Repository, documentation, deployment access and a walkthrough. Ongoing maintenance available if you want it.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "What does a website development project include?",
        answer:
          "Discovery, design, development, testing, deployment and handover — with a fixed scope agreed before work starts.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Discovery: goals, audience, competitors, page inventory and success measures. Usually one week.",
              "Design: wireframes, then high-fidelity designs for every unique page and component.",
              "Development: component build, responsive implementation, CMS wiring, accessibility and performance work.",
              "Testing: cross-browser and device QA, accessibility pass, Core Web Vitals verification.",
              "Deployment: production setup, DNS, HTTPS, analytics, Search Console and sitemap submission.",
              "Handover: code, documentation, a recorded walkthrough and 30 days of post-launch support.",
            ],
          },
        ],
      },
      {
        heading: "Why build on Next.js instead of WordPress?",
        body: [
          {
            type: "table",
            head: ["", "Next.js build", "Typical WordPress theme"],
            rows: [
              ["Performance", "Static/edge-served, small payloads", "Plugin-heavy, often slow"],
              ["Security surface", "No plugin ecosystem to patch", "Frequent plugin vulnerabilities"],
              ["Design freedom", "Anything you can design", "Constrained by the theme"],
              ["Maintenance", "Dependency updates only", "Ongoing plugin and core updates"],
              ["Editing", "Headless CMS if needed", "Built-in editor"],
              ["Hosting cost", "Low, often near zero at small scale", "Managed hosting required"],
            ],
          },
          {
            type: "p",
            text: "WordPress is a reasonable choice when a large non-technical team needs to edit everything daily and the design is deliberately conventional. For companies where the website is a positioning asset — and where speed and security matter — a custom Next.js build costs less over three years and looks like nobody else's site.",
          },
        ],
      },
      {
        heading: "How do you keep projects on time and on budget?",
        body: [
          {
            type: "p",
            text: "Scope creep rarely arrives as one big change. It arrives as a dozen small additions nobody priced. We handle it structurally: the proposal lists every page and component included, and anything outside that list gets a small written estimate before it goes into the build.",
          },
          {
            type: "callout",
            title: "Fixed price, not hourly",
            text: "You approve a number before work starts. If we underestimate, that is our problem, not an amended invoice. The only thing that changes the price is you adding scope, and you always approve that first.",
          },
        ],
      },
      {
        heading: "What do we need from you?",
        body: [
          {
            type: "list",
            items: [
              "One decision-maker who can approve designs — committee reviews are what delay projects.",
              "Content, or a decision to have us write it. Missing copy is the single most common cause of a late launch.",
              "Brand assets if you have them: logo files, fonts, colours, photography.",
              "Access to your domain registrar and any existing analytics.",
              "About two hours a week for reviews and calls during the active phases.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Marketing site",
        range: "$2,500 – $6,000",
        timeline: "3–5 weeks",
        bestFor: "Established businesses replacing an outdated site",
        includes: [
          "5–8 custom-designed pages",
          "Responsive build on Next.js",
          "Technical SEO and analytics setup",
          "Contact forms and integrations",
          "30 days post-launch support",
        ],
      },
      {
        name: "Growth site",
        range: "$6,000 – $15,000",
        timeline: "6–9 weeks",
        bestFor: "Companies where the site drives real pipeline",
        includes: [
          "10–25 pages with a component system",
          "Headless CMS for your team",
          "Blog and landing page templates",
          "Advanced animation and interaction",
          "Conversion tracking and A/B ready setup",
          "90 days post-launch support",
        ],
        featured: true,
      },
      {
        name: "Platform",
        range: "$15,000+",
        timeline: "10+ weeks",
        bestFor: "Multi-region sites, portals and product platforms",
        includes: [
          "Custom application functionality",
          "Authentication and dashboards",
          "Third-party and API integrations",
          "Multi-language or multi-region support",
          "Ongoing retainer available",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a business website cost?",
        answer:
          "Most business websites we build fall between $2,500 and $15,000 depending on page count, custom design and integrations. A five-page marketing site sits at the lower end; a site with a CMS, blog, gated content and CRM integration sits in the middle.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Three to five weeks for a focused marketing site, six to nine weeks for a larger site with a CMS, and ten weeks or more for platform work. The variable is almost always content readiness and review speed, not development.",
      },
      {
        question: "Do we own the code?",
        answer:
          "Yes, completely. The repository is transferred to your organisation at handover, with no licensing, no proprietary builder and no dependency on us to make changes.",
      },
      {
        question: "Can you work with our existing brand and designer?",
        answer:
          "Yes. We regularly build from designs supplied by an in-house or external designer, and we will flag anything that will cause accessibility or performance problems before we build it.",
      },
      {
        question: "Do you work with clients outside India?",
        answer:
          "Most of our work is with companies in the United States, United Kingdom, Canada and Australia. We keep overlapping hours, invoice in USD or GBP, and run everything over async updates plus scheduled calls.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["nextjs-development", "landing-page-design", "website-maintenance"],
    readMore: [
      { label: "Next.js vs React: what you are choosing between", href: "/blog/nextjs-vs-react-which-to-choose" },
      { label: "How to scope a website project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "nextjs-development",
    group: "services",
    title: "Next.js development services",
    seoTitle: "Next.js Development Services & Agency | ROVQIX",
    description:
      "Next.js development agency building App Router applications, marketing sites and SaaS platforms. Server components, ISR, SEO and Core Web Vitals done properly.",
    excerpt:
      "App Router applications built by engineers who know where the caching layers, rendering modes and server boundaries actually belong.",
    eyebrow: "Next.js development",
    primaryKeyword: "next.js development services",
    secondaryKeywords: [
      "next.js development agency",
      "next.js app router development",
      "hire next.js agency",
      "next.js consulting",
    ],
    answer:
      "ROVQIX is a Next.js development agency building App Router applications, marketing sites and SaaS platforms in TypeScript. We handle rendering strategy, caching, server components, metadata and deployment — including migrations from the Pages Router or from an existing React SPA.",
    intro:
      "Next.js rewards teams that understand its rendering and caching model and punishes those that do not. We build on it daily and write publicly about the parts people get wrong.",
    proof: [
      { metric: "App Router", label: "Default since launch" },
      { metric: "TypeScript", label: "Strict mode, always" },
      { metric: "< 170 KB", label: "First-load JS budget" },
      { metric: "CWV", label: "Passing at handover" },
    ],
    deliverables: [
      {
        title: "Rendering strategy per route",
        description:
          "Static, ISR, server-rendered or client — decided route by route with the reasoning documented, not applied blanket.",
        icon: "Layers",
      },
      {
        title: "Server component architecture",
        description:
          "Client boundaries pushed to the smallest interactive unit so bundles stay small and pages stay fast.",
        icon: "Component",
      },
      {
        title: "Caching and revalidation",
        description:
          "Tagged data caching with on-demand revalidation wired to your CMS, so content is fresh without rendering per request.",
        icon: "RefreshCw",
      },
      {
        title: "Metadata and SEO system",
        description:
          "One typed helper generating canonical URLs, Open Graph, structured data and sitemaps for every route.",
        icon: "Search",
      },
      {
        title: "Migration work",
        description:
          "Pages Router to App Router, or React SPA to Next.js, done incrementally with both running side by side.",
        icon: "GitBranch",
      },
      {
        title: "Deployment and CI",
        description:
          "Vercel or self-hosted containers, with preview deployments, budgets in CI and a tested rollback path.",
        icon: "Rocket",
      },
    ],
    sections: [
      {
        heading: "What do we build with Next.js?",
        body: [
          {
            type: "list",
            items: [
              "Marketing and content sites where organic search is a primary channel.",
              "SaaS marketing sites plus authenticated product dashboards in one codebase.",
              "Ecommerce storefronts with ISR catalogues and fast, cached product pages.",
              "Internal tools and admin portals with role-based access.",
              "Documentation and knowledge platforms with MDX or a headless CMS.",
              "Multi-region sites with locale routing and hreflang handled correctly.",
            ],
          },
        ],
      },
      {
        heading: "What does a Next.js migration involve?",
        answer:
          "Route-by-route migration with the App Router and Pages Router running side by side, so you never need a big-bang cutover.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Audit: what the app does, where the client-only assumptions are, what the bundle looks like today.",
              "Foundation: layouts, providers pushed down, metadata helper, shared component primitives.",
              "High-value routes first — usually the ones with the worst performance or the most traffic.",
              "Data layer: replacing client fetches with server components where it genuinely helps.",
              "The long tail, at a pace that fits around your roadmap.",
            ],
          },
          {
            type: "callout",
            title: "We measure before and after",
            text: "Every migration engagement starts with recorded first-load JavaScript, LCP and INP on the top routes. If the numbers do not improve, the migration did not do its job and we say so.",
          },
        ],
      },
      {
        heading: "What do you get at handover?",
        body: [
          {
            type: "list",
            items: [
              "A typed, documented codebase with a consistent component structure.",
              "Environment configuration validated at boot, with no secrets in the client bundle.",
              "CI running type checks, lint, tests and a performance budget on every pull request.",
              "A deployment runbook covering releases, rollbacks and environment variables.",
              "A recorded walkthrough of the architecture for your team.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Audit & plan",
        range: "$1,200 – $2,500",
        timeline: "1 week",
        bestFor: "Teams with an existing app and a specific problem",
        includes: [
          "Codebase and architecture review",
          "Performance and bundle analysis",
          "Prioritised written recommendations",
          "Migration plan if applicable",
        ],
      },
      {
        name: "Build",
        range: "$6,000 – $25,000",
        timeline: "4–12 weeks",
        bestFor: "New applications and full rebuilds",
        includes: [
          "Design and full Next.js implementation",
          "CMS or API integration",
          "SEO, performance and accessibility work",
          "CI/CD and deployment setup",
          "Documentation and handover",
        ],
        featured: true,
      },
      {
        name: "Retainer",
        range: "from $2,000 / month",
        timeline: "Ongoing",
        bestFor: "Teams needing continuous engineering capacity",
        includes: [
          "Agreed monthly engineering hours",
          "Feature work and maintenance",
          "Dependency and security updates",
          "Performance monitoring and reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we use the App Router or the Pages Router?",
        answer:
          "New projects should use the App Router — it is where server components, streaming and current caching live. Existing Pages Router apps are still fully supported and only worth migrating when you need something the App Router provides.",
      },
      {
        question: "Can you take over an existing Next.js project?",
        answer:
          "Yes. We start with a paid audit week so we can give you an honest assessment before either side commits to a longer engagement.",
      },
      {
        question: "Do you self-host or deploy to Vercel?",
        answer:
          "Both. Vercel is the fastest path and usually the right default. We self-host on AWS, Google Cloud or your own infrastructure when cost at scale, compliance or an existing platform requires it.",
      },
      {
        question: "How do you handle SEO in a JavaScript framework?",
        answer:
          "Content is server-rendered so it is in the HTML for every crawler, and metadata, canonicals, structured data and sitemaps are generated from one shared helper rather than hand-written per page.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["react-development", "saas-development", "hire-nextjs-developers"],
    readMore: [
      { label: "App Router vs Pages Router", href: "/blog/nextjs-app-router-vs-pages-router" },
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "Next.js production deployment checklist", href: "/blog/nextjs-deployment-checklist" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "react-development",
    group: "services",
    title: "React development services",
    seoTitle: "React Development Services & Company | ROVQIX",
    description:
      "React development company building web applications, dashboards and design systems in TypeScript — with the state, performance and accessibility work done properly.",
    excerpt:
      "React applications with a component architecture that survives three years of feature requests, not just the first release.",
    eyebrow: "React development",
    primaryKeyword: "react development services",
    secondaryKeywords: [
      "react development company",
      "react js development services",
      "react application development",
      "react design system",
    ],
    answer:
      "ROVQIX builds React applications in TypeScript — dashboards, internal tools, customer portals and design systems. We handle component architecture, state management, rendering performance and accessibility, and hand over a codebase your team can extend without rewriting.",
    intro:
      "Most React problems we are called in to fix are structural: state in the wrong place, a context re-rendering the world, or a component with nineteen boolean props. We build to avoid that from the start.",
    proof: [
      { metric: "TypeScript", label: "Strict, end to end" },
      { metric: "WCAG 2.2 AA", label: "Accessibility target" },
      { metric: "Design system", label: "Not one-off components" },
      { metric: "Tested", label: "Critical paths covered" },
    ],
    deliverables: [
      {
        title: "Component architecture",
        description:
          "Composition over configuration, a clear split between UI primitives and product components, and folders organised by feature.",
        icon: "Blocks",
      },
      {
        title: "State that scales",
        description:
          "Server data in a cache, view state in the URL, UI state local — not everything in one global store.",
        icon: "Workflow",
      },
      {
        title: "Rendering performance",
        description:
          "Profiled, not guessed: state placed correctly, contexts split, long lists virtualised, interactions under budget.",
        icon: "Gauge",
      },
      {
        title: "Accessible by default",
        description:
          "Semantic elements, keyboard operation, focus management and screen-reader testing on the primary flows.",
        icon: "Accessibility",
      },
      {
        title: "Design system",
        description:
          "A documented set of primitives with tokens, variants and usage guidance so future features look consistent.",
        icon: "Palette",
      },
      {
        title: "Testing strategy",
        description:
          "Unit tests for logic, Testing Library for interaction, and a handful of reliable end-to-end tests on revenue paths.",
        icon: "FlaskConical",
      },
    ],
    sections: [
      {
        heading: "What kinds of React applications do we build?",
        body: [
          {
            type: "list",
            items: [
              "Customer-facing dashboards with charts, filters, exports and role-based views.",
              "Internal admin tools replacing spreadsheets and manual processes.",
              "Multi-step workflows: onboarding, applications, quoting, configuration.",
              "Design systems and component libraries for teams with several products.",
              "Complex forms with conditional logic, validation and draft saving.",
              "Real-time interfaces with websockets or server-sent events.",
            ],
          },
        ],
      },
      {
        heading: "When does a React SPA make more sense than Next.js?",
        answer:
          "When the entire application sits behind a login and no page needs to be indexed or fast on a cold first load.",
        body: [
          {
            type: "p",
            text: "Internal tools, heavily interactive editors and embedded widgets are legitimate cases for a Vite-based React SPA. It has a smaller conceptual surface, which matters for a small team maintaining it long term.",
          },
          {
            type: "p",
            text: "If any part of the product is public — marketing pages, a pricing page, documentation, shared links — we recommend Next.js so that content is server-rendered and indexable. We will tell you which side of that line your project falls on during scoping.",
          },
        ],
      },
      {
        heading: "How do we work with your existing team?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Code review in both directions — we review your pull requests and you review ours.",
              "Your conventions, not ours. We adopt the existing patterns unless there is a concrete reason to change them.",
              "Documented decisions: anything architectural gets a short written record in the repository.",
              "Pairing sessions on request so knowledge transfers rather than concentrating with us.",
            ],
          },
          {
            type: "callout",
            title: "We do not want to be a dependency",
            text: "The goal of every engagement is that your team can continue without us. That means documentation, walkthroughs and conventional patterns rather than clever ones.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Component library",
        range: "$4,000 – $9,000",
        timeline: "3–5 weeks",
        bestFor: "Teams needing a consistent UI foundation",
        includes: [
          "Design tokens and theming",
          "Accessible primitive components",
          "Documentation site",
          "Integration into one existing app",
        ],
      },
      {
        name: "Application build",
        range: "$8,000 – $30,000",
        timeline: "6–16 weeks",
        bestFor: "New dashboards, portals and internal tools",
        includes: [
          "Product design and prototyping",
          "Full React + TypeScript build",
          "API integration and auth",
          "Testing and CI setup",
          "Handover and documentation",
        ],
        featured: true,
      },
      {
        name: "Performance rescue",
        range: "$2,500 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Apps that have become slow or unmaintainable",
        includes: [
          "Profiling and bundle analysis",
          "Prioritised fix list with estimates",
          "Implementation of the top fixes",
          "Before-and-after measurements",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you use React or Next.js?",
        answer:
          "Next.js is React with routing, rendering and build decisions already made. We use Next.js for anything with public pages and plain React for applications entirely behind authentication.",
      },
      {
        question: "Can you fix an existing React app that has become slow?",
        answer:
          "Yes — that is a common engagement. We profile first and give you a prioritised list with expected impact before doing any work, so you can decide how far to go.",
      },
      {
        question: "What state management do you use?",
        answer:
          "It depends on the state. Server data goes in a query cache or server components, shareable view state goes in the URL, and genuinely global client state goes in a small store. We avoid putting everything in one place.",
      },
      {
        question: "Do you write tests?",
        answer:
          "Yes, focused where they pay off: business logic, interactive components and a small set of end-to-end tests covering the flows that generate revenue. We do not chase coverage percentages.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["nextjs-development", "web-application-development", "hire-react-developers"],
    readMore: [
      { label: "Component architecture that scales", href: "/blog/react-component-architecture" },
      { label: "React state management in 2026", href: "/blog/react-state-management-guide" },
      { label: "Why your React app re-renders too much", href: "/blog/react-rerender-performance" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "saas-development",
    group: "services",
    title: "SaaS development services: from MVP to production platform",
    seoTitle: "SaaS Development Services & Company | ROVQIX",
    description:
      "SaaS development company building multi-tenant platforms, billing, dashboards and marketing sites — from validated MVP to production-ready product.",
    excerpt:
      "Multi-tenant architecture, subscription billing, onboarding and dashboards — the parts of a SaaS product that are hard to retrofit.",
    eyebrow: "SaaS development",
    primaryKeyword: "saas development services",
    secondaryKeywords: [
      "saas development company",
      "build a saas platform",
      "multi-tenant application development",
      "saas mvp development",
    ],
    answer:
      "ROVQIX builds SaaS platforms end to end: multi-tenant data architecture, authentication and roles, subscription billing, onboarding, product dashboards and the marketing site around them. MVPs typically ship in 8 to 14 weeks.",
    intro:
      "The decisions that hurt later in a SaaS product are made in the first month: tenant isolation, permission model, billing structure and data schema. We get those right first and move fast afterwards.",
    proof: [
      { metric: "8–14 wks", label: "Typical MVP" },
      { metric: "Multi-tenant", label: "From day one" },
      { metric: "Stripe", label: "Billing integrated" },
      { metric: "SOC-ready", label: "Audit logging built in" },
    ],
    deliverables: [
      {
        title: "Multi-tenant architecture",
        description:
          "Tenant isolation enforced at the data layer with row-level scoping, so a permission bug cannot leak another customer's data.",
        icon: "Building2",
      },
      {
        title: "Auth, roles and invitations",
        description:
          "Sessions, SSO where needed, team invitations, role-based permissions and an audit trail of who did what.",
        icon: "ShieldCheck",
      },
      {
        title: "Subscription billing",
        description:
          "Stripe integration with plans, trials, upgrades, proration, dunning and a customer portal that actually works.",
        icon: "CreditCard",
      },
      {
        title: "Product dashboard",
        description:
          "The core application: data views, filters, exports, settings and the workflows your customers pay for.",
        icon: "LayoutDashboard",
      },
      {
        title: "Onboarding and activation",
        description:
          "The first-run experience that decides whether a signup becomes a customer, designed rather than bolted on.",
        icon: "Sparkles",
      },
      {
        title: "Marketing site",
        description:
          "Fast, SEO-ready pages for your positioning, pricing and content — in the same codebase as the product.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "What does a SaaS MVP actually need?",
        answer:
          "Enough to prove someone will pay: one core workflow done well, signup, billing and the ability to support a real customer.",
        body: [
          {
            type: "table",
            head: ["In the MVP", "Deliberately deferred"],
            rows: [
              ["One core workflow, done properly", "Every adjacent feature"],
              ["Signup, teams and roles", "SSO and SCIM"],
              ["Subscription billing", "Usage-based metering"],
              ["Basic admin and support tools", "Full analytics suite"],
              ["Audit logging", "Compliance certification"],
              ["Email notifications", "In-app notification centre"],
            ],
          },
          {
            type: "p",
            text: "The deferred column is not 'never'. It is 'not before you know customers want the core'. We build the foundations so those additions are straightforward, without building them speculatively.",
          },
        ],
      },
      {
        heading: "How do you handle multi-tenancy?",
        body: [
          {
            type: "p",
            text: "Every query is scoped to the current tenant at the data-access layer, not in the UI and not in middleware alone. On PostgreSQL we use row-level security or a mandatory tenant predicate enforced by the query layer, so a missing check fails closed rather than returning another customer's records.",
          },
          {
            type: "callout",
            title: "The test we run before launch",
            text: "Two tenants, two accounts, and a deliberate attempt to reach each other's data by manipulating identifiers on every endpoint. Broken access control is the most common serious flaw in SaaS applications and the easiest to test for.",
          },
        ],
      },
      {
        heading: "What does the stack look like?",
        body: [
          {
            type: "list",
            items: [
              "Next.js and React with TypeScript for the product and marketing site.",
              "Node.js APIs or server actions, depending on whether third parties need to call you.",
              "PostgreSQL as the source of truth, with Redis for caching, sessions and rate limiting.",
              "Stripe for billing, with webhooks handled idempotently.",
              "Background jobs for email, exports, reports and third-party sync.",
              "Vercel or containers on AWS, with CI running type checks, tests and budgets.",
            ],
          },
        ],
      },
      {
        heading: "How do we work after launch?",
        body: [
          {
            type: "p",
            text: "Most SaaS clients move onto a monthly retainer: an agreed block of engineering time for features, fixes, dependency updates and monitoring. You get continuity from people who already know the codebase, without hiring a full-time team before revenue supports it.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Validation sprint",
        range: "$3,000 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Founders needing a clickable prototype and a plan",
        includes: [
          "Product definition workshops",
          "Interactive prototype",
          "Technical architecture plan",
          "Costed MVP roadmap",
        ],
      },
      {
        name: "MVP build",
        range: "$15,000 – $45,000",
        timeline: "8–14 weeks",
        bestFor: "Getting a real, chargeable product to market",
        includes: [
          "Product and UI design",
          "Multi-tenant application build",
          "Auth, roles and billing",
          "Marketing site",
          "Deployment, monitoring and handover",
        ],
        featured: true,
      },
      {
        name: "Product retainer",
        range: "from $3,500 / month",
        timeline: "Ongoing",
        bestFor: "Funded products shipping continuously",
        includes: [
          "Dedicated engineering capacity",
          "Roadmap delivery in two-week cycles",
          "Infrastructure and cost management",
          "Security and dependency maintenance",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does it cost to build a SaaS product?",
        answer:
          "A focused MVP with one core workflow, authentication and billing typically costs $15,000 to $45,000 and takes 8 to 14 weeks. Broader platforms with integrations, complex permissions and compliance requirements go higher.",
      },
      {
        question: "Do you take equity instead of fees?",
        answer:
          "No. We work on fixed-scope paid engagements, which keeps incentives clear and lets us tell you honestly when a feature is not worth building.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You do, entirely, from the first commit. The repository sits in your organisation and the contract assigns all IP to you.",
      },
      {
        question: "Can you work with our existing product team?",
        answer:
          "Yes. We regularly work alongside an in-house team, taking a defined area of the product with shared code review and conventions.",
      },
      {
        question: "What about SOC 2 or HIPAA?",
        answer:
          "We build with the technical controls those frameworks expect — audit logging, access control, encryption, secrets management — but certification itself involves policy and audit work beyond engineering. We will tell you plainly what we cover and what you need elsewhere.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["web-application-development", "custom-software-development", "saas-startups"],
    readMore: [
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "ecommerce-development",
    group: "services",
    title: "Ecommerce development services",
    seoTitle: "Ecommerce Development Services | ROVQIX",
    description:
      "Custom ecommerce development with headless Shopify or a bespoke storefront — fast product pages, frictionless checkout and conversion-focused design.",
    excerpt:
      "Headless storefronts and custom checkout flows built for speed, because every 100ms of load time shows up in conversion.",
    eyebrow: "Ecommerce",
    primaryKeyword: "ecommerce development services",
    secondaryKeywords: [
      "headless commerce development",
      "shopify headless storefront",
      "custom ecommerce website",
      "ecommerce web development company",
    ],
    answer:
      "ROVQIX builds ecommerce storefronts as headless Next.js applications on top of Shopify, or as fully custom stores where the catalogue and checkout need behaviour a platform cannot express. The focus is page speed, checkout friction and merchandising control.",
    intro:
      "Most ecommerce sites lose money in two places: a slow product page and a checkout with one step too many. Both are engineering problems with measurable revenue attached.",
    proof: [
      { metric: "< 2.5s", label: "LCP target on PDPs" },
      { metric: "ISR", label: "Catalogue at CDN speed" },
      { metric: "Headless", label: "Design without limits" },
      { metric: "A/B ready", label: "Built for testing" },
    ],
    deliverables: [
      {
        title: "Headless storefront",
        description:
          "Next.js front end on Shopify or a commerce API, with statically generated category and product pages.",
        icon: "ShoppingBag",
      },
      {
        title: "Fast product pages",
        description:
          "Optimised imagery, incremental regeneration and prefetching so browsing feels instant on mobile networks.",
        icon: "Zap",
      },
      {
        title: "Checkout optimisation",
        description:
          "Fewer steps, saved details, clear shipping and tax, express payment methods and recovered abandoned carts.",
        icon: "CreditCard",
      },
      {
        title: "Merchandising control",
        description:
          "Collections, badges, bundles, upsells and campaign landing pages your marketing team can run without a developer.",
        icon: "LayoutGrid",
      },
      {
        title: "Search and filtering",
        description:
          "Fast faceted search that does not generate infinite crawlable URL combinations or break your crawl budget.",
        icon: "Search",
      },
      {
        title: "Analytics and tracking",
        description:
          "Ecommerce events, consent handling and server-side tagging where it improves data quality and page speed.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "Headless or a standard platform theme?",
        answer:
          "Go headless when design, performance or custom merchandising matter more than setup speed; stay on a theme when they do not.",
        body: [
          {
            type: "table",
            head: ["", "Headless build", "Platform theme"],
            rows: [
              ["Speed to launch", "Slower", "Fast"],
              ["Page performance", "Excellent, fully controlled", "Depends on theme and apps"],
              ["Design freedom", "Unlimited", "Constrained"],
              ["App ecosystem", "Integrate selectively", "Install and go"],
              ["Ongoing cost", "Hosting plus maintenance", "Platform plus app subscriptions"],
              ["Best for", "Brands where the site is the differentiator", "Getting to market quickly"],
            ],
          },
          {
            type: "p",
            text: "We will say plainly if a theme is the right answer for your stage. A store doing its first $10k a month usually should not be paying for a headless build.",
          },
        ],
      },
      {
        heading: "Where does ecommerce performance actually come from?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Product images: correct dimensions and modern formats, which is usually 60% of page weight removed.",
              "Statically generated or incrementally regenerated category and product pages served from the edge.",
              "A ruthless audit of third-party scripts — review widgets, chat, pixels and A/B tools compound on the main thread.",
              "Prefetching on hover so navigation between products feels instant.",
              "Deferring anything below the fold, including recommendation carousels.",
            ],
          },
          {
            type: "callout",
            title: "Measure revenue, not scores",
            text: "We instrument real user performance alongside conversion so the improvement is visible in the metric your finance team cares about, not just in Lighthouse.",
          },
        ],
      },
      {
        heading: "What about SEO for a large catalogue?",
        body: [
          {
            type: "list",
            items: [
              "Product structured data with price and availability kept accurate.",
              "Canonical strategy for variants, filters and products in multiple categories.",
              "Faceted navigation controlled so filter combinations do not consume crawl budget.",
              "Clean handling of out-of-stock and discontinued products — 410, redirect or keep, decided deliberately.",
              "Category pages with genuine content rather than a grid and nothing else.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Storefront refresh",
        range: "$4,000 – $9,000",
        timeline: "3–6 weeks",
        bestFor: "Existing stores needing speed and design work",
        includes: [
          "Design refresh of key templates",
          "Performance optimisation",
          "Checkout friction audit and fixes",
          "Analytics and tracking cleanup",
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
          "Migration and launch support",
        ],
        featured: true,
      },
      {
        name: "Growth retainer",
        range: "from $2,500 / month",
        timeline: "Ongoing",
        bestFor: "Stores running continuous experiments",
        includes: [
          "Campaign landing pages",
          "A/B tests and conversion work",
          "Seasonal merchandising support",
          "Performance and uptime monitoring",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work with Shopify?",
        answer:
          "Yes — most commonly as a headless setup where Shopify handles catalogue, orders and checkout while the storefront is a custom Next.js application. We also work with other commerce APIs and fully custom builds.",
      },
      {
        question: "Will a faster site actually increase sales?",
        answer:
          "It removes a known source of abandonment, particularly on mobile. We measure conversion before and after so the effect is visible rather than assumed, and we are honest that speed alone does not fix weak product-market fit.",
      },
      {
        question: "Can you migrate our existing store?",
        answer:
          "Yes. Migration includes a full URL mapping with 301 redirects for every product and category so rankings and links transfer, plus a monitored launch and post-launch checks.",
      },
      {
        question: "Who handles payments and PCI compliance?",
        answer:
          "Payments run through your commerce platform or payment provider, keeping card data out of scope for your own infrastructure. We integrate rather than handle card details directly.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["website-development", "ecommerce-brands", "landing-page-design"],
    readMore: [
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "web-application-development",
    group: "services",
    title: "Web application development services",
    seoTitle: "Web Application Development Services | ROVQIX",
    description:
      "Custom web application development — dashboards, portals, internal tools and workflow systems built on Next.js, Node.js and PostgreSQL.",
    excerpt:
      "Dashboards, portals and workflow tools that replace the spreadsheet everybody is quietly afraid of.",
    eyebrow: "Web applications",
    primaryKeyword: "web application development services",
    secondaryKeywords: [
      "custom web app development",
      "business dashboard development",
      "internal tools development",
      "workflow application development",
    ],
    answer:
      "ROVQIX builds custom web applications — customer portals, operational dashboards, internal tools and workflow systems — on Next.js, Node.js and PostgreSQL, with authentication, permissions, integrations and reporting included.",
    intro:
      "Most operational software starts as a spreadsheet, then a shared spreadsheet, then a spreadsheet nobody dares change. We replace it with something auditable that fits how the work actually happens.",
    proof: [
      { metric: "6–16 wks", label: "Typical build" },
      { metric: "Role-based", label: "Access control" },
      { metric: "Audit log", label: "Who changed what" },
      { metric: "API-first", label: "Integrates with your stack" },
    ],
    deliverables: [
      {
        title: "Workflow design",
        description:
          "We map the real process first — including the exceptions people work around — before designing screens.",
        icon: "Workflow",
      },
      {
        title: "Role-based access",
        description:
          "Permissions enforced at the data layer, with an audit trail of every change for compliance and support.",
        icon: "ShieldCheck",
      },
      {
        title: "Integrations",
        description:
          "CRM, ERP, accounting, payment and internal systems connected through APIs, webhooks or scheduled sync.",
        icon: "Plug",
      },
      {
        title: "Reporting and exports",
        description:
          "The views and CSV or PDF exports your team currently rebuilds by hand every month.",
        icon: "BarChart3",
      },
      {
        title: "Background processing",
        description:
          "Imports, exports, notifications and third-party sync run as reliable jobs, not blocking the user interface.",
        icon: "Timer",
      },
      {
        title: "Deployment and monitoring",
        description:
          "Production infrastructure, backups, error tracking and alerting configured before launch, not after an incident.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "What do we build most often?",
        body: [
          {
            type: "list",
            items: [
              "Customer portals: account status, documents, requests and self-service actions.",
              "Operations dashboards: pipeline, inventory, scheduling, capacity and exceptions.",
              "Approval workflows: multi-step review with roles, comments and audit history.",
              "Quoting and configuration tools with pricing rules and PDF generation.",
              "Data collection and inspection tools, including offline-tolerant field use.",
              "Admin panels sitting behind an existing public product.",
            ],
          },
        ],
      },
      {
        heading: "How do you scope something this open-ended?",
        answer:
          "With a paid discovery phase that produces a specification, a prototype and a fixed price before the build starts.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Process mapping sessions with the people who do the work, not only the people who commissioned it.",
              "A written specification of screens, roles, rules and integrations.",
              "A clickable prototype so everyone reacts to something real before it is built.",
              "A fixed price and timeline for the build, with a clear change process for additions.",
            ],
          },
          {
            type: "callout",
            title: "Discovery is separately priced",
            text: "You end up owning the specification and prototype whether or not you continue with us. That keeps the decision honest — if the project should not go ahead, we will say so.",
          },
        ],
      },
      {
        heading: "What happens to the data you already have?",
        body: [
          {
            type: "p",
            text: "Migration is part of the project, not an afterthought. We import existing spreadsheets and legacy records, clean and validate them, and run the old and new systems in parallel for an agreed period so nothing is lost in the switch.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Discovery",
        range: "$2,500 – $5,000",
        timeline: "2 weeks",
        bestFor: "Projects that need definition before commitment",
        includes: [
          "Process mapping workshops",
          "Written functional specification",
          "Clickable prototype",
          "Fixed-price build proposal",
        ],
      },
      {
        name: "Application build",
        range: "$12,000 – $50,000",
        timeline: "6–16 weeks",
        bestFor: "Replacing manual processes with real software",
        includes: [
          "Full design and development",
          "Auth, roles and audit logging",
          "Integrations and data migration",
          "Testing, deployment and training",
          "60 days post-launch support",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $1,500 / month",
        timeline: "Ongoing",
        bestFor: "Systems your operations depend on",
        includes: [
          "Priority bug response",
          "Small enhancements each month",
          "Monitoring, backups and updates",
          "Quarterly review and roadmap",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Usually yes. If a system has an API, we integrate directly. If it does not, we look at scheduled exports, database access or a small adapter service — and we confirm feasibility during discovery, before you commit to a build.",
      },
      {
        question: "Will our team be able to use it?",
        answer:
          "We involve the people doing the work from the mapping stage, test the prototype with them, and deliver training plus documentation at handover. Software that ignores how the work really happens does not get used.",
      },
      {
        question: "What if requirements change during the build?",
        answer:
          "Small clarifications are absorbed. Genuine additions get a written estimate and your approval before they enter the build, so the timeline and price never move without you deciding.",
      },
      {
        question: "Do you host it or do we?",
        answer:
          "Either. We can deploy into your cloud account so you own the infrastructure, or manage hosting for you as part of a retainer.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["custom-software-development", "react-development", "saas-development"],
    readMore: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "custom-software-development",
    group: "services",
    title: "Custom software development services",
    seoTitle: "Custom Software Development Services | ROVQIX",
    description:
      "Custom software development for businesses that have outgrown off-the-shelf tools — APIs, integrations, automation and platforms built to fit your process.",
    excerpt:
      "For when the off-the-shelf tool almost fits, and the workaround has become the process.",
    eyebrow: "Custom software",
    primaryKeyword: "custom software development services",
    secondaryKeywords: [
      "bespoke software development",
      "custom software development company",
      "business process automation",
      "api development services",
    ],
    answer:
      "ROVQIX builds custom software for companies whose processes no longer fit generic tools — APIs, integrations, automation, internal platforms and data systems, built on Node.js, TypeScript and PostgreSQL with full source ownership.",
    intro:
      "Custom software is worth building when the process is your advantage, when licence and workaround costs exceed the build, or when no product on the market does what you need. We will tell you when that is not the case.",
    proof: [
      { metric: "Fixed scope", label: "Priced before we start" },
      { metric: "Your cloud", label: "Or ours, your choice" },
      { metric: "Documented", label: "Handover, not lock-in" },
      { metric: "Open stack", label: "No proprietary runtime" },
    ],
    deliverables: [
      {
        title: "Systems integration",
        description:
          "Connecting the tools you already run so data stops being copied between them by hand.",
        icon: "Plug",
      },
      {
        title: "API development",
        description:
          "Well-documented REST or GraphQL APIs with authentication, versioning, rate limiting and an OpenAPI specification.",
        icon: "Code2",
      },
      {
        title: "Process automation",
        description:
          "Scheduled and event-driven jobs replacing the manual steps that consume hours every week.",
        icon: "Timer",
      },
      {
        title: "Data platforms",
        description:
          "Consolidating data from multiple systems into one queryable source with reporting on top.",
        icon: "Database",
      },
      {
        title: "Legacy modernisation",
        description:
          "Incremental replacement of ageing systems using a strangler approach, so nothing stops working mid-project.",
        icon: "GitBranch",
      },
      {
        title: "Documentation",
        description:
          "Architecture notes, runbooks and API docs so another engineer can pick it up without calling us.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "When is custom software the right decision?",
        body: [
          {
            type: "table",
            head: ["Build custom when", "Buy off-the-shelf when"],
            rows: [
              ["The process is your competitive advantage", "The process is standard for your industry"],
              ["No product covers the requirement", "Several products cover it well"],
              ["Licence plus workaround cost exceeds the build", "Subscription cost is lower than building"],
              ["You need to own the data and the rules", "Vendor lock-in is acceptable"],
              ["Integration between systems is the actual need", "One tool would replace several"],
            ],
          },
          {
            type: "callout",
            title: "We will talk you out of it if we should",
            text: "Several enquiries a year end with us recommending an existing product and a small integration instead of a build. That is a better outcome for both of us than a project nobody needed.",
          },
        ],
      },
      {
        heading: "How do we approach a build?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Discovery: current process, systems, data, constraints and the definition of success.",
              "Architecture: a written plan covering data model, services, integrations, hosting and cost.",
              "Increments: working software every two weeks, in an environment you can use, not a demo video.",
              "Testing: automated tests on business logic and the paths where failure costs money.",
              "Deployment: infrastructure as code in your cloud account wherever possible.",
              "Handover: documentation, runbooks and a walkthrough with your technical contact.",
            ],
          },
        ],
      },
      {
        heading: "What technologies do we use?",
        body: [
          {
            type: "list",
            items: [
              "TypeScript across the stack, so types cross the client and server boundary.",
              "Node.js for services and APIs; Next.js where there is a user interface.",
              "PostgreSQL as the default database, with Redis for caching and queues.",
              "Docker for consistent environments, deployed to AWS, Google Cloud or your existing platform.",
              "Terraform for infrastructure, so environments are reproducible and reviewable.",
              "Boring, widely-known technology. Your next hire should recognise the stack.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Technical discovery",
        range: "$2,500 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Defining scope, architecture and cost",
        includes: [
          "Process and systems audit",
          "Architecture and data model plan",
          "Integration feasibility assessment",
          "Fixed-price build proposal",
        ],
      },
      {
        name: "Build",
        range: "$15,000 – $75,000",
        timeline: "8–24 weeks",
        bestFor: "Platforms, integrations and automation systems",
        includes: [
          "Full design and engineering",
          "Integrations and data migration",
          "Infrastructure as code",
          "Testing, monitoring and documentation",
          "Handover and training",
        ],
        featured: true,
      },
      {
        name: "Ongoing engineering",
        range: "from $3,000 / month",
        timeline: "Ongoing",
        bestFor: "Systems that keep evolving with the business",
        includes: [
          "Reserved engineering capacity",
          "Feature delivery in fixed cycles",
          "Maintenance and security updates",
          "Infrastructure and cost management",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does custom software cost?",
        answer:
          "Most projects fall between $15,000 and $75,000 depending on scope, integrations and data complexity. Discovery gives you a fixed number before you commit to the build.",
      },
      {
        question: "How long does it take?",
        answer:
          "Eight to twenty-four weeks for most builds, delivered in two-week increments so you see working software throughout rather than at the end.",
      },
      {
        question: "What happens if we want to change providers later?",
        answer:
          "You own the code, the infrastructure definitions and the documentation. We use standard, widely-known technology specifically so another team can take over without a rewrite.",
      },
      {
        question: "Do you sign NDAs and custom contracts?",
        answer:
          "Yes. We work under NDAs routinely and are comfortable with client-supplied contracts, IP assignment clauses and security questionnaires.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["web-application-development", "saas-development", "dedicated-development-team"],
    readMore: [
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
      { label: "Infrastructure as code basics", href: "/blog/infrastructure-as-code-basics" },
      { label: "API versioning strategies", href: "/blog/api-versioning-strategies" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "landing-page-design",
    group: "services",
    title: "Landing page design and development",
    seoTitle: "Landing Page Design & Development | ROVQIX",
    description:
      "High-converting landing page design and development for campaigns, product launches and paid traffic — built fast, measured properly, and ready to test.",
    excerpt:
      "One page, one goal, built in a week — and instrumented so you can tell whether it worked.",
    eyebrow: "Landing pages",
    primaryKeyword: "landing page design service",
    secondaryKeywords: [
      "high converting landing page",
      "landing page development",
      "campaign landing page design",
      "ppc landing page",
    ],
    answer:
      "ROVQIX designs and builds custom landing pages for campaigns, launches and paid traffic — typically in 5 to 10 working days, with conversion tracking, A/B test support and a page speed fast enough not to cost you clicks.",
    intro:
      "A landing page is a single argument made in the right order. We build the argument first, then design it, then make it load fast enough that the ad spend is not wasted on bounce.",
    proof: [
      { metric: "5–10 days", label: "Typical turnaround" },
      { metric: "< 2s", label: "Load time target" },
      { metric: "A/B ready", label: "Variant support" },
      { metric: "Tracked", label: "Events wired at launch" },
    ],
    deliverables: [
      {
        title: "Message and structure",
        description:
          "We map the visitor's objections in order and structure the page to answer them before asking for the action.",
        icon: "Target",
      },
      {
        title: "Custom design",
        description:
          "Designed for your offer and brand, not assembled from a template everyone in your category is using.",
        icon: "PenTool",
      },
      {
        title: "Fast build",
        description:
          "Statically generated, minimal JavaScript, optimised imagery — because paid traffic bounces on slow pages.",
        icon: "Zap",
      },
      {
        title: "Conversion tracking",
        description:
          "Form, click and scroll events wired to your analytics and ad platforms, verified before launch.",
        icon: "BarChart3",
      },
      {
        title: "Variant support",
        description:
          "Built so a second version can be spun up and split-tested without another development cycle.",
        icon: "GitBranch",
      },
      {
        title: "Form and CRM integration",
        description:
          "Submissions delivered to your CRM, email tool or inbox, with spam protection and rate limiting.",
        icon: "Plug",
      },
    ],
    sections: [
      {
        heading: "What makes a landing page convert?",
        answer:
          "Matching the promise that brought the visitor there, then removing every step between interest and action.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Message match: the headline reflects the ad or email the visitor clicked. Mismatch is the biggest single leak.",
              "One goal. A page with a demo request, a newsletter signup and a pricing link has three goals and converts on none.",
              "Objections answered in order — price, effort, risk, credibility — before the form appears.",
              "Proof that is specific: numbers, named outcomes, real quotes rather than generic praise.",
              "A form asking only for what you genuinely need. Every extra field costs completions.",
              "Speed. Paid visitors on mobile leave before a slow page finishes rendering.",
            ],
          },
        ],
      },
      {
        heading: "How fast can you turn one around?",
        body: [
          {
            type: "table",
            head: ["Scope", "Timeline"],
            rows: [
              ["Single page from existing brand assets", "5–7 working days"],
              ["Page plus one A/B variant", "7–10 working days"],
              ["Page with copywriting included", "10–14 working days"],
              ["Set of 3–5 campaign pages", "2–3 weeks"],
            ],
          },
          {
            type: "callout",
            title: "The bottleneck is usually copy",
            text: "If you have the message and the proof points ready, we can move quickly. If not, budget the extra week — building fast around a weak argument just produces a fast page that does not convert.",
          },
        ],
      },
      {
        heading: "What happens after launch?",
        body: [
          {
            type: "list",
            items: [
              "We verify tracking is firing correctly with real submissions before you spend on traffic.",
              "You get a simple dashboard view of visits, conversion rate and source.",
              "After enough traffic, we review what the data says and propose the next test.",
              "Additional variants and pages are quoted individually or covered by a monthly retainer.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Single page",
        range: "$900 – $2,000",
        timeline: "5–10 days",
        bestFor: "One campaign, one offer",
        includes: [
          "Custom design and build",
          "Responsive across devices",
          "Form and CRM integration",
          "Conversion tracking setup",
        ],
        featured: true,
      },
      {
        name: "Campaign set",
        range: "$2,500 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Multiple audiences or offers",
        includes: [
          "3–5 pages sharing a component system",
          "Per-audience messaging",
          "A/B variant setup",
          "Full tracking and reporting",
        ],
      },
      {
        name: "Ongoing pages",
        range: "from $1,200 / month",
        timeline: "Ongoing",
        bestFor: "Teams shipping campaigns continuously",
        includes: [
          "An agreed number of pages per month",
          "Iterations on existing pages",
          "Test design and analysis",
          "Priority turnaround",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a landing page cost?",
        answer:
          "A custom-designed, fully tracked single page is typically $900 to $2,000. Sets of campaign pages sharing a component system are more cost-effective per page.",
      },
      {
        question: "Can you write the copy?",
        answer:
          "Yes, based on interviews with you and your sales team. Copy written by people who have never heard how you sell rarely outperforms your own words, so we start from those.",
      },
      {
        question: "Do you build in Webflow or Unbounce?",
        answer:
          "We build custom pages in Next.js, which are faster and unconstrained. If your team needs to edit pages themselves without a developer, we will discuss whether a builder platform suits you better and say so honestly.",
      },
      {
        question: "Will it work with our existing site?",
        answer:
          "Yes. Pages can live on a subdomain, a subdirectory or entirely separately, and they will match your brand either way.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["website-development", "ui-ux-design", "ecommerce-development"],
    readMore: [
      { label: "The anatomy of a landing page that converts", href: "/blog/anatomy-of-a-converting-landing-page" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "React forms guide", href: "/blog/react-forms-guide" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "ui-ux-design",
    group: "services",
    title: "UI/UX design services for web products",
    seoTitle: "UI/UX Design Services for Web Products | ROVQIX",
    description:
      "Product and interface design for web applications and websites — research, wireframes, high-fidelity design systems and prototypes, built to be developed.",
    excerpt:
      "Design that ships. We hand over Figma files engineers can build from without a week of clarifying questions.",
    eyebrow: "UI/UX design",
    primaryKeyword: "ui ux design services",
    secondaryKeywords: [
      "product design agency",
      "web app ui design",
      "design system service",
      "ux design for saas",
    ],
    answer:
      "ROVQIX provides UI and UX design for web products: user research, information architecture, wireframes, high-fidelity interface design, prototypes and design systems — produced by people who also build the result, so the design is implementable.",
    intro:
      "Design handed to engineers without states, edge cases or responsive behaviour becomes engineering guesswork. We design the empty states, the error states and the 320px view because those are where products feel broken.",
    proof: [
      { metric: "Figma", label: "Dev-ready handover" },
      { metric: "All states", label: "Loading, empty, error" },
      { metric: "AA contrast", label: "Accessible by default" },
      { metric: "Prototyped", label: "Test before building" },
    ],
    deliverables: [
      {
        title: "Discovery and research",
        description:
          "Stakeholder interviews, user conversations where possible, competitor review and a clear problem statement.",
        icon: "Search",
      },
      {
        title: "Information architecture",
        description:
          "Navigation, page structure and content hierarchy decided before anyone opens a design tool.",
        icon: "Network",
      },
      {
        title: "Wireframes",
        description:
          "Low-fidelity structure so layout and flow decisions happen fast, without arguing about colours.",
        icon: "LayoutTemplate",
      },
      {
        title: "High-fidelity interface",
        description:
          "Every unique screen designed at mobile, tablet and desktop, with all interaction states specified.",
        icon: "PenTool",
      },
      {
        title: "Design system",
        description:
          "Tokens, components, variants and usage rules so future screens stay consistent without us.",
        icon: "Palette",
      },
      {
        title: "Prototype",
        description:
          "A clickable prototype for stakeholder review and user testing before development starts.",
        icon: "MousePointerClick",
      },
    ],
    sections: [
      {
        heading: "What does a design engagement produce?",
        body: [
          {
            type: "list",
            items: [
              "A Figma file organised by flow, with components, variants and a documented token set.",
              "Every state designed: default, hover, focus, loading, empty, error, success, disabled.",
              "Responsive layouts at defined breakpoints, not one desktop design and a hope.",
              "Annotated behaviour: what happens on submit, on failure, on slow network, on no results.",
              "A clickable prototype of the primary flows.",
              "A handover session with the engineers who will build it.",
            ],
          },
          {
            type: "callout",
            title: "The empty state test",
            text: "Show us a product design and we will ask what the dashboard looks like on day one with no data. If that screen was never designed, the first impression of the product is an accident.",
          },
        ],
      },
      {
        heading: "How does design work with development?",
        answer:
          "The same studio does both, so design decisions are checked against implementation cost as they are made.",
        body: [
          {
            type: "p",
            text: "When design and engineering are separate vendors, the gap becomes the client's problem: designs that are expensive to build, states nobody specified, and a launch that looks 80% like the file. We remove that gap by having the engineers review designs before sign-off.",
          },
          {
            type: "p",
            text: "We are equally happy to design for your in-house team to build. In that case we include a handover session and stay available for questions during implementation.",
          },
        ],
      },
      {
        heading: "Do you do user research?",
        body: [
          {
            type: "p",
            text: "Proportionate to the project. For a marketing site, that means stakeholder interviews and competitor analysis. For a product with existing users, it means talking to five to eight of them and watching them use what exists today — which almost always changes the brief.",
          },
          {
            type: "p",
            text: "We will not sell you a research programme you do not need. For most projects, a week of focused conversations produces the insight; a month produces a report.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Website design",
        range: "$2,000 – $6,000",
        timeline: "2–4 weeks",
        bestFor: "Marketing sites and brochure sites",
        includes: [
          "Wireframes and high-fidelity design",
          "All pages at three breakpoints",
          "Component library in Figma",
          "Developer handover session",
        ],
      },
      {
        name: "Product design",
        range: "$6,000 – $20,000",
        timeline: "4–10 weeks",
        bestFor: "Applications, dashboards and SaaS products",
        includes: [
          "Research and flow mapping",
          "Full interface design with all states",
          "Design system with tokens",
          "Interactive prototype",
          "Ongoing support during build",
        ],
        featured: true,
      },
      {
        name: "Design retainer",
        range: "from $1,800 / month",
        timeline: "Ongoing",
        bestFor: "Products shipping continuously",
        includes: [
          "Designs for the current roadmap",
          "Design system maintenance",
          "Design QA during development",
          "Usability review of shipped work",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you design without building?",
        answer:
          "Yes. Design-only engagements are common, and we include a handover session plus availability for implementation questions so your team is not left interpreting the file alone.",
      },
      {
        question: "Do you work with our existing brand guidelines?",
        answer:
          "Yes. We work within existing brand systems and will flag anywhere the guidelines create an accessibility or usability problem rather than silently implementing it.",
      },
      {
        question: "How many design revisions are included?",
        answer:
          "Two rounds of revisions per stage are included, which is enough when there is a single decision-maker. Additional rounds are quoted separately, and we will always tell you before you hit that point.",
      },
      {
        question: "Do you design mobile apps?",
        answer:
          "We focus on web products and responsive web applications. For native mobile design we are happy to recommend specialists rather than take work outside our expertise.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["landing-page-design", "website-development", "saas-development"],
    readMore: [
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Error boundaries and loading states", href: "/blog/react-error-boundaries-and-loading-states" },
      { label: "Designing for trust in SaaS products", href: "/blog/designing-for-trust-in-saas" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "website-maintenance",
    group: "services",
    title: "Website maintenance and support services",
    seoTitle: "Website Maintenance & Support Services | ROVQIX",
    description:
      "Ongoing website maintenance: security updates, dependency patching, uptime monitoring, backups, performance checks and a fixed block of monthly improvements.",
    excerpt:
      "The unglamorous work that keeps a site fast, secure and online — with a named human who answers.",
    eyebrow: "Maintenance",
    primaryKeyword: "website maintenance services",
    secondaryKeywords: [
      "website support plan",
      "website care plan",
      "web application maintenance",
      "ongoing website updates",
    ],
    answer:
      "ROVQIX provides monthly website maintenance covering dependency and security updates, uptime and error monitoring, backups and restore testing, performance checks, and an agreed block of hours for content and feature changes.",
    intro:
      "Most sites degrade quietly: dependencies go unpatched, Core Web Vitals slip, a form breaks and nobody notices for three weeks. Maintenance is the difference between finding that yourself and hearing it from a customer.",
    proof: [
      { metric: "< 4h", label: "Critical response" },
      { metric: "Monthly", label: "Security patching" },
      { metric: "Tested", label: "Backup restores" },
      { metric: "Reported", label: "Monthly summary" },
    ],
    deliverables: [
      {
        title: "Security and dependencies",
        description:
          "Monthly patching with critical vulnerabilities handled immediately, not at the next scheduled window.",
        icon: "ShieldCheck",
      },
      {
        title: "Uptime and error monitoring",
        description:
          "External uptime checks and error tracking with alerts to a human, so failures are caught before customers report them.",
        icon: "Activity",
      },
      {
        title: "Backups and restore testing",
        description:
          "Automated backups plus periodic restore drills, because an untested backup is an assumption.",
        icon: "Database",
      },
      {
        title: "Performance monitoring",
        description:
          "Core Web Vitals tracked from real visitors, with fixes when a metric drifts out of the good range.",
        icon: "Gauge",
      },
      {
        title: "Content and small changes",
        description:
          "An agreed block of hours each month for copy edits, new sections, campaign pages and small features.",
        icon: "PenTool",
      },
      {
        title: "Monthly report",
        description:
          "What changed, what was patched, uptime, performance and anything worth your attention next month.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What is actually included each month?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Dependency updates reviewed and deployed, with a check that nothing broke.",
              "Security advisory review, with critical issues patched out of cycle.",
              "Uptime, error rate and Core Web Vitals reviewed against the previous month.",
              "Backup verification and a restore test on a defined schedule.",
              "Forms, integrations and checkout paths tested end to end.",
              "Your requested changes, up to the agreed hours.",
              "A written report you can forward to your leadership without translating it.",
            ],
          },
        ],
      },
      {
        heading: "Why does an unmaintained site become a problem?",
        body: [
          {
            type: "table",
            head: ["Neglected for", "What typically happens"],
            rows: [
              ["3 months", "Dependencies drift; small content errors accumulate"],
              ["6 months", "Known vulnerabilities present; performance measurably worse"],
              ["12 months", "Updates become a project; a broken integration goes unnoticed"],
              ["24 months", "Upgrading costs more than the original build did"],
            ],
          },
          {
            type: "callout",
            title: "The compounding cost",
            text: "A framework upgrade done every six months is an afternoon. Done after three years it is a rebuild — and it always arrives at the worst possible moment, usually because of a security advisory.",
          },
        ],
      },
      {
        heading: "Do you maintain sites you did not build?",
        body: [
          {
            type: "p",
            text: "Yes, after a paid audit. We need to see the codebase, dependencies, hosting and monitoring before committing to a response time. The audit gives you a written assessment and a prioritised list of issues whether or not you continue with a plan.",
          },
          {
            type: "p",
            text: "We work with Next.js, React and Node.js applications. For WordPress and other platforms we will point you to specialists rather than pretend it is our strength.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Essential",
        range: "$350 / month",
        timeline: "Rolling monthly",
        bestFor: "Marketing sites that need to stay healthy",
        includes: [
          "Monthly dependency and security updates",
          "Uptime and error monitoring",
          "Backups with restore testing",
          "2 hours of changes per month",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        range: "$900 / month",
        timeline: "Rolling monthly",
        bestFor: "Sites that drive real revenue",
        includes: [
          "Everything in Essential",
          "8 hours of changes per month",
          "Core Web Vitals monitoring and fixes",
          "Priority response within 4 hours",
          "Quarterly SEO and performance review",
        ],
        featured: true,
      },
      {
        name: "Platform",
        range: "from $2,000 / month",
        timeline: "Rolling monthly",
        bestFor: "Applications with users depending on uptime",
        includes: [
          "Everything in Growth",
          "20+ hours of engineering per month",
          "On-call escalation path",
          "Infrastructure and cost management",
          "Roadmap planning sessions",
        ],
      },
    ],
    faqs: [
      {
        question: "What does website maintenance cost?",
        answer:
          "Plans start at $350 per month for a marketing site and rise with the hours and response times you need. Application maintenance with engineering capacity typically starts around $2,000 per month.",
      },
      {
        question: "Do unused hours roll over?",
        answer:
          "One month, so a quiet month is not wasted. They do not accumulate indefinitely, because reserved capacity is what makes fast response possible.",
      },
      {
        question: "What counts as an emergency?",
        answer:
          "The site being down, checkout or forms failing, or an active security incident. Those are handled immediately under priority plans rather than waiting for the next scheduled slot.",
      },
      {
        question: "Can we cancel?",
        answer:
          "Yes, with 30 days' notice. Plans are rolling monthly, not annual contracts, and everything stays in your accounts and repositories.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    related: ["website-development", "nextjs-development", "agencies-and-studios"],
    readMore: [
      { label: "Dependency security and supply chain", href: "/blog/dependency-security-supply-chain" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Incident response basics", href: "/blog/incident-response-basics" },
    ],
    publishedAt: "2026-08-12",
  },
];
