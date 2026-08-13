import type { LandingPage } from "@/lib/content/landing/types";

export const industryPagesUs: LandingPage[] = [
  {
    slug: "insurance",
    group: "industries",
    title: "Web development for insurance companies and brokers",
    seoTitle: "Insurance Web Development Services | ROVQIX",
    description:
      "Software for insurers and brokers — quote and application flows, agent portals, claims workflow and document handling, with audit trails and access control built in.",
    excerpt:
      "Long application forms, document-driven processes and audit requirements. All three are design problems.",
    eyebrow: "Insurance",
    primaryKeyword: "insurance web development",
    secondaryKeywords: [
      "insurance software development",
      "agent portal development",
      "insurance quote form development",
      "claims workflow software",
    ],
    answer:
      "ROVQIX builds web software for insurers and brokers: multi-step quote and application flows with save-and-resume, agent and broker portals with scoped access, claims and case workflow with approvals, and document handling with versioning and retention.",
    intro:
      "Insurance software is mostly about two things people find tedious: long forms and documents. Both are where the conversion and the operational cost actually live.",
    proof: [
      { metric: "Save & resume", label: "On every long form" },
      { metric: "Audit trail", label: "Every state change" },
      { metric: "Role-scoped", label: "Enforced at data layer" },
      { metric: "WCAG 2.2 AA", label: "Increasingly required" },
    ],
    deliverables: [
      {
        title: "Quote and application flows",
        description:
          "Multi-step forms with save-and-resume, per-field validation, honest progress and mobile document upload.",
        icon: "ClipboardList",
      },
      {
        title: "Agent and broker portals",
        description:
          "Scoped access per intermediary with policy status, documents, commissions and submission tools.",
        icon: "LayoutDashboard",
      },
      {
        title: "Claims and case workflow",
        description:
          "Multi-step review with roles, approvals, comments and a complete history of who did what.",
        icon: "Workflow",
      },
      {
        title: "Document handling",
        description:
          "Upload, generation, versioning and retention — the substrate most insurance processes run on.",
        icon: "FileText",
      },
      {
        title: "Audit logging",
        description:
          "Immutable records suitable for regulator and internal audit review, queryable when asked.",
        icon: "ScrollText",
      },
      {
        title: "Policy system integration",
        description:
          "Connecting to policy administration platforms via API, replica or scheduled export.",
        icon: "Plug",
      },
    ],
    sections: [
      {
        heading: "Why do insurance application forms fail?",
        answer:
          "Because they are long by necessity and designed as if they were short.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Save and resume is mandatory. People gather documents over days, not in one session.",
              "Validate per field as the user moves, not on submit after twenty minutes of work.",
              "Show honest progress — 'step 3 of 7', never an indeterminate spinner.",
              "Document upload must work from a phone camera, which is how most people submit.",
              "Explain why an unusual question is being asked; unexplained questions cause abandonment.",
              "Give clear status after submission, which removes most of the inbound calls.",
            ],
          },
          {
            type: "callout",
            title: "Losing a completed form is unforgivable",
            text: "A session timeout that discards twenty minutes of work is the single most damaging bug in this sector. Draft state should persist server-side, continuously, from the first field.",
          },
        ],
      },
      {
        heading: "What do broker portals need?",
        body: [
          {
            type: "table",
            head: ["Feature", "Why it matters"],
            rows: [
              ["Scoped visibility", "Brokers must see only their own book"],
              ["Submission tooling", "Reduces back-and-forth by email"],
              ["Commission visibility", "The most-checked screen in most portals"],
              ["Document exchange", "Replaces attachments, which are the weak point"],
              ["Status without calling", "Removes a large share of inbound queries"],
              ["Bulk operations", "Brokers work in batches, not one policy at a time"],
            ],
          },
        ],
      },
      {
        heading: "How do you handle regulatory expectations?",
        body: [
          {
            type: "p",
            text: "We build the technical controls: role-based access enforced at the data layer, immutable audit logging, retention schedules, encryption and documented data flows. We complete security questionnaires in writing as part of onboarding.",
          },
          {
            type: "p",
            text: "Regulatory interpretation, policy and compliance sign-off remain with your compliance function. We build to what they specify rather than advising on what is required.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Discovery",
        range: "$2,500 – $6,000",
        timeline: "2–3 weeks",
        bestFor: "Defining scope and integration feasibility",
        includes: [
          "Process mapping with your team",
          "Integration assessment",
          "Clickable prototype",
          "Fixed-price build proposal",
        ],
      },
      {
        name: "Portal or workflow build",
        range: "$20,000 – $70,000",
        timeline: "10–20 weeks",
        bestFor: "Agent portals and claims workflow",
        includes: [
          "Full design and development",
          "Roles, permissions and audit logging",
          "Document handling and generation",
          "Policy system integration",
          "Training and handover",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $1,800 / month",
        timeline: "Ongoing",
        bestFor: "Systems your operation depends on",
        includes: [
          "Priority incident response",
          "Monthly enhancement hours",
          "Security patching and monitoring",
          "Quarterly review",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our policy administration system?",
        answer:
          "Where an API, read replica or scheduled export exists, yes. Some older platforms are genuinely constrained, which is why we confirm feasibility during discovery rather than after you commit.",
      },
      {
        question: "Do you handle sensitive applicant data?",
        answer:
          "We architect systems that do, with least-privilege access, audit logging and retention. Development uses seeded or anonymised data rather than production copies.",
      },
      {
        question: "Can brokers have different pricing visibility?",
        answer:
          "Yes — per-account tiers and scoped visibility enforced at the data layer, so what a broker can see is a property of the query rather than of the interface.",
      },
      {
        question: "Do you build rating engines?",
        answer:
          "We build the interfaces and workflow around rating, and integrate with your rating engine. Building an actuarial rating engine itself is specialist work outside what we do.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["fintech", "web-development-company-columbus", "web-application-development"],
    readMore: [
      { label: "React forms guide", href: "/blog/react-forms-guide" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "biotech-and-life-sciences",
    group: "industries",
    title: "Web development for biotech and life sciences",
    seoTitle: "Biotech & Life Sciences Web Development | ROVQIX",
    description:
      "Websites and platforms for biotech companies — pipeline presentation, publication libraries, investor content and research tooling, built for a scrutinising audience.",
    excerpt:
      "An audience of scientists, investors and partners who will check every claim you make.",
    eyebrow: "Biotech",
    primaryKeyword: "biotech web development",
    secondaryKeywords: [
      "life sciences website development",
      "pharma website development",
      "publication library website",
      "biotech investor website",
    ],
    answer:
      "ROVQIX builds websites and platforms for biotech and life sciences organisations — programme and pipeline presentation, searchable publication libraries, investor content and internal research tooling — structured for audiences that read carefully and check claims.",
    intro:
      "Biotech sites serve four audiences at once: scientists, investors, potential partners and recruits. Each reads differently, and copy that satisfies one often fails another.",
    proof: [
      { metric: "4 audiences", label: "On one site" },
      { metric: "Precise", label: "Claims that survive review" },
      { metric: "Searchable", label: "Publication libraries" },
      { metric: "WCAG 2.2 AA", label: "Accessibility standard" },
    ],
    deliverables: [
      {
        title: "Pipeline presentation",
        description:
          "Clear stage-by-stage programme information, editable by your team as milestones change.",
        icon: "Network",
      },
      {
        title: "Publication libraries",
        description:
          "Searchable and filterable with correct citation and DOI links — heavily used, usually poorly built.",
        icon: "Search",
      },
      {
        title: "Investor content",
        description:
          "Materials, filings and updates presented credibly for a financially literate audience.",
        icon: "BarChart3",
      },
      {
        title: "Partnering content",
        description:
          "Technology and platform pages aimed at business development rather than at consumers.",
        icon: "Handshake",
      },
      {
        title: "Careers at scale",
        description:
          "Hiring pages and application flows for organisations recruiting scientific staff continuously.",
        icon: "UserPlus",
      },
      {
        title: "Review-friendly structure",
        description:
          "Content models that make the precise, approved version the easy one to publish.",
        icon: "ClipboardList",
      },
    ],
    sections: [
      {
        heading: "Why is precision a design constraint here?",
        answer:
          "Because overstating a programme stage or a claim is a regulatory and investor-relations problem, not just weak marketing.",
        body: [
          {
            type: "list",
            items: [
              "Programme stage language is specific and must match what has actually been filed or completed.",
              "Efficacy language is constrained, and marketing instincts push directly against those constraints.",
              "Forward-looking statements need appropriate framing on investor-facing pages.",
              "Content must pass medical, legal and regulatory review, which shapes how it should be structured.",
              "A vague claim damages credibility with the scientific audience faster than no claim at all.",
            ],
          },
          {
            type: "callout",
            title: "Build for the review process",
            text: "We model content so each reviewable claim is a discrete field with its own approval state. It makes the review cycle faster and stops an approved page being quietly edited into an unapproved one.",
          },
        ],
      },
      {
        heading: "What makes a publication library work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Fast search across title, author, abstract and programme.",
              "Filtering by year, programme, publication type and author.",
              "Correct citation formatting, with DOI links that resolve.",
              "Structured data so individual publications can surface in search results.",
              "An import path so new publications do not require a developer.",
              "Accessible tables and filters, since this audience includes assistive technology users.",
            ],
          },
        ],
      },
      {
        heading: "What internal tooling do biotechs need?",
        body: [
          {
            type: "list",
            items: [
              "Sample and inventory tracking where a LIMS is oversized for the requirement.",
              "Study and experiment metadata capture with audit trails.",
              "Internal dashboards aggregating data from instruments and spreadsheets.",
              "Document and SOP management with versioning and acknowledgement tracking.",
              "Collaboration portals for external partners with scoped, revocable access.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Corporate website",
        range: "$8,000 – $25,000",
        timeline: "6–12 weeks",
        bestFor: "Pipeline, publications and investor content",
        includes: [
          "Information architecture and design",
          "Pipeline and publication systems",
          "Investor and careers sections",
          "CMS with review-friendly modelling",
        ],
        featured: true,
      },
      {
        name: "Internal tooling",
        range: "$20,000 – $60,000",
        timeline: "10–20 weeks",
        bestFor: "Research and operations software",
        includes: [
          "Process mapping and design",
          "Application build with audit trails",
          "Instrument and system integration",
          "Access control and documentation",
        ],
      },
      {
        name: "Support retainer",
        range: "from $1,200 / month",
        timeline: "Ongoing",
        bestFor: "Sites updated around milestones",
        includes: [
          "Content and milestone updates",
          "Publication imports",
          "Security patching and monitoring",
          "Accessibility regression checks",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you understand regulatory constraints on claims?",
        answer:
          "We build what your regulatory and medical affairs teams specify and structure content so review is efficient. We are not qualified to advise on what claims are permissible and will not pretend to be.",
      },
      {
        question: "Can you handle 21 CFR Part 11 requirements?",
        answer:
          "For internal systems we implement the technical controls it describes — audit trails, access control, record integrity. Validation and qualification are a formal process that sits with your quality function.",
      },
      {
        question: "Can our team update the pipeline without a developer?",
        answer:
          "Yes. Programme stages, publications and content are modelled in a CMS so updates around a milestone take minutes rather than a development cycle.",
      },
      {
        question: "Do you work with pre-clinical companies?",
        answer:
          "Yes, and the needs differ — usually a credible corporate site and investor content rather than the broader platform a commercial-stage company requires.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["healthcare", "web-development-company-san-diego", "web-development-company-raleigh-durham"],
    readMore: [
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "construction-and-trades",
    group: "industries",
    title: "Web development for construction and trades businesses",
    seoTitle: "Construction & Trades Web Development | ROVQIX",
    description:
      "Websites and software for construction firms and trades — project portals, estimating tools, field data capture and lead generation that produces qualified calls.",
    excerpt:
      "Estimating, project visibility and field data — plus a site that generates the right kind of phone call.",
    eyebrow: "Construction",
    primaryKeyword: "construction web development",
    secondaryKeywords: [
      "construction software development",
      "contractor website development",
      "trades lead generation website",
      "project management portal construction",
    ],
    answer:
      "ROVQIX builds websites and software for construction firms and trades businesses — client project portals, estimating and quoting tools, field data capture that works offline, and lead-generation sites measured on qualified enquiries.",
    intro:
      "Construction has two distinct software problems: winning the work, and running it. The second is where the money leaks, and it is usually managed on a spreadsheet.",
    proof: [
      { metric: "Offline", label: "Field capture works" },
      { metric: "Photo-first", label: "Site documentation" },
      { metric: "Tracked", label: "Every lead source" },
      { metric: "Fixed price", label: "After discovery" },
    ],
    deliverables: [
      {
        title: "Client project portals",
        description:
          "Progress, photos, documents, variations and approvals — removing most of the status phone calls.",
        icon: "LayoutDashboard",
      },
      {
        title: "Estimating and quoting",
        description:
          "Rules-based pricing with assemblies, margins and PDF output, replacing the estimator's spreadsheet.",
        icon: "Receipt",
      },
      {
        title: "Field data capture",
        description:
          "Site reports, inspections and photos captured on a phone, queued offline and synced later.",
        icon: "Activity",
      },
      {
        title: "Variation and change orders",
        description:
          "Documented, approved and priced changes, which is where margin is most commonly lost.",
        icon: "ClipboardList",
      },
      {
        title: "Lead generation sites",
        description:
          "Service and project pages built to produce qualified calls, with attribution on every enquiry.",
        icon: "Target",
      },
      {
        title: "Subcontractor access",
        description:
          "Scoped portals for subcontractors with documents, schedules and compliance status.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Where does construction margin actually leak?",
        body: [
          {
            type: "table",
            head: ["Leak", "Software response"],
            rows: [
              ["Unpriced variations", "Documented change orders with approval"],
              ["Estimating errors", "Rules-based assemblies, not free-typed spreadsheets"],
              ["Disputes over what happened", "Timestamped photo and report records"],
              ["Rework from bad information", "Current drawings accessible on site"],
              ["Chasing subcontractor compliance", "Portal with status visibility"],
              ["Time spent on status calls", "Client portal with live progress"],
            ],
          },
          {
            type: "callout",
            title: "Photos are the record",
            text: "Timestamped, geotagged site photos attached to a report resolve more disputes than any contract clause. Making photo capture effortless on a phone is usually the highest-value feature in a construction system.",
          },
        ],
      },
      {
        heading: "Why must field tools work offline?",
        body: [
          {
            type: "list",
            items: [
              "Sites frequently have poor or no signal, especially inside structures and below ground.",
              "Photos are large; uploading on a weak connection blocks the user if handled naively.",
              "Actions must queue locally and sync later with visible status.",
              "Interfaces need large targets and high contrast for gloved hands in bright sun.",
              "Battery matters — an app that drains a phone by midday will not be used.",
            ],
          },
        ],
      },
      {
        heading: "What makes a construction website generate work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Real photographs of real completed projects. Stock imagery reads as untrustworthy immediately.",
              "Specific service pages — people search the exact work, not 'construction services'.",
              "Project case detail with scale, timeline and challenges, which qualifies the enquiry.",
              "A visible phone number, since most of these leads call rather than fill a form.",
              "Honest indication of project size you take on, which filters out unviable enquiries.",
              "Fast on mobile, because that is where the search started.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Company website",
        range: "$3,000 – $8,000",
        timeline: "4–7 weeks",
        bestFor: "Firms wanting better quality enquiries",
        includes: [
          "Custom design and build",
          "Service and project pages",
          "Lead capture with attribution",
          "Performance and local structure",
        ],
      },
      {
        name: "Project platform",
        range: "$18,000 – $60,000",
        timeline: "10–20 weeks",
        bestFor: "Portals, estimating and field capture",
        includes: [
          "Process mapping and design",
          "Client and subcontractor portals",
          "Offline-capable field capture",
          "Estimating and variation handling",
          "Training and rollout",
        ],
        featured: true,
      },
      {
        name: "Support retainer",
        range: "from $700 / month",
        timeline: "Ongoing",
        bestFor: "Systems used daily on site",
        includes: [
          "Priority response",
          "Monthly enhancement hours",
          "Monitoring and backups",
          "Security patching",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our accounting or project software?",
        answer:
          "Where an API or export exists, yes. Many construction platforms integrate reasonably well; we confirm feasibility during discovery before you commit.",
      },
      {
        question: "Will site teams actually use it?",
        answer:
          "Only if it works offline, opens fast, and takes fewer taps than the current method. We design against those constraints and test with the actual crews during the prototype stage.",
      },
      {
        question: "Should we replace our existing project software?",
        answer:
          "Usually not. Integrating with it and building the specific missing piece is cheaper and lower risk than replacing a system that already handles scheduling and accounting.",
      },
      {
        question: "How much does a construction website cost?",
        answer:
          "Typically $3,000 to $8,000 depending on service count, photography and integrations. You get a fixed number before work starts.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["manufacturing-and-industrial", "web-development-company-phoenix", "web-application-development"],
    readMore: [
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "home-services",
    group: "industries",
    title: "Web development for home services businesses",
    seoTitle: "Home Services Web Development | ROVQIX",
    description:
      "Websites for HVAC, plumbing, electrical, roofing and home services — built for booking and phone calls, with scheduling integration and honest lead attribution.",
    excerpt:
      "One measure of success: more of the right phone calls. Everything else serves that.",
    eyebrow: "Home services",
    primaryKeyword: "home services web development",
    secondaryKeywords: [
      "hvac website development",
      "plumbing website design",
      "contractor lead generation website",
      "home services booking website",
    ],
    answer:
      "ROVQIX builds websites for home services businesses — HVAC, plumbing, electrical, roofing and similar trades — focused on generating qualified calls and online bookings, with scheduling integration, local structured data and attribution on every enquiry.",
    intro:
      "Home services sites are judged on one number. We agree that number before starting, baseline it, and report against it afterwards.",
    proof: [
      { metric: "Call-first", label: "Mobile conversion" },
      { metric: "Local schema", label: "Implemented accurately" },
      { metric: "Attributed", label: "Every enquiry source" },
      { metric: "$2.5k–$8k", label: "Typical cost" },
    ],
    deliverables: [
      {
        title: "Call-first mobile design",
        description:
          "Phone number persistently reachable, because most of these leads call rather than fill a form.",
        icon: "Phone",
      },
      {
        title: "Service pages",
        description:
          "One genuinely distinct page per service, since people search the exact job they need done.",
        icon: "Network",
      },
      {
        title: "Booking integration",
        description:
          "Online scheduling connected to your dispatch system rather than creating another inbox.",
        icon: "CalendarCheck",
      },
      {
        title: "Local structured data",
        description:
          "LocalBusiness, service and review schema built from your real business information.",
        icon: "Blocks",
      },
      {
        title: "Attribution",
        description:
          "Calls, forms and chat tracked to source so you can tell which marketing spend works.",
        icon: "BarChart3",
      },
      {
        title: "Emergency call paths",
        description:
          "Clear, fast routes for urgent jobs, which are usually the highest-value enquiries.",
        icon: "Zap",
      },
    ],
    sections: [
      {
        heading: "What actually generates calls?",
        body: [
          {
            type: "table",
            head: ["Factor", "Effect"],
            rows: [
              ["Phone number always visible", "Largest single conversion factor"],
              ["Page speed on mobile", "Slow pages lose the visitor before the content"],
              ["Specific service pages", "Matches how people actually search"],
              ["Real photos of your team and vans", "Stock imagery reduces trust"],
              ["Pricing signals or ranges", "Filters out unviable enquiries"],
              ["Reviews shown honestly", "Third-party reviews beat curated quotes"],
              ["Service area stated plainly", "Prevents wasted calls both directions"],
            ],
          },
        ],
      },
      {
        heading: "How many service area pages should you have?",
        answer:
          "Only as many as you can write genuinely distinct content for — usually far fewer than you expect.",
        body: [
          {
            type: "p",
            text: "Generating a page per suburb by substituting the city name is a well-known pattern, and search engines handle it accordingly. Most get filtered as duplicates; the survivors rank poorly.",
          },
          {
            type: "list",
            items: [
              "Create area pages only where you genuinely work and can say something specific.",
              "Include real local content: jobs completed, local considerations, permit or code specifics.",
              "Different photos and testimonials per page, not the same three rotated.",
              "If you cannot write two hundred meaningful words about an area, do not make the page.",
              "Fewer, better pages consistently outperform many thin ones.",
            ],
          },
          {
            type: "callout",
            title: "We will build fewer pages than you ask for",
            text: "Clients frequently arrive wanting fifty suburb pages. We usually recommend six to ten with real content. It performs better and costs less.",
          },
        ],
      },
      {
        heading: "How do you measure whether it worked?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Baseline current call and form volume by source before anything changes.",
              "Instrument calls, forms and chat with attribution at launch.",
              "Report qualified enquiries, not sessions.",
              "Review at 60 and 90 days with the numbers, including where it underperformed.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Single-location site",
        range: "$2,500 – $6,000",
        timeline: "3–6 weeks",
        bestFor: "One business, one service area",
        includes: [
          "Custom design and build",
          "Service and area pages",
          "Booking or call tracking integration",
          "Local structured data",
        ],
        featured: true,
      },
      {
        name: "Multi-location",
        range: "$6,000 – $15,000",
        timeline: "6–10 weeks",
        bestFor: "Franchises and multi-branch operators",
        includes: [
          "Location architecture and finder",
          "Per-location content management",
          "Shared component system",
          "Per-location attribution",
        ],
      },
      {
        name: "Support retainer",
        range: "from $400 / month",
        timeline: "Ongoing",
        bestFor: "Businesses running seasonal campaigns",
        includes: [
          "Content and seasonal updates",
          "Performance monitoring",
          "Security patching",
          "Quarterly conversion review",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you do the ongoing SEO too?",
        answer:
          "We handle technical SEO and site structure. Ongoing local SEO, Google Business Profile management and review generation are better served by a local specialist, and we work alongside them regularly.",
      },
      {
        question: "Can you integrate with our dispatch software?",
        answer:
          "Where it offers an API or embeddable booking, yes. Field service platforms vary considerably, so we confirm during scoping rather than assuming.",
      },
      {
        question: "Should we run ads to the site?",
        answer:
          "Often, yes — home services is a strong paid-search category. Make sure attribution is working first, or you will not be able to tell which campaigns are profitable.",
      },
      {
        question: "How much should we budget?",
        answer:
          "$2,500 to $6,000 for a single-location site, plus around $400 a month for maintenance. Multi-location operations are $6,000 to $15,000.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-development-company-phoenix", "construction-and-trades", "technical-seo-services"],
    readMore: [
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "The anatomy of a converting landing page", href: "/blog/anatomy-of-a-converting-landing-page" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "travel-and-tourism",
    group: "industries",
    title: "Web development for travel and tourism businesses",
    seoTitle: "Travel & Tourism Web Development | ROVQIX",
    description:
      "Websites for tour operators, destinations and travel businesses — booking integration, itinerary presentation, multi-currency and image-heavy pages that load fast.",
    excerpt:
      "Inspiration-led browsing, transactional booking, and a mobile audience often on roaming data.",
    eyebrow: "Travel",
    primaryKeyword: "travel website development",
    secondaryKeywords: [
      "tour operator website development",
      "tourism website design",
      "booking website development",
      "travel ecommerce development",
    ],
    answer:
      "ROVQIX builds websites for tour operators, destinations, accommodation and travel businesses — with booking system integration, itinerary and experience presentation, multi-currency support and image-heavy pages engineered to load quickly on mobile connections.",
    intro:
      "Travel sites have to do two contradictory things: inspire slowly with large imagery, and convert quickly on a phone with poor signal.",
    proof: [
      { metric: "Direct", label: "Bookings over OTA commission" },
      { metric: "< 2.5s", label: "LCP with heavy imagery" },
      { metric: "Multi-currency", label: "Where it matters" },
      { metric: "Mobile-first", label: "Often on roaming" },
    ],
    deliverables: [
      {
        title: "Booking integration",
        description:
          "Availability and reservation kept on your domain where the provider allows, reducing OTA dependence.",
        icon: "CalendarCheck",
      },
      {
        title: "Itinerary presentation",
        description:
          "Day-by-day structure with maps, inclusions and practical detail that answers questions before enquiry.",
        icon: "Network",
      },
      {
        title: "Image performance",
        description:
          "Large photography that still hits performance targets on a phone on roaming data.",
        icon: "Images",
      },
      {
        title: "Multi-currency and language",
        description:
          "Correct locale routing and hreflang where you sell across markets, not a machine-translated toggle.",
        icon: "Languages",
      },
      {
        title: "Trust content",
        description:
          "Cancellation terms, insurance, safety and accreditation presented clearly — high-consideration purchases need it.",
        icon: "ShieldCheck",
      },
      {
        title: "Seasonal campaign pages",
        description:
          "Fast turnaround pages for seasonal offers and destination campaigns.",
        icon: "Zap",
      },
    ],
    sections: [
      {
        heading: "How do you reduce OTA commission dependence?",
        answer:
          "Keep the booking journey on your domain and make the direct advantage explicit and real.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Keep booking on your domain wherever the provider allows — each redirect loses people.",
              "Show availability and price inline, not behind a click into a separate system.",
              "State the direct benefit plainly: better rate, flexibility, or something the platform cannot offer.",
              "Match or beat platform rates. A comparison that favours the OTA undoes the effort.",
              "Make the mobile flow fast; abandonment here is heavily speed-driven.",
              "Report the direct-versus-platform mix in commission saved, which finance understands immediately.",
            ],
          },
          {
            type: "callout",
            title: "Platforms are a channel, not an enemy",
            text: "The goal is not leaving OTAs. It is that customers who already know your brand book directly rather than through a channel charging fifteen to twenty percent.",
          },
        ],
      },
      {
        heading: "Why is travel a high-consideration purchase?",
        body: [
          {
            type: "list",
            items: [
              "The purchase is expensive, infrequent and emotionally significant, so trust matters disproportionately.",
              "Customers research over weeks and return to your site repeatedly — findability beats persuasion.",
              "Practical questions — what is included, cancellation, fitness level, visas — determine conversion.",
              "Reviews and accreditation carry more weight than in almost any other category.",
              "Mobile browsing often happens on roaming or hotel wifi, so speed is a real constraint.",
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
              "Correct sizing per breakpoint in modern formats — usually most of the page weight removed.",
              "One eager hero image; galleries load on scroll or on interaction.",
              "Fixed aspect ratios so layout never shifts as images arrive.",
              "Maps loaded on interaction rather than on page load.",
              "An audit of review, chat and booking widgets, which are often the heaviest additions.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Operator website",
        range: "$4,000 – $12,000",
        timeline: "5–9 weeks",
        bestFor: "Tour operators and accommodation",
        includes: [
          "Custom design and build",
          "Itinerary and experience structure",
          "Booking system integration",
          "Performance and structured data",
        ],
        featured: true,
      },
      {
        name: "Multi-market platform",
        range: "$15,000 – $45,000",
        timeline: "10–18 weeks",
        bestFor: "Selling across countries and currencies",
        includes: [
          "Locale routing and hreflang",
          "Multi-currency presentation",
          "Advanced search and filtering",
          "Partner and agent portals",
        ],
      },
      {
        name: "Support retainer",
        range: "from $700 / month",
        timeline: "Ongoing",
        bestFor: "Seasonal businesses",
        includes: [
          "Seasonal campaign pages",
          "Content and pricing updates",
          "Peak-period readiness",
          "Performance monitoring",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our booking system?",
        answer:
          "Most established reservation platforms offer an API or embed. We keep the journey on your domain where the provider permits, since every handoff to another domain costs conversions.",
      },
      {
        question: "Do we need multiple languages?",
        answer:
          "Only if you genuinely sell into those markets. Where you do, we build proper locale routing with hreflang and recommend professional translation — machine translation is noticeable and costs credibility.",
      },
      {
        question: "How do you handle seasonal traffic?",
        answer:
          "Static generation and CDN serving absorb spikes well. For known peaks we load test in advance and agree a change freeze during the window.",
      },
      {
        question: "Can you build the booking engine itself?",
        answer:
          "We integrate with established engines rather than rebuilding availability, pricing and payment from scratch. That is rarely justified against what already exists.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["hospitality-and-restaurants", "web-development-company-las-vegas", "ecommerce-development"],
    readMore: [
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Canonical URLs explained", href: "/blog/canonical-urls-explained" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "staffing-and-recruitment",
    group: "industries",
    title: "Web development for staffing and recruitment firms",
    seoTitle: "Staffing & Recruitment Web Development | ROVQIX",
    description:
      "Websites and portals for staffing agencies — job boards with proper SEO, candidate and client portals, ATS integration and application flows that get completed.",
    excerpt:
      "Job boards that index properly, and application flows candidates actually finish on a phone.",
    eyebrow: "Staffing",
    primaryKeyword: "recruitment website development",
    secondaryKeywords: [
      "staffing agency website development",
      "job board development",
      "ats integration website",
      "candidate portal development",
    ],
    answer:
      "ROVQIX builds websites and portals for staffing and recruitment firms — job boards with correct JobPosting structured data and crawl management, candidate and client portals, ATS integration, and application flows designed to be completed on a phone.",
    intro:
      "Recruitment sites have a specific technical problem: thousands of short-lived pages that must index quickly, rank briefly, and be removed cleanly.",
    proof: [
      { metric: "JobPosting", label: "Schema done properly" },
      { metric: "Fast index", label: "New roles live quickly" },
      { metric: "Mobile apply", label: "Where candidates are" },
      { metric: "Clean expiry", label: "Filled roles handled" },
    ],
    deliverables: [
      {
        title: "Job board architecture",
        description:
          "Fast search and filtering that does not generate infinite crawlable URL combinations.",
        icon: "Search",
      },
      {
        title: "JobPosting structured data",
        description:
          "Accurate schema with valid dates and locations so roles are eligible for job search results.",
        icon: "Blocks",
      },
      {
        title: "Expiry handling",
        description:
          "Filled and expired roles handled deliberately — 410, redirect or archive, decided rather than defaulted.",
        icon: "RefreshCw",
      },
      {
        title: "Mobile application flow",
        description:
          "Short, resumable applications with phone-camera document upload and no forced account creation.",
        icon: "UserPlus",
      },
      {
        title: "ATS integration",
        description:
          "Two-way sync with your applicant tracking system so nobody re-keys candidate data.",
        icon: "Plug",
      },
      {
        title: "Client portals",
        description:
          "Vacancy status, candidate pipeline and document exchange for the employers you serve.",
        icon: "LayoutDashboard",
      },
    ],
    sections: [
      {
        heading: "What is technically hard about a job board?",
        answer:
          "Thousands of short-lived pages that must index fast, avoid duplicate-content problems, and expire cleanly.",
        body: [
          {
            type: "list",
            items: [
              "New roles need indexing within days, not weeks, so sitemaps and internal linking must be immediate.",
              "Filter combinations can generate enormous numbers of near-identical URLs and waste crawl budget.",
              "Similar roles across locations risk being treated as duplicates.",
              "Expired roles left live damage user trust and search quality signals.",
              "JobPosting schema with stale validThrough dates causes search feature removal.",
            ],
          },
          {
            type: "callout",
            title: "Handle expiry deliberately",
            text: "Leaving filled roles live is the most common mistake on recruitment sites. Decide the policy — remove with 410, redirect to the category, or keep with a clear filled state — and implement it consistently.",
          },
        ],
      },
      {
        heading: "Why do candidates abandon applications?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Forced account creation before applying. It is the single largest drop-off point.",
              "Re-typing a CV into form fields that a parser could have filled.",
              "Document upload that does not work from a phone camera.",
              "No save-and-resume, so an interruption loses everything.",
              "Twenty questions when five would do for a first-stage screen.",
              "No confirmation or status afterwards, which damages the employer brand you are representing.",
            ],
          },
        ],
      },
      {
        heading: "What do client portals need?",
        body: [
          {
            type: "list",
            items: [
              "Vacancy status and pipeline visibility without needing to call an account manager.",
              "Candidate profiles with the documents and notes relevant to that client only.",
              "Interview scheduling and feedback capture.",
              "Timesheet and placement records for contract staffing.",
              "Scoped access so a client sees only their own roles and candidates.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Agency website",
        range: "$4,000 – $10,000",
        timeline: "5–8 weeks",
        bestFor: "Firms needing a credible site plus job board",
        includes: [
          "Custom design and build",
          "Job board with search and schema",
          "ATS integration",
          "Mobile application flow",
        ],
        featured: true,
      },
      {
        name: "Portal platform",
        range: "$18,000 – $50,000",
        timeline: "10–18 weeks",
        bestFor: "Candidate and client portals",
        includes: [
          "Portal design and build",
          "Role-based access and scoping",
          "ATS and payroll integration",
          "Timesheets and placement records",
        ],
      },
      {
        name: "Support retainer",
        range: "from $700 / month",
        timeline: "Ongoing",
        bestFor: "High-volume job boards",
        includes: [
          "Indexing and coverage monitoring",
          "Integration monitoring",
          "Monthly enhancement hours",
          "Security patching",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our ATS?",
        answer:
          "Most major applicant tracking systems offer APIs — Bullhorn, Greenhouse, Workable and others. We confirm the specific capabilities during discovery, as coverage varies by plan.",
      },
      {
        question: "Will our jobs appear in Google job search?",
        answer:
          "With correct JobPosting structured data, accurate dates and clean expiry handling, they are eligible. Eligibility is not a guarantee, but most sites that fail to appear fail on schema accuracy rather than anything else.",
      },
      {
        question: "How do we stop filter pages wasting crawl budget?",
        answer:
          "Decide which combinations are indexable — usually role type plus location — give those real pages, and canonicalise or block the rest. Left unmanaged, four filters can produce thousands of near-duplicate URLs.",
      },
      {
        question: "Can candidates apply without creating an account?",
        answer:
          "Yes, and they should be able to. Forced registration before applying is the largest single cause of abandonment on recruitment sites.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-application-development", "technical-seo-services", "saas-development"],
    readMore: [
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "media-and-publishing",
    group: "industries",
    title: "Web development for media and publishing",
    seoTitle: "Media & Publishing Web Development | ROVQIX",
    description:
      "Websites for publishers and media businesses — editorial workflow, high-traffic performance, ad stack management, subscriptions and content architecture that ranks.",
    excerpt:
      "Where page speed, the ad stack and editorial velocity are in permanent tension.",
    eyebrow: "Media",
    primaryKeyword: "publishing website development",
    secondaryKeywords: [
      "media website development",
      "editorial cms development",
      "news website performance",
      "subscription paywall development",
    ],
    answer:
      "ROVQIX builds websites for publishers and media businesses — editorial workflows, high-traffic architecture, ad stack performance management, subscription and paywall integration, and content structures built for search and AI citation.",
    intro:
      "Publishing has a structural conflict: the ad stack pays for the content and simultaneously destroys the page performance that helps the content get found.",
    proof: [
      { metric: "Ad-aware", label: "Performance work" },
      { metric: "Editorial", label: "Workflow designed for speed" },
      { metric: "Spike-ready", label: "Traffic surges absorbed" },
      { metric: "Citable", label: "Structured for AI search" },
    ],
    deliverables: [
      {
        title: "Editorial workflow",
        description:
          "Draft, review, embargo and publish states matching how your newsroom actually works.",
        icon: "PenTool",
      },
      {
        title: "Ad stack performance",
        description:
          "Measuring what each ad unit and tag genuinely costs, and reserving space so it does not shift layout.",
        icon: "Gauge",
      },
      {
        title: "Traffic spike handling",
        description:
          "Static and edge-cached delivery so a story going viral is a good day, not an outage.",
        icon: "Activity",
      },
      {
        title: "Subscriptions and paywalls",
        description:
          "Metering, registration walls and subscription billing that do not block crawlers incorrectly.",
        icon: "CreditCard",
      },
      {
        title: "Content architecture",
        description:
          "Topics, series, authors and archives structured so old content stays findable and keeps earning.",
        icon: "Network",
      },
      {
        title: "AI-citable structure",
        description:
          "Server-rendered content with clear structure and attribution, so answer engines can cite you correctly.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "How do you balance ad revenue and page speed?",
        answer:
          "By measuring the revenue and the performance cost of each unit, then making it a business decision rather than an argument.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Measure each ad unit and tag for main-thread cost and layout impact.",
              "Reserve fixed space for every slot so late-loading ads cannot shift content.",
              "Lazy-load below-the-fold units, which usually costs little revenue and saves a lot.",
              "Audit the tag stack — most publishers carry tags nobody can attribute to a current contract.",
              "Never let an ad be the largest contentful paint element.",
              "Report revenue per session alongside Core Web Vitals so the trade-off is visible.",
            ],
          },
          {
            type: "callout",
            title: "Make it a revenue conversation",
            text: "Arguing that ads are slow gets nowhere. Showing that a specific unit costs 600ms and generates a measurable amount per thousand sessions turns it into a decision the commercial team can make.",
          },
        ],
      },
      {
        heading: "What does editorial workflow need?",
        body: [
          {
            type: "list",
            items: [
              "Fast publishing — seconds, not a full rebuild, when a story is breaking.",
              "Draft preview shareable with people who do not have CMS accounts.",
              "Embargo and scheduled publishing that reliably fires.",
              "Revision history and the ability to correct a published piece with an audit trail.",
              "Multi-author attribution and contributor profiles.",
              "Media handling that does not require an editor to resize an image manually.",
            ],
          },
        ],
      },
      {
        heading: "How should archives be handled?",
        body: [
          {
            type: "p",
            text: "Old content is an asset. Publishers routinely lose substantial organic traffic during redesigns by breaking archive URLs or removing content that was still ranking.",
          },
          {
            type: "list",
            items: [
              "Never change archive URLs without a mapped 301 for every one.",
              "Keep topic and author pages, which distribute authority through the archive.",
              "Mark clearly when a piece is old, rather than deleting it.",
              "Update evergreen pieces rather than republishing them at a new URL.",
              "Monitor which archive pages still earn traffic before any structural change.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Publication site",
        range: "$8,000 – $25,000",
        timeline: "6–12 weeks",
        bestFor: "Publishers rebuilding their platform",
        includes: [
          "Editorial CMS and workflow",
          "Content architecture and archives",
          "Ad stack integration and budgets",
          "Performance engineering",
        ],
        featured: true,
      },
      {
        name: "Subscription platform",
        range: "$20,000 – $60,000",
        timeline: "10–20 weeks",
        bestFor: "Adding paid subscriptions",
        includes: [
          "Metering and paywall logic",
          "Subscription billing and management",
          "Account and preference centre",
          "Crawler-safe implementation",
        ],
      },
      {
        name: "Performance retainer",
        range: "from $1,200 / month",
        timeline: "Ongoing",
        bestFor: "Keeping speed under ad pressure",
        includes: [
          "Continuous Core Web Vitals monitoring",
          "Ad stack performance review",
          "Regression alerts and fixes",
          "Monthly reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a paywall hurt our SEO?",
        answer:
          "Not if implemented correctly with the appropriate structured data and a consistent policy for crawlers. Cloaking — showing crawlers different content than users — is what causes penalties, and it is avoidable.",
      },
      {
        question: "Can you work with our existing ad stack?",
        answer:
          "Yes. We measure each unit's cost, reserve space to prevent layout shift, and lazy-load what can be deferred. We do not remove revenue-generating units without a numbers-based conversation.",
      },
      {
        question: "How do we get cited by AI answer engines?",
        answer:
          "Server-rendered content, clear structure, explicit attribution and precise self-contained passages. It overlaps heavily with good SEO, with extra emphasis on whether a paragraph makes sense extracted alone.",
      },
      {
        question: "Can you handle a viral traffic spike?",
        answer:
          "Static generation with edge caching absorbs spikes well — the load is served from the CDN rather than your origin. We test against realistic surge volumes before launch.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["ai-seo-services", "website-speed-optimization", "headless-cms-development"],
    readMore: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "franchise-and-multi-location",
    group: "industries",
    title: "Web development for franchises and multi-location businesses",
    seoTitle: "Franchise & Multi-Location Web Development | ROVQIX",
    description:
      "Websites for franchises and multi-location brands — location architecture, local content control, brand consistency and per-location tracking that actually works.",
    excerpt:
      "Brand consistency at the centre, genuine local content at the edge, without fifty separate websites.",
    eyebrow: "Franchise",
    primaryKeyword: "franchise website development",
    secondaryKeywords: [
      "multi location website development",
      "franchise web platform",
      "location finder development",
      "multi site brand management",
    ],
    answer:
      "ROVQIX builds websites for franchises and multi-location businesses using one platform with per-location content — shared brand components, a location finder, local management access, per-location structured data and tracking, rather than dozens of separate sites.",
    intro:
      "The recurring franchise problem is governance: corporate wants brand consistency, franchisees want local control, and separate sites give everyone the worst of both.",
    proof: [
      { metric: "One platform", label: "Not 50 sites" },
      { metric: "Local control", label: "Within brand guardrails" },
      { metric: "Per-location", label: "Schema and tracking" },
      { metric: "Scales", label: "New location in minutes" },
    ],
    deliverables: [
      {
        title: "Location architecture",
        description:
          "A real page per location with its own hours, staff, offers and structured data on one codebase.",
        icon: "Network",
      },
      {
        title: "Location finder",
        description:
          "Fast search that works with and without location services, and handles the nearest-location case well.",
        icon: "Search",
      },
      {
        title: "Governed local editing",
        description:
          "Franchisees edit their own content within components that cannot break the brand or accessibility.",
        icon: "ShieldCheck",
      },
      {
        title: "Per-location tracking",
        description:
          "Attribution by location so both corporate and each franchisee can see their own performance.",
        icon: "BarChart3",
      },
      {
        title: "Local structured data",
        description:
          "Accurate LocalBusiness schema per location, generated from the same data the page renders from.",
        icon: "Blocks",
      },
      {
        title: "Rapid onboarding",
        description:
          "A new location live in minutes from a form, not a development ticket.",
        icon: "Rocket",
      },
    ],
    sections: [
      {
        heading: "Why is one platform better than separate sites?",
        body: [
          {
            type: "table",
            head: ["", "Separate sites", "One platform"],
            rows: [
              ["Brand consistency", "Drifts within a year", "Enforced by components"],
              ["Domain authority", "Split across domains", "Consolidated"],
              ["Cost per location", "Full site each", "Marginal"],
              ["Adding a location", "New project", "A form submission"],
              ["Security patching", "Every site separately", "Once"],
              ["Reporting", "Aggregated manually", "Built in"],
              ["Local control", "Total, including breaking things", "Governed"],
            ],
          },
          {
            type: "callout",
            title: "Split domains split authority",
            text: "Fifty franchise sites on fifty domains each start from zero. One domain with fifty well-structured location pages compounds authority across all of them, which is usually the single biggest SEO argument here.",
          },
        ],
      },
      {
        heading: "How do you balance corporate control and local flexibility?",
        answer:
          "Give franchisees a fixed set of components they can fill and arrange, not a blank page.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Corporate owns brand components, typography, colour and page templates.",
              "Locations own their content: hours, staff, photos, offers, local news.",
              "Locations can add pages from approved components, not from arbitrary HTML.",
              "Required fields — hours, address, phone — cannot be left empty or malformed.",
              "Corporate can push a brand-wide announcement to every location instantly.",
              "An approval queue for anything a franchisee wants outside the component set.",
            ],
          },
        ],
      },
      {
        heading: "What about location pages and duplicate content?",
        body: [
          {
            type: "list",
            items: [
              "Each location page needs genuinely distinct content, not the same paragraph with a city swapped.",
              "Local staff, local photos, local offers and local practical information make the difference.",
              "Structured data must reflect the real address, hours and phone for that location.",
              "A location that is genuinely identical to another and has no local content probably should not have a page.",
              "Aggregate service content lives once at brand level and is linked, not duplicated per location.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Multi-location site",
        range: "$8,000 – $22,000",
        timeline: "6–12 weeks",
        bestFor: "5–50 locations on one brand",
        includes: [
          "Location architecture and finder",
          "Governed local editing",
          "Per-location schema and tracking",
          "Corporate content management",
        ],
        featured: true,
      },
      {
        name: "Franchise platform",
        range: "$25,000 – $70,000",
        timeline: "12–24 weeks",
        bestFor: "Large networks with franchisee portals",
        includes: [
          "Everything in multi-location",
          "Franchisee portal and onboarding",
          "Approval workflow",
          "Network-wide reporting",
          "Training and rollout",
        ],
      },
      {
        name: "Support retainer",
        range: "from $900 / month",
        timeline: "Ongoing",
        bestFor: "Growing networks",
        includes: [
          "New location onboarding support",
          "Franchisee support",
          "Monitoring and patching",
          "Quarterly performance review",
        ],
      },
    ],
    faqs: [
      {
        question: "Can franchisees have their own domains?",
        answer:
          "Technically yes, but we usually recommend against it. Separate domains split your domain authority and multiply maintenance. Location pages on the main domain almost always perform better.",
      },
      {
        question: "How do we stop franchisees breaking the brand?",
        answer:
          "They compose from approved components rather than editing freely. They get real local control over content while structure, typography and colour stay fixed.",
      },
      {
        question: "Can each location see its own analytics?",
        answer:
          "Yes — per-location attribution with scoped dashboard access, so a franchisee sees their own numbers and corporate sees the network.",
      },
      {
        question: "How fast can we add a location?",
        answer:
          "Minutes, from a form. Address, hours, photos and contact details produce a complete page with correct structured data, no development ticket required.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["home-services", "hospitality-and-restaurants", "technical-seo-services"],
    readMore: [
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "marketplaces",
    group: "industries",
    title: "Marketplace development: two-sided platforms",
    seoTitle: "Marketplace Development Services | ROVQIX",
    description:
      "Two-sided marketplace development — supply and demand onboarding, matching, payments and escrow, trust and safety, and the cold-start problem.",
    excerpt:
      "The engineering is tractable. Liquidity, trust and payments are where marketplaces actually fail.",
    eyebrow: "Marketplaces",
    primaryKeyword: "marketplace development",
    secondaryKeywords: [
      "two sided marketplace development",
      "build a marketplace platform",
      "marketplace mvp development",
      "marketplace payment escrow",
    ],
    answer:
      "ROVQIX builds two-sided marketplace platforms — supplier and buyer onboarding, listing and search, matching, split payments and escrow, reviews and trust and safety tooling. The hardest problems are liquidity and trust rather than the software itself.",
    intro:
      "Marketplace software is well understood. What kills marketplaces is launching both sides at once with no liquidity, and underestimating how much trust and safety tooling is needed.",
    proof: [
      { metric: "Two-sided", label: "Both onboarding flows" },
      { metric: "Split payments", label: "Escrow and payouts" },
      { metric: "Trust & safety", label: "Built, not deferred" },
      { metric: "$25k+", label: "Realistic MVP" },
    ],
    deliverables: [
      {
        title: "Dual onboarding",
        description:
          "Separate, well-designed flows for supply and demand — they have almost nothing in common.",
        icon: "UserPlus",
      },
      {
        title: "Listings and search",
        description:
          "Fast faceted search with ranking logic you control, since discovery determines liquidity.",
        icon: "Search",
      },
      {
        title: "Split payments",
        description:
          "Marketplace payment infrastructure with escrow, commission, payouts and refund handling.",
        icon: "CreditCard",
      },
      {
        title: "Trust and safety",
        description:
          "Verification, reviews, dispute handling and moderation tooling — needed from day one, not later.",
        icon: "ShieldCheck",
      },
      {
        title: "Messaging",
        description:
          "In-platform communication so transactions do not leak off-platform and out of your commission.",
        icon: "MessageSquare",
      },
      {
        title: "Admin and ops console",
        description:
          "The tooling your operations team needs to intervene, refund, suspend and investigate.",
        icon: "LayoutDashboard",
      },
    ],
    sections: [
      {
        heading: "What makes marketplaces hard?",
        answer:
          "The cold-start problem, disintermediation, and trust — none of which are solved by writing more code.",
        body: [
          {
            type: "table",
            head: ["Problem", "What it means", "Common response"],
            rows: [
              ["Cold start", "Neither side joins without the other", "Seed one side manually first"],
              ["Disintermediation", "Users transact off-platform", "Make on-platform genuinely better"],
              ["Trust", "Strangers transacting money", "Verification, escrow, reviews"],
              ["Quality control", "Bad suppliers poison the pool", "Curation and moderation tooling"],
              ["Unit economics", "Commission must cover acquisition", "Model before building"],
            ],
          },
          {
            type: "callout",
            title: "Solve one side manually first",
            text: "Most successful marketplaces started by manually recruiting and servicing one side. Building a beautiful two-sided platform and launching to an empty listing page is the most common and most expensive failure mode.",
          },
        ],
      },
      {
        heading: "How do payments work in a marketplace?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Use marketplace payment infrastructure — Stripe Connect or equivalent — rather than building it.",
              "Supplier onboarding includes identity and bank verification, which the provider handles.",
              "Funds are held in escrow until the delivery condition is met.",
              "Commission is deducted at the split rather than invoiced separately.",
              "Payouts run on a schedule with clear supplier-facing statements.",
              "Refunds and disputes need defined flows before launch, because they will happen in week one.",
            ],
          },
          {
            type: "p",
            text: "Handling marketplace money yourself means money transmitter considerations, KYC obligations and reconciliation complexity. Almost no early-stage marketplace should take that on.",
          },
        ],
      },
      {
        heading: "What does a realistic marketplace MVP include?",
        body: [
          {
            type: "list",
            items: [
              "Both onboarding flows, with verification appropriate to the risk.",
              "Listings, search and a single well-designed transaction flow.",
              "Split payments with escrow and payouts.",
              "In-platform messaging.",
              "Reviews in both directions.",
              "An admin console for intervention, because you will be intervening constantly at first.",
            ],
          },
          {
            type: "p",
            text: "That is realistically $25,000 to $60,000 and 12 to 20 weeks. Marketplaces are more expensive than single-sided products because you are effectively building two applications plus a payments layer.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Validation sprint",
        range: "$4,000 – $8,000",
        timeline: "2–4 weeks",
        bestFor: "Modelling economics and testing the concept",
        includes: [
          "Unit economics modelling",
          "Both-sided flow design",
          "Clickable prototype",
          "Costed build roadmap",
        ],
      },
      {
        name: "Marketplace MVP",
        range: "$25,000 – $60,000",
        timeline: "12–20 weeks",
        bestFor: "Launching a real transacting platform",
        includes: [
          "Both onboarding flows",
          "Listings, search and transactions",
          "Split payments and escrow",
          "Reviews and messaging",
          "Admin and operations console",
        ],
        featured: true,
      },
      {
        name: "Growth retainer",
        range: "from $4,000 / month",
        timeline: "Ongoing",
        bestFor: "Iterating toward liquidity",
        includes: [
          "Two-week delivery cycles",
          "Search and matching improvements",
          "Trust and safety tooling",
          "Infrastructure and monitoring",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a marketplace cost to build?",
        answer:
          "A realistic MVP is $25,000 to $60,000 over 12 to 20 weeks. It costs more than a single-sided product because you are building two applications plus a payments and trust layer.",
      },
      {
        question: "Should we build payments ourselves?",
        answer:
          "No. Use Stripe Connect or an equivalent marketplace payments provider. Handling funds yourself introduces regulatory obligations that are entirely disproportionate for an early-stage platform.",
      },
      {
        question: "How do we stop users transacting off-platform?",
        answer:
          "Make on-platform genuinely better — escrow protection, dispute resolution, reviews, scheduling. Enforcement alone does not work; users leave when the platform adds no value beyond introduction.",
      },
      {
        question: "Can we launch with just one side?",
        answer:
          "Usually you should. Manually recruit and service supply, sell to demand by hand, and build the platform once you know the transaction actually works. It is slower to look impressive and much faster to reach liquidity.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["saas-development", "mvp-development-services", "fintech"],
    readMore: [
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "Designing reliable webhooks", href: "/blog/webhooks-design-guide" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "automotive-and-mobility",
    group: "industries",
    title: "Web development for automotive and mobility businesses",
    seoTitle: "Automotive & Mobility Web Development | ROVQIX",
    description:
      "Websites and software for automotive businesses — dealer inventory, service booking, dealer portals, fleet dashboards and telemetry interfaces.",
    excerpt:
      "Inventory that changes hourly, service booking that fills the bay, and fleet data that arrives constantly.",
    eyebrow: "Automotive",
    primaryKeyword: "automotive web development",
    secondaryKeywords: [
      "dealership website development",
      "vehicle inventory website",
      "fleet management dashboard",
      "mobility software development",
    ],
    answer:
      "ROVQIX builds websites and software for automotive and mobility businesses — vehicle inventory sites with feed integration, service booking, dealer and franchise portals, and fleet or telemetry dashboards for mobility operators.",
    intro:
      "Automotive web work has one constant: a large, fast-changing inventory arriving from a feed that will break without warning.",
    proof: [
      { metric: "Feed-safe", label: "Resilient inventory imports" },
      { metric: "Image-heavy", label: "Still loads fast" },
      { metric: "Booking", label: "Integrated with the bay" },
      { metric: "Real-time", label: "Where it earns its cost" },
    ],
    deliverables: [
      {
        title: "Inventory integration",
        description:
          "Feed imports that validate, log and quarantine failures rather than silently emptying your listings.",
        icon: "Plug",
      },
      {
        title: "Vehicle search",
        description:
          "Fast faceted search by make, model, price, mileage and features without generating crawl bloat.",
        icon: "Search",
      },
      {
        title: "Image performance",
        description:
          "Thirty-photo vehicle galleries that still load quickly on a phone, which is where most browsing happens.",
        icon: "Images",
      },
      {
        title: "Service booking",
        description:
          "Appointment scheduling connected to your service system, with capacity and service type handling.",
        icon: "CalendarCheck",
      },
      {
        title: "Dealer portals",
        description:
          "Scoped access for dealer networks with stock, ordering, marketing assets and performance data.",
        icon: "LayoutDashboard",
      },
      {
        title: "Fleet and telemetry",
        description:
          "Dashboards for mobility operators — vehicle status, utilisation, maintenance and alerting.",
        icon: "Activity",
      },
    ],
    sections: [
      {
        heading: "How do you handle inventory feeds safely?",
        answer:
          "Validate every record, quarantine failures, and never delete listings because one import run was short.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Validate each incoming record against a schema; quarantine failures rather than rejecting the batch.",
              "Log what changed each run, so a provider's silent field rename is visible immediately.",
              "Never delete a vehicle because it vanished from one run — mark and confirm across several.",
              "Alert on anomalies: 12 vehicles today when it was 400 yesterday is an incident, not a slow day.",
              "Keep the last good import so a bad one can be rolled back.",
              "Handle sold vehicles deliberately — redirect, archive or 410, decided rather than defaulted.",
            ],
          },
          {
            type: "callout",
            title: "Sold vehicles are an SEO decision",
            text: "A dealership with high turnover creates and destroys thousands of URLs a year. Left unmanaged that is a large volume of 404s. Redirecting to the closest equivalent model page preserves most of the value.",
          },
        ],
      },
      {
        heading: "What makes vehicle pages convert?",
        body: [
          {
            type: "list",
            items: [
              "Complete, honest specification — buyers compare on detail and notice omissions.",
              "Many real photographs, loading fast, with the first one prioritised.",
              "Finance and monthly payment indication, which is how most buyers actually think about price.",
              "Availability and location clarity for multi-site dealer groups.",
              "A low-friction enquiry path, plus click-to-call for people ready to talk.",
              "Vehicle structured data so listings are eligible for enhanced search presentation.",
            ],
          },
        ],
      },
      {
        heading: "What do mobility operators need?",
        body: [
          {
            type: "list",
            items: [
              "Fleet dashboards with status, location, utilisation and maintenance due.",
              "Telemetry ingestion at a rate matched to what decisions actually require.",
              "Alerting on the conditions an operator must respond to, not on everything.",
              "Customer-facing booking and account interfaces.",
              "Reporting for utilisation, cost per vehicle and downtime.",
            ],
          },
        ],
      },
    ],
    pricing: [
      {
        name: "Dealership website",
        range: "$6,000 – $18,000",
        timeline: "6–10 weeks",
        bestFor: "Dealers needing inventory and service booking",
        includes: [
          "Custom design and build",
          "Inventory feed integration",
          "Vehicle search and detail pages",
          "Service booking integration",
        ],
        featured: true,
      },
      {
        name: "Dealer or fleet platform",
        range: "$25,000 – $70,000",
        timeline: "12–24 weeks",
        bestFor: "Networks and mobility operators",
        includes: [
          "Portal design and build",
          "Telemetry or stock integration",
          "Role-based access",
          "Dashboards and reporting",
          "Training and handover",
        ],
      },
      {
        name: "Support retainer",
        range: "from $900 / month",
        timeline: "Ongoing",
        bestFor: "Sites depending on live feeds",
        includes: [
          "Feed monitoring and fixes",
          "Performance monitoring",
          "Security patching",
          "Monthly enhancement hours",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our DMS or inventory provider?",
        answer:
          "Where a documented feed or API exists, yes. Automotive feed providers vary in quality, so we build validation and monitoring around whatever they supply rather than trusting it.",
      },
      {
        question: "How do you handle sold vehicles?",
        answer:
          "Deliberately — usually a redirect to the closest equivalent model or category page rather than a 404. With high turnover this decision has a measurable SEO impact.",
      },
      {
        question: "Can you handle thirty photos per vehicle?",
        answer:
          "Yes, with correct sizing per breakpoint, modern formats and lazy loading beyond the first image. Photo count is not the problem; unoptimised delivery is.",
      },
      {
        question: "Do you build telemetry ingestion?",
        answer:
          "We build the ingestion, storage and interface layers. We size update frequency to what decisions genuinely need rather than defaulting to real-time everywhere, which is where these systems get expensive.",
      },
    ],
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    related: ["web-development-company-detroit", "logistics-and-supply-chain", "real-estate"],
    readMore: [
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
    ],
    publishedAt: "2026-08-13",
  },
];
