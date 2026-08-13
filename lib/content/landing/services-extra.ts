import type { LandingPage } from "@/lib/content/landing/types";

/**
 * Second batch of service pages. Split from services.ts purely to keep files
 * navigable — both arrays are merged in the registry.
 */
export const servicePagesExtra: LandingPage[] = [
  {
    slug: "api-development-services",
    group: "services",
    title: "API development services",
    seoTitle: "API Development Services | REST & GraphQL | ROVQIX",
    description:
      "REST and GraphQL API development in Node.js and TypeScript — versioning, authentication, rate limiting, OpenAPI docs and integrations that survive partner downtime.",
    excerpt:
      "APIs other teams can integrate against without emailing you — documented, versioned and predictable.",
    eyebrow: "API development",
    primaryKeyword: "api development services",
    secondaryKeywords: [
      "rest api development company",
      "graphql api development",
      "custom api integration services",
      "backend api developers",
    ],
    answer:
      "ROVQIX designs and builds REST and GraphQL APIs in Node.js and TypeScript, including authentication, authorisation, versioning, rate limiting, pagination, webhooks and OpenAPI documentation — plus integrations with third-party APIs that keep working when the provider does not.",
    intro:
      "An API is a contract you cannot quietly change once someone depends on it. Most of the work is in the decisions that are expensive to reverse: error shape, pagination, versioning and auth.",
    proof: [
      { metric: "OpenAPI", label: "Documented at delivery" },
      { metric: "Versioned", label: "From v1, not later" },
      { metric: "Idempotent", label: "Writes safe to retry" },
      { metric: "Rate limited", label: "Per key, documented" },
    ],
    deliverables: [
      {
        title: "Resource and contract design",
        description:
          "Consistent naming, predictable status codes and one error shape across every endpoint, agreed before implementation.",
        icon: "Blocks",
      },
      {
        title: "Authentication and scopes",
        description:
          "API keys, OAuth or JWT depending on who is calling, with permissions checked at the data layer on every request.",
        icon: "ShieldCheck",
      },
      {
        title: "Pagination and filtering",
        description:
          "Cursor pagination that stays correct while data changes, plus filtering and sorting that use real indexes.",
        icon: "Layers",
      },
      {
        title: "Rate limiting",
        description:
          "Per-key limits with standard headers so clients can back off intelligently instead of hammering you.",
        icon: "Timer",
      },
      {
        title: "Webhooks",
        description:
          "Signed, retried, idempotent outbound events with a delivery log your support team can actually inspect.",
        icon: "RefreshCw",
      },
      {
        title: "Documentation",
        description:
          "OpenAPI specification generated from the code, with examples and a changelog — not a wiki page that goes stale.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What decisions are expensive to change later?",
        answer:
          "Error format, pagination style, versioning scheme and auth model. Everything else can evolve.",
        body: [
          {
            type: "table",
            head: ["Decision", "Cheap to change", "Expensive to change"],
            rows: [
              ["Adding a field", "Yes", ""],
              ["Adding an endpoint", "Yes", ""],
              ["Error response shape", "", "Yes — every client parses it"],
              ["Pagination style", "", "Yes — changes every list call"],
              ["Versioning scheme", "", "Yes — affects every URL or header"],
              ["Auth mechanism", "", "Yes — every integration re-implements"],
            ],
          },
          {
            type: "callout",
            title: "Design the errors first",
            text: "Teams design the happy path carefully and improvise errors. Then every client writes bespoke handling for six inconsistent shapes. One error envelope with a stable machine-readable code costs an hour upfront and saves every integrator days.",
          },
        ],
      },
      {
        heading: "How do you make integrations survive partner outages?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Timeouts on every outbound call — an integration without one will eventually hang your own requests.",
              "Retries with exponential backoff and jitter, only for genuinely retryable failures.",
              "Idempotency keys so a retry after a timeout cannot duplicate an order or a charge.",
              "Circuit breakers that fail fast when a provider is clearly down, rather than queueing indefinitely.",
              "A durable queue for anything that can happen later, so a provider outage degrades rather than breaks.",
              "Reconciliation jobs that catch what slipped through, because eventually something will.",
            ],
          },
        ],
      },
      {
        heading: "What does delivery include?",
        body: [
          {
            type: "list",
            items: [
              "The API itself, tested at the contract level so behaviour is pinned, not just the code.",
              "An OpenAPI specification and browsable documentation.",
              "A Postman or equivalent collection for your integrators.",
              "Rate limit, error and status code reference for your support team.",
              "Monitoring on latency, error rate and per-key usage.",
              "A versioning and deprecation policy in writing.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "API design",
        range: "$2,000 – $4,500",
        timeline: "1–2 weeks",
        bestFor: "Getting the contract right before building",
        includes: [
          "Resource and endpoint design",
          "Auth and versioning strategy",
          "OpenAPI specification",
          "Implementation estimate",
        ],
      },
      {
        name: "API build",
        range: "$8,000 – $30,000",
        timeline: "4–12 weeks",
        bestFor: "Public or partner-facing APIs",
        includes: [
          "Full implementation with tests",
          "Auth, rate limiting and webhooks",
          "Documentation and client collection",
          "Monitoring and alerting",
          "Deployment and handover",
        ],
        featured: true,
      },
      {
        name: "Integration project",
        range: "$3,000 – $12,000",
        timeline: "2–6 weeks",
        bestFor: "Connecting to a third-party system",
        includes: [
          "Provider API assessment",
          "Resilient integration with retries",
          "Reconciliation and error handling",
          "Monitoring and runbook",
        ],
      },
    ],
    faqs: [
      {
        question: "REST or GraphQL?",
        answer:
          "REST for public and partner APIs, where caching, tooling and predictability matter most. GraphQL when your own varied clients need to shape their own queries. We will recommend based on who is calling, not on preference.",
      },
      {
        question: "Can you document an API we already have?",
        answer:
          "Yes. We reverse-engineer the current behaviour into an OpenAPI specification, flag inconsistencies, and propose a path to fixing them without breaking existing clients.",
      },
      {
        question: "How do you handle breaking changes?",
        answer:
          "Additive changes go into the current version. Breaking changes get a new version with both running in parallel, a written deprecation timeline, and usage monitoring so you know who still needs to migrate.",
      },
      {
        question: "Do you build API gateways and developer portals?",
        answer:
          "Yes — gateway configuration, key management, usage dashboards and a self-service portal where your integrators can get started without contacting support.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["custom-software-development", "hire-nodejs-developers", "web-application-development"],
    readMore: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "API versioning strategies", href: "/blog/api-versioning-strategies" },
      { label: "Designing reliable webhooks", href: "/blog/webhooks-design-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "website-redesign-services",
    group: "services",
    title: "Website redesign services",
    seoTitle: "Website Redesign Services | ROVQIX",
    description:
      "Website redesign that improves conversion and search performance instead of quietly losing both — with redirect mapping, content migration and measured before-and-after results.",
    excerpt:
      "Redesigns that keep the rankings you already earned, because most redesigns quietly lose them.",
    eyebrow: "Redesign",
    primaryKeyword: "website redesign services",
    secondaryKeywords: [
      "website redesign company",
      "site refresh and rebuild",
      "website replatform service",
      "redesign without losing seo",
    ],
    answer:
      "ROVQIX redesigns existing websites with a full URL map and 301 redirects, content migration, preserved structured data and measured before-and-after performance — so the new site improves on the old one rather than resetting your search visibility.",
    intro:
      "The most common redesign outcome is a better-looking site with less traffic. It happens because URLs change, content is cut, and nobody measured the old site before replacing it.",
    proof: [
      { metric: "100%", label: "URLs mapped" },
      { metric: "Baselined", label: "Before we start" },
      { metric: "30 days", label: "Post-launch monitoring" },
      { metric: "Staged", label: "Rollback ready" },
    ],
    deliverables: [
      {
        title: "Baseline measurement",
        description:
          "Traffic, rankings, conversion and Core Web Vitals recorded before anything changes, so the outcome is provable.",
        icon: "BarChart3",
      },
      {
        title: "Complete URL mapping",
        description:
          "Every existing URL mapped to its new destination, with 301 redirects tested before launch, not after.",
        icon: "Network",
      },
      {
        title: "Content audit",
        description:
          "Which pages earn traffic and links, which should be merged, and which genuinely should be removed.",
        icon: "FileText",
      },
      {
        title: "Design and rebuild",
        description:
          "New design and a modern build, with the information architecture reconsidered rather than copied.",
        icon: "PenTool",
      },
      {
        title: "Migration",
        description:
          "Content, media, forms, integrations and structured data carried across and verified page by page.",
        icon: "GitBranch",
      },
      {
        title: "Monitored launch",
        description:
          "Coverage, rankings, errors and conversion watched daily for the first month, with fixes as issues surface.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "Why do redesigns lose traffic?",
        body: [
          {
            type: "table",
            head: ["Cause", "Prevention"],
            rows: [
              ["URLs changed without redirects", "Full URL map and tested 301s"],
              ["Pages cut that earned traffic", "Content audit against analytics first"],
              ["Text replaced with images", "Keep substantive content crawlable"],
              ["Internal links dropped", "Preserve or rebuild the link structure"],
              ["Structured data not carried over", "Schema migrated and validated"],
              ["Slower new site", "Performance budget enforced pre-launch"],
              ["Staging site indexed", "Auth on staging, verified before launch"],
            ],
          },
          {
            type: "callout",
            title: "The audit that pays for itself",
            text: "Before designing anything, we list every page with its traffic, rankings and backlinks. It routinely reveals that a handful of pages nobody remembered are earning a large share of the organic traffic — pages a normal redesign would have deleted.",
          },
        ],
      },
      {
        heading: "When is a redesign the wrong answer?",
        answer:
          "When the real problem is messaging, content or performance — all of which are cheaper to fix on the existing site.",
        body: [
          {
            type: "list",
            items: [
              "If the site is slow, fix performance. That is weeks, not months, and the effect is measurable.",
              "If it does not convert, test messaging and page structure before rebuilding everything.",
              "If content is thin, write content. A new template will not make an empty page rank.",
              "If it looks dated but works, a visual refresh on the existing structure may be enough.",
              "Redesign when the underlying platform genuinely blocks you, or the brand has moved on entirely.",
            ],
          },
        ],
      },
      {
        heading: "How does the launch work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Full staging review with your team, behind authentication so it cannot be indexed.",
              "Redirect map tested against a crawl of the live site — every URL, not a sample.",
              "Launch scheduled for a low-traffic window with the previous version ready to restore.",
              "Immediate post-launch checks: redirects, forms, analytics, structured data, sitemap submission.",
              "Daily monitoring for two weeks, then weekly for a month, with a written report at each stage.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Audit & plan",
        range: "$1,500 – $3,500",
        timeline: "1–2 weeks",
        bestFor: "Deciding whether to redesign at all",
        includes: [
          "Content and traffic audit",
          "Technical and performance review",
          "Conversion assessment",
          "Prioritised recommendation",
        ],
      },
      {
        name: "Full redesign",
        range: "$6,000 – $25,000",
        timeline: "6–12 weeks",
        bestFor: "Sites that need a genuine rebuild",
        includes: [
          "Content audit and IA",
          "Complete design and build",
          "Migration with redirect mapping",
          "Performance and SEO work",
          "Monitored launch and reporting",
        ],
        featured: true,
      },
      {
        name: "Refresh",
        range: "$3,000 – $8,000",
        timeline: "3–5 weeks",
        bestFor: "Good structure, dated presentation",
        includes: [
          "Visual redesign on existing structure",
          "Key template rebuilds",
          "Performance improvements",
          "No URL changes required",
        ],
      },
    ],
    faqs: [
      {
        question: "Will we lose our Google rankings?",
        answer:
          "Not if the migration is done properly. Expect a small fluctuation for two to four weeks as Google reprocesses the redirects, then recovery. Sustained losses come from missing redirects or removed content, which is exactly what the audit prevents.",
      },
      {
        question: "Can you keep our existing content?",
        answer:
          "Yes, and usually we should. The audit identifies what earns traffic and links; that content is migrated and often improved rather than rewritten from scratch.",
      },
      {
        question: "How long does a redesign take?",
        answer:
          "Six to twelve weeks for most sites. The variable is content decisions and review speed, not build time.",
      },
      {
        question: "Can we launch in phases?",
        answer:
          "Yes, section by section, which reduces risk on large sites. It requires careful handling so old and new sections coexist without duplicate content, and we plan that explicitly.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-development", "website-speed-optimization", "technical-seo-services"],
    readMore: [
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
      { label: "Canonical URLs explained", href: "/blog/canonical-urls-explained" },
      { label: "Technical SEO checklist", href: "/blog/technical-seo-checklist-developers" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "website-speed-optimization",
    group: "services",
    title: "Website speed optimization services",
    seoTitle: "Website Speed Optimization Services | ROVQIX",
    description:
      "Page speed and Core Web Vitals optimisation — LCP, INP and CLS fixed at the source, measured with real user data, with conversion impact reported.",
    excerpt:
      "Core Web Vitals fixed at the cause, measured on real visitors rather than a lab score.",
    eyebrow: "Performance",
    primaryKeyword: "website speed optimization service",
    secondaryKeywords: [
      "core web vitals optimization",
      "page speed optimization company",
      "improve lcp and inp",
      "website performance audit",
    ],
    answer:
      "ROVQIX diagnoses and fixes web performance problems — Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift — using real user monitoring rather than lab scores alone, and reports the conversion effect alongside the metrics.",
    intro:
      "A Lighthouse score is a lab simulation of one page load on one device. Your visitors are on worse networks and cheaper phones. We fix what real users experience.",
    proof: [
      { metric: "RUM", label: "Real-user measurement" },
      { metric: "LCP / INP / CLS", label: "All three addressed" },
      { metric: "Budgeted", label: "Enforced in CI" },
      { metric: "Reported", label: "Conversion impact" },
    ],
    deliverables: [
      {
        title: "Real user monitoring",
        description:
          "Field data by page, device and country, so work targets what visitors actually experience.",
        icon: "Activity",
      },
      {
        title: "LCP fixes",
        description:
          "Finding the true LCP element and removing what delays it — usually discovery, priority or render-blocking resources.",
        icon: "Gauge",
      },
      {
        title: "INP fixes",
        description:
          "Breaking up long tasks, cutting hydration cost and deferring work so interactions respond immediately.",
        icon: "MousePointerClick",
      },
      {
        title: "Layout stability",
        description:
          "Reserved space for images, ads, embeds and banners so content stops jumping as the page loads.",
        icon: "LayoutTemplate",
      },
      {
        title: "Third-party audit",
        description:
          "Every tag measured for cost and value. Usually two or three can go with no business impact at all.",
        icon: "Plug",
      },
      {
        title: "Budgets in CI",
        description:
          "Bundle and metric budgets enforced on every pull request, so the gains do not erode over the next quarter.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "Where does the time actually go?",
        answer:
          "Usually images, render-blocking resources and third-party JavaScript — in that order, on most sites we audit.",
        body: [
          {
            type: "table",
            head: ["Cause", "Typical impact", "Effort to fix"],
            rows: [
              ["Oversized images", "1–3s on LCP", "Low"],
              ["Render-blocking CSS/JS", "0.5–2s", "Low to medium"],
              ["Third-party scripts", "0.5–3s, plus INP", "Low, mostly a decision"],
              ["Font loading", "0.3–1s, plus CLS", "Low"],
              ["Excess client JavaScript", "INP and TBT", "Medium to high"],
              ["Slow server response", "0.2–2s on TTFB", "Varies"],
            ],
          },
          {
            type: "p",
            text: "The first four are usually a week of work with most of the benefit. We do those first and re-measure before proposing anything structural.",
          },
        ],
      },
      {
        heading: "Why does the lab score disagree with real users?",
        body: [
          {
            type: "p",
            text: "Lighthouse loads one page, cold, on a simulated device and network. Real users arrive with warm caches, different devices, different connections, and — critically — they interact. INP only exists once someone clicks something, which a lab test never does.",
          },
          {
            type: "callout",
            title: "Optimise the field data",
            text: "Core Web Vitals as a ranking signal use field data from real Chrome users, not your Lighthouse score. A site can score 95 in the lab and fail the assessment in the field. We instrument real users first and treat the lab as a debugging tool.",
          },
        ],
      },
      {
        heading: "What does the engagement look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Week 1: instrument real user monitoring and collect a baseline across your top templates.",
              "Week 1–2: audit and produce a prioritised list — expected gain against effort for each item.",
              "Week 2–4: implement, highest ratio first, measuring after each change rather than at the end.",
              "Week 4: add budgets to CI so regressions are caught in review.",
              "Week 6–8: report field data and conversion against the baseline.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Performance audit",
        range: "$1,200 – $2,800",
        timeline: "1 week",
        bestFor: "Knowing exactly what to fix",
        includes: [
          "Field and lab analysis",
          "Bundle and third-party breakdown",
          "Prioritised fix list with estimates",
          "Written report and walkthrough",
        ],
      },
      {
        name: "Audit and fix",
        range: "$3,500 – $9,000",
        timeline: "3–5 weeks",
        bestFor: "Sites failing Core Web Vitals",
        includes: [
          "Everything in the audit",
          "Implementation of prioritised fixes",
          "Budgets enforced in CI",
          "Before-and-after field reporting",
          "Monitoring dashboard setup",
        ],
        featured: true,
      },
      {
        name: "Ongoing monitoring",
        range: "from $600 / month",
        timeline: "Ongoing",
        bestFor: "Keeping the gains",
        includes: [
          "Continuous field monitoring",
          "Regression alerts",
          "Monthly review and fixes",
          "Budget maintenance in CI",
        ],
      },
    ],
    faqs: [
      {
        question: "How much faster can you make our site?",
        answer:
          "On a typical unoptimised site, LCP improvements of 40 to 60 percent are common in the first pass. We give a specific estimate after the audit rather than promising a number upfront.",
      },
      {
        question: "Will this improve our Google rankings?",
        answer:
          "Core Web Vitals are a ranking signal, but a modest one compared with content and links. The stronger case is conversion and bounce rate — speed affects revenue more directly than it affects rankings.",
      },
      {
        question: "Do you need to rebuild our site?",
        answer:
          "Usually not. Most gains come from images, scripts, fonts and loading strategy on the existing site. We only recommend a rebuild when the platform itself is the constraint, and we will show you the evidence.",
      },
      {
        question: "Can you work on WordPress or Shopify?",
        answer:
          "Yes for audits and most fixes — images, scripts, caching, theme-level work. For deep application-level changes our strength is Next.js and React, and we will be clear about that boundary.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["technical-seo-services", "website-redesign-services", "website-maintenance"],
    readMore: [
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "technical-seo-services",
    group: "services",
    title: "Technical SEO services for developers and marketing teams",
    seoTitle: "Technical SEO Services | Crawling & Indexing | ROVQIX",
    description:
      "Technical SEO implemented in code — crawlability, indexation, canonicals, structured data, site architecture and Core Web Vitals, by engineers rather than auditors.",
    excerpt:
      "Technical SEO fixed in the codebase, not delivered as a 60-page PDF for someone else to implement.",
    eyebrow: "Technical SEO",
    primaryKeyword: "technical seo services",
    secondaryKeywords: [
      "technical seo agency",
      "seo for javascript websites",
      "structured data implementation",
      "site architecture seo",
    ],
    answer:
      "ROVQIX provides technical SEO as an engineering service: we audit crawling, indexation, canonicalisation, site architecture, structured data and Core Web Vitals, then implement the fixes in your codebase rather than handing over a report.",
    intro:
      "Most technical SEO audits die in a backlog because the recommendations are written for an auditor's checklist rather than a developer's ticket. We write and merge the fix.",
    proof: [
      { metric: "Implemented", label: "Not just reported" },
      { metric: "JS-aware", label: "Rendering understood" },
      { metric: "Schema", label: "Validated at build" },
      { metric: "Monitored", label: "Coverage tracked after" },
    ],
    deliverables: [
      {
        title: "Crawl and index audit",
        description:
          "What Google can reach, what it chooses to index, and where crawl budget is being wasted on parameters and duplicates.",
        icon: "Search",
      },
      {
        title: "Rendering assessment",
        description:
          "Whether your content is in the HTML or only appears after JavaScript — the single biggest technical risk on modern sites.",
        icon: "Code2",
      },
      {
        title: "Canonicalisation",
        description:
          "One indexable URL per piece of content, with parameters, pagination, filters and locales handled deliberately.",
        icon: "Network",
      },
      {
        title: "Structured data",
        description:
          "Article, Product, FAQ, Breadcrumb and Organization schema generated from real data and validated in CI.",
        icon: "Blocks",
      },
      {
        title: "Site architecture",
        description:
          "Internal linking and hierarchy so authority flows to the pages that matter and nothing is orphaned.",
        icon: "Layers",
      },
      {
        title: "Core Web Vitals",
        description:
          "Field-data performance work, since the assessment uses real user data rather than your lab score.",
        icon: "Gauge",
      },
    ],
    sections: [
      {
        heading: "What does a technical SEO audit cover?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Crawlability: robots.txt, sitemaps, response codes, redirect chains, orphaned pages.",
              "Indexation: what is indexed versus what should be, and why Google is excluding pages.",
              "Rendering: server-rendered content versus client-only, and what a crawler actually receives.",
              "Duplication: canonicals, parameters, pagination, filters, trailing slashes, protocol and host variants.",
              "Architecture: click depth, internal link distribution, hub and cluster structure.",
              "Structured data: coverage, validity and eligibility for rich results.",
              "Performance: Core Web Vitals from field data, by template.",
              "International: hreflang and locale handling where relevant.",
            ],
          },
        ],
      },
      {
        heading: "Why does JavaScript rendering matter so much?",
        answer:
          "Because content that only exists after client-side JavaScript may be indexed late, partially, or not at all.",
        body: [
          {
            type: "p",
            text: "Google can render JavaScript, but rendering is queued and resource-constrained, and other crawlers — including several AI answer engines — do far less of it. Content in the initial HTML is indexed reliably; content that appears only after hydration is a gamble.",
          },
          {
            type: "callout",
            title: "The test that takes two minutes",
            text: "Fetch your page with curl and search the output for your main heading and body copy. If they are not there, crawlers are not reliably seeing them either — regardless of what the rendered page looks like in your browser.",
          },
        ],
      },
      {
        heading: "How do you handle structured data properly?",
        body: [
          {
            type: "list",
            items: [
              "Generated from the same data that renders the page, so markup can never contradict visible content.",
              "Only types that genuinely apply — invented FAQ markup on a page with no FAQs risks a manual action.",
              "Validated in CI, so a schema change cannot ship broken.",
              "Entity relationships wired up: Organization, breadcrumbs, author, publisher and article all connected.",
              "Monitored in Search Console for errors and rich result eligibility after launch.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Technical audit",
        range: "$1,500 – $4,000",
        timeline: "1–2 weeks",
        bestFor: "Understanding what is holding the site back",
        includes: [
          "Full crawl and index analysis",
          "Rendering and architecture review",
          "Structured data assessment",
          "Prioritised, developer-ready findings",
        ],
      },
      {
        name: "Audit and implementation",
        range: "$4,000 – $14,000",
        timeline: "4–8 weeks",
        bestFor: "Fixes that actually ship",
        includes: [
          "Everything in the audit",
          "Implementation in your codebase",
          "Structured data and metadata system",
          "Internal linking improvements",
          "Post-launch monitoring",
        ],
        featured: true,
      },
      {
        name: "Ongoing technical SEO",
        range: "from $1,200 / month",
        timeline: "Ongoing",
        bestFor: "Sites publishing continuously",
        includes: [
          "Monthly crawl and coverage review",
          "New template and feature review",
          "Search Console monitoring",
          "Continuous fixes and reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you do content SEO and link building too?",
        answer:
          "No. We do the technical and engineering side. Content strategy and digital PR are separate disciplines, and we would rather work alongside a specialist than do them badly.",
      },
      {
        question: "Can you work with our existing SEO agency?",
        answer:
          "Yes, frequently. They set strategy and priorities; we implement the technical work in the codebase. That combination usually works better than either side alone.",
      },
      {
        question: "How long until we see results?",
        answer:
          "Indexation and crawl fixes show within weeks. Ranking improvements take one to three months and depend on competition and content quality — technical SEO removes obstacles rather than creating demand.",
      },
      {
        question: "Do you work on non-Next.js sites?",
        answer:
          "For audits, yes, on any stack. For implementation we are strongest in Next.js, React and Node.js, and will tell you when your platform needs a specialist instead.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-speed-optimization", "ai-seo-services", "website-redesign-services"],
    readMore: [
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "ai-seo-services",
    group: "services",
    title: "AI SEO services: getting cited by ChatGPT, Perplexity and AI Overviews",
    seoTitle: "AI SEO & AEO Services | Get Cited by AI | ROVQIX",
    description:
      "Answer engine optimisation for AI search — structuring content and markup so ChatGPT, Perplexity, Claude and Google AI Overviews can find, extract and cite your pages.",
    excerpt:
      "Getting cited in AI answers is an extraction problem before it is a ranking problem. Here is how we solve it.",
    eyebrow: "AI SEO / AEO",
    primaryKeyword: "ai seo services",
    secondaryKeywords: [
      "answer engine optimization service",
      "generative engine optimization",
      "get cited by chatgpt",
      "aeo and geo agency",
    ],
    answer:
      "ROVQIX optimises websites for AI answer engines: structuring content into self-contained, extractable answers, making it available in server-rendered HTML, implementing entity-level structured data, and publishing machine-readable summaries so systems like ChatGPT, Perplexity and Google AI Overviews can cite you accurately.",
    intro:
      "AI systems do not rank ten links. They synthesise an answer and cite a few sources. Being citable is a different problem from ranking, and most sites are accidentally bad at it.",
    proof: [
      { metric: "HTML-first", label: "No JS gate on content" },
      { metric: "Extractable", label: "Self-contained answers" },
      { metric: "Entity schema", label: "Machine-readable" },
      { metric: "llms.txt", label: "Published and maintained" },
    ],
    deliverables: [
      {
        title: "Extractable content structure",
        description:
          "Question-shaped headings with a direct answer immediately beneath, so a passage stands alone when lifted out of context.",
        icon: "Blocks",
      },
      {
        title: "Server-rendered content",
        description:
          "Substantive content in the initial HTML, because many AI crawlers execute little or no JavaScript.",
        icon: "Code2",
      },
      {
        title: "Entity structured data",
        description:
          "Organization, Person, Article, FAQ and Breadcrumb schema connected so machines understand who is saying what.",
        icon: "Network",
      },
      {
        title: "Machine-readable summaries",
        description:
          "An llms.txt index of your key content, kept current from the same source that generates your sitemap.",
        icon: "FileText",
      },
      {
        title: "Crawler access review",
        description:
          "Deciding deliberately which AI crawlers to allow, and confirming robots.txt and WAF rules match that decision.",
        icon: "ShieldCheck",
      },
      {
        title: "Citation monitoring",
        description:
          "Tracking whether your brand appears in AI answers for your priority questions, and what gets cited instead.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "What is answer engine optimisation?",
        answer:
          "Structuring content and markup so AI systems can extract a correct, self-contained answer and attribute it to you.",
        body: [
          {
            type: "table",
            head: ["", "Traditional SEO", "Answer engine optimisation"],
            rows: [
              ["Goal", "Rank in a list of links", "Be cited in a synthesised answer"],
              ["Unit of value", "The page", "The passage"],
              ["Click outcome", "User visits your site", "User may never click"],
              ["Key signal", "Links and relevance", "Extractability and clarity"],
              ["Format", "Comprehensive pages", "Self-contained, structured answers"],
            ],
          },
          {
            type: "p",
            text: "The two overlap heavily — a page that ranks well is more likely to be cited. The difference is that AEO cares about whether a single paragraph makes sense on its own, without the surrounding page.",
          },
        ],
      },
      {
        heading: "How do you make a page citable?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ask the question the user asks, as a heading, in their words.",
              "Answer it in the first two sentences, completely, without pronouns referring to earlier text.",
              "Name the subject explicitly in each answer — 'Next.js caching works by…', not 'It works by…'.",
              "Use tables and lists for comparisons and steps, which extract more reliably than prose.",
              "Include specifics: numbers, versions, dates. Vague claims are not worth citing.",
              "Keep it in the HTML, not behind a tab, accordion script or client-side fetch.",
            ],
          },
          {
            type: "callout",
            title: "The extraction test",
            text: "Copy any single paragraph out of your page and read it cold. If it needs the paragraph above to make sense, an AI system quoting it will either garble it or skip it. We rewrite for that constraint.",
          },
        ],
      },
      {
        heading: "Does blocking AI crawlers help or hurt?",
        body: [
          {
            type: "p",
            text: "It is a business decision, not a technical one, and it differs per crawler. Blocking training crawlers has no effect on whether you appear in live retrieval answers. Blocking retrieval crawlers removes you from those answers entirely.",
          },
          {
            type: "list",
            items: [
              "If AI answers are a discovery channel for you, allow retrieval crawlers and optimise for citation.",
              "If your content is a paid product, restrict it and gate what matters.",
              "Whatever you choose, make robots.txt and your WAF agree — we see plenty of sites blocking crawlers by accident at the edge.",
              "Review the decision periodically; the crawler landscape changes faster than most robots.txt files do.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "AEO audit",
        range: "$1,500 – $3,500",
        timeline: "1–2 weeks",
        bestFor: "Understanding why you are not being cited",
        includes: [
          "Extractability review of key pages",
          "Rendering and crawler access check",
          "Structured data and entity audit",
          "Citation baseline for priority questions",
        ],
      },
      {
        name: "Implementation",
        range: "$4,000 – $12,000",
        timeline: "4–8 weeks",
        bestFor: "Restructuring content and markup to be citable",
        includes: [
          "Content restructuring for extraction",
          "Entity structured data system",
          "Server rendering fixes",
          "llms.txt and machine-readable summaries",
          "Citation monitoring setup",
        ],
        featured: true,
      },
      {
        name: "Ongoing AEO",
        range: "from $1,500 / month",
        timeline: "Ongoing",
        bestFor: "Content programmes competing for citations",
        includes: [
          "New content reviewed for extractability",
          "Monthly citation tracking and reporting",
          "Schema and llms.txt maintenance",
          "Crawler landscape monitoring",
        ],
      },
    ],
    faqs: [
      {
        question: "Does AI SEO replace traditional SEO?",
        answer:
          "No. It extends it. The same content quality and technical foundations matter; AEO adds structural requirements around extractability and entity clarity. Sites that rank well and are well structured tend to get cited most.",
      },
      {
        question: "Can you guarantee we will be cited by ChatGPT?",
        answer:
          "No, and nobody honestly can. There is no submission process and no ranking dashboard. What we can do is remove the technical reasons you are not being cited and structure content so you are a good candidate.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We track a defined set of questions across the major AI systems and record whether your brand appears and what is cited instead. It is sampling rather than exhaustive measurement, and we are clear about that limitation.",
      },
      {
        question: "What is llms.txt?",
        answer:
          "A plain-text file at your site root that lists your key content with short descriptions, in a form language models can consume cheaply. It is an emerging convention rather than a standard, but it is inexpensive to publish and maintain.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["technical-seo-services", "website-development", "saas-startups"],
    readMore: [
      { label: "What is answer engine optimization?", href: "/blog/what-is-answer-engine-optimization" },
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "llms.txt explained", href: "/blog/llms-txt-and-ai-crawlers" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "mvp-development-services",
    group: "services",
    title: "MVP development services for founders",
    seoTitle: "MVP Development Services for Startups | ROVQIX",
    description:
      "MVP development for founders — a real, chargeable product in 8 to 14 weeks, scoped to prove demand rather than to impress with feature count.",
    excerpt:
      "A product real customers can pay for, shipped before the runway argument starts.",
    eyebrow: "MVP development",
    primaryKeyword: "mvp development services",
    secondaryKeywords: [
      "mvp development company",
      "build an mvp for startup",
      "rapid prototype development",
      "minimum viable product agency",
    ],
    answer:
      "ROVQIX builds minimum viable products in 8 to 14 weeks: one core workflow built properly, plus signup, billing and the support tooling needed to serve a real paying customer. Scope is deliberately narrow so you learn from the market rather than from a roadmap.",
    intro:
      "The purpose of an MVP is to be wrong quickly and cheaply. Most fail at that because they take nine months and include everything anyone suggested.",
    proof: [
      { metric: "8–14 wks", label: "Idea to launch" },
      { metric: "Chargeable", label: "Billing from day one" },
      { metric: "Fixed price", label: "Agreed upfront" },
      { metric: "Yours", label: "Full IP, no equity" },
    ],
    deliverables: [
      {
        title: "Scope discipline",
        description:
          "We actively cut features. The MVP contains the one workflow your value proposition depends on, and little else.",
        icon: "Target",
      },
      {
        title: "Clickable prototype first",
        description:
          "Before code, a prototype you can put in front of prospective customers — the cheapest possible way to be wrong.",
        icon: "MousePointerClick",
      },
      {
        title: "Real billing",
        description:
          "Stripe subscriptions from launch, because free pilots teach you far less than someone entering a card.",
        icon: "CreditCard",
      },
      {
        title: "Instrumented from day one",
        description:
          "Analytics on the activation funnel so you learn where people drop off rather than guessing after launch.",
        icon: "BarChart3",
      },
      {
        title: "Support tooling",
        description:
          "Admin views and manual overrides so you can serve early customers without running database queries.",
        icon: "LifeBuoy",
      },
      {
        title: "Built to extend",
        description:
          "A conventional stack with documented decisions, so your first engineering hire inherits something workable.",
        icon: "GitBranch",
      },
    ],
    sections: [
      {
        heading: "What belongs in an MVP?",
        body: [
          {
            type: "table",
            head: ["Include", "Exclude", "Why"],
            rows: [
              ["One core workflow", "Adjacent workflows", "You are testing one hypothesis"],
              ["Signup and billing", "Enterprise SSO", "Payment is the real signal"],
              ["Basic roles", "Granular permissions", "Add when a customer needs it"],
              ["Manual admin tools", "Automated everything", "Manual scales fine to 50 customers"],
              ["Email notifications", "Notification centre", "Email is enough at this stage"],
              ["Analytics on activation", "A BI dashboard", "You need one funnel, not a warehouse"],
            ],
          },
          {
            type: "callout",
            title: "Do things that do not scale",
            text: "For your first customers, a human doing something manually is often better than software doing it badly. We deliberately leave some processes manual so the build stays small and you learn what actually needs automating.",
          },
        ],
      },
      {
        heading: "What does the timeline look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Weeks 1–2: definition workshops, user flows and a clickable prototype. Test it on real prospects.",
              "Weeks 3–4: foundations — data model, auth, tenancy, deployment pipeline.",
              "Weeks 5–10: the core workflow, built in two-week increments you can use as they land.",
              "Weeks 11–12: billing, onboarding, admin tooling and the marketing site.",
              "Weeks 13–14: testing, monitoring, launch and the first round of fixes.",
            ],
          },
        ],
      },
      {
        heading: "What happens if the MVP does not work?",
        body: [
          {
            type: "p",
            text: "Then it did its job for a fraction of what finding out later would have cost. That is a real outcome and we would rather you reach it in three months than eighteen.",
          },
          {
            type: "p",
            text: "Practically: no annual contract, 30 days notice, everything in your accounts, and a conventional stack that can be repurposed for a pivot rather than thrown away.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Prototype sprint",
        range: "$3,000 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Testing the idea before building it",
        includes: [
          "Definition workshops",
          "User flows and clickable prototype",
          "Technical architecture plan",
          "Costed build roadmap",
        ],
      },
      {
        name: "MVP build",
        range: "$15,000 – $45,000",
        timeline: "8–14 weeks",
        bestFor: "A product real customers can buy",
        includes: [
          "Product and interface design",
          "Core application with auth and billing",
          "Marketing site",
          "Analytics and admin tooling",
          "Launch support and handover",
        ],
        featured: true,
      },
      {
        name: "Post-launch retainer",
        range: "from $3,500 / month",
        timeline: "Ongoing",
        bestFor: "Iterating on what you learn",
        includes: [
          "Two-week delivery cycles",
          "Feature work driven by user data",
          "Monitoring and maintenance",
          "Scale down or stop on 30 days notice",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer:
          "Typically $15,000 to $45,000 over 8 to 14 weeks. A prototype sprint alone is $3,000 to $6,000 and is often the right first step if the concept is still moving.",
      },
      {
        question: "Do you work for equity?",
        answer:
          "No. Fixed paid engagements only. It keeps our advice honest — particularly the advice to build less than you asked for.",
      },
      {
        question: "Can you help us raise funding?",
        answer:
          "Indirectly. A working product with real users is the strongest material for a raise. We do not write decks or make introductions, and we will not claim otherwise.",
      },
      {
        question: "What if we already have a technical co-founder?",
        answer:
          "Then we usually add velocity rather than replacing anyone: they own core product decisions while we build defined areas alongside them. Shared repository, shared review.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["saas-development", "saas-startups", "web-development-company-san-francisco"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "wordpress-to-nextjs-migration",
    group: "services",
    title: "WordPress to Next.js migration",
    seoTitle: "WordPress to Next.js Migration Services | ROVQIX",
    description:
      "Migrate from WordPress to Next.js without losing search rankings — headless or full rebuild, with content migration, redirect mapping and measured performance gains.",
    excerpt:
      "Leave the plugin treadmill behind without leaving your rankings behind with it.",
    eyebrow: "Migration",
    primaryKeyword: "wordpress to next.js migration",
    secondaryKeywords: [
      "migrate wordpress to nextjs",
      "headless wordpress development",
      "wordpress replacement development",
      "wordpress to react migration",
    ],
    answer:
      "ROVQIX migrates WordPress sites to Next.js either headlessly — keeping WordPress as the editor while Next.js renders the site — or as a full rebuild onto a modern CMS. Both include content migration, complete redirect mapping and before-and-after performance measurement.",
    intro:
      "WordPress is not the problem. Twenty-eight plugins, a page builder and a theme nobody can update are the problem. Migration is worth it when maintenance and performance costs exceed the rebuild.",
    proof: [
      { metric: "Headless", label: "Keep your editor" },
      { metric: "All URLs", label: "Mapped and redirected" },
      { metric: "2–4x", label: "Typical speed gain" },
      { metric: "No plugins", label: "Nothing to patch weekly" },
    ],
    deliverables: [
      {
        title: "Migration path assessment",
        description:
          "Headless or full rebuild, decided on how your team edits, what plugins genuinely do work, and your budget.",
        icon: "Compass",
      },
      {
        title: "Content migration",
        description:
          "Posts, pages, media, taxonomies and custom fields moved with formatting intact and verified page by page.",
        icon: "Database",
      },
      {
        title: "Redirect mapping",
        description:
          "Every existing URL mapped and 301'd, tested against a crawl of the live site before launch.",
        icon: "Network",
      },
      {
        title: "Plugin replacement",
        description:
          "Forms, SEO, caching, galleries and search rebuilt natively — usually faster and with nothing to update.",
        icon: "Plug",
      },
      {
        title: "Editor experience",
        description:
          "Headless WordPress or a modern CMS, set up so your team's publishing workflow does not get worse.",
        icon: "PenTool",
      },
      {
        title: "Measured outcome",
        description:
          "Performance and traffic baselined before, measured after, and reported honestly either way.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "Headless or full rebuild?",
        answer:
          "Headless keeps WordPress as the editor and replaces only the front end. A full rebuild replaces the CMS as well.",
        body: [
          {
            type: "table",
            head: ["", "Headless WordPress", "Full rebuild"],
            rows: [
              ["Editor experience", "Unchanged for your team", "New CMS to learn"],
              ["Migration risk", "Lower — content stays put", "Higher — content moves"],
              ["Ongoing maintenance", "Still maintaining WordPress", "One system to maintain"],
              ["Cost", "Lower", "Higher"],
              ["Hosting", "WordPress plus front end", "Front end plus CMS service"],
              ["Best when", "The editing workflow works", "WordPress itself is the problem"],
            ],
          },
          {
            type: "callout",
            title: "Headless is often the pragmatic answer",
            text: "If your editors are productive in WordPress and the pain is performance, security and design constraints, headless solves the actual problem at lower cost and risk. We will say so rather than selling the bigger project.",
          },
        ],
      },
      {
        heading: "What replaces the plugins?",
        body: [
          {
            type: "table",
            head: ["Plugin does", "Replacement"],
            rows: [
              ["SEO metadata", "Typed metadata system in code"],
              ["Caching", "Static generation and CDN, by default"],
              ["Contact forms", "Server-validated forms with spam protection"],
              ["Image optimisation", "Built-in image pipeline with modern formats"],
              ["Page builder", "Component library editors compose from"],
              ["Security hardening", "No plugin surface to harden"],
              ["Analytics", "Direct integration, loaded efficiently"],
            ],
          },
          {
            type: "p",
            text: "The audit lists every active plugin and what it actually does. Typically a third are genuinely needed, a third are replaced natively, and a third have been doing nothing for two years.",
          },
        ],
      },
      {
        heading: "How do you protect search rankings?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Crawl the live site fully and record every URL, title, meta description and canonical.",
              "Baseline rankings, traffic and top landing pages before anything changes.",
              "Map every URL to its destination — one to one wherever possible.",
              "Carry structured data across and validate it in staging.",
              "Test every redirect against the crawl before launch, not with a sample.",
              "Submit the new sitemap and monitor coverage daily for the first fortnight.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Migration assessment",
        range: "$1,200 – $2,500",
        timeline: "1 week",
        bestFor: "Deciding the approach and cost",
        includes: [
          "Plugin and content audit",
          "URL inventory and complexity review",
          "Recommended migration path",
          "Fixed-price migration proposal",
        ],
      },
      {
        name: "Headless migration",
        range: "$6,000 – $18,000",
        timeline: "5–10 weeks",
        bestFor: "Keeping WordPress as the editor",
        includes: [
          "Next.js front end build",
          "WordPress API integration",
          "Redirect mapping and testing",
          "Performance optimisation",
          "Monitored launch",
        ],
        featured: true,
      },
      {
        name: "Full rebuild",
        range: "$10,000 – $30,000",
        timeline: "8–14 weeks",
        bestFor: "Replacing WordPress entirely",
        includes: [
          "New design and build",
          "Modern headless CMS setup",
          "Full content migration",
          "Editor training",
          "Redirects, launch and monitoring",
        ],
      },
    ],
    faqs: [
      {
        question: "Will we lose our rankings?",
        answer:
          "Not with proper redirect mapping. Expect a short fluctuation while Google reprocesses URLs, then recovery — often with gains, since the new site is usually substantially faster.",
      },
      {
        question: "Can our team still use WordPress to publish?",
        answer:
          "Yes, in a headless setup WordPress remains the editor. Only the public-facing rendering moves to Next.js, and publishing triggers a rebuild of the affected pages.",
      },
      {
        question: "What about WooCommerce?",
        answer:
          "A headless WooCommerce storefront is possible, though for serious ecommerce we would usually discuss whether Shopify headless is a better foundation. That conversation happens during the assessment.",
      },
      {
        question: "How much faster will it be?",
        answer:
          "Two to four times faster on LCP is typical for a plugin-heavy WordPress site, largely from static generation and removing plugin JavaScript. We measure your specific baseline first rather than promising a number.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["nextjs-development", "website-redesign-services", "headless-cms-development"],
    readMore: [
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
      { label: "SSR, SSG or ISR", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "headless-cms-development",
    group: "services",
    title: "Headless CMS development and integration",
    seoTitle: "Headless CMS Development & Integration | ROVQIX",
    description:
      "Headless CMS implementation with Next.js — content modelling, editor experience, preview, on-demand revalidation and a publishing workflow your team will actually use.",
    excerpt:
      "A content model your editors understand and a preview that works, which is where most CMS projects fail.",
    eyebrow: "Headless CMS",
    primaryKeyword: "headless cms development",
    secondaryKeywords: [
      "headless cms integration services",
      "sanity contentful implementation",
      "nextjs cms development",
      "content modelling service",
    ],
    answer:
      "ROVQIX implements headless CMS platforms with Next.js — content modelling, editor experience, live preview, on-demand revalidation and role-based publishing — so marketing teams can ship pages without a developer and without breaking the design system.",
    intro:
      "Every failed CMS project we have inherited failed the same way: a content model that mirrors page layouts instead of content types, and a preview that never quite worked.",
    proof: [
      { metric: "Modelled", label: "Content, not layouts" },
      { metric: "Live preview", label: "Working, not promised" },
      { metric: "On-demand", label: "Publish and it's live" },
      { metric: "Guardrails", label: "Editors can't break design" },
    ],
    deliverables: [
      {
        title: "Content modelling",
        description:
          "Types modelled on what the content is, not where it currently sits — so a redesign does not require remodelling.",
        icon: "Blocks",
      },
      {
        title: "Editor experience",
        description:
          "Sensible field names, helpful descriptions, validation and a structure editors can navigate without training.",
        icon: "PenTool",
      },
      {
        title: "Live preview",
        description:
          "Draft content viewable exactly as it will publish, including on shared links for stakeholder review.",
        icon: "Eye",
      },
      {
        title: "On-demand revalidation",
        description:
          "Publishing triggers a rebuild of just the affected pages, so content is live in seconds without per-request rendering.",
        icon: "RefreshCw",
      },
      {
        title: "Design guardrails",
        description:
          "Composable sections from your design system, so editors get flexibility without the ability to produce something broken.",
        icon: "Palette",
      },
      {
        title: "Roles and workflow",
        description:
          "Draft, review and publish states with permissions matching how your team actually signs content off.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "How should content be modelled?",
        answer:
          "Around what the content is, not around how one page currently displays it.",
        body: [
          {
            type: "table",
            head: ["Layout-shaped model (fragile)", "Content-shaped model (durable)"],
            rows: [
              ["homepageHeroTitle", "Page → title"],
              ["aboutPageParagraph2", "Page → body (rich text)"],
              ["footerColumn3Link2", "Navigation → links[]"],
              ["teamGridPerson1Name", "Person → name, role, bio"],
              ["pricingBoxTwoFeatures", "Plan → features[]"],
            ],
          },
          {
            type: "callout",
            title: "The test for a good model",
            text: "Could you redesign the site without changing the content model? If renaming a section means renaming fields, the model describes a layout and will fight you at every redesign.",
          },
        ],
      },
      {
        heading: "Which CMS should you choose?",
        body: [
          {
            type: "table",
            head: ["Platform", "Strong for", "Trade-off"],
            rows: [
              ["Sanity", "Flexible modelling, real-time editing", "Configuration is code"],
              ["Contentful", "Enterprise workflow and governance", "Cost at scale"],
              ["Payload", "Self-hosted, owns its database", "You run the infrastructure"],
              ["Storyblok", "Visual editing for marketers", "Model can drift toward layouts"],
              ["Headless WordPress", "Teams already trained on it", "Still maintaining WordPress"],
              ["Git-based MDX", "Developer-authored content", "Not for non-technical editors"],
            ],
          },
          {
            type: "p",
            text: "We pick based on who edits, how often, and whether governance or flexibility matters more. For a small marketing team publishing weekly, the differences matter far less than the quality of the model.",
          },
        ],
      },
      {
        heading: "What about performance and caching?",
        body: [
          {
            type: "list",
            items: [
              "Pages are statically generated, so the CMS is not on the critical path for visitors.",
              "Publishing calls a revalidation webhook that rebuilds only the affected routes.",
              "Draft mode renders live for editors without affecting the cached public version.",
              "Media served through an image pipeline with modern formats and correct sizing.",
              "A fallback so a CMS outage cannot take your site down — the last good build keeps serving.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "CMS integration",
        range: "$3,000 – $7,000",
        timeline: "2–4 weeks",
        bestFor: "Adding a CMS to an existing Next.js site",
        includes: [
          "Content modelling",
          "CMS setup and configuration",
          "Preview and revalidation",
          "Editor documentation",
        ],
      },
      {
        name: "Site plus CMS",
        range: "$8,000 – $22,000",
        timeline: "6–10 weeks",
        bestFor: "New site with full editing capability",
        includes: [
          "Design and Next.js build",
          "Full content model and CMS setup",
          "Composable page sections",
          "Roles, workflow and training",
          "Migration of existing content",
        ],
        featured: true,
      },
      {
        name: "CMS rescue",
        range: "$2,500 – $6,000",
        timeline: "2–4 weeks",
        bestFor: "An implementation your team refuses to use",
        includes: [
          "Model and workflow review",
          "Remodelling and migration",
          "Preview and publishing fixes",
          "Editor training",
        ],
      },
    ],
    faqs: [
      {
        question: "Which headless CMS do you recommend?",
        answer:
          "Sanity for most marketing sites needing flexibility, Payload when self-hosting and data ownership matter, Contentful for larger organisations with governance requirements. The right answer depends on your team, not on a ranking.",
      },
      {
        question: "Can editors create new pages themselves?",
        answer:
          "Yes, by composing sections from your design system. They get real flexibility within constraints that keep the result on-brand and accessible.",
      },
      {
        question: "How fast does published content go live?",
        answer:
          "Seconds. Publishing triggers on-demand revalidation of the affected pages rather than a full site rebuild.",
      },
      {
        question: "Can you migrate content from our current CMS?",
        answer:
          "Yes — WordPress, Drupal, Webflow, Ghost, or a database export. Migration includes field mapping, media transfer and verification against the source.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["nextjs-development", "wordpress-to-nextjs-migration", "website-development"],
    readMore: [
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "SSR, SSG or ISR", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "devops-and-cloud-services",
    group: "services",
    title: "DevOps and cloud infrastructure services",
    seoTitle: "DevOps & Cloud Infrastructure Services | ROVQIX",
    description:
      "DevOps engineering — CI/CD pipelines, infrastructure as code, containers, monitoring, cost optimisation and deployments your team can roll back with confidence.",
    excerpt:
      "Deployments that are boring, infrastructure that is reproducible, and a cloud bill you understand.",
    eyebrow: "DevOps & cloud",
    primaryKeyword: "devops services",
    secondaryKeywords: [
      "cloud infrastructure services",
      "ci cd pipeline setup",
      "infrastructure as code consulting",
      "aws devops company",
    ],
    answer:
      "ROVQIX provides DevOps engineering for web applications: CI/CD pipelines, infrastructure as code with Terraform, containerised deployments, monitoring and alerting, and cloud cost optimisation — on AWS, Google Cloud or Vercel.",
    intro:
      "Deployment should be the least interesting part of your week. When it is not, it is usually because environments are hand-configured and nobody trusts the rollback path.",
    proof: [
      { metric: "IaC", label: "Reproducible environments" },
      { metric: "< 10 min", label: "Pipeline target" },
      { metric: "Tested", label: "Rollback path" },
      { metric: "20–40%", label: "Typical cost reduction" },
    ],
    deliverables: [
      {
        title: "CI/CD pipelines",
        description:
          "Type checks, lint, tests, budgets and preview deployments on every pull request, finishing fast enough that people wait for it.",
        icon: "GitBranch",
      },
      {
        title: "Infrastructure as code",
        description:
          "Terraform definitions so environments are reproducible, reviewable and never configured by hand in a console.",
        icon: "Code2",
      },
      {
        title: "Containers",
        description:
          "Docker images built small and reproducibly, deployed to your platform of choice with sensible health checks.",
        icon: "Blocks",
      },
      {
        title: "Monitoring and alerting",
        description:
          "Logs, metrics, traces and uptime checks with alerts that are actionable — anything else becomes noise people ignore.",
        icon: "Activity",
      },
      {
        title: "Secrets management",
        description:
          "Secrets in a manager, injected at runtime, rotated on a schedule, never committed and never baked into images.",
        icon: "ShieldCheck",
      },
      {
        title: "Cost optimisation",
        description:
          "Right-sizing, storage lifecycle, egress review and reserved capacity where usage is predictable.",
        icon: "Receipt",
      },
    ],
    sections: [
      {
        heading: "What does a good pipeline look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Fast: under ten minutes, or people stop waiting and start merging blind.",
              "Reliable: a red build means something is broken, not that the pipeline is flaky again.",
              "Complete: type checks, lint, tests, security scanning and performance budgets.",
              "Isolated: every pull request gets a preview environment reviewers can click through.",
              "Reversible: one command to roll back, tested regularly rather than assumed.",
              "Observable: when a deploy fails you can see why without asking the person who set it up.",
            ],
          },
          {
            type: "callout",
            title: "Flaky tests are a pipeline problem",
            text: "One test that fails ten percent of the time teaches an entire team to re-run rather than investigate. Fixing or quarantining flaky tests does more for delivery speed than most infrastructure work.",
          },
        ],
      },
      {
        heading: "Where does cloud spend actually go?",
        body: [
          {
            type: "table",
            head: ["Cost centre", "Common waste", "Typical saving"],
            rows: [
              ["Compute", "Oversized instances, idle staging", "20–40%"],
              ["Storage", "No lifecycle rules, old snapshots", "30–60%"],
              ["Data transfer", "Cross-region chatter, no CDN", "Varies, often large"],
              ["Databases", "Provisioned for a peak that never comes", "20–50%"],
              ["Logging", "Everything retained at full verbosity", "40–70%"],
              ["Unused resources", "Load balancers and IPs nobody owns", "Immediate"],
            ],
          },
          {
            type: "p",
            text: "Most savings come from three or four decisions, not from a hundred micro-optimisations. We start with the bill, find the concentration, and fix that.",
          },
        ],
      },
      {
        heading: "Vercel or your own cloud?",
        body: [
          {
            type: "p",
            text: "Vercel is the fastest path for Next.js and usually the right default — the operational burden it removes is worth real money at small and medium scale. Self-hosting becomes worthwhile when bandwidth or compute costs cross a threshold, when compliance requires specific regions or controls, or when you already run a platform team.",
          },
          {
            type: "p",
            text: "We will model both against your actual traffic rather than asserting one is better. The crossover point varies enormously by workload.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Infrastructure audit",
        range: "$2,000 – $5,000",
        timeline: "1–2 weeks",
        bestFor: "Cost, reliability or security concerns",
        includes: [
          "Architecture and pipeline review",
          "Cost analysis with savings plan",
          "Security and access review",
          "Prioritised recommendations",
        ],
      },
      {
        name: "Platform setup",
        range: "$5,000 – $20,000",
        timeline: "3–8 weeks",
        bestFor: "Getting deployment and infrastructure right",
        includes: [
          "CI/CD pipeline implementation",
          "Infrastructure as code",
          "Monitoring, logging and alerting",
          "Secrets management",
          "Runbooks and team training",
        ],
        featured: true,
      },
      {
        name: "DevOps retainer",
        range: "from $2,000 / month",
        timeline: "Ongoing",
        bestFor: "Teams without a platform engineer",
        includes: [
          "Pipeline and infrastructure maintenance",
          "Monitoring and incident support",
          "Security patching",
          "Monthly cost review",
        ],
      },
    ],
    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer:
          "AWS for breadth and enterprise requirements, Google Cloud for data and ML workloads, Vercel for Next.js applications where operational simplicity matters most. We work with what you already have unless there is a strong reason to move.",
      },
      {
        question: "Do we need Kubernetes?",
        answer:
          "Almost certainly not, unless you have multiple teams deploying many services and someone to operate the cluster. Managed container services handle most web applications with a fraction of the complexity.",
      },
      {
        question: "Can you help with an existing setup we did not build?",
        answer:
          "Yes — that is most of our infrastructure work. We start with an audit so you get an honest assessment before either side commits to changes.",
      },
      {
        question: "Do you provide on-call support?",
        answer:
          "Within agreed hours on a retainer. For 24/7 coverage we build the monitoring and runbooks so your team can hold the pager confidently, rather than pretending to be your operations department.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["hire-devops-engineers", "custom-software-development", "website-maintenance"],
    readMore: [
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Infrastructure as code basics", href: "/blog/infrastructure-as-code-basics" },
      { label: "Cloud cost optimization", href: "/blog/cloud-cost-optimization" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "ai-integration-services",
    group: "services",
    title: "AI integration services for web products",
    seoTitle: "AI Integration Services for Web Apps | ROVQIX",
    description:
      "Integrate LLMs into your product properly — RAG over your own data, streaming interfaces, evaluation, cost control and guardrails, not a chatbot bolted to a corner.",
    excerpt:
      "LLM features that survive contact with real users: evaluated, cost-controlled and honest about uncertainty.",
    eyebrow: "AI integration",
    primaryKeyword: "ai integration services",
    secondaryKeywords: [
      "llm integration development",
      "rag implementation services",
      "ai feature development company",
      "openai claude api integration",
    ],
    answer:
      "ROVQIX integrates large language models into existing web products: retrieval over your own data, streaming interfaces, prompt and output evaluation, cost controls, caching and guardrails — built as a product feature with measurable quality rather than a demo.",
    intro:
      "The demo takes an afternoon. The work is everything after: what happens when the model is wrong, how you know quality changed, and what it costs at a thousand users.",
    proof: [
      { metric: "Evaluated", label: "Quality measured, not vibed" },
      { metric: "Streamed", label: "Responses feel instant" },
      { metric: "Budgeted", label: "Per-user cost caps" },
      { metric: "Cited", label: "Answers link their sources" },
    ],
    deliverables: [
      {
        title: "Retrieval over your data",
        description:
          "Chunking, embeddings and hybrid search so answers come from your documents rather than the model's imagination.",
        icon: "Database",
      },
      {
        title: "Streaming interfaces",
        description:
          "Token streaming with proper loading, cancellation and error states, so a slow model still feels responsive.",
        icon: "Zap",
      },
      {
        title: "Evaluation harness",
        description:
          "A test set with graded outputs, run in CI, so a prompt or model change cannot silently degrade quality.",
        icon: "FlaskConical",
      },
      {
        title: "Cost control",
        description:
          "Caching, model routing, token budgets and per-user limits — with a dashboard showing spend before the invoice does.",
        icon: "Receipt",
      },
      {
        title: "Guardrails",
        description:
          "Input validation, output constraints, refusal handling and human escalation paths for anything consequential.",
        icon: "ShieldCheck",
      },
      {
        title: "Honest interfaces",
        description:
          "Citations, confidence signals and clear labelling, so users know what is generated and can check it.",
        icon: "Eye",
      },
    ],
    sections: [
      {
        heading: "What does RAG actually involve?",
        answer:
          "Retrieval-augmented generation retrieves relevant passages from your own content and gives them to the model as context, so answers are grounded in your data.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ingestion: getting your documents into a pipeline, including the awkward PDFs.",
              "Chunking: splitting on meaning rather than character count, which is where most implementations lose quality.",
              "Embedding and indexing, usually with a hybrid of vector and keyword search — pure vector search misses exact terms.",
              "Retrieval and reranking, so the model sees the best few passages rather than the first ten.",
              "Generation with citations, so users can verify the answer against the source.",
              "Evaluation against a fixed question set, run whenever anything in the chain changes.",
            ],
          },
          {
            type: "callout",
            title: "Retrieval quality is the whole game",
            text: "When a RAG system gives bad answers, the model is usually not at fault — it was handed irrelevant context. We spend most of the engineering effort on chunking and retrieval, not on prompt wording.",
          },
        ],
      },
      {
        heading: "How do you control cost?",
        body: [
          {
            type: "table",
            head: ["Lever", "Effect"],
            rows: [
              ["Cache identical and near-identical requests", "Large, immediate"],
              ["Route simple requests to a smaller model", "Substantial"],
              ["Trim retrieved context to what is needed", "Direct token saving"],
              ["Per-user and per-org rate limits", "Caps worst-case spend"],
              ["Prompt caching for stable system prompts", "Meaningful at volume"],
              ["Stream and allow cancellation", "Stops paying for unread output"],
            ],
          },
          {
            type: "p",
            text: "We instrument cost per request and per user from day one. Teams that add this later usually discover a small number of users generating most of the spend.",
          },
        ],
      },
      {
        heading: "What should you not use an LLM for?",
        body: [
          {
            type: "list",
            items: [
              "Anything requiring exact arithmetic or deterministic rules — use code and let the model call it.",
              "Decisions with legal or financial consequences without human review in the loop.",
              "Tasks a database query answers correctly, cheaply and instantly.",
              "Anything where a confidently wrong answer causes real harm and cannot be verified by the user.",
              "Features added because the roadmap wanted AI rather than because a user has the problem.",
            ],
          },
          {
            type: "p",
            text: "We will tell you when the honest answer is that a form, a filter or a query serves your users better. That conversation happens during scoping, not after the build.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Feasibility spike",
        range: "$2,500 – $5,000",
        timeline: "1–2 weeks",
        bestFor: "Testing whether the idea works at all",
        includes: [
          "Prototype against your real data",
          "Quality assessment on sample questions",
          "Cost projection at your volume",
          "Recommendation and build estimate",
        ],
      },
      {
        name: "Feature build",
        range: "$8,000 – $30,000",
        timeline: "5–12 weeks",
        bestFor: "A production AI feature in your product",
        includes: [
          "Retrieval pipeline and indexing",
          "Streaming interface with full states",
          "Evaluation harness in CI",
          "Cost controls and monitoring",
          "Guardrails and escalation paths",
        ],
        featured: true,
      },
      {
        name: "AI retainer",
        range: "from $2,500 / month",
        timeline: "Ongoing",
        bestFor: "Features needing continuous tuning",
        includes: [
          "Quality monitoring and improvement",
          "Model migration as options change",
          "Cost optimisation",
          "New capability development",
        ],
      },
    ],
    faqs: [
      {
        question: "Which model providers do you work with?",
        answer:
          "Anthropic's Claude, OpenAI and open models depending on the task, cost profile and any data residency constraints. We build behind an abstraction so switching providers does not mean rewriting the feature.",
      },
      {
        question: "Will our data be used to train models?",
        answer:
          "Not on standard business API tiers from the major providers, which do not train on API inputs by default. We configure retention settings explicitly and document exactly what leaves your infrastructure.",
      },
      {
        question: "How do you measure whether it is any good?",
        answer:
          "A fixed evaluation set of representative questions with graded expected outputs, scored automatically and reviewed by a human on a sample. Without that, prompt changes are guesswork.",
      },
      {
        question: "Can you run models on our own infrastructure?",
        answer:
          "Yes, where compliance requires it. We will be honest that self-hosted open models typically trade some quality for control, and help you judge whether that trade is worth it for your use case.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["saas-development", "custom-software-development", "hire-ai-developers"],
    readMore: [
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "API rate limiting strategies", href: "/blog/api-rate-limiting-strategies" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "accessibility-remediation-services",
    group: "services",
    title: "Web accessibility remediation services",
    seoTitle: "Web Accessibility Remediation | WCAG 2.2 AA | ROVQIX",
    description:
      "WCAG 2.2 AA accessibility audits and remediation — real keyboard and screen reader testing, fixes implemented in code, and documentation for procurement or legal review.",
    excerpt:
      "Audits done with a keyboard and a screen reader, and fixes shipped rather than listed.",
    eyebrow: "Accessibility",
    primaryKeyword: "accessibility remediation services",
    secondaryKeywords: [
      "wcag 2.2 aa compliance",
      "ada website compliance service",
      "web accessibility audit",
      "screen reader testing service",
    ],
    answer:
      "ROVQIX audits websites and applications against WCAG 2.2 AA using automated tooling plus manual keyboard and screen reader testing, then implements the fixes in your codebase and documents the result for procurement, legal or VPAT purposes.",
    intro:
      "Automated scanners catch roughly a third of accessibility issues. The rest — focus order, meaningful labels, sensible announcements — need someone to actually operate the site without a mouse.",
    proof: [
      { metric: "WCAG 2.2 AA", label: "Audit standard" },
      { metric: "Manual", label: "Keyboard + screen reader" },
      { metric: "Implemented", label: "Fixes, not a list" },
      { metric: "Documented", label: "For procurement" },
    ],
    deliverables: [
      {
        title: "Automated scanning",
        description:
          "Full-site scanning to catch the mechanical issues quickly — contrast, missing labels, invalid ARIA.",
        icon: "Search",
      },
      {
        title: "Manual testing",
        description:
          "Every primary flow operated by keyboard alone and with a screen reader, which is where the real issues live.",
        icon: "Accessibility",
      },
      {
        title: "Prioritised findings",
        description:
          "Issues ranked by user impact and legal exposure, each with the specific code change required.",
        icon: "ClipboardList",
      },
      {
        title: "Implementation",
        description:
          "Fixes written and merged in your codebase, with regression tests where the pattern is likely to recur.",
        icon: "Code2",
      },
      {
        title: "Component-level fixes",
        description:
          "Repairing shared components fixes hundreds of pages at once — usually the highest-leverage work.",
        icon: "Blocks",
      },
      {
        title: "Documentation",
        description:
          "A conformance report you can give procurement, plus guidance so new work does not reintroduce the same issues.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What do automated tools miss?",
        body: [
          {
            type: "table",
            head: ["Automated tools catch", "Only manual testing catches"],
            rows: [
              ["Missing alt attributes", "Whether alt text is meaningful"],
              ["Colour contrast failures", "Information conveyed by colour alone"],
              ["Missing form labels", "Whether labels describe the actual input"],
              ["Invalid ARIA usage", "Whether ARIA improves or breaks the experience"],
              ["Missing landmarks", "Whether focus order matches visual order"],
              ["Empty links and buttons", "Whether dynamic changes are announced"],
              ["Missing lang attribute", "Whether error recovery is possible"],
            ],
          },
          {
            type: "callout",
            title: "A perfect scanner score proves very little",
            text: "We regularly audit sites that pass automated scanning completely and are unusable with a keyboard — modal dialogs that trap focus incorrectly, custom dropdowns that cannot be opened, forms that announce nothing when validation fails.",
          },
        ],
      },
      {
        heading: "What does remediation cost and how long does it take?",
        body: [
          {
            type: "table",
            head: ["Scope", "Audit", "Remediation"],
            rows: [
              ["Marketing site, under 20 pages", "3–5 days", "1–2 weeks"],
              ["Larger site with templates", "1–2 weeks", "2–4 weeks"],
              ["Web application", "2–3 weeks", "4–10 weeks"],
              ["Design system", "1 week", "2–4 weeks"],
            ],
          },
          {
            type: "p",
            text: "Remediating shared components first is what makes application work tractable — one fixed date picker resolves the same issue on every page that uses it.",
          },
        ],
      },
      {
        heading: "How do you stop issues coming back?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Fix the shared components rather than individual pages.",
              "Add automated accessibility checks to CI so mechanical regressions fail the build.",
              "Write component-level tests for keyboard behaviour and focus management.",
              "Give the team a short, practical guide covering the patterns that actually caused problems.",
              "Review new designs for accessibility before they are built, which is far cheaper than after.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Accessibility audit",
        range: "$1,800 – $6,000",
        timeline: "1–3 weeks",
        bestFor: "Knowing where you stand",
        includes: [
          "Automated and manual testing",
          "Keyboard and screen reader review",
          "Prioritised findings with code guidance",
          "Written report and walkthrough",
        ],
      },
      {
        name: "Audit and remediation",
        range: "$5,000 – $20,000",
        timeline: "4–10 weeks",
        bestFor: "Actually reaching WCAG 2.2 AA",
        includes: [
          "Everything in the audit",
          "Implementation in your codebase",
          "Component-level fixes",
          "CI accessibility checks",
          "Conformance documentation",
        ],
        featured: true,
      },
      {
        name: "Ongoing support",
        range: "from $900 / month",
        timeline: "Ongoing",
        bestFor: "Teams shipping continuously",
        includes: [
          "Accessibility review of new work",
          "Design review before build",
          "Regression monitoring",
          "Team training sessions",
        ],
      },
    ],
    faqs: [
      {
        question: "Will this make us ADA compliant?",
        answer:
          "The ADA does not specify a technical standard; courts and settlements consistently reference WCAG. Meeting WCAG 2.2 AA substantially reduces exposure, but compliance is a legal determination and we are not lawyers. We will document exactly what was tested and fixed.",
      },
      {
        question: "Do accessibility overlay widgets work?",
        answer:
          "No, and they can make things worse. They have been the subject of numerous lawsuits and are widely rejected by disabled users. Fix the underlying code instead — there is no shortcut here.",
      },
      {
        question: "Can you provide a VPAT?",
        answer:
          "We provide the detailed conformance documentation a VPAT is built from. For a formal signed VPAT, an independent accessibility firm is the appropriate route, and we will remediate against their findings.",
      },
      {
        question: "How much of the site needs testing?",
        answer:
          "Every unique template and every primary user flow, rather than every page. On a template-driven site that is usually 15 to 30 pages representing the whole thing.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["ui-ux-design", "website-redesign-services", "healthcare"],
    readMore: [
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Semantic HTML matters", href: "/blog/semantic-html-seo" },
      { label: "Error boundaries and loading states", href: "/blog/react-error-boundaries-and-loading-states" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "shopify-development-services",
    group: "services",
    title: "Shopify development services",
    seoTitle: "Shopify Development Services & Agency | ROVQIX",
    description:
      "Shopify development — custom themes, app integrations, checkout extensions and headless Hydrogen or Next.js storefronts, built for speed and conversion.",
    excerpt:
      "Custom Shopify work from theme surgery through to a fully headless storefront.",
    eyebrow: "Shopify",
    primaryKeyword: "shopify development services",
    secondaryKeywords: [
      "shopify development agency",
      "custom shopify theme development",
      "headless shopify storefront",
      "shopify plus development",
    ],
    answer:
      "ROVQIX builds custom Shopify themes, app integrations and checkout extensions, and headless storefronts on Next.js or Hydrogen using the Storefront API — chosen based on whether platform speed or design freedom matters more for your brand.",
    intro:
      "Shopify handles catalogue, orders, payments and checkout better than almost anything you could build. The question is only how much of the presentation layer you want to control.",
    proof: [
      { metric: "3 paths", label: "Theme, hybrid, headless" },
      { metric: "< 2.5s", label: "LCP target on PDPs" },
      { metric: "App audited", label: "Script cost measured" },
      { metric: "Checkout", label: "Extensions supported" },
    ],
    deliverables: [
      {
        title: "Custom theme development",
        description:
          "Liquid themes built from your designs, structured so merchandisers can edit sections without breaking anything.",
        icon: "PenTool",
      },
      {
        title: "Headless storefronts",
        description:
          "Next.js or Hydrogen on the Storefront API, for brands where design and speed justify the extra build.",
        icon: "ShoppingBag",
      },
      {
        title: "App integration and audit",
        description:
          "Integrating what earns its place and removing what silently costs you conversion in page weight.",
        icon: "Plug",
      },
      {
        title: "Checkout extensions",
        description:
          "Upsells, custom fields, delivery options and validation using supported checkout extensibility.",
        icon: "CreditCard",
      },
      {
        title: "Performance work",
        description:
          "Image, script and theme optimisation targeting Core Web Vitals on collection and product pages.",
        icon: "Gauge",
      },
      {
        title: "Migration",
        description:
          "Moving to Shopify from another platform, with full URL mapping, data migration and a monitored launch.",
        icon: "GitBranch",
      },
    ],
    sections: [
      {
        heading: "Theme, hybrid or headless?",
        body: [
          {
            type: "table",
            head: ["", "Custom theme", "Headless"],
            rows: [
              ["Build time", "3–6 weeks", "8–14 weeks"],
              ["Cost", "$4,000 – $12,000", "$12,000 – $35,000"],
              ["Design freedom", "Good", "Unlimited"],
              ["Performance ceiling", "Good with discipline", "Excellent"],
              ["App compatibility", "Full", "Selective, some need rework"],
              ["Merchandiser editing", "Native sections", "Requires deliberate design"],
              ["Best for", "Most stores", "Brands where the site is the product"],
            ],
          },
          {
            type: "callout",
            title: "Most stores should not go headless",
            text: "A well-built custom theme with disciplined app usage gets you most of the performance and most of the design freedom for a third of the cost. We recommend headless when there is a concrete reason, not by default.",
          },
        ],
      },
      {
        heading: "Why are Shopify stores often slow?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Apps. Each one injects scripts, and a store with twelve apps is loading twelve third-party bundles on every page.",
              "Theme bloat: a purchased theme supporting every possible layout ships code for all of them.",
              "Images uploaded at full resolution and resized in the browser rather than at the CDN.",
              "Multiple analytics and pixel implementations, frequently duplicated across app and theme.",
              "Review, chat and popup widgets, which are typically the heaviest single additions.",
            ],
          },
          {
            type: "p",
            text: "Our app audit measures the actual millisecond cost of each one. The conversation with the client is then a business decision with real numbers attached rather than a debate about whether apps are slow.",
          },
        ],
      },
      {
        heading: "What can and cannot be customised?",
        body: [
          {
            type: "list",
            items: [
              "Product, collection, cart and content pages: fully customisable in theme or headless.",
              "Checkout: customisable through supported extensions on Plus; more limited on standard plans.",
              "Order processing and fulfilment: extensible through Shopify Functions and apps.",
              "Payment processing: handled by Shopify — which keeps PCI scope off your infrastructure.",
              "Admin: extensible with custom apps for your operations team.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Theme build",
        range: "$4,000 – $12,000",
        timeline: "3–6 weeks",
        bestFor: "Most stores wanting a custom look",
        includes: [
          "Custom design and Liquid build",
          "Editable sections for merchandisers",
          "Performance optimisation",
          "App integration and audit",
        ],
      },
      {
        name: "Headless storefront",
        range: "$12,000 – $35,000",
        timeline: "8–14 weeks",
        bestFor: "Brands where the storefront differentiates",
        includes: [
          "Custom design across all templates",
          "Next.js or Hydrogen build",
          "Storefront API integration",
          "Search, filtering and merchandising",
          "Migration and monitored launch",
        ],
        featured: true,
      },
      {
        name: "Optimisation & support",
        range: "from $1,200 / month",
        timeline: "Ongoing",
        bestFor: "Stores iterating continuously",
        includes: [
          "Campaign pages and A/B tests",
          "Performance monitoring and fixes",
          "App and theme maintenance",
          "Peak-period readiness",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need Shopify Plus?",
        answer:
          "Only if you need checkout customisation, higher API limits, multiple storefronts or B2B features. Most stores do not, and we will say so rather than encouraging an upgrade you will not use.",
      },
      {
        question: "Can you reduce our app dependency?",
        answer:
          "Often substantially. Many app functions — badges, bundles, simple upsells, basic reviews display — can be built into the theme without the script overhead. We audit each one for cost versus value.",
      },
      {
        question: "Will headless break our apps?",
        answer:
          "Some, yes. Apps that inject scripts into a Liquid theme do not work in a headless storefront. The audit identifies which apps you depend on and what replaces them before you commit.",
      },
      {
        question: "Can you migrate us to Shopify from another platform?",
        answer:
          "Yes — products, customers, orders and content, with a complete URL map and 301 redirects so search rankings transfer.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["ecommerce-development", "ecommerce-brands", "website-speed-optimization"],
    readMore: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "database-design-services",
    group: "services",
    title: "Database design and optimisation services",
    seoTitle: "Database Design & Optimization Services | ROVQIX",
    description:
      "PostgreSQL schema design, indexing, query optimisation and safe migrations — for applications that have outgrown the schema they started with.",
    excerpt:
      "Schema design, indexing and query work for applications that got slower as they got successful.",
    eyebrow: "Databases",
    primaryKeyword: "database design services",
    secondaryKeywords: [
      "postgresql consulting services",
      "database performance optimization",
      "database migration services",
      "schema design consultant",
    ],
    answer:
      "ROVQIX provides PostgreSQL schema design, indexing and query optimisation, and zero-downtime migrations — for teams whose application has slowed down as data grew, or whose original schema no longer fits what the product became.",
    intro:
      "Almost every slow application we audit has the same three causes: a missing index, an N+1 query pattern, and a schema that made sense for the first version of the product.",
    proof: [
      { metric: "Measured", label: "pg_stat_statements first" },
      { metric: "Zero-downtime", label: "Expand and contract" },
      { metric: "Indexed", label: "For real query shapes" },
      { metric: "Reversible", label: "Every migration" },
    ],
    deliverables: [
      {
        title: "Query analysis",
        description:
          "Finding what is actually slow using real statistics and execution plans, rather than the query someone suspects.",
        icon: "Search",
      },
      {
        title: "Indexing strategy",
        description:
          "Indexes matched to real query shapes, with unused and duplicate indexes removed — they cost write performance.",
        icon: "Layers",
      },
      {
        title: "Schema design",
        description:
          "Normalisation where it protects correctness, denormalisation where it is measurably needed, constraints throughout.",
        icon: "Database",
      },
      {
        title: "Safe migrations",
        description:
          "Expand-and-contract migrations that run without downtime and without locking a large table for minutes.",
        icon: "GitBranch",
      },
      {
        title: "Connection management",
        description:
          "Pooling configured correctly, which is the usual cause of mysterious failures under load in serverless setups.",
        icon: "Plug",
      },
      {
        title: "Backup and recovery",
        description:
          "Backups with point-in-time recovery and — critically — an actual tested restore, not an assumed one.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "Why does the application slow down as it grows?",
        body: [
          {
            type: "table",
            head: ["Cause", "Symptom", "Typical fix"],
            rows: [
              ["Missing index", "One endpoint slow, worsening over time", "Add a matched index"],
              ["N+1 queries", "Slow lists, fine detail pages", "Eager loading or a join"],
              ["Sequential scans", "Whole app slows as rows grow", "Index, or rewrite the query"],
              ["Connection exhaustion", "Intermittent failures under load", "Pooling configuration"],
              ["Lock contention", "Timeouts during writes", "Shorter transactions"],
              ["Unbounded result sets", "Memory spikes, timeouts", "Pagination with limits"],
            ],
          },
          {
            type: "callout",
            title: "Measure before you optimise",
            text: "pg_stat_statements will tell you in five minutes which queries consume the most total time. It is almost never the query the team assumed, and optimising the wrong query is a common way to spend a sprint achieving nothing.",
          },
        ],
      },
      {
        heading: "How do you run a migration without downtime?",
        answer:
          "Expand and contract: add the new structure, write to both, backfill, switch reads, then remove the old structure — each step independently deployable.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Add the new column or table as nullable, with no default that rewrites the table.",
              "Deploy code that writes to both old and new.",
              "Backfill existing rows in batches, monitoring load.",
              "Deploy code that reads from the new structure.",
              "Verify for a period long enough to catch anything missed.",
              "Stop writing to the old structure, then drop it in a later release.",
            ],
          },
          {
            type: "p",
            text: "Each step is reversible on its own. A rename done in a single migration is not — and on a large table it can lock writes for long enough to constitute an outage.",
          },
        ],
      },
      {
        heading: "SQL or NoSQL?",
        body: [
          {
            type: "p",
            text: "PostgreSQL is the right default for the large majority of web applications. It handles relational data, JSON documents, full-text search and geospatial queries competently, with transactions and constraints protecting correctness.",
          },
          {
            type: "list",
            items: [
              "Choose PostgreSQL when data is related, correctness matters, and query patterns will change.",
              "Consider a document store when documents are genuinely independent and the schema varies wildly per record.",
              "Add Redis for caching, sessions, rate limiting and queues — alongside PostgreSQL, not instead of it.",
              "Add a dedicated search index when full-text needs outgrow what PostgreSQL does comfortably.",
              "Be sceptical of a rewrite justified by scale you do not have. PostgreSQL scales further than most teams need.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Performance audit",
        range: "$1,800 – $4,000",
        timeline: "1 week",
        bestFor: "An application that has become slow",
        includes: [
          "Query and index analysis",
          "Schema review",
          "Connection and configuration review",
          "Prioritised fixes with expected impact",
        ],
      },
      {
        name: "Optimisation project",
        range: "$4,000 – $15,000",
        timeline: "2–8 weeks",
        bestFor: "Implementing the fixes properly",
        includes: [
          "Index and query work",
          "Schema changes with safe migrations",
          "Application-side query fixes",
          "Monitoring and slow query alerting",
          "Before-and-after measurement",
        ],
        featured: true,
      },
      {
        name: "Schema design",
        range: "$2,500 – $7,000",
        timeline: "1–3 weeks",
        bestFor: "New products or a major redesign",
        includes: [
          "Data modelling workshops",
          "Schema with constraints and indexes",
          "Migration framework setup",
          "Documentation and team walkthrough",
        ],
      },
    ],
    faqs: [
      {
        question: "Which databases do you work with?",
        answer:
          "PostgreSQL primarily, plus MySQL, MongoDB and Redis. We will tell you honestly if your database needs a specialist we are not — Oracle and SQL Server work, for instance, is outside what we do.",
      },
      {
        question: "Can you help without access to production?",
        answer:
          "Partially. We can review schema, queries and code. But real optimisation needs real statistics — a read-only replica or an anonymised copy with representative data volume is usually enough.",
      },
      {
        question: "How much faster can queries get?",
        answer:
          "Adding a correct index to a query doing a sequential scan on a large table routinely produces improvements of two or three orders of magnitude. Others need query or schema changes for more modest gains. The audit gives you specifics.",
      },
      {
        question: "Do you help with database hosting decisions?",
        answer:
          "Yes — managed services versus self-hosted, instance sizing, replicas, backup strategy and cost. Managed PostgreSQL is the right answer for most teams, and we will say when it is not.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["hire-nodejs-developers", "custom-software-development", "devops-and-cloud-services"],
    readMore: [
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
      { label: "Database migrations safely", href: "/blog/database-migrations-safely" },
      { label: "SQL vs NoSQL", href: "/blog/sql-vs-nosql" },
    ],
    publishedAt: "2026-08-13",
  },
];
