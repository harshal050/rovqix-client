import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/** Repair trades and automotive specialists. */
const specs: LocalSpec[] = [
  {
    slug: "shoe-repair-website",
    eyebrow: "Shoe repair",
    title: "Shoe repair shop website design",
    seoTitle: "Shoe Repair Shop Website Design | ROVQIX",
    description:
      "Websites for cobblers — pricing per repair, turnaround times, what can and cannot be fixed, and postal repair services.",
    excerpt: "Price per repair and turnaround. Two facts that answer almost every call.",
    primaryKeyword: "shoe repair website",
    secondaryKeywords: ["cobbler website design", "shoe repair shop website", "boot repair website", "leather repair website"],
    answer:
      "A shoe repair website from ROVQIX costs $349 to $549 and takes about a week. It lists price per repair type, turnaround times, what can and cannot be repaired, and postal service if you offer it.",
    intro:
      "Every call to a cobbler asks the same two things: can you fix this, and how much. Publishing both is most of the website.",
    deliverables: [
      { title: "Price per repair", description: "Resoling, heels, stitching, zips, stretching. Predictable enough to publish.", icon: "Receipt" },
      { title: "Turnaround times", description: "Standard and while-you-wait, since some repairs are quick and customers do not know which.", icon: "Clock" },
      { title: "What cannot be fixed", description: "Honest limits, which saves wasted trips with unrepairable footwear.", icon: "ShieldCheck" },
      { title: "Postal repairs", description: "If you accept mail-in work, it widens your market well beyond walking distance.", icon: "Globe" },
      { title: "Before and after", description: "Restored boots and bags, which is what convinces someone a repair beats replacement.", icon: "Images" },
    ],
    sections: [
      {
        heading: "Why publish a repair price list?",
        answer: "Because customers are deciding between repairing and replacing, and they need a number to make that call.",
        body: [
          { type: "p", text: "Someone with $200 boots and a worn sole is weighing a repair against new boots. A published price turns that from a phone call into a decision, and you get the work." },
          { type: "list", items: [
            "List your common repairs with a price or tight range.",
            "Note where a price depends on the shoe, and invite them to send a photo.",
            "Include leather bags, belts and jackets if you take them — many people do not know cobblers do.",
            "Mention orthopaedic and lift work if you do it; it is a specific, high-intent search.",
          ]},
        ],
      },
      {
        heading: "Is postal repair worth offering?",
        body: [
          { type: "p", text: "For quality footwear it genuinely is. Customers will post good boots across the country to a cobbler who knows the brand, and that market is far larger than your high street." },
          { type: "p", text: "State postage both ways, how to pack, and expected turnaround. Be clear about who pays return shipping so there is no dispute." },
        ],
      },
    ],
    faqs: [
      { question: "Should we take photos of repairs?", answer: "Yes. Before and after shots of restored boots are the most persuasive content, and they cost nothing but a phone." },
      { question: "Do we need online booking?", answer: "Not usually — most work is drop-in. A contact form for postal enquiries and photo assessments is more useful." },
      { question: "Should we mention brands we work on?", answer: "Yes, especially welted and premium brands. Owners of those specifically search for someone who knows the construction." },
    ],
    related: ["watch-repair-website", "tailor-and-alterations-website", "upholstery-shop-website"],
  },
  {
    slug: "watch-repair-website",
    eyebrow: "Watch repair",
    title: "Watch repair website design",
    seoTitle: "Watch Repair Website Design | ROVQIX",
    description:
      "Websites for watchmakers — service pricing, brands worked on, battery versus full service, turnaround and postal repair with insurance.",
    excerpt: "Brands and service pricing, plus how you handle valuable pieces in the post.",
    primaryKeyword: "watch repair website",
    secondaryKeywords: ["watchmaker website design", "watch service website", "clock repair website", "vintage watch repair website"],
    answer:
      "A watch repair website from ROVQIX costs $349 to $749 and takes about a week. Priorities are service pricing, brands and movements you work on, the difference between a battery and a full service, turnaround times and insured postal repair.",
    intro:
      "Watch owners are handing over something valuable and often sentimental. The site's job is proving you are the right person to trust with it.",
    deliverables: [
      { title: "Brands and movements", description: "What you service, including whether you work on in-house and vintage movements.", icon: "Blocks" },
      { title: "Service pricing", description: "Battery, seal, full service and overhaul, priced separately so the ladder is clear.", icon: "Receipt" },
      { title: "Qualifications", description: "Training and accreditations. In this trade they genuinely matter to the customer.", icon: "BadgeCheck" },
      { title: "Insured postal repair", description: "How to send a valuable watch safely, and what insurance covers.", icon: "ShieldCheck" },
      { title: "Turnaround expectations", description: "A full service can take weeks. Saying so upfront prevents anxious calls.", icon: "Clock" },
    ],
    sections: [
      {
        heading: "Explain the difference between a battery and a service",
        answer: "Because most customers think a watch either works or does not, and price accordingly.",
        body: [
          { type: "table", head: ["Job", "What it involves", "Typical price band"], rows: [
            ["Battery and seal", "New cell, gasket check, pressure test", "Low"],
            ["Partial service", "Clean, lubricate, regulate", "Medium"],
            ["Full service", "Full strip, clean, replace worn parts, reseal", "High"],
            ["Restoration", "Case and dial work on a vintage piece", "Quoted"],
          ]},
          { type: "callout", title: "The pressure test matters", text: "Most customers do not know a battery change without a pressure test leaves a water-resistant watch unsealed. Explaining that justifies your price against the mall kiosk." },
        ],
      },
      {
        heading: "How should postal repair be handled?",
        body: [
          { type: "list", items: [
            "State exactly how to pack a watch, since most people do it badly.",
            "Specify insured, tracked postage and who arranges it.",
            "Explain your own insurance while the piece is with you.",
            "Confirm receipt in writing, with photographs on arrival.",
            "Quote before working, never after.",
          ]},
        ],
      },
    ],
    faqs: [
      { question: "Should we publish service prices?", answer: "Bands work well — customers need a reference point. Exact pricing after inspection is standard and expected in this trade." },
      { question: "Do we need to mention insurance?", answer: "Yes. Anyone posting a valuable watch wants to know it is covered while in your possession. Silence on this loses the enquiry." },
      { question: "Is vintage work worth a separate page?", answer: "If you do it, absolutely. It is a distinct, high-value search and vintage owners look specifically for someone who handles old movements." },
    ],
    related: ["jewelry-store-website", "shoe-repair-website", "phone-repair-website"],
  },
  {
    slug: "small-engine-repair-website",
    eyebrow: "Small engine repair",
    title: "Small engine repair website design",
    seoTitle: "Small Engine Repair Website Design | ROVQIX",
    description:
      "Websites for small engine shops — equipment serviced, seasonal tune-up booking, pickup and delivery, and repair-or-replace guidance.",
    excerpt: "Seasonal booking that fills spring, plus honest repair-or-replace advice.",
    primaryKeyword: "small engine repair website",
    secondaryKeywords: ["lawn mower repair website", "mower service website design", "chainsaw repair website", "outdoor power equipment website"],
    answer:
      "A small engine repair website from ROVQIX costs $349 to $749 and takes about a week. It covers the equipment you service, seasonal tune-up booking, pickup and delivery, diagnostic fees and repair-or-replace guidance.",
    intro:
      "This trade lives or dies on spring. A site that takes tune-up bookings in February smooths the whole year.",
    deliverables: [
      { title: "Equipment serviced", description: "Mowers, chainsaws, blowers, trimmers, generators, snow blowers. Each is a separate search.", icon: "Blocks" },
      { title: "Seasonal tune-up booking", description: "Pre-season scheduling, which is the single most valuable feature for this trade.", icon: "CalendarCheck" },
      { title: "Pickup and delivery", description: "Whether you collect. Most customers cannot fit a mower in a car.", icon: "Globe" },
      { title: "Diagnostic fee", description: "What a look costs and whether it comes off the repair. Always the first question.", icon: "Receipt" },
      { title: "Repair or replace", description: "Honest guidance on when an old machine is not worth fixing.", icon: "Scale" },
    ],
    sections: [
      {
        heading: "How do you smooth the seasonal rush?",
        answer: "Take bookings before the season, not during it.",
        body: [
          { type: "list", ordered: true, items: [
            "Open spring tune-up bookings in late winter, when nobody else is thinking about it.",
            "Offer a small discount for pre-season booking to shift demand earlier.",
            "Publish current turnaround honestly during peak, so expectations are set.",
            "Promote winterisation and snow equipment in autumn to fill the other end.",
            "Offer collection, which converts the customers who physically cannot bring the machine.",
          ]},
          { type: "callout", title: "Pickup is the differentiator", text: "A mower will not fit in most cars. A shop that collects wins the customer who would otherwise buy a new machine from a big-box store rather than deal with transport." },
        ],
      },
      {
        heading: "When is a repair not worth it?",
        body: [
          { type: "p", text: "Publishing an honest rule — machine age, repair cost against replacement, parts availability — earns far more trust than it costs in declined jobs, and the customer comes back when the new machine needs servicing." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish tune-up prices?", answer: "Yes. A standard mower service is predictable and it is exactly what people ring to ask. Repairs can be quoted after diagnosis." },
      { question: "Is pickup and delivery worth offering?", answer: "For most shops yes, with a fee by distance. It is often the deciding factor for a customer with no way to transport equipment." },
      { question: "Should we list brands?", answer: "Yes, particularly any you are an authorised service centre for. Warranty work is high-value and customers search by brand." },
    ],
    related: ["motorcycle-repair-website", "appliance-repair-website", "landscaping-company-website"],
  },
  {
    slug: "motorcycle-repair-website",
    eyebrow: "Motorcycle repair",
    title: "Motorcycle repair shop website design",
    seoTitle: "Motorcycle Repair Shop Website Design | ROVQIX",
    description:
      "Websites for motorcycle shops — services and specialisms, brands, seasonal storage, MOT or inspection, and tyre fitting.",
    excerpt: "Specialisms and brands, because riders choose a shop that knows their bike.",
    primaryKeyword: "motorcycle repair website",
    secondaryKeywords: ["motorcycle shop website design", "bike mechanic website", "motorbike servicing website", "powersports repair website"],
    answer:
      "A motorcycle repair website from ROVQIX costs $349 to $1,290 and takes about a week. It covers services and specialisms, brands you work on, seasonal storage, inspections and tyre fitting.",
    intro:
      "Riders are particular about who touches their bike. Naming the makes and disciplines you actually know is the whole trust argument.",
    deliverables: [
      { title: "Brands and types", description: "Sport, cruiser, adventure, classic — and which makes you genuinely know.", icon: "Blocks" },
      { title: "Service pricing", description: "Standard service intervals priced, since these are predictable jobs.", icon: "Receipt" },
      { title: "Tyre fitting", description: "Brands, fitting cost and whether you fit customer-supplied tyres.", icon: "RefreshCw" },
      { title: "Winter storage", description: "Off-season storage and winterisation, which is steady revenue in cold climates.", icon: "CalendarCheck" },
      { title: "Specialisms", description: "Classic restoration, performance work, dyno tuning — the reason riders travel to you.", icon: "Target" },
    ],
    sections: [
      {
        heading: "Why do specialisms matter more here than in car repair?",
        answer: "Because riders will travel a long way for someone who genuinely knows their machine.",
        body: [
          { type: "list", items: [
            "A classic owner will not take a 1970s twin to a general shop.",
            "Performance and tuning customers choose on reputation and equipment, not proximity.",
            "Adventure riders want someone who has actually set up suspension for loaded touring.",
            "Naming what you do not work on is as useful as naming what you do.",
            "Specialisation lets you charge properly instead of competing on hourly rate.",
          ]},
          { type: "callout", title: "Photos of the workshop matter", text: "Riders judge a shop on how it looks. A clean bay, a dyno, proper stands — photographs of the actual workshop do more than any amount of copy." },
        ],
      },
      {
        heading: "How do you handle the off-season?",
        body: [
          { type: "p", text: "Winter storage and winterisation turn a seasonal business into a year-round one. Price it monthly, state what is included — battery tender, fuel treatment, storage conditions — and take bookings before the weather turns." },
          { type: "p", text: "Off-season is also when riders commission restoration and upgrade work. Promoting that in autumn fills the quiet months." },
        ],
      },
    ],
    faqs: [
      { question: "Should we fit customer-supplied tyres?", answer: "Many shops do at a higher fitting rate. Whichever you choose, state the policy — it is one of the most common enquiries." },
      { question: "Is winter storage worth offering?", answer: "In cold climates it is reliable off-season income and it guarantees the spring service. Price monthly and state what is included." },
      { question: "Should we show hourly labour rate?", answer: "Yes, alongside fixed prices for standard services. Riders compare rates and hiding it suggests you are expensive." },
    ],
    related: ["auto-repair-shop-website", "small-engine-repair-website", "marine-repair-website"],
  },
  {
    slug: "marine-repair-website",
    eyebrow: "Marine services",
    title: "Boat and marine repair website design",
    seoTitle: "Boat & Marine Repair Website Design | ROVQIX",
    description:
      "Websites for marine businesses — services by boat type, winterisation and storage, mobile service, haul-out and emergency response.",
    excerpt: "Winterisation and storage bookings, which are the backbone of the year.",
    primaryKeyword: "boat repair website",
    secondaryKeywords: ["marine repair website design", "boat service website", "marina website design", "outboard repair website"],
    answer:
      "A marine repair website from ROVQIX costs $349 to $1,290 and takes about a week. It covers services by boat and engine type, winterisation and storage, mobile or dockside service, haul-out capability and emergency response.",
    intro:
      "Marine work is intensely seasonal and logistics-heavy. Whether you come to the boat or the boat comes to you is the first thing a customer needs to know.",
    deliverables: [
      { title: "Services by engine type", description: "Outboard, inboard, sterndrive, diesel — with the brands you are certified on.", icon: "Blocks" },
      { title: "Winterisation and storage", description: "The single biggest seasonal revenue line, bookable in advance.", icon: "CalendarCheck" },
      { title: "Mobile or dockside", description: "Whether you travel to the boat, and your coverage area including which marinas.", icon: "Globe" },
      { title: "Haul-out capability", description: "Maximum length and weight you can lift, which decides whether a customer can use you at all.", icon: "Scale" },
      { title: "Emergency response", description: "Breakdown on the water is urgent. Availability and how to reach you.", icon: "Zap" },
    ],
    sections: [
      {
        heading: "Why state haul-out limits prominently?",
        answer: "Because a customer whose boat is too big for your lift has wasted both your time and theirs.",
        body: [
          { type: "list", items: [
            "Maximum length, beam and weight your equipment handles.",
            "Which marinas and ramps you work from.",
            "Whether you can service in the water or need the boat out.",
            "Trailer requirements if the customer brings it to you.",
            "Storage capacity and whether it is indoor, covered or outdoor.",
          ]},
          { type: "callout", title: "Marina coverage is a search term", text: "Boat owners search by their marina name. Listing the marinas you serve captures a very specific, high-intent local search that general 'boat repair' pages miss." },
        ],
      },
      {
        heading: "How should winterisation be sold?",
        body: [
          { type: "p", text: "As a package with a clear list of what is included — engine, water systems, fuel stabilisation, shrink wrap or cover, battery — and a booking deadline before the first freeze." },
          { type: "p", text: "Open bookings in late summer. Owners who leave it late are the ones who end up with freeze damage, and a shop that reminds them earns the spring commissioning work too." },
        ],
      },
    ],
    faqs: [
      { question: "Should we list marinas we serve?", answer: "Yes. Owners search by their marina, and listing them captures searches a general service page will never rank for." },
      { question: "How do we handle seasonality?", answer: "Winterisation and storage in autumn, commissioning in spring, restoration and upgrades over winter. The website should shift focus with the season." },
      { question: "Is emergency service worth advertising?", answer: "If you genuinely offer it. A breakdown on the water is urgent and the customer will pay for speed — but do not claim availability you cannot deliver." },
    ],
    related: ["motorcycle-repair-website", "small-engine-repair-website", "auto-repair-shop-website"],
  },
  {
    slug: "mobile-mechanic-website",
    eyebrow: "Mobile mechanics",
    title: "Mobile mechanic website design",
    seoTitle: "Mobile Mechanic Website Design | ROVQIX",
    description:
      "Websites for mobile mechanics — what can be done on a driveway, service area, callout pricing, and what needs a workshop.",
    excerpt: "What you can do on a driveway and what you cannot. That is the whole proposition.",
    primaryKeyword: "mobile mechanic website",
    secondaryKeywords: ["mobile car repair website", "mobile auto mechanic website design", "at home car service website", "mobile vehicle servicing"],
    answer:
      "A mobile mechanic website from ROVQIX costs $349 to $749 and takes about a week. The essentials are what you can do at a customer's home, your service area, callout and labour pricing, and an honest list of what needs a workshop.",
    intro:
      "The whole selling point is convenience. The whole risk is arriving at a job you cannot do on a driveway.",
    deliverables: [
      { title: "What you can do on site", description: "Services, brakes, diagnostics, batteries, alternators. The core of the proposition.", icon: "ClipboardList" },
      { title: "What needs a workshop", description: "Anything requiring a lift or heavy equipment. Stating it prevents wasted callouts.", icon: "ShieldCheck" },
      { title: "Service area", description: "Named towns and any travel charge beyond a radius.", icon: "Globe" },
      { title: "Callout and labour rates", description: "Published, since your competition is a garage with a posted rate.", icon: "Receipt" },
      { title: "Site requirements", description: "Level ground, space, and whether you need power or a driveway rather than a street.", icon: "Network" },
    ],
    sections: [
      {
        heading: "Why publish what you cannot do?",
        answer: "Because turning up to a job you have to decline costs you the slot and the customer's goodwill.",
        body: [
          { type: "list", items: [
            "Jobs needing a two-post lift — clutch, gearbox, major exhaust work.",
            "Anything requiring wheel alignment or tyre machines.",
            "Work that cannot be safely finished if weather turns.",
            "Jobs where parking or ground conditions make it unsafe.",
            "Be specific rather than vague — customers respect a clear boundary.",
          ]},
          { type: "callout", title: "Refer the jobs you cannot take", text: "Recommending a workshop for the jobs outside your scope costs nothing and reliably generates referrals back. Mobile mechanics who do this build a network rather than competing with it." },
        ],
      },
      {
        heading: "What site conditions should you state?",
        body: [
          { type: "p", text: "Level, hard standing, enough room to work safely around the vehicle, and legal parking. Street jobs in permit zones or on hills are the ones that go wrong." },
          { type: "p", text: "Ask about conditions at booking rather than discovering them on arrival. A photo of the parking spot in the booking form solves most of it." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish an hourly rate?", answer: "Yes. Your competition is a garage with a posted rate, and customers assume mobile is more expensive unless you show otherwise." },
      { question: "Can customers supply their own parts?", answer: "State a policy either way. Many mobile mechanics do at a lower labour rate but without warranty on the part — say so clearly upfront." },
      { question: "How do we handle bad weather?", answer: "State your policy on the site. Customers accept a rescheduled job far better when the possibility was flagged at booking." },
    ],
    related: ["auto-repair-shop-website", "auto-glass-website", "oil-change-website"],
  },
  {
    slug: "auto-glass-website",
    eyebrow: "Auto glass",
    title: "Auto glass and windshield repair website design",
    seoTitle: "Auto Glass & Windshield Website Design | ROVQIX",
    description:
      "Websites for auto glass businesses — insurance claim handling, mobile service, repair versus replacement, ADAS recalibration and same-day availability.",
    excerpt: "Insurance handling and same-day mobile service — the two things that win the call.",
    primaryKeyword: "auto glass website design",
    secondaryKeywords: ["windshield repair website", "auto glass company website", "mobile windshield replacement website", "car window repair website"],
    answer:
      "An auto glass website from ROVQIX costs $349 to $749 and takes about a week. Priorities are insurance claim handling, mobile service availability, when a chip can be repaired rather than replaced, ADAS recalibration and same-day booking.",
    intro:
      "A cracked windscreen is urgent and usually an insurance job. Whoever answers both questions fastest gets the work.",
    deliverables: [
      { title: "Insurance claim help", description: "Which insurers you work with and whether you handle the claim directly.", icon: "ShieldCheck" },
      { title: "Repair or replace", description: "When a chip can be filled and when the glass must be replaced. Saves the customer money and builds trust.", icon: "Scale" },
      { title: "Mobile service", description: "Whether you come to home or work, and your coverage area.", icon: "Globe" },
      { title: "ADAS recalibration", description: "Modern windscreens carry cameras. Most customers do not know recalibration is required.", icon: "Blocks" },
      { title: "Same-day availability", description: "The deciding factor for a customer who cannot legally drive.", icon: "Zap" },
    ],
    sections: [
      {
        heading: "Why explain ADAS recalibration?",
        answer: "Because most drivers have no idea their windscreen holds safety-system cameras that must be recalibrated after replacement.",
        body: [
          { type: "list", items: [
            "Lane keeping, automatic braking and adaptive cruise often depend on a windscreen-mounted camera.",
            "Replacing the glass without recalibrating can leave those systems misaligned.",
            "Explain whether you recalibrate in-house or sublet it, and whether it is included in the quote.",
            "State which vehicles need it, since customers rarely know if theirs does.",
            "It is a genuine safety issue and a legitimate reason your price differs from the cheapest quote.",
          ]},
          { type: "callout", title: "This is your price justification", text: "A competitor quoting significantly less may not be recalibrating. Explaining what that means turns a price objection into a safety conversation you win." },
        ],
      },
      {
        heading: "How should insurance be handled on the site?",
        body: [
          { type: "p", text: "Say plainly which insurers you are approved with, whether the customer pays an excess, and whether you handle the claim paperwork. For many customers the deciding factor is not having to phone their insurer themselves." },
          { type: "p", text: "Be careful with language around excess. Offering to waive or cover an insurance excess is restricted in many places and is a common compliance mistake in this trade." },
        ],
      },
    ],
    faqs: [
      { question: "Should we quote prices online?", answer: "A repair price yes, since chip repair is standardised. Replacement depends on the vehicle and glass spec, so a quick quote form with registration details works better." },
      { question: "Is mobile service worth advertising heavily?", answer: "Yes. Not being able to drive is the customer's actual problem, and coming to them solves it. It is the strongest thing on the page." },
      { question: "Do we need to mention recalibration?", answer: "Yes, both for safety and to explain your pricing. It also captures a growing search as more vehicles have these systems." },
    ],
    related: ["auto-repair-shop-website", "mobile-mechanic-website", "window-tinting-website"],
  },
  {
    slug: "window-tinting-website",
    eyebrow: "Window tinting",
    title: "Window tinting website design",
    seoTitle: "Window Tinting Website Design | ROVQIX",
    description:
      "Websites for tinting businesses — legal limits by state, film types and warranties, pricing by vehicle, and residential work.",
    excerpt: "Legal limits by state, which is the question behind every enquiry.",
    primaryKeyword: "window tinting website design",
    secondaryKeywords: ["car tinting website", "window film business website", "auto tint shop website", "residential window tinting website"],
    answer:
      "A window tinting website from ROVQIX costs $349 to $749 and takes about a week. It covers legal tint limits in your state, film types and their warranties, pricing by vehicle size and residential or commercial work.",
    intro:
      "Every tinting customer is quietly worried about getting pulled over. Publishing the legal limits answers that before they ask.",
    deliverables: [
      { title: "Legal limits explained", description: "Your state's VLT limits by window, in plain terms. The most-searched question in this trade.", icon: "ShieldCheck" },
      { title: "Film types compared", description: "Dyed, carbon, ceramic — with heat rejection and price difference explained honestly.", icon: "Layers" },
      { title: "Pricing by vehicle", description: "Coupe, sedan, SUV, truck. Predictable enough to publish.", icon: "Receipt" },
      { title: "Warranty terms", description: "Lifetime against bubbling and fading is standard. State yours clearly.", icon: "BadgeCheck" },
      { title: "Residential and commercial", description: "A separate, higher-value path with completely different buying concerns.", icon: "Building2" },
    ],
    sections: [
      {
        heading: "Why publish legal tint limits?",
        answer: "Because it is the single most searched question and almost no shop answers it clearly.",
        body: [
          { type: "list", items: [
            "State the VLT percentage allowed for front side, rear side and rear windows.",
            "Note any medical exemption process if your state has one.",
            "Explain what happens if a vehicle is tinted below the limit.",
            "Be clear that you will not fit illegal tint, which protects you and reassures the customer.",
            "Date the page and note that rules change.",
          ]},
          { type: "callout", title: "Refusing illegal work is a selling point", text: "Saying plainly that you fit to the legal limit separates you from shops that will do anything for cash — and it is the reason careful customers choose you." },
        ],
      },
      {
        heading: "How should film types be compared?",
        body: [
          { type: "p", text: "Honestly, including when the cheap option is fine. A customer wanting privacy on a second car does not need ceramic; one who parks outside in Arizona does." },
          { type: "table", head: ["Film", "Best for", "Trade-off"], rows: [
            ["Dyed", "Privacy and appearance on a budget", "Least heat rejection, can fade"],
            ["Carbon", "Good balance of heat and price", "Mid-range cost"],
            ["Ceramic", "Maximum heat rejection, hot climates", "Highest cost"],
          ]},
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Yes, by vehicle size and film type. It is a comparison-shopped service and publishing gets you the call." },
      { question: "Do we need to mention legal limits?", answer: "It is the highest-value page you can write. It ranks well, it is genuinely useful, and it positions you as the shop that does it properly." },
      { question: "Is residential tinting worth a page?", answer: "Yes if you do it. Higher value, different customer, and concerns about heat and furniture fading rather than appearance." },
    ],
    related: ["auto-glass-website", "auto-detailing-website", "window-replacement-website"],
  },
  {
    slug: "transmission-shop-website",
    eyebrow: "Transmission shops",
    title: "Transmission shop website design",
    seoTitle: "Transmission Shop Website Design | ROVQIX",
    description:
      "Websites for transmission specialists — diagnostic process, rebuild versus replace, warranty terms and financing for a large unexpected bill.",
    excerpt: "Warranty and financing, because this is a bill nobody budgeted for.",
    primaryKeyword: "transmission shop website",
    secondaryKeywords: ["transmission repair website design", "gearbox repair website", "transmission rebuild website", "auto transmission specialist website"],
    answer:
      "A transmission shop website from ROVQIX costs $349 to $1,290 and takes about a week. The priorities are your diagnostic process, rebuild versus replacement options, warranty terms and financing — because this is a large, unplanned expense.",
    intro:
      "A transmission failure is a four-figure bill the customer did not see coming. Warranty and financing matter more here than in any other auto trade.",
    deliverables: [
      { title: "Diagnostic process", description: "What you check and what it costs, so the customer knows before committing.", icon: "Search" },
      { title: "Rebuild vs replace", description: "The options with honest cost and longevity differences for each.", icon: "Scale" },
      { title: "Warranty terms", description: "Months and miles, and what is covered. The main thing customers compare.", icon: "BadgeCheck" },
      { title: "Financing", description: "A four-figure unexpected bill often does not get paid without it.", icon: "CreditCard" },
      { title: "Symptoms guide", description: "Slipping, delayed engagement, warning lights — how people actually search.", icon: "FileText" },
    ],
    sections: [
      {
        heading: "Why does warranty dominate the decision?",
        answer: "Because the customer is spending thousands on a repair they cannot verify was done properly.",
        body: [
          { type: "list", items: [
            "State the warranty in months and miles, plainly, at the top.",
            "Say what is covered — parts, labour, or both — and what voids it.",
            "Note whether the warranty is honoured nationwide, which matters to anyone who travels.",
            "Explain the difference in warranty between a rebuild and a remanufactured unit.",
            "A longer warranty justifies a higher price better than any other argument in this trade.",
          ]},
          { type: "callout", title: "Write a symptoms page", text: "People search 'transmission slipping' and 'car hesitates when shifting', not 'transmission rebuild'. A page describing symptoms and what each usually means captures the customer well before they know what they need." },
        ],
      },
      {
        heading: "How should financing be presented?",
        body: [
          { type: "p", text: "Prominently, and without shame. A $3,000 repair on a car someone needs for work is often only possible with financing, and shops that hide it lose the job to one that mentions it." },
          { type: "p", text: "State the providers you work with and roughly what approval involves. Do not promise approval or quote rates you cannot honour." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Ranges by vehicle type and rebuild versus replacement. Exact pricing needs diagnosis, but a range stops the customer assuming the worst." },
      { question: "How do we compete with the chains?", answer: "On warranty, on the specific technician doing the work, and on explaining the diagnosis. Chains compete on advertising; you compete on being verifiable." },
      { question: "Is a free diagnostic worth offering?", answer: "Many shops offer a free initial scan and charge for teardown. Whatever you do, state it clearly — ambiguity here causes disputes." },
    ],
    related: ["auto-repair-shop-website", "mobile-mechanic-website", "oil-change-website"],
  },
  {
    slug: "oil-change-website",
    eyebrow: "Quick lube",
    title: "Oil change and quick lube website design",
    seoTitle: "Oil Change & Quick Lube Website Design | ROVQIX",
    description:
      "Websites for quick lube shops — pricing by oil type, no-appointment policy, current wait times, coupons and additional services.",
    excerpt: "Price, wait time and whether they need an appointment. Nothing else matters.",
    primaryKeyword: "oil change website design",
    secondaryKeywords: ["quick lube website", "oil change shop website", "lube shop web design", "car maintenance shop website"],
    answer:
      "A quick lube website from ROVQIX costs $349 to $549 and takes about a week. It needs three things above all: pricing by oil type, whether an appointment is required, and current wait times.",
    intro:
      "Nobody researches an oil change. They want to know the price, whether they can just turn up, and how long it takes.",
    deliverables: [
      { title: "Pricing by oil type", description: "Conventional, synthetic blend, full synthetic, with what is included in each.", icon: "Receipt" },
      { title: "No appointment needed", description: "If drive-up works, say it prominently. It is the main advantage over a garage.", icon: "Zap" },
      { title: "Typical wait time", description: "How long it takes, and busiest periods to avoid.", icon: "Clock" },
      { title: "Coupons and offers", description: "Updatable by you. This category is heavily coupon-driven.", icon: "Target" },
      { title: "Additional services", description: "Filters, wipers, fluids — what else you can do while the car is up.", icon: "Blocks" },
    ],
    sections: [
      {
        heading: "What does a quick lube website need to do?",
        answer: "Answer three questions in under five seconds and give directions.",
        body: [
          { type: "list", ordered: true, items: [
            "Price for the oil type their car takes, including what is bundled in.",
            "Whether they can drive up or need to book.",
            "Roughly how long it takes.",
            "Where you are, with one-tap directions.",
            "Opening hours, including weekends, which is when most people go.",
          ]},
          { type: "callout", title: "Keep it to one page", text: "This is the clearest case on the whole site for a single page. Price, wait, hours, directions, coupon. Adding an about page and a blog does nothing for a quick lube." },
        ],
      },
      {
        heading: "Why publish what is included?",
        body: [
          { type: "p", text: "Because customers have been upsold at quick lubes before and are wary. Listing exactly what the price covers — oil, filter, top-ups, inspection — removes that suspicion." },
          { type: "p", text: "If you offer additional services, present them as optional and priced, not as a surprise at the counter. Shops that do this get more of the add-on work, not less." },
        ],
      },
    ],
    faqs: [
      { question: "Do we need more than one page?", answer: "Usually not. Price, hours, wait, directions and a coupon fit comfortably on one page and that is genuinely all this customer needs." },
      { question: "Should we show live wait times?", answer: "If you can maintain it, it is a real differentiator. If not, publish typical waits and busiest hours instead — stale live data is worse than none." },
      { question: "Are coupons worth it?", answer: "This category is heavily price-driven and coupon-led. Make the offer easy to update yourself so it never goes stale." },
    ],
    related: ["auto-repair-shop-website", "car-wash-website", "tire-shop-website"],
  },
];

export const localRepairAutoPages = makeLocalPages(specs);
