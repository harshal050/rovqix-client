import type { LandingPage } from "@/lib/content/landing/types";

export const industryPagesExtra: LandingPage[] = [
  {
    slug: "education-and-edtech",
    group: "industries",
    title: "Web development for education and edtech",
    seoTitle: "Education & EdTech Web Development | ROVQIX",
    description:
      "Websites and platforms for schools, universities and edtech companies — accessible by requirement, with course delivery, enrolment flows and student portals.",
    excerpt:
      "Accessibility is a procurement gate in education, not a nice-to-have. We build to that from the start.",
    eyebrow: "Education",
    primaryKeyword: "education web development",
    secondaryKeywords: [
      "edtech platform development",
      "university website development",
      "learning platform development",
      "student portal development",
    ],
    answer:
      "ROVQIX builds websites and learning platforms for schools, universities and edtech companies — enrolment flows, course delivery, student portals and content-heavy institutional sites — with WCAG 2.2 AA accessibility treated as a build requirement rather than a later audit.",
    intro:
      "Education buyers check accessibility before they check anything else. A platform that fails a keyboard test does not get past procurement, regardless of how good the product is.",
    proof: [
      { metric: "WCAG 2.2 AA", label: "Build standard" },
      { metric: "Keyboard-first", label: "Tested, not assumed" },
      { metric: "LTI-ready", label: "LMS integration" },
      { metric: "Low bandwidth", label: "Works on poor connections" },
    ],
    deliverables: [
      {
        title: "Accessible by construction",
        description:
          "Semantic markup, keyboard operation, focus management and screen reader testing across every flow.",
        icon: "Accessibility",
      },
      {
        title: "Enrolment and application flows",
        description:
          "Multi-step forms with save-and-resume, document upload, validation and clear status communication.",
        icon: "ClipboardList",
      },
      {
        title: "Course delivery",
        description:
          "Content structure, progress tracking, assessments and completion records for learning platforms.",
        icon: "LayoutDashboard",
      },
      {
        title: "LMS integration",
        description:
          "LTI and API integration with existing learning management systems rather than replacing them.",
        icon: "Plug",
      },
      {
        title: "Institutional content",
        description:
          "Large site architectures with real information hierarchy, search and multi-department publishing.",
        icon: "Network",
      },
      {
        title: "Low-bandwidth performance",
        description:
          "Built to work on school networks and home connections that are slower than your office assumes.",
        icon: "Gauge",
      },
    ],
    sections: [
      {
        heading: "Why does accessibility gate education projects?",
        body: [
          {
            type: "list",
            items: [
              "Publicly funded institutions face direct enforcement obligations, and their procurement checks.",
              "Universities have been a consistent focus of accessibility complaints and settlements.",
              "Students with disabilities are a substantial, legally protected proportion of the user base.",
              "Procurement routinely requires conformance documentation before purchase is approved.",
              "Retrofitting after a failed review costs several times what building it in does.",
            ],
          },
          {
            type: "callout",
            title: "The realistic first test",
            text: "Unplug the mouse and complete an enrolment. If you cannot reach the submit button, or focus disappears inside a modal, the platform will not pass institutional review — and no amount of visual polish changes that.",
          },
        ],
      },
      {
        heading: "What do edtech companies need most?",
        body: [
          {
            type: "table",
            head: ["Stage", "Common need"],
            rows: [
              ["Early product", "MVP with course delivery and billing"],
              ["Selling to institutions", "SSO, accessibility conformance, audit logging"],
              ["Scaling", "Performance under a class of 500 hitting submit at once"],
              ["Integration demands", "LTI and LMS integration for existing systems"],
              ["Data requirements", "Progress reporting and export for administrators"],
            ],
          },
          {
            type: "p",
            text: "The transition from selling to individuals to selling to institutions is where most edtech products need engineering work: SSO, roles, audit trails and conformance documentation all become prerequisites.",
          },
        ],
      },
      {
        heading: "How do you handle student data?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Collect only what the platform genuinely needs, with a documented purpose for each field.",
              "Role-based access enforced at the data layer, so a teacher cannot reach another class's records.",
              "Audit logging on access to student records, retained per your policy.",
              "Development uses seeded or anonymised data, never a copy of production.",
              "Retention and deletion paths built in, since institutions will ask about them.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Institutional site",
        range: "$6,000 – $20,000",
        timeline: "6–12 weeks",
        bestFor: "Schools and universities",
        includes: [
          "Information architecture and design",
          "Accessible build with CMS",
          "Multi-department publishing",
          "Accessibility conformance documentation",
        ],
      },
      {
        name: "Learning platform",
        range: "$20,000 – $60,000",
        timeline: "10–20 weeks",
        bestFor: "Edtech products and course delivery",
        includes: [
          "Product and interface design",
          "Course delivery and progress tracking",
          "Enrolment, roles and SSO",
          "LMS integration",
          "Accessibility and security review",
        ],
        featured: true,
      },
      {
        name: "Accessibility remediation",
        range: "$5,000 – $20,000",
        timeline: "4–10 weeks",
        bestFor: "Platforms failing procurement review",
        includes: [
          "Full WCAG 2.2 AA audit",
          "Implementation of fixes",
          "CI accessibility checks",
          "Conformance documentation",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you provide accessibility conformance documentation?",
        answer:
          "We provide detailed documentation of what was tested and the conformance level reached. For a formally signed VPAT an independent accessibility firm is the right route, and we remediate against their findings.",
      },
      {
        question: "Do you integrate with Canvas, Moodle or Blackboard?",
        answer:
          "Yes, via LTI or their APIs where available. Integration is generally better than replacement — institutions rarely want to move their LMS.",
      },
      {
        question: "Can you handle enrolment traffic spikes?",
        answer:
          "Yes. Enrolment periods are predictable, so we load test in advance, cache aggressively, and queue the write-heavy operations rather than hoping the database copes.",
      },
      {
        question: "Do you work with K-12 as well as higher education?",
        answer:
          "Yes. K-12 typically brings stricter data handling requirements and lower-bandwidth constraints, both of which we plan for explicitly.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["accessibility-remediation-services", "web-development-company-boston", "saas-development"],
    readMore: [
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Semantic HTML matters", href: "/blog/semantic-html-seo" },
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "legal-and-professional-services",
    group: "industries",
    title: "Web development for law firms and professional services",
    seoTitle: "Web Development for Law Firms | ROVQIX",
    description:
      "Websites for law firms, accountants and consultancies — credibility-first design, practice area structure, secure client portals and enquiry flows that qualify.",
    excerpt:
      "For firms where the website is a credibility check before the first call — and often the only one.",
    eyebrow: "Legal & professional",
    primaryKeyword: "law firm web development",
    secondaryKeywords: [
      "law firm website design",
      "professional services website development",
      "accounting firm website",
      "client portal for law firm",
    ],
    answer:
      "ROVQIX builds websites and client portals for law firms, accountancies and consultancies — structured around practice areas and individual expertise, with secure document exchange and enquiry flows designed to qualify rather than simply collect.",
    intro:
      "Professional services buyers research before they contact. By the time they call, the website has already decided whether you are on the shortlist.",
    proof: [
      { metric: "Practice-led", label: "Structured by expertise" },
      { metric: "Secure", label: "Document exchange" },
      { metric: "Qualified", label: "Enquiries, not volume" },
      { metric: "Confidential", label: "Data handled properly" },
    ],
    deliverables: [
      {
        title: "Practice area architecture",
        description:
          "A real page per practice area with depth, because that is what prospective clients actually search for.",
        icon: "Network",
      },
      {
        title: "Individual expertise",
        description:
          "Profiles that demonstrate specific experience rather than listing credentials — the deciding factor for most enquiries.",
        icon: "UserCheck",
      },
      {
        title: "Qualifying enquiry flows",
        description:
          "Forms that capture matter type and context, so your team can triage instead of calling everyone back.",
        icon: "ClipboardList",
      },
      {
        title: "Secure client portals",
        description:
          "Document exchange, matter status and messaging with access control and audit logging.",
        icon: "ShieldCheck",
      },
      {
        title: "Insight publishing",
        description:
          "A structure for articles and updates that demonstrates expertise and earns search visibility.",
        icon: "FileText",
      },
      {
        title: "Confidentiality by design",
        description:
          "Minimal data collection, defined retention, and no client information sitting in a marketing inbox.",
        icon: "EyeOff",
      },
    ],
    sections: [
      {
        heading: "What actually converts on a professional services site?",
        body: [
          {
            type: "table",
            head: ["Element", "Why it matters"],
            rows: [
              ["Specific practice area pages", "People search the problem, not the firm"],
              ["Named individual expertise", "Clients hire a person, not a logo"],
              ["Evidence of similar matters", "Anonymised outcomes beat generic claims"],
              ["Clear next step", "Ambiguity loses cautious buyers"],
              ["Substantive insight content", "Demonstrates thinking before contact"],
              ["Fast, professional presentation", "A slow, dated site reads as a signal"],
            ],
          },
          {
            type: "callout",
            title: "Generic firm pages do not rank or convert",
            text: "'Corporate law' as a single page competes with everyone. A page on the specific problem a client is searching for, written by the person who handles it, is what earns both the ranking and the call.",
          },
        ],
      },
      {
        heading: "Do you need a client portal?",
        answer:
          "If your team currently exchanges confidential documents over email, probably yes.",
        body: [
          {
            type: "list",
            items: [
              "Email attachments are the most common confidentiality weak point in professional services.",
              "A portal gives you access control, an audit trail and retention you can actually enforce.",
              "Clients increasingly expect status visibility rather than having to ask.",
              "It reduces administrative time spent answering 'where are we with this'.",
              "It is a differentiator against firms still working entirely over email.",
            ],
          },
          {
            type: "p",
            text: "That said, if your matter volume is low and your existing process works, a portal may be an expensive solution to a small problem. We will say so during scoping.",
          },
        ],
      },
      {
        heading: "How do you handle confidentiality?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Enquiry forms collect the minimum needed to triage, not full matter details.",
              "Submissions go to a controlled destination, not a shared marketing inbox.",
              "Portal access is role-based and enforced at the data layer, with every access logged.",
              "Retention schedules are configured and automated rather than described in a policy.",
              "Development uses seeded data; we never work against a copy of live client records.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Firm website",
        range: "$4,000 – $12,000",
        timeline: "4–8 weeks",
        bestFor: "Firms whose site is their credibility check",
        includes: [
          "Custom design and build",
          "Practice area and profile structure",
          "Insight publishing system",
          "Qualifying enquiry flows",
        ],
        featured: true,
      },
      {
        name: "Client portal",
        range: "$12,000 – $40,000",
        timeline: "8–16 weeks",
        bestFor: "Secure document exchange and status",
        includes: [
          "Authentication and role-based access",
          "Document exchange and matter status",
          "Audit logging and retention",
          "Practice system integration",
        ],
      },
      {
        name: "Support retainer",
        range: "from $600 / month",
        timeline: "Ongoing",
        bestFor: "Firms publishing regularly",
        includes: [
          "Content publishing support",
          "New profile and practice pages",
          "Security patching and monitoring",
          "Quarterly performance review",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our practice management system?",
        answer:
          "Where it offers an API, yes — matter status, documents and contacts. Feasibility is confirmed during discovery, as some legal practice systems are considerably more open than others.",
      },
      {
        question: "Will the site help us rank for our practice areas?",
        answer:
          "The structure and technical foundations will support it. Rankings in competitive legal terms also require sustained, genuinely expert content — which works best when it comes from your lawyers rather than from us.",
      },
      {
        question: "Can you write the content?",
        answer:
          "We can structure and edit it, but the substance should come from your practitioners. Legal and financial content written by non-specialists reads as such to exactly the audience you are trying to convince.",
      },
      {
        question: "How do you handle professional conduct requirements?",
        answer:
          "We build what your compliance team specifies — disclaimers, jurisdiction statements, advertising rules. We are not qualified to advise on your regulator's requirements and will not pretend otherwise.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["website-development", "web-development-company-new-york", "web-application-development"],
    readMore: [
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Privacy compliance for websites", href: "/blog/privacy-compliance-for-websites" },
      { label: "Technical SEO checklist", href: "/blog/technical-seo-checklist-developers" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "logistics-and-supply-chain",
    group: "industries",
    title: "Software development for logistics and supply chain",
    seoTitle: "Logistics & Supply Chain Software Development | ROVQIX",
    description:
      "Custom software for logistics operators — tracking portals, dispatch tools, carrier integrations and exception dashboards built around how the operation actually runs.",
    excerpt:
      "Dispatch, tracking and exception handling built for the messy reality, not the process diagram.",
    eyebrow: "Logistics",
    primaryKeyword: "logistics software development",
    secondaryKeywords: [
      "supply chain software development",
      "freight management software",
      "carrier api integration",
      "shipment tracking portal",
    ],
    answer:
      "ROVQIX builds custom logistics software — customer tracking portals, dispatch and scheduling tools, carrier and partner API integrations, and exception dashboards — designed around the exceptions that make up most of the operational workload.",
    intro:
      "Every logistics system handles the happy path. The value is entirely in what happens when a delivery fails, an address is wrong, or a carrier's API stops responding at 3am.",
    proof: [
      { metric: "Exception-first", label: "Designed for the mess" },
      { metric: "Resilient", label: "Survives carrier outages" },
      { metric: "Real-time", label: "Where it earns its cost" },
      { metric: "Reconciled", label: "Data checked, not trusted" },
    ],
    deliverables: [
      {
        title: "Customer tracking portals",
        description:
          "Self-service status so your team stops answering the same phone call forty times a day.",
        icon: "LayoutDashboard",
      },
      {
        title: "Dispatch and scheduling",
        description:
          "Assignment, routing and capacity tools built around how your planners actually make decisions.",
        icon: "Workflow",
      },
      {
        title: "Carrier integrations",
        description:
          "Rate, booking, label and tracking integrations with timeouts, retries and circuit breakers as standard.",
        icon: "Plug",
      },
      {
        title: "Exception dashboards",
        description:
          "Surfacing only the shipments needing human attention, which is the actual daily job.",
        icon: "Activity",
      },
      {
        title: "Partner portals",
        description:
          "Controlled access for customers, agents and subcontractors with scoped visibility per party.",
        icon: "Users",
      },
      {
        title: "Reporting",
        description:
          "Performance, cost and SLA reporting your team currently assembles manually every month.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "Why does exception handling matter more than the happy path?",
        body: [
          {
            type: "p",
            text: "In most operations, the majority of staff time goes to a minority of shipments — the ones that went wrong. Software that automates the smooth cases and offers nothing for the exceptions does not reduce workload; it just moves where people work around it.",
          },
          {
            type: "list",
            items: [
              "Address problems and failed deliveries need a defined resolution path in the system.",
              "Carrier data conflicts need a reconciliation view, not a silent overwrite.",
              "Delays need proactive customer notification, which prevents most inbound calls.",
              "Manual overrides need to exist and be audited, because planners will need them.",
              "Every exception type should have an owner and a queue, not a shared inbox.",
            ],
          },
          {
            type: "callout",
            title: "Watch the workaround",
            text: "During discovery we look for the spreadsheet someone maintains alongside the official system. It is always the most informative artefact in the building — it shows exactly where the current process fails.",
          },
        ],
      },
      {
        heading: "How do you build integrations that survive carrier outages?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Timeouts on every call — a carrier API hanging must not hang your dispatch screen.",
              "Retries with backoff, but only for genuinely retryable failures.",
              "Idempotency so a retried booking cannot create two shipments.",
              "Circuit breakers that fail fast and surface the outage rather than queueing silently.",
              "A durable queue for anything that can complete later, so degradation is graceful.",
              "Daily reconciliation against carrier records, because something always slips through.",
            ],
          },
        ],
      },
      {
        heading: "Do you need real-time tracking?",
        answer:
          "For the dispatch view and active deliveries, usually yes. For everything else, periodic updates are cheaper and sufficient.",
        body: [
          {
            type: "table",
            head: ["Use case", "Update frequency", "Why"],
            rows: [
              ["Dispatch board", "Real-time", "Decisions are made on it live"],
              ["Active delivery tracking", "Real-time or near", "Customer-facing expectation"],
              ["Customer portal status", "Every few minutes", "Nobody watches it continuously"],
              ["Management reporting", "Hourly or daily", "Decisions are not made per minute"],
              ["Historical analysis", "Batch", "Real-time adds cost, not value"],
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Discovery",
        range: "$2,500 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Mapping the real process before building",
        includes: [
          "Process mapping with operators",
          "Integration feasibility assessment",
          "Clickable prototype",
          "Fixed-price build proposal",
        ],
      },
      {
        name: "Platform build",
        range: "$20,000 – $70,000",
        timeline: "10–24 weeks",
        bestFor: "Dispatch, tracking and partner portals",
        includes: [
          "Full design and development",
          "Carrier and system integrations",
          "Exception handling and reporting",
          "Data migration and parallel running",
          "Training and handover",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $1,800 / month",
        timeline: "Ongoing",
        bestFor: "Systems the operation depends on",
        includes: [
          "Priority incident response",
          "Integration monitoring and fixes",
          "Monthly enhancement hours",
          "Backups and security patching",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our TMS or WMS?",
        answer:
          "Where a documented API, database replica or scheduled export exists, yes. We confirm this during discovery — some older systems are genuinely difficult, and finding that out early matters.",
      },
      {
        question: "Should we replace our existing system?",
        answer:
          "Usually not. If the core system works, integrating with it and building the missing pieces around it carries far less risk than replacement, and the business case for a rewrite rarely survives real costing.",
      },
      {
        question: "Can drivers use it in the field?",
        answer:
          "Yes — mobile-first interfaces that tolerate poor connectivity, queueing actions locally and syncing when the connection returns. Assuming constant connectivity is a common and costly mistake here.",
      },
      {
        question: "How do you handle rollout?",
        answer:
          "Parallel running with the existing process for an agreed period, then a phased cutover by depot, region or customer. Big-bang rollouts in live operations are rarely worth the risk.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["custom-software-development", "web-development-company-atlanta", "web-application-development"],
    readMore: [
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "Designing reliable webhooks", href: "/blog/webhooks-design-guide" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "hospitality-and-restaurants",
    group: "industries",
    title: "Web development for hospitality and restaurants",
    seoTitle: "Hospitality & Restaurant Web Development | ROVQIX",
    description:
      "Websites for hotels, restaurants and venues — booking integration, menus that are actually crawlable, mobile-first speed and direct bookings over third-party commission.",
    excerpt:
      "Direct bookings over commission, and menus that are text rather than an unreadable PDF.",
    eyebrow: "Hospitality",
    primaryKeyword: "restaurant web development",
    secondaryKeywords: [
      "hotel website development",
      "hospitality website design",
      "restaurant booking website",
      "venue website development",
    ],
    answer:
      "ROVQIX builds websites for hotels, restaurants and venues with booking system integration, crawlable HTML menus, mobile-first performance and structured data — aimed at increasing direct bookings and reducing dependence on commission-charging platforms.",
    intro:
      "Two things cost hospitality businesses more than they realise: a menu locked inside a PDF, and a booking journey that pushes people back to a third-party platform charging commission.",
    proof: [
      { metric: "Direct", label: "Bookings over commission" },
      { metric: "HTML menus", label: "Crawlable, not PDFs" },
      { metric: "Mobile-first", label: "Where the traffic is" },
      { metric: "Local schema", label: "Hours, menu, location" },
    ],
    deliverables: [
      {
        title: "Booking integration",
        description:
          "Connected to your existing reservation or property management system, kept on your domain wherever possible.",
        icon: "CalendarCheck",
      },
      {
        title: "Crawlable menus",
        description:
          "Menus as structured HTML with schema, so they appear in search results and work with screen readers.",
        icon: "FileText",
      },
      {
        title: "Mobile-first build",
        description:
          "Designed for someone standing on a street deciding where to eat, on a mediocre connection.",
        icon: "Gauge",
      },
      {
        title: "Local structured data",
        description:
          "Hours, location, menu, price range and accepted payments marked up accurately for search and maps.",
        icon: "Blocks",
      },
      {
        title: "Photography presentation",
        description:
          "Image-heavy pages that still load fast, because food and room photography is the primary sales tool.",
        icon: "Images",
      },
      {
        title: "Events and private hire",
        description:
          "Enquiry flows for functions and group bookings, which are usually the highest-margin enquiries.",
        icon: "UserPlus",
      },
    ],
    sections: [
      {
        heading: "Why should a menu never be a PDF?",
        answer:
          "Because a PDF menu is effectively invisible to search, painful on mobile, and unusable with a screen reader.",
        body: [
          {
            type: "table",
            head: ["PDF menu", "HTML menu"],
            rows: [
              ["Poorly indexed by search", "Indexed and eligible for rich results"],
              ["Pinch and zoom on mobile", "Readable at any size"],
              ["Unusable with a screen reader", "Fully accessible"],
              ["Downloads over mobile data", "Loads instantly"],
              ["Updated by re-exporting", "Updated in the CMS in seconds"],
              ["No structured data", "Menu schema supported"],
            ],
          },
          {
            type: "callout",
            title: "The most common hospitality mistake",
            text: "A beautiful site whose menu is a five-megabyte PDF. The single highest-intent piece of content on the site is the one part search engines cannot properly read and mobile users struggle with.",
          },
        ],
      },
      {
        heading: "How do you increase direct bookings?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Keep the booking journey on your domain — every redirect to a third party loses people.",
              "Show availability on the page rather than behind a click into another system.",
              "Make the direct-booking benefit explicit: better rate, flexibility, or a perk platforms cannot match.",
              "Match your rates and inventory so a comparison never favours the platform.",
              "Make the mobile booking flow genuinely fast; abandonment here is heavily speed-driven.",
              "Track the direct-versus-platform mix so the improvement is visible in commission saved.",
            ],
          },
          {
            type: "p",
            text: "Third-party platforms are a legitimate acquisition channel and we are not suggesting you leave them. The goal is that repeat and brand-search customers book with you directly rather than through a channel charging fifteen percent.",
          },
        ],
      },
      {
        heading: "What about multi-location businesses?",
        body: [
          {
            type: "list",
            items: [
              "A real page per location with its own hours, menu variations, photography and structured data.",
              "A location finder that works from a phone with location services, and without them.",
              "Shared brand components so all locations stay consistent without duplicated build work.",
              "Local management access so each site can update its own hours and specials.",
              "Per-location tracking so you know which sites the traffic and bookings come from.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Single venue",
        range: "$2,500 – $7,000",
        timeline: "3–6 weeks",
        bestFor: "One restaurant, hotel or venue",
        includes: [
          "Custom design and build",
          "Booking system integration",
          "HTML menus with schema",
          "Local structured data and tracking",
        ],
        featured: true,
      },
      {
        name: "Multi-location",
        range: "$8,000 – $25,000",
        timeline: "6–12 weeks",
        bestFor: "Groups and chains",
        includes: [
          "Location architecture and finder",
          "Per-location content management",
          "Central brand component system",
          "Per-location analytics",
          "Events and private hire flows",
        ],
      },
      {
        name: "Support retainer",
        range: "from $400 / month",
        timeline: "Ongoing",
        bestFor: "Venues with frequently changing content",
        includes: [
          "Menu and content updates",
          "Seasonal campaign pages",
          "Performance and uptime monitoring",
          "Security patching",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our booking system?",
        answer:
          "Most established reservation and property management systems offer an API or embed. We keep the journey on your domain where the provider allows it, since every handoff to another domain costs conversions.",
      },
      {
        question: "Can our team update the menu?",
        answer:
          "Yes, through a CMS designed for it — items, prices, sections and availability, editable in a couple of minutes without touching a design tool.",
      },
      {
        question: "Will this help us appear in Google Maps and local results?",
        answer:
          "The site's structured data, speed and content support it. Local ranking also depends heavily on your Google Business Profile and reviews, which are managed outside the website.",
      },
      {
        question: "Do you build online ordering?",
        answer:
          "We integrate with established ordering platforms rather than building payment and kitchen integration from scratch. Building that from zero is rarely justified against the available options.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-development-company-miami", "website-development", "ecommerce-brands"],
    readMore: [
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "manufacturing-and-industrial",
    group: "industries",
    title: "Web development for manufacturing and industrial businesses",
    seoTitle: "Manufacturing & Industrial Web Development | ROVQIX",
    description:
      "Websites and software for manufacturers — product configurators, quoting tools, distributor portals, spec sheets and ERP integration for long B2B sales cycles.",
    excerpt:
      "Configurators, quoting and distributor portals for businesses whose buyers need a spec sheet, not a hero video.",
    eyebrow: "Manufacturing",
    primaryKeyword: "manufacturing web development",
    secondaryKeywords: [
      "industrial website development",
      "product configurator development",
      "distributor portal development",
      "b2b quoting software",
    ],
    answer:
      "ROVQIX builds websites and software for manufacturers and industrial businesses — product configurators with real pricing rules, quoting tools, distributor portals, technical specification libraries and ERP integration — for buyers who research thoroughly before making contact.",
    intro:
      "Industrial buyers want the specification, the lead time and a price indication. A site that hides all three behind a contact form loses them to a competitor that does not.",
    proof: [
      { metric: "Spec-first", label: "What buyers came for" },
      { metric: "Rules-based", label: "Configuration and pricing" },
      { metric: "ERP-connected", label: "Where an interface exists" },
      { metric: "Fixed price", label: "Quoted before we start" },
    ],
    deliverables: [
      {
        title: "Product configurators",
        description:
          "Option logic, compatibility rules and pricing, producing a valid specification and a downloadable quote.",
        icon: "Blocks",
      },
      {
        title: "Quoting tools",
        description:
          "Rules-based pricing with PDF generation and CRM handoff, replacing the spreadsheet your sales team maintains.",
        icon: "Receipt",
      },
      {
        title: "Distributor portals",
        description:
          "Ordering, pricing tiers, stock visibility and documentation for your channel partners.",
        icon: "LayoutDashboard",
      },
      {
        title: "Specification libraries",
        description:
          "Searchable technical documentation, CAD files and datasheets — usually the most-visited part of the site.",
        icon: "FileText",
      },
      {
        title: "ERP integration",
        description:
          "Pricing, stock and order data connected through API, replica or scheduled export, whichever exists.",
        icon: "Plug",
      },
      {
        title: "Long-cycle content",
        description:
          "Site structure built for buyers researching over weeks, not for an impulse conversion.",
        icon: "Network",
      },
    ],
    sections: [
      {
        heading: "What do industrial buyers actually want from a website?",
        body: [
          {
            type: "table",
            head: ["They want", "Most sites give them"],
            rows: [
              ["Detailed specifications", "Marketing copy about quality"],
              ["A price indication", "'Contact us for pricing'"],
              ["Lead times", "Nothing"],
              ["CAD files and datasheets", "A gated form"],
              ["Compatibility information", "A phone number"],
              ["Evidence of similar applications", "A stock photo of a factory"],
            ],
          },
          {
            type: "callout",
            title: "Gating specifications loses more than it captures",
            text: "Engineers researching a component will not fill in a form for a datasheet — they will use the competitor whose PDF is one click away. Gating collects a few leads and quietly removes you from consideration by the rest.",
          },
        ],
      },
      {
        heading: "When is a configurator worth building?",
        answer:
          "When your sales team spends significant time producing quotes that follow consistent rules.",
        body: [
          {
            type: "list",
            items: [
              "Worth it when: options are numerous, rules are consistent, and quoting is a recurring time cost.",
              "Worth it when: distributors need to self-serve quotes without contacting your team.",
              "Worth it when: incorrect configurations cause returns or rework.",
              "Not worth it when: every job is genuinely bespoke and priced by judgement.",
              "Not worth it when: you have a handful of products with fixed prices.",
            ],
          },
          {
            type: "p",
            text: "We size this during discovery by looking at how many quotes go out monthly and how long each takes. The business case is usually clear within an hour of that conversation.",
          },
        ],
      },
      {
        heading: "How do you connect to an ERP?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A documented API if one exists — the cleanest path, and increasingly common even on older systems.",
              "A read-only database replica or view, which many ERP vendors will provide.",
              "Scheduled file exports, which are unglamorous but reliable and have worked for decades.",
              "A small adapter service alongside the ERP where nothing else is available.",
              "Caching on our side so the ERP is never on the critical path for a page load.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Manufacturer website",
        range: "$5,000 – $15,000",
        timeline: "5–10 weeks",
        bestFor: "Product and specification presentation",
        includes: [
          "Custom design and build",
          "Product and specification structure",
          "Document and CAD library",
          "Enquiry flows with CRM handoff",
        ],
      },
      {
        name: "Configurator or portal",
        range: "$15,000 – $50,000",
        timeline: "10–20 weeks",
        bestFor: "Quoting tools and distributor access",
        includes: [
          "Configuration and pricing rules engine",
          "PDF quote generation",
          "Distributor accounts and tiers",
          "ERP integration",
          "Training and handover",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $900 / month",
        timeline: "Ongoing",
        bestFor: "Sites with changing product data",
        includes: [
          "Product and document updates",
          "Integration monitoring",
          "Security patching and backups",
          "Monthly enhancement hours",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show prices publicly?",
        answer:
          "A price range or 'from' figure usually qualifies enquiries better than hiding everything. If your pricing is genuinely negotiated per contract, an indicative range still filters out the enquiries that were never viable.",
      },
      {
        question: "Can you integrate with our ERP?",
        answer:
          "Usually, via API, replica or scheduled export. Feasibility is confirmed during discovery so you know before committing to a build.",
      },
      {
        question: "Can distributors have their own pricing?",
        answer:
          "Yes — tiered pricing per account, with contract pricing, stock visibility and order history in an authenticated portal.",
      },
      {
        question: "Do you build CAD file handling?",
        answer:
          "We build searchable libraries with format filtering and download tracking. We do not build CAD viewers or conversion tooling — that needs specialist software.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-development-company-chicago", "custom-software-development", "web-application-development"],
    readMore: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
      { label: "Technical SEO checklist", href: "/blog/technical-seo-checklist-developers" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "nonprofits-and-associations",
    group: "industries",
    title: "Web development for nonprofits and associations",
    seoTitle: "Nonprofit & Association Web Development | ROVQIX",
    description:
      "Websites for nonprofits and membership associations — donation flows, membership management, event registration and accessible builds on realistic budgets.",
    excerpt:
      "Donation and membership flows that convert, built accessibly, scoped to a budget that has to justify itself.",
    eyebrow: "Nonprofit",
    primaryKeyword: "nonprofit web development",
    secondaryKeywords: [
      "charity website development",
      "association website development",
      "donation page development",
      "membership website development",
    ],
    answer:
      "ROVQIX builds websites for nonprofits, charities and membership associations — donation flows, membership management, event registration and accessible content sites — scoped realistically for organisations that have to justify every line of spend.",
    intro:
      "Nonprofit budgets are accountable to donors and boards. That is a good constraint: it forces the conversation to be about what actually increases donations or membership, rather than what looks impressive.",
    proof: [
      { metric: "WCAG 2.2 AA", label: "Accessible by default" },
      { metric: "Fewer steps", label: "Donation flow" },
      { metric: "Fixed price", label: "Board-approvable" },
      { metric: "Self-managed", label: "No developer needed" },
    ],
    deliverables: [
      {
        title: "Donation flows",
        description:
          "Short, mobile-friendly giving with suggested amounts, recurring options and no unnecessary account creation.",
        icon: "CreditCard",
      },
      {
        title: "Membership management",
        description:
          "Joining, renewal, member directories and gated content, connected to your existing CRM where one exists.",
        icon: "Users",
      },
      {
        title: "Event registration",
        description:
          "Booking, ticketing and attendee management for conferences, fundraisers and member events.",
        icon: "CalendarCheck",
      },
      {
        title: "Accessible content",
        description:
          "WCAG 2.2 AA as standard, which matters more here than almost anywhere given who these organisations serve.",
        icon: "Accessibility",
      },
      {
        title: "Self-managed publishing",
        description:
          "A CMS your team can genuinely operate, because there is no budget for a developer to change a headline.",
        icon: "PenTool",
      },
      {
        title: "Impact presentation",
        description:
          "Clear, honest presentation of outcomes and finances, which is what sustains donor trust.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "What increases donations on a website?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Fewer steps. Every additional field or page between intent and payment loses donors.",
              "No forced account creation. It is the single most common abandonment cause on donation forms.",
              "Suggested amounts tied to concrete outcomes: what £25 or $50 actually does.",
              "A recurring option presented as the default choice rather than an afterthought.",
              "Mobile-first design — a large share of giving now happens on a phone, often prompted by social media.",
              "Visible reassurance: where the money goes, and what proportion reaches the programme.",
            ],
          },
          {
            type: "callout",
            title: "Test the flow on your own phone",
            text: "Complete a real donation on your own site using a phone on mobile data. Most organisations discover three or four unnecessary steps they had never experienced from the donor's side.",
          },
        ],
      },
      {
        heading: "How do you keep costs realistic?",
        body: [
          {
            type: "table",
            head: ["Approach", "Effect on cost"],
            rows: [
              ["Integrate donation platforms", "Far cheaper than building payment flows"],
              ["Use your existing CRM", "Avoids rebuilding member management"],
              ["Fewer, better pages", "Less design and build time"],
              ["Phased delivery", "Spreads cost across budget cycles"],
              ["Self-managed CMS", "Removes ongoing developer dependency"],
              ["Component reuse", "Later pages cost a fraction of the first"],
            ],
          },
          {
            type: "p",
            text: "We would rather deliver a smaller project you can approve and extend than propose something that stalls in board review for six months.",
          },
        ],
      },
      {
        heading: "Why does accessibility matter especially here?",
        body: [
          {
            type: "p",
            text: "Nonprofits and associations disproportionately serve people with disabilities, older users and people on older devices and slower connections. An inaccessible site excludes the exact people the organisation exists for, and increasingly fails funder and government requirements too.",
          },
          {
            type: "list",
            items: [
              "Full keyboard operation with a visible focus indicator.",
              "Text readable at 200% zoom without horizontal scrolling.",
              "Forms with proper labels and errors that are announced.",
              "Plain language on critical instructions, particularly in donation and application flows.",
              "Pages that work on a slow connection and an older phone.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Organisation website",
        range: "$2,500 – $8,000",
        timeline: "4–8 weeks",
        bestFor: "Most nonprofits and small associations",
        includes: [
          "Custom accessible design and build",
          "Donation platform integration",
          "Self-managed CMS",
          "Analytics and reporting setup",
        ],
        featured: true,
      },
      {
        name: "Membership platform",
        range: "$10,000 – $30,000",
        timeline: "8–16 weeks",
        bestFor: "Associations with member services",
        includes: [
          "Membership joining and renewal",
          "Member directory and gated content",
          "Event registration and ticketing",
          "CRM integration",
          "Staff training",
        ],
      },
      {
        name: "Support retainer",
        range: "from $350 / month",
        timeline: "Ongoing",
        bestFor: "Organisations without technical staff",
        includes: [
          "Security patching and monitoring",
          "Backups with restore testing",
          "Monthly content and change hours",
          "Annual accessibility review",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer nonprofit pricing?",
        answer:
          "Our rates are already substantially below US and UK agency pricing, and we scope deliberately to fit constrained budgets. We are honest that we do not do pro bono work — we would rather deliver a smaller paid project properly.",
      },
      {
        question: "Should we build our own donation processing?",
        answer:
          "No. Established donation platforms handle payment, receipting, gift aid or tax handling and recurring giving far better than a custom build, at a fraction of the cost and risk. We integrate them well.",
      },
      {
        question: "Can our volunteers manage the site?",
        answer:
          "Yes — that is a specific design goal. The CMS is set up so someone non-technical can publish news, events and pages without breaking the design or the accessibility.",
      },
      {
        question: "Can we phase the project across budget years?",
        answer:
          "Yes, and it is common. We define phases that each deliver standalone value, so a delayed second phase does not leave you with something half-finished.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["accessibility-remediation-services", "website-development", "education-and-edtech"],
    readMore: [
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "The anatomy of a converting landing page", href: "/blog/anatomy-of-a-converting-landing-page" },
      { label: "Privacy compliance for websites", href: "/blog/privacy-compliance-for-websites" },
    ],
    publishedAt: "2026-08-13",
  },
];
