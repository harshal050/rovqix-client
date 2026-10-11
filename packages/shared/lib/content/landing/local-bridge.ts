import type { LandingPage } from "./types";

/**
 * The two pages that reconcile the $349 starter tier on /local with the
 * $2,500+ custom pricing on /services and /cost. Every local page links here.
 *
 * If the starter pricing in local-shared.ts changes, update these too — they
 * are the pages a prospect reads when the two price points look contradictory.
 */
export const localBridgePages: LandingPage[] = [
  {
    slug: "small-business-website-cost",
    group: "cost",
    title: "What should a small business website cost?",
    seoTitle: "Small Business Website Cost (2026 Guide)",
    description:
      "Real costs for a small business website in 2026 — DIY builders, template starter sites and custom builds compared, with what each actually gets you.",
    excerpt:
      "Three price brackets, what each honestly buys, and how to tell which one you need.",
    eyebrow: "Cost guide",
    primaryKeyword: "small business website cost",
    secondaryKeywords: [
      "how much does a small business website cost",
      "cheap website for small business",
      "local business website price",
      "website cost for shop owners",
    ],
    answer:
      "A small business website costs $0 to $300 if you build it yourself on Squarespace or Wix, $349 to $1,290 for a template-based starter site built for you, and $2,500 to $15,000 for a custom design and build. Most local shops, salons and trades need the middle option.",
    intro:
      "Website pricing is confusing because 'website' covers a one-page site for a barber and a custom platform for a software company. Here are the three brackets that actually exist.",
    proof: [
      { metric: "$0–$300", label: "DIY builder" },
      { metric: "$349–$1,290", label: "Starter, built for you" },
      { metric: "$2,500+", label: "Custom design and build" },
      { metric: "$0–$99/mo", label: "Ongoing, all options" },
    ],
    deliverables: [
      {
        title: "DIY builder",
        description:
          "$0–$300 plus $16–$40/month. You do the work. Genuinely fine if you have the time and patience.",
        icon: "LayoutTemplate",
      },
      {
        title: "Starter site, built for you",
        description:
          "$349–$1,290 once. A proven template adapted to your business, live in about a week.",
        icon: "Rocket",
      },
      {
        title: "Custom design and build",
        description:
          "$2,500–$15,000. Designed from scratch for your brand, with whatever functionality you need.",
        icon: "PenTool",
      },
      {
        title: "Ongoing hosting",
        description:
          "$0–$50/month depending on the route. Builders include it; a starter site is cheap to host.",
        icon: "Cloud",
      },
      {
        title: "Care plan",
        description:
          "$49–$99/month if you want someone else handling updates, backups and small changes.",
        icon: "LifeBuoy",
      },
      {
        title: "Content and photos",
        description:
          "Usually free if you write and shoot it yourself. $300–$1,500 if you want it done for you.",
        icon: "Images",
      },
    ],
    sections: [
      {
        heading: "What does each bracket actually get you?",
        body: [
          {
            type: "table",
            head: ["", "DIY builder", "Starter site", "Custom build"],
            rows: [
              ["Upfront cost", "$0 – $300", "$349 – $1,290", "$2,500 – $15,000"],
              ["Your time", "20–60 hours", "About 2 hours", "5–15 hours"],
              ["Time to live", "Weeks (your pace)", "About 1 week", "4–9 weeks"],
              ["Design", "Their template", "Template adapted to you", "Designed for you"],
              ["Looks like others?", "Often", "Sometimes", "No"],
              ["Monthly cost", "$16 – $40", "$0 – $99", "$0 – $99"],
              ["Good for", "Tight budget, spare time", "Most local businesses", "Brand is a differentiator"],
            ],
          },
          {
            type: "callout",
            title: "The middle option is missing from most advice",
            text: "Online guides usually present DIY or a $5,000 agency build. For a barber, salon or trades business, a template-based site built properly by someone else is the option that actually fits — and almost nobody talks about it.",
          },
        ],
      },
      {
        heading: "How do you know which one you need?",
        answer:
          "Work out what a new customer is worth, and how much of your own time you can genuinely spare.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "If a customer is worth under $50 and you have spare evenings, build it yourself on Squarespace.",
              "If you have no time and need it working, a starter site pays for itself in a handful of customers.",
              "If your competitors all look the same and you want to charge more than them, go custom.",
              "If you need bookings, ordering or accounts, that is a starter site at minimum.",
              "If you are pre-revenue and testing an idea, DIY or one page. Do not spend $3,000 yet.",
            ],
          },
          {
            type: "p",
            text: "For a barber charging $35 a cut, a $500 website needs about fifteen new customers to pay for itself. That is usually a few weeks. For a roofer, one job covers it.",
          },
        ],
      },
      {
        heading: "What are the hidden costs?",
        body: [
          {
            type: "list",
            items: [
              "Domain name — $12 to $20 a year, whichever route you take.",
              "Business email — $6 to $7 per user per month if you want name@yourbusiness.com.",
              "Photography — the most common thing people underestimate. Phone photos are usually fine.",
              "Booking or ordering software — $0 to $80 a month, and often something you already pay for.",
              "Your own time, which is the biggest cost of the DIY route and is rarely counted.",
            ],
          },
          {
            type: "callout",
            title: "Watch for lock-in",
            text: "Some cheap website offers keep the domain in their name and the site on their platform, so leaving means starting over. Always confirm the domain is registered to you and you can take the site elsewhere.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "One-page starter",
        range: "$349 – $549",
        timeline: "About 1 week",
        bestFor: "Shops that need to be found and called",
        includes: [
          "One scrolling page with your key info",
          "Click-to-call and directions",
          "Hours, services and photos",
          "Contact form",
          "Google Business Profile linked",
        ],
      },
      {
        name: "Starter site",
        range: "$749 – $1,290",
        timeline: "1–2 weeks",
        bestFor: "Most local businesses",
        includes: [
          "4–6 pages",
          "Booking or menu if needed",
          "Galleries you can update",
          "Google reviews shown",
          "Basic local SEO",
        ],
        featured: true,
      },
      {
        name: "Custom build",
        range: "from $2,500",
        timeline: "4–9 weeks",
        bestFor: "When the brand is the differentiator",
        includes: [
          "Designed from scratch",
          "Any functionality you need",
          "Full content management",
          "Performance and SEO engineering",
          "Not a template",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I get a real website for $200?",
        answer:
          "You can get a one-page DIY site on a builder for less than that if you do it yourself. For someone to build it for you, $349 is realistically the floor — below that, corners get cut somewhere, usually on ownership or ongoing support.",
      },
      {
        question: "Why do agencies quote $5,000 for the same thing?",
        answer:
          "They are usually quoting a custom design, custom development and a discovery process. That is genuinely more work, and for some businesses it is worth it. For a local shop it often is not, and a starter site does the same job.",
      },
      {
        question: "Is Squarespace or Wix good enough?",
        answer:
          "For many small businesses, honestly yes. They are decent products. The cost is your time — expect 20 to 60 hours to get a result you are happy with, plus the ongoing monthly fee.",
      },
      {
        question: "What is the cheapest thing that actually helps my business?",
        answer:
          "Setting up your Google Business Profile properly, with real photos, correct hours and active review collection. It is free, and for most local businesses it drives more customers than the website does.",
      },
      {
        question: "Do I need to pay monthly?",
        answer:
          "Not necessarily. A starter site can be hosted for very little and you can maintain it yourself. A care plan is for people who would rather someone else handled updates, backups and small changes.",
      },
    ],
    areaServed: ["United States"],
    related: ["starter-vs-custom-website", "website-development-cost", "diy-vs-hiring-a-web-designer"],
    readMore: [
      { label: "Local business websites from $349", href: "/local" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "starter-vs-custom-website",
    group: "compare",
    title: "Starter template or custom build: which do you need?",
    seoTitle: "Starter Template vs Custom Website Build",
    description:
      "The honest difference between a $349 template-based starter site and a $2,500+ custom build — what each includes, and how to tell which one your business needs.",
    excerpt:
      "We build both. Here is how we decide which one to recommend to you.",
    eyebrow: "Comparison",
    primaryKeyword: "template vs custom website",
    secondaryKeywords: [
      "starter website vs custom build",
      "template website pros and cons",
      "custom website worth it",
      "cheap website vs professional website",
    ],
    answer:
      "A starter site is a proven template adapted to your business — $349 to $1,290, live in about a week. A custom build is designed from scratch — $2,500 to $15,000 over four to nine weeks. Choose starter when you need to be findable and credible; choose custom when the website itself has to differentiate you.",
    intro:
      "We offer both, at prices that look contradictory until you understand they are different products. This page explains the difference honestly.",
    proof: [
      { metric: "$349+", label: "Starter template" },
      { metric: "$2,500+", label: "Custom build" },
      { metric: "1 week", label: "vs 4–9 weeks" },
      { metric: "Both", label: "You own it either way" },
    ],
    deliverables: [
      {
        title: "Starter: proven layout",
        description:
          "A template that already works for your trade, adapted with your colours, photos, words and services.",
        icon: "LayoutTemplate",
      },
      {
        title: "Custom: designed for you",
        description:
          "Wireframes, design concepts and revisions. Nothing about the layout is predetermined.",
        icon: "PenTool",
      },
      {
        title: "Starter: about a week",
        description:
          "Because the structural decisions are already made and tested.",
        icon: "Clock",
      },
      {
        title: "Custom: 4–9 weeks",
        description:
          "Discovery, design rounds, build and revisions. Most of that time is decisions, not code.",
        icon: "CalendarCheck",
      },
      {
        title: "Starter: about 2 hours of yours",
        description:
          "Send photos, services and hours. Review once. Done.",
        icon: "Zap",
      },
      {
        title: "Custom: 5–15 hours of yours",
        description:
          "Discovery calls, design reviews, content decisions. Your involvement is the point.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "What is genuinely different?",
        body: [
          {
            type: "table",
            head: ["", "Starter site", "Custom build"],
            rows: [
              ["Price", "$349 – $1,290", "$2,500 – $15,000"],
              ["Time to live", "About 1 week", "4–9 weeks"],
              ["Design", "Template adapted", "From scratch"],
              ["Layout changes", "Within the template", "Anything"],
              ["Custom functionality", "No — integrations only", "Yes"],
              ["Page count", "1–6", "Unlimited"],
              ["Revisions", "One round", "Two or more rounds"],
              ["Performance work", "Good by default", "Engineered and measured"],
              ["You own it", "Yes", "Yes"],
            ],
          },
          {
            type: "callout",
            title: "It is not 'cheap' versus 'good'",
            text: "A starter site is fast, well-built and appropriate for most local businesses. A custom build is not better at being a barber's website — it is better at being distinctive, which only matters if being distinctive is worth $2,000 to you.",
          },
        ],
      },
      {
        heading: "When is a starter site the right answer?",
        answer:
          "When your customers need to find you, trust you and contact you — and your competitors' sites all look much the same anyway.",
        body: [
          {
            type: "list",
            items: [
              "You are a local service business — barber, plumber, salon, café, cleaner.",
              "Customers find you through Google Maps and check the website to confirm you are real.",
              "You need hours, services, prices, photos and a way to book or call.",
              "You would rather spend $500 now than $3,000 in three months.",
              "You do not have twenty hours to spend on design decisions.",
            ],
          },
        ],
      },
      {
        heading: "When is a custom build worth it?",
        body: [
          {
            type: "list",
            items: [
              "Your brand is a genuine differentiator and looking like everyone else costs you money.",
              "You charge premium prices and the site has to justify them.",
              "You need functionality a template cannot do — accounts, calculators, complex booking, ecommerce at scale.",
              "You have more than about ten pages, or a content structure that needs designing.",
              "The website is a main sales channel rather than a credibility check.",
              "Your competitors have good websites and yours needs to be better, not equal.",
            ],
          },
          {
            type: "p",
            text: "A useful test: if a customer would pay you more because your website looked exceptional, custom is worth considering. For most local trades the honest answer is no — they will pay the same either way, and the site just has to not put them off.",
          },
        ],
      },
      {
        heading: "Can you start with one and move to the other?",
        body: [
          {
            type: "p",
            text: "Yes, and plenty of businesses do. Start with a starter site to get online and generating enquiries, then move to a custom build in a year or two once you know what actually matters to your customers.",
          },
          {
            type: "p",
            text: "Your domain, content and photos all carry across. We do not charge extra for having built the first one, and there is no lock-in preventing you going elsewhere for the second.",
          },
        ],
      },
    ],
    pricing: [
      {
        name: "One-page starter",
        range: "$349 – $549",
        timeline: "About 1 week",
        bestFor: "Being findable and callable",
        includes: [
          "One scrolling page",
          "Click-to-call and directions",
          "Hours, services, photos",
          "Contact form",
        ],
      },
      {
        name: "Starter site",
        range: "$749 – $1,290",
        timeline: "1–2 weeks",
        bestFor: "Most local businesses",
        includes: [
          "4–6 pages",
          "Booking or menu integration",
          "Galleries and reviews",
          "Basic local SEO",
          "Self-service text editing",
        ],
        featured: true,
      },
      {
        name: "Custom build",
        range: "from $2,500",
        timeline: "4–9 weeks",
        bestFor: "When the site must differentiate",
        includes: [
          "Designed from scratch",
          "Custom functionality",
          "Full content management",
          "Performance engineering",
          "Multiple revision rounds",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a template site look cheap?",
        answer:
          "Not if the template is good and it is adapted properly with your own photos and words. What looks cheap is stock photography, placeholder text and a layout that obviously does not fit the business.",
      },
      {
        question: "Will other businesses have the same website?",
        answer:
          "Others may use the same underlying template, but with your photos, colours, services and copy it will not look like theirs. If that genuinely bothers you, that is a reason to go custom.",
      },
      {
        question: "Do I own a starter site?",
        answer:
          "Yes, exactly as you would a custom build. The domain is in your name, the content is yours, and you can move it elsewhere whenever you want.",
      },
      {
        question: "Which will rank better on Google?",
        answer:
          "Neither, inherently. Ranking comes from your Google Business Profile, reviews, content and links. Both options are technically sound; a custom build only helps if you need content and structure a template cannot support.",
      },
      {
        question: "Why do you offer both?",
        answer:
          "Because most of our work is $2,500 and up, and we kept turning away local businesses who genuinely did not need that. The starter tier exists so we can say yes to a barber without pretending they need a $5,000 build.",
      },
    ],
    areaServed: ["United States"],
    related: ["small-business-website-cost", "diy-vs-hiring-a-web-designer", "website-development-cost"],
    readMore: [
      { label: "Local business websites from $349", href: "/local" },
    ],
    publishedAt: "2026-08-13",
  },

  {
    slug: "diy-vs-hiring-a-web-designer",
    group: "compare",
    title: "DIY website builder or hire someone?",
    seoTitle: "DIY Website Builder vs Hiring a Designer",
    description:
      "Squarespace and Wix versus paying someone to build it — the real time cost, what usually goes wrong DIY, and when hiring is worth it.",
    excerpt:
      "The builders are good. The cost is 20 to 60 hours of your time, which nobody mentions.",
    eyebrow: "Comparison",
    primaryKeyword: "diy website vs hiring a designer",
    secondaryKeywords: [
      "should i build my own website",
      "squarespace vs hiring someone",
      "wix vs web designer",
      "build website yourself or pay",
    ],
    answer:
      "Building it yourself on Squarespace or Wix costs $16 to $40 a month and 20 to 60 hours of your time. Hiring someone for a starter site costs $349 to $1,290 once. If your time is worth more than about $15 an hour, hiring is usually cheaper — but DIY gives you full control and is genuinely fine for many businesses.",
    intro:
      "DIY builders are good products and we tell people to use them regularly. The question is only whether you have the hours, and whether you will actually finish.",
    proof: [
      { metric: "20–60 hrs", label: "Realistic DIY time" },
      { metric: "~2 hrs", label: "Your time, hired" },
      { metric: "$16–$40/mo", label: "Builder cost" },
      { metric: "40%", label: "DIY sites never finished" },
    ],
    deliverables: [
      {
        title: "DIY: full control",
        description:
          "Change anything, any time, without asking anyone. The genuine advantage of doing it yourself.",
        icon: "Unlock",
      },
      {
        title: "DIY: your time",
        description:
          "20 to 60 hours for a result you are happy with. More if you are particular.",
        icon: "Clock",
      },
      {
        title: "Hired: done in a week",
        description:
          "About two hours of your involvement — send photos and information, review once.",
        icon: "Zap",
      },
      {
        title: "Hired: technical basics right",
        description:
          "Speed, mobile, structured data and Google setup handled without you learning any of it.",
        icon: "Gauge",
      },
      {
        title: "DIY: ongoing monthly",
        description:
          "$16 to $40 a month, forever, to the platform.",
        icon: "CreditCard",
      },
      {
        title: "Hired: one-off possible",
        description:
          "Pay once, host cheaply, maintain it yourself if you want to.",
        icon: "Receipt",
      },
    ],
    sections: [
      {
        heading: "What is the real cost of DIY?",
        answer:
          "The subscription is trivial. The time is not, and it is the part nobody budgets for.",
        body: [
          {
            type: "table",
            head: ["Task", "Realistic time"],
            rows: [
              ["Choosing and setting up a template", "3–8 hours"],
              ["Writing the content", "5–15 hours"],
              ["Sorting and editing photos", "3–8 hours"],
              ["Making it work on mobile", "3–10 hours"],
              ["Setting up domain and email", "2–4 hours"],
              ["Google Business Profile and basic SEO", "3–6 hours"],
              ["Fixing what you broke", "2–10 hours"],
              ["Total", "21–61 hours"],
            ],
          },
          {
            type: "callout",
            title: "The most common outcome is unfinished",
            text: "A large share of DIY small business sites stall half-built. Not because the tools are bad, but because a shop owner's evening gets taken by something more urgent for six weeks running.",
          },
        ],
      },
      {
        heading: "When should you build it yourself?",
        body: [
          {
            type: "list",
            items: [
              "You genuinely enjoy this kind of thing, or want to learn it.",
              "Your budget is a real constraint right now.",
              "You want to change things constantly and not wait for anyone.",
              "You are testing a new business and are not sure it will continue.",
              "You have quiet weeks coming up and will actually finish it.",
            ],
          },
          {
            type: "p",
            text: "If two or more of those are true, use Squarespace. We would rather tell you that than take $500 for something you could have done yourself.",
          },
        ],
      },
      {
        heading: "What goes wrong most often on DIY sites?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Enormous unresized photos, making the site take eight seconds to load on a phone.",
              "It looks fine on a laptop and is broken on mobile, where most visitors actually are.",
              "No Google Business Profile, which for a local business matters more than the website.",
              "Hours that were correct at launch and have been wrong ever since.",
              "A contact form that was never tested and does not deliver anywhere.",
              "Half-finished pages left published because the launch could not wait.",
            ],
          },
          {
            type: "p",
            text: "The first three are worth checking on any DIY site right now — they are common, they are costly, and all three are fixable in an afternoon.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Squarespace or Wix better?",
        answer:
          "Squarespace generally produces a better-looking result with less effort and is harder to break. Wix gives more layout freedom, which is also more rope to hang yourself with. For most small businesses, Squarespace is the easier route.",
      },
      {
        question: "Can you fix a DIY site instead of rebuilding it?",
        answer:
          "Often, yes, and it is usually cheaper. Photo optimisation, mobile fixes and Google setup on an existing site is a few hundred dollars and frequently the highest-value thing you can do.",
      },
      {
        question: "What if I start DIY and give up?",
        answer:
          "That is very common and it is not wasted — the content and photos you gathered carry across. Send us what you have and we will build from it.",
      },
      {
        question: "Do I need a website at all?",
        answer:
          "For some local businesses, a well-run Google Business Profile plus an active Instagram genuinely covers it for a while. If you are fully booked and not chasing growth, spend the money elsewhere for now.",
      },
    ],
    areaServed: ["United States"],
    related: ["small-business-website-cost", "starter-vs-custom-website", "website-development-cost"],
    readMore: [
      { label: "Local business websites from $349", href: "/local" },
    ],
    publishedAt: "2026-08-13",
  },
];
