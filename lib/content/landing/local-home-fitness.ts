import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/** Fitness specialists, photography niches and remaining home services. */
const specs: LocalSpec[] = [
  {
    slug: "pilates-studio-website",
    eyebrow: "Pilates studios",
    title: "Pilates studio website design",
    seoTitle: "Pilates Studio Website Design | ROVQIX",
    description:
      "Websites for Pilates studios — reformer versus mat explained, class sizes, intro packages, instructor training and booking.",
    excerpt: "Reformer versus mat explained, because newcomers genuinely cannot tell.",
    primaryKeyword: "pilates studio website design",
    secondaryKeywords: ["pilates website design", "reformer pilates website", "clinical pilates website", "pilates instructor website"],
    answer:
      "A Pilates studio website from ROVQIX costs $349 to $1,290 and takes about a week. It explains reformer versus mat in plain terms, states class sizes, prices intro packages, lists instructor qualifications and connects online booking.",
    intro:
      "Newcomers do not know what a reformer is, whether they are fit enough, or why one studio charges three times another. Answer those and you get the trial booking.",
    deliverables: [
      { title: "Reformer vs mat explained", description: "What each involves, what it costs and which suits a beginner.", icon: "FileText" },
      { title: "Class sizes stated", description: "Small-group and private numbers. This is what justifies your price against a gym class.", icon: "Users" },
      { title: "Intro package", description: "The discounted first block, which is the main conversion for a studio.", icon: "Target" },
      { title: "Instructor training", description: "Certifications, and any clinical or rehab qualifications. Genuinely differentiating here.", icon: "BadgeCheck" },
      { title: "Booking with class caps", description: "Live availability, since reformer classes have hard equipment limits.", icon: "CalendarCheck" },
    ],
    sections: [
      {
        heading: "Why explain the equipment?",
        answer: "Because a beginner sees a reformer in a photo and assumes it is not for them.",
        body: [
          { type: "table", head: ["", "Mat", "Reformer"], rows: [
            ["Equipment", "Mat and small props", "Spring-resistance carriage"],
            ["Typical class size", "Larger", "Limited by machines"],
            ["Price", "Lower", "Higher"],
            ["Good for a beginner", "Yes", "Yes, with an intro session"],
            ["Best for rehab", "Sometimes", "Often, with a trained instructor"],
          ]},
          { type: "callout", title: "Say that beginners are welcome on the reformer", text: "Most people assume reformer is advanced. It usually is not, with an intro session — and saying so unlocks your higher-priced classes to an audience that had ruled them out." },
        ],
      },
      {
        heading: "How should class size be used?",
        body: [
          { type: "p", text: "It is your main argument against a cheap gym class. Six people with a trained instructor is a different product from thirty in a studio, and stating the number makes that concrete rather than a vague claim about quality." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish class prices?", answer: "Yes, with the intro offer prominent. Pilates is expensive relative to gym classes and hiding the price makes people assume worse." },
      { question: "Do we need an intro package?", answer: "It is the standard conversion mechanism in this category. A discounted first block gets people through a barrier that a single class price does not." },
      { question: "Should we mention rehab work?", answer: "If your instructors are qualified for it, absolutely. Clinical and post-injury Pilates is a distinct, high-intent search with far less competition." },
    ],
    related: ["yoga-studio-website", "physical-therapy-website", "gym-and-fitness-studio-website"],
  },
  {
    slug: "boxing-gym-website",
    eyebrow: "Boxing gyms",
    title: "Boxing gym website design",
    seoTitle: "Boxing Gym Website Design | ROVQIX",
    description:
      "Websites for boxing and combat gyms — beginner classes, what to bring, membership pricing, coaching credentials and sparring policy.",
    excerpt: "A beginner path, because the intimidation factor is the whole barrier.",
    primaryKeyword: "boxing gym website design",
    secondaryKeywords: ["boxing club website", "mma gym website design", "kickboxing gym website", "combat sports gym website"],
    answer:
      "A boxing gym website from ROVQIX costs $349 to $1,290 and takes about a week. The priorities are a genuine beginner path, what to bring to a first session, membership pricing, coaching credentials and a clear sparring policy.",
    intro:
      "More people want to try boxing than ever walk through the door. Almost all of them are worried they will be thrown in with someone who can fight.",
    deliverables: [
      { title: "Beginner classes", description: "Explicitly beginner sessions, not 'all levels'. The distinction matters enormously here.", icon: "Target" },
      { title: "Sparring policy", description: "Whether it is optional and when it starts. The single biggest fear stopping newcomers.", icon: "ShieldCheck" },
      { title: "What to bring", description: "Gloves, wraps, clothing — and what the gym provides for a first session.", icon: "ClipboardList" },
      { title: "Coaching credentials", description: "Records and coaching qualifications, which carry weight in this sport.", icon: "BadgeCheck" },
      { title: "Membership pricing", description: "Monthly options with what is included, plus any class-only rates.", icon: "Receipt" },
    ],
    sections: [
      {
        heading: "Address the sparring fear directly",
        answer: "State plainly whether sparring is optional and when, if ever, a beginner would do it.",
        body: [
          { type: "list", items: [
            "Say clearly that beginners do not spar on day one, if that is your policy.",
            "Explain how long before someone might, and that it is by choice.",
            "Note that many members never spar and train purely for fitness.",
            "Describe supervision and protective equipment requirements.",
            "This one paragraph converts more beginners than any facility photo.",
          ]},
          { type: "callout", title: "'Fitness only' is a real audience", text: "A large share of boxing gym members have no interest in fighting anyone. Saying so explicitly opens the gym to people who assumed it was not for them." },
        ],
      },
      {
        heading: "What does a first-timer need to know?",
        body: [
          { type: "p", text: "Whether they need their own gloves, what to wear, how fit they need to be, whether they can come alone, and what the first hour actually involves. Every one of those is a reason someone does not turn up." },
        ],
      },
    ],
    faqs: [
      { question: "Should we say beginners do not have to spar?", answer: "Yes, prominently. It is the number one thing stopping people, and most gyms never mention it." },
      { question: "Do we need a free trial?", answer: "A free or low-cost first class is standard and effective in this category. The barrier is psychological, not financial." },
      { question: "Should we show coach records?", answer: "If they have them, yes. Fight records and coaching credentials carry real weight with anyone comparing gyms." },
    ],
    related: ["gym-and-fitness-studio-website", "martial-arts-school-website", "climbing-gym-website"],
  },
  {
    slug: "golf-instructor-website",
    eyebrow: "Golf coaching",
    title: "Golf instructor website design",
    seoTitle: "Golf Instructor Website Design | ROVQIX",
    description:
      "Websites for golf coaches — lesson packages, video and launch monitor analysis, credentials, where you teach and booking.",
    excerpt: "Packages and technology, which is how golfers compare coaches.",
    primaryKeyword: "golf instructor website",
    secondaryKeywords: ["golf coach website design", "golf lessons website", "golf academy website", "pga instructor website"],
    answer:
      "A golf instructor website from ROVQIX costs $349 to $1,290 and takes about a week. It covers lesson packages, video and launch monitor analysis, your credentials, where you teach and online booking.",
    intro:
      "Golfers researching a coach compare two things: qualifications and the technology you use. Both need to be on the page.",
    deliverables: [
      { title: "Lesson packages", description: "Single, block and season-long, priced. Blocks are where the real revenue is.", icon: "Receipt" },
      { title: "Technology used", description: "Launch monitor, video analysis, pressure plates. Golfers actively compare on this.", icon: "Blocks" },
      { title: "Credentials", description: "PGA or equivalent qualification, plus any playing record.", icon: "BadgeCheck" },
      { title: "Where you teach", description: "Course, range or indoor studio, and whether you travel.", icon: "Globe" },
      { title: "Who you coach", description: "Beginners, juniors, low handicappers. Coaches who specialise attract better-matched clients.", icon: "Users" },
    ],
    sections: [
      {
        heading: "Why does technology sell golf lessons?",
        answer: "Because golfers are unusually data-driven and expect measurable feedback.",
        body: [
          { type: "list", items: [
            "Name the launch monitor you use — golfers know the brands and it matters to them.",
            "Explain what the data actually tells them, in terms of their own game.",
            "Say whether they get video and data to take away, which is a strong differentiator.",
            "Mention indoor facilities if you have them, since that means year-round coaching.",
            "Show a sample of what a lesson report looks like.",
          ]},
          { type: "callout", title: "Sell blocks, not single lessons", text: "One lesson rarely changes a golfer's game, and they know it. Package pricing sets the right expectation and roughly triples the value of each new client." },
        ],
      },
      {
        heading: "Why specialise?",
        body: [
          { type: "p", text: "A coach who names their ideal student — nervous beginners, juniors, or single-figure handicappers wanting to compete — attracts far better-matched clients than one who says 'all abilities welcome'." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish lesson prices?", answer: "Yes, with block packages prominent. Golfers compare coaches on price and technology, and hiding either loses the enquiry." },
      { question: "Is video analysis worth mentioning?", answer: "Yes. It is close to expected now, and a coach who does not mention it is assumed not to offer it." },
      { question: "Do we need online booking?", answer: "It helps considerably, since lesson slots are weather and daylight dependent and phone tag wastes both sides' time." },
    ],
    related: ["personal-trainer-website", "sports-coaching-website", "gym-and-fitness-studio-website"],
  },
  {
    slug: "sports-coaching-website",
    eyebrow: "Sports coaching",
    title: "Youth sports coaching website design",
    seoTitle: "Youth Sports Coaching Website Design | ROVQIX",
    description:
      "Websites for youth sports programmes — season registration, age groups, coach background checks, schedules and parent communication.",
    excerpt: "Registration and background checks — the two things parents need before signing up.",
    primaryKeyword: "youth sports coaching website",
    secondaryKeywords: ["sports academy website design", "youth soccer club website", "sports training website", "kids sports programme website"],
    answer:
      "A youth sports coaching website from ROVQIX costs $349 to $1,290 and takes about a week. Season registration, age group structure, coach background checks, schedules and parent communication are the essentials.",
    intro:
      "Parents choosing a youth programme are checking two things: is my child in the right group, and is this coach safe to leave them with.",
    deliverables: [
      { title: "Age group structure", description: "Which group a child belongs in by age and ability, clearly laid out.", icon: "Network" },
      { title: "Background checks", description: "Coach screening and safeguarding. The first thing careful parents look for.", icon: "ShieldCheck" },
      { title: "Season registration", description: "Online signup with season dates, fees and what is included.", icon: "CalendarCheck" },
      { title: "Schedules", description: "Training times and fixtures, kept current so parents can plan.", icon: "Clock" },
      { title: "Parent communication", description: "How you notify about cancellations, which is the most common parent frustration.", icon: "MessageSquare" },
    ],
    sections: [
      {
        heading: "What do parents check first?",
        answer: "Coach screening, group placement and cost — in that order.",
        body: [
          { type: "list", items: [
            "State that coaches are background-checked, and what that involves.",
            "Name safeguarding qualifications and your policies.",
            "Explain coach-to-player ratios by age group.",
            "Show the full season cost including kit, so there are no surprises.",
            "Be clear about what happens in bad weather and how they will be told.",
          ]},
          { type: "callout", title: "Weather cancellations are the number one complaint", text: "Parents driving to a cancelled session is the most common source of frustration in youth sport. Say exactly how you notify — text, app, website — and stick to it." },
        ],
      },
      {
        heading: "How should registration work?",
        body: [
          { type: "p", text: "Online, with season dates, fees and payment. Paper forms and cash on the first session belong to a different era and lose registrations from organised parents." },
          { type: "p", text: "Collect medical and emergency contact information at registration rather than on the touchline, and offer instalment payments if your season fee is substantial." },
        ],
      },
    ],
    faqs: [
      { question: "Should we mention background checks?", answer: "Yes, prominently. It is the first thing safety-conscious parents look for and most programme websites never state it." },
      { question: "Do we need online registration?", answer: "Yes. It captures parents at the moment they decide, and collects the medical and contact information you need anyway." },
      { question: "How should we handle cancellations?", answer: "Pick one channel, state it clearly on the site, and use it consistently. Inconsistent notification is the top parent complaint in youth sport." },
    ],
    related: ["swim-school-website", "martial-arts-school-website", "summer-camp-website"],
  },
  {
    slug: "summer-camp-website",
    eyebrow: "Summer camps",
    title: "Summer camp website design",
    seoTitle: "Summer Camp Website Design | ROVQIX",
    description:
      "Websites for summer camps — session dates and availability, daily schedule, ratios and staff screening, pricing and registration.",
    excerpt: "Sessions, ratios and a real daily schedule. Parents book on all three.",
    primaryKeyword: "summer camp website design",
    secondaryKeywords: ["day camp website", "kids camp website design", "holiday camp website", "summer program website"],
    answer:
      "A summer camp website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers session dates with live availability, the daily schedule, staff ratios and screening, pricing including extras, and online registration.",
    intro:
      "Camp registration is compressed into a few weeks in early spring. Everything about the site should serve a parent deciding quickly.",
    deliverables: [
      { title: "Sessions and availability", description: "Dates with remaining places, since popular weeks sell out and parents plan around them.", icon: "CalendarCheck" },
      { title: "A real daily schedule", description: "Hour by hour. Parents want to know what their child actually does all day.", icon: "Clock" },
      { title: "Ratios and screening", description: "Staff-to-camper numbers and background checks. The safety question underneath everything.", icon: "ShieldCheck" },
      { title: "All-in pricing", description: "Session fee plus extended care, meals, trips. Hidden extras cause real resentment.", icon: "Receipt" },
      { title: "Online registration", description: "With medical forms, emergency contacts and payment or deposit.", icon: "ClipboardList" },
    ],
    sections: [
      {
        heading: "Why publish a real daily schedule?",
        answer: "Because 'a fun-filled day of activities' tells a parent nothing about whether their child will be happy.",
        body: [
          { type: "list", items: [
            "Show drop-off and pickup times, including extended care windows.",
            "Give an hour-by-hour outline of a typical day.",
            "Say what happens at lunch — provided, or packed from home.",
            "Explain rest and quiet periods for younger groups.",
            "Note what happens in bad weather, since outdoor camps live and die on it.",
          ]},
          { type: "callout", title: "Parents are picturing their specific child", text: "A shy eight-year-old's parent wants to know there is a quiet option. A high-energy child's parent wants to know they will be tired by pickup. A real schedule lets both self-select." },
        ],
      },
      {
        heading: "How should pricing be handled?",
        body: [
          { type: "p", text: "All-in, with extras itemised separately and clearly. Camps that advertise a session fee and then add extended care, meals, trips and a t-shirt generate genuine anger at the invoice." },
          { type: "p", text: "Sibling discounts, early-bird rates and payment plans are all worth stating — they materially affect whether a family with three children can book at all." },
        ],
      },
    ],
    faqs: [
      { question: "When should registration open?", answer: "Early in the year — many parents plan childcare months ahead, and popular weeks fill long before summer." },
      { question: "Should we show remaining places?", answer: "Yes. It creates genuine urgency and prevents the disappointment of a parent completing a form for a full week." },
      { question: "How much detail about staff?", answer: "Ratios, screening and qualifications at minimum. Named staff with photos helps considerably for returning families." },
    ],
    related: ["daycare-website", "sports-coaching-website", "swim-school-website"],
  },
  {
    slug: "wedding-photographer-website",
    eyebrow: "Wedding photography",
    title: "Wedding photographer website design",
    seoTitle: "Wedding Photographer Website Design | ROVQIX",
    description:
      "Websites for wedding photographers — full galleries, package pricing, date availability, delivery timelines and booking with deposit.",
    excerpt: "Full weddings, not highlight reels. Couples judge consistency, not your best five shots.",
    primaryKeyword: "wedding photographer website",
    secondaryKeywords: ["wedding photography website design", "wedding photographer portfolio site", "bridal photographer website", "wedding photo website"],
    answer:
      "A wedding photographer website from ROVQIX costs $749 to $1,290 and takes one to two weeks. The essentials are full wedding galleries rather than highlight selections, package pricing, date availability, delivery timelines and booking with a deposit.",
    intro:
      "Couples do not book from your ten best photographs. They book from one complete wedding that looks consistently good from start to finish.",
    deliverables: [
      { title: "Complete wedding galleries", description: "Two or three full weddings, not a highlight reel. Consistency is what couples assess.", icon: "Images" },
      { title: "Package pricing", description: "Hours, second shooter, album, delivery. Couples budget and compare on this.", icon: "Receipt" },
      { title: "Date availability", description: "Even a booked-dates list saves enormous back and forth in peak season.", icon: "CalendarCheck" },
      { title: "Delivery timelines", description: "How long until previews and the full gallery. A very common source of complaints.", icon: "Clock" },
      { title: "Booking and deposit", description: "Contract and deposit to hold the date, which is standard and expected.", icon: "CreditCard" },
    ],
    sections: [
      {
        heading: "Why show complete weddings?",
        answer: "Because a curated highlight reel proves you can take ten good photographs, not that you can cover a whole day.",
        body: [
          { type: "list", items: [
            "Show two or three full weddings from preparation through to the evening.",
            "Include the hard parts — dim receptions, harsh midday sun, cramped rooms.",
            "Show a range of venue types so couples can see their own.",
            "Consistency across a full day is the actual skill being assessed.",
            "A single full gallery is worth more than fifty portfolio images.",
          ]},
          { type: "callout", title: "Show a difficult wedding", text: "Any photographer looks good at golden hour in a garden. Showing a wet November wedding in a dark room proves competence far more convincingly, and reassures couples marrying in winter." },
        ],
      },
      {
        heading: "Why publish pricing?",
        body: [
          { type: "p", text: "Couples have a budget and are comparing several photographers. Those who publish get shortlisted; those who require an enquiry to learn anything get skipped. A starting price alone is enough." },
          { type: "p", text: "Be clear what a package includes — hours of coverage, second shooter, engagement session, album, number of edited images and usage rights. Those are where quotes actually differ." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish full prices?", answer: "A starting price at minimum, ideally package tiers. Couples budget first and photographers who hide pricing are excluded before the conversation starts." },
      { question: "How many galleries should we show?", answer: "Two or three complete weddings beats a large portfolio of single images. Depth demonstrates consistency; breadth does not." },
      { question: "Should we show booked dates?", answer: "Yes. It saves enquiries for dates you cannot take and creates real urgency for popular Saturdays that remain open." },
    ],
    related: ["photographer-website", "videographer-website", "wedding-venue-website"],
  },
  {
    slug: "real-estate-photographer-website",
    eyebrow: "Property photography",
    title: "Real estate photographer website design",
    seoTitle: "Real Estate Photographer Website Design | ROVQIX",
    description:
      "Websites for property photographers — turnaround times, package pricing, agent accounts, floor plans and drone work.",
    excerpt: "Turnaround time above everything. Agents book on speed, not artistry.",
    primaryKeyword: "real estate photographer website",
    secondaryKeywords: ["property photography website", "real estate photo website design", "listing photography website", "architectural photographer website"],
    answer:
      "A real estate photographer website from ROVQIX costs $349 to $1,290 and takes about a week. Turnaround time is the headline, alongside package pricing by property size, agent accounts, floor plans, virtual tours and drone work.",
    intro:
      "This is a B2B service with a deadline. An agent with a listing going live Friday cares about turnaround before they care about your portfolio.",
    deliverables: [
      { title: "Turnaround time", description: "Next-day delivery is the industry expectation. State yours at the top.", icon: "Clock" },
      { title: "Package pricing", description: "By property size and bedroom count, with add-ons priced separately.", icon: "Receipt" },
      { title: "Agent accounts", description: "Repeat booking, consolidated invoicing and volume rates for regular agents.", icon: "Building2" },
      { title: "Add-on services", description: "Floor plans, drone, virtual tours, twilight shots, video. Where the margin is.", icon: "Blocks" },
      { title: "Online booking", description: "Agents book between viewings on a phone. Friction loses the job.", icon: "CalendarCheck" },
    ],
    sections: [
      {
        heading: "Why does turnaround beat portfolio quality?",
        answer: "Because an agent's listing goes live on a fixed date and late photos cost them a week of exposure.",
        body: [
          { type: "list", items: [
            "State delivery time in hours, not vaguely as 'fast'.",
            "Say whether next-day and same-day are available and what they cost.",
            "Explain how images are delivered — gallery link, MLS-ready sizing, branded and unbranded.",
            "Confirm bookings immediately, since agents are scheduling around a seller.",
            "Reliability wins repeat agents more reliably than artistry does.",
          ]},
          { type: "callout", title: "One agent is worth fifty homeowners", text: "A single agent doing three listings a month is thirty-six shoots a year. The whole site should be written for them, not for a homeowner who will use you once." },
        ],
      },
      {
        heading: "How should add-ons be presented?",
        body: [
          { type: "p", text: "As a clear price list agents can quote from when talking to a seller. Floor plans, drone, twilight and video are where the margin is, and agents will upsell them for you if the pricing is easy to reference." },
          { type: "p", text: "Note drone licensing if you have it. Agents need to know the work is legal and insured, and many photographers offering drone work are neither." },
        ],
      },
    ],
    faqs: [
      { question: "Should we set up agent accounts?", answer: "Yes. Repeat agents are the entire business. Volume pricing, saved details and monthly invoicing make you the default choice." },
      { question: "Is drone work worth adding?", answer: "Yes for larger properties and land, but only with proper licensing and insurance. Say so on the site — agents check." },
      { question: "Should we publish prices?", answer: "Yes, by property size. Agents need to quote sellers quickly and will use whichever photographer's price list they can reference fastest." },
    ],
    related: ["photographer-website", "drone-photography-website", "real-estate-agent-website"],
  },
  {
    slug: "drone-photography-website",
    eyebrow: "Drone services",
    title: "Drone photography and survey website design",
    seoTitle: "Drone Photography Website Design | ROVQIX",
    description:
      "Websites for drone operators — licensing and insurance, use cases by industry, deliverables, airspace limits and pricing.",
    excerpt: "Licence and insurance first. Commercial clients check before anything else.",
    primaryKeyword: "drone photography website",
    secondaryKeywords: ["drone services website design", "aerial photography website", "drone survey website", "uav operator website"],
    answer:
      "A drone photography website from ROVQIX costs $349 to $1,290 and takes about a week. Licensing and insurance come first, followed by use cases by industry, deliverables, airspace restrictions and pricing.",
    intro:
      "Commercial clients cannot legally hire an unlicensed operator. Your certification is not a credential to mention in passing — it is the first thing on the page.",
    deliverables: [
      { title: "Licence and insurance", description: "Your certification number and liability cover. Commercial clients verify both.", icon: "BadgeCheck" },
      { title: "Use cases by industry", description: "Real estate, construction progress, inspection, events, mapping. Different buyers entirely.", icon: "Network" },
      { title: "Deliverables", description: "Stills, video, orthomosaics, 3D models — with formats and resolution.", icon: "FileText" },
      { title: "Airspace limitations", description: "Controlled airspace and how authorisation works. Manages expectations honestly.", icon: "ShieldCheck" },
      { title: "Pricing", description: "Per shoot or per package by use case, since a listing shoot and a site survey differ hugely.", icon: "Receipt" },
    ],
    sections: [
      {
        heading: "Why does licensing lead the page?",
        answer: "Because hiring an uncertified operator exposes a commercial client to real liability.",
        body: [
          { type: "list", items: [
            "State your certification and its number.",
            "Show liability insurance and the cover amount, since many clients require a minimum.",
            "Explain that you handle airspace authorisation where needed.",
            "Note any additional permissions — night operations, operations over people.",
            "A construction or insurance client will ask for all of this before booking anyway.",
          ]},
          { type: "callout", title: "This is what separates you from a hobbyist", text: "Plenty of people own a drone. Very few are licensed and insured for commercial work. Leading with that immediately puts you in a different category and justifies professional pricing." },
        ],
      },
      {
        heading: "Why split by industry?",
        body: [
          { type: "p", text: "A real estate agent, a construction project manager and a roofing inspector want completely different things. Same equipment, entirely different deliverables, pricing and buying process." },
          { type: "p", text: "Separate pages let each buyer see work that looks like their own project, and lets you price a progress-monitoring contract differently from a one-off listing shoot." },
        ],
      },
    ],
    faqs: [
      { question: "Should we state our licence number?", answer: "Yes. Commercial clients verify it, and displaying it separates you immediately from uninsured hobbyists." },
      { question: "How do we handle restricted airspace?", answer: "Explain that authorisation is often possible but takes lead time. Setting that expectation upfront prevents disappointment on urgent jobs." },
      { question: "Should industries have separate pages?", answer: "Yes for the ones you actively want. A construction progress client and a wedding client have nothing in common as buyers." },
    ],
    related: ["real-estate-photographer-website", "photographer-website", "videographer-website"],
  },
  {
    slug: "carpet-cleaning-website",
    eyebrow: "Carpet cleaning",
    title: "Carpet cleaning website design",
    seoTitle: "Carpet Cleaning Website Design | ROVQIX",
    description:
      "Websites for carpet cleaners — pricing by room, drying times, cleaning method, pet and stain specialisms and instant quotes.",
    excerpt: "Price by room and drying time. Both are what customers ring to ask.",
    primaryKeyword: "carpet cleaning website design",
    secondaryKeywords: ["carpet cleaner website", "upholstery cleaning website", "rug cleaning website design", "steam cleaning business website"],
    answer:
      "A carpet cleaning website from ROVQIX costs $349 to $749 and takes about a week. It covers pricing by room count, drying times, your cleaning method, pet and stain specialisms and an instant quote.",
    intro:
      "Carpet cleaning prices predictably by room, which means you can quote online — something most competitors still refuse to do.",
    deliverables: [
      { title: "Price by room", description: "Per room or per area with minimums. Predictable enough to publish and quote instantly.", icon: "Receipt" },
      { title: "Drying times", description: "How long before furniture goes back. The most-asked question after price.", icon: "Clock" },
      { title: "Method explained", description: "Hot water extraction, low moisture, dry cleaning — and which suits which carpet.", icon: "Blocks" },
      { title: "Pet and stain work", description: "Odour treatment and specific stains, which are high-intent searches with real urgency.", icon: "Target" },
      { title: "Instant quote", description: "Rooms in, price out, booking taken. Most competitors still require a phone call.", icon: "Zap" },
    ],
    sections: [
      {
        heading: "Why does drying time matter so much?",
        answer: "Because the customer is planning around a room being out of use.",
        body: [
          { type: "list", items: [
            "State realistic drying times for your method, not best-case.",
            "Explain what affects it — humidity, airflow, carpet type.",
            "Say whether furniture is moved and when it can go back.",
            "If you use a low-moisture method, that is a genuine selling point worth explaining.",
            "Being honest here prevents the most common complaint in the trade.",
          ]},
          { type: "callout", title: "Low moisture is a real differentiator", text: "A customer who needs the room back same-day will choose a two-hour dry time over a twelve-hour one every time. If that is your method, it should be prominent rather than buried in a technical explanation." },
        ],
      },
      {
        heading: "Why do pet pages convert so well?",
        body: [
          { type: "p", text: "Someone searching 'pet urine carpet cleaning' has an urgent, specific, embarrassing problem and is ready to book now. It is a far higher-intent search than 'carpet cleaning'." },
          { type: "p", text: "Explain the difference between surface cleaning and treating the underlay, be honest about what can and cannot be saved, and price it separately since it is genuinely more work." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Yes, by room count with a minimum. It is a comparison-shopped service and publishing gets you the call." },
      { question: "Can we quote online?", answer: "Yes for standard residential work. Add a note that heavily soiled carpets may be confirmed on arrival, which protects you." },
      { question: "Is pet odour work worth a page?", answer: "Absolutely. It is urgent, specific, higher-value and much less competitive than the general term." },
    ],
    related: ["cleaning-service-website", "upholstery-shop-website", "water-damage-restoration-website"],
  },
  {
    slug: "water-damage-restoration-website",
    eyebrow: "Restoration",
    title: "Water damage restoration website design",
    seoTitle: "Water Damage Restoration Website Design | ROVQIX",
    description:
      "Websites for restoration companies — 24/7 emergency response, insurance claim handling, certifications and the drying process explained.",
    excerpt: "One-tap emergency calling and insurance handling. Nothing else gets read.",
    primaryKeyword: "water damage restoration website",
    secondaryKeywords: ["flood restoration website design", "water damage company website", "emergency restoration website", "mold remediation website"],
    answer:
      "A water damage restoration website from ROVQIX costs $349 to $1,290 and takes about a week. Emergency contact comes first, then insurance claim handling, certifications, response times and an explanation of the drying process.",
    intro:
      "Someone standing in two inches of water is not reading your about page. Everything below the phone number is for the insurance adjuster.",
    deliverables: [
      { title: "24/7 emergency call", description: "Fixed to the screen, answered by a human. This is the entire top of the page.", icon: "Phone" },
      { title: "Response time", description: "How fast you arrive. The deciding factor when every hour increases the damage.", icon: "Zap" },
      { title: "Insurance handling", description: "Whether you bill the insurer directly and work with adjusters. A huge relief to the customer.", icon: "ShieldCheck" },
      { title: "Certifications", description: "IICRC or equivalent. Insurers and adjusters check, and it justifies your invoice.", icon: "BadgeCheck" },
      { title: "The process explained", description: "Extraction, drying, monitoring, restoration — with realistic timelines.", icon: "Network" },
    ],
    sections: [
      {
        heading: "What does an emergency visitor need?",
        answer: "A number that gets answered, confirmation you cover them, and confirmation you can come now.",
        body: [
          { type: "list", ordered: true, items: [
            "Tap-to-call fixed to the screen, above everything.",
            "'24/7 emergency response' stated as fact, and answered as such.",
            "Service area, so they know instantly whether to keep looking.",
            "Response time — 'on site within 60 minutes' if true.",
            "A short list of what to do right now while waiting, which is genuinely helpful.",
            "Certification, which reassures in about a second.",
          ]},
          { type: "callout", title: "Answer the phone", text: "This trade is won on the phone being picked up at 2am. A site advertising 24/7 response that goes to voicemail generates worse reviews than one that states honest business hours." },
        ],
      },
      {
        heading: "Why does insurance handling matter?",
        body: [
          { type: "p", text: "The customer is dealing with damage and a claim simultaneously, and is out of their depth on both. A company that says plainly it works directly with insurers and handles the documentation removes half the stress." },
          { type: "p", text: "Explain what you document, how the adjuster process works and whether they pay you or the insurer does. Be careful with language around deductibles — offering to cover one is restricted in many places." },
        ],
      },
    ],
    faqs: [
      { question: "Should we advertise 24/7 if we cannot always answer?", answer: "No. State your real availability. A missed emergency call generates a far worse review than honest hours ever would." },
      { question: "Do we need to explain the drying process?", answer: "Yes. Customers are surprised that equipment stays for days. Explaining it upfront prevents the most common complaint in restoration." },
      { question: "How do we handle insurance?", answer: "Say plainly whether you bill insurers directly and work with adjusters. It is often the deciding factor between you and a competitor." },
    ],
    related: ["carpet-cleaning-website", "plumber-website", "general-contractor-website"],
  },
  {
    slug: "tree-service-website",
    eyebrow: "Tree services",
    title: "Tree service website design",
    seoTitle: "Tree Service Website Design | ROVQIX",
    description:
      "Websites for tree surgeons — insurance and certification, emergency storm response, services, pricing guidance and permit rules.",
    excerpt: "Insurance and certification. Nothing costs a homeowner more than an uninsured tree crew.",
    primaryKeyword: "tree service website design",
    secondaryKeywords: ["tree surgeon website", "arborist website design", "tree removal website", "stump grinding website"],
    answer:
      "A tree service website from ROVQIX costs $349 to $1,290 and takes about a week. Insurance and certification lead, followed by emergency storm response, your services, pricing guidance and local permit rules.",
    intro:
      "An uninsured crew dropping a limb through a roof is the homeowner's liability. Proving cover is the single most important thing on the page.",
    deliverables: [
      { title: "Insurance proof", description: "Liability and workers' comp with cover amounts. Homeowners are explicitly advised to check.", icon: "ShieldCheck" },
      { title: "Certification", description: "Certified arborist credentials, which separate you from a crew with a chainsaw.", icon: "BadgeCheck" },
      { title: "Emergency storm response", description: "Availability after storms, when demand spikes and speed decides the job.", icon: "Zap" },
      { title: "Services", description: "Removal, pruning, stump grinding, emergency, health assessment. Distinct searches.", icon: "Network" },
      { title: "Permit guidance", description: "Whether local rules protect certain trees. Homeowners rarely know and it matters legally.", icon: "FileText" },
    ],
    sections: [
      {
        heading: "Why does insurance dominate this trade?",
        answer: "Because if an uninsured crew damages the house or injures someone, the homeowner can be liable.",
        body: [
          { type: "list", items: [
            "State liability cover amount and that you carry workers' compensation.",
            "Offer to provide certificates on request, and say so.",
            "Explain plainly what the homeowner risks with an uninsured crew.",
            "Name your certification body and credentials.",
            "This is the whole argument against the cheapest quote in the area.",
          ]},
          { type: "callout", title: "Explain the risk, do not just claim insurance", text: "'We are fully insured' is on every tree website. Explaining what happens if an uninsured crew drops a limb through a conservatory is what makes a homeowner actually check the other quotes." },
        ],
      },
      {
        heading: "Why cover permits and protected trees?",
        body: [
          { type: "p", text: "Many areas protect certain trees, and removing one without permission carries substantial fines. Homeowners almost never know this, and the contractor who warns them is immediately more credible than the one who does not." },
          { type: "p", text: "It is also a strong local search — people specifically look up whether they need permission before they call anyone." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Ranges by job type help. Tree work varies enormously with size and access, but a starting figure stops homeowners assuming the worst." },
      { question: "Is storm response worth advertising?", answer: "Yes. Demand spikes hugely after storms and customers call whoever answers. Just be honest about your real availability." },
      { question: "Should we mention permits?", answer: "Yes. It is a high-intent local search, genuinely useful, and it positions you as the professional rather than the cheapest crew." },
    ],
    related: ["landscaping-company-website", "general-contractor-website", "snow-removal-website"],
  },
  {
    slug: "deck-builder-website",
    eyebrow: "Deck builders",
    title: "Deck builder website design",
    seoTitle: "Deck Builder Website Design | ROVQIX",
    description:
      "Websites for deck builders — project galleries, material comparison, pricing per square foot, permits and seasonal booking.",
    excerpt: "Material comparison and per-square-foot pricing, which is how homeowners budget.",
    primaryKeyword: "deck builder website design",
    secondaryKeywords: ["deck building company website", "patio builder website", "composite decking website", "deck contractor website"],
    answer:
      "A deck builder website from ROVQIX costs $349 to $1,290 and takes about a week. It covers project galleries, honest material comparison, per-square-foot pricing, permit requirements and seasonal booking.",
    intro:
      "Homeowners planning a deck are choosing a material before they choose a builder. Being the site that explains the choice wins the enquiry.",
    deliverables: [
      { title: "Project gallery", description: "Completed decks across sizes and materials, so homeowners see their own project.", icon: "Images" },
      { title: "Material comparison", description: "Pressure-treated, cedar, composite — cost, lifespan and maintenance, honestly.", icon: "Layers" },
      { title: "Per-square-foot pricing", description: "Ranges by material installed. The unit homeowners budget in.", icon: "Receipt" },
      { title: "Permits and codes", description: "Whether a permit is needed locally, plus railing and footing requirements.", icon: "FileText" },
      { title: "Seasonal booking", description: "Lead times, since everyone wants a deck in May and books in April.", icon: "CalendarCheck" },
    ],
    sections: [
      {
        heading: "Compare materials honestly",
        answer: "Including the cases where the cheaper option is genuinely the right one.",
        body: [
          { type: "table", head: ["Material", "Upfront", "Lifespan", "Maintenance"], rows: [
            ["Pressure-treated", "Lowest", "10–15 years", "Annual sealing"],
            ["Cedar", "Middle", "15–20 years", "Regular sealing"],
            ["Composite", "Highest", "25+ years", "Wash only"],
          ]},
          { type: "callout", title: "Saying 'pressure-treated is fine' builds trust", text: "A homeowner planning to move in five years does not need composite. Telling them that costs one upsell and earns the referral — and they still hire you for the build." },
        ],
      },
      {
        heading: "Why cover permits?",
        body: [
          { type: "p", text: "Most decks over a certain height need a permit, and homeowners rarely know. An unpermitted deck causes real problems at resale, and the builder who raises it looks like the professional." },
          { type: "p", text: "Say whether you handle the permit application or the homeowner does, since that is a genuine service difference between contractors." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish per-square-foot pricing?", answer: "Yes, as ranges by material. Homeowners have no reference point and will assume the worst without one." },
      { question: "How do we handle seasonal demand?", answer: "Publish lead times honestly and take bookings early. Homeowners planning a summer deck in March are your best customers." },
      { question: "Should we push composite?", answer: "Only where it genuinely fits. Recommending pressure-treated to someone moving soon earns more long-term work than an upsell they later resent." },
    ],
    related: ["fencing-contractor-website", "general-contractor-website", "landscaping-company-website"],
  },
  {
    slug: "window-replacement-website",
    eyebrow: "Windows",
    title: "Window replacement website design",
    seoTitle: "Window Replacement Website Design | ROVQIX",
    description:
      "Websites for window companies — energy efficiency ratings, pricing per window, financing, warranty and installation process.",
    excerpt: "Per-window pricing and financing, because this is a five-figure decision.",
    primaryKeyword: "window replacement website",
    secondaryKeywords: ["window company website design", "replacement windows website", "double glazing website", "window installer website"],
    answer:
      "A window replacement website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers energy efficiency ratings, per-window pricing, financing, warranty terms and the installation process.",
    intro:
      "Whole-house window replacement is a five-figure decision made under sales pressure from national companies. Transparent pricing is how an independent competes.",
    deliverables: [
      { title: "Per-window pricing", description: "Ranges by size and type, installed. Almost no competitor publishes this.", icon: "Receipt" },
      { title: "Energy ratings explained", description: "U-value and solar gain in terms of actual bills, not just numbers.", icon: "Gauge" },
      { title: "Financing", description: "A whole-house job often only happens with finance. Say so plainly.", icon: "CreditCard" },
      { title: "Warranty", description: "Glass, frame and installation warranties stated separately, since they differ.", icon: "BadgeCheck" },
      { title: "Installation process", description: "Days on site, disruption, and whether the house stays liveable.", icon: "Network" },
    ],
    sections: [
      {
        heading: "How does an independent compete with the national chains?",
        answer: "By publishing prices and not using pressure tactics — both of which the big players avoid.",
        body: [
          { type: "list", items: [
            "Publish per-window price ranges. The nationals require an in-home appointment before quoting.",
            "Do not use countdown offers or 'today only' pricing. This audience has been burned by it.",
            "Explain the quote process and how long it takes, with no obligation.",
            "Show the products you fit and who makes them.",
            "Say how long the visit will be, since everyone has heard about four-hour sales appointments.",
          ]},
          { type: "callout", title: "'No four-hour sales pitch' is a selling point", text: "The national window companies are notorious for long high-pressure in-home appointments. Explicitly promising a short, no-pressure quote visit is one of the strongest things an independent can say." },
        ],
      },
      {
        heading: "How should energy efficiency be explained?",
        body: [
          { type: "p", text: "In terms of bills and comfort, not just ratings. 'These reduce heat loss through the window by roughly half compared to single glazing' means more than a U-value most homeowners cannot interpret." },
          { type: "p", text: "Be realistic about payback. Windows rarely pay for themselves in energy savings alone, and claiming otherwise damages credibility with anyone who does the maths." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish window prices?", answer: "Yes, as ranges. It is the single biggest differentiator against national competitors who refuse to quote without an appointment." },
      { question: "Is financing worth offering?", answer: "For whole-house replacement it often determines whether the job happens at all. State the options plainly." },
      { question: "How do we handle energy claims?", answer: "Be realistic. Overstating savings is easy to disprove and damages trust with exactly the careful buyers you want." },
    ],
    related: ["general-contractor-website", "solar-installer-website", "window-tinting-website"],
  },
  {
    slug: "kitchen-remodeler-website",
    eyebrow: "Kitchen remodeling",
    title: "Kitchen remodeler website design",
    seoTitle: "Kitchen Remodeler Website Design | ROVQIX",
    description:
      "Websites for kitchen remodelers — project galleries, realistic budget tiers, timeline and disruption, and design process.",
    excerpt: "Budget tiers and how long the kitchen is unusable. Both decide the enquiry.",
    primaryKeyword: "kitchen remodeler website",
    secondaryKeywords: ["kitchen renovation website design", "kitchen fitter website", "kitchen remodeling contractor website", "kitchen design website"],
    answer:
      "A kitchen remodeler website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers project galleries, realistic budget tiers, timeline and disruption, design process and a budget-qualifying enquiry form.",
    intro:
      "Two questions decide every kitchen enquiry: what will it cost, and how long will I be without a kitchen. Most remodeler websites answer neither.",
    deliverables: [
      { title: "Budget tiers", description: "What $25k, $50k and $80k actually buy in your market. Homeowners have no reference point.", icon: "Receipt" },
      { title: "Timeline and disruption", description: "How many weeks without a kitchen, and what you do about it.", icon: "Clock" },
      { title: "Project galleries", description: "Before and after with scope and rough budget attached to each.", icon: "Images" },
      { title: "Design process", description: "Consultation, design, selections, build. Removes the fear of an open-ended project.", icon: "Network" },
      { title: "Budget-qualifying form", description: "A range field, which saves half a day per mismatched consultation.", icon: "ClipboardList" },
    ],
    sections: [
      {
        heading: "Why publish budget tiers?",
        answer: "Because homeowners routinely expect a full kitchen for a third of what one costs.",
        body: [
          { type: "table", head: ["Budget", "Typically buys"], rows: [
            ["Lower tier", "Stock cabinets, laminate tops, same layout, existing appliances"],
            ["Mid tier", "Semi-custom cabinets, stone tops, some layout change, new appliances"],
            ["Upper tier", "Custom cabinetry, structural changes, premium appliances and finishes"],
          ]},
          { type: "callout", title: "This page qualifies your enquiries", text: "A homeowner who reads the tiers and realises their budget buys a refresh rather than a rebuild either adjusts expectations or does not enquire. Both outcomes save you a wasted consultation." },
        ],
      },
      {
        heading: "Address the disruption honestly",
        body: [
          { type: "p", text: "Being without a kitchen for six weeks is the part homeowners underestimate and later resent. Stating the realistic timeline, and what you do to reduce it — temporary setup, phasing, appliance sequencing — makes you the contractor who told the truth." },
        ],
      },
    ],
    faqs: [
      { question: "Should we ask for budget on the form?", answer: "Yes, as ranges with a 'not sure' option. A consultation with someone expecting a $15k full remodel costs you half a day." },
      { question: "How many projects should the gallery show?", answer: "Eight to fifteen documented properly, with scope and budget noted, beats fifty with one photo each." },
      { question: "Should we publish costs?", answer: "Tiers rather than exact figures. Homeowners need a reference point and vagueness attracts mismatched enquiries." },
    ],
    related: ["general-contractor-website", "flooring-contractor-website", "painting-contractor-website"],
  },
  {
    slug: "home-inspector-website",
    eyebrow: "Home inspection",
    title: "Home inspector website design",
    seoTitle: "Home Inspector Website Design | ROVQIX",
    description:
      "Websites for home inspectors — pricing by square footage, report turnaround, sample reports, certifications and agent referrals.",
    excerpt: "Turnaround and a sample report. Buyers are working to a closing deadline.",
    primaryKeyword: "home inspector website",
    secondaryKeywords: ["home inspection website design", "property inspector website", "building inspector website", "pre purchase inspection website"],
    answer:
      "A home inspector website from ROVQIX costs $349 to $1,290 and takes about a week. Priorities are pricing by square footage, report turnaround, a downloadable sample report, certifications and a page aimed at referring agents.",
    intro:
      "A buyer under contract has a short inspection window. Speed and a clear sample report win the booking far more often than price.",
    deliverables: [
      { title: "Pricing by square footage", description: "Standard bands plus add-ons. Buyers compare and need a number fast.", icon: "Receipt" },
      { title: "Report turnaround", description: "24 hours is the expectation. State yours, since the contingency clock is running.", icon: "Clock" },
      { title: "Sample report", description: "A real, downloadable report. The single most persuasive thing on the site.", icon: "FileText" },
      { title: "Certifications", description: "Licence, certifications and insurance including errors and omissions cover.", icon: "BadgeCheck" },
      { title: "Agent referral page", description: "Written for agents, who refer repeatedly and are your best source of work.", icon: "Handshake" },
    ],
    sections: [
      {
        heading: "Why does a sample report convert?",
        answer: "Because buyers have never seen one and cannot otherwise tell a thorough inspector from a superficial one.",
        body: [
          { type: "list", items: [
            "Publish a genuine report from a real inspection, with identifying details removed.",
            "Show the photographs, the detail level and how findings are prioritised.",
            "Include the summary page, which is what buyers and agents actually read.",
            "A thorough report visibly outclasses a two-page checklist from a cheaper competitor.",
            "It also sets expectations, so nobody is surprised by what is or is not covered.",
          ]},
          { type: "callout", title: "This is how you avoid competing on price", text: "Buyers comparing two inspectors on price alone pick the cheaper one. Buyers comparing two sample reports pick the better inspector, and that is a comparison you can win." },
        ],
      },
      {
        heading: "Why write a page for agents?",
        body: [
          { type: "p", text: "An agent doing two transactions a month refers twenty-four inspections a year. That is worth more than any amount of consumer marketing, and almost no inspector writes a page aimed at them." },
          { type: "p", text: "Agents care about turnaround, scheduling flexibility, report clarity and whether you communicate findings without alarming their buyer unnecessarily. Address those directly." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish a sample report?", answer: "Yes. It is the most persuasive content available and it is the only way a buyer can judge thoroughness before booking." },
      { question: "How fast should reports be delivered?", answer: "24 hours is the industry expectation because the inspection contingency period is short. Slower loses agent referrals." },
      { question: "Should we add radon or termite testing?", answer: "If licensed, yes — they raise the average job value and buyers prefer one visit. List them as priced add-ons." },
    ],
    related: ["real-estate-agent-website", "general-contractor-website", "septic-service-website"],
  },
];

export const localHomeFitnessPages = makeLocalPages(specs);
