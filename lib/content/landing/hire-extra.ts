import type { LandingPage } from "@/lib/content/landing/types";

export const hirePagesExtra: LandingPage[] = [
  {
    slug: "hire-frontend-developers",
    group: "hire",
    title: "Hire frontend developers",
    seoTitle: "Hire Frontend Developers | Remote & Senior | ROVQIX",
    description:
      "Hire senior frontend developers for React and Next.js work — accessible, performant interfaces built from your designs, with overlapping hours for US and UK teams.",
    excerpt:
      "Frontend engineers who care about the 320px view, the empty state and the keyboard path.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire frontend developers",
    secondaryKeywords: [
      "remote frontend developer",
      "senior frontend engineer for hire",
      "frontend developer contractor",
      "hire ui developers",
    ],
    answer:
      "ROVQIX provides senior frontend developers working in React, Next.js and TypeScript — implementing designs faithfully across breakpoints, meeting WCAG 2.2 AA, and holding a performance budget. Engineers join your repository and process with at least four hours of daily overlap.",
    intro:
      "Frontend quality shows up in the parts nobody demos: how the form behaves when the network drops, what the table does at 320 pixels, whether the modal traps focus correctly.",
    proof: [
      { metric: "3 breakpoints", label: "Built, not assumed" },
      { metric: "WCAG 2.2 AA", label: "Working standard" },
      { metric: "All states", label: "Loading, empty, error" },
      { metric: "2 weeks", label: "Trial period" },
    ],
    deliverables: [
      {
        title: "Faithful implementation",
        description:
          "Designs built to match, with gaps raised as a batch of questions rather than resolved by silent guesswork.",
        icon: "PenTool",
      },
      {
        title: "Every state handled",
        description:
          "Loading, empty, error, partial and offline states built as part of the feature, not filed as follow-up tickets.",
        icon: "Layers",
      },
      {
        title: "Responsive in practice",
        description:
          "Tested at real breakpoints on real devices, including the awkward tablet width everyone skips.",
        icon: "LayoutTemplate",
      },
      {
        title: "Accessibility",
        description:
          "Semantic markup, keyboard operation, focus management and screen reader checks on primary flows.",
        icon: "Accessibility",
      },
      {
        title: "Performance budget",
        description:
          "Bundle size and interaction latency treated as acceptance criteria, enforced in CI rather than reviewed later.",
        icon: "Gauge",
      },
      {
        title: "Reusable components",
        description:
          "Work that adds to your design system rather than adding a fourth slightly different button.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "What separates a senior frontend engineer?",
        body: [
          {
            type: "table",
            head: ["Mid-level output", "Senior output"],
            rows: [
              ["Happy path works", "Every state designed and built"],
              ["Looks right on their laptop", "Verified across breakpoints and devices"],
              ["Component takes 14 props", "Composable API that stays readable"],
              ["Works with a mouse", "Works with a keyboard and screen reader"],
              ["Adds a library for each need", "Weighs bundle cost against benefit"],
              ["Asks after being blocked", "Raises questions before signing off"],
            ],
          },
          {
            type: "callout",
            title: "The interview question we ask",
            text: "Describe the last accessibility bug you fixed. Engineers who have genuinely shipped for real users have an answer immediately. It is the fastest signal we have found.",
          },
        ],
      },
      {
        heading: "How do engineers work with your designers?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Read the whole flow before starting, and send every question as one batch.",
              "Flag anything that will cause an accessibility or performance problem before building it.",
              "Build the shared components first so the design system grows rather than fragments.",
              "Share a preview deployment early so designers review something real, not a screenshot.",
              "Record design decisions in the repository so the next person does not re-litigate them.",
            ],
          },
        ],
      },
      {
        heading: "What if we need design as well?",
        body: [
          {
            type: "p",
            text: "We can pair a frontend engineer with a product designer from the same studio, which removes the handoff gap entirely — designs are checked against implementation cost as they are made.",
          },
          {
            type: "p",
            text: "Equally, many clients have their own designer and just need build capacity. Both work; tell us which during the first call.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$2,000 / month",
        timeline: "20 hours per week",
        bestFor: "Steady frontend capacity",
        includes: [
          "One senior frontend engineer, half time",
          "Async daily updates",
          "Weekly planning call",
          "Code review participation",
        ],
      },
      {
        name: "Full-time",
        range: "$3,800 – $6,000 / month",
        timeline: "40 hours per week",
        bestFor: "A dedicated engineer on your team",
        includes: [
          "One senior engineer, full time",
          "Your repository and process",
          "Standups and sprint participation",
          "Direct Slack access",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Frontend + design",
        range: "from $6,500 / month",
        timeline: "Ongoing",
        bestFor: "Teams without in-house design",
        includes: [
          "One engineer and part-time designer",
          "Design system maintenance",
          "Design QA during build",
          "Delivery reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Can they build from Figma files?",
        answer:
          "Yes, that is the normal case. We ask for the file with components and states where possible, and send a single batch of questions where things are ambiguous rather than guessing.",
      },
      {
        question: "Do they write tests?",
        answer:
          "Yes — component tests with Testing Library for interactive behaviour, plus end-to-end coverage on the flows that matter commercially.",
      },
      {
        question: "What frameworks do they work in?",
        answer:
          "React and Next.js with TypeScript, plus Tailwind or CSS modules depending on your codebase. We adopt your existing stack rather than importing preferences.",
      },
      {
        question: "Can they take over an existing frontend?",
        answer:
          "Yes. The first week is deliberately weighted toward small tickets and heavy review so they learn the codebase before working independently.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["hire-react-developers", "hire-nextjs-developers", "ui-ux-design"],
    readMore: [
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "hire-typescript-developers",
    group: "hire",
    title: "Hire TypeScript developers",
    seoTitle: "Hire TypeScript Developers | Full Stack | ROVQIX",
    description:
      "Hire TypeScript developers for frontend, backend or full-stack work — strict typing, shared contracts across the stack, and types that catch bugs rather than decorate code.",
    excerpt:
      "Engineers who use the type system to prevent bugs, not to add annotations after the fact.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire typescript developers",
    secondaryKeywords: [
      "typescript developer for hire",
      "remote typescript engineer",
      "typescript full stack developer",
      "hire ts developers",
    ],
    answer:
      "ROVQIX provides TypeScript developers for frontend, backend and full-stack work — using strict mode, shared types across the client and server boundary, and schema validation at runtime boundaries where types alone cannot help.",
    intro:
      "TypeScript pays for itself when the type system encodes real constraints. It costs you time when it is used as documentation with `any` sprinkled through the difficult parts.",
    proof: [
      { metric: "Strict mode", label: "Non-negotiable" },
      { metric: "Shared types", label: "Client to server" },
      { metric: "Validated", label: "At every boundary" },
      { metric: "No any", label: "Except deliberately" },
    ],
    deliverables: [
      {
        title: "Strict configuration",
        description:
          "Strict mode with no implicit any, plus the flags most teams skip — unchecked index access and exact optional properties.",
        icon: "ShieldCheck",
      },
      {
        title: "Types that model the domain",
        description:
          "Discriminated unions for state so impossible combinations cannot be represented, instead of optional fields everywhere.",
        icon: "Blocks",
      },
      {
        title: "Runtime validation",
        description:
          "Zod or equivalent at every external boundary — types disappear at runtime, and your API responses are not guaranteed.",
        icon: "FlaskConical",
      },
      {
        title: "Shared contracts",
        description:
          "One source of truth for API types so a backend rename becomes a compile error, not a production incident.",
        icon: "GitBranch",
      },
      {
        title: "Generated types",
        description:
          "Database and API types generated from schemas rather than hand-written and quietly drifting out of date.",
        icon: "Database",
      },
      {
        title: "Pragmatic typing",
        description:
          "Type-level cleverness only where it earns its complexity. Unreadable generics are a cost, not a credential.",
        icon: "Scale",
      },
    ],
    sections: [
      {
        heading: "What does good TypeScript look like?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Weak: every combination is representable, including impossible ones
type State = {
  loading: boolean;
  data?: User[];
  error?: string;
};

// Strong: the compiler rejects "loading with an error and data"
type State =
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };`,
          },
          {
            type: "p",
            text: "The second version removes a category of bug entirely. You cannot forget to handle a case, because the compiler will not let the code through until you do.",
          },
        ],
      },
      {
        heading: "Why validate at runtime if you have types?",
        answer:
          "Because types are erased at compile time. Nothing checks that an API response actually matches the interface you declared.",
        body: [
          {
            type: "list",
            items: [
              "API responses: the server may have changed, or may be a version behind.",
              "Form input: user data is untrusted by definition.",
              "Environment variables: strings that may be missing or malformed at boot.",
              "Webhooks and third-party payloads: outside your control entirely.",
              "Anything from localStorage: written by a previous version of your own code.",
            ],
          },
          {
            type: "callout",
            title: "Validate once, infer the type",
            text: "Define a schema, derive the TypeScript type from it, and validate at the boundary. One definition covers both the compile-time and runtime guarantee, and they cannot drift apart.",
          },
        ],
      },
      {
        heading: "How do you handle an existing untyped codebase?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Turn on strict mode for new files only, so the boundary stops expanding immediately.",
              "Type the data layer first — the highest-value surface for catching real bugs.",
              "Convert file by file, in the areas being actively worked on rather than as a separate project.",
              "Replace `any` with `unknown` plus validation, which forces the check rather than hiding it.",
              "Add CI enforcement so the type coverage cannot regress.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$2,000 / month",
        timeline: "20 hours per week",
        bestFor: "Ongoing capacity",
        includes: [
          "One senior TypeScript engineer, half time",
          "Frontend or backend focus",
          "Async daily updates",
          "Weekly call",
        ],
      },
      {
        name: "Full-time",
        range: "$3,800 – $6,500 / month",
        timeline: "40 hours per week",
        bestFor: "A dedicated engineer",
        includes: [
          "One senior engineer, full time",
          "Full-stack capability",
          "Your process and repository",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Migration project",
        range: "$4,000 – $15,000",
        timeline: "3–10 weeks",
        bestFor: "Moving JavaScript to TypeScript",
        includes: [
          "Incremental migration plan",
          "Data layer and API typing",
          "Runtime validation at boundaries",
          "CI enforcement and team guidance",
        ],
      },
    ],
    faqs: [
      {
        question: "Is TypeScript worth it on a small project?",
        answer:
          "Usually yes, past a few thousand lines — the editor support and refactoring confidence pay for themselves quickly. For a genuinely small script it can be overhead, and we will say so.",
      },
      {
        question: "Can you migrate our JavaScript codebase?",
        answer:
          "Yes, incrementally. Both can coexist, so there is no big-bang rewrite. We type the highest-value areas first and let the rest follow the work.",
      },
      {
        question: "Do you use Zod?",
        answer:
          "Frequently, yes — or an equivalent. The important thing is one schema producing both the runtime check and the static type, so they cannot diverge.",
      },
      {
        question: "What about type-level programming?",
        answer:
          "Used sparingly. Complex conditional types can be genuinely valuable in a library API and are usually a liability in application code, where the next engineer has to read them.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["hire-full-stack-developers", "hire-nodejs-developers", "hire-react-developers"],
    readMore: [
      { label: "TypeScript patterns worth knowing", href: "/blog/typescript-patterns-worth-knowing" },
      { label: "Environment variables and config", href: "/blog/environment-variables-and-config" },
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "hire-devops-engineers",
    group: "hire",
    title: "Hire DevOps engineers",
    seoTitle: "Hire DevOps Engineers | Remote | ROVQIX",
    description:
      "Hire DevOps engineers for CI/CD, infrastructure as code, containers, monitoring and cloud cost work — for teams that need platform capability without a platform team.",
    excerpt:
      "Platform capability without hiring a platform team, including the runbooks so you are not dependent on us.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire devops engineers",
    secondaryKeywords: [
      "remote devops engineer",
      "devops contractor for hire",
      "cloud infrastructure engineer",
      "hire site reliability engineer",
    ],
    answer:
      "ROVQIX provides DevOps engineers for CI/CD pipelines, Terraform infrastructure, containerised deployments, monitoring and cloud cost optimisation on AWS, Google Cloud and Vercel — including the runbooks and documentation your team needs to operate it.",
    intro:
      "Most teams under thirty engineers do not need a full-time platform hire. They need someone competent for a few months to build the foundations properly, then a fraction of a person to maintain them.",
    proof: [
      { metric: "Terraform", label: "Everything as code" },
      { metric: "Runbooks", label: "Delivered, not promised" },
      { metric: "20–40%", label: "Typical cost reduction" },
      { metric: "Part-time", label: "Available from 10 hrs/wk" },
    ],
    deliverables: [
      {
        title: "Pipeline engineering",
        description:
          "Fast, reliable CI with preview environments per pull request and a deploy path people trust.",
        icon: "GitBranch",
      },
      {
        title: "Infrastructure as code",
        description:
          "Terraform for every environment, so nothing important exists only because someone once clicked it in a console.",
        icon: "Code2",
      },
      {
        title: "Observability",
        description:
          "Logs, metrics, traces and alerts that are actionable — noisy alerting is worse than none at all.",
        icon: "Activity",
      },
      {
        title: "Security posture",
        description:
          "Secrets management, least-privilege access, dependency scanning and a documented patch cadence.",
        icon: "ShieldCheck",
      },
      {
        title: "Cost management",
        description:
          "Finding where the bill concentrates and fixing the three or four decisions responsible for most of it.",
        icon: "Receipt",
      },
      {
        title: "Knowledge transfer",
        description:
          "Runbooks, architecture docs and training sessions so your engineers can operate it without us.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "Do you need a full-time DevOps hire?",
        body: [
          {
            type: "table",
            head: ["Situation", "What usually fits"],
            rows: [
              ["Under 10 engineers, one app", "Part-time, 10–20 hrs/week"],
              ["10–30 engineers, few services", "Project to build, then part-time"],
              ["Migration or cloud move", "Full-time for the project duration"],
              ["30+ engineers, many services", "Hire in-house; we can help you start"],
              ["Compliance deadline", "Full-time for 2–3 months"],
            ],
          },
          {
            type: "callout",
            title: "We will tell you to hire",
            text: "Past a certain size you need someone in-house who owns the platform and is available in your timezone during an incident. When you reach that point we will say so, and help with the handover rather than extending the engagement.",
          },
        ],
      },
      {
        heading: "What does the first month usually deliver?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Week 1: audit the current setup, document what exists, find the immediate risks.",
              "Week 2: fix the urgent items — usually secrets in the wrong place, no backups, or no monitoring.",
              "Week 3: pipeline work, so deploys become boring and preview environments exist.",
              "Week 4: infrastructure as code for the core environment, plus a first cost review.",
              "Throughout: runbooks written as work happens, not compiled at the end.",
            ],
          },
        ],
      },
      {
        heading: "How do you handle production access?",
        body: [
          {
            type: "list",
            items: [
              "Named accounts in your identity provider, never shared credentials.",
              "Least privilege, scoped to the current work and revoked when the engagement ends.",
              "Changes through the pipeline rather than manual console edits, with break-glass access agreed in advance.",
              "All access logged and reviewable by you at any time.",
              "Comfortable with your security questionnaire, device policy and background checks.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$1,800 / month",
        timeline: "10–15 hours per week",
        bestFor: "Maintaining an established platform",
        includes: [
          "Pipeline and infrastructure upkeep",
          "Monitoring and alert tuning",
          "Security patching",
          "Monthly cost review",
        ],
      },
      {
        name: "Project engagement",
        range: "$5,000 – $20,000",
        timeline: "3–8 weeks",
        bestFor: "Building the foundations properly",
        includes: [
          "CI/CD implementation",
          "Infrastructure as code",
          "Monitoring and secrets management",
          "Cost optimisation",
          "Runbooks and team training",
        ],
        featured: true,
      },
      {
        name: "Full-time",
        range: "$4,000 – $6,500 / month",
        timeline: "40 hours per week",
        bestFor: "Migrations and compliance deadlines",
        includes: [
          "One senior DevOps engineer, full time",
          "Cloud migration capability",
          "Incident support in agreed hours",
          "Documentation throughout",
        ],
      },
    ],
    faqs: [
      {
        question: "Which clouds do your engineers know?",
        answer:
          "AWS and Google Cloud primarily, plus Vercel, Cloudflare and Fly. Azure work is possible but is not our strongest area, and we will say so rather than learning on your budget.",
      },
      {
        question: "Can they do Kubernetes?",
        answer:
          "Yes, and they will usually ask whether you need it. Managed container services cover most web applications with far less operational burden, and recommending against Kubernetes is often the more useful answer.",
      },
      {
        question: "Will we be dependent on you afterwards?",
        answer:
          "Deliberately not. Everything is Terraform in your repository, documented, with runbooks and a training session. Vendor lock-in through undocumented infrastructure is a real risk and we work against it.",
      },
      {
        question: "Can they respond to incidents?",
        answer:
          "Within agreed hours on a retainer. For 24/7 coverage we build the monitoring, alerting and runbooks so your team can hold the pager, which is the sustainable arrangement.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["devops-and-cloud-services", "hire-nodejs-developers", "dedicated-development-team"],
    readMore: [
      { label: "Infrastructure as code basics", href: "/blog/infrastructure-as-code-basics" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "hire-ai-developers",
    group: "hire",
    title: "Hire AI developers",
    seoTitle: "Hire AI Developers | LLM & RAG Engineers | ROVQIX",
    description:
      "Hire AI engineers who ship production LLM features — retrieval pipelines, evaluation harnesses, streaming interfaces, cost control and guardrails, not demos.",
    excerpt:
      "Engineers who have taken an LLM feature past the demo and into production support.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire ai developers",
    secondaryKeywords: [
      "hire llm engineer",
      "rag developer for hire",
      "ai engineer remote",
      "hire generative ai developer",
    ],
    answer:
      "ROVQIX provides AI engineers who build production LLM features: retrieval-augmented generation over your data, evaluation harnesses that catch quality regressions, streaming interfaces, cost controls and safety guardrails — integrated into your existing web product.",
    intro:
      "The gap between a working demo and a production AI feature is mostly unglamorous: evaluation, caching, cost limits, error handling and deciding what happens when the model is confidently wrong.",
    proof: [
      { metric: "Eval-first", label: "Quality measured" },
      { metric: "Provider-agnostic", label: "Not locked in" },
      { metric: "Cost-capped", label: "Per user and org" },
      { metric: "Production", label: "Shipped, not prototyped" },
    ],
    deliverables: [
      {
        title: "Retrieval engineering",
        description:
          "Chunking, embeddings, hybrid search and reranking — where the quality of a RAG system is actually determined.",
        icon: "Database",
      },
      {
        title: "Evaluation harness",
        description:
          "A graded question set run in CI, so prompt and model changes are measured rather than eyeballed.",
        icon: "FlaskConical",
      },
      {
        title: "Streaming UX",
        description:
          "Token streaming with cancellation, retry and clear error states, so latency feels acceptable to users.",
        icon: "Zap",
      },
      {
        title: "Cost engineering",
        description:
          "Caching, model routing, prompt caching and hard per-user limits, instrumented from the first day.",
        icon: "Receipt",
      },
      {
        title: "Guardrails",
        description:
          "Input validation, output constraints, refusal handling and escalation to a human where stakes are real.",
        icon: "ShieldCheck",
      },
      {
        title: "Provider abstraction",
        description:
          "Built so switching between Claude, GPT and open models is a configuration change, not a rewrite.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "What does an AI engineer actually do day to day?",
        body: [
          {
            type: "list",
            items: [
              "Improving retrieval quality — which is usually chunking and ranking work, not prompt tweaking.",
              "Building and extending the evaluation set as new failure modes appear in production.",
              "Reducing cost per request without measurably degrading output quality.",
              "Handling the long tail: timeouts, rate limits, malformed outputs, provider incidents.",
              "Designing interfaces that communicate uncertainty honestly to users.",
              "Saying no to AI features that a database query would serve better.",
            ],
          },
        ],
      },
      {
        heading: "How do you evaluate LLM output quality?",
        answer:
          "With a fixed set of representative inputs, expected characteristics for each, and automated scoring plus human review on a sample.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Collect real user inputs, including the ones that went badly.",
              "Define what a good response contains for each — not an exact string, but required elements.",
              "Score automatically where possible: contains the citation, respects the format, refuses appropriately.",
              "Have a human review a sample every cycle, because automated scoring misses tone and subtle errors.",
              "Run the whole set in CI on every prompt, model or retrieval change.",
              "Track the score over time, so a slow degradation is visible before users report it.",
            ],
          },
          {
            type: "callout",
            title: "Without evals, you are guessing",
            text: "Teams without an evaluation set change a prompt, try three examples, and ship. Then quality drifts for a month before anyone notices. The eval harness is the single highest-value thing an AI engineer builds.",
          },
        ],
      },
      {
        heading: "What do we not do?",
        body: [
          {
            type: "list",
            items: [
              "Training or fine-tuning foundation models — that is a different specialism and we will refer you.",
              "Classical ML and data science: forecasting, recommendation systems, computer vision pipelines.",
              "Data engineering at warehouse scale.",
              "Anything that requires guarantees a probabilistic system cannot provide.",
            ],
          },
          {
            type: "p",
            text: "We build application-layer AI features into web products. That boundary is deliberate, and stating it upfront saves everyone a wasted call.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$2,500 / month",
        timeline: "20 hours per week",
        bestFor: "Iterating on an existing AI feature",
        includes: [
          "One AI engineer, half time",
          "Quality and cost improvement",
          "Evaluation maintenance",
          "Weekly reporting",
        ],
      },
      {
        name: "Full-time",
        range: "$4,500 – $7,000 / month",
        timeline: "40 hours per week",
        bestFor: "Building AI features into your product",
        includes: [
          "One senior AI engineer, full time",
          "Retrieval and evaluation engineering",
          "Full-stack integration capability",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Feasibility spike",
        range: "$2,500 – $5,000",
        timeline: "1–2 weeks",
        bestFor: "Finding out if it will work",
        includes: [
          "Prototype on your real data",
          "Quality assessment",
          "Cost projection at scale",
          "Honest go or no-go recommendation",
        ],
      },
    ],
    faqs: [
      {
        question: "Do your engineers train models?",
        answer:
          "No. They build application-layer features on top of hosted and open models — retrieval, evaluation, integration and interface. Model training is a different discipline and we will refer you to specialists.",
      },
      {
        question: "Which providers do they work with?",
        answer:
          "Anthropic's Claude, OpenAI, and open models where self-hosting is required. Work is built behind an abstraction so provider choice stays a configuration decision.",
      },
      {
        question: "Can they work with our data privately?",
        answer:
          "Yes. We configure retention settings explicitly, document what leaves your infrastructure, and can architect for self-hosted models where compliance demands it.",
      },
      {
        question: "How do we know the feature is actually good?",
        answer:
          "The evaluation harness gives you a number that moves when quality moves. That is the deliverable we insist on, because without it nobody can tell whether last week's prompt change helped.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["ai-integration-services", "hire-full-stack-developers", "saas-development"],
    readMore: [
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "API rate limiting strategies", href: "/blog/api-rate-limiting-strategies" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "hire-shopify-developers",
    group: "hire",
    title: "Hire Shopify developers",
    seoTitle: "Hire Shopify Developers | Theme & Headless | ROVQIX",
    description:
      "Hire Shopify developers for custom themes, app integrations, checkout extensions and headless storefronts — with the performance discipline most Shopify work lacks.",
    excerpt:
      "Shopify engineers who measure what each app costs you in load time before installing it.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire shopify developers",
    secondaryKeywords: [
      "shopify developer for hire",
      "remote shopify expert",
      "shopify plus developer",
      "liquid developer hire",
    ],
    answer:
      "ROVQIX provides Shopify developers for custom Liquid theme work, app integration, Shopify Functions, checkout extensions and headless storefronts on Next.js or Hydrogen — available per project or on a monthly retainer.",
    intro:
      "Most Shopify stores are slow for one reason: nobody ever measured what an app costs before installing it. Our engineers do that as a matter of routine.",
    proof: [
      { metric: "Liquid + JS", label: "Both, properly" },
      { metric: "App cost", label: "Measured in ms" },
      { metric: "Headless", label: "When it's justified" },
      { metric: "Peak-ready", label: "Load tested" },
    ],
    deliverables: [
      {
        title: "Custom theme work",
        description:
          "Liquid sections and blocks structured so merchandisers can build pages without breaking the design.",
        icon: "PenTool",
      },
      {
        title: "App integration and audit",
        description:
          "Measuring each app's real cost in page weight and main-thread time before it goes in.",
        icon: "Plug",
      },
      {
        title: "Checkout extensibility",
        description:
          "Upsells, custom fields, validation and delivery customisation through supported extension points.",
        icon: "CreditCard",
      },
      {
        title: "Shopify Functions",
        description:
          "Custom discount, shipping and payment logic running natively rather than as another third-party script.",
        icon: "Code2",
      },
      {
        title: "Headless storefronts",
        description:
          "Next.js or Hydrogen on the Storefront API when design and performance genuinely justify the build.",
        icon: "ShoppingBag",
      },
      {
        title: "Peak readiness",
        description:
          "Load testing, monitoring and a change freeze plan before your biggest trading days.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "What do Shopify clients most often need?",
        body: [
          {
            type: "list",
            items: [
              "A custom theme that matches the brand rather than a purchased theme with the colours changed.",
              "Speed work: the store has fifteen apps and a five-second product page.",
              "Campaign landing pages that marketing can launch without a developer each time.",
              "Custom bundle, subscription or configurator functionality apps do not handle well.",
              "Migration onto Shopify from another platform, with rankings preserved.",
              "Ongoing capacity for a store that ships changes weekly.",
            ],
          },
        ],
      },
      {
        heading: "How do you audit apps?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "List every installed app and what it is supposed to do.",
              "Measure each one's script weight and main-thread cost with it enabled and disabled.",
              "Identify apps doing nothing — abandoned trials and superseded tools are extremely common.",
              "Identify apps whose function can be built into the theme for a fraction of the weight.",
              "Present the trade-off with numbers: this app costs 400ms and drives this much revenue.",
            ],
          },
          {
            type: "callout",
            title: "The decision stays yours",
            text: "We do not remove apps unilaterally. We put the cost next to the benefit and let you decide — which is a much easier conversation when the cost is a measured number rather than an opinion.",
          },
        ],
      },
      {
        heading: "Do you work on Shopify Plus?",
        body: [
          {
            type: "p",
            text: "Yes — checkout extensibility, Shopify Functions, B2B features, multiple storefronts and higher API limits. We also work on standard plans and will tell you honestly whether upgrading would actually give you what you need.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$1,800 / month",
        timeline: "15 hours per week",
        bestFor: "Stores with steady change requests",
        includes: [
          "One Shopify developer, part time",
          "Theme changes and campaign pages",
          "App and performance monitoring",
          "Weekly reporting",
        ],
      },
      {
        name: "Full-time",
        range: "$3,500 – $5,500 / month",
        timeline: "40 hours per week",
        bestFor: "Larger stores shipping continuously",
        includes: [
          "One senior developer, full time",
          "Theme, app and Functions work",
          "Performance and conversion focus",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Project basis",
        range: "Quoted per scope",
        timeline: "3–14 weeks",
        bestFor: "Theme builds and migrations",
        includes: [
          "Fixed quote and timeline",
          "Design and build",
          "Migration and redirects",
          "Post-launch support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work in Liquid and in React?",
        answer:
          "Yes, both. Liquid for theme work and React for headless storefronts, which means we can recommend the right approach rather than the one we happen to know.",
      },
      {
        question: "Will you break our store while working on it?",
        answer:
          "Work happens on a duplicated theme with a preview link, reviewed before publishing. Publishing is a deliberate step and the previous theme stays available to revert to instantly.",
      },
      {
        question: "Can you build custom apps?",
        answer:
          "Yes — private apps for your own operations, and Shopify Functions for discount, shipping and payment customisation.",
      },
      {
        question: "Do you handle Black Friday preparation?",
        answer:
          "Yes: load testing, performance work, a change freeze plan and monitoring during the period. It needs to start weeks in advance, not the week before.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["shopify-development-services", "ecommerce-brands", "hire-frontend-developers"],
    readMore: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "The anatomy of a converting landing page", href: "/blog/anatomy-of-a-converting-landing-page" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "staff-augmentation-services",
    group: "hire",
    title: "IT staff augmentation services",
    seoTitle: "IT Staff Augmentation Services | ROVQIX",
    description:
      "Staff augmentation for engineering teams — vetted developers embedded in your process, starting in one to two weeks, with 30 days notice and no recruitment fees.",
    excerpt:
      "Add engineering capacity in weeks rather than months, and remove it in thirty days if you need to.",
    eyebrow: "Staff augmentation",
    primaryKeyword: "it staff augmentation services",
    secondaryKeywords: [
      "software development staff augmentation",
      "team extension services",
      "augment engineering team",
      "contract developers for teams",
    ],
    answer:
      "ROVQIX staff augmentation embeds vetted engineers into your existing team, board and review process. Engineers start within one to two weeks, work in your repository under your conventions, and the engagement ends on 30 days notice with no recruitment fee at any point.",
    intro:
      "Staff augmentation works when you have engineering management and need hands. It fails when a company outsources the management too and expects the hands to self-direct.",
    proof: [
      { metric: "1–2 wks", label: "Time to start" },
      { metric: "No fee", label: "Zero recruitment cost" },
      { metric: "30 days", label: "Notice either way" },
      { metric: "You interview", label: "Every engineer" },
    ],
    deliverables: [
      {
        title: "Your process",
        description:
          "Engineers work in your board, your review process, your standups and your definition of done.",
        icon: "Workflow",
      },
      {
        title: "You choose",
        description:
          "You interview every engineer before they join and can decline anyone without explanation.",
        icon: "UserCheck",
      },
      {
        title: "Fast onboarding",
        description:
          "First pull request merged within days, with heavy review for the first two weeks by design.",
        icon: "Rocket",
      },
      {
        title: "Flexible scaling",
        description:
          "Add or remove capacity on 30 days notice, without severance, restructuring or difficult conversations.",
        icon: "Scale",
      },
      {
        title: "Skill coverage",
        description:
          "Frontend, backend, full-stack, DevOps and design — from one pool, so mixing skills is straightforward.",
        icon: "Users",
      },
      {
        title: "Clean exit",
        description:
          "A defined offboarding process with documentation and handover, agreed at the start rather than improvised.",
        icon: "GitBranch",
      },
    ],
    sections: [
      {
        heading: "Staff augmentation or a managed team?",
        body: [
          {
            type: "table",
            head: ["", "Staff augmentation", "Managed team"],
            rows: [
              ["You provide", "Management and priorities", "Priorities only"],
              ["We provide", "Engineers", "Engineers, lead and process"],
              ["Accountability", "Yours", "Shared with our lead"],
              ["Cost", "Lower per engineer", "Higher, includes management"],
              ["Best when", "You have engineering leadership", "You need delivery ownership"],
              ["Risk", "Needs your management capacity", "Less direct control"],
            ],
          },
          {
            type: "callout",
            title: "Be honest about your management capacity",
            text: "The most common failure is a company choosing augmentation because it is cheaper, then having nobody with time to direct the work. If your engineering manager is already at capacity, a managed team costs more and delivers more.",
          },
        ],
      },
      {
        heading: "How does onboarding work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Before day one: access provisioned, documentation shared, first tickets identified.",
              "Day 1: environment running locally, first small pull request opened.",
              "Week 1: scoped tickets with heavy review, joining all your ceremonies.",
              "Week 2: independent work, participating in planning and estimation.",
              "End of week 2: trial review with you — continue, adjust or stop cleanly.",
            ],
          },
        ],
      },
      {
        heading: "What does it cost compared to hiring?",
        body: [
          {
            type: "table",
            head: ["", "Direct hire", "Staff augmentation"],
            rows: [
              ["Time to productive", "3–5 months", "2–3 weeks"],
              ["Recruitment fee", "15–25% of salary", "None"],
              ["Monthly cost (US senior)", "$12,000–$18,000 loaded", "$3,800–$6,500"],
              ["Ramp-down cost", "Severance and process", "30 days notice"],
              ["Long-term context", "Builds over years", "Builds over the engagement"],
            ],
          },
          {
            type: "p",
            text: "Augmentation is not a permanent substitute for a team that knows your product deeply. It is the right answer for capacity gaps, deadline pressure, specialist skills and the period while you recruit.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Single engineer",
        range: "$3,800 – $6,500 / month",
        timeline: "Full time",
        bestFor: "One capacity gap",
        includes: [
          "One senior engineer",
          "Your process and repository",
          "4+ hours daily overlap",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Multiple engineers",
        range: "from $7,000 / month",
        timeline: "Full time",
        bestFor: "Parallel workstreams",
        includes: [
          "2+ engineers across skills",
          "Coordinated onboarding",
          "Shared context between them",
          "Volume rate",
        ],
      },
      {
        name: "Part-time",
        range: "from $1,800 / month",
        timeline: "10–20 hours per week",
        bestFor: "Specialist skills used occasionally",
        includes: [
          "Fractional specialist access",
          "DevOps, AI or design capability",
          "Scheduled availability",
          "Monthly rolling",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from a staffing agency?",
        answer:
          "Our engineers are our employees, not contractors we found for you. They have a technical lead reviewing their work, and we are accountable for quality rather than just for placement.",
      },
      {
        question: "Can we hire the engineer permanently?",
        answer:
          "It is not something we encourage, but if an engineer wants to relocate or join you directly we will discuss it openly rather than blocking it with contract terms nobody wants to enforce.",
      },
      {
        question: "What if we need to stop suddenly?",
        answer:
          "30 days notice, and we prioritise handover during that period. If the reason is a problem with the engineer, tell us — we would rather replace them than lose the relationship.",
      },
      {
        question: "Do engineers work on multiple clients at once?",
        answer:
          "Full-time engineers work on one client only. Part-time engagements are explicitly fractional and you know exactly which hours are yours.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["dedicated-development-team", "hire-full-stack-developers", "offshore-development-india"],
    readMore: [
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
      { label: "Scoping a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
    ],
    publishedAt: "2026-08-13",
  },
];
