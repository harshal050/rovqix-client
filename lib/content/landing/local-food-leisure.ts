import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/** Food specialists and leisure venues. */
const specs: LocalSpec[] = [
  {
    slug: "ice-cream-shop-website",
    eyebrow: "Ice cream shops",
    title: "Ice cream shop website design",
    seoTitle: "Ice Cream Shop Website Design | ROVQIX",
    description:
      "Websites for ice cream shops — today's flavours, seasonal hours, allergens, catering and party bookings.",
    excerpt: "Today's flavours, updated from your phone. That is what people check.",
    primaryKeyword: "ice cream shop website",
    secondaryKeywords: ["gelato shop website design", "frozen yogurt shop website", "ice cream parlor website", "creamery website"],
    answer:
      "An ice cream shop website from ROVQIX costs $349 to $749 and takes about a week. The essentials are a flavour list you can update daily, seasonal opening hours, allergen information and catering or party bookings.",
    intro:
      "Two things get checked before someone walks over: what flavours are on today, and whether you are still open.",
    deliverables: [
      { title: "Today's flavours", description: "Updatable from a phone in seconds, because rotating flavours are the reason people check.", icon: "RefreshCw" },
      { title: "Seasonal hours", description: "Ice cream hours change with the weather. Wrong hours cost you the visit and earn a bad review.", icon: "Clock" },
      { title: "Allergens and dietary", description: "Dairy-free, vegan, nut handling. Parents check this before bringing children.", icon: "ShieldCheck" },
      { title: "Catering and parties", description: "Tubs, carts and party packages — the high-value bookings most shops never advertise.", icon: "Users" },
      { title: "Photos that sell", description: "The product is visual and impulsive. Good photos genuinely drive footfall.", icon: "Images" },
    ],
    sections: [
      {
        heading: "Why does the flavour list matter so much?",
        answer: "Because rotating flavours are the reason a regular checks your site rather than just turning up.",
        body: [
          { type: "list", items: [
            "Make it editable from a phone in under thirty seconds, or it will not be maintained.",
            "Mark what is new this week — that is the thing that pulls people in.",
            "Flag dairy-free and vegan options in the same list rather than on a separate page.",
            "Show a 'last updated' time so visitors can judge whether to trust it.",
            "If keeping it live is unrealistic, list your permanent range and say specials rotate.",
          ]},
          { type: "callout", title: "A stale flavour list is worse than none", text: "Someone driving over for a flavour that ran out last week leaves annoyed. Either keep it current or do not publish it — there is no middle ground that works." },
        ],
      },
      {
        heading: "Is catering worth advertising?",
        body: [
          { type: "p", text: "Almost always, and almost nobody does it. A single party booking or corporate event is worth a busy afternoon of walk-in trade, with none of the queueing." },
          { type: "p", text: "Give it a page with headcount ranges, what is included, how far you travel and lead time required. Tubs for parties, a cart for events, and school or office bookings are three distinct offers." },
        ],
      },
    ],
    faqs: [
      { question: "Do we need online ordering?", answer: "Rarely worth it for a walk-up shop. Catering enquiries and party bookings are the orders worth capturing online." },
      { question: "How do we handle winter?", answer: "Update hours honestly, and consider promoting catering, tubs to go and gift cards through the quiet months rather than going dark." },
      { question: "Should we list every flavour we have ever made?", answer: "A permanent range plus current specials works better. A hundred-item archive is not useful to someone deciding where to walk." },
    ],
    related: ["cafe-website", "bakery-website", "juice-bar-website"],
  },
  {
    slug: "juice-bar-website",
    eyebrow: "Juice bars",
    title: "Juice bar and smoothie shop website design",
    seoTitle: "Juice Bar & Smoothie Shop Website Design | ROVQIX",
    description:
      "Websites for juice bars — menu with nutrition information, cleanse programmes, subscriptions, mobile ordering and ingredient sourcing.",
    excerpt: "Nutrition information and cleanse programmes, which is what this customer researches.",
    primaryKeyword: "juice bar website design",
    secondaryKeywords: ["smoothie shop website", "cold pressed juice website", "juice cleanse website design", "health cafe website"],
    answer:
      "A juice bar website from ROVQIX costs $349 to $1,290 and takes about a week. It covers the menu with nutrition information, cleanse programmes, subscription or pre-order options, mobile ordering and ingredient sourcing.",
    intro:
      "Juice bar customers read labels. Nutrition detail that would be overkill anywhere else is exactly what this audience wants.",
    deliverables: [
      { title: "Menu with nutrition", description: "Ingredients and nutrition per item. This audience genuinely reads it.", icon: "FileText" },
      { title: "Cleanse programmes", description: "Multi-day packages with what is included and what to expect. High-value orders.", icon: "CalendarCheck" },
      { title: "Subscriptions", description: "Weekly delivery or pickup, which turns an occasional customer into recurring revenue.", icon: "RefreshCw" },
      { title: "Sourcing", description: "Organic, local, cold-pressed. The reason customers pay a premium over a supermarket smoothie.", icon: "Network" },
      { title: "Mobile ordering", description: "Order-ahead for a customer buying on the way to work, which is most of your morning trade.", icon: "Phone" },
    ],
    sections: [
      {
        heading: "How should cleanse programmes be presented?",
        answer: "With honest expectations, because overclaiming here is both a health and a regulatory risk.",
        body: [
          { type: "list", items: [
            "Describe what is included — how many juices, how many days, delivery or pickup.",
            "Explain what the days actually look like, practically.",
            "State who should not do a cleanse, and recommend speaking to a doctor where relevant.",
            "Avoid detox and disease claims. Describe the product, not medical outcomes.",
            "Price the programme clearly against buying the juices individually.",
          ]},
          { type: "callout", title: "Health claims are a real risk here", text: "Claiming a juice cleanse detoxifies organs or treats conditions attracts regulatory attention and is not substantiable. Describe ingredients and the experience, not medical benefits." },
        ],
      },
      {
        heading: "Why do subscriptions work in this category?",
        body: [
          { type: "p", text: "Juice is consumed on a routine, which makes it one of the few food products where subscription genuinely fits. A weekly pickup box turns an occasional visit into predictable revenue." },
          { type: "p", text: "Keep skipping and cancelling easy. As with any subscription, the fear of being locked in is what stops people signing up in the first place." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish nutrition information?", answer: "Yes. This audience specifically looks for it, and shops that omit it lose customers to those that publish." },
      { question: "Can we make health claims?", answer: "Describe ingredients and how the product is made. Avoid claims about detoxing, curing or treating anything — that crosses into regulated territory." },
      { question: "Is delivery worth offering?", answer: "For cleanse programmes usually yes, since those are planned purchases. Daily juice delivery rarely works economically for a single location." },
    ],
    related: ["cafe-website", "ice-cream-shop-website", "nutritionist-website"],
  },
  {
    slug: "donut-shop-website",
    eyebrow: "Donut shops",
    title: "Donut shop website design",
    seoTitle: "Donut Shop Website Design | ROVQIX",
    description:
      "Websites for donut shops — daily varieties, early opening hours, pre-orders for offices and events, and dozen pricing.",
    excerpt: "Opening time and pre-orders. Most of this trade happens before 9am.",
    primaryKeyword: "donut shop website",
    secondaryKeywords: ["doughnut shop website design", "bakery donut website", "donut store web design", "specialty donut website"],
    answer:
      "A donut shop website from ROVQIX costs $349 to $549 and takes about a week. The essentials are today's varieties, opening hours including how early, pre-orders for offices and events, and dozen pricing.",
    intro:
      "Donut trade is concentrated into a few early hours and bulk orders. The website should serve both, and little else.",
    deliverables: [
      { title: "Opening time, prominently", description: "How early you open is a selling point. Most of the trade happens before 9am.", icon: "Clock" },
      { title: "Today's varieties", description: "What is on, and roughly when you sell out. Regulars plan around it.", icon: "RefreshCw" },
      { title: "Dozen and bulk pricing", description: "Single, half dozen, dozen, and bulk rates for offices.", icon: "Receipt" },
      { title: "Pre-orders", description: "Office and event orders placed the day before, which is the highest-value trade.", icon: "CalendarCheck" },
      { title: "Allergens", description: "Nut handling and any dairy-free options, which parents and offices ask about.", icon: "ShieldCheck" },
    ],
    sections: [
      {
        heading: "Why are pre-orders the most valuable feature?",
        answer: "Because an office order for ten dozen is worth an hour of counter trade with none of the queue.",
        body: [
          { type: "list", items: [
            "Let customers order the day before with a pickup time.",
            "Set a cut-off so the kitchen knows quantities in time.",
            "Offer bulk pricing that makes a large order worth placing with you.",
            "Capture recurring office orders — a weekly Friday standing order is excellent revenue.",
            "Take a deposit on large orders to prevent no-shows on a batch you have already made.",
          ]},
          { type: "callout", title: "Standing orders are the prize", text: "One office ordering five dozen every Friday is worth more over a year than a great deal of walk-in trade, and it is entirely predictable. Almost no donut shop advertises for it." },
        ],
      },
      {
        heading: "Should you say when you sell out?",
        body: [
          { type: "p", text: "Yes, honestly. 'We usually sell out of specials by 10am' manages expectations and creates genuine urgency, which is better than a customer arriving at 11 to empty trays and feeling misled." },
        ],
      },
    ],
    faqs: [
      { question: "Do we need online ordering?", answer: "For pre-orders yes, that is where the value is. Walk-in ordering online rarely makes sense for a counter business." },
      { question: "Should we list every variety?", answer: "Your regular range plus current specials. A daily live list only works if someone will genuinely update it each morning." },
      { question: "How do we get office orders?", answer: "A dedicated page with bulk pricing, lead time and delivery radius. Most shops never advertise it and lose the trade to national chains." },
    ],
    related: ["bakery-website", "cafe-website", "deli-website"],
  },
  {
    slug: "deli-website",
    eyebrow: "Delis",
    title: "Deli and sandwich shop website design",
    seoTitle: "Deli & Sandwich Shop Website Design | ROVQIX",
    description:
      "Websites for delis — full menu, catering trays, online ordering for the lunch rush, and office delivery.",
    excerpt: "Catering trays and lunch pre-orders, which is where the margin is.",
    primaryKeyword: "deli website design",
    secondaryKeywords: ["sandwich shop website", "delicatessen website design", "sub shop website", "lunch catering website"],
    answer:
      "A deli website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are a readable text menu, catering trays and platters, online ordering to beat the lunch rush, and office delivery.",
    intro:
      "A deli has a brutal ninety-minute lunch window. Anything the website does to move orders out of that window is worth real money.",
    deliverables: [
      { title: "Text menu", description: "Never a PDF. Readable on a phone, updatable in seconds when a price changes.", icon: "FileText" },
      { title: "Catering trays", description: "Platters by headcount with lead time. The highest-margin orders you take.", icon: "Users" },
      { title: "Order ahead", description: "Pre-ordered pickup that skips the queue, which is the main reason to order online.", icon: "Clock" },
      { title: "Office delivery", description: "Minimum order, radius and delivery windows for the local business trade.", icon: "Globe" },
      { title: "Daily specials", description: "Updatable by you, since specials are what bring regulars back.", icon: "RefreshCw" },
    ],
    sections: [
      {
        heading: "Why does catering matter more than counter trade?",
        answer: "Because one platter order equals dozens of sandwiches with a fraction of the service time.",
        body: [
          { type: "list", ordered: true, items: [
            "Build platters by headcount — 10, 20, 50 — rather than making customers do maths.",
            "State lead time clearly, and what the cut-off is for next-day orders.",
            "Include dietary options in every platter, since offices always have requirements.",
            "Show delivery radius and any minimum.",
            "Make it easy to reorder, because office catering repeats.",
          ]},
          { type: "callout", title: "Chase the recurring office account", text: "A local office ordering lunch every week is the single most valuable customer a deli can have. A page aimed at office managers rather than walk-in customers is how you get them." },
        ],
      },
      {
        heading: "How do you use the website to survive the lunch rush?",
        body: [
          { type: "p", text: "Every order placed before noon is one not shouted across a counter at 12:30. Order-ahead with a pickup time smooths your production and shortens the queue, which visibly improves the experience for everyone still in it." },
        ],
      },
    ],
    faqs: [
      { question: "Should the menu be a PDF?", answer: "Never. It is the most-visited page, and a PDF is slow, unreadable on a phone and invisible to search. Text menu, always." },
      { question: "Is online ordering worth the commission?", answer: "Use a flat-fee provider rather than a commission platform where you can, and drive customers to order direct. On lunch volumes, commission adds up fast." },
      { question: "How do we win office accounts?", answer: "A catering page written for an office manager — headcounts, lead times, invoicing, dietary options — plus a card in every delivery." },
    ],
    related: ["cafe-website", "catering-company-website", "pizza-shop-website"],
  },
  {
    slug: "personal-chef-website",
    eyebrow: "Personal chefs",
    title: "Personal chef website design",
    seoTitle: "Personal Chef Website Design | ROVQIX",
    description:
      "Websites for personal chefs — service models, per-person pricing, sample menus, dietary handling and an enquiry form that qualifies.",
    excerpt: "Service model and per-head pricing, so enquiries arrive already qualified.",
    primaryKeyword: "personal chef website",
    secondaryKeywords: ["private chef website design", "in home chef website", "meal prep chef website", "chef for hire website"],
    answer:
      "A personal chef website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your service models — weekly meal prep, dinner parties, events — with per-person pricing, sample menus, dietary handling and a qualifying enquiry form.",
    intro:
      "Clients have no reference point for what a private chef costs, and most assume it is far beyond them. A published starting price fixes that.",
    deliverables: [
      { title: "Service models", description: "Weekly meal prep, dinner parties, events. Three different customers with different budgets.", icon: "Network" },
      { title: "Per-person pricing", description: "How this service is compared. A starting figure removes the biggest barrier.", icon: "Receipt" },
      { title: "Sample menus", description: "Real menus you have cooked, which is how clients judge whether you suit them.", icon: "FileText" },
      { title: "Dietary handling", description: "Allergies, vegan, kosher, halal, medical diets. Frequently the reason they are hiring you.", icon: "ShieldCheck" },
      { title: "Qualifying enquiry", description: "Date, headcount, location, budget and dietary needs — enough to quote or decline.", icon: "ClipboardList" },
    ],
    sections: [
      {
        heading: "Why publish per-person pricing?",
        answer: "Because most people assume a private chef is unaffordable and never enquire.",
        body: [
          { type: "p", text: "A weekly meal prep service at a modest per-portion cost is within reach of far more households than realise it. Publishing a starting figure converts the people who assumed it was not for them." },
          { type: "list", items: [
            "Weekly meal prep: price per portion or per week, with portion counts.",
            "Dinner parties: price per head with a minimum guest count.",
            "Events: a starting per-head figure with a note that menus are quoted.",
            "State clearly whether groceries are included or billed separately.",
            "Note travel charges outside your normal area.",
          ]},
          { type: "callout", title: "Groceries in or out?", text: "This is the most common source of confusion in private chef quoting. State it prominently — clients comparing two chefs are often comparing one figure that includes food with one that does not." },
        ],
      },
      {
        heading: "What should the enquiry form capture?",
        body: [
          { type: "p", text: "Date, guest count, location, dietary requirements and a budget range. Those five fields let you quote or politely decline without a call, which matters when most enquiries are exploratory." },
        ],
      },
    ],
    faqs: [
      { question: "Should groceries be included in the price?", answer: "Either works, but state it unambiguously. Clients comparing chefs frequently compare an inclusive price against an exclusive one without realising." },
      { question: "Do we need sample menus?", answer: "Yes. Clients cannot judge a chef from a service list. Real menus you have cooked are the strongest content on the site." },
      { question: "Should meal prep and events be separate pages?", answer: "Yes. A family wanting weekly meals and a host planning a dinner party have almost nothing in common as buyers." },
    ],
    related: ["catering-company-website", "nutritionist-website", "event-planner-website"],
  },
  {
    slug: "escape-room-website",
    eyebrow: "Escape rooms",
    title: "Escape room website design",
    seoTitle: "Escape Room Website Design | ROVQIX",
    description:
      "Websites for escape rooms — room themes with difficulty and group size, live availability booking, age suitability and corporate packages.",
    excerpt: "Live availability booking. Nothing else on the site matters as much.",
    primaryKeyword: "escape room website design",
    secondaryKeywords: ["escape game website", "escape room booking website", "puzzle room website design", "team building venue website"],
    answer:
      "An escape room website from ROVQIX costs $749 to $1,290 and takes one to two weeks. Live availability booking is the core, alongside room themes with difficulty ratings and group sizes, age suitability and corporate team-building packages.",
    intro:
      "Escape rooms are booked online, on impulse, usually for a specific date. If the booking system is awkward, the group books a competitor.",
    deliverables: [
      { title: "Live availability booking", description: "Real-time slots by room and date. This is the product, not a feature.", icon: "CalendarCheck" },
      { title: "Rooms with difficulty", description: "Theme, difficulty, group size and success rate. Groups self-select on this.", icon: "Blocks" },
      { title: "Group size and pricing", description: "Per person or per room, with minimums and maximums stated.", icon: "Users" },
      { title: "Age and accessibility", description: "Minimum age, whether under-16s need an adult, and physical requirements.", icon: "ShieldCheck" },
      { title: "Corporate packages", description: "Team building with capacity for larger groups. The highest-value bookings.", icon: "Building2" },
    ],
    sections: [
      {
        heading: "Why is booking the whole website?",
        answer: "Because the decision is impulsive, usually made by one person for a group, and friction kills it.",
        body: [
          { type: "list", ordered: true, items: [
            "Show real availability, not an enquiry form. Groups pick a date first and a venue second.",
            "Let them book in under a minute on a phone.",
            "Show remaining slots, which creates genuine urgency at weekends.",
            "Take payment or a deposit, because no-shows on a booked room are pure loss.",
            "Send a clear confirmation with arrival time and what to expect.",
          ]},
          { type: "callout", title: "Publish success rates", text: "Groups love knowing only 32% escape a room. It sets difficulty expectations honestly, drives the choice between rooms, and gives people a reason to come back and try a harder one." },
        ],
      },
      {
        heading: "Why does corporate deserve its own page?",
        body: [
          { type: "p", text: "A corporate booking fills multiple rooms on a weekday afternoon that would otherwise be empty. That is your most valuable slot and your least contested." },
          { type: "p", text: "The buyer is an office manager or HR, not a group of friends. They need capacity, duration, invoicing, catering options and whether you can accommodate thirty people. A page written for them converts far better than the consumer page." },
        ],
      },
    ],
    faqs: [
      { question: "Should we show success rates?", answer: "Yes. It helps groups pick the right difficulty, it is genuinely interesting, and it gives people a reason to return for a harder room." },
      { question: "Per person or per room pricing?", answer: "Either works — just be clear which, with minimums. Per-room pricing encourages larger groups; per-person is easier for small groups to justify." },
      { question: "Do we need a corporate page?", answer: "Yes if you have weekday capacity. It fills your emptiest slots with your highest-value bookings and the buyer needs completely different information." },
    ],
    related: ["arcade-website", "bowling-alley-website", "event-venue-website"],
  },
  {
    slug: "bowling-alley-website",
    eyebrow: "Bowling",
    title: "Bowling alley website design",
    seoTitle: "Bowling Alley Website Design | ROVQIX",
    description:
      "Websites for bowling centres — lane booking, pricing by hour or game, league information, party packages and food.",
    excerpt: "Lane booking and party packages, which are the two revenue drivers.",
    primaryKeyword: "bowling alley website design",
    secondaryKeywords: ["bowling centre website", "bowling website design", "bowling party booking website", "family entertainment centre website"],
    answer:
      "A bowling alley website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers lane booking, pricing by hour or game, league information, birthday and corporate party packages and food service.",
    intro:
      "Bowling revenue comes from two places: casual lane hire and party bookings. The website should make both effortless.",
    deliverables: [
      { title: "Lane booking", description: "Real availability by date and time, since weekends sell out and midweek does not.", icon: "CalendarCheck" },
      { title: "Pricing clearly stated", description: "Per hour or per game, peak and off-peak, shoe hire included or not.", icon: "Receipt" },
      { title: "Party packages", description: "Birthday and corporate packages with headcount, duration and what is included.", icon: "Users" },
      { title: "League information", description: "Nights, standings and how to join. Leagues are your reliable midweek revenue.", icon: "Target" },
      { title: "Food and bar", description: "Menu and whether it can be ordered to the lane, which increases spend per visit.", icon: "ShoppingBag" },
    ],
    sections: [
      {
        heading: "Why do party packages deserve top billing?",
        answer: "Because a booked party is guaranteed revenue in a slot that might otherwise be empty.",
        body: [
          { type: "list", items: [
            "Package by headcount with a clear per-child or per-person price.",
            "State exactly what is included — lanes, shoes, food, drinks, host, invitations.",
            "Show duration, since parents plan around it.",
            "Take a deposit, which is standard and dramatically reduces no-shows.",
            "Separate children's parties from corporate, because they are different buyers entirely.",
          ]},
          { type: "callout", title: "Parents book on clarity, not price", text: "A parent organising a birthday wants to know exactly what happens, for how long, and what it costs all-in. The centre that spells that out wins the booking even at a higher price than one that says 'call for details'." },
        ],
      },
      {
        heading: "How do leagues fit in?",
        body: [
          { type: "p", text: "Leagues fill weeknights that would otherwise be dead, with committed, repeat customers. The website should make joining one easy for a newcomer — night, format, skill level, cost per week and who to contact." },
          { type: "p", text: "Publishing standings gives existing league members a reason to visit the site regularly, which keeps you present between visits." },
        ],
      },
    ],
    faqs: [
      { question: "Do we need real-time lane booking?", answer: "It converts far better than an enquiry form, especially for weekend slots. If live booking is not possible, at least show typical availability by day." },
      { question: "Should we publish prices?", answer: "Yes, with peak and off-peak clearly separated. Families plan around cost and hidden pricing loses the booking." },
      { question: "Are leagues worth promoting online?", answer: "Yes. They fill quiet weeknights with committed regulars, and the main barrier for newcomers is not knowing how to join." },
    ],
    related: ["arcade-website", "escape-room-website", "trampoline-park-website"],
  },
  {
    slug: "arcade-website",
    eyebrow: "Arcades",
    title: "Arcade and family entertainment website design",
    seoTitle: "Arcade & Family Entertainment Website Design | ROVQIX",
    description:
      "Websites for arcades — pricing and card systems, attractions list, party packages, age policies and opening hours.",
    excerpt: "Pricing, attractions and party bookings — with hours that are actually correct.",
    primaryKeyword: "arcade website design",
    secondaryKeywords: ["family entertainment center website", "game arcade website", "barcade website design", "amusement centre website"],
    answer:
      "An arcade website from ROVQIX costs $349 to $1,290 and takes about a week. It covers pricing and how your card or token system works, the attractions you have, party packages, age policies and accurate opening hours.",
    intro:
      "Parents deciding where to take children on a wet Saturday need three facts fast: what is there, what it costs, and are you open.",
    deliverables: [
      { title: "Pricing and card system", description: "How play credits work, since modern card systems confuse first-time visitors.", icon: "Receipt" },
      { title: "Attractions list", description: "What is actually there — games, VR, redemption, bowling, laser tag.", icon: "Blocks" },
      { title: "Party packages", description: "Birthday packages by headcount, which are the most valuable bookings.", icon: "Users" },
      { title: "Age policies", description: "Minimum ages, supervision rules and any adult-only sessions.", icon: "ShieldCheck" },
      { title: "Accurate hours", description: "Including school holidays, when your traffic triples and errors cost most.", icon: "Clock" },
    ],
    sections: [
      {
        heading: "Explain how your pricing actually works",
        answer: "Card and credit systems are genuinely confusing to a first-time visitor.",
        body: [
          { type: "list", items: [
            "How much a card costs and what it buys in practice.",
            "Roughly how many plays a given amount gives — parents want to budget.",
            "Whether unused credit expires or carries over.",
            "Whether unlimited-play wristbands exist and when.",
            "How redemption tickets and prizes work, which children will ask about immediately.",
          ]},
          { type: "callout", title: "Give a realistic budget example", text: "'Most families of four spend $40 to $60 for around two hours' is far more useful than a credit price list, and it is the question every parent is silently doing arithmetic on." },
        ],
      },
      {
        heading: "Why do holiday hours matter so much?",
        body: [
          { type: "p", text: "School holidays and wet weekends are when arcades earn most of their money, and also when hours most commonly differ from the norm. Wrong hours on those days cost you a full family visit and earn a review." },
          { type: "p", text: "Make the hours self-editable and make sure your Google Business Profile matches, since most parents check the map listing rather than the site." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish detailed pricing?", answer: "Yes, plus a realistic 'what a family typically spends' example. Parents are budgeting and vague pricing makes them choose elsewhere." },
      { question: "Do we need online party booking?", answer: "A request form is usually enough, though live booking helps at peak weekends. The key is stating packages and prices clearly." },
      { question: "Should we list every game?", answer: "No. Categories and headline attractions are enough. A full machine list goes stale and nobody reads it." },
    ],
    related: ["bowling-alley-website", "escape-room-website", "trampoline-park-website"],
  },
  {
    slug: "trampoline-park-website",
    eyebrow: "Trampoline parks",
    title: "Trampoline park website design",
    seoTitle: "Trampoline Park Website Design | ROVQIX",
    description:
      "Websites for trampoline parks — online waivers, session booking, party packages, age-specific sessions and safety rules.",
    excerpt: "Online waivers before arrival. It removes the queue and the liability gap.",
    primaryKeyword: "trampoline park website",
    secondaryKeywords: ["trampoline park website design", "jump park website", "indoor play centre website", "adventure park website"],
    answer:
      "A trampoline park website from ROVQIX costs $749 to $1,290 and takes one to two weeks. The essentials are online waivers completed before arrival, session booking, party packages, age-specific sessions and clearly stated safety rules.",
    intro:
      "The waiver is the single highest-value thing on a trampoline park website. Every one completed at home is two minutes saved at a desk with a queue behind it.",
    deliverables: [
      { title: "Online waivers", description: "Completed before arrival, stored against the booking, valid for a set period.", icon: "ClipboardList" },
      { title: "Session booking", description: "Timed sessions with live capacity, since parks sell out at weekends.", icon: "CalendarCheck" },
      { title: "Age-specific sessions", description: "Toddler times, teen nights, sensory-friendly sessions. Parents search for these specifically.", icon: "Users" },
      { title: "Party packages", description: "By headcount with what is included, duration and deposit.", icon: "Target" },
      { title: "Safety rules", description: "Grip socks, supervision requirements and restrictions, stated before they travel.", icon: "ShieldCheck" },
    ],
    sections: [
      {
        heading: "Why is the online waiver so valuable?",
        answer: "Because it removes the single biggest bottleneck at your front desk.",
        body: [
          { type: "list", ordered: true, items: [
            "Let a parent sign for all their children in one form.",
            "Store it against the booking so arrival is a name check.",
            "Make it valid for a period so regulars do not re-sign each visit.",
            "Send it automatically with the booking confirmation.",
            "Include the safety rules in the waiver so they have genuinely been read.",
          ]},
          { type: "callout", title: "Ten families at the desk is twenty minutes", text: "A weekend queue caused by paper waivers is the most common complaint at trampoline parks. Moving it online improves the experience more than anything else you could spend the money on." },
        ],
      },
      {
        heading: "Why publish age-specific sessions prominently?",
        body: [
          { type: "p", text: "A parent with a three-year-old is searching for a toddler session specifically, and will not bring them to a general session full of teenagers. Those sessions also fill quiet weekday mornings." },
          { type: "p", text: "Sensory-friendly sessions are worth their own mention. Families who need them search for them explicitly and there is very little competition for that term." },
        ],
      },
    ],
    faqs: [
      { question: "How long should waivers stay valid?", answer: "Commonly six to twelve months. Longer means fewer re-signs for regulars; check what your insurer requires before choosing." },
      { question: "Do we need timed session booking?", answer: "Yes if you have capacity limits, which most parks do. It prevents overcrowding and lets you sell out weekends in advance." },
      { question: "Should safety rules be on the website?", answer: "Yes, before they travel. Grip sock requirements and supervision rules cause arguments at the desk when discovered on arrival." },
    ],
    related: ["arcade-website", "bowling-alley-website", "climbing-gym-website"],
  },
  {
    slug: "climbing-gym-website",
    eyebrow: "Climbing gyms",
    title: "Climbing gym website design",
    seoTitle: "Climbing Gym Website Design | ROVQIX",
    description:
      "Websites for climbing gyms — day passes and memberships, intro classes for complete beginners, waivers, route setting and youth programmes.",
    excerpt: "An intro path for beginners, who are the whole growth market.",
    primaryKeyword: "climbing gym website design",
    secondaryKeywords: ["bouldering gym website", "rock climbing gym website", "indoor climbing centre website", "climbing wall website"],
    answer:
      "A climbing gym website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers day passes and memberships, an intro class path for complete beginners, online waivers, route setting schedules and youth programmes.",
    intro:
      "Existing climbers already know your gym. The website's job is converting the person who has been curious for a year but does not know how to start.",
    deliverables: [
      { title: "Beginner intro path", description: "A clear first-visit route: what to book, what to wear, what happens. Your growth engine.", icon: "Target" },
      { title: "Passes and memberships", description: "Day pass, punch card and monthly, with what each includes and gear hire.", icon: "Receipt" },
      { title: "Online waivers", description: "Signed before arrival, valid for a period, covering minors too.", icon: "ClipboardList" },
      { title: "Route setting schedule", description: "When new problems go up. Members plan visits around it and check often.", icon: "RefreshCw" },
      { title: "Youth and classes", description: "Kids clubs, coaching and courses, which are reliable recurring revenue.", icon: "Users" },
    ],
    sections: [
      {
        heading: "Why is the beginner page the most important one?",
        answer: "Because climbing looks intimidating from outside and most gyms write only for people already inside.",
        body: [
          { type: "list", items: [
            "Say plainly that no experience or fitness level is required.",
            "Explain exactly what to book for a first visit and what it costs.",
            "State what to wear and what is provided — shoes, chalk, harness.",
            "Describe what happens on arrival, step by step.",
            "Say whether they can come alone, which is the unspoken worry.",
            "Note that bouldering needs no partner, if you have a bouldering area.",
          ]},
          { type: "callout", title: "Answer 'will I look stupid?'", text: "That is the real question stopping people, and no gym website addresses it. A sentence acknowledging that everyone starts somewhere and staff will show them the ropes converts better than any facility photo." },
        ],
      },
      {
        heading: "Why publish the route setting schedule?",
        body: [
          { type: "p", text: "New routes are the reason members come back this week rather than next month. Publishing the schedule gives regulars a reason to check your site and plan a visit." },
          { type: "p", text: "It also signals an active, well-run gym. A wall that has not changed in three months tells experienced climbers everything they need to know." },
        ],
      },
    ],
    faqs: [
      { question: "Should we require an intro class for beginners?", answer: "For roped climbing usually yes, for bouldering often not. Whatever your policy, make it obvious — beginners give up when they cannot tell what to book." },
      { question: "Do we need online booking?", answer: "For classes and courses yes. Open climbing sessions may not need it unless you cap capacity at peak times." },
      { question: "How important are youth programmes?", answer: "Very. They are steady recurring revenue, they fill after-school hours, and parents often become members themselves." },
    ],
    related: ["gym-and-fitness-studio-website", "trampoline-park-website", "boxing-gym-website"],
  },
];

export const localFoodLeisurePages = makeLocalPages(specs);
