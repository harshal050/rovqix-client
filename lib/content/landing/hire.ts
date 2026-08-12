import type { LandingPage } from "@/lib/content/landing/types";

export const hirePages: LandingPage[] = [
  {
    slug: "hire-nextjs-developers",
    group: "hire",
    title: "Hire Next.js developers",
    seoTitle: "Hire Next.js Developers | Vetted, Remote | ROVQIX",
    description:
      "Hire experienced Next.js developers on a project or monthly basis. App Router, TypeScript, server components and SEO — with overlapping hours for US and UK teams.",
    excerpt:
      "Senior Next.js engineers, available per project or per month, working hours that overlap your team.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire next.js developers",
    secondaryKeywords: [
      "hire nextjs developer remote",
      "next.js developers for hire",
      "dedicated next.js developer",
      "next.js contractor",
    ],
    answer:
      "You can hire Next.js developers from ROVQIX on a fixed-scope project, a monthly retainer, or as a dedicated engineer embedded in your team. Engagements start within one to two weeks, include overlapping hours with US, UK and Australian timezones, and are billed in USD.",
    intro:
      "You are not hiring generalists who read the docs last month. Our engineers work in the App Router daily and publish on the parts teams routinely get wrong — caching, server boundaries, rendering strategy.",
    proof: [
      { metric: "1–2 wks", label: "To start" },
      { metric: "4+ hrs", label: "Daily overlap" },
      { metric: "USD", label: "Invoiced monthly" },
      { metric: "No lock-in", label: "30 days notice" },
    ],
    deliverables: [
      {
        title: "App Router expertise",
        description:
          "Server components, streaming, route handlers, server actions and the caching model — used correctly, not cargo-culted.",
        icon: "Layers",
      },
      {
        title: "TypeScript throughout",
        description:
          "Strict mode, typed API boundaries and generated types where a schema exists.",
        icon: "Code2",
      },
      {
        title: "Performance discipline",
        description:
          "Bundle budgets, Core Web Vitals monitoring and profiling as part of normal work rather than a later project.",
        icon: "Gauge",
      },
      {
        title: "SEO-aware engineering",
        description:
          "Metadata, canonicals, structured data and rendering decisions made with organic search in mind.",
        icon: "Search",
      },
      {
        title: "Your process",
        description:
          "We work in your repository, your board, your review process and your definition of done.",
        icon: "GitBranch",
      },
      {
        title: "Written communication",
        description:
          "Daily async updates, decisions documented in the repo, and calls scheduled inside your working hours.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "How does the engagement work?",
        answer:
          "Three models: fixed-scope project, monthly retainer for a set number of hours, or a dedicated engineer working as part of your team.",
        body: [
          {
            type: "table",
            head: ["Model", "Best for", "Commitment"],
            rows: [
              ["Fixed project", "A defined build with clear scope", "Per project"],
              ["Retainer", "Ongoing work without a full-time hire", "Monthly, 30 days notice"],
              ["Dedicated engineer", "Extending an existing team", "Monthly, 30 days notice"],
              ["Audit / consulting", "A specific problem or a second opinion", "1–2 weeks"],
            ],
          },
          {
            type: "p",
            text: "All three start the same way: a call to understand the work, a written proposal with scope and price, and a start date. No procurement process, no minimum term beyond the notice period.",
          },
        ],
      },
      {
        heading: "How do you handle the timezone difference?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Our working day overlaps US Eastern mornings and UK afternoons by at least four hours.",
              "Standups are async and written, posted before your day starts, so you read progress with your coffee.",
              "Calls are scheduled inside your hours, not ours.",
              "Work is structured so nobody is blocked overnight — questions are asked before we sign off, not after.",
              "For US Pacific teams we shift start times to keep a live overlap window.",
            ],
          },
          {
            type: "callout",
            title: "The overnight advantage",
            text: "Handled well, the offset works for you: you review at the end of your day, we act on it overnight, and the change is waiting when you start. Handled badly, it costs a day per question. The difference is written communication discipline, which we take seriously.",
          },
        ],
      },
      {
        heading: "What does it cost compared to hiring?",
        body: [
          {
            type: "table",
            head: ["", "US senior hire", "ROVQIX engineer"],
            rows: [
              ["Monthly cost", "$12,000–$18,000 loaded", "$3,500–$6,500"],
              ["Time to start", "2–4 months", "1–2 weeks"],
              ["Recruitment cost", "15–25% of salary", "None"],
              ["Commitment", "Permanent employment", "30 days notice"],
              ["Scaling down", "Difficult and costly", "Notice period"],
            ],
          },
          {
            type: "p",
            text: "The honest trade-off: a permanent hire gives you deeper product context over years and full-time availability in your timezone. Contract engineering gives you speed, flexibility and no fixed cost. Many clients use us to move now and hire permanently later, with a proper handover when they do.",
          },
        ],
      },
      {
        heading: "How do we make sure it works?",
        body: [
          {
            type: "list",
            items: [
              "A two-week paid trial period so both sides can evaluate before a longer commitment.",
              "Code review in both directions from the first pull request.",
              "A named point of contact who is accountable, not a rotating pool.",
              "Documentation of every architectural decision so knowledge does not leave with us.",
              "A defined offboarding process including a handover session whenever an engagement ends.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$2,200 / month",
        timeline: "20 hours per week",
        bestFor: "Steady progress without full-time cost",
        includes: [
          "One senior engineer, half time",
          "4 hours daily overlap",
          "Async daily updates",
          "Weekly call",
        ],
      },
      {
        name: "Full-time",
        range: "$4,000 – $6,500 / month",
        timeline: "40 hours per week",
        bestFor: "A dedicated engineer on your team",
        includes: [
          "One senior engineer, full time",
          "Works in your repo and process",
          "Daily standups and sprint participation",
          "Direct Slack access",
          "30 days notice",
        ],
        featured: true,
      },
      {
        name: "Team",
        range: "from $9,000 / month",
        timeline: "Ongoing",
        bestFor: "Delivering a roadmap, not filling a seat",
        includes: [
          "2–4 engineers plus a lead",
          "Designer available as needed",
          "Sprint planning and delivery reporting",
          "QA and code review process included",
        ],
      },
    ],
    faqs: [
      {
        question: "How quickly can a developer start?",
        answer:
          "Typically one to two weeks from agreement. If you need someone sooner, tell us during the first call and we will be honest about whether we can meet the date.",
      },
      {
        question: "Can we interview the developer first?",
        answer:
          "Yes. You interview whoever would be assigned, review relevant work, and can run a technical conversation the same way you would with any candidate.",
      },
      {
        question: "What if it is not working out?",
        answer:
          "There is a two-week trial period, and after that 30 days notice. We would rather end an engagement cleanly than have a client stuck in a contract that is not delivering.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do, from the first commit. Work happens in your repository under your organisation, with IP assignment in the contract.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes, routinely, and we are comfortable with client-supplied contracts, security questionnaires and background verification.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["hire-react-developers", "dedicated-development-team", "nextjs-development"],
    readMore: [
      { label: "App Router vs Pages Router", href: "/blog/nextjs-app-router-vs-pages-router" },
      { label: "React Server Components explained", href: "/blog/nextjs-server-components-explained" },
      { label: "Next.js deployment checklist", href: "/blog/nextjs-deployment-checklist" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "hire-react-developers",
    group: "hire",
    title: "Hire React developers",
    seoTitle: "Hire React Developers | Remote & Vetted | ROVQIX",
    description:
      "Hire senior React developers for dashboards, design systems and web applications. TypeScript, accessibility and performance discipline, in your timezone.",
    excerpt:
      "React engineers who understand component architecture and rendering performance, not just how to wire a hook.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire react developers",
    secondaryKeywords: [
      "hire react js developer",
      "remote react developers",
      "react developer for hire",
      "dedicated react developer",
    ],
    answer:
      "ROVQIX provides senior React developers on monthly or project engagements, working in TypeScript on dashboards, design systems and web applications. Engineers join your repository and process, with at least four hours of daily overlap with US and UK teams.",
    intro:
      "The React market is full of people who can build a form. Fewer can tell you why the app re-renders on every keystroke, or design a component API that survives two years of feature requests.",
    proof: [
      { metric: "5+ yrs", label: "Average experience" },
      { metric: "TypeScript", label: "Default, not optional" },
      { metric: "WCAG AA", label: "Accessibility standard" },
      { metric: "2 weeks", label: "Trial period" },
    ],
    deliverables: [
      {
        title: "Component architecture",
        description:
          "Composition over boolean props, clear UI and product layers, and folders organised by feature.",
        icon: "Blocks",
      },
      {
        title: "State placed correctly",
        description:
          "Server data cached, view state in the URL, UI state local — the structural fix for most performance complaints.",
        icon: "Workflow",
      },
      {
        title: "Profiled performance",
        description:
          "React DevTools profiling and INP measurement, not memo sprinkled everywhere and hoped for.",
        icon: "Gauge",
      },
      {
        title: "Accessible interfaces",
        description:
          "Keyboard operation, focus management, semantic markup and screen reader testing on primary flows.",
        icon: "Accessibility",
      },
      {
        title: "Testing where it pays",
        description:
          "Logic unit-tested, interactions covered with Testing Library, key journeys covered end to end.",
        icon: "FlaskConical",
      },
      {
        title: "Reviewable work",
        description:
          "Small pull requests with context, so your team can review meaningfully instead of rubber-stamping.",
        icon: "GitPullRequest",
      },
    ],
    sections: [
      {
        heading: "What do our React engineers typically work on?",
        body: [
          {
            type: "list",
            items: [
              "Customer dashboards with charts, filters, bulk actions and exports.",
              "Design systems and shared component libraries across several products.",
              "Complex forms and multi-step workflows with conditional logic.",
              "Migrating class components or legacy patterns to modern React.",
              "Performance rescue on applications that have become slow to use.",
              "Accessibility remediation ahead of a procurement or compliance deadline.",
            ],
          },
        ],
      },
      {
        heading: "How do we vet engineers?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A practical build task reviewed by a senior engineer — no algorithm puzzles.",
              "A code review exercise, because reviewing well is a better signal than writing quickly.",
              "A conversation about trade-offs on a real architectural decision.",
              "Written communication assessment, since most of the work is async.",
              "A supervised first engagement before working independently with a client.",
            ],
          },
          {
            type: "callout",
            title: "You interview too",
            text: "Nobody joins your project without you meeting them. If you would not hire them, we do not assign them — and we will offer an alternative rather than argue.",
          },
        ],
      },
      {
        heading: "What does the first two weeks look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Day 1: access, environment running locally, first small pull request merged.",
              "Days 2–5: work on scoped tickets while learning the codebase, with heavy review.",
              "Week 2: independent tickets, participation in your planning, first written architecture note.",
              "End of week 2: trial review. Continue, adjust, or stop cleanly.",
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
        bestFor: "Ongoing capacity without a full seat",
        includes: [
          "One senior React engineer, half time",
          "Daily async updates",
          "Weekly planning call",
          "Code review participation",
        ],
      },
      {
        name: "Full-time",
        range: "$3,800 – $6,000 / month",
        timeline: "40 hours per week",
        bestFor: "A dedicated engineer in your team",
        includes: [
          "One senior React engineer, full time",
          "Works in your repo and process",
          "Standups and sprint participation",
          "Direct Slack access",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Squad",
        range: "from $8,500 / month",
        timeline: "Ongoing",
        bestFor: "Shipping a roadmap with a lead included",
        includes: [
          "2–4 engineers plus technical lead",
          "Design support as required",
          "Delivery reporting each sprint",
          "QA and review process",
        ],
      },
    ],
    faqs: [
      {
        question: "Can developers work in our sprint process?",
        answer:
          "Yes. They join your board, standups, planning and retrospectives, and follow your definition of done rather than running a parallel process.",
      },
      {
        question: "What hours do they work?",
        answer:
          "At least four hours overlapping your working day, more if needed for US Pacific teams. Meetings are scheduled inside your hours.",
      },
      {
        question: "Can we scale up or down?",
        answer:
          "Yes, with 30 days notice in either direction. Scaling up depends on availability, so give as much warning as you can.",
      },
      {
        question: "Do you provide backend developers too?",
        answer:
          "Yes — Node.js, TypeScript, PostgreSQL and infrastructure. Many clients start with frontend and add backend capacity once the working relationship is established.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["hire-nextjs-developers", "hire-full-stack-developers", "react-development"],
    readMore: [
      { label: "React component architecture", href: "/blog/react-component-architecture" },
      { label: "React re-render performance", href: "/blog/react-rerender-performance" },
      { label: "React testing strategy", href: "/blog/react-testing-strategy" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "hire-nodejs-developers",
    group: "hire",
    title: "Hire Node.js developers",
    seoTitle: "Hire Node.js Developers | Backend Engineers | ROVQIX",
    description:
      "Hire Node.js backend developers for APIs, integrations, queues and database work. TypeScript, PostgreSQL and production operations experience.",
    excerpt:
      "Backend engineers who have run what they built in production, and know why the event loop matters.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire node.js developers",
    secondaryKeywords: [
      "hire nodejs backend developer",
      "node js developers for hire",
      "backend developer remote",
      "typescript backend engineer",
    ],
    answer:
      "ROVQIX provides Node.js backend developers for API development, third-party integrations, background job systems, database design and production operations — working in TypeScript with PostgreSQL, Redis and containerised deployments.",
    intro:
      "Backend problems surface at the worst time: under load, at month end, during a migration. We staff engineers who have been on the other side of that pager, not only in a development environment.",
    proof: [
      { metric: "TypeScript", label: "End to end" },
      { metric: "PostgreSQL", label: "Modelled, not guessed" },
      { metric: "Observed", label: "Logs, metrics, traces" },
      { metric: "On-call ready", label: "Runbooks included" },
    ],
    deliverables: [
      {
        title: "API design and build",
        description:
          "REST or GraphQL with consistent errors, pagination, versioning, rate limiting and an OpenAPI specification.",
        icon: "Code2",
      },
      {
        title: "Database work",
        description:
          "Schema design, indexing, query optimisation and zero-downtime migrations using expand and contract.",
        icon: "Database",
      },
      {
        title: "Integrations",
        description:
          "Payment providers, CRMs, ERPs and partner APIs, with idempotency and retry handling that survives their downtime.",
        icon: "Plug",
      },
      {
        title: "Background processing",
        description:
          "Queues, scheduled jobs, exports and webhooks built to be idempotent, observable and safely retryable.",
        icon: "Timer",
      },
      {
        title: "Security practice",
        description:
          "Authorisation at the data layer, input validation, secrets management and dependency hygiene as routine.",
        icon: "ShieldCheck",
      },
      {
        title: "Operations",
        description:
          "Structured logging, metrics, alerting and runbooks so the system is supportable by your team, not just by us.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "What backend work do clients bring us most?",
        body: [
          {
            type: "list",
            items: [
              "Building an API for an existing frontend or mobile app.",
              "Replacing manual data transfer between systems with real integrations.",
              "Fixing a backend that slows down or falls over under load.",
              "Adding background processing so slow work stops blocking requests.",
              "Database performance work: missing indexes, N+1 queries, connection exhaustion.",
              "Preparing a system for an audit or a large customer's security review.",
            ],
          },
        ],
      },
      {
        heading: "How do you handle production access?",
        answer:
          "Least privilege, your accounts, audited — we never ask for shared credentials or standing production access.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Named accounts in your identity provider, never shared logins.",
              "Access scoped to what the work requires, revoked when the engagement ends.",
              "Production changes via your deployment pipeline, not manual console edits.",
              "Break-glass access agreed in advance for incidents, with the usage logged.",
              "We are comfortable with your security questionnaire, background checks and device policies.",
            ],
          },
        ],
      },
      {
        heading: "What does good backend delivery look like?",
        body: [
          {
            type: "list",
            items: [
              "Every endpoint has authorisation checked at the data layer, tested with two accounts.",
              "Every outbound call has a timeout, a retry policy and a circuit breaker where it matters.",
              "Every migration is backwards compatible with the previous release.",
              "Every job is idempotent, because at-least-once delivery means duplicates are normal.",
              "Every deploy has a tested rollback.",
              "Every alert is actionable, or it is a dashboard item rather than a page.",
            ],
          },
          {
            type: "callout",
            title: "We write the runbook",
            text: "If your team cannot operate what we built at 3am without calling us, the engagement is not finished. Runbooks and monitoring are part of delivery, not an upsell.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$2,200 / month",
        timeline: "20 hours per week",
        bestFor: "Steady backend capacity",
        includes: [
          "One senior backend engineer, half time",
          "API and integration work",
          "Async daily updates",
          "Weekly call",
        ],
      },
      {
        name: "Full-time",
        range: "$4,000 – $6,500 / month",
        timeline: "40 hours per week",
        bestFor: "A dedicated backend engineer",
        includes: [
          "One senior engineer, full time",
          "Database and infrastructure work included",
          "Your process and repository",
          "Runbooks and documentation",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Backend audit",
        range: "$2,500 – $5,000",
        timeline: "1–2 weeks",
        bestFor: "Performance, security or scaling concerns",
        includes: [
          "Architecture and code review",
          "Database and query analysis",
          "Security review against OWASP",
          "Prioritised findings with estimates",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work with existing backends in other languages?",
        answer:
          "We can integrate with anything over an API. For substantial work inside a Python, Go, PHP or Java codebase we would tell you honestly that another team is a better fit.",
      },
      {
        question: "Can you help with our database performance?",
        answer:
          "Yes — that is one of the most common audit requests. We start with pg_stat_statements and query plans, then fix indexes, query shapes and N+1 patterns in priority order.",
      },
      {
        question: "Do you handle DevOps as well?",
        answer:
          "Yes: containers, CI/CD, infrastructure as code, monitoring and cost management. Many clients use one engineer across backend and infrastructure rather than staffing both.",
      },
      {
        question: "Can you go on-call?",
        answer:
          "Within agreed hours on a platform retainer, yes. For 24/7 coverage we build the runbooks and monitoring so your team can hold the pager confidently.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["hire-full-stack-developers", "custom-software-development", "dedicated-development-team"],
    readMore: [
      { label: "The Node.js event loop explained", href: "/blog/nodejs-event-loop-explained" },
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "hire-full-stack-developers",
    group: "hire",
    title: "Hire full-stack developers",
    seoTitle: "Hire Full Stack Developers | Remote | ROVQIX",
    description:
      "Hire full-stack developers who can ship a feature end to end — React frontend, Node.js API, PostgreSQL and deployment, without three handoffs.",
    excerpt:
      "One engineer who can take a feature from design to production without waiting on two other people.",
    eyebrow: "Hire developers",
    primaryKeyword: "hire full stack developers",
    secondaryKeywords: [
      "full stack developer for hire",
      "remote full stack engineer",
      "javascript full stack developer",
      "hire full stack team",
    ],
    answer:
      "ROVQIX provides full-stack developers working across React and Next.js on the frontend, Node.js and TypeScript on the backend, PostgreSQL for data, and containerised deployment — able to deliver a complete feature without handoffs between specialists.",
    intro:
      "For teams under about fifteen engineers, the handoff between frontend and backend costs more than the specialisation gains. A full-stack engineer removes the queue.",
    proof: [
      { metric: "End to end", label: "Design to deploy" },
      { metric: "One TypeScript", label: "Shared types" },
      { metric: "1–2 wks", label: "To start" },
      { metric: "2 weeks", label: "Trial period" },
    ],
    deliverables: [
      {
        title: "Feature ownership",
        description:
          "One person takes a feature from ticket to production: schema, API, interface, tests and deployment.",
        icon: "Workflow",
      },
      {
        title: "Shared type safety",
        description:
          "TypeScript across the stack so a backend field rename becomes a compile error, not a production bug.",
        icon: "Code2",
      },
      {
        title: "Database design",
        description:
          "Schema, indexes and migrations handled as part of the feature rather than requested from another team.",
        icon: "Database",
      },
      {
        title: "Deployment",
        description:
          "CI, environment configuration and release handled by the same person who wrote the code.",
        icon: "Rocket",
      },
      {
        title: "Pragmatic breadth",
        description:
          "Deep enough in each layer to make good decisions, honest about when a specialist is genuinely needed.",
        icon: "Layers",
      },
      {
        title: "Documentation",
        description:
          "Decisions and runbooks written down as work happens, so context does not live only in one head.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "When is full-stack the right choice?",
        body: [
          {
            type: "table",
            head: ["Full-stack fits when", "Specialists fit when"],
            rows: [
              ["Team is under ~15 engineers", "Large team with defined ownership"],
              ["Features span the whole stack", "Deep work in one layer"],
              ["Handoffs are slowing delivery", "Parallel work streams are efficient"],
              ["One codebase in TypeScript", "Different languages per layer"],
              ["Startup or product team", "Platform or infrastructure team"],
            ],
          },
          {
            type: "callout",
            title: "Full-stack is not 'knows everything'",
            text: "Our engineers are strong in the JavaScript and TypeScript stack. They are not database administrators, security specialists or infrastructure architects, and they will tell you when a problem needs one.",
          },
        ],
      },
      {
        heading: "What does a typical engagement deliver?",
        body: [
          {
            type: "list",
            items: [
              "New product features from schema through interface, shipped in two-week cycles.",
              "MVPs where one engineer plus a designer is the entire team.",
              "Integrations touching both a third-party API and the interface that exposes it.",
              "Migrations that require coordinated frontend and backend changes.",
              "Filling a gap while you recruit permanently, with a handover when the hire lands.",
            ],
          },
        ],
      },
      {
        heading: "How do we keep quality consistent?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Every pull request is reviewed — by your team, ours, or both.",
              "CI blocks on type checking, lint, tests and a bundle budget.",
              "Architectural decisions get a short written record before implementation.",
              "A senior lead reviews the shape of the work weekly, even on single-engineer engagements.",
              "Monthly retrospective with you on what is working and what is not.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Part-time",
        range: "$2,200 / month",
        timeline: "20 hours per week",
        bestFor: "Early-stage products moving steadily",
        includes: [
          "One full-stack engineer, half time",
          "Frontend, backend and deployment",
          "Async daily updates",
          "Weekly planning call",
        ],
      },
      {
        name: "Full-time",
        range: "$4,000 – $6,500 / month",
        timeline: "40 hours per week",
        bestFor: "Continuous delivery on a roadmap",
        includes: [
          "One full-stack engineer, full time",
          "End-to-end feature ownership",
          "Your process and tooling",
          "Documentation and handover",
          "Two-week trial period",
        ],
        featured: true,
      },
      {
        name: "Product squad",
        range: "from $9,500 / month",
        timeline: "Ongoing",
        bestFor: "Building a product without hiring a team",
        includes: [
          "2–3 full-stack engineers",
          "Technical lead and designer",
          "Sprint delivery and reporting",
          "Infrastructure and monitoring",
        ],
      },
    ],
    faqs: [
      {
        question: "Is one full-stack engineer really enough?",
        answer:
          "For an MVP or a well-defined product area, often yes — particularly with a designer and a clear roadmap. Beyond a certain scope you want at least two so knowledge is not concentrated in one person.",
      },
      {
        question: "What stack do they work in?",
        answer:
          "TypeScript throughout: React and Next.js on the frontend, Node.js on the backend, PostgreSQL and Redis for data, Docker and CI for deployment.",
      },
      {
        question: "Can they work with our existing team?",
        answer:
          "Yes. They join your board, your reviews and your standups, and adopt your conventions rather than importing ours.",
      },
      {
        question: "What happens when we hire permanently?",
        answer:
          "We plan a handover: documentation, pairing sessions and a tapering period. Several clients keep us at part-time capacity afterwards for overflow work.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["dedicated-development-team", "hire-nodejs-developers", "hire-react-developers"],
    readMore: [
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "SQL vs NoSQL", href: "/blog/sql-vs-nosql" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "dedicated-development-team",
    group: "hire",
    title: "Dedicated development team",
    seoTitle: "Dedicated Development Team | Remote Squad | ROVQIX",
    description:
      "Hire a dedicated remote development team — engineers, a technical lead and design, delivering your roadmap in two-week cycles with transparent reporting.",
    excerpt:
      "A complete squad with a lead who is accountable for delivery, not a pool of hours you have to manage.",
    eyebrow: "Dedicated team",
    primaryKeyword: "dedicated development team",
    secondaryKeywords: [
      "dedicated remote team",
      "offshore development team",
      "outsourced product team",
      "team as a service development",
    ],
    answer:
      "A ROVQIX dedicated team is a fixed group of engineers, a technical lead and design support, reserved for your product and delivering against your roadmap in two-week cycles. You get delivery accountability rather than a timesheet.",
    intro:
      "Buying hours puts the management burden on you. A dedicated team comes with a lead who runs planning, review and delivery, and who is answerable for what ships.",
    proof: [
      { metric: "2 weeks", label: "Delivery cycle" },
      { metric: "Named team", label: "Not a rotating pool" },
      { metric: "One lead", label: "Accountable for delivery" },
      { metric: "30 days", label: "Notice period" },
    ],
    deliverables: [
      {
        title: "A named, stable team",
        description:
          "The same people every cycle, who accumulate product context rather than re-learning it each month.",
        icon: "Users",
      },
      {
        title: "Technical lead included",
        description:
          "Architecture, code review, planning and delivery accountability — not billed as a separate line item.",
        icon: "Compass",
      },
      {
        title: "Two-week cycles",
        description:
          "Planned scope, a demo of working software at the end, and a written summary of what shipped.",
        icon: "Timer",
      },
      {
        title: "Design capacity",
        description:
          "Product and interface design available within the team, so design does not become the bottleneck.",
        icon: "PenTool",
      },
      {
        title: "QA and review",
        description:
          "Testing and code review built into the process rather than treated as an optional extra.",
        icon: "CheckCircle2",
      },
      {
        title: "Transparent reporting",
        description:
          "Access to the board, the repository and honest reporting when a cycle does not go to plan.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "What does a team look like?",
        body: [
          {
            type: "table",
            head: ["Size", "Composition", "Typical use"],
            rows: [
              ["Small", "2 engineers + lead (part-time)", "One product area, steady delivery"],
              ["Standard", "3 engineers + lead + designer", "Building and shipping a product roadmap"],
              ["Extended", "5+ engineers + lead + designer + QA", "Multiple workstreams in parallel"],
            ],
          },
          {
            type: "p",
            text: "Composition adapts to the work. A data-heavy quarter shifts toward backend; a redesign quarter shifts toward frontend and design. That flexibility is the practical advantage over hiring fixed roles.",
          },
        ],
      },
      {
        heading: "How does the cycle run?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Planning: we agree the cycle's scope with you, with estimates and clear acceptance criteria.",
              "Build: daily written updates, work visible on the board, questions raised same-day.",
              "Mid-cycle check: a short call to confirm direction and surface risks early.",
              "Demo: working software in a real environment, not slides.",
              "Review: what shipped, what slipped and why, and what the next cycle should contain.",
            ],
          },
          {
            type: "callout",
            title: "We report slippage early",
            text: "If a cycle is going to miss, you hear it at the mid-cycle check, not at the demo. Late bad news is the thing that damages client relationships more than the slippage itself.",
          },
        ],
      },
      {
        heading: "How is this different from staff augmentation?",
        body: [
          {
            type: "table",
            head: ["", "Staff augmentation", "Dedicated team"],
            rows: [
              ["You manage", "Each individual", "The roadmap"],
              ["Accountability", "Yours", "Shared, with our lead"],
              ["Process", "Yours entirely", "Ours, aligned to yours"],
              ["Best when", "You have engineering management", "You need delivery, not headcount"],
              ["Scaling", "Person by person", "Team composition shifts"],
            ],
          },
          {
            type: "p",
            text: "If you already have a strong engineering manager and just need more hands, individual engineers are cheaper and simpler. If you need someone to own delivery, a team with a lead is the right structure.",
          },
        ],
      },
      {
        heading: "How do we protect against key-person risk?",
        body: [
          {
            type: "list",
            items: [
              "At least two people familiar with every part of the system.",
              "Architecture decisions documented in your repository, not in chat history.",
              "Your infrastructure, your accounts, your repositories throughout.",
              "A written offboarding plan agreed at the start, not improvised at the end.",
              "Regular pairing with your in-house engineers where you have them.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Small team",
        range: "$8,500 – $11,000 / month",
        timeline: "Ongoing",
        bestFor: "One product area, consistent delivery",
        includes: [
          "2 senior engineers",
          "Part-time technical lead",
          "Two-week delivery cycles",
          "Code review and QA",
        ],
      },
      {
        name: "Standard team",
        range: "$14,000 – $20,000 / month",
        timeline: "Ongoing",
        bestFor: "Delivering a full product roadmap",
        includes: [
          "3 senior engineers",
          "Technical lead",
          "Product designer",
          "QA and delivery reporting",
          "Infrastructure and monitoring",
        ],
        featured: true,
      },
      {
        name: "Extended team",
        range: "from $25,000 / month",
        timeline: "Ongoing",
        bestFor: "Multiple parallel workstreams",
        includes: [
          "5+ engineers across specialisms",
          "Lead, designer and QA",
          "Dedicated DevOps capacity",
          "Quarterly planning with your leadership",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the minimum commitment?",
        answer:
          "Three months, then rolling with 30 days notice. Teams need a cycle or two to build product context, so shorter engagements rarely deliver good value for either side.",
      },
      {
        question: "Can we start smaller and grow?",
        answer:
          "Yes, and most clients do — commonly one or two engineers first, adding a designer and more capacity once the working relationship is established.",
      },
      {
        question: "Who manages the team?",
        answer:
          "Our technical lead manages day-to-day delivery. You own product direction and priorities. If you have your own product manager, they work directly with the lead.",
      },
      {
        question: "What if we are unhappy with someone on the team?",
        answer:
          "Tell us and we replace them, with an overlap period for handover. That is a normal request and does not affect the relationship.",
      },
      {
        question: "Do you work with our existing engineers?",
        answer:
          "Yes, frequently. Shared repository, shared review process, shared standards. We adopt your conventions rather than running a separate track.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["hire-full-stack-developers", "offshore-development-india", "custom-software-development"],
    readMore: [
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
      { label: "Incident response basics", href: "/blog/incident-response-basics" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "offshore-development-india",
    group: "hire",
    title: "Offshore development in India: how to make it actually work",
    seoTitle: "Offshore Software Development in India | ROVQIX",
    description:
      "An honest guide to offshore development with an Indian studio — cost, timezone overlap, communication, contracts and the failure modes to avoid.",
    excerpt:
      "Offshore development fails for predictable reasons. Here is how we structure engagements so it does not.",
    eyebrow: "Offshore development",
    primaryKeyword: "offshore development india",
    secondaryKeywords: [
      "offshore software development company india",
      "outsource web development to india",
      "indian development agency for us clients",
      "offshore team timezone overlap",
    ],
    answer:
      "Offshore development with an Indian studio typically costs 50 to 70 percent less than hiring locally in the US or UK. It works when there is real timezone overlap, written communication discipline, a named accountable lead and clear contracts — and fails when it is treated as a way to buy the cheapest possible hours.",
    intro:
      "We are an Indian studio and most of our clients are not in India. Rather than pretend the model has no trade-offs, here is exactly how we handle each of them.",
    proof: [
      { metric: "50–70%", label: "Cost difference" },
      { metric: "4+ hrs", label: "Daily overlap" },
      { metric: "USD/GBP", label: "Invoiced in your currency" },
      { metric: "Your IP", label: "Assigned in contract" },
    ],
    deliverables: [
      {
        title: "Real overlap hours",
        description:
          "Our day overlaps US Eastern mornings and UK afternoons. For Pacific teams we shift start times to keep live hours.",
        icon: "Clock",
      },
      {
        title: "Written by default",
        description:
          "Daily async updates, decisions in the repository, and questions asked before we sign off rather than after.",
        icon: "MessageSquare",
      },
      {
        title: "One accountable lead",
        description:
          "A named person responsible for delivery who you can escalate to, not a rotating account manager.",
        icon: "Compass",
      },
      {
        title: "Contracts that hold",
        description:
          "IP assignment, NDA, defined notice periods and payment terms in USD, GBP, AUD or CAD.",
        icon: "FileText",
      },
      {
        title: "Your infrastructure",
        description:
          "Code in your repositories, deployments in your cloud accounts, access revocable by you at any time.",
        icon: "ShieldCheck",
      },
      {
        title: "No handoff to juniors",
        description:
          "The engineers you meet are the engineers who work. We do not sell senior and staff junior.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Why does offshore development fail?",
        answer:
          "Almost always for four reasons: no timezone overlap, weak written communication, no accountable lead, and buying on price alone.",
        body: [
          {
            type: "table",
            head: ["Failure mode", "How we address it"],
            rows: [
              ["Zero overlap hours", "Guaranteed 4+ hour daily window, meetings in your time"],
              ["Questions blocking overnight", "Async updates and questions raised before sign-off"],
              ["Bait and switch on staffing", "You interview and approve the actual engineers"],
              ["No accountability", "One named lead owns delivery and escalation"],
              ["Cheapest bid wins", "Fixed scope with a real estimate, not a race to the bottom"],
              ["IP and contract ambiguity", "IP assigned from the first commit, in writing"],
            ],
          },
          {
            type: "callout",
            title: "The cheapest quote is the most expensive",
            text: "A rate that seems too low is usually junior engineers with a senior CV, or a scope that will be renegotiated once you are committed. Ask any vendor — including us — what happens when the estimate is wrong.",
          },
        ],
      },
      {
        heading: "What does the cost difference actually buy?",
        body: [
          {
            type: "table",
            head: ["", "US senior hire", "Offshore engineer"],
            rows: [
              ["Loaded monthly cost", "$12,000–$18,000", "$3,500–$6,500"],
              ["Recruitment time", "2–4 months", "1–2 weeks"],
              ["Recruitment fee", "15–25% of salary", "None"],
              ["Timezone", "Full overlap", "4+ hours overlap"],
              ["Cultural context", "Native to your market", "Requires explicit context"],
              ["Flexibility", "Permanent commitment", "30 days notice"],
            ],
          },
          {
            type: "p",
            text: "The trade you are making is timezone and market context in exchange for cost and flexibility. For engineering work with a clear specification, that trade is usually good. For work requiring deep customer intuition in your local market, it is less so — and we will say that during scoping.",
          },
        ],
      },
      {
        heading: "How do payments and contracts work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Invoiced monthly in USD, GBP, AUD or CAD via bank transfer or Wise.",
              "Standard terms are net 15; we are flexible for established clients.",
              "A mutual NDA before any detailed discussion, if you want one.",
              "A master services agreement plus per-engagement statements of work.",
              "IP assignment from the first commit, with no retained licence on our side.",
              "We are comfortable working under your paperwork rather than insisting on ours.",
            ],
          },
        ],
      },
      {
        heading: "What should you ask any offshore vendor?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Can I interview and approve the specific engineers who will work on this?",
              "What are your actual overlap hours with my timezone?",
              "Who is accountable for delivery, and how do I escalate?",
              "What happens contractually if the estimate turns out to be wrong?",
              "Whose accounts hold the code and the infrastructure?",
              "Can I speak to a client in my country and timezone?",
              "What does offboarding look like if we stop?",
            ],
          },
          {
            type: "p",
            text: "We are happy to answer all seven on a first call. Any vendor that deflects on staffing or escalation is answering the question by not answering it.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Single engineer",
        range: "$3,500 – $6,500 / month",
        timeline: "Full time, ongoing",
        bestFor: "Extending an existing team",
        includes: [
          "One senior engineer, full time",
          "4+ hours daily overlap",
          "Your process and repository",
          "Two-week trial period",
        ],
      },
      {
        name: "Dedicated team",
        range: "$14,000 – $20,000 / month",
        timeline: "Ongoing",
        bestFor: "Delivering a roadmap",
        includes: [
          "3 engineers, lead and designer",
          "Two-week delivery cycles",
          "QA and code review",
          "Delivery reporting",
        ],
        featured: true,
      },
      {
        name: "Fixed-scope project",
        range: "Quoted per project",
        timeline: "Defined upfront",
        bestFor: "A specific build with clear requirements",
        includes: [
          "Written specification and estimate",
          "Fixed price and timeline",
          "Milestone-based payments",
          "Post-launch support period",
        ],
      },
    ],
    faqs: [
      {
        question: "What timezone are you in?",
        answer:
          "India Standard Time (UTC+5:30). That gives four to five hours of overlap with UK afternoons and US Eastern mornings. For US Pacific teams we shift start times to preserve a live window.",
      },
      {
        question: "Will we work with the people we interview?",
        answer:
          "Yes. If an engineer needs to change for any reason, you meet the replacement and there is an overlap period for handover.",
      },
      {
        question: "How do you handle data protection and GDPR?",
        answer:
          "We work within your infrastructure and accounts, sign data processing agreements, and can restrict access so personal data is not processed outside your chosen region.",
      },
      {
        question: "Do you have clients in the US and UK?",
        answer:
          "Yes, and we are happy to arrange a reference call with a client in your region and timezone before you commit.",
      },
      {
        question: "What if the quality is not what we expected?",
        answer:
          "There is a two-week trial and a 30-day notice period. You keep everything produced. We would rather end an engagement early than argue about a bad fit.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["dedicated-development-team", "hire-full-stack-developers", "web-development-company-usa"],
    readMore: [
      { label: "How to scope a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
    ],
    publishedAt: "2026-08-12",
  },

  {
    slug: "white-label-web-development",
    group: "hire",
    title: "White label web development for agencies",
    seoTitle: "White Label Web Development for Agencies | ROVQIX",
    description:
      "White label development partner for design studios and marketing agencies — we build under your brand, to your standards, without client contact unless you want it.",
    excerpt:
      "Your designs, our engineering, your brand on the invoice. A delivery partner that stays invisible.",
    eyebrow: "For agencies",
    primaryKeyword: "white label web development",
    secondaryKeywords: [
      "white label development agency",
      "development partner for agencies",
      "outsource web development agency",
      "subcontract web development",
    ],
    answer:
      "ROVQIX works as a white label development partner for design studios and marketing agencies. We build from your designs under your brand, communicate through you or join your client calls as your team, and never approach your clients directly.",
    intro:
      "Design studios keep losing good projects because they cannot staff the build. We are the engineering half — reliable, invisible, and contractually barred from going around you.",
    proof: [
      { metric: "Invisible", label: "Your brand throughout" },
      { metric: "Non-solicit", label: "Contractually binding" },
      { metric: "Figma-native", label: "We build from your files" },
      { metric: "Reserved", label: "Capacity for partners" },
    ],
    deliverables: [
      {
        title: "Build from your designs",
        description:
          "Pixel-accurate implementation from Figma, with questions raised early rather than assumptions made silently.",
        icon: "PenTool",
      },
      {
        title: "Your brand, not ours",
        description:
          "No credit links, no attribution, no contact with your client unless you invite us onto a call as your team.",
        icon: "EyeOff",
      },
      {
        title: "Non-solicitation",
        description:
          "A binding agreement that we will not approach your clients. Your relationships stay yours.",
        icon: "ShieldCheck",
      },
      {
        title: "Predictable delivery",
        description:
          "Fixed quotes, dated milestones and early warning when something is at risk — because your reputation is on it.",
        icon: "CalendarCheck",
      },
      {
        title: "Reserved capacity",
        description:
          "Partner agencies get a monthly capacity allocation so you can quote work knowing it can be staffed.",
        icon: "Users",
      },
      {
        title: "Aftercare",
        description:
          "Maintenance and support handled under your brand, so your client relationship continues past launch.",
        icon: "LifeBuoy",
      },
    ],
    sections: [
      {
        heading: "How does a white label engagement work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "You send the brief and designs; we return a fixed quote and timeline within two working days.",
              "You mark it up and quote your client — your margin is yours and we never see it.",
              "We build, reporting to you on an agreed cadence, in your project management tool or ours.",
              "You review and present to the client. We stay behind you unless you want us on the call.",
              "We deliver the codebase into your account, documented and ready for handover.",
              "Optional maintenance continues under your brand.",
            ],
          },
          {
            type: "callout",
            title: "Two-day quote turnaround",
            text: "Agencies lose pitches waiting for a build estimate. Send us a design or a scope and you will have a number in two working days, so you can quote while the client is still interested.",
          },
        ],
      },
      {
        heading: "What do we build for agency partners?",
        body: [
          {
            type: "list",
            items: [
              "Marketing sites in Next.js from your designs, with a headless CMS for the client's team.",
              "Ecommerce storefronts, headless or platform-based.",
              "Web applications and client portals beyond a typical agency's in-house capability.",
              "Complex interaction and animation work that needs engineering rather than a page builder.",
              "Performance and accessibility remediation on sites you have already delivered.",
              "Ongoing maintenance retainers you resell to your clients.",
            ],
          },
        ],
      },
      {
        heading: "How do we handle handover to your client?",
        body: [
          {
            type: "p",
            text: "Everything is produced as though your team built it: consistent code style, documentation in your voice where you want it, and a walkthrough recorded for you to share or re-record. There are no ROVQIX references in the codebase, the CMS or the deployment.",
          },
          {
            type: "p",
            text: "If your client has an in-house developer, we will run the technical handover as your team — with your name on the calendar invite — or brief you fully so you can run it yourself.",
          },
        ],
      },
      {
        heading: "What makes a good agency partnership?",
        body: [
          {
            type: "list",
            items: [
              "Designs with states specified, or a willingness to answer questions quickly when they are not.",
              "A single point of contact on your side who can make decisions.",
              "Realistic client deadlines communicated to us before they are promised.",
              "Early visibility of upcoming work so we can reserve capacity.",
              "Honest feedback. We would rather fix a process problem than lose a partner quietly.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Per project",
        range: "Quoted in 2 working days",
        timeline: "Per scope",
        bestFor: "Occasional overflow work",
        includes: [
          "Fixed quote from your designs",
          "Milestone-based delivery",
          "White label throughout",
          "Handover documentation",
        ],
      },
      {
        name: "Partner retainer",
        range: "from $4,500 / month",
        timeline: "Ongoing",
        bestFor: "Agencies with a steady project flow",
        includes: [
          "Reserved monthly capacity",
          "Priority quoting and scheduling",
          "Discounted project rates",
          "Named lead across all projects",
        ],
        featured: true,
      },
      {
        name: "Maintenance resale",
        range: "from $250 / site / month",
        timeline: "Ongoing",
        bestFor: "Recurring revenue from your existing clients",
        includes: [
          "Updates, monitoring and backups",
          "Reports branded for you to forward",
          "Agreed change hours per site",
          "You set the resale price",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you ever contact our clients?",
        answer:
          "No. Non-solicitation is in the partner agreement, and we do not put our name in the code, the CMS or the deployment. If you want us on a client call, we attend as your team.",
      },
      {
        question: "How fast can you quote?",
        answer:
          "Two working days for a scoped brief or a complete design file. If we need more information to quote responsibly, we will tell you within a few hours rather than sitting on it.",
      },
      {
        question: "Can you join client calls?",
        answer:
          "Yes, as your team, if it helps you win or explain something technical. Many partners prefer us to stay entirely behind the scenes, and that is equally fine.",
      },
      {
        question: "What if our client wants to work with you directly?",
        answer:
          "We refer them back to you. Our business depends on agency partners trusting that boundary, and one breach would end that.",
      },
      {
        question: "Do you work with our project management tools?",
        answer:
          "Yes — Slack, Jira, Linear, Asana, Basecamp, ClickUp. We work in whatever you already use rather than asking you to adopt ours.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"],
    related: ["agencies-and-studios", "website-development", "website-maintenance"],
    readMore: [
      { label: "How to scope a project that won't blow up", href: "/blog/scoping-a-website-project-that-wont-blow-up" },
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
      { label: "Technical SEO checklist", href: "/blog/technical-seo-checklist-developers" },
    ],
    publishedAt: "2026-08-12",
  },
];
