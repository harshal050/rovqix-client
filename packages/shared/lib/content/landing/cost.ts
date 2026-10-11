import type { LandingPage } from "./types";

/**
 * Cost pages answer "how much does X cost" directly, with real ranges and the
 * variables that move them. Every range here must match the pricing tiers on
 * the corresponding service page — a mismatch is worse than no number.
 */
export const costPages: LandingPage[] = [
  {
    slug: "website-development-cost",
    group: "cost",
    title: "How much does a website cost in 2026?",
    seoTitle: "How Much Does a Website Cost? (2026 Guide)",
    description:
      "Real website development costs by type and scope — what drives the price up, what you can safely cut, and what a $3,000 site gets you versus a $30,000 one.",
    excerpt:
      "Ranges by project type, the five variables that actually move the number, and where budgets get wasted.",
    eyebrow: "Cost guide",
    primaryKeyword: "website development cost",
    secondaryKeywords: [
      "how much does a website cost",
      "website design pricing",
      "business website cost",
      "custom website price",
    ],
    answer:
      "A custom business website costs $2,500 to $15,000 for most small and mid-sized US companies in 2026. A five-page marketing site sits at $2,500 to $6,000; a larger site with a CMS, blog and integrations runs $6,000 to $15,000; and web applications with custom functionality start around $15,000. Page count matters far less than the number of unique components and integrations.",
    intro:
      "Most cost guides give you a range so wide it is useless. Here are the actual numbers, what moves them, and how to tell whether a quote is reasonable.",
    proof: [
      { metric: "$2.5k–$15k", label: "Most business sites" },
      { metric: "Components", label: "The real cost driver" },
      { metric: "3–9 wks", label: "Typical timeline" },
      { metric: "Fixed", label: "Priced before work starts" },
    ],
    deliverables: [
      {
        title: "Design",
        description:
          "Usually 25–35% of the budget. Custom design per page costs more than a component system reused across pages.",
        icon: "PenTool",
      },
      {
        title: "Development",
        description:
          "Typically 40–50%. Driven by unique component count, responsive complexity and interaction work.",
        icon: "Code2",
      },
      {
        title: "Content",
        description:
          "Often forgotten. Writing 10 pages of real copy is $1,500–$4,000 if you are not writing it yourself.",
        icon: "FileText",
      },
      {
        title: "Integrations",
        description:
          "$300–$2,500 each depending on the API. CRM, payments, booking and ERP all differ wildly.",
        icon: "Plug",
      },
      {
        title: "CMS setup",
        description:
          "$1,500–$4,000 to model content properly and give your team editing without a developer.",
        icon: "Database",
      },
      {
        title: "Ongoing",
        description:
          "$350–$900 per month for maintenance. Hosting is usually $0–$50 for a site this size.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "What does a website cost by type?",
        body: [
          {
            type: "table",
            head: ["Type", "Cost", "Timeline", "What you get"],
            rows: [
              ["Landing page", "$900 – $2,000", "1–2 weeks", "One page, one goal, tracked"],
              ["Small business site", "$2,500 – $6,000", "3–5 weeks", "5–8 custom pages, forms"],
              ["Growth site", "$6,000 – $15,000", "6–9 weeks", "10–25 pages, CMS, blog, integrations"],
              ["Ecommerce store", "$4,000 – $35,000", "4–14 weeks", "Theme build through headless"],
              ["Web application", "$12,000 – $50,000", "6–16 weeks", "Auth, dashboards, custom logic"],
              ["SaaS MVP", "$15,000 – $45,000", "8–14 weeks", "Multi-tenant, billing, marketing site"],
            ],
          },
          {
            type: "p",
            text: "These are ranges for a competent custom build. A US agency will typically quote two to four times these figures for the same scope; a $500 marketplace gig will not deliver any of it.",
          },
        ],
      },
      {
        heading: "What actually drives the price?",
        answer:
          "Unique component count, integration complexity, content readiness, revision rounds and how many people must approve.",
        body: [
          {
            type: "table",
            head: ["Variable", "Cheap", "Expensive"],
            rows: [
              ["Page structure", "8 components reused across 20 pages", "Every page structurally unique"],
              ["Design source", "You supply finished designs", "Design from scratch with research"],
              ["Content", "Ready before build starts", "Written during, or late"],
              ["Integrations", "Standard forms, one CRM", "ERP, legacy systems, custom auth"],
              ["Animation", "Consistent, systemised", "Bespoke effect per section"],
              ["Approvals", "One decision-maker", "Committee with rounds of feedback"],
            ],
          },
          {
            type: "callout",
            title: "Page count is a poor proxy",
            text: "A twenty-page site built from eight repeated components costs less than a five-page site where every page is bespoke. Anyone quoting purely on page count is guessing.",
          },
        ],
      },
      {
        heading: "Where do budgets get wasted?",
        body: [
          {
            type: "list",
            items: [
              "Pages nobody visits. Check analytics before commissioning a rebuild of all forty.",
              "Custom design on utility pages — privacy, terms and 404 do not need bespoke layouts.",
              "Animation on pages with no traffic.",
              "A CMS for content that changes twice a year.",
              "Features requested because a competitor has them, with no evidence anyone uses them.",
              "Rebuilding rather than fixing, when the real problem is speed or messaging.",
            ],
          },
        ],
      },
      {
        heading: "How do you tell if a quote is reasonable?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Does it list every page and component, or describe an outcome? Vague scope means the price will move.",
              "Does it say what is excluded? Good quotes are explicit about the boundary.",
              "How many revision rounds, and what does an extra cost?",
              "Who writes the content, and what happens if it is late?",
              "What happens if their estimate is wrong — do you pay, or do they?",
              "Do you own the code and accounts at the end?",
            ],
          },
          {
            type: "p",
            text: "A quote that is dramatically lower than others is usually missing scope that will reappear as change requests once you are committed. Ask what happens when the estimate is wrong — the answer tells you most of what you need to know.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Marketing site",
        range: "$2,500 – $6,000",
        timeline: "3–5 weeks",
        bestFor: "Established businesses replacing a dated site",
        includes: [
          "5–8 custom-designed pages",
          "Responsive Next.js build",
          "Technical SEO and analytics",
          "Forms and integrations",
          "30 days post-launch support",
        ],
      },
      {
        name: "Growth site",
        range: "$6,000 – $15,000",
        timeline: "6–9 weeks",
        bestFor: "Sites that drive real pipeline",
        includes: [
          "10–25 pages with a component system",
          "Headless CMS",
          "Blog and landing page templates",
          "Conversion tracking",
          "90 days post-launch support",
        ],
        featured: true,
      },
      {
        name: "Platform",
        range: "$15,000+",
        timeline: "10+ weeks",
        bestFor: "Applications and multi-region sites",
        includes: [
          "Custom application functionality",
          "Authentication and dashboards",
          "Third-party integrations",
          "Ongoing retainer available",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do website quotes vary so much?",
        answer:
          "Because 'website' covers a five-page brochure and a multi-tenant application. Beyond that, location dominates: the same build quoted at $40,000 in New York is $12,000 from a remote studio. Compare scope line by line, not headline prices.",
      },
      {
        question: "Is a cheap website ever worth it?",
        answer:
          "A well-configured template on Squarespace or Shopify is genuinely fine for a business at an early stage, and costs a few hundred dollars. The mistake is paying $3,000 for a custom-looking site that is a template with the colours changed.",
      },
      {
        question: "What are the ongoing costs?",
        answer:
          "Hosting $0–$50/month for a marketing site, domain around $15/year, and maintenance $350–$900/month if you want someone patching, monitoring and making changes. A CMS may add $0–$100/month.",
      },
      {
        question: "Should we pay hourly or fixed price?",
        answer:
          "Fixed price for defined scope, which is most marketing sites. Hourly or retainer for genuinely exploratory work. Either is fine with a clear scope document; neither survives without one.",
      },
      {
        question: "How much should a small business budget?",
        answer:
          "For a US small business wanting a credible custom site: $3,000 to $8,000, plus $350–$600 a month for maintenance. Below that you are choosing a template, which is a legitimate option we will tell you about.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-development", "ecommerce-website-cost", "agency-vs-freelancer"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "Next.js vs React", href: "/blog/nextjs-vs-react-which-to-choose" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "ecommerce-website-cost",
    group: "cost",
    title: "How much does an ecommerce website cost?",
    seoTitle: "How Much Does an Ecommerce Website Cost?",
    description:
      "Ecommerce build costs from Shopify theme through custom headless storefront — plus the recurring platform, app and transaction fees most estimates leave out.",
    excerpt:
      "Build cost is the smaller number. Platform fees, apps and transaction costs are what you pay forever.",
    eyebrow: "Cost guide",
    primaryKeyword: "ecommerce website cost",
    secondaryKeywords: [
      "online store development cost",
      "shopify store cost",
      "headless commerce cost",
      "ecommerce website price",
    ],
    answer:
      "An ecommerce store costs $4,000 to $12,000 for a custom Shopify theme build and $12,000 to $35,000 for a headless storefront. Beyond the build, expect $500 to $3,000 per month in recurring platform fees, apps and transaction costs — which usually exceeds the build cost within the first two years.",
    intro:
      "Ecommerce quotes focus on the build. The recurring stack is the number that actually determines your margin, and it is rarely in the proposal.",
    proof: [
      { metric: "$4k–$35k", label: "Build range" },
      { metric: "$500–$3k", label: "Monthly recurring" },
      { metric: "2.4–2.9%", label: "Typical transaction fee" },
      { metric: "Apps", label: "The hidden line item" },
    ],
    deliverables: [
      {
        title: "Platform fee",
        description:
          "$39–$399/month for standard Shopify tiers; Plus starts around $2,300/month. Choose on features, not aspiration.",
        icon: "CreditCard",
      },
      {
        title: "Transaction costs",
        description:
          "Roughly 2.4–2.9% plus 30¢ per order, more for international cards. On $50k monthly revenue that is $1,200–$1,500.",
        icon: "Receipt",
      },
      {
        title: "Apps",
        description:
          "The line nobody budgets. Reviews, subscriptions, email, upsells and search commonly total $200–$800/month.",
        icon: "Plug",
      },
      {
        title: "Theme or build",
        description:
          "$0–$400 for a purchased theme, $4,000–$12,000 for a custom one, $12,000–$35,000 headless.",
        icon: "PenTool",
      },
      {
        title: "Photography",
        description:
          "$50–$200 per product for decent shots. On a 200-product catalogue this can exceed the build.",
        icon: "Images",
      },
      {
        title: "Ongoing work",
        description:
          "$1,200–$2,500/month if you want campaign pages, tests and performance work continuing after launch.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "What does each approach cost?",
        body: [
          {
            type: "table",
            head: ["Approach", "Build cost", "Time", "Best for"],
            rows: [
              ["Purchased theme, configured", "$500 – $2,500", "1–2 weeks", "Testing a product"],
              ["Customised theme", "$2,500 – $6,000", "2–4 weeks", "Under $30k/month revenue"],
              ["Custom theme", "$4,000 – $12,000", "3–6 weeks", "Most established brands"],
              ["Headless storefront", "$12,000 – $35,000", "8–14 weeks", "Site is the differentiator"],
              ["Custom platform", "$40,000+", "16+ weeks", "Requirements no platform meets"],
            ],
          },
          {
            type: "callout",
            title: "Most stores should not go headless",
            text: "A custom theme built with discipline gets you most of the performance and most of the design freedom for a third of the price. Headless is worth it when the storefront genuinely differentiates the brand and traffic justifies the build.",
          },
        ],
      },
      {
        heading: "What does the recurring stack actually total?",
        body: [
          {
            type: "table",
            head: ["Revenue/month", "Platform", "Apps", "Transactions", "Monthly total"],
            rows: [
              ["$10,000", "$39", "$150", "$320", "~$510"],
              ["$50,000", "$105", "$400", "$1,550", "~$2,055"],
              ["$150,000", "$399", "$700", "$4,500", "~$5,600"],
              ["$500,000", "$2,300", "$1,200", "$14,000", "~$17,500"],
            ],
          },
          {
            type: "p",
            text: "Two things follow. First, transaction fees dominate as you grow, which is why negotiating rates matters more than app pruning at scale. Second, at $10k a month a $30,000 headless build takes years to justify.",
          },
        ],
      },
      {
        heading: "Where should the money go at each stage?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Under $10k/month: a good theme and real product photography. Not a custom build.",
              "$10k–$50k/month: custom theme, checkout optimisation, an app audit. Speed starts paying for itself.",
              "$50k–$200k/month: performance engineering, campaign page capacity, considered headless evaluation.",
              "Above $200k/month: headless if design or speed constrains you, plus negotiated transaction rates.",
            ],
          },
          {
            type: "p",
            text: "The most common expensive mistake is buying stage-three infrastructure at stage one. The second most common is staying on a bloated theme long after speed is measurably costing conversions.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Storefront refresh",
        range: "$4,000 – $9,000",
        timeline: "3–6 weeks",
        bestFor: "Existing stores needing speed and design",
        includes: [
          "Design refresh of key templates",
          "Performance optimisation",
          "Checkout friction audit",
          "App audit and cleanup",
        ],
      },
      {
        name: "Custom theme build",
        range: "$4,000 – $12,000",
        timeline: "3–6 weeks",
        bestFor: "Most established brands",
        includes: [
          "Custom design and Liquid build",
          "Editable sections for merchandisers",
          "Performance work",
          "Migration and launch",
        ],
        featured: true,
      },
      {
        name: "Headless storefront",
        range: "$12,000 – $35,000",
        timeline: "8–14 weeks",
        bestFor: "Brands where the storefront differentiates",
        includes: [
          "Custom design across templates",
          "Next.js headless build",
          "Search and merchandising",
          "Full redirect mapping",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Shopify or a custom build cheaper?",
        answer:
          "Shopify is far cheaper upfront and carries ongoing fees. A custom platform has no platform fee but costs $40,000+ to build and requires you to maintain payments, security and compliance. For almost every store under eight figures, Shopify plus a custom front end is the better economics.",
      },
      {
        question: "How much do apps really cost?",
        answer:
          "Typically $200–$800 a month for an established store. They also cost page speed, which costs conversion. We audit each app for both, so the trade-off is a number rather than an opinion.",
      },
      {
        question: "What does migrating to a new platform cost?",
        answer:
          "$3,000 to $15,000 depending on catalogue size and how much data moves. The critical line item is URL mapping and redirects — skipping it is what causes the traffic loss stores blame on the migration.",
      },
      {
        question: "Do we need professional product photography?",
        answer:
          "Yes, and it usually returns more than an equivalent spend on the site. Excellent photography on an average theme outperforms average photography on a beautiful custom build.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["ecommerce-development", "shopify-vs-custom-ecommerce", "website-development-cost"],
    readMore: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "saas-development-cost",
    group: "cost",
    title: "How much does it cost to build a SaaS product?",
    seoTitle: "How Much Does SaaS Development Cost?",
    description:
      "SaaS build costs from MVP to production platform, what each phase includes, the infrastructure bill nobody forecasts, and where founders overspend.",
    excerpt:
      "MVP ranges, what actually drives them, and the running costs that appear the month after launch.",
    eyebrow: "Cost guide",
    primaryKeyword: "saas development cost",
    secondaryKeywords: [
      "cost to build a saas product",
      "saas mvp cost",
      "software product development cost",
      "saas platform pricing",
    ],
    answer:
      "A SaaS MVP with one core workflow, authentication and billing costs $15,000 to $45,000 and takes 8 to 14 weeks. A production platform with integrations, granular permissions and enterprise features runs $60,000 to $200,000. Ongoing engineering after launch is typically $3,500 to $15,000 per month.",
    intro:
      "The build is the visible cost. What surprises founders is the twelve months after launch, when the product needs continuous engineering and the infrastructure bill arrives.",
    proof: [
      { metric: "$15k–$45k", label: "MVP range" },
      { metric: "8–14 wks", label: "To launch" },
      { metric: "$50–$500", label: "Early infra/month" },
      { metric: "60%+", label: "Cost is post-launch" },
    ],
    deliverables: [
      {
        title: "Product design",
        description:
          "$3,000–$10,000. Flows, interface and prototype. Skipping it costs more in rebuilt features than it saves.",
        icon: "PenTool",
      },
      {
        title: "Core application",
        description:
          "$8,000–$25,000 for the workflow your value proposition depends on, built multi-tenant from the start.",
        icon: "Blocks",
      },
      {
        title: "Auth and billing",
        description:
          "$3,000–$6,000. Sessions, teams, roles, Stripe subscriptions, trials, proration and dunning.",
        icon: "CreditCard",
      },
      {
        title: "Marketing site",
        description:
          "$2,000–$5,000 in the same codebase, so the product and the pricing page look like one thing.",
        icon: "Globe",
      },
      {
        title: "Infrastructure",
        description:
          "$50–$500/month early on. Database, hosting, email, monitoring and error tracking.",
        icon: "Cloud",
      },
      {
        title: "Post-launch engineering",
        description:
          "$3,500–$15,000/month. This is where most of the lifetime cost lives, and most plans ignore it.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "What does each stage cost?",
        body: [
          {
            type: "table",
            head: ["Stage", "Cost", "Timeline", "Outcome"],
            rows: [
              ["Prototype sprint", "$3,000 – $6,000", "2–3 weeks", "Clickable prototype, costed plan"],
              ["MVP", "$15,000 – $45,000", "8–14 weeks", "A product customers can pay for"],
              ["Product-market fit iteration", "$3,500 – $9,000/mo", "3–12 months", "Changes driven by real usage"],
              ["Scale-up build", "$60,000 – $200,000", "6–18 months", "Integrations, permissions, enterprise"],
              ["Enterprise readiness", "$15,000 – $40,000", "6–12 weeks", "SSO, audit, compliance controls"],
            ],
          },
        ],
      },
      {
        heading: "What drives an MVP toward the top of the range?",
        answer:
          "Number of distinct user roles, integrations, and whether the core workflow involves money or compliance.",
        body: [
          {
            type: "table",
            head: ["Cheaper MVP", "Expensive MVP"],
            rows: [
              ["One user type", "Admin, manager, member, external guest"],
              ["No external integrations", "CRM, accounting and calendar sync"],
              ["Simple subscription billing", "Usage metering and custom contracts"],
              ["Data in, data out", "Money movement with reconciliation"],
              ["No compliance requirement", "Healthcare or financial controls"],
              ["Desktop-first internal tool", "Public product needing polish and SEO"],
            ],
          },
          {
            type: "callout",
            title: "Roles are the sleeper cost",
            text: "Each additional role multiplies the permission matrix and the testing surface. Founders consistently underestimate this. Ship with two roles and add the third when a customer asks.",
          },
        ],
      },
      {
        heading: "Where do founders overspend?",
        body: [
          {
            type: "list",
            items: [
              "Building features for enterprise customers before having any — SSO before your first ten paying users.",
              "Microservices architecture at zero users, which multiplies build and operating cost for no benefit.",
              "A custom design system before knowing what the product is.",
              "Automating processes a person could handle manually for the first fifty customers.",
              "Native mobile apps before the web product has demonstrated demand.",
              "Analytics infrastructure when one funnel report would answer the question.",
            ],
          },
          {
            type: "p",
            text: "The pattern is building for the company you hope to be in three years. Almost none of that work survives contact with what customers actually ask for.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Validation sprint",
        range: "$3,000 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Clarity before committing budget",
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
        bestFor: "A chargeable product in market",
        includes: [
          "Product and interface design",
          "Multi-tenant application",
          "Auth, roles and Stripe billing",
          "Marketing site",
          "Deployment and handover",
        ],
        featured: true,
      },
      {
        name: "Product retainer",
        range: "from $3,500 / month",
        timeline: "Ongoing",
        bestFor: "Iterating after launch",
        includes: [
          "Dedicated engineering capacity",
          "Two-week delivery cycles",
          "Infrastructure and cost management",
          "Security and dependency upkeep",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we build a SaaS product for $10,000?",
        answer:
          "A very narrow one, yes — a single workflow, one user type, simple billing, minimal design. It is a legitimate way to test an idea. It is not a platform, and anyone quoting a full multi-tenant product with integrations at that price is under-scoping.",
      },
      {
        question: "What are the running costs after launch?",
        answer:
          "Infrastructure is usually $50–$500 a month at early scale — database, hosting, email, monitoring. The dominant cost is engineering: $3,500–$15,000 a month to keep shipping, which most financial plans omit entirely.",
      },
      {
        question: "Is it cheaper to hire developers or use an agency?",
        answer:
          "For the first twelve months, an agency or contract team is usually cheaper and faster — no recruitment cost, no ramp time, and you can stop. Once the product is proven and the roadmap is continuous, in-house becomes better value.",
      },
      {
        question: "How much should we raise to build it?",
        answer:
          "Enough for the build plus twelve months of iteration, which typically means roughly two to three times the build cost. Raising only enough to launch is the most common way products die shortly after shipping.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["saas-development", "mvp-development-services", "in-house-vs-outsourced-development"],
    readMore: [
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "web-application-development-cost",
    group: "cost",
    title: "How much does a web application cost to build?",
    seoTitle: "How Much Does a Web Application Cost?",
    description:
      "Custom web app costs by complexity — dashboards, portals and workflow tools — plus how to estimate before you have a specification.",
    excerpt:
      "What dashboards, portals and internal tools actually cost, and how to estimate before you have a spec.",
    eyebrow: "Cost guide",
    primaryKeyword: "web application development cost",
    secondaryKeywords: [
      "custom web app cost",
      "internal tool development cost",
      "business dashboard cost",
      "custom software pricing",
    ],
    answer:
      "A custom web application costs $12,000 to $50,000 for most business use cases — internal tools and simple portals at $12,000 to $25,000, and workflow systems with integrations and multiple roles at $25,000 to $50,000. Discovery to produce a fixed price typically costs $2,500 to $5,000 and takes two weeks.",
    intro:
      "Web applications are hard to price without a specification, which is why serious quotes come after a paid discovery phase rather than from a phone call.",
    proof: [
      { metric: "$12k–$50k", label: "Most applications" },
      { metric: "$2.5k–$5k", label: "Discovery to fix the price" },
      { metric: "6–16 wks", label: "Typical build" },
      { metric: "Screens × roles", label: "The estimating unit" },
    ],
    deliverables: [
      {
        title: "Discovery",
        description:
          "$2,500–$5,000. Process mapping, specification and prototype. You own it regardless of who builds.",
        icon: "Compass",
      },
      {
        title: "Interface design",
        description:
          "$3,000–$10,000 depending on screen count and how many states each needs designed.",
        icon: "PenTool",
      },
      {
        title: "Application build",
        description:
          "$8,000–$30,000. The dominant variable is unique screens multiplied by user roles.",
        icon: "Code2",
      },
      {
        title: "Integrations",
        description:
          "$500–$4,000 each. A documented REST API is cheap; a legacy ERP with no interface is not.",
        icon: "Plug",
      },
      {
        title: "Data migration",
        description:
          "$1,000–$6,000. Cleaning and importing existing spreadsheets and legacy records, verified.",
        icon: "Database",
      },
      {
        title: "Support",
        description:
          "$1,500–$3,000/month for systems your operations depend on, including priority response.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "What does each type of application cost?",
        body: [
          {
            type: "table",
            head: ["Application", "Cost", "Timeline"],
            rows: [
              ["Simple internal tool, one role", "$12,000 – $20,000", "6–9 weeks"],
              ["Customer portal", "$18,000 – $35,000", "8–14 weeks"],
              ["Workflow system with approvals", "$25,000 – $50,000", "10–16 weeks"],
              ["Operations dashboard with integrations", "$25,000 – $45,000", "10–14 weeks"],
              ["Quoting or configuration tool", "$15,000 – $50,000", "8–20 weeks"],
              ["Multi-tenant platform", "$40,000 – $100,000+", "16+ weeks"],
            ],
          },
        ],
      },
      {
        heading: "How do you estimate before having a specification?",
        answer:
          "Count unique screens, multiply by the number of roles that see them differently, and add integration complexity.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "List the distinct screens. Not variations — a list view and a detail view are two screens.",
              "For each, note how many roles see a materially different version.",
              "Count integrations, and mark each as documented API, database access or nothing.",
              "Add the non-negotiables: auth, roles, audit logging, deployment, monitoring.",
              "As a rough guide, budget $800–$2,000 per unique screen-role combination for a competent build.",
            ],
          },
          {
            type: "callout",
            title: "Why discovery is priced separately",
            text: "An accurate fixed price requires knowing what is being built. Discovery produces the specification and prototype, priced on its own so you own the output and can take it elsewhere. A vendor giving a firm number without it is either padding heavily or planning to renegotiate.",
          },
        ],
      },
      {
        heading: "What makes an application expensive?",
        body: [
          {
            type: "table",
            head: ["Cheaper", "More expensive"],
            rows: [
              ["One or two roles", "Five roles with different permissions"],
              ["CRUD on clear entities", "Complex business rules with exceptions"],
              ["Modern APIs to integrate", "Legacy systems with no interface"],
              ["Desktop use only", "Mobile field use with offline tolerance"],
              ["Standard reporting", "Custom report builder"],
              ["Fresh start", "Migration from a live system in use"],
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
        bestFor: "Getting a real number",
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
        bestFor: "Replacing manual processes",
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
        bestFor: "Systems operations depend on",
        includes: [
          "Priority bug response",
          "Monthly enhancement hours",
          "Monitoring, backups and updates",
          "Quarterly roadmap review",
        ],
      },
    ],
    faqs: [
      {
        question: "Why can't you quote from a phone call?",
        answer:
          "Because the difference between a $12,000 and a $40,000 version of the same described application is in details a call does not surface — roles, exceptions, integrations and data. A number given without those is a guess that will move.",
      },
      {
        question: "Is off-the-shelf software cheaper?",
        answer:
          "Almost always, if it fits. A $200-a-month tool beats a $30,000 build unless your process is genuinely your advantage or nothing on the market covers the requirement. We recommend buying over building several times a year.",
      },
      {
        question: "What is the cheapest way to start?",
        answer:
          "Discovery plus a narrow first phase covering the single most painful part of the process. You get working software in weeks, learn what the real requirements are, and phase two is estimated far more accurately.",
      },
      {
        question: "What are the ongoing costs?",
        answer:
          "Hosting and infrastructure typically $50–$300 a month at business scale. Support and enhancement is $1,500–$3,000 a month if the system is operationally important.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-application-development", "custom-software-development", "buy-vs-build-software"],
    readMore: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "website-redesign-cost",
    group: "cost",
    title: "How much does a website redesign cost?",
    seoTitle: "How Much Does a Website Redesign Cost?",
    description:
      "Website redesign pricing by scope, why migration work adds cost, and how to tell whether you need a redesign or a cheaper fix.",
    excerpt:
      "Redesign pricing, plus an honest test for whether you need one at all.",
    eyebrow: "Cost guide",
    primaryKeyword: "website redesign cost",
    secondaryKeywords: [
      "website redesign pricing",
      "cost to redesign a website",
      "website refresh cost",
      "replatform cost",
    ],
    answer:
      "A website redesign costs $3,000 to $8,000 for a visual refresh on an existing structure, and $6,000 to $25,000 for a full rebuild including content audit, migration and redirect mapping. Redesigns cost more than new builds of the same size because migration and preserving search rankings is real work.",
    intro:
      "Before pricing a redesign, it is worth establishing whether you need one. A significant share of redesign enquiries are actually performance or messaging problems, and both are much cheaper to fix.",
    proof: [
      { metric: "$3k–$25k", label: "Depending on scope" },
      { metric: "+15–25%", label: "Migration overhead" },
      { metric: "6–12 wks", label: "Full redesign" },
      { metric: "100%", label: "URLs mapped" },
    ],
    deliverables: [
      {
        title: "Content audit",
        description:
          "$800–$2,500. Which pages earn traffic and links, what merges, what genuinely goes. Skipping it is why redesigns lose traffic.",
        icon: "Search",
      },
      {
        title: "Design",
        description:
          "$2,000–$8,000. Less than a new build if the brand exists and the structure is largely retained.",
        icon: "PenTool",
      },
      {
        title: "Build",
        description:
          "$3,000–$12,000 depending on component count and whether a CMS is being introduced.",
        icon: "Code2",
      },
      {
        title: "Migration",
        description:
          "$1,000–$4,000. Content, media, forms and structured data moved and verified page by page.",
        icon: "GitBranch",
      },
      {
        title: "Redirect mapping",
        description:
          "$500–$2,000. Every URL mapped and tested against a crawl. The line item that protects your rankings.",
        icon: "Network",
      },
      {
        title: "Monitored launch",
        description:
          "$500–$1,500. Daily coverage and ranking checks for the first month, with fixes as issues appear.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "Do you actually need a redesign?",
        answer:
          "Not if the real problem is speed, messaging or thin content — all three are cheaper to fix on the site you have.",
        body: [
          {
            type: "table",
            head: ["Symptom", "Likely fix", "Cost"],
            rows: [
              ["Site is slow", "Performance work", "$1,200 – $9,000"],
              ["Traffic but no enquiries", "Messaging and page structure", "$2,000 – $6,000"],
              ["Not ranking", "Content and technical SEO", "$1,500 – $14,000"],
              ["Looks dated, works fine", "Visual refresh", "$3,000 – $8,000"],
              ["Team cannot edit anything", "Add a CMS", "$3,000 – $7,000"],
              ["Platform genuinely blocks you", "Full redesign", "$6,000 – $25,000"],
            ],
          },
          {
            type: "callout",
            title: "The honest first question",
            text: "We ask what specific outcome the redesign is meant to produce. If the answer is 'more leads', a redesign is one of the more expensive and least certain ways to get them — and we will say so before quoting.",
          },
        ],
      },
      {
        heading: "Why does a redesign cost more than a new build?",
        body: [
          {
            type: "list",
            items: [
              "An existing site has URLs, rankings and backlinks that must be preserved deliberately.",
              "Content has to be audited, migrated and verified rather than simply written.",
              "Integrations already in production must keep working through the cutover.",
              "Stakeholders have opinions about the current site, which lengthens review.",
              "Launch requires a rollback plan and monitoring a new build does not.",
            ],
          },
          {
            type: "p",
            text: "Budget roughly 15–25% above an equivalent new build for the migration work. Vendors who omit it are quoting a new site and leaving you with the traffic loss.",
          },
        ],
      },
      {
        heading: "What can you do in phases?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Phase one: performance and technical fixes on the current site. Immediate, measurable, cheap.",
              "Phase two: redesign the highest-traffic templates — usually home and one or two others.",
              "Phase three: the remaining templates and content sections.",
              "Phase four: CMS and editorial workflow, once the structure has settled.",
            ],
          },
          {
            type: "p",
            text: "Phasing spreads cost across budget cycles and reduces risk, at the price of a period where the site looks inconsistent. Most mid-sized companies find that trade worthwhile.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Audit & plan",
        range: "$1,500 – $3,500",
        timeline: "1–2 weeks",
        bestFor: "Deciding whether to redesign",
        includes: [
          "Content and traffic audit",
          "Technical and performance review",
          "Conversion assessment",
          "Honest recommendation",
        ],
      },
      {
        name: "Full redesign",
        range: "$6,000 – $25,000",
        timeline: "6–12 weeks",
        bestFor: "Sites needing a genuine rebuild",
        includes: [
          "Content audit and architecture",
          "Complete design and build",
          "Migration with redirect mapping",
          "Performance and SEO work",
          "Monitored launch",
        ],
        featured: true,
      },
      {
        name: "Visual refresh",
        range: "$3,000 – $8,000",
        timeline: "3–5 weeks",
        bestFor: "Good structure, dated presentation",
        includes: [
          "Redesign on existing structure",
          "Key template rebuilds",
          "Performance improvements",
          "No URL changes",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a redesign hurt our search rankings?",
        answer:
          "Only if migration is done badly. Expect a two to four week fluctuation while Google reprocesses redirects, then recovery. Sustained loss comes from missing redirects and deleted content — which the audit and URL mapping exist to prevent.",
      },
      {
        question: "How often should a website be redesigned?",
        answer:
          "Every four to six years for most businesses, with smaller iterative improvements in between. Redesigning every two years usually indicates the underlying problem was never diagnosed correctly.",
      },
      {
        question: "Can we keep our existing content?",
        answer:
          "Yes, and usually you should. The audit identifies which pages earn traffic and links; those get migrated and often improved rather than rewritten. Wholesale rewrites discard earned authority.",
      },
      {
        question: "What if we only want part of the site redone?",
        answer:
          "That is often the sensible option. Redesigning the highest-traffic templates first delivers most of the benefit at a fraction of the cost, and the rest can follow in a later budget cycle.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-redesign-services", "website-development-cost", "website-speed-optimization"],
    readMore: [
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
      { label: "Canonical URLs explained", href: "/blog/canonical-urls-explained" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "cost-to-hire-a-web-developer",
    group: "cost",
    title: "What does it cost to hire a web developer in 2026?",
    seoTitle: "Cost to Hire a Web Developer (2026)",
    description:
      "Web developer costs compared — US employee, US contractor, freelancer and offshore studio — including the loaded costs most comparisons leave out.",
    excerpt:
      "Salary is roughly 70% of what an employee costs. Here is the comparison with everything included.",
    eyebrow: "Cost guide",
    primaryKeyword: "cost to hire a web developer",
    secondaryKeywords: [
      "web developer hourly rate",
      "developer salary vs contractor",
      "offshore developer cost",
      "software developer cost comparison",
    ],
    answer:
      "A senior US web developer costs $12,000 to $18,000 per month fully loaded — salary plus payroll taxes, benefits, equipment and recruitment amortised. A US contractor is $100 to $200 per hour. An offshore studio engineer is $3,500 to $6,500 per month. The gap is location cost, not skill, but it is paid for in timezone overlap and market context.",
    intro:
      "Most comparisons put a salary next to an hourly rate, which is not a comparison. Here is what each option actually costs once everything is included.",
    proof: [
      { metric: "1.25–1.4×", label: "Salary to loaded cost" },
      { metric: "2–4 mo", label: "Time to hire" },
      { metric: "15–25%", label: "Recruiter fee" },
      { metric: "3–5 mo", label: "Ramp to productive" },
    ],
    deliverables: [
      {
        title: "Base salary",
        description:
          "US senior web developer: $120,000–$165,000 depending on metro. Mid-level: $90,000–$125,000.",
        icon: "Receipt",
      },
      {
        title: "Payroll and benefits",
        description:
          "Adds roughly 25–40%: employer taxes, health insurance, retirement match, paid leave.",
        icon: "Users",
      },
      {
        title: "Recruitment",
        description:
          "15–25% of first-year salary through an agency, or months of your own team's time.",
        icon: "Search",
      },
      {
        title: "Ramp time",
        description:
          "Three to five months before a senior hire is fully productive. That is real, paid, low-output time.",
        icon: "Clock",
      },
      {
        title: "Equipment and tooling",
        description:
          "$3,000–$5,000 in year one, plus $100–$300 a month in software seats.",
        icon: "Cpu",
      },
      {
        title: "Downside risk",
        description:
          "A bad hire costs severance, lost time and re-recruitment — commonly 6–12 months of salary.",
        icon: "Scale",
      },
    ],
    sections: [
      {
        heading: "What does each option cost per month?",
        body: [
          {
            type: "table",
            head: ["Option", "Monthly cost", "Time to start", "Commitment"],
            rows: [
              ["US employee (senior)", "$12,000 – $18,000 loaded", "2–4 months", "Permanent"],
              ["US contractor", "$16,000 – $32,000", "2–6 weeks", "Contract term"],
              ["US agency", "$15,000 – $30,000", "4–8 weeks", "Per project"],
              ["Eastern Europe studio", "$5,500 – $9,000", "2–4 weeks", "30 days notice"],
              ["Latin America studio", "$5,000 – $8,500", "2–4 weeks", "30 days notice"],
              ["India studio", "$3,500 – $6,500", "1–2 weeks", "30 days notice"],
              ["Freelance marketplace", "$1,500 – $8,000", "Days", "Highly variable"],
            ],
          },
          {
            type: "p",
            text: "The middle three offer different timezone trade-offs at similar quality. Latin America gives the best US overlap; Eastern Europe suits East Coast mornings; India costs least and overlaps mornings on the East Coast and afternoons in the UK.",
          },
        ],
      },
      {
        heading: "What is the real cost of an employee?",
        body: [
          {
            type: "table",
            head: ["Line item", "Annual"],
            rows: [
              ["Base salary (senior, US average)", "$140,000"],
              ["Employer payroll taxes", "~$11,000"],
              ["Health insurance and benefits", "~$18,000"],
              ["Retirement match", "~$5,000"],
              ["Recruitment fee (amortised over 2 years)", "~$14,000"],
              ["Equipment and software", "~$5,000"],
              ["Total year one", "~$193,000 (≈$16,000/month)"],
            ],
          },
          {
            type: "callout",
            title: "Ramp time is the invisible cost",
            text: "Three to five months at reduced output is standard for a senior hire joining an unfamiliar codebase. At $16,000 a month that is $48,000–$80,000 of paid ramp before full productivity — a cost that never appears in a salary comparison.",
          },
        ],
      },
      {
        heading: "When is each option right?",
        body: [
          {
            type: "list",
            items: [
              "Employee: continuous work for years, deep product context matters, and you have engineering management.",
              "Contractor: a specific project with a known end, or a specialist skill needed briefly.",
              "Agency or studio: you need a team rather than a person, or you want delivery accountability.",
              "Offshore studio: budget is a real constraint, the work is well-specified, and you can operate async.",
              "Freelancer: small defined tasks. Be honest about the variance in outcome.",
            ],
          },
          {
            type: "p",
            text: "For a mid-sized US company without an existing engineering team, a studio is usually the right first step. Hire in-house once the workload is proven continuous and someone internal can manage it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why are offshore developers so much cheaper?",
        answer:
          "Cost of living and local salary markets, not skill. A senior engineer in India earns a good local salary at a rate that looks low in dollars. What you pay for the difference is timezone overlap and local market intuition.",
      },
      {
        question: "Is a cheap freelancer a false economy?",
        answer:
          "Often, but not always. For a small defined task with a clear deliverable, a good freelancer is excellent value. For anything that needs to be maintained for years, the variance in code quality is the risk you are actually pricing.",
      },
      {
        question: "How do we compare an agency quote to a salary?",
        answer:
          "Convert both to monthly fully loaded cost and include ramp time. An agency at $15,000 a month starting in two weeks often beats a $140,000 hire who starts in three months and ramps for four more.",
      },
      {
        question: "What hourly rate is reasonable?",
        answer:
          "US agencies $125–$250, US contractors $100–$200, Eastern Europe $45–$75, Latin America $40–$70, India $25–$45. Monthly retainers usually price better than hourly for continuous work.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["staff-augmentation-services", "in-house-vs-outsourced-development", "offshore-development-india"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "website-maintenance-cost",
    group: "cost",
    title: "How much does website maintenance cost?",
    seoTitle: "How Much Does Website Maintenance Cost?",
    description:
      "Website maintenance pricing by site type, what plans should include, and what happens to the cost when a site is left unmaintained for years.",
    excerpt:
      "What maintenance should cost, what it should include, and the compounding cost of skipping it.",
    eyebrow: "Cost guide",
    primaryKeyword: "website maintenance cost",
    secondaryKeywords: [
      "website maintenance pricing",
      "website care plan cost",
      "monthly website support cost",
      "web application maintenance cost",
    ],
    answer:
      "Website maintenance costs $350 to $900 per month for a marketing site and $1,500 to $3,000 per month for a web application. Plans should include dependency and security updates, uptime and error monitoring, backups with tested restores, and a defined block of hours for changes.",
    intro:
      "Maintenance is easy to skip because nothing visibly breaks for a while. The cost of skipping it is not linear — it compounds, and it arrives at the worst possible moment.",
    proof: [
      { metric: "$350–$900", label: "Marketing site / month" },
      { metric: "$1.5k–$3k", label: "Application / month" },
      { metric: "1–3%", label: "Of build cost per month" },
      { metric: "Tested", label: "Restores, not just backups" },
    ],
    deliverables: [
      {
        title: "Security patching",
        description:
          "Monthly dependency updates with critical advisories handled immediately rather than at the next window.",
        icon: "ShieldCheck",
      },
      {
        title: "Monitoring",
        description:
          "External uptime checks and error tracking with alerts to a human, not a dashboard nobody opens.",
        icon: "Activity",
      },
      {
        title: "Backups",
        description:
          "Automated backups plus periodic restore drills. An untested backup is an assumption, not a safeguard.",
        icon: "Database",
      },
      {
        title: "Performance checks",
        description:
          "Core Web Vitals tracked from real visitors, with fixes when a metric drifts out of range.",
        icon: "Gauge",
      },
      {
        title: "Change hours",
        description:
          "An agreed monthly block for copy edits, new sections and small features — usually 2 to 20 hours.",
        icon: "PenTool",
      },
      {
        title: "Reporting",
        description:
          "A monthly summary you can forward to leadership without translating it first.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What should each tier cost and include?",
        body: [
          {
            type: "table",
            head: ["Tier", "Monthly", "Change hours", "Response"],
            rows: [
              ["Basic marketing site", "$350 – $500", "2 hours", "2 business days"],
              ["Growth site", "$600 – $900", "8 hours", "4 hours"],
              ["Ecommerce store", "$900 – $2,500", "8–15 hours", "4 hours"],
              ["Web application", "$1,500 – $3,000", "15–25 hours", "2 hours"],
              ["Business-critical platform", "$3,000+", "25+ hours", "1 hour, escalation path"],
            ],
          },
          {
            type: "p",
            text: "As a rule of thumb, budget 1–3% of the original build cost per month. A $10,000 site is $350–$600; a $50,000 application is $1,500–$3,000.",
          },
        ],
      },
      {
        heading: "What happens if you skip it?",
        body: [
          {
            type: "table",
            head: ["Unmaintained for", "What typically happens", "Cost to fix"],
            rows: [
              ["3 months", "Dependencies drift, small errors accumulate", "Minimal"],
              ["6 months", "Known vulnerabilities present, performance degraded", "$1,000 – $3,000"],
              ["12 months", "Updates become a project, integrations silently break", "$3,000 – $8,000"],
              ["24 months", "Framework upgrade path is difficult", "$8,000 – $20,000"],
              ["36 months+", "Effectively a rebuild", "Original build cost or more"],
            ],
          },
          {
            type: "callout",
            title: "The compounding problem",
            text: "A framework upgrade done every six months is an afternoon. Done after three years it is a project — and it usually becomes urgent because of a security advisory, meaning it arrives with a deadline attached.",
          },
        ],
      },
      {
        heading: "What should not be in a maintenance plan?",
        body: [
          {
            type: "list",
            items: [
              "Hosting marked up several times over. You should see what hosting actually costs.",
              "'SEO' as a vague line item with no defined deliverable.",
              "Unlimited changes. It is not real, and it gets rationed informally instead.",
              "Lock-in that prevents you leaving with your code and accounts.",
              "Backups without restore testing, which is the part that actually matters.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Essential",
        range: "$350 / month",
        timeline: "Rolling monthly",
        bestFor: "Marketing sites",
        includes: [
          "Monthly dependency and security updates",
          "Uptime and error monitoring",
          "Backups with restore testing",
          "2 hours of changes",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        range: "$900 / month",
        timeline: "Rolling monthly",
        bestFor: "Sites driving real revenue",
        includes: [
          "Everything in Essential",
          "8 hours of changes",
          "Core Web Vitals monitoring and fixes",
          "4-hour priority response",
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
          "20+ engineering hours",
          "On-call escalation path",
          "Infrastructure and cost management",
          "Roadmap planning",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we really need a maintenance plan?",
        answer:
          "If the site generates revenue or handles data, yes. If it is a static brochure that changes once a year, an annual update session may be enough — and we will tell you that rather than selling a monthly plan.",
      },
      {
        question: "Can our internal IT handle it?",
        answer:
          "If they know the framework, yes. General IT teams are usually excellent at infrastructure and less comfortable with application dependency management. A hybrid — them on infrastructure, us on the application — works well.",
      },
      {
        question: "Do unused hours roll over?",
        answer:
          "With us, one month. They do not accumulate indefinitely, because reserved capacity is what makes fast response possible. Be wary of plans that promise indefinite rollover.",
      },
      {
        question: "What counts as an emergency?",
        answer:
          "Site down, checkout or forms failing, or an active security incident. Those are handled immediately under priority plans rather than waiting for the next scheduled window.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-maintenance", "website-development-cost", "devops-and-cloud-services"],
    readMore: [
      { label: "Dependency security and supply chain", href: "/blog/dependency-security-supply-chain" },
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "api-development-cost",
    group: "cost",
    title: "How much does API development cost?",
    seoTitle: "How Much Does API Development Cost?",
    description:
      "API build and integration costs — internal APIs, partner-facing APIs and third-party integrations — with the factors that move each estimate.",
    excerpt:
      "Internal API, public API and third-party integration all cost differently. Here is why.",
    eyebrow: "Cost guide",
    primaryKeyword: "api development cost",
    secondaryKeywords: [
      "api integration cost",
      "rest api development pricing",
      "third party integration cost",
      "custom api price",
    ],
    answer:
      "An internal API costs $5,000 to $15,000, a partner or public-facing API $15,000 to $40,000, and a single third-party integration $1,500 to $8,000. Public APIs cost more because documentation, versioning, rate limiting and support tooling are requirements rather than extras.",
    intro:
      "The cost difference between an internal and a public API is not the endpoints. It is everything around them that exists because you can no longer change things quietly.",
    proof: [
      { metric: "$5k–$40k", label: "Depending on audience" },
      { metric: "$1.5k–$8k", label: "Per integration" },
      { metric: "OpenAPI", label: "Included at delivery" },
      { metric: "3–12 wks", label: "Typical build" },
    ],
    deliverables: [
      {
        title: "Contract design",
        description:
          "$1,500–$4,000. Resources, error shape, pagination, versioning. Cheap now, very expensive to change later.",
        icon: "Blocks",
      },
      {
        title: "Implementation",
        description:
          "$3,000–$20,000 depending on endpoint count and business logic behind them.",
        icon: "Code2",
      },
      {
        title: "Auth and rate limiting",
        description:
          "$1,500–$5,000. Keys or OAuth, scopes, per-key limits with standard headers.",
        icon: "ShieldCheck",
      },
      {
        title: "Documentation",
        description:
          "$1,000–$4,000. OpenAPI specification, examples and a changelog generated from the code.",
        icon: "FileText",
      },
      {
        title: "Webhooks",
        description:
          "$2,000–$6,000. Signed, retried, idempotent delivery with a log your support team can inspect.",
        icon: "RefreshCw",
      },
      {
        title: "Developer portal",
        description:
          "$4,000–$12,000 if integrators need self-service keys, usage visibility and onboarding.",
        icon: "LayoutDashboard",
      },
    ],
    sections: [
      {
        heading: "What does each type cost?",
        body: [
          {
            type: "table",
            head: ["Type", "Cost", "Timeline", "Why"],
            rows: [
              ["Internal API", "$5,000 – $15,000", "3–6 weeks", "You control every consumer"],
              ["Mobile app backend", "$10,000 – $25,000", "5–10 weeks", "Versioning matters, clients lag"],
              ["Partner API", "$15,000 – $30,000", "6–10 weeks", "Docs, support, stability required"],
              ["Public API", "$20,000 – $40,000", "8–14 weeks", "Portal, keys, rate limits, SLAs"],
              ["Single integration", "$1,500 – $8,000", "1–4 weeks", "Depends on the provider's API"],
            ],
          },
        ],
      },
      {
        heading: "Why do integrations vary so much in price?",
        body: [
          {
            type: "table",
            head: ["Cheap integration", "Expensive integration"],
            rows: [
              ["Documented REST API with a sandbox", "Undocumented or SOAP interface"],
              ["Standard OAuth", "Custom or legacy auth scheme"],
              ["Webhooks provided", "Polling required, with rate limits"],
              ["Clear error responses", "Errors returned as 200 with a body flag"],
              ["Stable, versioned", "Changes without notice"],
              ["One-way data sync", "Bidirectional with conflict resolution"],
            ],
          },
          {
            type: "callout",
            title: "Bidirectional sync is the multiplier",
            text: "Pushing data one way is straightforward. Keeping two systems in sync in both directions means handling conflicts, ordering and partial failure — routinely three to five times the cost of one-way, and worth confirming you genuinely need it.",
          },
        ],
      },
      {
        heading: "What is worth paying for upfront?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Contract design. Error shape, pagination and versioning are near-impossible to change once clients exist.",
              "Idempotency on writes. Retrofitting it after a duplicate-charge incident is a bad way to learn.",
              "Documentation generated from code, so it cannot drift out of date.",
              "Monitoring on latency and error rate per endpoint, which makes support tractable.",
              "Rate limiting from day one, even if generous. Adding it later breaks someone's integration.",
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
        bestFor: "Getting the contract right first",
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
        bestFor: "Partner and public APIs",
        includes: [
          "Full implementation with tests",
          "Auth, rate limiting and webhooks",
          "Documentation and client collection",
          "Monitoring and alerting",
        ],
        featured: true,
      },
      {
        name: "Integration project",
        range: "$1,500 – $8,000",
        timeline: "1–4 weeks",
        bestFor: "Connecting a third-party system",
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
        question: "Is GraphQL more expensive to build than REST?",
        answer:
          "Slightly, upfront, because of schema design and resolver work. It can be cheaper over time when many different clients need different data shapes. For a public API, REST is usually the better economics due to caching and tooling.",
      },
      {
        question: "How much does maintaining an API cost?",
        answer:
          "Budget $500–$2,000 a month for a partner or public API. Consumers report issues, providers change, and versions need supporting. An internal API costs less because you control every caller.",
      },
      {
        question: "Can you integrate with a system that has no API?",
        answer:
          "Sometimes — via database access, scheduled file exports, or a small adapter service. We assess feasibility first and will tell you when the honest answer is that it is not practical.",
      },
      {
        question: "What makes an integration go over budget?",
        answer:
          "Almost always the provider: undocumented behaviour, sandbox environments that differ from production, and rate limits discovered during testing. We build in a discovery step against the real API before committing to a fixed price.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["api-development-services", "web-application-development-cost", "custom-software-development"],
    readMore: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "API versioning strategies", href: "/blog/api-versioning-strategies" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "landing-page-cost",
    group: "cost",
    title: "How much does a landing page cost?",
    seoTitle: "How Much Does a Landing Page Cost?",
    description:
      "Landing page pricing from template to fully custom, what copywriting adds, and when a set of pages costs less per page than one.",
    excerpt:
      "Template, custom, or a campaign set — and why the second page always costs less than the first.",
    eyebrow: "Cost guide",
    primaryKeyword: "landing page cost",
    secondaryKeywords: [
      "landing page design price",
      "custom landing page cost",
      "ppc landing page cost",
      "landing page development pricing",
    ],
    answer:
      "A custom-designed, fully tracked landing page costs $900 to $2,000 and takes 5 to 10 working days. Adding copywriting brings it to $1,500 to $3,000. A set of three to five campaign pages sharing a component system costs $2,500 to $6,000 — noticeably less per page than building them individually.",
    intro:
      "Landing pages are the one deliverable where speed of turnaround matters as much as price, because campaigns have dates.",
    proof: [
      { metric: "$900–$2k", label: "Custom single page" },
      { metric: "5–10 days", label: "Turnaround" },
      { metric: "2 days", label: "To quote" },
      { metric: "~40%", label: "Cheaper per page in sets" },
    ],
    deliverables: [
      {
        title: "Message and structure",
        description:
          "Included. Mapping objections in order before design, which is what determines whether the page works.",
        icon: "Target",
      },
      {
        title: "Custom design",
        description:
          "$400–$900 of the total. Designed for your offer rather than assembled from a template.",
        icon: "PenTool",
      },
      {
        title: "Build",
        description:
          "$400–$900. Static, minimal JavaScript, fast enough that paid traffic does not bounce.",
        icon: "Code2",
      },
      {
        title: "Copywriting",
        description:
          "$600–$1,200 extra if we write it, based on interviews with you and your sales team.",
        icon: "FileText",
      },
      {
        title: "Tracking",
        description:
          "Included. Form, click and scroll events wired to analytics and ad platforms, verified before launch.",
        icon: "BarChart3",
      },
      {
        title: "A/B variant",
        description:
          "$300–$600 for a second version, since the component system already exists.",
        icon: "GitBranch",
      },
    ],
    sections: [
      {
        heading: "What does each option cost?",
        body: [
          {
            type: "table",
            head: ["Option", "Cost", "Turnaround"],
            rows: [
              ["Template on a builder platform", "$0 – $300", "1–2 days"],
              ["Template customised by a designer", "$400 – $900", "3–5 days"],
              ["Custom design and build", "$900 – $2,000", "5–10 days"],
              ["Custom with copywriting", "$1,500 – $3,000", "10–14 days"],
              ["Set of 3–5 campaign pages", "$2,500 – $6,000", "2–3 weeks"],
              ["Monthly page retainer", "from $1,200/month", "Priority"],
            ],
          },
        ],
      },
      {
        heading: "Why is a set cheaper per page?",
        answer:
          "Because the first page pays for the component system, and subsequent pages reuse it.",
        body: [
          {
            type: "p",
            text: "Roughly half the cost of a single landing page is establishing the design language, the components and the tracking setup. Once those exist, page two is largely content and layout arrangement.",
          },
          {
            type: "list",
            items: [
              "One page: $900–$2,000.",
              "Three pages: $2,500–$4,000, so roughly $850–$1,300 each.",
              "Five pages: $4,000–$6,000, so roughly $800–$1,200 each.",
              "On a retainer with an established system, incremental pages fall further.",
            ],
          },
          {
            type: "callout",
            title: "Plan the campaign before the first page",
            text: "If you know three audience variants are coming, say so upfront. Building the component system with that in mind costs nothing extra and makes pages two and three substantially cheaper.",
          },
        ],
      },
      {
        heading: "When is a builder platform the right answer?",
        body: [
          {
            type: "list",
            items: [
              "Your marketing team needs to launch pages weekly without a developer.",
              "Pages are short-lived and design consistency matters less than speed.",
              "Budget genuinely does not support custom work.",
              "You are testing an offer before investing in the presentation.",
            ],
          },
          {
            type: "p",
            text: "We build custom pages in Next.js, which are faster and unconstrained. But if your team needs to self-serve weekly, a builder is the honest recommendation and we will say so rather than selling you a dependency on us.",
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
          "3–5 pages on a shared system",
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
          "Agreed pages per month",
          "Iterations on existing pages",
          "Test design and analysis",
          "Priority turnaround",
        ],
      },
    ],
    faqs: [
      {
        question: "Why would a landing page cost $2,000 when templates are free?",
        answer:
          "You are paying for the argument structure, the message match to your ad, a page that loads in under two seconds, and tracking that is verified. If those are not needed, a template genuinely is the right choice.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Five to ten working days from brief to live, with a quote in two. The bottleneck is usually copy — if the message and proof points are ready, we move quickly.",
      },
      {
        question: "Does the page need to be on our domain?",
        answer:
          "Ideally yes, on a subdirectory, which benefits your domain authority and keeps tracking simple. A subdomain or separate domain works too if your main site is on a platform that makes this awkward.",
      },
      {
        question: "What if the page does not convert?",
        answer:
          "We review the data with you and propose the next test. A single page rarely gets everything right first time — the value of building it properly is that iterating is cheap.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["landing-page-design", "website-development-cost", "ecommerce-brands"],
    readMore: [
      { label: "The anatomy of a converting landing page", href: "/blog/anatomy-of-a-converting-landing-page" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "mvp-development-cost",
    group: "cost",
    title: "How much does it cost to build an MVP?",
    seoTitle: "How Much Does an MVP Cost to Build?",
    description:
      "MVP development costs by scope, how to cut the number without cutting the product, and what to budget for the twelve months after launch.",
    excerpt:
      "MVP ranges, the four levers that halve the number, and why the build is under half the real budget.",
    eyebrow: "Cost guide",
    primaryKeyword: "mvp development cost",
    secondaryKeywords: [
      "cost to build an mvp",
      "minimum viable product cost",
      "startup mvp pricing",
      "prototype development cost",
    ],
    answer:
      "An MVP costs $15,000 to $45,000 for a product with one core workflow, authentication and billing, delivered in 8 to 14 weeks. A clickable prototype to test the concept first costs $3,000 to $6,000. Budget roughly two to three times the build cost in total, because the twelve months after launch is where most of the spend goes.",
    intro:
      "Founders ask what an MVP costs. The more useful question is what the first eighteen months cost, because launching without runway to iterate is the most common way these products die.",
    proof: [
      { metric: "$15k–$45k", label: "Typical MVP" },
      { metric: "$3k–$6k", label: "Prototype first" },
      { metric: "8–14 wks", label: "To launch" },
      { metric: "2–3×", label: "Build cost = total budget" },
    ],
    deliverables: [
      {
        title: "Prototype",
        description:
          "$3,000–$6,000. Clickable flows you can test on real prospects before writing production code.",
        icon: "MousePointerClick",
      },
      {
        title: "Core workflow",
        description:
          "$8,000–$20,000. The one thing your value proposition depends on, built properly.",
        icon: "Workflow",
      },
      {
        title: "Auth and billing",
        description:
          "$3,000–$6,000. Signup, teams, roles and Stripe subscriptions with trials and proration.",
        icon: "CreditCard",
      },
      {
        title: "Marketing site",
        description:
          "$2,000–$4,000 in the same codebase, so the funnel and the product feel like one product.",
        icon: "Globe",
      },
      {
        title: "Admin tooling",
        description:
          "$1,500–$3,000. Enough to support early customers without running database queries.",
        icon: "LayoutDashboard",
      },
      {
        title: "Post-launch",
        description:
          "$3,500+/month. The iteration budget. Skipping this is how a launched product quietly dies.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "How do you halve the cost without gutting the product?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Cut to one user role. Each additional role multiplies permission and testing work.",
              "Do things manually. Onboarding, provisioning and support can be a person for the first fifty customers.",
              "Defer integrations. Every third-party connection is $500–$4,000 and can wait for a customer to ask.",
              "Use a component library rather than a bespoke design system.",
              "One platform. Web first; native mobile only once demand is proven.",
              "Skip the analytics stack. One activation funnel answers the only question that matters early.",
            ],
          },
          {
            type: "callout",
            title: "The cheapest MVP is the one you do not build",
            text: "A prototype plus twenty customer conversations costs $6,000 and regularly changes the product substantially. Building first and learning afterwards costs $30,000 to learn the same thing.",
          },
        ],
      },
      {
        heading: "What should the total budget look like?",
        body: [
          {
            type: "table",
            head: ["Phase", "Cost", "Duration"],
            rows: [
              ["Prototype and validation", "$3,000 – $6,000", "2–3 weeks"],
              ["MVP build", "$15,000 – $45,000", "8–14 weeks"],
              ["Launch and first fixes", "$3,000 – $6,000", "1 month"],
              ["Iteration (6 months)", "$21,000 – $54,000", "6 months"],
              ["Infrastructure and tools (12 months)", "$1,500 – $6,000", "12 months"],
              ["Realistic first-year total", "$45,000 – $120,000", "12 months"],
            ],
          },
          {
            type: "p",
            text: "Raising or budgeting only for the build is the single most common planning error. The product that ships is never the product that succeeds; the iteration budget is what closes the gap.",
          },
        ],
      },
      {
        heading: "What does a $15,000 MVP look like versus a $45,000 one?",
        body: [
          {
            type: "table",
            head: ["", "$15,000", "$45,000"],
            rows: [
              ["User roles", "One", "Three or four"],
              ["Core workflow", "One, straightforward", "Several, with business rules"],
              ["Integrations", "None", "Two or three"],
              ["Design", "Component library based", "Custom design system"],
              ["Billing", "Single plan", "Tiers, trials, usage"],
              ["Admin tooling", "Minimal", "Full support console"],
              ["Marketing site", "Three pages", "Full site with blog"],
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Prototype sprint",
        range: "$3,000 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Testing before building",
        includes: [
          "Definition workshops",
          "User flows and clickable prototype",
          "Architecture plan",
          "Costed build roadmap",
        ],
      },
      {
        name: "MVP build",
        range: "$15,000 – $45,000",
        timeline: "8–14 weeks",
        bestFor: "A product customers can buy",
        includes: [
          "Product and interface design",
          "Core application with auth and billing",
          "Marketing site",
          "Analytics and admin tooling",
          "Launch support",
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
          "Feature work driven by usage data",
          "Monitoring and maintenance",
          "30 days notice",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we build an MVP for $5,000?",
        answer:
          "You can build a prototype or a very narrow single-workflow tool. You cannot build a multi-tenant product with billing and support tooling. Anyone quoting that is either misunderstanding the scope or planning to renegotiate.",
      },
      {
        question: "Should we build the prototype first?",
        answer:
          "Almost always. It costs a fifth of the build, takes three weeks, and regularly changes what gets built. The founders who skip it are usually the ones who rebuild a major feature within six months.",
      },
      {
        question: "Do agencies take equity instead of fees?",
        answer:
          "Some do. We do not, because it distorts the advice — a partner with equity has an incentive to keep building rather than to tell you the idea is not working.",
      },
      {
        question: "How much runway should we have after launch?",
        answer:
          "At least six months of iteration budget, ideally twelve. Launching with no capacity to respond to what users do is the most common reason a technically successful MVP fails commercially.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["mvp-development-services", "saas-development-cost", "saas-startups"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "Designing for trust in SaaS products", href: "/blog/designing-for-trust-in-saas" },
    ],
    publishedAt: "2026-08-13",
  },
];
