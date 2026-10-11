import { makeLocalPages, type LocalSpec } from "./local-builder";

/**
 * Offer pages rather than business-type pages. These target the searches where
 * someone already knows what they want done — "one page website", "google
 * business profile setup", "fix my slow website" — rather than searching by
 * their trade.
 */
const specs: LocalSpec[] = [
  {
    slug: "one-page-website-design",
    eyebrow: "One-page sites",
    title: "One-page website design",
    seoTitle: "One-Page Website Design from $349 | ROVQIX",
    description:
      "A single scrolling page with everything a customer needs — services, prices, photos, hours and a call button. Live in about a week from $349.",
    excerpt: "Everything on one page. For most small businesses that is genuinely enough.",
    primaryKeyword: "one page website design",
    secondaryKeywords: [
      "single page website",
      "one page website for small business",
      "simple website design",
      "cheap one page website",
    ],
    answer:
      "A one-page website costs $349 to $549 from ROVQIX and takes about a week. Everything lives on a single scrolling page — services, prices, photos, hours, location and a contact form — with a sticky call button on mobile.",
    intro:
      "Most small businesses do not need five pages. They need one page that answers everything and a phone number that is always one tap away.",
    deliverables: [
      {
        title: "One scrolling page",
        description:
          "Services, prices, photos, about, hours and contact, in the order a customer actually reads them.",
        icon: "LayoutTemplate",
      },
      {
        title: "Sticky call button",
        description:
          "Fixed to the bottom of the screen on mobile, so calling you is never more than one tap.",
        icon: "Phone",
      },
      {
        title: "Jump navigation",
        description:
          "A menu that scrolls to each section, so it still feels navigable despite being one page.",
        icon: "Network",
      },
      {
        title: "Contact form",
        description:
          "Delivered to your email, with spam protection, tested before launch.",
        icon: "MessageSquare",
      },
      {
        title: "Google Business Profile linked",
        description:
          "Set up or connected properly, since that is where most local customers actually find you.",
        icon: "Globe",
      },
      {
        title: "Fast on mobile",
        description:
          "One page means one load. Done properly it is the fastest kind of site there is.",
        icon: "Gauge",
      },
    ],
    sections: [
      {
        heading: "When is one page enough?",
        answer:
          "When you have one main service area, under about ten services, and no need for a blog or booking system.",
        body: [
          {
            type: "table",
            head: ["One page works", "You need more pages"],
            rows: [
              ["Single location, single trade", "Multiple locations"],
              ["Under ~10 services", "Many distinct services to rank for"],
              ["Customers call rather than research", "Long research-driven sales cycle"],
              ["No blog planned", "You will publish content regularly"],
              ["Simple pricing", "Detailed pricing per service"],
              ["Small photo set", "Large galleries by category"],
            ],
          },
          {
            type: "callout",
            title: "One page can hurt search reach",
            text: "A single page can only really rank for one main topic. If you want to rank separately for 'water heater repair' and 'drain cleaning', you need a page each. We will tell you which situation you are in before you buy.",
          },
        ],
      },
      {
        heading: "What order should the sections go in?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "What you do and where, in one line, immediately visible.",
              "Call button and hours, before anything else.",
              "Services with prices or ranges.",
              "Photos of real work.",
              "Reviews, pulled from Google.",
              "About you and any licence or insurance details.",
              "Map, address and contact form at the bottom.",
            ],
          },
          {
            type: "p",
            text: "Almost every one-page site we are asked to fix has the about section at the top and the services at the bottom. That is the wrong way round for how people actually read.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I add more pages later?",
        answer:
          "Yes, and plenty of clients do. We build it so extra pages can be added without a rebuild — usually a couple of hundred dollars each once the design exists.",
      },
      {
        question: "Is one page bad for Google?",
        answer:
          "Not inherently, but it limits you to ranking for one main topic. If you want separate visibility for several distinct services, you need separate pages. That is the honest trade-off.",
      },
      {
        question: "How fast can it be live?",
        answer:
          "About a week from when you send your photos, services and hours. Faster if you have everything ready and respond quickly to the one review round.",
      },
    ],
    related: ["google-business-profile-setup", "website-refresh-service", "barber-shop-website"],
  },

  {
    slug: "google-business-profile-setup",
    eyebrow: "Google setup",
    title: "Google Business Profile setup for local businesses",
    seoTitle: "Google Business Profile Setup Service | ROVQIX",
    description:
      "Get your Google Business Profile set up properly — categories, services, photos, hours and review strategy. For most local businesses this matters more than the website.",
    excerpt: "For a local business this usually beats the website. It is also free to run.",
    primaryKeyword: "google business profile setup",
    secondaryKeywords: [
      "google my business setup service",
      "google maps listing setup",
      "local business google listing",
      "gbp optimization service",
    ],
    answer:
      "Google Business Profile setup from ROVQIX costs $149 to $299 as a one-off. We configure categories, services, service areas, hours, photos and posts, and set up a review process — which for most local businesses drives more customers than the website does.",
    intro:
      "We will say this plainly even though it argues against selling you a website: if you only do one thing, do this. It is free to run and it is where local customers actually find you.",
    deliverables: [
      {
        title: "Correct primary category",
        description:
          "The single biggest ranking factor in local search, and the one most businesses get wrong.",
        icon: "Target",
      },
      {
        title: "Services and attributes",
        description:
          "Every service listed properly, plus attributes like wheelchair access and payment methods.",
        icon: "ClipboardList",
      },
      {
        title: "Photos done right",
        description:
          "Exterior, interior, team, work. Profiles with real photos get substantially more engagement.",
        icon: "Images",
      },
      {
        title: "Hours including holidays",
        description:
          "Set up properly, including special hours, so nobody arrives to a closed door.",
        icon: "Clock",
      },
      {
        title: "Review process",
        description:
          "A short link and a simple system for asking, since reviews are the second biggest ranking factor.",
        icon: "BadgeCheck",
      },
      {
        title: "Posts and Q&A",
        description:
          "Initial posts set up and the questions people actually ask answered in advance.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "Why does this matter more than the website?",
        answer:
          "Because most local searches are resolved on the map result without anyone clicking through to a website.",
        body: [
          {
            type: "list",
            items: [
              "Someone searching 'barber near me' sees a map with three businesses. That is the whole decision.",
              "Hours, reviews, photos and directions are all in the listing. Many never visit the website.",
              "Calls come straight from the listing, so the website is never involved.",
              "It is free. There is no reason not to have it configured properly.",
              "It works even if your website is weak, which is not true the other way round.",
            ],
          },
          {
            type: "callout",
            title: "The website still matters",
            text: "Your profile links to your site, and a credible site improves conversion from the listing. But if the budget is tight, fix the profile first and the website second.",
          },
        ],
      },
      {
        heading: "What do most businesses get wrong?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Wrong primary category. 'Beauty salon' instead of 'barber shop' changes which searches you appear in.",
              "No services listed, so you miss searches for the specific job.",
              "Three photos, all of the logo. Real photos of the work and the space matter.",
              "Hours never updated, so holidays are wrong and reviews suffer.",
              "No review process, so you have four reviews and the competitor has ninety.",
              "Service area set to the whole state, which dilutes your local relevance.",
            ],
          },
        ],
      },
      {
        heading: "How do you get reviews without being annoying?",
        body: [
          {
            type: "list",
            items: [
              "Use the short review link Google provides. Anything with more steps loses people.",
              "Ask in person at the moment the customer is happiest, then send the link by text.",
              "Make it part of the routine, not a campaign. Two a week beats twenty once.",
              "Never offer an incentive for a review — it violates Google's policy and risks the listing.",
              "Reply to every review, including the bad ones. It is visible and it matters.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is this really more important than a website?",
        answer:
          "For a local service business that customers find on a map, usually yes. We would rather tell you that than sell you a website you need less. Ideally you do both, in that order.",
      },
      {
        question: "Can I do this myself?",
        answer:
          "Absolutely, and it is free. It takes a few hours to do properly. We charge for doing it correctly and quickly, not for access to something restricted.",
      },
      {
        question: "How long until it makes a difference?",
        answer:
          "Category and service changes can show within days. Review-driven improvement takes months of consistent asking. Nobody can promise a map ranking.",
      },
      {
        question: "What if someone else claimed my listing?",
        answer:
          "It happens, usually an old owner or a marketing company. There is a reclaim process through Google and we can walk you through it, though timelines are outside anyone's control.",
      },
    ],
    related: ["one-page-website-design", "local-seo-starter", "website-refresh-service"],
  },

  {
    slug: "website-refresh-service",
    eyebrow: "Refresh",
    title: "Website refresh for small businesses",
    seoTitle: "Small Business Website Refresh from $299 | ROVQIX",
    description:
      "Update an existing site without a rebuild — new photos, corrected information, mobile fixes, speed improvements and a modern look. From $299.",
    excerpt: "Fix what is wrong with the site you have, instead of paying for a new one.",
    primaryKeyword: "website refresh service",
    secondaryKeywords: [
      "update my website",
      "website makeover small business",
      "modernize old website",
      "website update service",
    ],
    answer:
      "A website refresh from ROVQIX costs $299 to $899 and takes about a week. We fix what is actually wrong with your existing site — outdated information, poor mobile experience, slow photos, missing contact options — rather than rebuilding from scratch.",
    intro:
      "Plenty of small business sites do not need replacing. They need the hours corrected, the photos resized and the phone number made tappable.",
    deliverables: [
      {
        title: "Information audit",
        description:
          "Hours, prices, services and staff all corrected. Wrong information is the most common problem.",
        icon: "ClipboardList",
      },
      {
        title: "Mobile fixes",
        description:
          "Making it usable on a phone, which is where most of your visitors already are.",
        icon: "Phone",
      },
      {
        title: "Photo optimisation",
        description:
          "Resizing oversized images, which is usually the single biggest speed problem.",
        icon: "Images",
      },
      {
        title: "Contact improvements",
        description:
          "Tap-to-call, working forms, correct email delivery. Broken forms are alarmingly common.",
        icon: "MessageSquare",
      },
      {
        title: "Visual tidy-up",
        description:
          "Typography, spacing and colour brought up to date without a full redesign.",
        icon: "Palette",
      },
      {
        title: "Google Business Profile check",
        description:
          "Making sure the listing matches the site and is set up correctly.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "Refresh or rebuild?",
        answer:
          "Refresh if the structure works and the content is right. Rebuild if the platform itself is the problem.",
        body: [
          {
            type: "table",
            head: ["Refresh ($299–$899)", "Rebuild ($349–$1,290)"],
            rows: [
              ["Information is out of date", "Site was never finished"],
              ["Slow because of big photos", "Platform is abandoned or broken"],
              ["Looks dated but works", "Cannot be edited at all"],
              ["Not mobile-friendly", "No access to the original account"],
              ["Forms are broken", "Structure does not fit the business anymore"],
            ],
          },
          {
            type: "callout",
            title: "We will tell you which you need",
            text: "We look at the site first and give an honest answer. Sometimes the answer is that a $299 refresh solves it and a rebuild would be a waste of your money.",
          },
        ],
      },
      {
        heading: "What do we find most often?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A contact form that has not delivered an email in two years. Nobody ever tested it.",
              "Photos straight from a phone at full size, making the site take eight seconds to load.",
              "Opening hours from before the business changed them.",
              "A phone number as plain text rather than a tappable link.",
              "Staff who left, still on the team page.",
              "Prices from three years ago.",
            ],
          },
          {
            type: "p",
            text: "Test your own contact form today. Send yourself a message from your phone. It is the single most common broken thing on small business websites.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work on a site you did not build?",
        answer:
          "Usually yes, if we can get access. WordPress, Squarespace, Wix and most builders are fine. If it is on a platform nobody can access anymore, a rebuild is the only realistic route.",
      },
      {
        question: "What if I have lost the login?",
        answer:
          "Often recoverable through the domain or hosting account. If the site was built by someone unreachable and nothing is in your name, that is a genuine problem and a rebuild is usually faster.",
      },
      {
        question: "How much can a refresh actually improve things?",
        answer:
          "Correcting information and fixing mobile and speed can make a real difference to enquiries. It will not fix weak positioning or thin content — we will say so if that is the actual issue.",
      },
    ],
    related: ["website-speed-fix", "one-page-website-design", "google-business-profile-setup"],
  },

  {
    slug: "website-speed-fix",
    eyebrow: "Speed fix",
    title: "Fix a slow small business website",
    seoTitle: "Fix My Slow Website — from $249 | ROVQIX",
    description:
      "A focused fix for slow small business websites — oversized images, unnecessary scripts and mobile performance, with before and after numbers.",
    excerpt: "Usually it is the photos. We measure, fix and show you the numbers.",
    primaryKeyword: "fix slow website",
    secondaryKeywords: [
      "website too slow",
      "speed up my website",
      "website loading slowly fix",
      "improve website speed small business",
    ],
    answer:
      "A website speed fix from ROVQIX costs $249 to $699 and takes a few days. On small business sites the cause is almost always oversized images, followed by unnecessary plugins and tracking scripts. We measure before and after so the improvement is provable.",
    intro:
      "Nine times out of ten a slow small business website is slow for one reason: someone uploaded photos straight from a phone or a camera.",
    deliverables: [
      {
        title: "Measurement first",
        description:
          "Real numbers on mobile before we touch anything, so the improvement is provable rather than claimed.",
        icon: "Activity",
      },
      {
        title: "Image optimisation",
        description:
          "Resizing and converting every image. Usually removes most of the page weight on its own.",
        icon: "Images",
      },
      {
        title: "Script audit",
        description:
          "Finding tracking, chat and popup scripts that cost seconds and deliver nothing.",
        icon: "Plug",
      },
      {
        title: "Plugin cleanup",
        description:
          "On WordPress especially, removing plugins that are unused or duplicating each other.",
        icon: "Blocks",
      },
      {
        title: "Caching and delivery",
        description:
          "Basic caching and a content network, which is often free and rarely configured.",
        icon: "Gauge",
      },
      {
        title: "Before and after report",
        description:
          "The numbers, in plain language, so you can see exactly what changed.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "Why does site speed matter for a small business?",
        answer:
          "Because most of your visitors are on a phone, often on mobile data, and they leave.",
        body: [
          {
            type: "list",
            items: [
              "A visitor searching for a plumber will try the next result rather than wait five seconds.",
              "Google uses speed as a ranking signal, though content and reviews matter more locally.",
              "If you run ads, a slow page wastes the money you paid for the click.",
              "Slow sites feel unprofessional, which affects whether people trust you with a job.",
            ],
          },
          {
            type: "callout",
            title: "Test it on your own phone, on mobile data",
            text: "Turn off wifi and load your website. If it takes more than three seconds, you are losing customers. That is the only test that matters, and it takes ten seconds to run.",
          },
        ],
      },
      {
        heading: "What actually makes small business sites slow?",
        body: [
          {
            type: "table",
            head: ["Cause", "How common", "Fix difficulty"],
            rows: [
              ["Unresized photos", "Very common", "Easy"],
              ["Too many plugins", "Common on WordPress", "Easy"],
              ["Chat and popup widgets", "Common", "Easy — a decision"],
              ["Multiple tracking scripts", "Common", "Easy"],
              ["Heavy page builder", "Common", "Medium"],
              ["Cheap shared hosting", "Occasional", "Medium — a move"],
              ["Video backgrounds", "Occasional", "Easy — remove"],
            ],
          },
          {
            type: "p",
            text: "The first four cover the majority of cases and are all fixable in a day. We start there and only recommend anything bigger if the numbers justify it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How much faster will it get?",
        answer:
          "On a typical unoptimised small business site, cutting load time by half or more is common. We measure first and give you a specific expectation rather than a generic promise.",
      },
      {
        question: "Will this get me higher on Google?",
        answer:
          "It helps, but for local businesses your Google Business Profile and reviews matter more. Speed affects whether visitors stay, which is the stronger argument.",
      },
      {
        question: "Can you fix a Wix or Squarespace site?",
        answer:
          "Partly. Image optimisation and removing unnecessary apps work on any platform. Those builders limit how deep you can go, and we will tell you where the ceiling is.",
      },
    ],
    related: ["website-refresh-service", "mobile-friendly-website-fix", "google-business-profile-setup"],
  },

  {
    slug: "mobile-friendly-website-fix",
    eyebrow: "Mobile fix",
    title: "Make your website work on mobile",
    seoTitle: "Mobile-Friendly Website Fix from $249 | ROVQIX",
    description:
      "Fix a website that does not work properly on phones — text too small, buttons unreachable, forms unusable and menus that do not open. From $249.",
    excerpt: "Most of your customers are on a phone. Many small business sites still are not.",
    primaryKeyword: "mobile friendly website fix",
    secondaryKeywords: [
      "make website mobile friendly",
      "website not working on phone",
      "responsive website fix",
      "mobile website design small business",
    ],
    answer:
      "A mobile fix from ROVQIX costs $249 to $699 and takes a few days. We fix the things that break on phones — unreadable text, tap targets too small, forms that will not submit, menus that do not open and content that runs off the screen.",
    intro:
      "Business owners look at their website on a laptop. Their customers look at it on a phone, in a car park, with one hand.",
    deliverables: [
      {
        title: "Real device testing",
        description:
          "Checked on actual phones at real sizes, not just a browser window made narrow.",
        icon: "Phone",
      },
      {
        title: "Readable text",
        description:
          "Large enough to read without zooming, which is where most older sites fail immediately.",
        icon: "FileText",
      },
      {
        title: "Tappable buttons",
        description:
          "Big enough for a thumb, spaced so you do not hit the wrong one.",
        icon: "MousePointerClick",
      },
      {
        title: "Working forms",
        description:
          "Correct keyboards for each field, and a submit button you can actually reach.",
        icon: "ClipboardList",
      },
      {
        title: "No horizontal scrolling",
        description:
          "Content that fits the screen. Sideways scrolling is the clearest sign of a broken mobile site.",
        icon: "LayoutTemplate",
      },
      {
        title: "Tap-to-call",
        description:
          "Your phone number as a link, which is the single most valuable mobile fix for a local business.",
        icon: "Zap",
      },
    ],
    sections: [
      {
        heading: "How do you know if your site has a mobile problem?",
        answer:
          "Open it on your phone and try to contact yourself. If anything is awkward, it is losing you customers.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Can you read the text without pinching to zoom?",
              "Can you tap your phone number and have it call?",
              "Does the menu open, and can you reach every page from it?",
              "Can you fill in and submit the contact form with one thumb?",
              "Does anything scroll sideways?",
              "Does it load in under three seconds on mobile data, not wifi?",
            ],
          },
          {
            type: "callout",
            title: "A no to any of these is costing you money",
            text: "These are not cosmetic issues. Each one is a point where a customer who wanted to contact you gives up and tries the next business in the search results.",
          },
        ],
      },
      {
        heading: "Why do sites break on mobile?",
        body: [
          {
            type: "list",
            items: [
              "Built before phones dominated, and never revisited.",
              "Designed on a large monitor and only ever checked there.",
              "A page builder was used in a way that produced fixed widths.",
              "Large tables or images that cannot shrink.",
              "Popups designed for desktop that cover the whole phone screen with no visible close button.",
            ],
          },
          {
            type: "p",
            text: "That last one is worth checking specifically. A popup with an unreachable close button on mobile makes the entire site unusable, and owners almost never see it because they browse on a laptop.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can any website be made mobile friendly?",
        answer:
          "Most can. Very old sites built with fixed layouts sometimes cost more to fix than to rebuild, and we will tell you honestly which side yours falls on.",
      },
      {
        question: "Does Google care about mobile?",
        answer:
          "Yes — Google indexes the mobile version of your site. If the mobile version is broken or missing content, that is what gets judged.",
      },
      {
        question: "Is a separate mobile site a good idea?",
        answer:
          "No, not anymore. One responsive site that adapts is simpler, cheaper and better for search than maintaining two versions.",
      },
    ],
    related: ["website-speed-fix", "website-refresh-service", "one-page-website-design"],
  },

  {
    slug: "local-seo-starter",
    eyebrow: "Local SEO",
    title: "Local SEO starter for small businesses",
    seoTitle: "Local SEO Starter Service | ROVQIX",
    description:
      "The technical local SEO foundations — Google Business Profile, structured data, service pages, citations and review process. From $399.",
    excerpt: "The foundations, done once, properly. Not a monthly retainer you cannot measure.",
    primaryKeyword: "local seo service small business",
    secondaryKeywords: [
      "local seo starter",
      "get found on google maps",
      "local search optimization",
      "small business seo service",
    ],
    answer:
      "Local SEO setup from ROVQIX costs $399 to $899 as a one-off. It covers Google Business Profile configuration, local structured data on your site, service and area pages where genuinely warranted, directory consistency and a review process you can run yourself.",
    intro:
      "Most local SEO is sold as an open-ended monthly retainer. The foundations are actually a finite job that can be done once and maintained by you.",
    deliverables: [
      {
        title: "Google Business Profile",
        description:
          "Categories, services, attributes, photos and hours configured properly. The highest-impact item.",
        icon: "Globe",
      },
      {
        title: "Local structured data",
        description:
          "LocalBusiness markup on your site with accurate hours, address and services.",
        icon: "Blocks",
      },
      {
        title: "Service pages",
        description:
          "A real page for each service worth ranking for — not one page per town.",
        icon: "Network",
      },
      {
        title: "Directory consistency",
        description:
          "Name, address and phone matching across the directories that actually matter.",
        icon: "ClipboardList",
      },
      {
        title: "Review process",
        description:
          "A short link and a simple routine, since reviews are a major local ranking factor.",
        icon: "BadgeCheck",
      },
      {
        title: "A plan you can run",
        description:
          "What to do monthly, written down, so you are not dependent on a retainer.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "What actually affects local rankings?",
        answer:
          "Proximity, your Google Business Profile, and reviews. Website factors matter, but less than most agencies imply.",
        body: [
          {
            type: "table",
            head: ["Factor", "Impact", "Can you control it?"],
            rows: [
              ["Proximity to searcher", "Very high", "No"],
              ["Google Business Profile setup", "High", "Yes, fully"],
              ["Review quantity and recency", "High", "Yes, with effort"],
              ["Primary category", "High", "Yes, immediately"],
              ["Website relevance", "Medium", "Yes"],
              ["Directory consistency", "Low to medium", "Yes"],
              ["Backlinks", "Low for local", "Slowly"],
            ],
          },
          {
            type: "callout",
            title: "Nobody can promise a ranking",
            text: "Proximity is the largest factor and you cannot change where the searcher is standing. Anyone guaranteeing a map position is either misunderstanding this or misleading you.",
          },
        ],
      },
      {
        heading: "Why not a monthly retainer?",
        body: [
          {
            type: "p",
            text: "For a single-location small business, the foundational work is genuinely finite. Once the profile is configured, the structured data is in place and the service pages exist, the ongoing work is collecting reviews and posting occasionally — which you can do yourself in twenty minutes a week.",
          },
          {
            type: "list",
            items: [
              "Retainers make sense for multi-location businesses or competitive markets with active content programmes.",
              "For one barber shop or one plumber, a monthly fee often buys a report and little else.",
              "We would rather do the setup properly once and hand you a checklist.",
              "If you later want ongoing help, that is a separate conversation with a clear scope.",
            ],
          },
        ],
      },
      {
        heading: "How many location pages should you have?",
        body: [
          {
            type: "p",
            text: "Far fewer than most agencies build. A page for each area you genuinely serve, with real local content, works. Fifty near-identical pages with the town name swapped is a recognised spam pattern and can hold your whole site back.",
          },
          {
            type: "p",
            text: "If you cannot write two hundred genuinely specific words about working in an area, do not make a page for it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long until I see results?",
        answer:
          "Profile changes can show within days. Review-driven improvement takes months of consistent asking. Anyone promising fast results in a competitive category is guessing.",
      },
      {
        question: "Do I need to pay monthly?",
        answer:
          "For a single-location business, usually not. We do the foundations once and give you a checklist. Multi-location or highly competitive markets are a different conversation.",
      },
      {
        question: "Can you guarantee first place on Google Maps?",
        answer:
          "No, and neither can anyone else. Proximity to the searcher is the biggest factor and it is outside anybody's control. Be sceptical of guarantees.",
      },
      {
        question: "What is the single highest-impact thing?",
        answer:
          "Your Google Business Profile, then reviews. Both are free. We charge for doing them properly and quickly, not for access.",
      },
    ],
    related: ["google-business-profile-setup", "one-page-website-design", "website-refresh-service"],
  },

  {
    slug: "online-booking-setup",
    eyebrow: "Booking setup",
    title: "Online booking setup for small businesses",
    seoTitle: "Online Booking Setup for Small Business | ROVQIX",
    description:
      "Get online booking working on your website — connected to your existing system, with the right availability, buffers and reminders. From $249.",
    excerpt: "Connected to the system you already pay for, set up so it does not double-book you.",
    primaryKeyword: "online booking setup",
    secondaryKeywords: [
      "add booking to website",
      "appointment booking system setup",
      "online scheduling for small business",
      "booking integration service",
    ],
    answer:
      "Online booking setup from ROVQIX costs $249 to $599. We connect a booking system to your website — configuring service durations, buffers, availability rules, deposits and reminders — using a platform that suits your trade rather than building one from scratch.",
    intro:
      "You almost certainly should not have a custom booking system built. You should have a good one configured properly and connected to your site.",
    deliverables: [
      {
        title: "Platform recommendation",
        description:
          "The right system for your trade and volume. Many are cheap or free at small scale.",
        icon: "Compass",
      },
      {
        title: "Service durations",
        description:
          "Real appointment lengths, so a two-hour job does not get booked into a thirty-minute slot.",
        icon: "Clock",
      },
      {
        title: "Buffers and travel time",
        description:
          "Gaps between appointments, and travel time for mobile businesses. Almost always missed.",
        icon: "Timer",
      },
      {
        title: "Deposits and no-show policy",
        description:
          "Card capture or deposits where no-shows are costly, with the policy stated clearly.",
        icon: "CreditCard",
      },
      {
        title: "Reminders",
        description:
          "Email and text reminders, which reduce no-shows more than anything else you can configure.",
        icon: "MessageSquare",
      },
      {
        title: "On your website",
        description:
          "Embedded on your own domain where possible, rather than sending customers to another site.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "Should you build a custom booking system?",
        answer:
          "Almost never. Existing platforms handle payments, reminders, calendar sync and cancellations for a few dollars a month.",
        body: [
          {
            type: "list",
            items: [
              "A custom booking system starts around $15,000 and needs maintaining forever.",
              "Existing platforms cost $0 to $80 a month and already handle the hard parts.",
              "Availability logic, timezones and double-booking prevention are genuinely difficult to get right.",
              "Payment handling brings compliance obligations you do not want.",
              "The only real case for custom is when your booking rules are genuinely unusual and central to the business.",
            ],
          },
          {
            type: "callout",
            title: "Configuration is where the value is",
            text: "Most booking problems are not the platform, they are the setup — wrong durations, no buffers, no reminders. Fixing the configuration usually solves everything people blame the software for.",
          },
        ],
      },
      {
        heading: "What gets configured wrong most often?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Every service set to the same length, so long jobs overrun into the next appointment.",
              "No buffer between bookings, leaving no time to clean up or travel.",
              "Availability that ignores lunch, admin time or the fact you cannot start at 8:59.",
              "No reminders configured, which is the main cause of no-shows.",
              "No cancellation window, so someone can cancel a two-hour slot at 8am.",
              "Booking sending customers to a third-party domain instead of staying on your site.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which booking system should I use?",
        answer:
          "It depends on your trade. Salons and barbers suit Booksy, Square or Fresha; trades suit Jobber or Housecall Pro; general appointments suit Calendly or Acuity. We recommend based on what you do, not on a referral fee.",
      },
      {
        question: "Can it sync with my personal calendar?",
        answer:
          "Yes, two-way with Google or Outlook on most platforms, so a personal appointment blocks availability automatically. This is worth setting up properly.",
      },
      {
        question: "Should I take deposits?",
        answer:
          "If no-shows cost you a long appointment slot, yes. A card on file with a clearly stated no-show fee is standard and reasonable in most trades.",
      },
    ],
    related: ["one-page-website-design", "website-refresh-service", "hair-salon-website"],
  },

  {
    slug: "website-care-plan",
    eyebrow: "Care plans",
    title: "Website care plans for small businesses",
    seoTitle: "Small Business Website Care Plan | ROVQIX",
    description:
      "Hosting, security, backups, monitoring and small monthly changes for $49 to $99 a month — so your website keeps working without you thinking about it.",
    excerpt: "Hosting, backups, updates and small changes, without a contract.",
    primaryKeyword: "website care plan",
    secondaryKeywords: [
      "website maintenance small business",
      "website support plan",
      "monthly website management",
      "website hosting and support",
    ],
    answer:
      "A ROVQIX care plan costs $49 to $99 a month and covers hosting, domain management, security updates, backups with restore testing, uptime monitoring, and a block of small changes each month. It is rolling monthly with 30 days notice.",
    intro:
      "The point of a care plan is that you never have to think about your website. If you would rather handle it yourself, we will show you how instead.",
    deliverables: [
      {
        title: "Hosting and domain",
        description:
          "Included, with the domain registered in your name so you always own it.",
        icon: "Cloud",
      },
      {
        title: "Security and updates",
        description:
          "Kept patched and monitored, so nothing goes stale or gets compromised.",
        icon: "ShieldCheck",
      },
      {
        title: "Backups, tested",
        description:
          "Automatic backups plus occasional restore tests, because an untested backup is a guess.",
        icon: "Database",
      },
      {
        title: "Uptime monitoring",
        description:
          "We find out your site is down before a customer tells you.",
        icon: "Activity",
      },
      {
        title: "Monthly changes",
        description:
          "Hours, prices, photos, a new service, a seasonal banner. Send an email, it gets done.",
        icon: "PenTool",
      },
      {
        title: "No contract",
        description:
          "Rolling monthly, 30 days notice, and you keep the site and domain if you leave.",
        icon: "Unlock",
      },
    ],
    sections: [
      {
        heading: "Do you need a care plan?",
        answer:
          "Only if you would otherwise never get round to it — which is most people, honestly.",
        body: [
          {
            type: "table",
            head: ["Care plan makes sense", "Do it yourself"],
            rows: [
              ["You change prices or hours regularly", "The site never changes"],
              ["You would not notice if it went down", "You check it often"],
              ["You do not want to manage hosting", "You are comfortable with technical admin"],
              ["The site brings in real business", "It is a placeholder"],
              ["You want someone to call", "You have someone in-house"],
            ],
          },
          {
            type: "callout",
            title: "You can self-host for a few dollars",
            text: "If you are technically comfortable, hosting a simple site costs $5 to $15 a month and you can do the updates. We will hand it over set up that way at no extra cost. The care plan is convenience, not a requirement.",
          },
        ],
      },
      {
        heading: "What is not included?",
        body: [
          {
            type: "list",
            items: [
              "New pages or major redesigns — those are quoted separately.",
              "Content writing beyond small edits.",
              "Ongoing SEO campaigns or advertising management.",
              "Unlimited changes. The hours are stated, and we tell you before you exceed them.",
              "Fixing things you broke in a third-party tool we do not manage.",
            ],
          },
          {
            type: "p",
            text: "Be wary of any plan advertising unlimited changes. It is not real, and it gets rationed informally the moment you actually use it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I cancel?",
        answer:
          "Yes, 30 days notice. You keep the website and the domain, and we will help you move to another host at no charge. There is no lock-in.",
      },
      {
        question: "Do unused change hours roll over?",
        answer:
          "One month, so a quiet month is not wasted. They do not accumulate forever, because reserved availability is what makes quick turnaround possible.",
      },
      {
        question: "Is hosting really included?",
        answer:
          "Yes, at the site sizes we build. If your traffic grew enormously we would talk to you about it, but that has not been an issue at this scale.",
      },
      {
        question: "What if I want to leave?",
        answer:
          "You take everything with you. The domain is already in your name and we will help transfer the site. A website you cannot leave with is not one you own.",
      },
    ],
    related: ["website-refresh-service", "one-page-website-design", "website-speed-fix"],
  },

  {
    slug: "website-rescue-service",
    eyebrow: "Rescue",
    title: "Website rescue: recover an abandoned or broken site",
    seoTitle: "Website Rescue Service | ROVQIX",
    description:
      "Locked out of your website, developer disappeared, or the site is down? We recover access, get it working and put ownership back in your name.",
    excerpt: "Locked out, developer gone, or site down. We get control back to you.",
    primaryKeyword: "website rescue service",
    secondaryKeywords: [
      "locked out of my website",
      "web developer disappeared",
      "recover website access",
      "website down help",
    ],
    answer:
      "Website rescue from ROVQIX costs $199 to $799 depending on the situation. We recover access to your domain, hosting and site, get it working again, and transfer everything into accounts registered in your name.",
    intro:
      "This is a more common problem than it should be. Someone built your site, put everything in their own name, and is now unreachable.",
    deliverables: [
      {
        title: "Domain recovery",
        description:
          "Finding who holds your domain and getting it transferred into your name. The critical piece.",
        icon: "Globe",
      },
      {
        title: "Hosting access",
        description:
          "Identifying where the site is hosted and recovering or replacing access.",
        icon: "Cloud",
      },
      {
        title: "Site backup",
        description:
          "Getting a copy of your site and content out before anything else can go wrong.",
        icon: "Database",
      },
      {
        title: "Getting it live again",
        description:
          "Restoring a down site, or rebuilding quickly if the original is genuinely unrecoverable.",
        icon: "Zap",
      },
      {
        title: "Ownership transferred",
        description:
          "Every account in your name and your email, so this cannot happen to you again.",
        icon: "ShieldCheck",
      },
      {
        title: "Email continuity",
        description:
          "Making sure business email keeps working through the transfer, which is often the bigger risk.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "What are the common situations?",
        body: [
          {
            type: "table",
            head: ["Situation", "Usual outcome"],
            rows: [
              ["Developer unreachable, you have domain access", "Straightforward, usually a day"],
              ["Domain in the developer's name", "Recoverable via registrar dispute, takes time"],
              ["Hosting unpaid and site down", "Often recoverable from backups"],
              ["Site hacked", "Clean or rebuild, then secure properly"],
              ["Platform discontinued", "Rebuild, using content recovered from archives"],
              ["Nobody knows anything", "We investigate first, then advise"],
            ],
          },
          {
            type: "callout",
            title: "The domain matters most",
            text: "You can rebuild a website. Losing the domain means losing your email, your search presence and every business card you have printed. If you do nothing else after reading this, check who your domain is registered to.",
          },
        ],
      },
      {
        heading: "How do you avoid this happening again?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Register the domain yourself, in your name, on your own email. Never let a contractor own it.",
              "Keep the registrar login somewhere safe that is not only in one person's head.",
              "Make sure business email does not depend on an account someone else controls.",
              "Ask any developer, before starting, whose name the accounts will be in.",
              "Get a copy of the site files or an export when the project finishes.",
            ],
          },
          {
            type: "p",
            text: "We register everything in the client's name as standard. It is a small thing that prevents the situation this page exists for.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you always recover a domain?",
        answer:
          "Usually, but not always quickly. If it is registered to someone unreachable, registrars have a dispute process that takes weeks. If it expired and was bought by someone else, it may be gone. We will tell you honestly what we think is possible.",
      },
      {
        question: "What if the site is completely gone?",
        answer:
          "We can often recover content from search caches and web archives, then rebuild. You lose the original build but keep your content and your URLs.",
      },
      {
        question: "How fast can you help?",
        answer:
          "If it is down and you have access, often the same day. Domain disputes are outside our control and take as long as the registrar takes.",
      },
      {
        question: "How much does it cost?",
        answer:
          "$199 to $799 depending on complexity. We assess first and give you a fixed number before doing anything, so you are not paying for open-ended investigation.",
      },
    ],
    related: ["website-care-plan", "website-refresh-service", "one-page-website-design"],
  },

  {
    slug: "business-email-and-domain-setup",
    eyebrow: "Email & domain",
    title: "Business email and domain setup",
    seoTitle: "Business Email & Domain Setup | ROVQIX",
    description:
      "Get a proper domain and name@yourbusiness.com email set up correctly, including the records that stop your email going to spam. From $149.",
    excerpt: "A proper email address, and the records that stop it landing in spam.",
    primaryKeyword: "business email setup",
    secondaryKeywords: [
      "domain and email setup",
      "professional email address small business",
      "google workspace setup",
      "custom domain email",
    ],
    answer:
      "Domain and business email setup from ROVQIX costs $149 to $299 as a one-off. We register your domain in your name, set up name@yourbusiness.com through Google Workspace or Microsoft 365, and configure the SPF, DKIM and DMARC records that keep your email out of spam folders.",
    intro:
      "A gmail.com address on your van costs you jobs. It is also the cheapest thing on this list to fix.",
    deliverables: [
      {
        title: "Domain in your name",
        description:
          "Registered to you, on your email, so you own it permanently regardless of who you work with.",
        icon: "ShieldCheck",
      },
      {
        title: "Professional email",
        description:
          "name@yourbusiness.com through Google Workspace or Microsoft 365, working on all your devices.",
        icon: "MessageSquare",
      },
      {
        title: "Deliverability records",
        description:
          "SPF, DKIM and DMARC configured, which is what stops your quotes landing in spam.",
        icon: "BadgeCheck",
      },
      {
        title: "Devices set up",
        description:
          "Phone, laptop and tablet configured so email works everywhere from day one.",
        icon: "Phone",
      },
      {
        title: "Migration",
        description:
          "Existing email moved across if you are switching, without losing anything.",
        icon: "RefreshCw",
      },
      {
        title: "Aliases",
        description:
          "info@, bookings@, accounts@ pointing where they should, without paying for extra accounts.",
        icon: "Network",
      },
    ],
    sections: [
      {
        heading: "Why does a business email address matter?",
        answer:
          "Because it signals you are an established business, and because free-provider addresses increasingly get filtered.",
        body: [
          {
            type: "list",
            items: [
              "Customers comparing three quotes trust the one from a business address more.",
              "Some commercial and government customers will not accept a free-provider address at all.",
              "It stays yours if you change email providers.",
              "Aliases let you route enquiries properly as you grow.",
              "It costs about $6 to $7 a month per person.",
            ],
          },
          {
            type: "callout",
            title: "Deliverability is the part people miss",
            text: "Setting up the mailbox is easy. Configuring SPF, DKIM and DMARC is what stops your quotes going to spam — and it is skipped in most DIY setups, which is why so many small businesses find customers never received their emails.",
          },
        ],
      },
      {
        heading: "What domain should you choose?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A .com if it is available. It is still what people assume and type.",
              "Your business name rather than keywords. Keyword domains do not help rankings anymore.",
              "Short and easy to say out loud, because you will be reading it over the phone.",
              "Avoid hyphens and numbers — they cause confusion when spoken.",
              "Check no similar business already uses something close, to avoid confusion and trademark issues.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Google Workspace or Microsoft 365?",
        answer:
          "Google Workspace is simpler for most small businesses. Microsoft 365 makes sense if you already use desktop Office heavily. Both cost about the same and both are fine.",
      },
      {
        question: "Can I keep my current email address?",
        answer:
          "You can forward it so nothing is missed, but you should start sending from the business address. Running both indefinitely just confuses customers.",
      },
      {
        question: "Why do my emails go to spam?",
        answer:
          "Almost always missing or misconfigured SPF, DKIM and DMARC records. It is a configuration issue rather than anything about your content, and it is fixable in an afternoon.",
      },
      {
        question: "Do I need this if I have a website?",
        answer:
          "They are separate. You can have one without the other, but a website at yourbusiness.com with a gmail address on it looks inconsistent to customers.",
      },
    ],
    related: ["one-page-website-design", "website-care-plan", "google-business-profile-setup"],
  },

  {
    slug: "small-business-photo-guide",
    eyebrow: "Photos",
    title: "Photos for your business website",
    seoTitle: "Business Website Photos: What You Need | ROVQIX",
    description:
      "What photos your website actually needs, how to shoot them on a phone, and why stock photography costs you customers.",
    excerpt: "Phone photos of your real work beat stock photography every time.",
    primaryKeyword: "photos for business website",
    secondaryKeywords: [
      "website photos small business",
      "diy business photography",
      "what photos does my website need",
      "stock photos vs real photos",
    ],
    answer:
      "Your website needs photos of your actual premises, your work and your team — roughly 10 to 20 images. A modern phone in good light is sufficient for most small businesses, and real photos consistently outperform stock photography because customers can tell the difference.",
    intro:
      "The most common thing that holds up a small business website is photos. It is also the thing people most overestimate the difficulty of.",
    deliverables: [
      {
        title: "What to shoot",
        description:
          "A specific list for your trade, so you are not guessing what is needed.",
        icon: "ClipboardList",
      },
      {
        title: "Exterior and interior",
        description:
          "The front of your premises so people recognise it, and inside so they know what to expect.",
        icon: "Building2",
      },
      {
        title: "Your work",
        description:
          "Finished jobs, products or results. This is what customers judge you on.",
        icon: "Images",
      },
      {
        title: "You and your team",
        description:
          "Faces build trust, especially in trades and personal services. Anonymity costs enquiries.",
        icon: "Users",
      },
      {
        title: "Optimised for you",
        description:
          "We resize and convert everything, so large phone photos do not slow your site down.",
        icon: "Gauge",
      },
      {
        title: "Alt text written",
        description:
          "Descriptions for accessibility and search, written for every image.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "How to take usable photos on a phone",
        answer:
          "Good light, clean background, hold still, take more than you think you need.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Shoot in daylight where you can. Near a window or outside on an overcast day is ideal.",
              "Clean the lens first. It is the single most common reason phone photos look soft.",
              "Tidy the background. Clutter is what makes a photo look amateur, not the camera.",
              "Hold the phone still and tap to focus on the subject.",
              "Take ten of each shot. You only need one good one.",
              "Shoot horizontally for banners and vertically for phone-first sections.",
            ],
          },
          {
            type: "callout",
            title: "Do not edit them heavily",
            text: "Send us the originals. Heavy filters age badly and we can adjust exposure and colour ourselves. What we cannot fix is a blurry photo or a cluttered background.",
          },
        ],
      },
      {
        heading: "Why avoid stock photography?",
        body: [
          {
            type: "list",
            items: [
              "Customers recognise it, and it signals that you had nothing real to show.",
              "The same images appear on your competitors' sites, sometimes in the same town.",
              "It undermines the specific claims you are making about your own work.",
              "For trades and personal services, showing your actual work is the entire selling argument.",
              "A slightly imperfect real photo builds more trust than a perfect fake one.",
            ],
          },
          {
            type: "p",
            text: "The exception is background textures and abstract imagery, where stock is fine because nobody is being asked to believe it is yours.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many photos do I need?",
        answer:
          "For a one-page site, eight to twelve. For a starter site, fifteen to twenty-five. More than that and you are into gallery territory, which suits some trades and not others.",
      },
      {
        question: "Should I hire a photographer?",
        answer:
          "If your business is visual — a restaurant, salon, boutique or venue — it is usually worth $300 to $800. For most trades, good phone photos of real work are genuinely sufficient.",
      },
      {
        question: "What if I have no photos at all?",
        answer:
          "We will send you a shot list for your trade and you can work through it in an afternoon. That is faster than waiting for a photographer and it gets the site live.",
      },
      {
        question: "Will big photos slow my site down?",
        answer:
          "Not once we process them. Send the originals at full size — we resize and convert everything, which is exactly what most DIY sites get wrong.",
      },
    ],
    related: ["one-page-website-design", "website-speed-fix", "website-refresh-service"],
  },

  {
    slug: "do-i-need-a-website",
    eyebrow: "Getting started",
    title: "Does my small business actually need a website?",
    seoTitle: "Does My Small Business Need a Website?",
    description:
      "An honest answer — when a Google Business Profile and social media are enough, and when a website genuinely earns its cost.",
    excerpt: "Sometimes the honest answer is no. Here is how to tell.",
    primaryKeyword: "does my business need a website",
    secondaryKeywords: [
      "do i need a website for my small business",
      "website vs facebook page",
      "small business website worth it",
      "alternatives to a website",
    ],
    answer:
      "Not every small business needs a website immediately. If you are fully booked from referrals and your Google Business Profile is well maintained, you can wait. A website earns its cost when you want to be found by people who do not know you, charge more, or stop depending on a platform.",
    intro:
      "We build websites, so treat this accordingly — but we turn work away every month because the honest answer was that the business did not need one yet.",
    deliverables: [
      {
        title: "Google Business Profile",
        description:
          "Free, and for a local business it drives more customers than a website does. Do this first, always.",
        icon: "Globe",
      },
      {
        title: "Social media",
        description:
          "Fine for showing work and reaching existing followers. It does not appear in Google searches.",
        icon: "MessageSquare",
      },
      {
        title: "A one-page site",
        description:
          "$349. The minimum that gets you findable in search and gives you somewhere you control.",
        icon: "LayoutTemplate",
      },
      {
        title: "A full starter site",
        description:
          "$749+. Worth it when you have several services to rank for or need booking and content.",
        icon: "Rocket",
      },
      {
        title: "Nothing yet",
        description:
          "A legitimate answer if you are full, profitable and not trying to grow right now.",
        icon: "Clock",
      },
      {
        title: "Honest advice",
        description:
          "We will tell you which of these you are, on a fifteen-minute call, at no cost.",
        icon: "Compass",
      },
    ],
    sections: [
      {
        heading: "When you probably do not need one yet",
        body: [
          {
            type: "list",
            items: [
              "You are fully booked and turning work away.",
              "All your work comes from referrals and repeat customers.",
              "Your Google Business Profile is well maintained with plenty of recent reviews.",
              "You are testing a new business and are not sure it will continue.",
              "Money is genuinely tight and the same $500 could buy tools or advertising that pays back faster.",
            ],
          },
          {
            type: "callout",
            title: "Fix the free thing first",
            text: "If your Google Business Profile is not set up properly, do that before spending anything on a website. It is free, it takes an afternoon, and for a local business it is usually the bigger lever.",
          },
        ],
      },
      {
        heading: "When a website genuinely pays for itself",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "You want customers who have never heard of you, which means appearing in searches.",
              "You want to charge more, and need to look established enough to justify it.",
              "You are relying on a platform — Instagram, a marketplace, a directory — that could change its rules.",
              "You keep answering the same questions about hours, prices and services.",
              "You want online booking or ordering.",
              "Commercial or larger clients ask for your website before they will consider you.",
            ],
          },
          {
            type: "p",
            text: "The maths is usually simple. If a customer is worth $100 and a $500 site brings five new ones, it has paid for itself. For most trades that happens in the first month or two.",
          },
        ],
      },
      {
        heading: "Is a Facebook or Instagram page enough?",
        body: [
          {
            type: "table",
            head: ["", "Social page", "Website"],
            rows: [
              ["Cost", "Free", "$349+"],
              ["Appears in Google search", "Rarely", "Yes"],
              ["You control it", "No", "Yes"],
              ["Good for existing followers", "Yes", "Less so"],
              ["Full services and prices", "Awkward", "Yes"],
              ["Looks established", "Somewhat", "Yes"],
              ["Survives a platform change", "No", "Yes"],
            ],
          },
          {
            type: "p",
            text: "They do different jobs and most businesses want both. The risk with social only is that you are building on land you do not own.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will you tell me if I do not need one?",
        answer:
          "Yes, and we do regularly. Selling someone a website they do not need produces a bad outcome and no referrals. A fifteen-minute call usually settles it.",
      },
      {
        question: "What is the cheapest thing that would help?",
        answer:
          "Setting up your Google Business Profile properly, with real photos, correct hours and a routine for asking for reviews. It is free and it is usually the highest-impact thing available.",
      },
      {
        question: "What if I only need it to look legitimate?",
        answer:
          "Then a one-page site at $349 is exactly right. You do not need five pages to look like a real business.",
      },
    ],
    related: ["google-business-profile-setup", "one-page-website-design", "small-business-photo-guide"],
  },
];

export const localOfferPages = makeLocalPages(specs);
