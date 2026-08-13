import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/**
 * Food, drink and retail. The common thread: the customer is deciding where to
 * go or what to buy in the next few minutes, usually standing up, on a phone.
 */
const specs: LocalSpec[] = [
  {
    slug: "restaurant-website",
    eyebrow: "Restaurants",
    title: "Restaurant website design",
    seoTitle: "Restaurant Website Design from $349 | ROVQIX",
    description:
      "Websites for restaurants — a menu that is actually readable on a phone, hours, reservations and directions. Live in about a week from $349.",
    excerpt: "A menu people can read on a phone. That is 80% of the job.",
    primaryKeyword: "restaurant website design",
    secondaryKeywords: [
      "restaurant web design",
      "restaurant website builder",
      "menu website design",
      "small restaurant website",
    ],
    answer:
      "A restaurant website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are a text menu that loads instantly on a phone, correct opening hours, reservations or ordering links, and one-tap directions.",
    intro:
      "Almost every restaurant website fails the same way: the menu is a PDF. That one decision costs more customers than everything else on the site combined.",
    deliverables: [
      {
        title: "Menu as real text",
        description:
          "Not a PDF. Loads instantly, readable on any phone, appears in Google, and you can update a price in seconds.",
        icon: "FileText",
      },
      {
        title: "Hours that are correct",
        description:
          "Including holidays. Wrong hours produce a wasted journey and a one-star review.",
        icon: "Clock",
      },
      {
        title: "Reservations and ordering",
        description:
          "Linked to OpenTable, Resy, Toast or whatever you use, kept on your site as far as possible.",
        icon: "CalendarCheck",
      },
      {
        title: "One-tap directions",
        description:
          "Opens in their phone's map app. Most visits are someone nearby deciding where to eat.",
        icon: "Phone",
      },
      {
        title: "Food photos",
        description:
          "Your actual dishes. Ten good phone photos beat a stock library every time.",
        icon: "Images",
      },
      {
        title: "Private dining and events",
        description:
          "An enquiry path for the bookings that are worth ten normal covers.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Why should the menu never be a PDF?",
        answer:
          "Because a PDF menu is slow, unreadable on a phone, invisible to Google and awkward for you to update.",
        body: [
          {
            type: "table",
            head: ["PDF menu", "Text menu"],
            rows: [
              ["Pinch and zoom on a phone", "Readable straight away"],
              ["Downloads over mobile data", "Loads instantly"],
              ["Barely indexed by Google", "Dishes can show in search"],
              ["Needs re-exporting to change a price", "Change it in seconds"],
              ["Unusable with a screen reader", "Accessible to everyone"],
              ["No dietary filtering", "Can mark vegan, gluten-free"],
            ],
          },
          {
            type: "callout",
            title: "This is the single biggest fix",
            text: "If we only did one thing to a restaurant website, it would be converting the PDF menu to text. It is the most-visited page on your site and the one most likely to make someone give up and pick somewhere else.",
          },
        ],
      },
      {
        heading: "What do people actually check before choosing a restaurant?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "The menu, and roughly what things cost.",
              "Whether you are open right now.",
              "Photos of the food and the room.",
              "Whether they need a reservation and whether one is available.",
              "Where you are and how long it takes to get there.",
            ],
          },
          {
            type: "p",
            text: "Notice that none of it is your story, your chef's biography or a full-screen video. Those can exist, but not in front of the menu.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I update the menu myself?",
        answer:
          "Yes. Changing a price or removing a sold-out dish takes under a minute, and you do not need to email us or export anything.",
      },
      {
        question: "Should we take orders on our own site?",
        answer:
          "If you already use Toast, Square or similar, we link to it — those handle payment and kitchen printing properly. Building your own ordering system is rarely worth it against the commission you would save.",
      },
      {
        question: "Do we still need a website if we are on DoorDash and Google?",
        answer:
          "Yes, mainly because your own site is where your full menu, hours and reservation link live without commission or a platform changing the rules. It is also what shows when someone searches your name directly.",
      },
    ],
    related: ["cafe-website", "pizza-shop-website", "bar-and-brewery-website"],
  },

  {
    slug: "cafe-website",
    eyebrow: "Cafés",
    title: "Café and coffee shop website design",
    seoTitle: "Café & Coffee Shop Website Design | ROVQIX",
    description:
      "Websites for cafés and coffee shops — hours, menu, wifi and workspace info, mobile ordering links and event bookings. From $349.",
    excerpt: "Hours, menu and whether people can work there. That is what gets checked.",
    primaryKeyword: "coffee shop website design",
    secondaryKeywords: [
      "cafe website design",
      "coffee shop website",
      "cafe web design",
      "coffee roaster website",
    ],
    answer:
      "A café website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are accurate hours, a readable menu, information about wifi and seating for people looking to work, and links to mobile ordering if you use it.",
    intro:
      "A surprising share of café website visits are someone deciding whether they can sit and work there for two hours. Answer that and you win the visit.",
    deliverables: [
      {
        title: "Accurate hours",
        description:
          "The most-checked information on any café site, including different weekend and holiday hours.",
        icon: "Clock",
      },
      {
        title: "Menu with prices",
        description:
          "Coffee, food and specials as text, updatable by you in seconds.",
        icon: "FileText",
      },
      {
        title: "Wifi and workspace info",
        description:
          "Wifi, power outlets, table space, and whether there is a time limit. A huge search intent for cafés.",
        icon: "Network",
      },
      {
        title: "Mobile ordering link",
        description:
          "Connected to your existing app or ordering system so regulars can order ahead.",
        icon: "Phone",
      },
      {
        title: "Beans and roasts",
        description:
          "What you serve and whether you sell bags, which is a real revenue line for specialty cafés.",
        icon: "ShoppingBag",
      },
      {
        title: "Space hire",
        description:
          "Evening events and private hire, which most cafés never advertise and could.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Why does 'can I work here' matter so much?",
        answer:
          "Because it is one of the most common café searches, and almost no café website answers it.",
        body: [
          {
            type: "list",
            items: [
              "Is there wifi, and is it free?",
              "Are there power outlets, and roughly how many?",
              "Are there tables suitable for a laptop, or is it all small round tables?",
              "Is there a time limit or a policy at busy periods?",
              "How loud is it, typically?",
            ],
          },
          {
            type: "callout",
            title: "Say no clearly if the answer is no",
            text: "If you do not want laptop campers, say so politely on the site. It is far better than someone settling in for three hours and being asked to leave — which is where bad reviews come from.",
          },
        ],
      },
      {
        heading: "Should a café sell beans online?",
        body: [
          {
            type: "p",
            text: "If you roast, yes — it is genuine additional revenue and your regulars will buy. A simple shop with three or four products is enough; you do not need a full ecommerce build.",
          },
          {
            type: "p",
            text: "If you resell someone else's beans, probably not worth the shipping hassle. A note saying you sell bags in store does the job.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we show daily specials?",
        answer:
          "Yes, with a specials section you can update from your phone in the morning. Anything you have to email us to change will not get updated, so we make it self-service.",
      },
      {
        question: "Do we need online ordering?",
        answer:
          "Only if you already have a system for it. Linking to Square or Toast is straightforward; building your own ordering and payment flow is not worth it for a single café.",
      },
      {
        question: "How important are the photos?",
        answer:
          "Very. Photos of the actual space matter as much as the coffee here, because people are deciding whether they want to sit in it.",
      },
    ],
    related: ["restaurant-website", "bakery-website", "bar-and-brewery-website"],
  },

  {
    slug: "pizza-shop-website",
    eyebrow: "Pizza shops",
    title: "Pizza shop website design",
    seoTitle: "Pizza Shop Website Design | ROVQIX",
    description:
      "Websites for pizza shops — fast menu, online ordering that avoids third-party commission, delivery area and deals. From $349.",
    excerpt: "A fast menu and direct ordering, so you keep the commission.",
    primaryKeyword: "pizza shop website design",
    secondaryKeywords: [
      "pizzeria website design",
      "pizza restaurant website",
      "pizza ordering website",
      "takeaway website design",
    ],
    answer:
      "A pizza shop website from ROVQIX costs $349 to $1,290 and takes about a week. The priorities are a fast text menu, a direct ordering link that avoids third-party commission, a clear delivery area, and current deals.",
    intro:
      "Every order that comes through your own site instead of a delivery platform keeps 15 to 30 percent in your pocket. That is what this website is for.",
    deliverables: [
      {
        title: "Direct ordering link",
        description:
          "Your own ordering system given top billing, so customers order direct rather than via a platform.",
        icon: "ShoppingBag",
      },
      {
        title: "Fast text menu",
        description:
          "With sizes and prices, loading instantly on a phone at 7pm on a Friday.",
        icon: "FileText",
      },
      {
        title: "Delivery area and minimum",
        description:
          "Where you deliver, the minimum order and any fee. Prevents a large share of wasted calls.",
        icon: "Globe",
      },
      {
        title: "Deals and specials",
        description:
          "Your current offers, updatable by you, since deals drive a lot of pizza ordering decisions.",
        icon: "Target",
      },
      {
        title: "Tap to call",
        description:
          "A large share of pizza orders are still phone orders. The number should never be hard to find.",
        icon: "Phone",
      },
      {
        title: "Allergen information",
        description:
          "Increasingly expected, and it prevents a serious problem.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "How do you win orders back from delivery platforms?",
        answer:
          "Make ordering direct at least as easy, and give people a reason to bother.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Put the direct ordering button first and make it the most prominent thing on the page.",
              "Offer something for ordering direct — a discount, free garlic bread, or loyalty points.",
              "Print your website on every box and receipt, since that is where regulars will see it.",
              "Make sure your Google Business Profile links to your ordering page, not to a platform.",
              "Keep the menu and prices identical to the platform, or cheaper direct.",
            ],
          },
          {
            type: "callout",
            title: "The maths is stark",
            text: "At 25% commission, ten $30 orders a day through a platform costs about $2,250 a month. A website that shifts even a third of those to direct ordering pays for itself many times over in the first month.",
          },
        ],
      },
      {
        heading: "What makes a takeaway menu work on a phone?",
        body: [
          {
            type: "list",
            items: [
              "Categories that collapse, so the whole menu is not one endless scroll.",
              "Sizes and prices next to each item, not in a separate table.",
              "Loads in under two seconds on mobile data.",
              "Big enough tap targets to use with one thumb.",
              "A sticky order button so they can act the moment they decide.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we build our own ordering system?",
        answer:
          "No. Use an ordering provider that charges a flat fee rather than a commission — there are several aimed at independent takeaways. We link your site to it. Building payment and kitchen printing from scratch is not worth it.",
      },
      {
        question: "Can we still list on delivery platforms?",
        answer:
          "Of course, and most shops should. Treat them as customer acquisition, then convert those customers to direct ordering with a card in the box.",
      },
      {
        question: "Can we update deals ourselves?",
        answer:
          "Yes, that is built to be self-service. Deals change too often for it to work any other way.",
      },
    ],
    related: ["restaurant-website", "food-truck-website", "cafe-website"],
  },

  {
    slug: "bakery-website",
    eyebrow: "Bakeries",
    title: "Bakery website design",
    seoTitle: "Bakery Website Design from $349 | ROVQIX",
    description:
      "Websites for bakeries — daily products, custom cake enquiries, pre-orders, allergen information and pickup details. From $349.",
    excerpt: "Custom cake enquiries and pre-orders, plus what is actually available today.",
    primaryKeyword: "bakery website design",
    secondaryKeywords: [
      "bakery website",
      "cake shop website design",
      "custom cake website",
      "patisserie website design",
    ],
    answer:
      "A bakery website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your product range, custom cake enquiries with lead times, pre-orders for collection, allergen information and pickup details.",
    intro:
      "Bakeries have two very different customers: someone buying a loaf today, and someone ordering a wedding cake in four months. The site has to serve both without confusing either.",
    deliverables: [
      {
        title: "Product range",
        description:
          "What you make, with photos and prices, and a note about what is daily versus made to order.",
        icon: "Images",
      },
      {
        title: "Custom cake enquiries",
        description:
          "A form capturing date, servings, flavours, design references and budget — enough to quote.",
        icon: "ClipboardList",
      },
      {
        title: "Lead times stated",
        description:
          "How far ahead custom orders need to be placed. Prevents the impossible next-day requests.",
        icon: "Clock",
      },
      {
        title: "Pre-orders for collection",
        description:
          "For holidays especially, when pre-orders are the difference between a good and a great week.",
        icon: "CalendarCheck",
      },
      {
        title: "Allergen information",
        description:
          "Clear allergen and cross-contamination statements, which customers genuinely need.",
        icon: "ShieldCheck",
      },
      {
        title: "Wedding cake portfolio",
        description:
          "Presented separately, since wedding customers browse very differently from everyone else.",
        icon: "Sparkles",
      },
    ],
    sections: [
      {
        heading: "What should the custom cake form ask?",
        answer:
          "Enough to give a price without three rounds of emails.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Date needed, with your minimum lead time shown next to the field.",
              "Number of servings, which drives size and price more than anything else.",
              "Occasion, since wedding, birthday and corporate have different expectations.",
              "Flavour preferences from your actual list, not an open text box.",
              "Design reference upload — one or two images.",
              "Budget range, which prevents designing a $600 cake for a $150 budget.",
            ],
          },
          {
            type: "callout",
            title: "Lead time next to the date field",
            text: "Putting 'minimum two weeks for custom cakes' right beside the date picker stops most impossible requests before they are submitted, rather than after you have read them.",
          },
        ],
      },
      {
        heading: "How do you handle holiday pre-orders?",
        body: [
          {
            type: "p",
            text: "A dedicated pre-order page you can turn on and off, with a cut-off date, collection slots and payment or deposit. Thanksgiving, Christmas and Easter are where bakeries make a disproportionate share of annual profit.",
          },
          {
            type: "p",
            text: "We build it so you can enable it yourself and set the cut-off, because the timing changes every year and you should not need us for that.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we take payment for custom orders online?",
        answer:
          "A deposit, yes, usually via a payment link once you have quoted. Taking full payment upfront on a custom order before the design is agreed tends to cause problems.",
      },
      {
        question: "Do we need to list every product?",
        answer:
          "No. Your range and signatures, with a note that the daily selection varies. Trying to maintain a live daily list is more work than it is worth for most bakeries.",
      },
      {
        question: "Should wedding cakes have their own section?",
        answer:
          "Yes. Wedding customers plan months ahead, browse extensively and expect a consultation. Mixing that with everyday products serves neither well.",
      },
    ],
    related: ["cafe-website", "restaurant-website", "catering-company-website"],
  },

  {
    slug: "food-truck-website",
    eyebrow: "Food trucks",
    title: "Food truck website design",
    seoTitle: "Food Truck Website Design | ROVQIX",
    description:
      "Websites for food trucks — where you are today, weekly schedule, menu, catering enquiries and event bookings. From $349.",
    excerpt: "Where you are today, updated from your phone in ten seconds.",
    primaryKeyword: "food truck website design",
    secondaryKeywords: [
      "food truck website",
      "mobile food business website",
      "food truck catering website",
      "street food website design",
    ],
    answer:
      "A food truck website from ROVQIX costs $349 to $1,290 and takes about a week. The critical feature is a location and schedule you can update from your phone in seconds, alongside your menu and a catering enquiry form.",
    intro:
      "For a food truck, the website has one job that matters more than all the others: telling people where you are right now.",
    deliverables: [
      {
        title: "Today's location",
        description:
          "Front and centre, updatable from your phone in under ten seconds while you are setting up.",
        icon: "Globe",
      },
      {
        title: "Weekly schedule",
        description:
          "Where you will be this week, so regulars can plan and find you.",
        icon: "CalendarCheck",
      },
      {
        title: "Menu",
        description:
          "Short and clear, with prices. Food truck menus are small and should be instantly readable.",
        icon: "FileText",
      },
      {
        title: "Catering enquiries",
        description:
          "Usually the highest-margin work. A form capturing date, headcount, location and budget.",
        icon: "ClipboardList",
      },
      {
        title: "Event bookings",
        description:
          "Festivals, markets and private events, with your requirements — power, space, access — stated.",
        icon: "Users",
      },
      {
        title: "Social links",
        description:
          "Where daily updates actually happen, linked prominently since that is where regulars follow you.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "How should location updates work?",
        answer:
          "One button on your phone. If it takes more than ten seconds, it will not happen on a busy morning.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A simple form on your phone: pick a saved location, set the hours, publish.",
              "Save your regular spots so it is one tap rather than typing an address.",
              "The site shows today's location prominently with a map link.",
              "The weekly schedule can be set in advance and overridden on the day.",
              "If nothing is set, the site says so honestly rather than showing yesterday's location.",
            ],
          },
          {
            type: "callout",
            title: "Stale location information is worse than none",
            text: "Someone driving to where you were yesterday is a customer lost permanently. We make the site say 'check our socials for today' rather than display an out-of-date location.",
          },
        ],
      },
      {
        heading: "Why does catering deserve prominence?",
        body: [
          {
            type: "p",
            text: "A single catering booking can be worth a week of street service, with guaranteed revenue and no weather risk. Most food truck websites bury it behind a contact link.",
          },
          {
            type: "p",
            text: "Give it a proper page: what you offer, headcount range, pricing structure, what you need on site, and a form that captures enough to quote.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a website if I post locations on Instagram?",
        answer:
          "Instagram covers daily updates well. A website earns its place for catering enquiries, event organiser bookings and showing up in Google searches — none of which Instagram does.",
      },
      {
        question: "Can I update the location from my phone?",
        answer:
          "Yes, that is the main design requirement. It is a saved-location picker, not a form to fill in, because anything slower will not get used.",
      },
      {
        question: "Can we take pre-orders?",
        answer:
          "If your setup can handle it, yes, linked to an ordering system. Many trucks find pre-orders create more service problems than they solve, so we would talk it through first.",
      },
    ],
    related: ["catering-company-website", "restaurant-website", "pizza-shop-website"],
  },

  {
    slug: "catering-company-website",
    eyebrow: "Catering",
    title: "Catering company website design",
    seoTitle: "Catering Company Website Design | ROVQIX",
    description:
      "Websites for caterers — package menus, per-head pricing, event enquiry forms that qualify, gallery and availability by date.",
    excerpt: "Per-head pricing and an enquiry form that captures date, headcount and budget.",
    primaryKeyword: "catering website design",
    secondaryKeywords: [
      "catering company website",
      "event catering website",
      "wedding catering website",
      "corporate catering website",
    ],
    answer:
      "A catering website from ROVQIX costs $349 to $1,290 and takes one to two weeks. It centres on package menus with per-head pricing, an enquiry form that captures date, headcount, venue and budget, and a gallery of real events.",
    intro:
      "Catering enquiries are worth a lot and cost a lot to handle. The form is where the money is made or wasted.",
    deliverables: [
      {
        title: "Per-head pricing",
        description:
          "Package pricing per person, which is how customers think and compare in this category.",
        icon: "Receipt",
      },
      {
        title: "Enquiry form that qualifies",
        description:
          "Date, headcount, venue, service style and budget. Enough to quote or decline without a call.",
        icon: "ClipboardList",
      },
      {
        title: "Package menus",
        description:
          "Three or four defined packages beat an endless à la carte list for decision-making.",
        icon: "FileText",
      },
      {
        title: "Event gallery",
        description:
          "Real events with the setting visible, since customers are picturing their own.",
        icon: "Images",
      },
      {
        title: "Event types",
        description:
          "Weddings, corporate and private separated, because expectations and budgets differ entirely.",
        icon: "Network",
      },
      {
        title: "Dietary handling",
        description:
          "How you handle allergies and dietary requirements, which every enquiry will ask about.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "What should the enquiry form capture?",
        answer:
          "Date, headcount, venue and budget — the four things that determine whether you can and should take the job.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Event date, checked against your availability if you can.",
              "Guest count, as a range if they are not sure yet.",
              "Venue and whether it has kitchen facilities, which changes everything about the quote.",
              "Service style — buffet, plated, canapés, drop-off.",
              "Budget per head or total, which is the field that saves the most wasted time.",
              "Dietary requirements, at least in outline.",
            ],
          },
          {
            type: "callout",
            title: "Publish per-head ranges",
            text: "'Buffet packages from $28 per head, plated dinners from $55' filters enquiries before they arrive. Caterers who publish nothing spend hours quoting events that were never viable.",
          },
        ],
      },
      {
        heading: "Should event types be separated?",
        body: [
          {
            type: "table",
            head: ["Type", "What they want to see"],
            rows: [
              ["Weddings", "Portfolio, tastings, coordination, per-head pricing"],
              ["Corporate", "Reliability, invoicing, dietary handling, repeat arrangements"],
              ["Private parties", "Simplicity, price, minimum numbers"],
              ["Drop-off catering", "Menu, lead time, delivery area, minimum order"],
            ],
          },
          {
            type: "p",
            text: "These are four different customers. Separate pages for the ones you actually want more of will convert far better than one general catering page.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show per-head prices?",
        answer:
          "Starting prices, yes. It is the single most effective filter in catering, and customers cannot compare you against anyone without it.",
      },
      {
        question: "Can customers check date availability?",
        answer:
          "We can show blocked dates if you maintain a calendar. Otherwise the form captures the date and you respond — most caterers prefer that so they can weigh the enquiry.",
      },
      {
        question: "Do we need a separate wedding site?",
        answer:
          "No, a well-built wedding section is enough. A separate site doubles your maintenance and splits your search presence for no real gain.",
      },
    ],
    related: ["food-truck-website", "bakery-website", "event-planner-website"],
  },

  {
    slug: "bar-and-brewery-website",
    eyebrow: "Bars",
    title: "Bar and brewery website design",
    seoTitle: "Bar & Brewery Website Design | ROVQIX",
    description:
      "Websites for bars, taprooms and breweries — what is on tap, events calendar, food, private hire and age verification handled properly.",
    excerpt: "What is on tap right now, plus the events calendar people actually check.",
    primaryKeyword: "brewery website design",
    secondaryKeywords: [
      "bar website design",
      "taproom website",
      "pub website design",
      "craft brewery website",
    ],
    answer:
      "A bar or brewery website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are a current tap list, an events calendar, food information, private hire enquiries and correct hours.",
    intro:
      "Two things get checked before someone visits a taproom: what is on tap, and what is on tonight. Both need to be current or the site actively misleads people.",
    deliverables: [
      {
        title: "Current tap list",
        description:
          "Updatable by you in seconds, ideally from your phone behind the bar as kegs change.",
        icon: "FileText",
      },
      {
        title: "Events calendar",
        description:
          "Trivia, live music, food trucks. One of the main reasons people check a bar's website at all.",
        icon: "CalendarCheck",
      },
      {
        title: "Food situation",
        description:
          "Your own kitchen, a rotating food truck, or bring-your-own. People need to know before deciding.",
        icon: "ShoppingBag",
      },
      {
        title: "Private hire",
        description:
          "Space bookings and party enquiries, which are high-value and usually under-promoted.",
        icon: "Users",
      },
      {
        title: "Age handling",
        description:
          "Age gate where appropriate, plus a clear policy on under-21s and dogs, both of which get asked constantly.",
        icon: "ShieldCheck",
      },
      {
        title: "Beer information",
        description:
          "Styles, ABV and tasting notes for breweries, plus whether you sell cans and growlers to go.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "How current does the tap list need to be?",
        answer:
          "Current enough that nobody arrives for a beer that ran out last week.",
        body: [
          {
            type: "list",
            items: [
              "Make it editable from a phone in seconds, or it will not be maintained.",
              "Show a 'last updated' timestamp so visitors can judge for themselves.",
              "If you use Untappd or a digital menu board, we can pull from that instead of duplicating.",
              "Better to show a shorter list you keep current than a long one that is wrong.",
              "Mark what is running low, which creates useful urgency.",
            ],
          },
          {
            type: "callout",
            title: "An outdated tap list is a real cost",
            text: "Someone driving across town for a specific beer that is gone leaves annoyed and often reviews accordingly. If keeping it live is unrealistic, we show styles rather than specific beers.",
          },
        ],
      },
      {
        heading: "What else gets asked constantly?",
        body: [
          {
            type: "list",
            items: [
              "Are dogs allowed? Enormously common for taprooms and rarely answered on the site.",
              "Can children come, and until what time?",
              "Is there food, or can we bring our own?",
              "Is there outdoor seating, and is it heated?",
              "Do you take reservations for larger groups?",
            ],
          },
          {
            type: "p",
            text: "Putting these five answers on the page removes most of the messages a bar gets, and every one of them is a decision someone is making right now about whether to come.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need an age verification gate?",
        answer:
          "For a brewery selling alcohol online, generally yes. For a bar or taproom information site, usually not — but check your state's rules, since some require it for alcohol advertising.",
      },
      {
        question: "Can we sell beer online?",
        answer:
          "Depends heavily on your state's shipping laws and licensing. Local pickup ordering is much simpler and is what most taprooms actually want. We would scope that with your rules in mind.",
      },
      {
        question: "Can staff update the tap list?",
        answer:
          "Yes, and they should. We set it up so anyone behind the bar can update it from a phone without a training session.",
      },
    ],
    related: ["restaurant-website", "cafe-website", "event-venue-website"],
  },

  {
    slug: "boutique-retail-website",
    eyebrow: "Retail shops",
    title: "Boutique and retail shop website design",
    seoTitle: "Boutique & Retail Shop Website Design | ROVQIX",
    description:
      "Websites for independent shops and boutiques — hours, what you stock, local pickup, and a simple online store if it is worth it.",
    excerpt: "What you stock and when you are open, plus a simple store only if it pays.",
    primaryKeyword: "boutique website design",
    secondaryKeywords: [
      "retail shop website",
      "small shop website design",
      "clothing boutique website",
      "gift shop website",
    ],
    answer:
      "A boutique or retail shop website from ROVQIX costs $349 to $1,290 and takes about a week. For most independent shops the priority is hours, location, what you stock and your Instagram — with a simple online store only where the volume justifies it.",
    intro:
      "Most small shops do not need an online store. They need to be findable, look appealing, and get people through the door.",
    deliverables: [
      {
        title: "Hours and location",
        description:
          "Correct, including holidays, with one-tap directions. The most-used information on the site.",
        icon: "Clock",
      },
      {
        title: "What you stock",
        description:
          "Brands and categories, so someone searching for a specific label can tell you carry it.",
        icon: "ShoppingBag",
      },
      {
        title: "Shop photography",
        description:
          "The space and the products. Independent retail sells on atmosphere as much as stock.",
        icon: "Images",
      },
      {
        title: "Instagram feed",
        description:
          "Where your new arrivals actually get posted, pulled onto the site so it never looks stale.",
        icon: "MessageSquare",
      },
      {
        title: "Local pickup or hold",
        description:
          "A simple 'hold this for me' or call-to-reserve, which is often more useful than shipping.",
        icon: "CalendarCheck",
      },
      {
        title: "Simple store, if worth it",
        description:
          "A small product set if you genuinely want online orders — not a 500-item catalogue nobody maintains.",
        icon: "CreditCard",
      },
    ],
    sections: [
      {
        heading: "Do you actually need an online store?",
        answer:
          "Only if you will maintain the inventory and handle the shipping. Otherwise it becomes a liability.",
        body: [
          {
            type: "table",
            head: ["Online store makes sense when", "Skip it when"],
            rows: [
              ["You have a distinctive product people seek out", "You stock what other shops also carry"],
              ["Someone can pack and ship daily", "Nobody has time to fulfil orders"],
              ["Stock levels are manageable", "Inventory changes constantly"],
              ["Average order value covers shipping", "Items are low value and heavy"],
              ["You already sell well on Instagram", "Foot traffic is your whole business"],
            ],
          },
          {
            type: "callout",
            title: "An abandoned store is worse than none",
            text: "A shop page showing items that sold out three months ago damages trust more than having no store at all. We would rather build you a great information site than a store that goes stale.",
          },
        ],
      },
      {
        heading: "What actually gets people into an independent shop?",
        body: [
          {
            type: "list",
            items: [
              "Being findable when someone searches for a brand you stock.",
              "Photos that make the shop look worth a visit.",
              "Correct hours, which sounds trivial and is the most common reason for a wasted trip.",
              "A reason to come now — new arrivals, an event, a sale.",
              "Being visible on Google Maps with good photos and reviews.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we sell on Shopify instead?",
        answer:
          "If online sales are going to be a real part of the business, yes — use Shopify and we will build the storefront around it. If online is incidental, a simple information site plus Instagram costs far less and works better.",
      },
      {
        question: "Can we show new arrivals without a full store?",
        answer:
          "Yes. Pulling your Instagram feed onto the site is the easiest way and stays current automatically, because you are already posting there.",
      },
      {
        question: "Can customers reserve items?",
        answer:
          "Yes, a simple hold request that emails you. It is often more valuable than online checkout for a small shop, and far less work.",
      },
    ],
    related: ["florist-website", "gift-shop-website", "jewelry-store-website"],
  },

  {
    slug: "florist-website",
    eyebrow: "Florists",
    title: "Florist website design",
    seoTitle: "Florist Website Design from $349 | ROVQIX",
    description:
      "Websites for florists — same-day delivery ordering, occasion collections, wedding enquiries, delivery areas and cut-off times.",
    excerpt: "Same-day ordering with honest cut-off times, plus wedding enquiries.",
    primaryKeyword: "florist website design",
    secondaryKeywords: [
      "flower shop website",
      "florist web design",
      "flower delivery website",
      "wedding florist website",
    ],
    answer:
      "A florist website from ROVQIX costs $349 to $1,290 and takes one to two weeks. Priorities are same-day delivery ordering with a clear cut-off time, occasion-based collections, delivery areas and fees, and a separate wedding enquiry path.",
    intro:
      "Flower buying is almost entirely occasion-driven and often last-minute. The site needs to answer 'can you get this there today' before anything else.",
    deliverables: [
      {
        title: "Same-day cut-off",
        description:
          "Stated prominently, with a countdown if possible. It is the first thing a panicking customer checks.",
        icon: "Clock",
      },
      {
        title: "Occasion collections",
        description:
          "Sympathy, romance, birthday, new baby. People shop by occasion, not by flower type.",
        icon: "Network",
      },
      {
        title: "Delivery area and fees",
        description:
          "Zip codes covered and what delivery costs, before they get to checkout and abandon.",
        icon: "Globe",
      },
      {
        title: "Ordering",
        description:
          "Simple checkout with delivery date, recipient details and a card message.",
        icon: "CreditCard",
      },
      {
        title: "Wedding and events",
        description:
          "A separate consultation path, since that is a months-long relationship, not a transaction.",
        icon: "Sparkles",
      },
      {
        title: "Substitution policy",
        description:
          "Stated honestly, because seasonal availability varies and this is where complaints come from.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "Why does the same-day cut-off matter so much?",
        answer:
          "Because a large share of flower orders are placed on the day, often by someone who has just remembered.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Show the cut-off time prominently on every page, not just at checkout.",
              "Make it dynamic — 'order within 2 hours 14 minutes for delivery today'.",
              "After cut-off, switch automatically to the next available date rather than taking an order you cannot fulfil.",
              "State weekend and holiday differences, which are the most common source of complaints.",
              "For sympathy orders, note whether you can coordinate with funeral home timings.",
            ],
          },
          {
            type: "callout",
            title: "Never accept an order you cannot deliver",
            text: "A florist who takes a same-day order after cut-off and delivers tomorrow creates a serious problem, because the occasion has passed. Automating the cut-off protects you from that entirely.",
          },
        ],
      },
      {
        heading: "How should sympathy orders be handled?",
        body: [
          {
            type: "p",
            text: "Separately and carefully. Someone ordering sympathy flowers is upset, often unfamiliar with what is appropriate, and working to a funeral timing.",
          },
          {
            type: "list",
            items: [
              "A dedicated section with guidance on what is appropriate for different situations.",
              "Clear information about delivering to funeral homes, including timing requirements.",
              "A phone number prominently offered, since many people want to talk this through.",
              "Restrained design and copy in that section specifically.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we use a wire service or sell direct?",
        answer:
          "Direct through your own site keeps far more of the money. Wire services bring order volume at a significant cost. Most florists do both and try to shift customers direct over time.",
      },
      {
        question: "How do we handle seasonal availability?",
        answer:
          "Show a clear substitution policy — that you may substitute flowers of equal or greater value while keeping the style and colour. State it before checkout, not in the small print.",
      },
      {
        question: "Should wedding work be on the same site?",
        answer:
          "Same site, separate section with its own enquiry form. Wedding customers need a consultation, not a checkout, so mixing the two paths confuses both.",
      },
    ],
    related: ["gift-shop-website", "boutique-retail-website", "event-planner-website"],
  },

  {
    slug: "pet-grooming-website",
    eyebrow: "Pet grooming",
    title: "Pet grooming website design",
    seoTitle: "Pet Grooming Website Design | ROVQIX",
    description:
      "Websites for pet groomers — pricing by breed and size, booking, vaccination requirements, before and after photos and mobile grooming areas.",
    excerpt: "Pricing by size and breed, booking, and the vaccination rules stated upfront.",
    primaryKeyword: "pet grooming website design",
    secondaryKeywords: [
      "dog grooming website",
      "pet groomer website",
      "mobile dog grooming website",
      "grooming salon website",
    ],
    answer:
      "A pet grooming website from ROVQIX costs $349 to $1,290 and takes about a week. It covers pricing by size and breed, online booking, vaccination requirements, a before-and-after gallery and your service area if you are mobile.",
    intro:
      "Grooming prices vary by breed, coat and temperament, which is why so many groomers refuse to publish them — and why customers find the whole category frustrating.",
    deliverables: [
      {
        title: "Pricing by size and breed",
        description:
          "Ranges by weight or breed group, which is achievable and far better than 'call for pricing'.",
        icon: "Receipt",
      },
      {
        title: "Online booking",
        description:
          "With appointment length shown, since a full groom takes hours and owners plan around it.",
        icon: "CalendarCheck",
      },
      {
        title: "Vaccination requirements",
        description:
          "Stated clearly upfront, so nobody arrives without records and has to be turned away.",
        icon: "ShieldCheck",
      },
      {
        title: "Before and after gallery",
        description:
          "The most persuasive content on a grooming site, especially for difficult coats.",
        icon: "Images",
      },
      {
        title: "Mobile service area",
        description:
          "If you are mobile, where you travel and what you need on site — parking, power, water.",
        icon: "Globe",
      },
      {
        title: "Handling policy",
        description:
          "How you deal with anxious or aggressive dogs, senior pets and matted coats.",
        icon: "HeartPulse",
      },
    ],
    sections: [
      {
        heading: "How do you publish grooming prices when every dog is different?",
        answer:
          "By size or breed group, as ranges, with the factors that move the price stated.",
        body: [
          {
            type: "table",
            head: ["Approach", "Result"],
            rows: [
              ["'Call for pricing'", "Constant price calls, most do not book"],
              ["One flat price", "Loses money on large or matted dogs"],
              ["Price by weight band", "Clear and mostly accurate"],
              ["Price by breed group", "Most accurate, easiest for owners to find themselves"],
            ],
          },
          {
            type: "callout",
            title: "Add the matting surcharge line",
            text: "'Severely matted coats may incur an additional charge, confirmed before we start.' It protects you and it is fair — and stating it upfront prevents the awkward conversation at pickup.",
          },
        ],
      },
      {
        heading: "What should be stated before booking?",
        body: [
          {
            type: "list",
            items: [
              "Vaccination requirements and what proof you need.",
              "Your policy on aggressive or extremely anxious dogs.",
              "Cancellation and no-show policy, since a missed slot is a lost afternoon.",
              "Roughly how long the appointment takes.",
              "Whether owners wait or drop off.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can clients book online?",
        answer:
          "Yes, through grooming-specific systems like Gingr, MoeGo or a general booking tool. We connect it so the calendar reflects real appointment lengths rather than fixed slots.",
      },
      {
        question: "Should we take a deposit?",
        answer:
          "Many groomers do, because no-shows are costly when an appointment is two hours. A card on file with a no-show fee is common and reasonable if stated clearly upfront.",
      },
      {
        question: "I am mobile. What changes?",
        answer:
          "The service area becomes primary information, and you need to state your on-site requirements — parking space, and whether you need power or water access.",
      },
    ],
    related: ["veterinary-clinic-website", "pet-store-website", "cleaning-service-website"],
  },

  {
    slug: "gift-shop-website",
    eyebrow: "Gift shops",
    title: "Gift shop website design",
    seoTitle: "Gift Shop Website Design | ROVQIX",
    description:
      "Websites for gift shops — what you stock, gift wrapping, local delivery, corporate gifting enquiries and seasonal hours.",
    excerpt: "What you stock, gift wrapping, and the corporate gifting nobody advertises.",
    primaryKeyword: "gift shop website design",
    secondaryKeywords: [
      "gift store website",
      "souvenir shop website",
      "card shop website design",
      "corporate gifting website",
    ],
    answer:
      "A gift shop website from ROVQIX costs $349 to $1,290 and takes about a week. It covers what you stock, gift wrapping and local delivery, corporate gifting enquiries and seasonal hours that stay accurate through the holiday period.",
    intro:
      "Gift shops make a disproportionate share of their year in about six weeks. The website should be built around that reality.",
    deliverables: [
      {
        title: "Seasonal hours",
        description:
          "Extended holiday hours updated by you, since this is when getting it wrong costs the most.",
        icon: "Clock",
      },
      {
        title: "What you stock",
        description:
          "Brands and categories, so someone hunting a specific maker can find you.",
        icon: "ShoppingBag",
      },
      {
        title: "Gift wrapping and delivery",
        description:
          "Whether you wrap, whether you deliver locally, and cut-off dates before major holidays.",
        icon: "Sparkles",
      },
      {
        title: "Corporate gifting",
        description:
          "Bulk and corporate enquiries, which most independent gift shops never advertise and could.",
        icon: "Building2",
      },
      {
        title: "Hold and reserve",
        description:
          "A simple request to hold an item, which suits gift buying well.",
        icon: "CalendarCheck",
      },
      {
        title: "Instagram feed",
        description:
          "New stock as it arrives, pulled in automatically so the site never looks neglected.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "How should the holiday period be handled?",
        answer:
          "With extended hours, delivery cut-offs and gift guides that you can turn on and off yourself.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Extended hours published early and kept accurate, including any late-night openings.",
              "Delivery and wrapping cut-off dates stated plainly, well before they arrive.",
              "A gift guide page you can enable seasonally — by price band works better than by category.",
              "Stock arrival notices, since regulars watch for specific products.",
              "Make sure your Google Business Profile hours match, because that is where most people check.",
            ],
          },
          {
            type: "callout",
            title: "Price-band gift guides work",
            text: "'Gifts under $25' and 'gifts under $50' get used far more than category browsing, because most gift shoppers start with a budget rather than a product idea.",
          },
        ],
      },
      {
        heading: "Is corporate gifting worth pursuing?",
        body: [
          {
            type: "p",
            text: "For most independent gift shops, yes, and almost none advertise it. A single corporate order of fifty items can equal a good trading day, with none of the individual-customer overhead.",
          },
          {
            type: "p",
            text: "A simple page stating that you do it, with a minimum order, wrapping and delivery options, and an enquiry form, is usually enough to start generating those enquiries.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need an online store?",
        answer:
          "Usually not, unless you have something distinctive people specifically seek out. Being findable, showing what you stock and offering local pickup or hold is enough for most gift shops.",
      },
      {
        question: "Can we update the site during the holiday rush?",
        answer:
          "Yes, that is designed in. Hours, gift guides and notices are all self-service, because in December you cannot wait on anyone else to change something.",
      },
      {
        question: "How do we compete with online retailers?",
        answer:
          "On curation, wrapping, local delivery and the fact that someone can get it today. The website's job is to make those advantages visible rather than trying to compete on price or range.",
      },
    ],
    related: ["boutique-retail-website", "florist-website", "jewelry-store-website"],
  },

  {
    slug: "jewelry-store-website",
    eyebrow: "Jewelry",
    title: "Jewelry store website design",
    seoTitle: "Jewelry Store Website Design | ROVQIX",
    description:
      "Websites for jewelers — collections, custom design and engagement consultations, repairs, appraisals and appointment booking.",
    excerpt: "Custom design consultations and repairs, presented as the services they are.",
    primaryKeyword: "jewelry store website design",
    secondaryKeywords: [
      "jeweler website design",
      "jewelry website design",
      "custom jewelry website",
      "engagement ring website",
    ],
    answer:
      "A jewelry store website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers collections, custom design and engagement ring consultations, repair and appraisal services, and appointment booking.",
    intro:
      "For an independent jeweler, the website's main job is booking consultations — not selling rings online against national retailers.",
    deliverables: [
      {
        title: "Consultation booking",
        description:
          "The main conversion. Engagement and custom work is decided in person, not in a cart.",
        icon: "CalendarCheck",
      },
      {
        title: "Custom design process",
        description:
          "How it works, how long it takes and roughly what it costs. Demystifies a process people find opaque.",
        icon: "Network",
      },
      {
        title: "Portfolio",
        description:
          "Previous custom pieces, which is what convinces someone to trust you with a significant purchase.",
        icon: "Images",
      },
      {
        title: "Repairs and appraisals",
        description:
          "Steady, high-margin work that most jewelry sites bury. It also brings people into the store.",
        icon: "Blocks",
      },
      {
        title: "Credentials",
        description:
          "Gemological qualifications and memberships, which matter for a high-value trust purchase.",
        icon: "BadgeCheck",
      },
      {
        title: "Security-aware design",
        description:
          "Presenting inventory without advertising exactly what is in the safe.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "Should an independent jeweler sell online?",
        answer:
          "Rarely for high-value pieces. Competing with national retailers on price and range is a losing position.",
        body: [
          {
            type: "list",
            items: [
              "Your advantage is custom work, expertise and being local — none of which sell through a cart.",
              "High-value online sales need trust signals and returns handling that are expensive to build.",
              "Lower-value giftable pieces can work online if you want the fulfilment work.",
              "For most independents, the site should book consultations rather than take orders.",
              "Repairs and appraisals convert online far better than ring sales do.",
            ],
          },
          {
            type: "callout",
            title: "Sell the consultation, not the ring",
            text: "Someone buying an engagement ring wants guidance. A site that offers a relaxed, no-pressure consultation will beat one that shows a grid of products with prices — because the customer does not yet know what they want.",
          },
        ],
      },
      {
        heading: "How should custom design be explained?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "The steps: consultation, design, approval, creation, fitting.",
              "How long each stage takes, and the total realistic timeline.",
              "What it costs, at least as a starting range.",
              "What happens with the customer's own stones or inherited pieces.",
              "Photos of the process, not just finished pieces — it makes the craft visible.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show prices?",
        answer:
          "Starting ranges for custom work and repairs, yes. Individual piece pricing is optional and many independents prefer to invite a conversation for high-value items.",
      },
      {
        question: "Is showing our inventory a security risk?",
        answer:
          "Present collections and styles rather than a live catalogue of exactly what is in the case. It is a reasonable precaution and it does not cost you anything commercially.",
      },
      {
        question: "Can customers book appointments online?",
        answer:
          "Yes, and it works particularly well for engagement consultations — people prefer booking a private appointment to walking in unprepared.",
      },
    ],
    related: ["boutique-retail-website", "gift-shop-website", "photographer-website"],
  },

  {
    slug: "pet-store-website",
    eyebrow: "Pet stores",
    title: "Pet store website design",
    seoTitle: "Pet Store Website Design | ROVQIX",
    description:
      "Websites for independent pet stores — brands stocked, local delivery, subscription food orders, services and events.",
    excerpt: "Which brands you stock, plus repeat food orders that keep customers loyal.",
    primaryKeyword: "pet store website design",
    secondaryKeywords: [
      "pet shop website",
      "pet supply store website",
      "independent pet store website",
      "pet food delivery website",
    ],
    answer:
      "A pet store website from ROVQIX costs $349 to $1,290 and takes about a week. The highest-value elements are the brands you stock, local delivery or repeat food ordering, in-store services, and events.",
    intro:
      "Independent pet stores compete with online subscriptions on price and lose. They win on specialist brands, advice and same-day availability — and the site should say so.",
    deliverables: [
      {
        title: "Brands stocked",
        description:
          "Specialist and prescription brands listed by name. This is the main search that finds you.",
        icon: "ShoppingBag",
      },
      {
        title: "Repeat food orders",
        description:
          "A standing order or reminder for regular food, which is how you keep customers off subscriptions.",
        icon: "RefreshCw",
      },
      {
        title: "Local delivery",
        description:
          "Same-day or next-day locally, which is the one thing national subscriptions cannot match.",
        icon: "Globe",
      },
      {
        title: "In-store services",
        description:
          "Grooming, nail trims, self-wash, nutrition advice. These bring people in repeatedly.",
        icon: "HeartPulse",
      },
      {
        title: "Events",
        description:
          "Adoption days, vaccination clinics, training classes. Community events drive independent retail.",
        icon: "CalendarCheck",
      },
      {
        title: "Advice content",
        description:
          "A few genuinely useful pages on feeding and care, which is your differentiator over online retail.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "How do independent pet stores compete with online subscriptions?",
        answer:
          "On specialist stock, immediate availability, expert advice and local delivery.",
        body: [
          {
            type: "list",
            items: [
              "List every specialist and prescription brand you carry — those are specific, high-intent searches.",
              "Offer same-day local delivery, which no national subscription can do.",
              "Set up a repeat order reminder so customers do not default to a subscription out of convenience.",
              "Make your nutrition advice visible; it is genuine expertise online retailers cannot provide.",
              "Use in-store services and events to build the habit of coming in.",
            ],
          },
          {
            type: "callout",
            title: "Brand names are the search",
            text: "People search for the exact food their vet recommended. If your site lists the brands you stock, you appear for those searches. Most independent pet store sites list none of them.",
          },
        ],
      },
      {
        heading: "Is a full online store worth it?",
        body: [
          {
            type: "p",
            text: "Usually not for the full catalogue. Pet food is heavy and low margin, so shipping economics are poor. Local delivery and pickup ordering for regular items is where the value is.",
          },
          {
            type: "p",
            text: "A simple 'order for pickup' or 'add to my regular order' beats a full ecommerce build for most independents, and takes a fraction of the effort to maintain.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we list prices?",
        answer:
          "For your main food lines, yes — customers are comparing against online prices anyway, and being close plus same-day availability often wins. For accessories it matters less.",
      },
      {
        question: "Can customers set up repeat orders?",
        answer:
          "Yes, at its simplest as a reminder and a one-tap reorder. That captures most of the convenience benefit of a subscription without the infrastructure.",
      },
      {
        question: "Do we need an online shop?",
        answer:
          "Probably not a full one. Local pickup and delivery ordering for regular items gives you most of the benefit with far less work and better economics.",
      },
    ],
    related: ["pet-grooming-website", "veterinary-clinic-website", "boutique-retail-website"],
  },
];

export const localFoodRetailPages = makeLocalPages(specs);
