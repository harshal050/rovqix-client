import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/**
 * Trades and home services. The common thread: the customer has a problem right
 * now, they are on a phone, and the job is to get a phone call — not a form fill.
 */
const specs: LocalSpec[] = [
  {
    slug: "plumber-website",
    eyebrow: "Plumbers",
    title: "Plumber website design",
    seoTitle: "Plumber Website Design from $349 | ROVQIX",
    description:
      "Websites for plumbers — emergency call button, services, service area, licence details and real job photos. Built to generate calls, from $349.",
    excerpt: "An emergency call button that works, and proof you are licensed.",
    primaryKeyword: "plumber website design",
    secondaryKeywords: [
      "plumbing website design",
      "plumber web design",
      "plumbing company website",
      "emergency plumber website",
    ],
    answer:
      "A plumber's website from ROVQIX costs $349 to $1,290 and takes about a week. It is built around one thing: getting a phone call from someone with a leak, with your licence number, service area and emergency availability immediately visible.",
    intro:
      "Someone with water coming through a ceiling is not reading your about page. They are looking for a number to tap.",
    deliverables: [
      {
        title: "Emergency call button",
        description:
          "Fixed to the screen on mobile so it is one tap from anywhere on the site.",
        icon: "Phone",
      },
      {
        title: "Licence and insurance shown",
        description:
          "Licence number, bonded and insured status. Customers check, and unlicensed competitors cannot show it.",
        icon: "BadgeCheck",
      },
      {
        title: "Service area map",
        description:
          "The towns and zip codes you cover, so you stop getting calls from an hour away.",
        icon: "Network",
      },
      {
        title: "Services list",
        description:
          "Drain clearing, water heaters, repiping, gas lines. People search the specific job, not 'plumber'.",
        icon: "ClipboardList",
      },
      {
        title: "Real job photos",
        description:
          "Before and after from your actual work. Stock photos of pipes convince nobody.",
        icon: "Images",
      },
      {
        title: "Callout fee stated",
        description:
          "Your diagnostic or callout charge, up front. It filters out price shoppers and prevents disputes.",
        icon: "Receipt",
      },
    ],
    sections: [
      {
        heading: "What does an emergency visitor need?",
        answer:
          "A tappable phone number, confirmation you cover their area, and confirmation you are available now.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Phone number as a tap-to-call button, sticky on mobile, above everything else.",
              "'24/7 emergency service' or your actual hours, stated where they cannot miss it.",
              "Service area, so they know instantly whether to keep reading or call someone else.",
              "Licence number, which signals legitimacy in under a second.",
              "Response time expectation, even if it is 'usually within two hours'.",
            ],
          },
          {
            type: "callout",
            title: "Do not make an emergency fill in a form",
            text: "Forms are for quotes and scheduled work. Someone with a burst pipe needs a phone number. We put the form below the fold and the phone number everywhere.",
          },
        ],
      },
      {
        heading: "How many service pages do you need?",
        body: [
          {
            type: "p",
            text: "One page per service you genuinely want more of — usually water heater replacement, drain clearing, repiping and emergency work. Those are what people search, and each page can rank on its own.",
          },
          {
            type: "p",
            text: "We will not build you thirty pages targeting every plumbing keyword. Thin, near-identical pages perform worse than five good ones and can drag the whole site down.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I show my prices?",
        answer:
          "Show your callout or diagnostic fee, and ranges for common jobs like a water heater swap. Full pricing is impossible for plumbing, but a range filters out the people who were only ever going to price-shop.",
      },
      {
        question: "Do I need a page for every town I cover?",
        answer:
          "No, and it usually hurts. A handful of pages for the areas you genuinely work in, with real local content, beats forty near-identical pages with the town name swapped — which search engines treat as spam.",
      },
      {
        question: "What matters more, the website or Google?",
        answer:
          "Your Google Business Profile, honestly. Most plumbing searches end on the map. We set the profile up properly and link it to the site, because that is where the calls come from.",
      },
    ],
    related: ["electrician-website", "hvac-company-website", "roofing-company-website"],
  },

  {
    slug: "electrician-website",
    eyebrow: "Electricians",
    title: "Electrician website design",
    seoTitle: "Electrician Website Design from $349 | ROVQIX",
    description:
      "Websites for electricians — licence details, services, service area, EV charger and panel upgrade pages, and a call button that works on mobile.",
    excerpt: "Licence up front, service pages that rank, and a phone button on every screen.",
    primaryKeyword: "electrician website design",
    secondaryKeywords: [
      "electrical contractor website",
      "electrician web design",
      "electrical company website",
      "ev charger installer website",
    ],
    answer:
      "An electrician's website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your licence and insurance, services including growth areas like EV chargers and panel upgrades, your service area and a tap-to-call button.",
    intro:
      "Electrical work is a trust purchase — people are letting you into the house and into the panel. The licence number does more work than any design choice.",
    deliverables: [
      {
        title: "Licence and insurance",
        description:
          "Licence number, bonded and insured, shown prominently rather than in the footer.",
        icon: "BadgeCheck",
      },
      {
        title: "Service pages that rank",
        description:
          "Panel upgrades, EV charger installation, rewiring, generators — the jobs people actually search for.",
        icon: "Network",
      },
      {
        title: "Tap-to-call",
        description:
          "Sticky on mobile, because most enquiries come from a phone and end in a call.",
        icon: "Phone",
      },
      {
        title: "Service area",
        description:
          "Where you work, stated plainly, so you stop quoting jobs you would never take.",
        icon: "Globe",
      },
      {
        title: "Real work photos",
        description:
          "Tidy panels, clean installs. Electricians are judged on neatness and photos prove it.",
        icon: "Images",
      },
      {
        title: "Quote request form",
        description:
          "For planned work, capturing enough detail — job type, property age, access — to quote sensibly.",
        icon: "ClipboardList",
      },
    ],
    sections: [
      {
        heading: "Which service pages are worth building?",
        answer:
          "The ones with high value and specific search demand: EV chargers, panel upgrades, generators and rewiring.",
        body: [
          {
            type: "table",
            head: ["Service", "Why it deserves a page"],
            rows: [
              ["EV charger installation", "Growing demand, people research before calling"],
              ["Panel or service upgrade", "High value, and homeowners search the exact term"],
              ["Whole-home generator", "High value, long consideration period"],
              ["Rewiring older homes", "Specific worry with a specific search"],
              ["Emergency electrical", "Urgent, converts on a phone call"],
              ["Lighting and outlets", "Lower value; a section, not a page"],
            ],
          },
          {
            type: "callout",
            title: "Build pages for jobs you want more of",
            text: "There is no point ranking for the work with the worst margin. We build pages for the jobs you actually want the phone to ring about.",
          },
        ],
      },
      {
        heading: "What convinces a homeowner to call you?",
        body: [
          {
            type: "list",
            items: [
              "A licence number they can verify, shown without being asked.",
              "Photos of finished work that looks tidy.",
              "Google reviews visible on the page, not just a claim about them.",
              "A clear statement of whether you charge for quotes.",
              "Being explicit about permits and inspection, which reassures on bigger jobs.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I list my licence number publicly?",
        answer:
          "Yes. It is public record, customers check it, and unlicensed competitors cannot display one. In many states displaying it in advertising is required anyway.",
      },
      {
        question: "Is an EV charger page worth building?",
        answer:
          "Usually yes. It is a well-defined, growing search with homeowners who research before calling, and the job value is good. It is one of the few genuinely worthwhile extra pages for an electrician.",
      },
      {
        question: "Do I need a blog?",
        answer:
          "No. For trades, good service pages and a well-maintained Google Business Profile do far more than a blog nobody has time to write.",
      },
    ],
    related: ["plumber-website", "hvac-company-website", "handyman-website"],
  },

  {
    slug: "hvac-company-website",
    eyebrow: "HVAC",
    title: "HVAC company website design",
    seoTitle: "HVAC Company Website Design | ROVQIX",
    description:
      "Websites for HVAC contractors — emergency service, maintenance plans, financing, seasonal offers and a site that survives the first heatwave.",
    excerpt: "Maintenance plans and financing up front, plus a site that holds up in a heatwave.",
    primaryKeyword: "hvac website design",
    secondaryKeywords: [
      "hvac contractor website",
      "heating and cooling website",
      "air conditioning company website",
      "hvac web design",
    ],
    answer:
      "An HVAC website from ROVQIX costs $349 to $1,290 and takes about a week. The priorities are emergency service contact, maintenance plan signup, financing information for system replacements, and seasonal offers.",
    intro:
      "HVAC has the most extreme seasonality of any trade. The website's busiest hour of the year is the first real heatwave, and it needs to hold up.",
    deliverables: [
      {
        title: "Emergency service contact",
        description:
          "Tap-to-call, sticky on mobile, with your after-hours availability stated plainly.",
        icon: "Phone",
      },
      {
        title: "Maintenance plans",
        description:
          "Your recurring revenue product, sold properly with what is included and what it costs monthly.",
        icon: "RefreshCw",
      },
      {
        title: "Financing information",
        description:
          "System replacement is a five-figure decision. Financing options are often what makes it happen.",
        icon: "CreditCard",
      },
      {
        title: "Seasonal offers",
        description:
          "Tune-up specials that you can swap over between heating and cooling season yourself.",
        icon: "CalendarCheck",
      },
      {
        title: "Brands and certifications",
        description:
          "Manufacturer certifications, which matter for warranty work and homeowner confidence.",
        icon: "BadgeCheck",
      },
      {
        title: "Fast under load",
        description:
          "Built to stay up when the first hot week sends everyone searching at once.",
        icon: "Gauge",
      },
    ],
    sections: [
      {
        heading: "Why sell maintenance plans on the website?",
        answer:
          "Because they are the only predictable revenue in a business that otherwise lives on weather.",
        body: [
          {
            type: "list",
            items: [
              "Show the monthly price, not just an annual figure. Monthly reads as affordable.",
              "List exactly what is included — visits per year, priority scheduling, discount on repairs.",
              "Make the priority-service benefit explicit; it is what customers value in an emergency.",
              "Allow signup or enquiry directly from the page rather than 'call for details'.",
              "Mention it again on repair pages, where the customer is already thinking about breakdowns.",
            ],
          },
          {
            type: "callout",
            title: "Plans smooth the seasonal cliff",
            text: "A maintenance base gives you spring and autumn work and first call in a heatwave. Most HVAC sites bury the plan in a submenu; it should be one of the two main things on the page.",
          },
        ],
      },
      {
        heading: "How do you handle seasonality?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Build the site so you can swap the headline offer between heating and cooling yourself, in minutes.",
              "Keep both heating and cooling service pages live year-round — people search off-season too.",
              "Have the seasonal offer ready before the season, not two weeks into it.",
              "Make sure the site is fast, because peak weeks bring your highest traffic of the year.",
              "Update your Google Business Profile hours if you extend them in peak season.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show replacement system prices?",
        answer:
          "A range is worth it — 'most full system replacements fall between $6,000 and $14,000 depending on size and efficiency'. It stops the enquiries from people expecting $2,000 and reassures those who feared $30,000.",
      },
      {
        question: "Can customers book a tune-up online?",
        answer:
          "Yes, either as a request or connected to your scheduling system. Tune-ups schedule well online because they are not urgent; emergency work should still route to the phone.",
      },
      {
        question: "Will the site cope with a heatwave?",
        answer:
          "Yes. The pages are served as static files from a global network, so a traffic spike does not slow it down. That is a genuine risk on cheaper hosting during peak weeks.",
      },
    ],
    related: ["plumber-website", "electrician-website", "roofing-company-website"],
  },

  {
    slug: "roofing-company-website",
    eyebrow: "Roofing",
    title: "Roofing company website design",
    seoTitle: "Roofing Company Website Design | ROVQIX",
    description:
      "Websites for roofing contractors — free inspection offers, storm damage and insurance claim help, financing, licence details and real job photos.",
    excerpt: "Free inspection, insurance claim help and proof you are licensed and local.",
    primaryKeyword: "roofing website design",
    secondaryKeywords: [
      "roofing contractor website",
      "roofer website design",
      "roofing company web design",
      "storm damage roofing website",
    ],
    answer:
      "A roofing website from ROVQIX costs $349 to $1,290 and takes about a week. It is built around a free inspection offer, storm damage and insurance claim guidance, financing options, and clear proof that you are licensed, insured and local.",
    intro:
      "Roofing has a trust problem created by storm-chasing contractors. Being visibly local and licensed is worth more than any design.",
    deliverables: [
      {
        title: "Free inspection offer",
        description:
          "The main conversion. Low commitment, and it gets you on the roof where the real sale happens.",
        icon: "Target",
      },
      {
        title: "Proof you are local",
        description:
          "Years in the area, local address, local jobs. This is the direct answer to storm-chaser suspicion.",
        icon: "Globe",
      },
      {
        title: "Insurance claim guidance",
        description:
          "How the claim process works and how you help. A major reason homeowners pick one roofer over another.",
        icon: "FileText",
      },
      {
        title: "Licence and insurance",
        description:
          "Licence number, general liability and workers' comp. Homeowners are told to check all three.",
        icon: "BadgeCheck",
      },
      {
        title: "Job photos and materials",
        description:
          "Completed roofs, plus the manufacturers and warranties you work with.",
        icon: "Images",
      },
      {
        title: "Financing",
        description:
          "A full roof is a major unplanned expense. Financing options often decide whether it goes ahead.",
        icon: "CreditCard",
      },
    ],
    sections: [
      {
        heading: "How do you separate yourself from storm chasers?",
        answer:
          "Prove you were here before the storm and will be here after it.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A real local address on the site, not just a phone number and a service area.",
              "How long you have operated in the area, stated as a number of years.",
              "Photos of local jobs, ideally with recognisable neighbourhoods.",
              "Your workmanship warranty and what happens if you are called back.",
              "Local reviews from named nearby towns rather than generic testimonials.",
              "Licence number displayed, which many transient operators cannot produce for your state.",
            ],
          },
          {
            type: "callout",
            title: "This is your strongest advantage",
            text: "Homeowners are actively warned about out-of-town contractors after a storm. Every piece of local proof on your site converts a suspicious visitor into a booked inspection.",
          },
        ],
      },
      {
        heading: "How should insurance claims be explained?",
        body: [
          {
            type: "p",
            text: "Plainly, step by step: inspection, documentation, filing, adjuster meeting, approval, work. Homeowners find the process intimidating, and the contractor who explains it clearly is the one they call.",
          },
          {
            type: "p",
            text: "Be careful with the language around deductibles. Offering to waive or absorb a deductible is illegal in many states, and it is a common way roofing sites get themselves into trouble.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we offer a free inspection?",
        answer:
          "Almost always. It is the standard offer in roofing, it is low commitment for the homeowner, and once you are on the roof with photos the conversation changes entirely.",
      },
      {
        question: "Can we mention insurance deductibles?",
        answer:
          "Explain how deductibles work, yes. Do not offer to waive, absorb or 'take care of' one — that is illegal in many states and it is a common compliance mistake on roofing websites.",
      },
      {
        question: "How many photos should we show?",
        answer:
          "Twenty to thirty good ones, organised by roof type. Include a few in-progress shots showing underlayment and flashing — homeowners who have done their research look for exactly that.",
      },
    ],
    related: ["hvac-company-website", "general-contractor-website", "plumber-website"],
  },

  {
    slug: "landscaping-company-website",
    eyebrow: "Landscaping",
    title: "Landscaping and lawn care website design",
    seoTitle: "Landscaping Website Design | ROVQIX",
    description:
      "Websites for landscapers and lawn care companies — project gallery, recurring service plans, seasonal services and quote requests that qualify.",
    excerpt: "A project gallery that sells, plus recurring plans and quote requests that qualify.",
    primaryKeyword: "landscaping website design",
    secondaryKeywords: [
      "lawn care website design",
      "landscaper website",
      "lawn service website",
      "garden design website",
    ],
    answer:
      "A landscaping website from ROVQIX costs $349 to $1,290 and takes about a week. It covers a project gallery, recurring lawn care plans, seasonal services and a quote request form that captures property size and job type.",
    intro:
      "Landscaping splits into two businesses with different websites: recurring lawn maintenance, and one-off design and installation. Most sites try to be both and do neither well.",
    deliverables: [
      {
        title: "Before and after gallery",
        description:
          "The strongest selling tool in landscaping. Same angle, before and after, tells the whole story.",
        icon: "Images",
      },
      {
        title: "Recurring plans",
        description:
          "Weekly and biweekly maintenance with monthly pricing, which is where predictable revenue comes from.",
        icon: "RefreshCw",
      },
      {
        title: "Seasonal services",
        description:
          "Spring cleanup, irrigation start-up, leaf removal, snow. Easy for you to swap as the season turns.",
        icon: "CalendarCheck",
      },
      {
        title: "Quote form that qualifies",
        description:
          "Property size, service type and photos, so you can quote maintenance without a site visit.",
        icon: "ClipboardList",
      },
      {
        title: "Service area",
        description:
          "Route density matters in this trade. Being clear on area keeps your routes tight.",
        icon: "Globe",
      },
      {
        title: "Design portfolio",
        description:
          "For install work, presented separately from maintenance since it is a different customer.",
        icon: "Palette",
      },
    ],
    sections: [
      {
        heading: "Should maintenance and design be on the same site?",
        answer:
          "Yes, but on clearly separate paths, because they are different customers with different decisions.",
        body: [
          {
            type: "table",
            head: ["", "Lawn maintenance", "Design & install"],
            rows: [
              ["Decision speed", "Days", "Weeks or months"],
              ["What convinces", "Price and reliability", "Portfolio and vision"],
              ["Main call to action", "Get a monthly quote", "Book a design consultation"],
              ["Price shown", "Monthly range, yes", "Starting-from figure"],
              ["Photos needed", "A few tidy lawns", "Full project galleries"],
            ],
          },
          {
            type: "callout",
            title: "Split them from the home page",
            text: "Two clear routes — 'regular lawn care' and 'landscape design' — outperform one page trying to speak to both. Each visitor gets a page written for the decision they are actually making.",
          },
        ],
      },
      {
        heading: "Can you quote maintenance without visiting?",
        body: [
          {
            type: "p",
            text: "Often yes, if the form asks the right things: address or lot size, roughly how much is lawn, any slopes or obstacles, and a photo or two. Many landscapers now quote maintenance from satellite imagery plus a short form.",
          },
          {
            type: "p",
            text: "That removes a visit from every enquiry, which is the biggest hidden cost in a maintenance business.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show monthly lawn care prices?",
        answer:
          "A starting price or range, yes — 'weekly mowing from $45 for a typical quarter-acre lot'. It filters out people expecting $20 and gives serious enquiries a reference point.",
      },
      {
        question: "How do we handle the off-season?",
        answer:
          "Keep the site live and swap the featured services — leaf removal, snow, holiday lighting, or spring booking. We build the seasonal banner so you can change it yourself.",
      },
      {
        question: "Do we need a page for each service?",
        answer:
          "For your main revenue services, yes. Not for every possible task — a list on the services page is enough for the smaller items.",
      },
    ],
    related: ["cleaning-service-website", "pest-control-website", "general-contractor-website"],
  },

  {
    slug: "cleaning-service-website",
    eyebrow: "Cleaning",
    title: "Cleaning service website design",
    seoTitle: "Cleaning Service Website Design | ROVQIX",
    description:
      "Websites for residential and commercial cleaning companies — instant quote by home size, recurring plans, insurance and vetting, and online booking.",
    excerpt: "Instant quotes by home size and recurring plans customers can book themselves.",
    primaryKeyword: "cleaning service website design",
    secondaryKeywords: [
      "cleaning company website",
      "maid service website",
      "commercial cleaning website",
      "house cleaning website design",
    ],
    answer:
      "A cleaning service website from ROVQIX costs $349 to $1,290 and takes about a week. The highest-value features are an instant quote based on home size, recurring plan pricing, proof of insurance and background checks, and online booking.",
    intro:
      "Cleaning is one of the few local trades where you can genuinely quote and book online without a visit. Doing that well is worth more than everything else on the site.",
    deliverables: [
      {
        title: "Instant quote by size",
        description:
          "Bedrooms and bathrooms in, price out. This is the single biggest conversion lever in cleaning.",
        icon: "Receipt",
      },
      {
        title: "Recurring plan pricing",
        description:
          "Weekly, biweekly and monthly rates shown together, with the recurring discount visible.",
        icon: "RefreshCw",
      },
      {
        title: "Insurance and vetting",
        description:
          "Bonded, insured, background-checked. You are asking for keys to someone's home.",
        icon: "ShieldCheck",
      },
      {
        title: "Online booking",
        description:
          "Pick a date, confirm, done. Customers increasingly expect to book cleaning without a phone call.",
        icon: "CalendarCheck",
      },
      {
        title: "What is included",
        description:
          "A room-by-room checklist. Prevents the disputes that generate most cleaning complaints.",
        icon: "ClipboardList",
      },
      {
        title: "Commercial section",
        description:
          "Separate path for offices and commercial contracts, which is a different sale entirely.",
        icon: "Building2",
      },
    ],
    sections: [
      {
        heading: "Why does an instant quote work so well here?",
        answer:
          "Because cleaning price correlates closely with home size, so it can be calculated without seeing the property.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ask bedrooms, bathrooms and frequency. That is enough for a reliable estimate.",
              "Show the price immediately rather than emailing it later.",
              "Show the recurring discount alongside the one-off price, so the better option is obvious.",
              "Let them book straight from the quote while they are still on the page.",
              "Add a line that the price is confirmed after the first visit, which protects you on unusual homes.",
            ],
          },
          {
            type: "callout",
            title: "Most competitors still say 'call for a quote'",
            text: "In a market where every other cleaning site requires a phone call, an instant price and an online booking is a genuine advantage — and it costs nothing extra to build.",
          },
        ],
      },
      {
        heading: "What reassures someone letting you into their home?",
        body: [
          {
            type: "list",
            items: [
              "Background checks on staff, stated explicitly.",
              "Bonded and insured, with what that actually protects.",
              "Whether the same cleaner comes each time, which customers care about more than most owners realise.",
              "Your key handling and entry policy.",
              "A satisfaction guarantee and what happens if something is missed or damaged.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers book and pay online?",
        answer:
          "Yes, through booking systems built for cleaning like Launch27, Jobber or Housecall Pro. We connect the site to whichever you use rather than building a second system.",
      },
      {
        question: "Should residential and commercial be on one site?",
        answer:
          "One site, two clear paths. Commercial buyers want references, insurance certificates and contract terms; residential customers want a price and a date. The same page cannot serve both well.",
      },
      {
        question: "What if a home is much bigger than the quote assumed?",
        answer:
          "State on the quote that the price is confirmed after the first visit. That is standard, customers accept it, and it protects you from underpricing an unusual property.",
      },
    ],
    related: ["landscaping-company-website", "pest-control-website", "handyman-website"],
  },

  {
    slug: "pest-control-website",
    eyebrow: "Pest control",
    title: "Pest control website design",
    seoTitle: "Pest Control Website Design | ROVQIX",
    description:
      "Websites for pest control companies — pest-specific pages, recurring plans, licence details, same-day service and safety information for pets and children.",
    excerpt: "Pest-specific pages that rank, plus recurring plans and safety reassurance.",
    primaryKeyword: "pest control website design",
    secondaryKeywords: [
      "exterminator website design",
      "pest control company website",
      "termite control website",
      "pest control web design",
    ],
    answer:
      "A pest control website from ROVQIX costs $349 to $1,290 and takes about a week. It works best with a page per major pest, recurring treatment plan pricing, licence details, and clear information about safety around children and pets.",
    intro:
      "People search for the pest, not for pest control. A page for termites, one for bed bugs and one for roaches will out-earn a single services page every time.",
    deliverables: [
      {
        title: "Pages by pest",
        description:
          "Termites, bed bugs, roaches, rodents, ants, wasps. Each is a distinct search with distinct anxiety.",
        icon: "Network",
      },
      {
        title: "Recurring plans",
        description:
          "Quarterly protection plans with monthly pricing — the recurring revenue base of the business.",
        icon: "RefreshCw",
      },
      {
        title: "Safety information",
        description:
          "Treatment safety around children and pets, which is the first question almost every customer has.",
        icon: "ShieldCheck",
      },
      {
        title: "Licence details",
        description:
          "State pesticide applicator licensing, which is legally required and reassuring to display.",
        icon: "BadgeCheck",
      },
      {
        title: "Same-day availability",
        description:
          "Bed bugs and wasps are urgent. Making availability visible captures those calls.",
        icon: "Zap",
      },
      {
        title: "Free inspection",
        description:
          "Standard in the industry for termites and bed bugs, and the main low-commitment conversion.",
        icon: "Target",
      },
    ],
    sections: [
      {
        heading: "Why build a page per pest?",
        answer:
          "Because each pest is a different search, a different urgency and a different set of fears.",
        body: [
          {
            type: "table",
            head: ["Pest", "Customer state", "What the page must do"],
            rows: [
              ["Bed bugs", "Panicked, embarrassed", "Reassure, explain discretion, same-day"],
              ["Termites", "Worried about property value", "Inspection offer, damage explanation"],
              ["Rodents", "Disgusted, urgent", "Speed, exclusion work, prevention"],
              ["Roaches", "Embarrassed", "Discretion, treatment plan, prevention"],
              ["Wasps", "Urgent, safety concern", "Same-day, safety, price"],
              ["Ants", "Annoyed, not urgent", "Recurring plan upsell"],
            ],
          },
          {
            type: "callout",
            title: "Match the emotional state",
            text: "A bed bug page written in the same tone as an ant page will fail. Bed bug customers are embarrassed and frightened; the page needs to say discreet vehicles, discreet treatment, and that this happens to clean homes.",
          },
        ],
      },
      {
        heading: "How should safety be addressed?",
        body: [
          {
            type: "p",
            text: "Directly and early. Almost every residential customer wants to know whether the treatment is safe for children and pets, and how long before they can return to the room.",
          },
          {
            type: "list",
            items: [
              "State re-entry times plainly for each treatment type.",
              "Mention pet-safe and low-toxicity options if you offer them.",
              "Explain what customers need to do to prepare, which reduces failed visits.",
              "Note your licensing and that products are EPA-registered and applied to label.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many pest pages should we build?",
        answer:
          "Four to eight, covering your highest-value and most-searched pests. Not thirty. Pages for pests you rarely treat add nothing and dilute the site.",
      },
      {
        question: "Should we show prices?",
        answer:
          "For recurring plans, yes — a monthly figure works well. For one-off treatments a starting range is enough, since severity varies too much for a fixed price.",
      },
      {
        question: "Can customers book online?",
        answer:
          "Inspections and routine treatments, yes. Urgent work should route to the phone, because those customers want to speak to someone immediately.",
      },
    ],
    related: ["cleaning-service-website", "landscaping-company-website", "hvac-company-website"],
  },

  {
    slug: "auto-repair-shop-website",
    eyebrow: "Auto repair",
    title: "Auto repair shop website design",
    seoTitle: "Auto Repair Shop Website Design | ROVQIX",
    description:
      "Websites for auto repair shops and mechanics — services, appointment booking, certifications, warranty and honest pricing for common jobs.",
    excerpt: "Services, certifications and booking — built to earn trust from a suspicious customer.",
    primaryKeyword: "auto repair website design",
    secondaryKeywords: [
      "mechanic website design",
      "auto shop website",
      "car repair website design",
      "automotive repair website",
    ],
    answer:
      "An auto repair shop website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your services and specialisms, technician certifications, appointment booking, warranty terms and pricing guidance for common jobs.",
    intro:
      "Auto repair carries more customer suspicion than almost any local trade. Everything on the site should be answering the unspoken question: are you going to overcharge me?",
    deliverables: [
      {
        title: "Certifications shown",
        description:
          "ASE certifications and manufacturer training. Direct, verifiable evidence of competence.",
        icon: "BadgeCheck",
      },
      {
        title: "Pricing for common jobs",
        description:
          "Oil change, brakes, diagnostics. Publishing these is the strongest anti-suspicion signal available.",
        icon: "Receipt",
      },
      {
        title: "Warranty terms",
        description:
          "Your parts and labour warranty, stated plainly. Often the deciding factor between two shops.",
        icon: "ShieldCheck",
      },
      {
        title: "Appointment booking",
        description:
          "Request or live booking, with drop-off and waiting options made clear.",
        icon: "CalendarCheck",
      },
      {
        title: "Specialisms",
        description:
          "European, diesel, hybrid, transmissions. Specialisation is how independents compete with dealers.",
        icon: "Network",
      },
      {
        title: "The shop and team",
        description:
          "Photos of a clean shop and the actual technicians. It reads as accountability.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "How do you overcome customer suspicion?",
        answer:
          "By publishing prices, warranty terms and certifications before anyone has to ask.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Publish prices for the standard jobs — oil change, brake pads, diagnostic fee.",
              "Explain your diagnostic fee and whether it is credited against the repair.",
              "State your warranty on parts and labour in months and miles.",
              "Say that you call before doing any work beyond what was authorised.",
              "Show technician certifications with names attached.",
              "Offer to show the old parts back, which is a small thing that builds real trust.",
            ],
          },
          {
            type: "callout",
            title: "Publishing prices is your advantage",
            text: "Most independent shops publish nothing. A page listing your common service prices, even as ranges, immediately separates you from every competitor whose site says 'call for a quote'.",
          },
        ],
      },
      {
        heading: "Should you specialise on the website?",
        body: [
          {
            type: "p",
            text: "If you have a genuine specialism, lead with it. 'European specialists — BMW, Audi, Mercedes' attracts higher-value work and lets you compete with dealer service departments on expertise rather than price.",
          },
          {
            type: "p",
            text: "You can still take general work. The specialism gives you a reason to be chosen; the general services page catches everything else.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we really publish our prices?",
        answer:
          "For standard, predictable jobs, yes. It is the clearest trust signal available in this trade. Complex diagnostic work obviously cannot be priced upfront, and saying so is fine.",
      },
      {
        question: "Can customers book online?",
        answer:
          "Yes, usually as a request with a preferred date, which your service writer confirms. Live scheduling works if your shop management system supports it.",
      },
      {
        question: "Do we need a page for every service?",
        answer:
          "No. One good services page plus separate pages for your highest-value work — transmissions, diagnostics, your specialism — is enough. Thirty thin service pages do not help.",
      },
    ],
    related: ["auto-detailing-website", "tire-shop-website", "towing-company-website"],
  },

  {
    slug: "auto-detailing-website",
    eyebrow: "Auto detailing",
    title: "Auto detailing website design",
    seoTitle: "Auto Detailing Website Design | ROVQIX",
    description:
      "Websites for auto detailers — package pricing by vehicle size, before and after gallery, mobile service areas and online booking.",
    excerpt: "Package pricing by vehicle size and a gallery that justifies the price.",
    primaryKeyword: "auto detailing website design",
    secondaryKeywords: [
      "car detailing website",
      "mobile detailing website",
      "ceramic coating website",
      "car wash website design",
    ],
    answer:
      "An auto detailing website from ROVQIX costs $349 to $1,290 and takes about a week. It centres on package pricing by vehicle size, a strong before-and-after gallery, mobile service area if you travel, and online booking.",
    intro:
      "Detailing is sold on photographs. The gallery is not decoration here — it is the entire argument for charging $300 instead of $30.",
    deliverables: [
      {
        title: "Before and after gallery",
        description:
          "Paint correction and interior transformations. This is what justifies premium pricing.",
        icon: "Images",
      },
      {
        title: "Packages by vehicle size",
        description:
          "Sedan, SUV, truck. Clear tiers stop the endless 'how much for my car' messages.",
        icon: "Receipt",
      },
      {
        title: "Mobile service area",
        description:
          "Where you travel and any travel fee, if you are a mobile operation.",
        icon: "Globe",
      },
      {
        title: "Ceramic coating info",
        description:
          "Your highest-value service, explained properly — what it does, how long it lasts, what it costs.",
        icon: "Sparkles",
      },
      {
        title: "Online booking",
        description:
          "With duration shown, since a full detail takes hours and customers need to plan around it.",
        icon: "CalendarCheck",
      },
      {
        title: "Add-ons",
        description:
          "Pet hair, engine bay, headlight restoration. Priced separately, they raise the average ticket.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "How should detailing be priced on the site?",
        answer:
          "By package and vehicle size, with add-ons listed separately.",
        body: [
          {
            type: "table",
            head: ["Approach", "Effect"],
            rows: [
              ["'Contact for pricing'", "Endless messages, most never book"],
              ["One flat price", "Loses money on large or filthy vehicles"],
              ["Package × vehicle size", "Clear, fair, and customers self-select"],
              ["Add-ons priced separately", "Raises average ticket without inflating the headline"],
            ],
          },
          {
            type: "callout",
            title: "Add a condition surcharge line",
            text: "'Vehicles in exceptional condition may incur an additional charge, confirmed before work begins.' One sentence that protects you from the genuinely filthy car without scaring off normal customers.",
          },
        ],
      },
      {
        heading: "Why does ceramic coating deserve its own page?",
        body: [
          {
            type: "p",
            text: "It is your highest-value service, customers research it heavily before buying, and there is a lot of confusion about what it actually does. A page that explains it honestly — including what it does not do — converts well.",
          },
          {
            type: "list",
            items: [
              "What it is and what it realistically protects against.",
              "How long it lasts and what maintenance it needs.",
              "Why paint correction is usually needed first, and what that adds.",
              "Price by vehicle size and coating tier.",
              "Photos of coated cars, ideally in the rain, which is what customers want to see.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I show prices if every car is different?",
        answer:
          "Yes, as packages by vehicle size with a note about exceptional condition. Detailers who publish nothing spend hours a week answering price messages that mostly do not convert.",
      },
      {
        question: "I am mobile. Does that change the site?",
        answer:
          "Yes — the service area and any travel fee become primary information, and you need to state what you require on site, such as water and power access if applicable.",
      },
      {
        question: "How many gallery photos do I need?",
        answer:
          "Twenty to forty good ones beats two hundred average ones. Same angle before and after is far more persuasive than a lot of glamour shots.",
      },
    ],
    related: ["auto-repair-shop-website", "car-wash-website", "tire-shop-website"],
  },

  {
    slug: "handyman-website",
    eyebrow: "Handyman",
    title: "Handyman website design",
    seoTitle: "Handyman Website Design from $349 | ROVQIX",
    description:
      "Websites for handyman businesses — services list, hourly and job pricing, service area, insurance and a quote form that filters out tiny jobs.",
    excerpt: "A services list, honest pricing and a form that filters out the jobs you do not want.",
    primaryKeyword: "handyman website design",
    secondaryKeywords: [
      "handyman website",
      "handyman services website",
      "home repair website design",
      "odd job service website",
    ],
    answer:
      "A handyman website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your services list, hourly or minimum-job pricing, service area, insurance details, and a quote form that filters out jobs too small to be worth travelling for.",
    intro:
      "The main problem with handyman enquiries is not volume — it is that half of them are twenty-minute jobs on the other side of town.",
    deliverables: [
      {
        title: "Minimum job stated",
        description:
          "Your minimum charge or hours, up front. The single most useful filter on a handyman site.",
        icon: "Receipt",
      },
      {
        title: "What you do and do not do",
        description:
          "Being explicit about what you will not take on saves everyone time and avoids awkward calls.",
        icon: "ClipboardList",
      },
      {
        title: "Service area",
        description:
          "Clear boundaries, because travel time is what destroys margin in this trade.",
        icon: "Globe",
      },
      {
        title: "Insurance",
        description:
          "Liability insurance stated plainly, which separates you from the unlicensed end of the market.",
        icon: "ShieldCheck",
      },
      {
        title: "Job photos",
        description:
          "Finished work across a range of job types, showing you are competent at more than one thing.",
        icon: "Images",
      },
      {
        title: "Quote form with photos",
        description:
          "Let people send a photo of the job. It saves a visit and lets you quote accurately from home.",
        icon: "Phone",
      },
    ],
    sections: [
      {
        heading: "How do you filter out unprofitable jobs?",
        answer:
          "State your minimum, state your area, and ask for a photo before quoting.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Publish a minimum charge or minimum hours. Most people accept it; the ones who do not were unprofitable anyway.",
              "Be specific about your service area, with the towns named.",
              "Ask for a photo in the quote form — it removes a visit and improves quote accuracy.",
              "List job types you do not take, such as roofing, gas work or anything requiring a specialist licence.",
              "Note if you have a busy period and a realistic lead time, which self-selects urgent callers out.",
            ],
          },
          {
            type: "callout",
            title: "A minimum charge is not off-putting",
            text: "Handymen worry that publishing a two-hour minimum will lose work. In practice it loses the jobs that lose money and keeps the ones that pay for the drive.",
          },
        ],
      },
      {
        heading: "Should you list every possible service?",
        body: [
          {
            type: "p",
            text: "List categories rather than every task — carpentry, drywall and painting, fixture installation, doors and windows, small repairs. Add a line inviting people to ask about anything not listed.",
          },
          {
            type: "p",
            text: "An endless list reads as unfocused and makes it harder for someone to see that you do the specific thing they need.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I charge hourly or by the job?",
        answer:
          "Whatever you already do — the website just needs to state it clearly. Hourly with a minimum is common and easy to explain; per-job pricing works better for repeatable tasks like TV mounting or door hanging.",
      },
      {
        question: "Do I need a website if I get work from Nextdoor and word of mouth?",
        answer:
          "Not urgently. It helps when you want to raise rates, look more established, or stop depending on one platform. If referrals keep you full, spend the money elsewhere for now.",
      },
      {
        question: "Can people send photos of the job?",
        answer:
          "Yes, and it is one of the most useful things on a handyman site. A photo turns a vague enquiry into something you can quote without driving across town.",
      },
    ],
    related: ["general-contractor-website", "plumber-website", "electrician-website"],
  },

  {
    slug: "general-contractor-website",
    eyebrow: "Contractors",
    title: "General contractor website design",
    seoTitle: "General Contractor Website Design | ROVQIX",
    description:
      "Websites for general contractors and remodelers — project galleries, process explanation, licence and insurance, and quote requests that qualify by budget.",
    excerpt: "Project galleries and a clear process, with enquiries qualified by budget.",
    primaryKeyword: "general contractor website design",
    secondaryKeywords: [
      "remodeling contractor website",
      "construction company website design",
      "home builder website",
      "kitchen remodel website",
    ],
    answer:
      "A general contractor website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It centres on project galleries by type, a clear explanation of your process, licence and insurance details, and a quote form that qualifies by budget and timeline.",
    intro:
      "Remodeling enquiries are expensive to handle. A form that asks for a budget range saves more money than anything else on the site.",
    deliverables: [
      {
        title: "Project galleries by type",
        description:
          "Kitchens, bathrooms, additions, whole-home. Customers browse the type they are planning.",
        icon: "Images",
      },
      {
        title: "Your process explained",
        description:
          "Consultation, design, permits, build, walkthrough. Homeowners are nervous and process reassures.",
        icon: "Network",
      },
      {
        title: "Budget-qualifying form",
        description:
          "A budget range field. Uncomfortable to ask, and it saves an enormous amount of wasted time.",
        icon: "ClipboardList",
      },
      {
        title: "Licence, bonding, insurance",
        description:
          "All three, with numbers. Homeowners are explicitly told to verify these before hiring.",
        icon: "BadgeCheck",
      },
      {
        title: "Typical project ranges",
        description:
          "What a kitchen or bathroom actually costs in your market. Sets expectations before the call.",
        icon: "Receipt",
      },
      {
        title: "Timeline expectations",
        description:
          "How long projects take and how far out you are booking, which is a common early question.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "Why ask for budget on the form?",
        answer:
          "Because a consultation with someone expecting a $15,000 kitchen when your minimum is $45,000 costs you half a day.",
        body: [
          {
            type: "list",
            items: [
              "Use ranges rather than an open field — people will not type a number but will pick a bracket.",
              "Include a 'not sure yet' option, and follow those up with your typical project ranges.",
              "Publish typical ranges on the site so the brackets are not a shock.",
              "Add a note that the range helps you recommend the right approach, which is true and softens it.",
              "State your project minimum if you have one. It is kinder than a declined enquiry later.",
            ],
          },
          {
            type: "callout",
            title: "Publishing ranges reduces bad enquiries",
            text: "'Most of our kitchen remodels fall between $45,000 and $90,000' filters out mismatched enquiries before they reach your form, and reassures serious homeowners that you work at their level.",
          },
        ],
      },
      {
        heading: "What makes a project gallery work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Group by project type, since homeowners browse the type they are planning.",
              "Include before photos. The transformation is more persuasive than the finished shot alone.",
              "Add a short description: scope, timeline, and roughly what it cost.",
              "Show a range of budgets, so people at different levels see themselves.",
              "Keep it current. A gallery whose most recent project is four years old raises questions.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish project costs?",
        answer:
          "Ranges, yes. Homeowners have no reference point and often expect figures that are far too low. Publishing ranges qualifies enquiries and positions you honestly before the first conversation.",
      },
      {
        question: "How many projects should the gallery show?",
        answer:
          "Eight to fifteen well-documented projects beats fifty with one photo each. Depth is more persuasive than volume in remodeling.",
      },
      {
        question: "Do we need a separate page per service?",
        answer:
          "For your main project types — kitchens, bathrooms, additions — yes, since those are distinct searches. Not for every sub-service.",
      },
    ],
    related: ["handyman-website", "roofing-company-website", "landscaping-company-website"],
  },

  {
    slug: "moving-company-website",
    eyebrow: "Movers",
    title: "Moving company website design",
    seoTitle: "Moving Company Website Design | ROVQIX",
    description:
      "Websites for moving companies — instant quote by home size, licence and insurance, local versus long distance, and booking with deposit.",
    excerpt: "Instant quotes by home size, plus the licence details customers are told to check.",
    primaryKeyword: "moving company website design",
    secondaryKeywords: [
      "movers website design",
      "moving company website",
      "local moving website",
      "relocation company website",
    ],
    answer:
      "A moving company website from ROVQIX costs $349 to $1,290 and takes about a week. Priorities are an instant or fast quote based on home size and distance, licence and insurance details, a clear split between local and long-distance service, and online booking.",
    intro:
      "Moving is a category with real fraud problems, so customers arrive suspicious and are actively checking your credentials.",
    deliverables: [
      {
        title: "Quote by home size",
        description:
          "Bedrooms, distance and date in, estimate out. Faster than every competitor asking for a phone call.",
        icon: "Receipt",
      },
      {
        title: "Licence and insurance",
        description:
          "USDOT and MC numbers for interstate, state licence for local. Customers are told to verify these.",
        icon: "BadgeCheck",
      },
      {
        title: "Local vs long distance",
        description:
          "Separate paths — the pricing model, timeline and customer worries are completely different.",
        icon: "Network",
      },
      {
        title: "What is included",
        description:
          "Packing, materials, stairs, long carries, storage. The extras that cause every moving dispute.",
        icon: "ClipboardList",
      },
      {
        title: "Booking and deposit",
        description:
          "Date reservation with deposit, since moving dates are scarce inventory in peak season.",
        icon: "CalendarCheck",
      },
      {
        title: "Real reviews",
        description:
          "Pulled from Google. Moving is a category where people read reviews obsessively before booking.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "Why do movers need to display credentials so prominently?",
        answer:
          "Because moving fraud is common enough that consumer bodies actively tell people to verify before booking.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Display your USDOT number for interstate moves, and your state licence for local ones.",
              "Show proof of insurance and explain what valuation coverage actually means.",
              "Include a real physical address, not just a phone number and a service area.",
              "Explain your deposit policy clearly — large upfront deposits are a known warning sign.",
              "Link to how customers can verify you, which only a legitimate mover would do.",
            ],
          },
          {
            type: "callout",
            title: "Invite verification",
            text: "Telling customers how to check your licence is counter-intuitive and extremely effective. Fraudulent operators never do it, so doing it puts you in a different category immediately.",
          },
        ],
      },
      {
        heading: "Should you quote online?",
        body: [
          {
            type: "p",
            text: "An estimate, yes. Home size, distance and date get you close enough for a useful ballpark, and it captures the enquiry while the customer is actively comparing.",
          },
          {
            type: "p",
            text: "Be clear that the binding quote follows a survey — video surveys are now standard and are far cheaper than sending someone out. Publishing an estimate range beats every competitor whose site says 'call us'.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we give binding quotes online?",
        answer:
          "An estimate online and a binding quote after a video or in-person survey is the standard approach. Attempting to bind from a form alone exposes you on unusual jobs.",
      },
      {
        question: "Should local and long distance be separate pages?",
        answer:
          "Yes. Pricing models differ, timelines differ, and customer concerns differ. One page trying to cover both confuses everyone.",
      },
      {
        question: "How do we handle peak season?",
        answer:
          "Show availability honestly and let people reserve a date with a deposit. In summer, date availability matters more to customers than price.",
      },
    ],
    related: ["cleaning-service-website", "self-storage-website", "general-contractor-website"],
  },
];

export const localTradesPages = makeLocalPages(specs);
