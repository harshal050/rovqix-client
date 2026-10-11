import type { LandingPage } from "./types";

/**
 * Comparison pages. These rank for high-intent decision queries, and they only
 * work if they are genuinely balanced — including the cases where the honest
 * recommendation is not to hire us. Keep the "when the other option wins"
 * sections real.
 */
export const comparePages: LandingPage[] = [
  {
    slug: "agency-vs-freelancer",
    group: "compare",
    title: "Agency vs freelancer: which should you hire?",
    seoTitle: "Agency vs Freelancer for Web Development",
    description:
      "An honest comparison of hiring a web development agency versus a freelancer — cost, risk, capacity, continuity, and which fits your project size.",
    excerpt:
      "Freelancers win more often than agencies admit. Here is where each genuinely fits.",
    eyebrow: "Comparison",
    primaryKeyword: "agency vs freelancer",
    secondaryKeywords: [
      "web design agency or freelancer",
      "freelance developer vs agency",
      "hiring a web developer",
      "agency vs contractor web development",
    ],
    answer:
      "Hire a freelancer for well-defined projects under roughly $8,000 where you can manage the work and tolerate single-person risk. Hire an agency for larger projects, work spanning design and engineering, or anything you need maintained for years. The deciding factors are project size, your available management time, and how costly a disappearance would be.",
    intro:
      "We are an agency, so treat our view accordingly — but a meaningful share of enquiries we receive would genuinely be better served by a good freelancer, and we say so.",
    proof: [
      { metric: "< $8k", label: "Freelancer territory" },
      { metric: "Multi-skill", label: "Where agencies win" },
      { metric: "Continuity", label: "The real differentiator" },
      { metric: "Your time", label: "The hidden variable" },
    ],
    deliverables: [
      {
        title: "Cost",
        description:
          "Freelancers are typically 30–50% cheaper. There is no overhead, no account management and no bench to fund.",
        icon: "Receipt",
      },
      {
        title: "Capacity",
        description:
          "An agency can put three people on a deadline. A freelancer cannot, regardless of how good they are.",
        icon: "Users",
      },
      {
        title: "Skill breadth",
        description:
          "Design, frontend, backend and DevOps in one engagement, versus one person's actual range.",
        icon: "Layers",
      },
      {
        title: "Continuity risk",
        description:
          "A freelancer taking a full-time job mid-project is a real and common failure mode.",
        icon: "Scale",
      },
      {
        title: "Management overhead",
        description:
          "Freelancers need you to direct the work. Agencies absorb that, which is part of what you pay for.",
        icon: "Compass",
      },
      {
        title: "Long-term support",
        description:
          "Who fixes it in two years? Agencies have process for this; individuals move on.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "Which is right for your project?",
        body: [
          {
            type: "table",
            head: ["Situation", "Better fit", "Why"],
            rows: [
              ["Under $8,000, clear scope", "Freelancer", "Cost, and the work fits one person"],
              ["Design plus engineering", "Agency", "Two skills, coordinated"],
              ["Hard deadline", "Agency", "Can add people"],
              ["Ongoing for years", "Agency", "Continuity and documented process"],
              ["Specialist one-off skill", "Freelancer", "Buy exactly that expertise"],
              ["You have no time to manage", "Agency", "They absorb coordination"],
              ["You have a strong PM", "Freelancer", "You supply what agencies charge for"],
              ["Compliance or security review", "Agency", "Contracts, insurance, process"],
            ],
          },
        ],
      },
      {
        heading: "What do agencies actually charge extra for?",
        answer:
          "Coordination, continuity, redundancy and contractual accountability — not better code by default.",
        body: [
          {
            type: "list",
            items: [
              "Project management: someone tracking the work who is not you.",
              "Redundancy: if one person is unavailable, the project continues.",
              "Multiple skills without you recruiting each one separately.",
              "Code review, so nobody's work ships unchecked.",
              "Contracts, insurance and the ability to complete a security questionnaire.",
              "Being around in two years, with documentation for whoever inherits it.",
            ],
          },
          {
            type: "callout",
            title: "An agency is not automatically better",
            text: "A strong senior freelancer will out-deliver a weak agency every time. The premium buys structure and continuity, not talent. Judge the individuals either way.",
          },
        ],
      },
      {
        heading: "How do you reduce the risk of each?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "With a freelancer: pay in milestones, insist the code lives in your repository from day one, and agree what happens if they become unavailable.",
              "With a freelancer: get the deployment and hosting accounts in your name, not theirs.",
              "With an agency: meet the people who will actually do the work, not just the salesperson.",
              "With an agency: confirm whether work is subcontracted, and to whom.",
              "With either: a written scope, a change process, and a defined handover at the end.",
              "With either: ask to speak to a client whose project went badly.",
            ],
          },
        ],
      },
      {
        heading: "When we tell people to hire a freelancer",
        body: [
          {
            type: "list",
            items: [
              "A single marketing site under $6,000 where the design already exists.",
              "A one-off integration or bug fix on an existing codebase.",
              "Ongoing small content changes on a stable site.",
              "A specialist need — a specific animation library, a niche platform — used once.",
              "Budgets where our minimum would consume the entire project.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are freelancers less reliable?",
        answer:
          "Not inherently, but the risk is concentrated. If a freelancer becomes ill or takes a job, the project stops. An agency spreads that risk. Mitigate it with milestone payments and your own repository access rather than assuming it away.",
      },
      {
        question: "Can we start with a freelancer and move to an agency?",
        answer:
          "Yes, and it is common. It works well when the code is in your repository, documented reasonably and built on conventional technology. It works badly when everything lives in one person's account.",
      },
      {
        question: "How much cheaper is a freelancer?",
        answer:
          "Typically 30–50% for equivalent seniority. The gap narrows once you account for the management time you spend, which is a real cost even though it does not appear on an invoice.",
      },
      {
        question: "What about freelance marketplaces?",
        answer:
          "Enormous variance. There are excellent engineers on them and a great many who are not. Screening cost is real, and for anything you will maintain long term the downside of a bad pick is high.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["cost-to-hire-a-web-developer", "in-house-vs-outsourced-development", "website-development"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "in-house-vs-outsourced-development",
    group: "compare",
    title: "In-house vs outsourced development",
    seoTitle: "In-House vs Outsourced Development Compared",
    description:
      "When to build an in-house engineering team versus outsourcing — real cost comparison, speed, control, knowledge retention and the hybrid most companies land on.",
    excerpt:
      "The comparison usually stops at cost. Ramp time, retention and management capacity matter more.",
    eyebrow: "Comparison",
    primaryKeyword: "in-house vs outsourced development",
    secondaryKeywords: [
      "outsourcing software development",
      "build in-house engineering team",
      "outsourced development pros and cons",
      "hire developers or agency",
    ],
    answer:
      "Outsource when the work is well-specified, temporary, or you lack engineering management. Build in-house when engineering is your core product, the roadmap is continuous, and you have someone to lead it. Most mid-sized companies end up hybrid: a small in-house core with outsourced capacity around it.",
    intro:
      "The comparison is usually framed as cost, which is the least interesting variable. The decision turns on whether you have someone who can manage engineers.",
    proof: [
      { metric: "2–4 mo", label: "To hire in-house" },
      { metric: "3–5 mo", label: "Ramp to productive" },
      { metric: "1–2 wks", label: "To start outsourced" },
      { metric: "Hybrid", label: "Where most land" },
    ],
    deliverables: [
      {
        title: "Speed to start",
        description:
          "Outsourced: one to two weeks. In-house: two to four months to hire, then months to ramp.",
        icon: "Clock",
      },
      {
        title: "Cost structure",
        description:
          "In-house is a fixed cost that is difficult to reduce. Outsourced is variable and stops on notice.",
        icon: "Scale",
      },
      {
        title: "Product context",
        description:
          "In-house accumulates deep context over years. This is the strongest argument for it.",
        icon: "Compass",
      },
      {
        title: "Management need",
        description:
          "Both need direction. In-house also needs career development, performance management and retention work.",
        icon: "Users",
      },
      {
        title: "Knowledge retention",
        description:
          "In-house keeps it, unless people leave. Outsourced keeps it only if documentation is contractual.",
        icon: "FileText",
      },
      {
        title: "Flexibility",
        description:
          "Outsourced scales both directions on notice. In-house scaling down means redundancies.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "What does each actually cost?",
        body: [
          {
            type: "table",
            head: ["", "In-house (US senior)", "Outsourced studio"],
            rows: [
              ["Monthly cost", "$12,000 – $18,000 loaded", "$3,500 – $6,500"],
              ["Recruitment", "15–25% of salary", "None"],
              ["Time to productive", "5–9 months total", "2–3 weeks"],
              ["Ramp cost", "$48,000 – $80,000", "Minimal"],
              ["Scaling down", "Severance and process", "30 days notice"],
              ["Management overhead", "High — reviews, growth, retention", "Moderate — direction only"],
              ["Context after 2 years", "Excellent", "Good if documented"],
            ],
          },
          {
            type: "p",
            text: "The cost gap narrows over years as in-house context compounds. It is widest in the first twelve months, which is exactly when most companies are least certain about the roadmap.",
          },
        ],
      },
      {
        heading: "When does in-house clearly win?",
        answer:
          "When software is the product, the roadmap is permanent, and you have an engineering leader.",
        body: [
          {
            type: "list",
            items: [
              "Your product is software and engineering quality is a competitive advantage.",
              "The roadmap is continuous with no foreseeable end.",
              "You already have an engineering manager or a strong technical founder.",
              "Deep domain knowledge takes months to acquire and is central to the work.",
              "Security or compliance requires employees rather than contractors.",
              "You can offer the compensation and growth path to retain good engineers.",
            ],
          },
          {
            type: "callout",
            title: "The management prerequisite",
            text: "Hiring engineers without someone to manage them produces expensive underperformance that takes a year to diagnose. If nobody internally can review technical work and set direction, in-house is the more expensive mistake.",
          },
        ],
      },
      {
        heading: "When does outsourcing clearly win?",
        body: [
          {
            type: "list",
            items: [
              "The work has a defined end — a build, a migration, a rebuild.",
              "You need multiple skills briefly rather than one skill permanently.",
              "The roadmap is uncertain and committing to fixed headcount is risky.",
              "Speed matters and you cannot wait four months to hire.",
              "Budget is a real constraint and the difference is material.",
              "It is a first product and you do not yet know what you are building.",
            ],
          },
        ],
      },
      {
        heading: "What does the hybrid look like?",
        body: [
          {
            type: "p",
            text: "Most mid-sized companies land here: one or two in-house engineers who own architecture, product context and code review, with outsourced capacity for delivery volume. The in-house people are the memory; the outsourced team is the throughput.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Hire your first engineer as a lead, not just a builder — they need to be able to review external work.",
              "Keep architectural decisions in-house and documented.",
              "Give the outsourced team defined areas of ownership rather than scattered tickets.",
              "Shared repository, shared review, one process.",
              "Revisit the ratio every two quarters as the roadmap becomes clearer.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is outsourced code lower quality?",
        answer:
          "Not inherently — it varies by vendor exactly as it varies by hire. What genuinely differs is context: an outsourced team knows your codebase but not the three years of decisions behind it. Documentation and code review close most of that gap.",
      },
      {
        question: "What happens to knowledge when an outsourced team leaves?",
        answer:
          "Whatever your contract required. Make documentation, architecture records and a handover session contractual deliverables rather than good intentions, and the risk is manageable.",
      },
      {
        question: "Can we outsource and hire at the same time?",
        answer:
          "Yes, and it is often the best sequence — outsource to keep moving while you recruit, then transition with an overlap period. It removes the pressure to make a rushed hire.",
      },
      {
        question: "How do we know when to bring it in-house?",
        answer:
          "When the roadmap has been continuously full for a year, when you have someone who can manage engineers, and when the total outsourced spend approaches loaded salary for the same capacity.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["staff-augmentation-services", "cost-to-hire-a-web-developer", "dedicated-development-team"],
    readMore: [
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "wordpress-vs-custom-website",
    group: "compare",
    title: "WordPress vs a custom website",
    seoTitle: "WordPress vs Custom Website: Which to Choose",
    description:
      "WordPress or a custom Next.js build — compared on cost, performance, security, editing experience and three-year total cost of ownership.",
    excerpt:
      "WordPress is the right answer more often than custom shops admit, and the wrong one more often than agencies selling it admit.",
    eyebrow: "Comparison",
    primaryKeyword: "wordpress vs custom website",
    secondaryKeywords: [
      "wordpress or custom build",
      "wordpress vs nextjs",
      "custom website vs cms",
      "wordpress alternatives for business",
    ],
    answer:
      "Choose WordPress when a non-technical team edits content daily, you need a large plugin ecosystem, and conventional design is acceptable. Choose a custom build when performance is a business requirement, the design must be distinctive, or plugin security and maintenance overhead have become a real cost. Over three years the total cost is closer than the initial quotes suggest.",
    intro:
      "We build custom sites, so weigh our view accordingly. WordPress powers a large share of the web for good reasons, and we recommend it to a handful of enquiries a year.",
    proof: [
      { metric: "3 years", label: "The honest comparison window" },
      { metric: "Plugins", label: "Where the cost hides" },
      { metric: "Editing", label: "WordPress's real strength" },
      { metric: "Speed", label: "Custom's real strength" },
    ],
    deliverables: [
      {
        title: "Upfront cost",
        description:
          "WordPress theme build $2,000–$8,000; custom Next.js $4,000–$15,000. WordPress wins here clearly.",
        icon: "Receipt",
      },
      {
        title: "Performance",
        description:
          "Custom builds are statically generated and typically two to four times faster than a plugin-heavy WordPress site.",
        icon: "Gauge",
      },
      {
        title: "Security surface",
        description:
          "WordPress plugins are a continual patching obligation. A custom build has dependencies but no plugin ecosystem.",
        icon: "ShieldCheck",
      },
      {
        title: "Editing experience",
        description:
          "WordPress is genuinely excellent here. A headless CMS is good but rarely better for a large non-technical team.",
        icon: "PenTool",
      },
      {
        title: "Design freedom",
        description:
          "Custom has none of the theme constraints. WordPress can look like anything with enough effort, at rising cost.",
        icon: "Palette",
      },
      {
        title: "Maintenance",
        description:
          "WordPress $100–$500/month including plugin management; custom $350–$900 with fewer moving parts.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "How do they compare over three years?",
        body: [
          {
            type: "table",
            head: ["", "WordPress", "Custom Next.js"],
            rows: [
              ["Initial build", "$2,000 – $8,000", "$4,000 – $15,000"],
              ["Hosting (3 years)", "$1,000 – $3,500", "$0 – $1,800"],
              ["Plugin licences (3 years)", "$1,000 – $3,000", "$0"],
              ["Maintenance (3 years)", "$3,600 – $18,000", "$12,600 – $32,400"],
              ["Performance work", "Often recurring", "Built in"],
              ["Three-year total", "$7,600 – $32,500", "$16,600 – $49,200"],
            ],
          },
          {
            type: "p",
            text: "WordPress remains cheaper over three years for most sites. The custom case is not cost — it is speed, distinctiveness and not carrying a plugin security surface. Be sceptical of anyone claiming custom is cheaper.",
          },
        ],
      },
      {
        heading: "When is WordPress the right answer?",
        body: [
          {
            type: "list",
            items: [
              "A content team publishes several times a week and needs full editorial control.",
              "You need functionality that mature plugins already solve — events, memberships, complex forms.",
              "Budget is genuinely constrained and the site is not a competitive differentiator.",
              "Your team already knows WordPress and there is no appetite to learn something new.",
              "You need to hire cheaply and quickly for changes — the talent pool is enormous.",
            ],
          },
          {
            type: "callout",
            title: "We recommend WordPress several times a year",
            text: "When a client has a five-person marketing team publishing daily and a conventional design brief, WordPress is the better tool. Telling them otherwise would be selling, not advising.",
          },
        ],
      },
      {
        heading: "When is a custom build the right answer?",
        body: [
          {
            type: "list",
            items: [
              "Page speed measurably affects revenue — ecommerce, paid traffic, or high mobile share.",
              "The site is a positioning asset and must not look like a theme.",
              "You need application functionality beyond content: dashboards, portals, custom logic.",
              "Plugin maintenance and security have already become a recurring cost or an incident.",
              "You have or plan to have developers who would rather work in a modern stack.",
              "Content changes rarely, so the editing advantage matters less.",
            ],
          },
        ],
      },
      {
        heading: "Is headless WordPress a middle path?",
        body: [
          {
            type: "p",
            text: "Often, yes. WordPress stays as the editor your team knows; a Next.js front end renders the site. You get the performance and design freedom of custom with the editing experience of WordPress.",
          },
          {
            type: "list",
            items: [
              "Costs $6,000–$18,000 — between the two options.",
              "You still maintain WordPress, so the security surface does not disappear entirely.",
              "Most page builder plugins stop working, which is usually the migration's biggest friction.",
              "Best when the editing workflow is the thing you want to keep and everything else is the problem.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is WordPress bad for SEO?",
        answer:
          "No. WordPress with a well-built theme and good content ranks perfectly well. The SEO problems attributed to WordPress are usually performance problems caused by plugin bloat, which is a configuration issue rather than a platform one.",
      },
      {
        question: "Is WordPress insecure?",
        answer:
          "Core WordPress is reasonably secure and actively maintained. The risk is plugins — a site with twenty-five plugins has twenty-five codebases to trust and patch. Fewer plugins and disciplined updates address most of it.",
      },
      {
        question: "Can WordPress be fast?",
        answer:
          "Yes, with a lean theme, few plugins, good caching and optimised images. It takes discipline that most WordPress sites do not receive, which is why the average WordPress site is slow while a well-built one is fine.",
      },
      {
        question: "What if we already have WordPress and it works?",
        answer:
          "Then keep it. Migrating a functioning site is a cost with no immediate return. Migrate when the platform is actively blocking something you need, not because a newer stack exists.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["wordpress-to-nextjs-migration", "website-development-cost", "headless-cms-development"],
    readMore: [
      { label: "SSR, SSG or ISR", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "shopify-vs-custom-ecommerce",
    group: "compare",
    title: "Shopify vs a custom ecommerce build",
    seoTitle: "Shopify vs Custom Ecommerce: Which to Choose",
    description:
      "Shopify, headless Shopify or fully custom — compared on cost, fees, control, compliance burden and the revenue level at which each makes sense.",
    excerpt:
      "Three options, not two — and the middle one is right for most brands.",
    eyebrow: "Comparison",
    primaryKeyword: "shopify vs custom ecommerce",
    secondaryKeywords: [
      "shopify or custom store",
      "headless shopify vs custom",
      "ecommerce platform comparison",
      "build custom online store",
    ],
    answer:
      "Shopify with a custom theme is right for most stores. Headless Shopify suits brands where the storefront differentiates and revenue justifies the build. A fully custom platform is rarely worth it — you take on payments, security, PCI scope and compliance for savings that only materialise at very high volume.",
    intro:
      "This is usually framed as two options. It is three, and the middle one — Shopify handling commerce with a custom front end — is where most serious brands land.",
    proof: [
      { metric: "3 options", label: "Not two" },
      { metric: "~$200k/mo", label: "Where headless starts paying" },
      { metric: "PCI", label: "What custom takes on" },
      { metric: "2.4–2.9%", label: "The fee you are weighing" },
    ],
    deliverables: [
      {
        title: "Build cost",
        description:
          "Shopify theme $4k–$12k; headless $12k–$35k; fully custom $40k+ with a longer timeline.",
        icon: "Receipt",
      },
      {
        title: "Recurring fees",
        description:
          "Shopify $39–$2,300/month plus transaction fees. Custom has none, but you pay for what they cover.",
        icon: "CreditCard",
      },
      {
        title: "Compliance burden",
        description:
          "Shopify absorbs PCI scope, fraud tooling and tax calculation. Custom means owning all three.",
        icon: "ShieldCheck",
      },
      {
        title: "Design control",
        description:
          "Themes constrain; headless and custom do not. This is the main reason brands move.",
        icon: "Palette",
      },
      {
        title: "App ecosystem",
        description:
          "Shopify's is the strongest advantage. Headless keeps most backend apps and loses script-injecting ones.",
        icon: "Plug",
      },
      {
        title: "Operational risk",
        description:
          "Shopify handles uptime through peak trading. On a custom platform, Black Friday is your problem.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "How do the three options compare?",
        body: [
          {
            type: "table",
            head: ["", "Shopify theme", "Headless Shopify", "Fully custom"],
            rows: [
              ["Build cost", "$4k – $12k", "$12k – $35k", "$40k+"],
              ["Time to launch", "3–6 weeks", "8–14 weeks", "16+ weeks"],
              ["Platform fees", "Yes", "Yes", "No"],
              ["Transaction fees", "Yes", "Yes", "Payment processor only"],
              ["Design freedom", "Constrained", "Unlimited", "Unlimited"],
              ["PCI scope", "Minimal", "Minimal", "Yours"],
              ["Peak-trading risk", "Shopify's", "Shared", "Yours"],
              ["Best at", "Any revenue", "$100k+/month", "Rarely"],
            ],
          },
        ],
      },
      {
        heading: "Why is fully custom rarely worth it?",
        answer:
          "Because the platform fee buys payments, fraud, tax, uptime and PCI scope — all of which you would otherwise build and own.",
        body: [
          {
            type: "list",
            items: [
              "Payment processing with fraud detection and chargeback handling.",
              "PCI compliance scope kept off your infrastructure entirely.",
              "Sales tax calculation across jurisdictions, which changes constantly.",
              "Checkout that has been optimised across millions of transactions.",
              "Uptime through Black Friday without you capacity planning for it.",
              "An app ecosystem that solves problems you have not encountered yet.",
            ],
          },
          {
            type: "callout",
            title: "Run the maths before deciding",
            text: "At $150k a month, Shopify plus fees costs roughly $5,600 a month. A custom platform saving that requires a $40k+ build, ongoing engineering, and you absorbing PCI, tax and peak-trading risk. The payback period is longer than most brands assume.",
          },
        ],
      },
      {
        heading: "When does headless make sense?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Revenue is high enough that a percentage point of conversion is meaningful money.",
              "Theme constraints are actively blocking design or merchandising decisions.",
              "Page speed has been measured and is demonstrably costing conversions.",
              "You have or can retain engineering capacity to maintain a front end.",
              "You are prepared to lose script-based apps and replace their function natively.",
            ],
          },
          {
            type: "p",
            text: "If fewer than three of those are true, a well-built custom theme delivers most of the benefit for a third of the cost. We recommend that far more often than headless.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "At what revenue should we consider headless?",
        answer:
          "Roughly $100k a month is where the conversation becomes reasonable, and around $200k is where it usually pays back within a year. Below that, spend the money on product, photography and acquisition.",
      },
      {
        question: "Do we lose our apps going headless?",
        answer:
          "Backend apps — inventory, fulfilment, accounting — keep working. Apps that inject scripts into a Liquid theme do not. The audit identifies which you actually depend on before you commit.",
      },
      {
        question: "Can we switch later?",
        answer:
          "Yes. Going from theme to headless keeps Shopify as the backend, so catalogue, orders and customers stay put. It is one of the lower-risk migrations in ecommerce.",
      },
      {
        question: "What about WooCommerce or other platforms?",
        answer:
          "WooCommerce suits stores already deep in WordPress with modest volume. BigCommerce and others are credible. Shopify wins on ecosystem and checkout quality, which is why most of our ecommerce work sits there.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["shopify-development-services", "ecommerce-website-cost", "ecommerce-development"],
    readMore: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "offshore-vs-onshore-development",
    group: "compare",
    title: "Offshore vs onshore development",
    seoTitle: "Offshore vs Onshore Development Compared",
    description:
      "Offshore, nearshore and onshore development compared on cost, timezone, communication and risk — with the failure modes specific to each.",
    excerpt:
      "Cost is the obvious difference. Timezone overlap and management burden are the ones that decide outcomes.",
    eyebrow: "Comparison",
    primaryKeyword: "offshore vs onshore development",
    secondaryKeywords: [
      "nearshore vs offshore development",
      "outsourcing software development location",
      "offshore development risks",
      "onshore development cost",
    ],
    answer:
      "Onshore costs two to four times more and gives full timezone overlap and local market context. Nearshore splits the difference with strong overlap at moderate cost. Offshore is cheapest with four to five hours of overlap. The right choice depends on how well-specified the work is and how much live collaboration it needs.",
    intro:
      "We are an offshore studio, so read this accordingly. We have also seen enough offshore engagements fail to be specific about when it is the wrong choice.",
    proof: [
      { metric: "2–4×", label: "Onshore cost multiple" },
      { metric: "4–5 hrs", label: "Offshore overlap" },
      { metric: "Specification", label: "The deciding variable" },
      { metric: "Written", label: "What makes it work" },
    ],
    deliverables: [
      {
        title: "Onshore",
        description:
          "$100–$250/hour. Full overlap, local context, in-person possible, easiest for undefined work.",
        icon: "Building2",
      },
      {
        title: "Nearshore",
        description:
          "$40–$75/hour. Latin America for US clients, Eastern Europe for UK. Strong overlap, moderate cost.",
        icon: "Globe",
      },
      {
        title: "Offshore",
        description:
          "$25–$45/hour. India and South Asia. Lowest cost, four to five hours of overlap, async discipline required.",
        icon: "Clock",
      },
      {
        title: "Specification need",
        description:
          "The further away, the more the work must be defined. Exploratory work suffers most from distance.",
        icon: "FileText",
      },
      {
        title: "Management burden",
        description:
          "Distance increases coordination cost. Budget for it rather than assuming the rate difference is pure saving.",
        icon: "Compass",
      },
      {
        title: "Market context",
        description:
          "Onshore teams understand your customers intuitively. Offshore teams need it made explicit.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "How do the three compare?",
        body: [
          {
            type: "table",
            head: ["", "Onshore (US)", "Nearshore (LatAm)", "Offshore (India)"],
            rows: [
              ["Hourly rate", "$100 – $250", "$40 – $75", "$25 – $45"],
              ["Monthly, full-time", "$16k – $32k", "$5k – $8.5k", "$3.5k – $6.5k"],
              ["Overlap with US East", "Full", "6–8 hours", "4–5 hours"],
              ["Overlap with US West", "Full", "5–7 hours", "2–3 hours"],
              ["In-person possible", "Yes", "Occasionally", "Rarely"],
              ["Market context", "Native", "Good", "Requires explaining"],
              ["Best for", "Undefined, collaborative work", "Balanced needs", "Well-specified work"],
            ],
          },
        ],
      },
      {
        heading: "What makes offshore fail?",
        answer:
          "No overlap hours, weak written communication, no accountable lead, and buying on price alone.",
        body: [
          {
            type: "table",
            head: ["Failure mode", "What to require instead"],
            rows: [
              ["Zero overlap hours", "A guaranteed daily window in writing"],
              ["Questions blocking overnight", "Async updates and pre-signoff questions"],
              ["Bait and switch on staffing", "Interview and approve the actual engineers"],
              ["No accountability", "One named lead with escalation"],
              ["Cheapest bid", "A real estimate with defined scope"],
              ["Unclear IP ownership", "Assignment from the first commit"],
            ],
          },
          {
            type: "callout",
            title: "The cheapest quote is the most expensive",
            text: "An unusually low rate is usually junior engineers presented as senior, or a scope that will be renegotiated once you are committed. Ask any vendor — us included — what happens when the estimate turns out to be wrong.",
          },
        ],
      },
      {
        heading: "When should you pay for onshore?",
        body: [
          {
            type: "list",
            items: [
              "The work is genuinely exploratory and needs live, iterative collaboration daily.",
              "Deep local market or regulatory context is central to the product decisions.",
              "Your organisation requires in-person presence for workshops or stakeholder management.",
              "Compliance or contractual terms require domestic suppliers.",
              "You have no capacity to write specifications or communicate in writing.",
            ],
          },
          {
            type: "p",
            text: "That last point is the honest one. Offshore engagements need someone on your side who can write clearly. If that person does not exist, the rate saving evaporates in rework.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is offshore development lower quality?",
        answer:
          "Not inherently. Quality varies more between vendors than between countries. What genuinely differs is communication cost and market context — both manageable, neither free.",
      },
      {
        question: "What is the minimum overlap needed?",
        answer:
          "Four hours daily is workable for most engineering. Below two hours, every question costs a day and the rate saving disappears into elapsed time.",
      },
      {
        question: "Is nearshore worth the premium over offshore?",
        answer:
          "For US clients needing heavy live collaboration, often yes — the extra overlap is real value. For well-specified work with disciplined async communication, the premium buys less than it appears to.",
      },
      {
        question: "How do we protect our IP?",
        answer:
          "Assignment from the first commit in the contract, code in your repository, infrastructure in your accounts, and named revocable access. These are standard terms and any credible vendor will accept them.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["offshore-development-india", "cost-to-hire-a-web-developer", "staff-augmentation-services"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "fixed-price-vs-time-and-materials",
    group: "compare",
    title: "Fixed price vs time and materials",
    seoTitle: "Fixed Price vs Time and Materials Contracts",
    description:
      "Which contract model to use for software projects — how each shifts risk, where each fails, and the hybrid that works for most engagements.",
    excerpt:
      "Both models work with a clear scope. Neither survives without one.",
    eyebrow: "Comparison",
    primaryKeyword: "fixed price vs time and materials",
    secondaryKeywords: [
      "software contract models",
      "fixed bid vs hourly development",
      "time and materials contract",
      "agile contract pricing",
    ],
    answer:
      "Fixed price shifts estimation risk to the vendor and suits well-defined scope such as marketing sites and migrations. Time and materials shifts it to you and suits exploratory product work. Most successful engagements are hybrid: fixed price for a discovery phase, then time and materials or fixed-scope increments for the build.",
    intro:
      "Neither model prevents a project going wrong. What prevents it is a scope document both sides agree on — the contract only decides who pays when the estimate is wrong.",
    proof: [
      { metric: "Vendor", label: "Bears risk on fixed price" },
      { metric: "Client", label: "Bears risk on T&M" },
      { metric: "Hybrid", label: "What usually works" },
      { metric: "Scope", label: "What actually matters" },
    ],
    deliverables: [
      {
        title: "Fixed price",
        description:
          "One number agreed upfront. Predictable for you, and the vendor absorbs a bad estimate.",
        icon: "Receipt",
      },
      {
        title: "Time and materials",
        description:
          "You pay for hours worked. Flexible, and you carry the cost if it takes longer than hoped.",
        icon: "Clock",
      },
      {
        title: "Capped T&M",
        description:
          "Hourly with a ceiling. Flexibility with a worst case, though vendors price the cap in.",
        icon: "Scale",
      },
      {
        title: "Retainer",
        description:
          "Fixed monthly capacity, scope set per cycle. Best for continuous work with a shifting roadmap.",
        icon: "RefreshCw",
      },
      {
        title: "Milestone based",
        description:
          "Fixed price split into staged payments tied to deliverables. Common and sensible for builds.",
        icon: "CalendarCheck",
      },
      {
        title: "Discovery first",
        description:
          "A small fixed-price phase producing the specification that makes the main estimate honest.",
        icon: "Compass",
      },
    ],
    sections: [
      {
        heading: "How do the models compare?",
        body: [
          {
            type: "table",
            head: ["", "Fixed price", "Time & materials"],
            rows: [
              ["Who bears estimate risk", "Vendor", "Client"],
              ["Budget predictability", "High", "Low without a cap"],
              ["Flexibility to change", "Low — change requests", "High"],
              ["Vendor incentive", "Finish efficiently", "Bill hours"],
              ["Needs upfront definition", "Yes, extensively", "Less"],
              ["Best for", "Sites, migrations, defined builds", "Product development, R&D"],
              ["Common failure", "Under-scoped bid, then change requests", "Scope drift, budget creep"],
            ],
          },
        ],
      },
      {
        heading: "Where does each model fail?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Fixed price fails when the vendor under-bids to win, then recovers margin through change requests on everything not explicitly listed.",
              "Fixed price fails when requirements genuinely cannot be known upfront, producing a contract that fights the work.",
              "Time and materials fails when nobody tracks burn until the budget is gone.",
              "Time and materials fails when the vendor has no incentive to be efficient and the client has no visibility.",
              "Both fail identically when the scope document is vague, which is the actual root cause in most disputes.",
            ],
          },
          {
            type: "callout",
            title: "Ask what happens when the estimate is wrong",
            text: "It is the single most revealing question in a vendor conversation. 'We absorb it' means they have priced honestly. 'We would raise a change request' means the quote is a starting position.",
          },
        ],
      },
      {
        heading: "What does a good hybrid look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Phase 1: fixed-price discovery. Small, defined, produces a specification and prototype you own.",
              "Phase 2: fixed price against that specification, with milestone payments.",
              "Changes: written estimate and approval before entering the build.",
              "Phase 3: retainer for ongoing work, where scope is agreed per two-week cycle.",
            ],
          },
          {
            type: "p",
            text: "This gives you a predictable number for the part that can be defined, and flexibility for the part that cannot. It is how most of our engagements run.",
          },
        ],
      },
      {
        heading: "How do you protect yourself in either model?",
        body: [
          {
            type: "list",
            items: [
              "A scope document listing pages, components, integrations and exclusions.",
              "Milestone payments tied to demonstrable deliverables, never dates alone.",
              "Code in your repository from the first commit, not delivered at the end.",
              "On T&M: weekly burn reporting and a checkpoint at 50% of budget.",
              "On fixed price: a written change process with estimates before work begins.",
              "An exit clause. Any engagement you cannot leave is one you will regret.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which model is cheaper?",
        answer:
          "Time and materials is usually cheaper when things go well, because fixed price includes a risk premium. Fixed price is cheaper when they do not. You are effectively buying insurance against the estimate being wrong.",
      },
      {
        question: "Can agile work with fixed price?",
        answer:
          "Yes, as fixed-scope increments: a fixed price per two-week cycle with scope agreed at the start of each. You get budget predictability and the ability to change direction between cycles.",
      },
      {
        question: "Should discovery be paid separately?",
        answer:
          "Yes. It keeps the incentive honest — a vendor doing free discovery needs to win the build to recover the cost, which biases the recommendation. Paid discovery means they can tell you not to proceed.",
      },
      {
        question: "What if the vendor's estimate is clearly too low?",
        answer:
          "Ask what is excluded and what happens if they are wrong. A low bid with vague scope almost always means change requests later. Compare scope line by line rather than comparing headline numbers.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-development-cost", "agency-vs-freelancer", "web-application-development-cost"],
    readMore: [
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "buy-vs-build-software",
    group: "compare",
    title: "Buy vs build: should you develop custom software?",
    seoTitle: "Buy vs Build Software: How to Decide",
    description:
      "A practical framework for deciding whether to buy off-the-shelf software or build custom — including the total cost of ownership most build cases ignore.",
    excerpt:
      "Most companies should buy. Here is the honest test for when building is genuinely the right call.",
    eyebrow: "Comparison",
    primaryKeyword: "buy vs build software",
    secondaryKeywords: [
      "custom software vs off the shelf",
      "should we build custom software",
      "build or buy decision framework",
      "off the shelf software limitations",
    ],
    answer:
      "Buy when the process is standard for your industry and a product covers it well. Build when the process is your competitive advantage, when no product covers the requirement, or when licence plus workaround costs exceed the build over three years. Most companies should buy, and integration is usually the real need rather than a new system.",
    intro:
      "We build custom software, and we talk several enquiries a year out of it. A $200-a-month tool that fits beats a $40,000 build that fits slightly better.",
    proof: [
      { metric: "3 years", label: "The evaluation window" },
      { metric: "Integration", label: "Often the real need" },
      { metric: "TCO", label: "Not just build cost" },
      { metric: "Buy", label: "The right default" },
    ],
    deliverables: [
      {
        title: "Licence cost",
        description:
          "Per-seat pricing compounds. 50 users at $40/month is $24,000 a year — which changes the comparison.",
        icon: "Receipt",
      },
      {
        title: "Workaround cost",
        description:
          "Hours spent monthly working around a tool that nearly fits. Rarely measured, often the largest number.",
        icon: "Clock",
      },
      {
        title: "Build cost",
        description:
          "$15,000–$75,000 typically, plus 15–25% annually for maintenance and enhancement.",
        icon: "Code2",
      },
      {
        title: "Switching cost",
        description:
          "Vendor lock-in, data portability and the cost of migrating if the product changes direction.",
        icon: "Unlock",
      },
      {
        title: "Time to value",
        description:
          "Buying is weeks. Building is months. For an urgent problem this often decides it alone.",
        icon: "Timer",
      },
      {
        title: "Integration",
        description:
          "$1,500–$8,000 to connect existing tools — frequently the actual solution to a 'we need custom software' brief.",
        icon: "Plug",
      },
    ],
    sections: [
      {
        heading: "When should you build?",
        body: [
          {
            type: "table",
            head: ["Build when", "Buy when"],
            rows: [
              ["The process is your competitive advantage", "The process is standard for your industry"],
              ["No product covers the requirement", "Several products cover it well"],
              ["Licence plus workarounds exceed build cost", "Subscription is cheaper than building"],
              ["You must own the data and rules", "Vendor lock-in is acceptable"],
              ["Integration between systems is the need", "One tool would replace several"],
              ["Requirements are stable and understood", "Requirements are still moving"],
            ],
          },
          {
            type: "callout",
            title: "The competitive advantage test",
            text: "Would your competitors gain from having identical software? If yes, buy it — you are not differentiating and you would be paying to rebuild a commodity. If it would genuinely give them your edge, that is the case for building.",
          },
        ],
      },
      {
        heading: "How do you compare total cost over three years?",
        body: [
          {
            type: "table",
            head: ["", "Buy", "Build"],
            rows: [
              ["Year 1", "Licences + setup + training", "Build cost + deployment"],
              ["Years 2–3", "Licences + seat growth", "Maintenance at 15–25% of build"],
              ["Workaround time", "Often significant", "Should be near zero"],
              ["Integration work", "$1,500 – $8,000 each", "Built in"],
              ["Switching risk", "Real, and rising", "None"],
              ["Typical 3-year total", "$20,000 – $90,000", "$25,000 – $110,000"],
            ],
          },
          {
            type: "p",
            text: "The comparison is closer than most vendors on either side admit. What usually tips it is workaround time — the hours your team spends every month compensating for a tool that nearly fits.",
          },
        ],
      },
      {
        heading: "What is the third option?",
        answer:
          "Buy the tools and build only the integration and the specific gap — usually a fraction of the cost of either extreme.",
        body: [
          {
            type: "list",
            items: [
              "Keep your CRM, accounting and operational tools. They do their jobs.",
              "Build the integration layer so data stops being copied by hand.",
              "Build only the specific screen or workflow no product handles.",
              "Total cost is often $5,000–$20,000 rather than $40,000+.",
              "You keep vendor support and updates for everything commodity.",
            ],
          },
          {
            type: "p",
            text: "A large share of enquiries that arrive as 'we need custom software' are actually this. It is cheaper, faster and lower risk, and we recommend it regularly.",
          },
        ],
      },
      {
        heading: "What questions should you answer first?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "How many hours a month does the current process waste? Measure, do not estimate.",
              "Have you genuinely evaluated three products, or dismissed them from a demo?",
              "Which requirements are real and which are 'how we have always done it'?",
              "Who maintains custom software in three years when the person who commissioned it has left?",
              "What is the cost of the problem continuing for another year?",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do we know if a product really cannot do it?",
        answer:
          "Run a genuine trial with real data and the people who will use it, not a sales demo. Most 'it cannot do X' conclusions come from a demo rather than a trial, and a surprising number turn out to be configuration.",
      },
      {
        question: "Is custom software more expensive to maintain?",
        answer:
          "Yes — budget 15–25% of build cost annually. Bought software has that in the licence fee. The difference is that you control the roadmap rather than a vendor deciding what to build next.",
      },
      {
        question: "What if we outgrow the product later?",
        answer:
          "That is a good problem and a normal path: buy now, build later when the requirement is proven and understood. Building first for a future you have not reached is how budgets get wasted.",
      },
      {
        question: "Will you tell us not to build?",
        answer:
          "Yes, and we do several times a year. We would rather do a $6,000 integration that works than a $40,000 build you did not need — the first one leads to more work, the second leads to a bad reference.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["custom-software-development", "web-application-development-cost", "api-development-services"],
    readMore: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "nextjs-vs-webflow",
    group: "compare",
    title: "Next.js vs Webflow for business websites",
    seoTitle: "Next.js vs Webflow: Which for Your Site?",
    description:
      "Webflow or a custom Next.js build — compared on editing, cost, performance, scalability and the point at which teams outgrow a visual builder.",
    excerpt:
      "Webflow is excellent until you need something it does not do. Here is where that line usually falls.",
    eyebrow: "Comparison",
    primaryKeyword: "next.js vs webflow",
    secondaryKeywords: [
      "webflow vs custom development",
      "webflow alternatives",
      "webflow to nextjs",
      "visual builder vs custom code",
    ],
    answer:
      "Webflow suits marketing sites where a non-technical team needs to build and edit pages independently and the design is achievable within its constraints. Next.js suits sites needing application functionality, deep integrations, unusual performance requirements, or a component system shared with a product. Many companies start on Webflow and migrate when they outgrow it.",
    intro:
      "Webflow is a genuinely good product and we recommend it regularly. The question is not which is better but where the boundary is for your team.",
    proof: [
      { metric: "$20–$50", label: "Webflow monthly" },
      { metric: "Marketing team", label: "Webflow's strength" },
      { metric: "App logic", label: "Where Webflow stops" },
      { metric: "Migratable", label: "Not a permanent choice" },
    ],
    deliverables: [
      {
        title: "Editing independence",
        description:
          "Webflow's strongest advantage — marketers build and publish pages without touching a developer.",
        icon: "PenTool",
      },
      {
        title: "Cost",
        description:
          "Webflow build $2,500–$10,000 plus $20–$50/month. Next.js $4,000–$15,000 with near-zero hosting.",
        icon: "Receipt",
      },
      {
        title: "Performance",
        description:
          "Webflow is decent; Next.js gives full control over bundles, images and rendering strategy.",
        icon: "Gauge",
      },
      {
        title: "Application logic",
        description:
          "Webflow has real limits on authentication, dashboards and complex state. Next.js has none.",
        icon: "Code2",
      },
      {
        title: "Integrations",
        description:
          "Webflow handles common ones; anything bespoke means embedded scripts or an external service.",
        icon: "Plug",
      },
      {
        title: "Ownership",
        description:
          "Next.js code is yours entirely. Webflow exports are usable but lose CMS functionality.",
        icon: "Unlock",
      },
    ],
    sections: [
      {
        heading: "Where does each win?",
        body: [
          {
            type: "table",
            head: ["Requirement", "Webflow", "Next.js"],
            rows: [
              ["Marketers publish independently", "Excellent", "Needs a CMS setup"],
              ["Time to first launch", "Faster", "Slower"],
              ["Design freedom", "Very good", "Unlimited"],
              ["Authentication and dashboards", "Limited", "Full"],
              ["Complex integrations", "Awkward", "Straightforward"],
              ["Performance ceiling", "Good", "Excellent"],
              ["Shared components with a product", "Not possible", "Yes"],
              ["Monthly cost", "$20 – $50", "$0 – $50"],
            ],
          },
        ],
      },
      {
        heading: "When do teams outgrow Webflow?",
        answer:
          "When they need real application functionality, when workarounds accumulate, or when the marketing site must share components with a product.",
        body: [
          {
            type: "list",
            items: [
              "You need gated content, user accounts or a dashboard.",
              "Integrations require server-side logic that embedded scripts cannot do cleanly.",
              "The site has grown to hundreds of pages and CMS limits are being hit.",
              "Page speed matters commercially and embedded scripts have accumulated.",
              "Your product is React and maintaining two design systems has become a cost.",
              "You are paying a Webflow specialist for changes an engineer could make faster in code.",
            ],
          },
          {
            type: "callout",
            title: "Outgrowing it is a success, not a mistake",
            text: "Launching on Webflow to get to market quickly and migrating two years later is a perfectly good sequence. The mistake is choosing a custom build on day one for a company that needed to launch in three weeks.",
          },
        ],
      },
      {
        heading: "What does migrating look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Crawl the Webflow site and record every URL, title and meta description.",
              "Export CMS collections and map them to a content model in a headless CMS.",
              "Rebuild the design as a component system rather than copying page by page.",
              "Map every URL with 301 redirects and test against the crawl before launch.",
              "Launch, then monitor coverage and rankings daily for the first fortnight.",
            ],
          },
          {
            type: "p",
            text: "Budget $6,000–$18,000 for a typical marketing site migration. It is one of the lower-risk migrations because Webflow sites tend to have clean URL structures and well-organised content.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Webflow bad for SEO?",
        answer:
          "No. Webflow gives control over metadata, canonicals, redirects and sitemaps, and renders server-side HTML. It is a perfectly capable SEO platform. Constraints appear with very large sites and unusual structured data requirements.",
      },
      {
        question: "Can we export our Webflow site?",
        answer:
          "You can export static HTML and CSS, but CMS-driven content and form handling do not come with it. In practice a migration is a rebuild informed by the export rather than a lift and shift.",
      },
      {
        question: "Which is faster?",
        answer:
          "A well-built Next.js site, because you control bundling, images and rendering. Webflow is respectable out of the box and degrades as embedded scripts and integrations accumulate.",
      },
      {
        question: "Should a startup use Webflow?",
        answer:
          "Very often, yes, for the first marketing site. It gets you live in weeks, costs little, and lets the team change messaging daily while you are still figuring out positioning. Migrate when it starts blocking you.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["nextjs-development", "website-development-cost", "headless-cms-development"],
    readMore: [
      { label: "SSR, SSG or ISR", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "staff-augmentation-vs-managed-team",
    group: "compare",
    title: "Staff augmentation vs a managed team",
    seoTitle: "Staff Augmentation vs Managed Team",
    description:
      "Two outsourcing models compared — who manages the work, who is accountable for delivery, what each costs, and which fits your management capacity.",
    excerpt:
      "The choice is not about cost. It is about whether you have someone with time to manage engineers.",
    eyebrow: "Comparison",
    primaryKeyword: "staff augmentation vs managed team",
    secondaryKeywords: [
      "team extension vs managed services",
      "dedicated team vs staff augmentation",
      "outsourcing engagement models",
      "managed development team",
    ],
    answer:
      "Staff augmentation gives you engineers who work in your process under your management — cheaper per person, but you own delivery. A managed team includes a technical lead accountable for delivery against your roadmap — more expensive, but you manage outcomes rather than individuals. Choose based on whether you have engineering management capacity.",
    intro:
      "The most common expensive mistake here is choosing augmentation because it is cheaper per head, then discovering nobody internally has time to direct the work.",
    proof: [
      { metric: "You manage", label: "Augmentation" },
      { metric: "We manage", label: "Managed team" },
      { metric: "~25–35%", label: "Managed team premium" },
      { metric: "Capacity", label: "The deciding question" },
    ],
    deliverables: [
      {
        title: "Who directs the work",
        description:
          "Augmentation: your manager, daily. Managed: our lead, against priorities you set.",
        icon: "Compass",
      },
      {
        title: "Accountability",
        description:
          "Augmentation: yours. Managed: shared, with a named lead answerable for what ships.",
        icon: "UserCheck",
      },
      {
        title: "Cost",
        description:
          "Augmentation $3,800–$6,500 per engineer. Managed teams from $8,500 including lead and process.",
        icon: "Receipt",
      },
      {
        title: "Process",
        description:
          "Augmentation adopts yours entirely. Managed brings its own, aligned to yours.",
        icon: "Workflow",
      },
      {
        title: "Reporting",
        description:
          "Augmentation: your board tells you. Managed: cycle demos and written delivery reports.",
        icon: "BarChart3",
      },
      {
        title: "Composition",
        description:
          "Augmentation is per person. Managed teams shift skill mix as the work changes.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "How do they compare?",
        body: [
          {
            type: "table",
            head: ["", "Staff augmentation", "Managed team"],
            rows: [
              ["You provide", "Management and priorities", "Priorities only"],
              ["We provide", "Engineers", "Engineers, lead, process, QA"],
              ["Monthly cost", "From $3,800 per engineer", "From $8,500 for the team"],
              ["Your time required", "Several hours weekly per engineer", "A weekly planning call"],
              ["Delivery risk", "Yours", "Shared"],
              ["Flexibility", "Add or remove people", "Shift team composition"],
              ["Best when", "You have engineering leadership", "You need delivery ownership"],
            ],
          },
        ],
      },
      {
        heading: "What does the premium actually buy?",
        answer:
          "A technical lead who plans, reviews, reports and is accountable when a cycle slips.",
        body: [
          {
            type: "list",
            items: [
              "Planning: turning your priorities into estimated, sequenced work.",
              "Architecture: decisions made and documented without waiting on you.",
              "Code review: internal quality control before anything reaches your review.",
              "Reporting: what shipped, what slipped, and why — proactively.",
              "Escalation: one person answerable rather than a diffuse pool.",
              "Continuity: onboarding and offboarding handled without your involvement.",
            ],
          },
          {
            type: "callout",
            title: "Count your own hours",
            text: "Managing three augmented engineers takes roughly five to eight hours a week of a senior person's time. At a loaded rate of $100 an hour that is $2,000–$3,200 a month of your cost — often more than the managed premium.",
          },
        ],
      },
      {
        heading: "Which should you choose?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Do you have an engineering manager or strong technical lead with spare capacity? If yes, augmentation.",
              "Is the work clearly specified with a maintained backlog? If yes, augmentation works well.",
              "Do you need someone accountable for a roadmap rather than for tickets? If yes, managed.",
              "Is this your first significant engineering effort? Managed is usually safer.",
              "Are you filling a gap while recruiting? Augmentation, with a handover plan.",
            ],
          },
        ],
      },
      {
        heading: "Can you switch between them?",
        body: [
          {
            type: "p",
            text: "Yes, in both directions, and clients do. A common path is starting managed while you build internal capability, then moving to augmentation once you have hired an engineering manager who can direct the work.",
          },
          {
            type: "p",
            text: "The reverse also happens: augmentation that is not delivering because nobody has time to manage it, converted to a managed team with a lead. That conversation is worth having early rather than after two disappointing quarters.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a managed team just augmentation with a markup?",
        answer:
          "It is augmentation plus a lead who plans, reviews and reports, and contractual accountability for delivery. If a vendor charges the premium without providing those, it is a markup — ask specifically what the lead does and who escalation goes to.",
      },
      {
        question: "Can we start with one engineer and grow?",
        answer:
          "Yes, and most clients do. One or two augmented engineers first, adding a lead and design capacity once the relationship is established and the volume of work justifies it.",
      },
      {
        question: "Who owns the code in each model?",
        answer:
          "You do, in both. Work happens in your repository under your organisation with IP assigned from the first commit, regardless of engagement model.",
      },
      {
        question: "What if we are unhappy with someone?",
        answer:
          "Tell us and we replace them with an overlap for handover. That applies to both models and is a normal request, not a relationship problem.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["staff-augmentation-services", "dedicated-development-team", "in-house-vs-outsourced-development"],
    readMore: [
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "rebuild-vs-refactor",
    group: "compare",
    title: "Rebuild vs refactor: what to do with legacy code",
    seoTitle: "Rebuild vs Refactor Legacy Software",
    description:
      "When to rewrite a legacy application versus improving it incrementally — the strangler pattern, why rewrites fail, and how to decide honestly.",
    excerpt:
      "Rewrites feel decisive and fail often. Here is the honest test for when one is justified.",
    eyebrow: "Comparison",
    primaryKeyword: "rebuild vs refactor",
    secondaryKeywords: [
      "legacy code rewrite",
      "software rewrite vs refactor",
      "strangler fig pattern",
      "legacy system modernization",
    ],
    answer:
      "Refactor incrementally in most cases — rewrites take longer than estimated, freeze feature delivery, and reintroduce bugs that were fixed years ago. Rebuild only when the platform is unsupported, the technology cannot meet a hard requirement, or nobody can safely change the code. The strangler pattern gets most of the benefit of a rewrite without the risk.",
    intro:
      "Every engineer who inherits a codebase wants to rewrite it. Sometimes they are right. Usually the mess encodes years of business rules nobody has written down.",
    proof: [
      { metric: "2–3×", label: "Typical rewrite overrun" },
      { metric: "Strangler", label: "The lower-risk path" },
      { metric: "Feature freeze", label: "The hidden rewrite cost" },
      { metric: "Refactor", label: "The right default" },
    ],
    deliverables: [
      {
        title: "Incremental refactor",
        description:
          "Improve the code you have, in the areas you are already touching. Continuous delivery never stops.",
        icon: "RefreshCw",
      },
      {
        title: "Strangler pattern",
        description:
          "New system grows around the old one, route by route, until the old one is unused and can be removed.",
        icon: "GitBranch",
      },
      {
        title: "Full rewrite",
        description:
          "Build the replacement, then cut over. Highest risk, occasionally the only honest option.",
        icon: "Rocket",
      },
      {
        title: "Characterisation tests",
        description:
          "Tests that pin current behaviour — including the bugs — so changes cannot silently break something.",
        icon: "FlaskConical",
      },
      {
        title: "Dependency updates",
        description:
          "Often the actual need. An unsupported framework version is a security problem, not an architecture one.",
        icon: "ShieldCheck",
      },
      {
        title: "Honest assessment",
        description:
          "A paid audit that tells you which of these you need, including 'leave it alone'.",
        icon: "Compass",
      },
    ],
    sections: [
      {
        heading: "Why do rewrites fail?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "The old system encodes years of undocumented business rules and edge cases. The rewrite discovers them one production incident at a time.",
              "Feature delivery freezes. The business waits while competitors ship.",
              "Estimates are made against the visible functionality, not the invisible rules.",
              "Two systems must be maintained during the transition, doubling the operational load.",
              "The team that built the original has usually left, taking the reasoning with them.",
              "Bugs fixed years ago reappear, because the fix was in code nobody read before discarding.",
            ],
          },
          {
            type: "callout",
            title: "The rules are the asset",
            text: "Ugly code that has run in production for six years contains hundreds of small corrections made in response to real problems. That accumulated correctness is the valuable part, and it is what a rewrite throws away.",
          },
        ],
      },
      {
        heading: "When is a rebuild justified?",
        body: [
          {
            type: "table",
            head: ["Rebuild when", "Refactor when"],
            rows: [
              ["Platform is unsupported and unpatchable", "Framework is old but maintained"],
              ["Technology cannot meet a hard requirement", "It is slow but fixable"],
              ["No developer will work on it", "It is unpleasant but workable"],
              ["No tests and no safe change path", "Tests can be added incrementally"],
              ["Cost of change exceeds cost of replacement", "Changes are still tractable"],
              ["Product direction has fundamentally changed", "Same product, tired code"],
            ],
          },
        ],
      },
      {
        heading: "How does the strangler pattern work?",
        answer:
          "New functionality is built in the new system, traffic is routed piece by piece, and the old system shrinks until it can be removed.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Put a routing layer in front of the existing application.",
              "Build the first new route or module in the new stack, sharing the same database initially.",
              "Route that path to the new system; everything else continues to the old one.",
              "Repeat, prioritising areas with the most change or the worst pain.",
              "Migrate data ownership module by module once behaviour is proven.",
              "Delete the old system when nothing routes to it.",
            ],
          },
          {
            type: "p",
            text: "Feature delivery continues throughout, each step is independently reversible, and the project can be paused if priorities change. It is slower in total than a clean rewrite would be if a clean rewrite ever went to plan.",
          },
        ],
      },
      {
        heading: "What should you do first?",
        body: [
          {
            type: "list",
            items: [
              "Get an honest audit. What is actually wrong — architecture, dependencies, tests, or the team's familiarity?",
              "Update dependencies. Sometimes the entire problem is three major versions of drift.",
              "Add characterisation tests around the highest-risk area, so change becomes possible.",
              "Fix the specific pain, whether that is performance, a broken deploy or one unmaintainable module.",
              "Reassess. A meaningful share of rewrite requests dissolve after these four steps.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a rewrite actually take?",
        answer:
          "Plan for two to three times the initial estimate. The gap is almost entirely undocumented business rules discovered during the work — which is precisely the part nobody can estimate upfront.",
      },
      {
        question: "Our developers say the code is unmaintainable. Are they right?",
        answer:
          "Sometimes. Also, every engineer finds unfamiliar code unmaintainable. Ask for specifics: which changes are impossible, and why. Concrete examples distinguish a genuine problem from unfamiliarity.",
      },
      {
        question: "Can you refactor a codebase you did not write?",
        answer:
          "Yes, and it is common. We start with a paid audit so you get an honest assessment before committing, including whether the honest answer is that it does not need our involvement.",
      },
      {
        question: "What about rewriting just the frontend?",
        answer:
          "Frequently the best option. The frontend is where users feel the age, and it can usually be replaced behind the same API incrementally, page by page, with far lower risk than a full-stack rewrite.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["custom-software-development", "react-development", "web-application-development-cost"],
    readMore: [
      { label: "Database migrations safely", href: "/blog/database-migrations-safely" },
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
    ],
    publishedAt: "2026-08-13",
  },
];
