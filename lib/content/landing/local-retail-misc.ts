import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/**
 * Remaining specialist retail and service trades. This file completes the
 * business-type coverage — before adding another, confirm it has a genuinely
 * different buying trigger from everything already here.
 */
const specs: LocalSpec[] = [
  {
    slug: "bike-shop-website",
    eyebrow: "Bike shops",
    title: "Bike shop website design",
    seoTitle: "Bike Shop Website Design | ROVQIX",
    description:
      "Websites for bike shops — brands stocked, service and repair pricing, workshop booking, and fitting services.",
    excerpt: "Brands stocked and service pricing — the two things riders check before visiting.",
    primaryKeyword: "bike shop website design",
    secondaryKeywords: [
      "bicycle shop website",
      "bike store web design",
      "cycle shop website",
      "bike repair website",
    ],
    answer:
      "A bike shop website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are the brands you stock, service and repair pricing, workshop booking with turnaround times, and any fitting services.",
    intro:
      "Cyclists research obsessively and search by brand. A shop that lists what it stocks gets found; one that says 'quality bicycles' does not.",
    deliverables: [
      {
        title: "Brands stocked",
        description:
          "Named brands for bikes, components and accessories. Riders search by brand, always.",
        icon: "ShoppingBag",
      },
      {
        title: "Service pricing",
        description:
          "Tune-up tiers, common repairs, and what each includes. Predictable and worth publishing.",
        icon: "Receipt",
      },
      {
        title: "Workshop booking",
        description:
          "With current turnaround time, which is the deciding factor in peak season.",
        icon: "CalendarCheck",
      },
      {
        title: "Bike fitting",
        description:
          "Your highest-value service if you offer it, and one riders specifically travel for.",
        icon: "Users",
      },
      {
        title: "Rental and demo",
        description:
          "If you rent or demo, pricing and availability — often a significant seasonal revenue line.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "Why list brands by name?",
        answer:
          "Because a rider searching for a specific bike or component will only find shops that name it.",
        body: [
          {
            type: "list",
            items: [
              "Bike brands you are a dealer for, which is often an exclusive local relationship.",
              "Component brands you stock and service, since drivetrain compatibility matters.",
              "Accessory and clothing brands, which drive walk-in traffic.",
              "Any brands you are an authorised service centre for, which matters for warranty work.",
              "E-bike brands specifically, since that is a growing and heavily researched category.",
            ],
          },
          {
            type: "callout",
            title: "Brand pages are how independents get found",
            text: "You cannot outrank the national retailers for 'buy a bike'. You can absolutely rank for a specific brand plus your town, which is what a serious buyer actually searches.",
          },
        ],
      },
      {
        heading: "How should the workshop be presented?",
        body: [
          {
            type: "p",
            text: "As a tiered service menu with prices and what each tier includes — basic tune, full service, overhaul. Riders understand this format and it stops the phone calls.",
          },
          {
            type: "p",
            text: "Show current turnaround time and update it seasonally. In spring, a shop advertising a three-day turnaround wins work from one quoting two weeks, and that is worth being honest about.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we sell bikes online?",
        answer:
          "Usually not. Shipping bikes is expensive and assembly matters. Listing what you stock so people come in to see it works far better for an independent shop.",
      },
      {
        question: "Is e-bike content worth adding?",
        answer:
          "Yes. E-bikes are heavily researched before purchase and involve questions about range, battery and servicing that buyers want answered before they visit.",
      },
      {
        question: "Do we need a page for fitting?",
        answer:
          "If you offer proper fitting, yes. It is a high-value service with its own distinct search, and riders travel considerable distances for a good fitter.",
      },
    ],
    related: ["boutique-retail-website", "hardware-store-website", "gym-and-fitness-studio-website"],
  },

  {
    slug: "hardware-store-website",
    eyebrow: "Hardware stores",
    title: "Hardware store website design",
    seoTitle: "Hardware Store Website Design | ROVQIX",
    description:
      "Websites for independent hardware stores — departments and brands, services like key cutting, trade accounts and hours.",
    excerpt: "What you stock and the services big-box stores do not offer.",
    primaryKeyword: "hardware store website design",
    secondaryKeywords: [
      "hardware shop website",
      "independent hardware store website",
      "tool store website design",
      "building supplies website",
    ],
    answer:
      "A hardware store website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your departments and brands, in-store services like key cutting and paint mixing, trade accounts, and accurate hours.",
    intro:
      "An independent hardware store cannot compete with big-box on range or price. It competes on advice, services and being open when you need one bolt.",
    deliverables: [
      {
        title: "Departments and brands",
        description:
          "What you carry, by department, with named brands. Helps people know it is worth the trip.",
        icon: "ShoppingBag",
      },
      {
        title: "In-store services",
        description:
          "Key cutting, paint mixing, screen repair, tool sharpening, propane. Your real advantage.",
        icon: "Blocks",
      },
      {
        title: "Trade accounts",
        description:
          "Contractor pricing and accounts, which is steady high-value revenue most stores under-promote.",
        icon: "Building2",
      },
      {
        title: "Accurate hours",
        description:
          "Including weekends and holidays. Being open when big-box is not is a genuine selling point.",
        icon: "Clock",
      },
      {
        title: "Advice content",
        description:
          "A few genuinely useful how-to pages, which is the expertise big-box cannot offer.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "How does an independent compete with big-box?",
        answer:
          "On services, advice, convenience and trade relationships — never on range or price.",
        body: [
          {
            type: "table",
            head: ["Your advantage", "How the site shows it"],
            rows: [
              ["Staff who know things", "Advice pages and named staff"],
              ["Services", "Key cutting, paint mixing, sharpening listed"],
              ["Speed", "In and out in five minutes, not forty"],
              ["Trade relationships", "Account pricing and delivery"],
              ["Local stock", "Brands and departments listed"],
              ["Open early or late", "Accurate, prominent hours"],
            ],
          },
          {
            type: "callout",
            title: "Services are the reason to visit",
            text: "Nobody drives past a big-box store for a hammer. They do it for a key cut, paint matched or a chain sharpened. Those services deserve to be prominent, not buried.",
          },
        ],
      },
      {
        heading: "Is an online store worth it?",
        body: [
          {
            type: "p",
            text: "Almost never for a hardware store. The catalogue is enormous, margins are thin and shipping is impractical for most of it.",
          },
          {
            type: "p",
            text: "What does work is a simple 'do you have this in stock' enquiry and clear information about departments and services, so people know the trip is worth making.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we list our full inventory?",
        answer:
          "No — it is unmaintainable and nobody expects it. Departments, key brands and services is exactly the right level of detail.",
      },
      {
        question: "Are trade accounts worth promoting?",
        answer:
          "Yes, and most independents barely mention them. Contractors are steady, high-volume customers and a page explaining account terms and delivery brings them in.",
      },
      {
        question: "Do we need a blog?",
        answer:
          "Not a blog, but a handful of genuinely useful how-to pages tied to what you sell earns steady search traffic and shows the expertise that differentiates you.",
      },
    ],
    related: ["garden-center-website", "boutique-retail-website", "handyman-website"],
  },

  {
    slug: "garden-center-website",
    eyebrow: "Garden centers",
    title: "Garden center and nursery website design",
    seoTitle: "Garden Center & Nursery Website Design | ROVQIX",
    description:
      "Websites for garden centers — what is in stock this season, plant care guides, seasonal events and delivery information.",
    excerpt: "What is in season now, plus care guides that bring people back.",
    primaryKeyword: "garden center website design",
    secondaryKeywords: [
      "nursery website design",
      "plant nursery website",
      "garden centre web design",
      "landscape supply website",
    ],
    answer:
      "A garden center website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are current seasonal stock, plant care guidance, seasonal events and workshops, and delivery or bulk material information.",
    intro:
      "Garden centers are the most seasonal retail there is. The website has to change with the season or it actively misinforms people.",
    deliverables: [
      {
        title: "What is in season now",
        description:
          "Updatable by you weekly. The main reason customers check before driving out.",
        icon: "RefreshCw",
      },
      {
        title: "Plant care guides",
        description:
          "Genuinely useful advice for your climate zone, which earns steady search traffic year-round.",
        icon: "FileText",
      },
      {
        title: "Seasonal events",
        description:
          "Workshops, planting days, holiday displays. Events drive footfall in a way stock lists do not.",
        icon: "CalendarCheck",
      },
      {
        title: "Bulk materials",
        description:
          "Mulch, soil, stone — pricing by yard and delivery. Higher value than plants and often hidden.",
        icon: "Receipt",
      },
      {
        title: "Delivery information",
        description:
          "What you deliver, where, and what it costs. Especially relevant for trees and bulk goods.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "Why do care guides work so well here?",
        answer:
          "Because people search plant problems constantly, and those searches happen year-round when your stock pages are dormant.",
        body: [
          {
            type: "list",
            items: [
              "Write for your specific climate zone, which national gardening sites cannot do.",
              "Cover the plants you actually sell, so the advice leads back to your stock.",
              "Answer the common failures — overwatering, wrong light, frost timing for your area.",
              "Include local planting calendars, which are highly searched and genuinely local.",
              "These pages bring traffic in January when nobody is browsing your seasonal stock.",
            ],
          },
          {
            type: "callout",
            title: "Local beats general",
            text: "'When to plant tomatoes' is a national search you will not win. 'When to plant tomatoes in [your area]' is one you can own, and it reaches exactly the customer who will visit in spring.",
          },
        ],
      },
      {
        heading: "How do you handle extreme seasonality?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Build the home page so you can swap the seasonal focus yourself in minutes.",
              "Keep care guides live year-round — they are your off-season traffic.",
              "Promote the next season before it arrives, when people are planning.",
              "Use events to create reasons to visit in quieter months.",
              "Update hours seasonally, since many centers reduce them in winter.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we list every plant we stock?",
        answer:
          "No — it changes weekly and would be unmaintainable. A seasonal highlights section you update yourself, plus categories, is the right level.",
      },
      {
        question: "Are workshops worth promoting?",
        answer:
          "Very. They bring people in during quiet periods, build community and generate incidental sales. They are one of the most under-used assets a garden center has.",
      },
      {
        question: "Should we sell plants online?",
        answer:
          "Rarely worth it — shipping live plants is difficult and expensive. Local delivery for bulk materials and larger items is a much better fit.",
      },
    ],
    related: ["hardware-store-website", "landscaping-company-website", "florist-website"],
  },

  {
    slug: "butcher-shop-website",
    eyebrow: "Butchers",
    title: "Butcher shop website design",
    seoTitle: "Butcher Shop Website Design | ROVQIX",
    description:
      "Websites for butchers — cuts and sourcing, custom orders, holiday pre-orders, bulk and freezer packs, and collection.",
    excerpt: "Sourcing, custom orders and the holiday pre-orders that make your year.",
    primaryKeyword: "butcher shop website design",
    secondaryKeywords: [
      "butcher website",
      "meat shop website design",
      "local butcher website",
      "custom meat processing website",
    ],
    answer:
      "A butcher shop website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your cuts and sourcing, custom order requests, holiday pre-orders, bulk and freezer packs, and collection details.",
    intro:
      "Butchers compete with supermarkets on sourcing and skill. Both need explaining on the website, because the price difference does not explain itself.",
    deliverables: [
      {
        title: "Sourcing",
        description:
          "Which farms, how the animals are raised, how far it travelled. This justifies your price.",
        icon: "Network",
      },
      {
        title: "Cuts available",
        description:
          "What you carry and what you can cut to order, including the unusual cuts people seek out.",
        icon: "ShoppingBag",
      },
      {
        title: "Custom orders",
        description:
          "Special cuts, whole birds, dry-aged, specific weights. Requestable ahead rather than by phone.",
        icon: "ClipboardList",
      },
      {
        title: "Holiday pre-orders",
        description:
          "Thanksgiving and Christmas, with cut-off dates. A disproportionate share of annual revenue.",
        icon: "CalendarCheck",
      },
      {
        title: "Bulk and freezer packs",
        description:
          "Quarter and half animal, or curated boxes. High-value orders that need explaining.",
        icon: "Receipt",
      },
    ],
    sections: [
      {
        heading: "Why does sourcing need its own section?",
        answer:
          "Because it is the entire justification for costing more than the supermarket.",
        body: [
          {
            type: "list",
            items: [
              "Name the farms, with photos if you can. Specificity is what makes it credible.",
              "Explain how the animals are raised — grass-fed, pasture-raised, or whatever is true.",
              "State the distance, since local sourcing is a real differentiator.",
              "Explain dry-aging if you do it, which most customers do not understand but will pay for.",
              "Be honest about what is not local. Overclaiming here damages trust badly.",
            ],
          },
          {
            type: "callout",
            title: "Specificity is the whole argument",
            text: "'Locally sourced quality meat' means nothing. 'Beef from Henderson Farm, 22 miles away, grass-fed and dry-aged 28 days in our own cooler' is worth twice the supermarket price and the customer can see why.",
          },
        ],
      },
      {
        heading: "How should holiday pre-orders work?",
        body: [
          {
            type: "p",
            text: "As a page you can switch on and off, with cut-off dates, size options, deposit and collection slots. Thanksgiving and Christmas are where a large share of the year's profit sits.",
          },
          {
            type: "p",
            text: "Build it so you can set the cut-off and close orders yourself when you hit capacity, because that timing changes every year and depends on supply.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we take payment for pre-orders online?",
        answer:
          "A deposit works well and reduces no-shows on holiday orders, which are costly when you have already bought the birds. Full payment on collection is fine for the balance.",
      },
      {
        question: "Should we publish prices?",
        answer:
          "Prices move with the market, so many butchers show a representative price list with a note that it varies. Bulk and freezer packs should definitely be priced, since those are considered purchases.",
      },
      {
        question: "Is delivery worth offering?",
        answer:
          "Local delivery for bulk orders often is. Shipping fresh meat properly is expensive and risky, and rarely worth it for an independent shop.",
      },
    ],
    related: ["bakery-website", "boutique-retail-website", "restaurant-website"],
  },

  {
    slug: "liquor-store-website",
    eyebrow: "Liquor stores",
    title: "Liquor store website design",
    seoTitle: "Liquor Store Website Design | ROVQIX",
    description:
      "Websites for liquor stores — what you stock, special orders, tastings and events, local delivery and age verification.",
    excerpt: "Range, special orders and events — plus age verification handled properly.",
    primaryKeyword: "liquor store website design",
    secondaryKeywords: [
      "wine shop website design",
      "bottle shop website",
      "beer store website",
      "spirits retailer website",
    ],
    answer:
      "A liquor store website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your range and specialisms, special order requests, tastings and events, local delivery where permitted, and age verification.",
    intro:
      "Independent bottle shops compete on curation and knowledge. The website's job is to show you have both, and to handle the compliance properly.",
    deliverables: [
      {
        title: "Range and specialisms",
        description:
          "Natural wine, craft beer, rare whiskey, whatever you are actually known for.",
        icon: "ShoppingBag",
      },
      {
        title: "Special orders",
        description:
          "Requesting a specific bottle. Something no supermarket offers and customers value highly.",
        icon: "ClipboardList",
      },
      {
        title: "Tastings and events",
        description:
          "Your community-building engine and a genuine reason to visit rather than order online.",
        icon: "CalendarCheck",
      },
      {
        title: "Age verification",
        description:
          "Handled properly, as required for alcohol retail, without wrecking the experience.",
        icon: "ShieldCheck",
      },
      {
        title: "Local delivery",
        description:
          "Where your state permits it, with the area, minimum order and ID-on-delivery policy.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "How do independents compete with big retailers?",
        answer:
          "On curation, staff knowledge, special orders and events — never on price or range.",
        body: [
          {
            type: "list",
            items: [
              "Show your specialism clearly rather than trying to look like you stock everything.",
              "Publish staff picks with actual tasting notes, which demonstrates knowledge.",
              "Offer special orders prominently — it is a service the big stores will not do.",
              "Run and promote tastings, which build a community that shops with you out of loyalty.",
              "Highlight local and small producers, which is where the interesting margin is anyway.",
            ],
          },
          {
            type: "callout",
            title: "Curation is the product",
            text: "Nobody visits an independent bottle shop for the cheapest vodka. They come because someone chose the shelf carefully. The website should make that choosing visible.",
          },
        ],
      },
      {
        heading: "What are the compliance considerations?",
        body: [
          {
            type: "list",
            items: [
              "Age verification on entry, which is standard for alcohol retail sites.",
              "State rules on advertising alcohol, which vary considerably.",
              "Shipping laws, which are restrictive and differ by state — many prohibit it entirely.",
              "Delivery rules, including ID checks at the door where delivery is permitted.",
              "Restrictions on promoting discounts, which some states limit.",
            ],
          },
          {
            type: "p",
            text: "We build to what your state licensing requires. Confirm the specifics with your regulator or attorney — the rules differ enough that generic advice is not safe here.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we sell online?",
        answer:
          "It depends entirely on your state. Local pickup ordering is far simpler and permitted almost everywhere. Interstate shipping of spirits is heavily restricted and often prohibited.",
      },
      {
        question: "Do we need an age gate?",
        answer:
          "Generally yes for an alcohol retail site. We implement it so it does not damage the browsing experience or your search visibility.",
      },
      {
        question: "Should we list our full inventory?",
        answer:
          "No. Your specialisms, staff picks and new arrivals are what people want. Full inventory changes constantly and nobody expects it from an independent.",
      },
    ],
    related: ["bar-and-brewery-website", "boutique-retail-website", "butcher-shop-website"],
  },

  {
    slug: "laundromat-website",
    eyebrow: "Laundromats",
    title: "Laundromat website design",
    seoTitle: "Laundromat Website Design | ROVQIX",
    description:
      "Websites for laundromats — machine sizes and prices, hours, wash and fold service, card systems and amenities.",
    excerpt: "Prices, hours and machine sizes. One of the simplest useful sites there is.",
    primaryKeyword: "laundromat website design",
    secondaryKeywords: [
      "laundromat website",
      "coin laundry website design",
      "wash and fold website",
      "laundry business website",
    ],
    answer:
      "A laundromat website from ROVQIX costs $349 to $549 and takes about a week. The essentials are machine sizes and prices, opening hours, wash and fold service, payment methods and amenities like wifi and parking.",
    intro:
      "Laundromat customers want three facts: what it costs, when you are open, and whether the big machines are there. That is a one-page site.",
    deliverables: [
      {
        title: "Machine sizes and prices",
        description:
          "Washer capacities and prices, plus dryer rates. The main reason people check before driving over.",
        icon: "Receipt",
      },
      {
        title: "Hours",
        description:
          "Including last wash time, which is different from closing time and constantly confuses people.",
        icon: "Clock",
      },
      {
        title: "Wash and fold",
        description:
          "Your higher-margin service, priced by pound with turnaround time.",
        icon: "RefreshCw",
      },
      {
        title: "Payment methods",
        description:
          "Coin, card, app. Increasingly a deciding factor, since fewer people carry quarters.",
        icon: "CreditCard",
      },
      {
        title: "Amenities",
        description:
          "Wifi, seating, parking, attendant on duty, security. Matters for a two-hour visit.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "What do laundromat customers check?",
        answer:
          "Price, hours, machine sizes and whether they need quarters.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Do you have machines big enough for a comforter? This is the most common specific search.",
              "What does a standard load cost, washer and dryer?",
              "When is the last wash accepted, not just when you close?",
              "Can they pay by card or app, or do they need coins?",
              "Is there an attendant, and is it safe late at night?",
              "Is there parking, and is it free?",
            ],
          },
          {
            type: "callout",
            title: "Large machines are a searched feature",
            text: "'Laundromat with large washers near me' is a real and frequent search, driven by people with comforters and sleeping bags. If you have them, say so with the capacity in pounds.",
          },
        ],
      },
      {
        heading: "Is wash and fold worth promoting?",
        body: [
          {
            type: "p",
            text: "Yes — it is considerably higher margin than self-service and many customers do not realise laundromats offer it. Price per pound, minimum order and turnaround are all people need.",
          },
          {
            type: "p",
            text: "Pickup and delivery, where you offer it, is worth its own prominence. It reaches a completely different customer who would never visit in person.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need more than one page?",
        answer:
          "Usually not. Prices, hours, machines, services and location fit comfortably on one page. Add a second only if you have a substantial wash-and-fold or delivery operation.",
      },
      {
        question: "Should we list exact machine prices?",
        answer:
          "Yes. It is the main thing people check and it is stable enough to publish. Update it when you change rates.",
      },
      {
        question: "What matters most for getting customers?",
        answer:
          "Your Google Business Profile with correct hours, real photos of clean machines, and reviews. Cleanliness and safety are what people judge, and photos communicate both.",
      },
    ],
    related: ["dry-cleaner-website", "cleaning-service-website", "self-storage-website"],
  },

  {
    slug: "tanning-salon-website",
    eyebrow: "Tanning salons",
    title: "Tanning and spray tan salon website design",
    seoTitle: "Tanning Salon Website Design | ROVQIX",
    description:
      "Websites for tanning salons — package and membership pricing, bed types, spray tan services, booking and safety information.",
    excerpt: "Memberships, bed types and honest safety information.",
    primaryKeyword: "tanning salon website design",
    secondaryKeywords: [
      "tanning studio website",
      "spray tan website design",
      "sunbed salon website",
      "airbrush tanning website",
    ],
    answer:
      "A tanning salon website from ROVQIX costs $349 to $1,290 and takes about a week. It covers package and membership pricing, bed types and levels, spray tan services, online booking and required safety information.",
    intro:
      "Tanning is a membership business. The website should sell the monthly package, and it needs to handle safety messaging responsibly.",
    deliverables: [
      {
        title: "Memberships and packages",
        description:
          "Monthly unlimited and session packages, with the break-even made obvious.",
        icon: "RefreshCw",
      },
      {
        title: "Bed types and levels",
        description:
          "What each level offers and who it suits. Customers do not understand the tiers otherwise.",
        icon: "Blocks",
      },
      {
        title: "Spray tan services",
        description:
          "A separate offering with different customers, often people who avoid UV entirely.",
        icon: "Sparkles",
      },
      {
        title: "Online booking",
        description:
          "With session lengths, since bed time varies by level and skin type.",
        icon: "CalendarCheck",
      },
      {
        title: "Safety information",
        description:
          "Skin type guidance, eyewear requirements and exposure limits, handled responsibly.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "How should safety be handled?",
        answer:
          "Factually and without minimising. UV tanning is regulated and overclaiming benefits is a real risk.",
        body: [
          {
            type: "list",
            items: [
              "State eyewear requirements clearly — they are mandatory and non-negotiable.",
              "Explain skin type assessment and recommended starting exposure.",
              "State age restrictions, which vary by state and are strictly enforced in many.",
              "Do not claim health benefits from UV exposure. It is a regulatory risk.",
              "Include any warnings your state requires to be displayed.",
            ],
          },
          {
            type: "callout",
            title: "Check your state's requirements",
            text: "Tanning is regulated differently in every state — age limits, warning notices, parental consent. We build what your compliance guidance specifies rather than assuming a general standard.",
          },
        ],
      },
      {
        heading: "How do you sell memberships?",
        body: [
          {
            type: "p",
            text: "Show the single session price next to the monthly unlimited, and state the break-even — 'pays for itself after three sessions'. That comparison does most of the selling.",
          },
          {
            type: "p",
            text: "Be clear about cancellation terms. This industry has a poor reputation for hard-to-cancel memberships, and being upfront converts better than hiding it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we promote spray tanning separately?",
        answer:
          "Yes. Spray tan customers are often specifically avoiding UV, so a page that speaks to them directly reaches a market the UV pages would put off.",
      },
      {
        question: "Can we make health claims about UV exposure?",
        answer:
          "No. Claims about vitamin D or health benefits from tanning beds attract regulatory attention. Describe the service, not medical benefits.",
      },
      {
        question: "Can clients book online?",
        answer:
          "Yes, with the correct session length per bed level. Salon booking systems handle this well and it reduces desk time considerably.",
      },
    ],
    related: ["day-spa-website", "med-spa-website", "nail-salon-website"],
  },

  {
    slug: "lash-and-brow-website",
    eyebrow: "Lash & brow",
    title: "Lash and brow studio website design",
    seoTitle: "Lash & Brow Studio Website Design | ROVQIX",
    description:
      "Websites for lash and brow specialists — service menu with fills, before and after gallery, aftercare, patch testing and booking.",
    excerpt: "Fill pricing, a strong gallery, and the aftercare that protects your work.",
    primaryKeyword: "lash studio website design",
    secondaryKeywords: [
      "eyelash extension website",
      "brow bar website design",
      "lash technician website",
      "microblading website design",
    ],
    answer:
      "A lash and brow studio website from ROVQIX costs $349 to $1,290 and takes about a week. It covers the service menu including fill pricing and timing, a before and after gallery, aftercare instructions, patch testing requirements and online booking.",
    intro:
      "Lash businesses live on fills. The website needs to make the fill schedule obvious, because that is what turns a one-off into a regular.",
    deliverables: [
      {
        title: "Full set and fill pricing",
        description:
          "Both, with the fill window stated. Fills are the recurring revenue and are often unclear.",
        icon: "Receipt",
      },
      {
        title: "Before and after gallery",
        description:
          "By style — classic, hybrid, volume. Clients choose visually and cannot picture the terms.",
        icon: "Images",
      },
      {
        title: "Aftercare",
        description:
          "A page you can point every client to, which protects retention and reduces complaints.",
        icon: "FileText",
      },
      {
        title: "Patch testing",
        description:
          "Requirements and timing, which is a genuine safety step and often missed on booking.",
        icon: "ShieldCheck",
      },
      {
        title: "Appointment lengths",
        description:
          "A full set takes hours. Clients need to know before booking a lunch break.",
        icon: "Clock",
      },
    ],
    sections: [
      {
        heading: "Why make fills so prominent?",
        answer:
          "Because a client who does not understand the fill schedule becomes a one-off instead of a regular.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "State the fill window clearly — typically two to three weeks.",
              "Price fills by how long since the last appointment, since more regrowth means more work.",
              "Explain what happens if they leave it too long and it becomes a full set again.",
              "Make rebooking easy at the point of the first booking.",
              "Send a reminder before the fill window closes, which is the single best retention tool.",
            ],
          },
          {
            type: "callout",
            title: "The fill window is a retention mechanism",
            text: "Clients who miss the window pay full-set prices again and often do not rebook. Making the schedule obvious on the site and in reminders is worth more than any marketing.",
          },
        ],
      },
      {
        heading: "Why does aftercare deserve a page?",
        body: [
          {
            type: "p",
            text: "Because poor aftercare makes your work look bad. Lashes that fall out early because a client used an oil cleanser reflect on you, not on them.",
          },
          {
            type: "p",
            text: "A clear page you can text to every client after their appointment protects retention, reduces complaints and shows professionalism that justifies premium pricing.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we require patch testing?",
        answer:
          "It is strongly advisable for adhesive and tint services, and required in some jurisdictions. State the requirement and timing clearly at booking so nobody arrives unable to be treated.",
      },
      {
        question: "How should we price fills?",
        answer:
          "By time since the last appointment — two weeks, three weeks, and beyond. It is fair, it reflects the actual work, and it encourages timely rebooking.",
      },
      {
        question: "Do we need separate pages for microblading?",
        answer:
          "Yes if you offer it. It is a semi-permanent, higher-commitment service with its own search demand, healing process and aftercare requirements.",
      },
    ],
    related: ["nail-salon-website", "hair-salon-website", "med-spa-website"],
  },

  {
    slug: "swim-school-website",
    eyebrow: "Swim schools",
    title: "Swim school website design",
    seoTitle: "Swim School Website Design | ROVQIX",
    description:
      "Websites for swim schools — class levels by age and ability, term enrolment, safety and ratios, pricing and instructor credentials.",
    excerpt: "Levels by age and ability, ratios, and enrolment that fills your terms.",
    primaryKeyword: "swim school website design",
    secondaryKeywords: [
      "swimming lessons website",
      "swim lesson website design",
      "learn to swim website",
      "aquatic center website",
    ],
    answer:
      "A swim school website from ROVQIX costs $349 to $1,290 and takes about a week. It covers class levels by age and ability, term enrolment and waitlists, instructor-to-student ratios, safety credentials and pricing.",
    intro:
      "Swim lessons are bought by anxious parents. Ratios, safety and instructor qualifications matter more than anything else on the page.",
    deliverables: [
      {
        title: "Levels by age and ability",
        description:
          "Parents need to find their child's level quickly, and the naming is rarely self-explanatory.",
        icon: "Network",
      },
      {
        title: "Ratios stated",
        description:
          "Instructor to student numbers per level. The first thing careful parents check.",
        icon: "Users",
      },
      {
        title: "Safety and credentials",
        description:
          "Lifeguard cover, instructor certification and background checks, stated plainly.",
        icon: "ShieldCheck",
      },
      {
        title: "Term enrolment and waitlists",
        description:
          "Enrolment windows and waitlist signup, since good swim schools are usually full.",
        icon: "CalendarCheck",
      },
      {
        title: "Practical details",
        description:
          "Water temperature, changing facilities, parent viewing, what to bring. Constantly asked.",
        icon: "ClipboardList",
      },
    ],
    sections: [
      {
        heading: "What do parents check first?",
        answer:
          "Ratios, instructor qualifications and whether there is a lifeguard as well as the teacher.",
        body: [
          {
            type: "list",
            items: [
              "Instructor-to-student ratio for each level, as numbers not adjectives.",
              "Whether a separate lifeguard is on duty during lessons.",
              "Instructor certifications and background check status.",
              "Water temperature, which matters enormously for young children.",
              "Whether parents can watch, and from where.",
              "What happens if a child is frightened or will not get in.",
            ],
          },
          {
            type: "callout",
            title: "Ratios are the differentiator",
            text: "A school teaching four-to-one and one teaching eight-to-one are different products. Publishing the number lets parents make an informed choice and justifies a higher price.",
          },
        ],
      },
      {
        heading: "How should enrolment be handled?",
        body: [
          {
            type: "p",
            text: "With clear term dates, an enrolment window and an honest waitlist. Good swim schools are usually full, and pretending otherwise wastes everyone's time.",
          },
          {
            type: "p",
            text: "A waitlist signup captures demand you would otherwise lose entirely, and it tells you which levels and times to add next term.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish our ratios?",
        answer:
          "Yes. It is the main quality differentiator in swim teaching and the thing careful parents specifically compare. If yours are good, it is your strongest selling point.",
      },
      {
        question: "Can parents enrol online?",
        answer:
          "Yes, through a class management system. Waitlist signup is equally important, since most schools operate near capacity.",
      },
      {
        question: "Do we need a page per level?",
        answer:
          "Not per level, but a clear levels page explaining what each stage covers and what age it suits. Parents genuinely cannot decode swim level names on their own.",
      },
    ],
    related: ["daycare-website", "martial-arts-school-website", "dance-studio-website"],
  },

  {
    slug: "acupuncture-clinic-website",
    eyebrow: "Acupuncture",
    title: "Acupuncture clinic website design",
    seoTitle: "Acupuncture Clinic Website Design | ROVQIX",
    description:
      "Websites for acupuncture clinics — conditions treated, session pricing, insurance, practitioner credentials and booking.",
    excerpt: "Conditions treated, session pricing and insurance — with claims kept compliant.",
    primaryKeyword: "acupuncture website design",
    secondaryKeywords: [
      "acupuncturist website",
      "chinese medicine clinic website",
      "acupuncture clinic web design",
      "holistic health website design",
    ],
    answer:
      "An acupuncture clinic website from ROVQIX costs $349 to $1,290 and takes about a week. It covers conditions people commonly seek treatment for, session pricing and packages, insurance coverage, practitioner licensing and online booking.",
    intro:
      "Acupuncture websites need to be welcoming to sceptical first-timers while keeping health claims within what regulators allow.",
    deliverables: [
      {
        title: "Conditions people seek treatment for",
        description:
          "Framed as what patients come for, rather than as claims about what it cures.",
        icon: "Network",
      },
      {
        title: "Session pricing",
        description:
          "Initial consultation and follow-ups, plus packages. Patients cannot compare without it.",
        icon: "Receipt",
      },
      {
        title: "Insurance coverage",
        description:
          "Which plans cover acupuncture, which surprises many patients who assume none do.",
        icon: "ShieldCheck",
      },
      {
        title: "Practitioner licensing",
        description:
          "State licensure and training, which matters in a field patients are unsure how to assess.",
        icon: "BadgeCheck",
      },
      {
        title: "First visit information",
        description:
          "Does it hurt, how many needles, how long. The questions nervous first-timers will not ask.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "How should treatment claims be worded?",
        answer:
          "Describe what patients seek treatment for and what typically happens, not what it cures.",
        body: [
          {
            type: "table",
            head: ["Risky", "Safer"],
            rows: [
              ["Cures chronic pain", "Commonly sought for chronic pain management"],
              ["Treats infertility", "Patients often use acupuncture alongside fertility treatment"],
              ["Eliminates migraines", "Frequently sought for headache and migraine symptoms"],
              ["Guaranteed results", "Response varies; most patients are assessed over several sessions"],
            ],
          },
          {
            type: "callout",
            title: "Build to your board's guidance",
            text: "State acupuncture boards and the FTC both have views on health claims. We write to the guidance your licensing body provides and flag wording that looks like a common risk area.",
          },
        ],
      },
      {
        heading: "How do you reassure a nervous first-timer?",
        body: [
          {
            type: "list",
            items: [
              "Answer whether it hurts, honestly and specifically.",
              "Explain needle size and sterility — most people picture something far larger.",
              "Say how long a session takes and what happens during it.",
              "Explain how many sessions are typically needed, which manages expectations.",
              "Show the treatment room, which is more reassuring than any description.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we list conditions we treat?",
        answer:
          "List what patients commonly seek treatment for, worded carefully. It is how people search, but the framing matters for compliance.",
      },
      {
        question: "Does insurance cover acupuncture?",
        answer:
          "Increasingly, some plans do, particularly for pain. Many patients assume it never is. Listing accepted plans is a genuine differentiator.",
      },
      {
        question: "Should we publish session prices?",
        answer:
          "Yes, including the initial consultation which is usually longer and more expensive. Patients compare and cannot do so without numbers.",
      },
    ],
    related: ["chiropractor-website", "counselling-practice-website", "nutritionist-website"],
  },

  {
    slug: "senior-care-website",
    eyebrow: "Senior care",
    title: "Home care and senior care website design",
    seoTitle: "Senior Home Care Website Design | ROVQIX",
    description:
      "Websites for home care agencies — services and care levels, pricing, caregiver vetting, licensing and a highly accessible design.",
    excerpt: "Care levels, caregiver vetting and pricing — for a family making a hard decision.",
    primaryKeyword: "home care website design",
    secondaryKeywords: [
      "senior care agency website",
      "in home care website",
      "caregiver agency website design",
      "elder care website",
    ],
    answer:
      "A home care agency website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers services and care levels, hourly and live-in pricing, caregiver vetting and training, state licensing, and a design built for older users and stressed families.",
    intro:
      "The person choosing home care is usually an adult child, worried and researching quickly. Everything should reduce that anxiety with concrete facts.",
    deliverables: [
      {
        title: "Services and care levels",
        description:
          "Companionship through personal care and dementia support. Families do not know the distinctions.",
        icon: "Network",
      },
      {
        title: "Pricing",
        description:
          "Hourly rates, minimum hours and live-in pricing. Families need to plan and cannot without it.",
        icon: "Receipt",
      },
      {
        title: "Caregiver vetting",
        description:
          "Background checks, training and supervision. The single biggest concern families have.",
        icon: "BadgeCheck",
      },
      {
        title: "Licensing and insurance",
        description:
          "State licensing, bonding and insurance, which families are advised to verify.",
        icon: "ShieldCheck",
      },
      {
        title: "Highly accessible design",
        description:
          "Large text and high contrast, since some visitors are the seniors themselves.",
        icon: "Accessibility",
      },
    ],
    sections: [
      {
        heading: "What does a family need to know?",
        answer:
          "Who is coming into the house, what it costs, and what happens if it is not working.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "How caregivers are screened — background checks, references, training, licensing.",
              "Whether the same caregiver comes each time, which matters enormously for dementia care.",
              "Hourly rates, minimum hours per visit, and live-in pricing.",
              "What happens if a caregiver is sick or the family wants a change.",
              "How care is supervised and how often the plan is reviewed.",
              "Whether any of it is covered by long-term care insurance or Medicaid.",
            ],
          },
          {
            type: "callout",
            title: "Caregiver continuity is the deciding factor",
            text: "Families care more about seeing the same person each visit than about almost anything else, particularly with dementia. If you can offer continuity, say so prominently — most agencies never mention it.",
          },
        ],
      },
      {
        heading: "Why does accessibility matter especially here?",
        body: [
          {
            type: "p",
            text: "Because a share of your visitors are the seniors themselves, often with vision impairment, and another share are adult children reading on a phone during a stressful week.",
          },
          {
            type: "list",
            items: [
              "Large default text and strong contrast.",
              "Simple navigation with few choices.",
              "A phone number visible on every screen.",
              "Plain language with no industry jargon.",
              "Printable information a family can share with a relative who is not online.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish hourly rates?",
        answer:
          "Yes, at least a range with minimum hours. Families are budgeting for something they did not plan, and agencies that publish nothing get excluded from consideration.",
      },
      {
        question: "How much should we say about caregiver screening?",
        answer:
          "As much detail as you can. It is the primary concern and specifics — the exact checks, the training hours, the supervision schedule — are far more reassuring than 'carefully vetted'.",
      },
      {
        question: "Do we need to mention payment sources?",
        answer:
          "Yes. Long-term care insurance, veterans benefits and Medicaid waivers are all possible and families frequently do not know. It is genuinely helpful information.",
      },
    ],
    related: ["medical-practice-website", "daycare-website", "cleaning-service-website"],
  },

  {
    slug: "chimney-sweep-website",
    eyebrow: "Chimney sweeps",
    title: "Chimney sweep and fireplace website design",
    seoTitle: "Chimney Sweep Website Design | ROVQIX",
    description:
      "Websites for chimney sweeps — inspection levels, sweeping prices, safety and certification, and seasonal booking.",
    excerpt: "Inspection levels, safety credentials and booking before the first cold night.",
    primaryKeyword: "chimney sweep website design",
    secondaryKeywords: [
      "chimney cleaning website",
      "fireplace service website",
      "chimney inspection website",
      "chimney repair website design",
    ],
    answer:
      "A chimney sweep website from ROVQIX costs $349 to $749 and takes about a week. It covers inspection levels, sweeping and repair pricing, certification, safety information and seasonal advance booking.",
    intro:
      "Chimney work is intensely seasonal and safety-driven. The site should book people in September rather than during the October rush.",
    deliverables: [
      {
        title: "Inspection levels explained",
        description:
          "Level 1, 2 and 3 mean nothing to homeowners. Explaining them positions you as the expert.",
        icon: "FileText",
      },
      {
        title: "Pricing",
        description:
          "Sweeping and inspection prices, which are standardised enough to publish.",
        icon: "Receipt",
      },
      {
        title: "Certification",
        description:
          "CSIA or equivalent certification, which is a genuine differentiator in an unlicensed trade.",
        icon: "BadgeCheck",
      },
      {
        title: "Safety content",
        description:
          "Chimney fire risk, carbon monoxide, warning signs. This creates the urgency that drives bookings.",
        icon: "ShieldCheck",
      },
      {
        title: "Seasonal booking",
        description:
          "Advance scheduling before the autumn rush, which smooths your year considerably.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "Why explain inspection levels?",
        answer:
          "Because homeowners have no idea what they mean and it is where competitors quote misleadingly.",
        body: [
          {
            type: "table",
            head: ["Level", "What it covers", "When it is needed"],
            rows: [
              ["Level 1", "Readily accessible parts, visual", "Annual, no changes or problems"],
              ["Level 2", "Includes attic, crawl space, video scan", "Property sale, after a fire, appliance change"],
              ["Level 3", "Includes removing parts of the structure", "When serious hazard is suspected"],
            ],
          },
          {
            type: "callout",
            title: "This page prevents unfair comparison",
            text: "A competitor quoting a cheap 'inspection' may be doing a Level 1 while you quoted a Level 2 for a house sale. Explaining the difference stops you losing on a comparison that was never like for like.",
          },
        ],
      },
      {
        heading: "How do you handle the seasonal rush?",
        body: [
          {
            type: "list",
            items: [
              "Open autumn bookings in late summer, before anyone lights a fire.",
              "Offer annual scheduling so customers do not have to remember.",
              "Publish current lead times honestly during peak, which sets expectations.",
              "Keep safety content live year-round — it brings traffic in every season.",
              "Promote repairs and relining in spring, when you have capacity.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish sweeping prices?",
        answer:
          "Yes. Standard sweeps and inspections are predictable and homeowners ring round for the number. Repairs obviously need assessment.",
      },
      {
        question: "How important is certification?",
        answer:
          "Very. Chimney sweeping is unlicensed in most states, so certification is one of the few verifiable quality signals available to a homeowner.",
      },
      {
        question: "Should we write about chimney fire risk?",
        answer:
          "Yes, factually. It creates legitimate urgency and it is genuinely useful safety information. Avoid scare tactics — the facts are alarming enough on their own.",
      },
    ],
    related: ["hvac-company-website", "roofing-company-website", "gutter-cleaning-website"],
  },

  {
    slug: "septic-service-website",
    eyebrow: "Septic services",
    title: "Septic service website design",
    seoTitle: "Septic Service Website Design | ROVQIX",
    description:
      "Websites for septic companies — pumping schedules and pricing, emergency service, inspections for property sales and system repairs.",
    excerpt: "Pumping schedules, emergency service and the inspections property sales require.",
    primaryKeyword: "septic service website design",
    secondaryKeywords: [
      "septic tank pumping website",
      "septic company website",
      "septic repair website design",
      "septic inspection website",
    ],
    answer:
      "A septic service website from ROVQIX costs $349 to $749 and takes about a week. It covers pumping schedules and pricing, emergency service, property sale inspections, system repairs and installation.",
    intro:
      "Septic work splits into routine pumping, urgent backups and property sale inspections. All three have different urgency and different searches.",
    deliverables: [
      {
        title: "Pumping schedule guidance",
        description:
          "How often, based on household size and tank capacity. Genuinely useful and rarely explained.",
        icon: "RefreshCw",
      },
      {
        title: "Pricing",
        description:
          "Pumping by tank size, plus inspection cost. Predictable and worth publishing.",
        icon: "Receipt",
      },
      {
        title: "Emergency service",
        description:
          "Backups are urgent and unpleasant. Availability and response time need to be immediate.",
        icon: "Zap",
      },
      {
        title: "Property sale inspections",
        description:
          "A distinct, deadline-driven service, often ordered by an agent rather than the homeowner.",
        icon: "ClipboardList",
      },
      {
        title: "Warning signs content",
        description:
          "What a failing system looks like. This creates the calls that prevent expensive failures.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "Why publish maintenance guidance?",
        answer:
          "Because most homeowners have no idea how often a tank needs pumping, and the guidance generates the bookings.",
        body: [
          {
            type: "list",
            items: [
              "Pumping frequency by household size and tank capacity, in a simple table.",
              "What should never go down the drain, which prevents failures you would rather not attend.",
              "Warning signs of a failing system — slow drains, odours, wet patches, lush grass.",
              "What a drain field is and why protecting it matters, since replacement is enormously expensive.",
              "Records to keep, which matters when they come to sell the property.",
            ],
          },
          {
            type: "callout",
            title: "Prevention content drives bookings",
            text: "A homeowner who reads that their tank should be pumped every three years and cannot remember the last time will book. This page does more for the schedule than any advertising.",
          },
        ],
      },
      {
        heading: "Why separate property sale inspections?",
        body: [
          {
            type: "p",
            text: "Because the buyer is different — often a real estate agent working to a closing date, not a homeowner. They need turnaround time, report format and whether you can meet a deadline.",
          },
          {
            type: "p",
            text: "It is also repeat business. An agent who has a good experience will use you on every listing, which is worth far more than a single homeowner.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish pumping prices?",
        answer:
          "Yes, by tank size. It is a standardised job and homeowners compare on price. Access difficulties can be noted as a possible surcharge.",
      },
      {
        question: "Is real estate inspection work worth pursuing?",
        answer:
          "Very. Agents order repeatedly and value reliability and turnaround over price. A page aimed at agents rather than homeowners converts well.",
      },
      {
        question: "How do we handle emergencies?",
        answer:
          "State your actual availability and response time honestly. A backup is genuinely urgent and unpleasant, and customers will pay for speed.",
      },
    ],
    related: ["plumber-website", "chimney-sweep-website", "landscaping-company-website"],
  },

  {
    slug: "snow-removal-website",
    eyebrow: "Snow removal",
    title: "Snow removal website design",
    seoTitle: "Snow Removal Website Design | ROVQIX",
    description:
      "Websites for snow removal businesses — seasonal contracts, per-visit pricing, service triggers, commercial accounts and priority.",
    excerpt: "Seasonal contracts that book in autumn, before the first storm.",
    primaryKeyword: "snow removal website design",
    secondaryKeywords: [
      "snow plowing website",
      "snow removal company website",
      "commercial snow removal website",
      "driveway plowing website",
    ],
    answer:
      "A snow removal website from ROVQIX costs $349 to $749 and takes about a week. The priorities are seasonal contract signup, per-visit pricing, clear service triggers, commercial accounts and priority ordering.",
    intro:
      "Snow removal is sold in autumn and delivered in winter. A website that only appears when it snows has already missed the season.",
    deliverables: [
      {
        title: "Seasonal contracts",
        description:
          "Signed in autumn for the whole winter. Predictable revenue and the core of the business.",
        icon: "CalendarCheck",
      },
      {
        title: "Service triggers",
        description:
          "At what snowfall depth you attend. The most common source of customer disputes.",
        icon: "Activity",
      },
      {
        title: "Pricing options",
        description:
          "Seasonal, per-visit and per-inch, compared so customers can choose knowingly.",
        icon: "Receipt",
      },
      {
        title: "Priority order",
        description:
          "Who gets cleared first — commercial before residential, contracts before per-visit.",
        icon: "Network",
      },
      {
        title: "Commercial accounts",
        description:
          "Lots and walkways, with liability and insurance details commercial clients require.",
        icon: "Building2",
      },
    ],
    sections: [
      {
        heading: "Why do service triggers cause disputes?",
        answer:
          "Because customers assume you come whenever it snows, and you go at a defined depth.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "State the trigger depth clearly — commonly two inches for residential.",
              "Explain what happens with continuous snowfall and whether you return.",
              "State your target time window after snowfall stops.",
              "Explain the priority order so customers know where they sit.",
              "Be clear about what is included — driveway only, or walkways and salting too.",
              "State your ice and freezing rain policy, which differs from snow.",
            ],
          },
          {
            type: "callout",
            title: "Publish the trigger and the priority",
            text: "Nearly every snow removal complaint is a customer expecting service you never agreed to provide. Stating the trigger depth and priority order on the site prevents most of them.",
          },
        ],
      },
      {
        heading: "How do seasonal contracts compare to per-visit?",
        body: [
          {
            type: "table",
            head: ["", "Seasonal contract", "Per visit"],
            rows: [
              ["Customer cost", "Fixed, whatever the winter", "Varies with snowfall"],
              ["Your revenue", "Predictable", "Weather-dependent"],
              ["Priority", "Higher", "Lower"],
              ["Good winter for customer", "Heavy snow", "Light snow"],
              ["Good winter for you", "Light snow", "Heavy snow"],
            ],
          },
          {
            type: "p",
            text: "Presenting both honestly, including who benefits in which winter, builds trust. Customers appreciate the transparency and most still choose the contract for the certainty.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When should we start promoting?",
        answer:
          "Late summer or early autumn. Contracts are signed well before the first snow, and a business that only markets during storms is selling per-visit work at the worst time.",
      },
      {
        question: "Should we publish prices?",
        answer:
          "Yes, for standard residential driveways by size. Commercial work needs a site visit but a starting figure still helps.",
      },
      {
        question: "How do we handle a big storm?",
        answer:
          "Set expectations in advance on the site, and use it to post updates during an event. Customers who know where they are in the queue complain far less.",
      },
    ],
    related: ["landscaping-company-website", "gutter-cleaning-website", "pressure-washing-website"],
  },

  {
    slug: "dj-service-website",
    eyebrow: "DJs",
    title: "DJ service website design",
    seoTitle: "DJ Service Website Design | ROVQIX",
    description:
      "Websites for DJs — packages and pricing, date availability, music samples, event types and booking with deposit.",
    excerpt: "Packages, date availability and samples — the three things every enquiry needs.",
    primaryKeyword: "dj website design",
    secondaryKeywords: [
      "wedding dj website",
      "mobile dj website design",
      "event dj website",
      "dj booking website",
    ],
    answer:
      "A DJ website from ROVQIX costs $349 to $1,290 and takes about a week. It covers packages and pricing, date availability, music samples or mixes, event types and booking with a deposit.",
    intro:
      "Every DJ enquiry asks the same three things: are you free on our date, what does it cost, and what do you sound like.",
    deliverables: [
      {
        title: "Package pricing",
        description:
          "Hours, equipment, lighting and extras. Clients compare packages and cannot without numbers.",
        icon: "Receipt",
      },
      {
        title: "Date availability",
        description:
          "Even a simple list of booked dates saves an enormous amount of back and forth.",
        icon: "CalendarCheck",
      },
      {
        title: "Music samples",
        description:
          "Mixes or set samples, which is how clients judge fit. Surprisingly often missing.",
        icon: "Images",
      },
      {
        title: "Event types",
        description:
          "Weddings, corporate, parties, schools. Different expectations and different pricing.",
        icon: "Network",
      },
      {
        title: "Equipment and setup",
        description:
          "What you bring, space and power requirements, and setup time. Venues ask for this.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "What should the enquiry form capture?",
        answer:
          "Date, venue, event type, guest count and hours — enough to quote or decline immediately.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Event date first, since availability decides everything else.",
              "Venue name and location, which affects travel and setup.",
              "Event type — the expectations for a wedding and a corporate party differ entirely.",
              "Approximate guest count, which affects equipment.",
              "Hours of coverage needed.",
              "Whether they need lighting, ceremony sound or extras.",
            ],
          },
          {
            type: "callout",
            title: "Show your booked dates",
            text: "A public list of unavailable dates costs nothing and prevents every enquiry for a date you cannot take. It also creates genuine urgency for popular dates that are still open.",
          },
        ],
      },
      {
        heading: "How should wedding work be handled?",
        body: [
          {
            type: "p",
            text: "Separately. Wedding clients book a year out, want a consultation, care about MC duties and timeline management, and have completely different concerns from someone booking a birthday party.",
          },
          {
            type: "p",
            text: "A wedding page should cover the planning process, how you handle the timeline, whether you MC, and what happens with special requests and do-not-play lists.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish prices?",
        answer:
          "Yes, at least starting prices per package. DJs who hide pricing get fewer enquiries, because clients are comparing several and will contact the ones who published.",
      },
      {
        question: "Do we need music samples?",
        answer:
          "Yes. Clients want to hear how you mix and read a room. A short mix per event type works better than one long set.",
      },
      {
        question: "Should clients pay a deposit online?",
        answer:
          "Yes, it secures the date and reduces cancellations. Standard practice is a non-refundable deposit with the balance due before the event.",
      },
    ],
    related: ["event-planner-website", "wedding-venue-website", "party-rental-website"],
  },

  {
    slug: "party-rental-website",
    eyebrow: "Party rentals",
    title: "Party and event rental website design",
    seoTitle: "Party Rental Website Design | ROVQIX",
    description:
      "Websites for party rental businesses — inventory with pricing, availability by date, delivery areas and package deals.",
    excerpt: "Inventory with prices and date availability, so quotes stop being phone calls.",
    primaryKeyword: "party rental website design",
    secondaryKeywords: [
      "event rental website",
      "bounce house rental website",
      "tent rental website design",
      "equipment rental website",
    ],
    answer:
      "A party rental website from ROVQIX costs $349 to $1,290 and takes about a week. It covers inventory with rental prices, availability by date, delivery areas and fees, package deals and booking with a deposit.",
    intro:
      "Party rental customers want to know if the item is free on their date and what it costs delivered. Everything else is secondary.",
    deliverables: [
      {
        title: "Inventory with prices",
        description:
          "Every item with its rental rate and period. Customers compare and cannot without it.",
        icon: "ShoppingBag",
      },
      {
        title: "Date availability",
        description:
          "Whether an item is free on their date, which is the actual question behind every enquiry.",
        icon: "CalendarCheck",
      },
      {
        title: "Delivery and setup",
        description:
          "Area, fees, setup time and collection. A large part of the real cost and often unstated.",
        icon: "Globe",
      },
      {
        title: "Packages",
        description:
          "Bundles for common events, which raise average order value and simplify the decision.",
        icon: "Blocks",
      },
      {
        title: "Requirements",
        description:
          "Space, power, surface and access. Prevents arriving at a job you cannot set up.",
        icon: "ClipboardList",
      },
    ],
    sections: [
      {
        heading: "Why does date availability matter most?",
        answer:
          "Because inventory is finite and most enquiries are for the same peak weekends.",
        body: [
          {
            type: "list",
            items: [
              "Show whether each item is available on the requested date before anything else.",
              "Let customers reserve with a deposit rather than just enquiring.",
              "Flag peak dates early so people book ahead rather than assuming availability.",
              "If an item is gone, suggest an alternative rather than a dead end.",
              "Keep availability accurate — a double-booked bounce house on a child's birthday is a disaster.",
            ],
          },
          {
            type: "callout",
            title: "Double-booking is the failure mode",
            text: "In rental, the worst outcome is arriving without the item because it was booked twice. Availability tracking should be enforced by the system rather than by a spreadsheet and memory.",
          },
        ],
      },
      {
        heading: "What requirements should be stated?",
        body: [
          {
            type: "list",
            items: [
              "Space needed, including clearance, for tents and inflatables.",
              "Power requirements and how far from an outlet you can be.",
              "Surface — grass, concrete, slope limits — which rules out some setups entirely.",
              "Access, including gate width, which catches out backyard deliveries constantly.",
              "Weather policy for outdoor equipment, especially wind limits on inflatables.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers book online?",
        answer:
          "Yes, with date-based availability and a deposit. Rental booking systems handle this well and it removes most of the phone quoting.",
      },
      {
        question: "Should we publish delivery fees?",
        answer:
          "Yes, by distance band. Delivery is a significant part of the cost and customers who discover it at the end frequently abandon.",
      },
      {
        question: "How do we handle weather cancellations?",
        answer:
          "State the policy plainly upfront — what happens with wind and rain, and whether the deposit transfers. It is the most common dispute in outdoor rentals.",
      },
    ],
    related: ["dj-service-website", "event-venue-website", "event-planner-website"],
  },

  {
    slug: "travel-agent-website",
    eyebrow: "Travel agents",
    title: "Travel agent website design",
    seoTitle: "Travel Agent Website Design | ROVQIX",
    description:
      "Websites for travel agents and advisors — specialisms, fee structure, consultation booking and the case for using an agent.",
    excerpt: "Specialisms and fees, plus the honest case for using an agent at all.",
    primaryKeyword: "travel agent website design",
    secondaryKeywords: [
      "travel advisor website",
      "travel agency website design",
      "luxury travel agent website",
      "cruise agent website",
    ],
    answer:
      "A travel agent website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your specialisms and destinations, fee structure, consultation booking, credentials and a clear explanation of why using an agent beats booking online.",
    intro:
      "Travel agents have to answer a question no other trade faces: why not just book it myself online? The website has to answer that directly.",
    deliverables: [
      {
        title: "Specialisms",
        description:
          "Destinations, trip types, or traveller types. Generalist agents struggle; specialists do well.",
        icon: "Network",
      },
      {
        title: "Fee structure",
        description:
          "Planning fees versus commission, explained plainly. Clients want to know what they pay.",
        icon: "Receipt",
      },
      {
        title: "Why use an agent",
        description:
          "The honest case — access, problem-solving, time saved. This page does the heavy lifting.",
        icon: "Scale",
      },
      {
        title: "Credentials",
        description:
          "Certifications, consortium membership and supplier relationships that get clients perks.",
        icon: "BadgeCheck",
      },
      {
        title: "Consultation booking",
        description:
          "The main conversion, since planning starts with a conversation rather than a purchase.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "How do you answer 'why not book online myself'?",
        answer:
          "By being specific about access, problem-solving and the trips where DIY genuinely goes wrong.",
        body: [
          {
            type: "list",
            items: [
              "Supplier relationships and consortium perks clients cannot get themselves — upgrades, credits, amenities.",
              "What happens when something goes wrong abroad, and that they can call you rather than a call centre.",
              "The hours of research you replace, which for a complex trip is genuinely substantial.",
              "Knowledge of destinations you have actually visited, with specifics.",
              "Honesty that simple trips do not need you — which makes the rest credible.",
            ],
          },
          {
            type: "callout",
            title: "Admit when DIY is fine",
            text: "Saying 'if you are booking a weekend in a chain hotel, book it yourself' makes your case for the complex multi-country trip far more believable. It also stops you attracting low-value enquiries.",
          },
        ],
      },
      {
        heading: "Why specialise?",
        body: [
          {
            type: "p",
            text: "Because a generalist agent competes with the entire internet. A specialist in Japan travel, or safaris, or accessible cruising, competes with very few people and attracts clients who specifically want that expertise.",
          },
          {
            type: "p",
            text: "The website should lead with the specialism. You can still book anything, but the page that gets found and converts is the specific one.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish planning fees?",
        answer:
          "Yes. Fee-based advising is increasingly normal and hiding it creates an awkward first conversation. Clients who object to a fee were not going to be good clients.",
      },
      {
        question: "Do we need a booking engine?",
        answer:
          "Usually not. Your value is consultation and expertise, not a search box that competes with the major booking sites. A consultation booking is the right conversion.",
      },
      {
        question: "Should we write destination content?",
        answer:
          "For destinations you genuinely specialise in, yes — detailed, first-hand content ranks and demonstrates expertise. Generic destination summaries copied from elsewhere do neither.",
      },
    ],
    related: ["travel-and-tourism", "event-planner-website", "photographer-website"],
  },

  {
    slug: "mortgage-broker-website",
    eyebrow: "Mortgage brokers",
    title: "Mortgage broker website design",
    seoTitle: "Mortgage Broker Website Design | ROVQIX",
    description:
      "Websites for mortgage brokers — loan types, rate context, calculators, licensing and pre-approval enquiries.",
    excerpt: "Loan types, calculators and licensing — with the compliance handled properly.",
    primaryKeyword: "mortgage broker website design",
    secondaryKeywords: [
      "loan officer website",
      "mortgage website design",
      "mortgage lender website",
      "home loan website design",
    ],
    answer:
      "A mortgage broker website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers loan types, affordability and payment calculators, licensing and NMLS details, the application process, and pre-approval enquiry forms.",
    intro:
      "Mortgage websites are heavily regulated. Getting the disclosures and licensing right matters as much as anything on the marketing side.",
    deliverables: [
      {
        title: "Loan types explained",
        description:
          "Conventional, FHA, VA, jumbo. Buyers do not know which applies to them and search accordingly.",
        icon: "Network",
      },
      {
        title: "Calculators",
        description:
          "Payment and affordability estimators, which are the most-used feature on any mortgage site.",
        icon: "BarChart3",
      },
      {
        title: "NMLS and licensing",
        description:
          "Required disclosure, and it also builds credibility. Must be displayed correctly.",
        icon: "BadgeCheck",
      },
      {
        title: "Process explained",
        description:
          "Pre-approval through closing, with timelines. First-time buyers find this genuinely confusing.",
        icon: "ClipboardList",
      },
      {
        title: "Compliant disclosures",
        description:
          "Equal Housing, licensing statements and any rate disclaimers your compliance requires.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "What compliance applies to mortgage websites?",
        answer:
          "NMLS display, Equal Housing statements, and strict rules about advertising rates and terms.",
        body: [
          {
            type: "list",
            items: [
              "NMLS ID displayed for the company and individual originators, as required.",
              "Equal Housing Opportunity statement and logo.",
              "State licensing disclosures for every state you are licensed in.",
              "If you advertise a rate, triggering terms require additional disclosures under Regulation Z.",
              "Careful language around approval — nothing that implies a guarantee.",
            ],
          },
          {
            type: "callout",
            title: "Rate advertising is the trap",
            text: "Publishing a rate triggers disclosure requirements that catch many broker sites out. Most brokers are better served by a calculator and a 'current rates on request' approach than by advertising a headline number.",
          },
        ],
      },
      {
        heading: "Why explain the process in detail?",
        body: [
          {
            type: "p",
            text: "Because first-time buyers are overwhelmed and the broker who explains it clearly gets the call. Pre-approval, documentation, underwriting, appraisal, closing — with realistic timelines for each.",
          },
          {
            type: "p",
            text: "A document checklist is one of the most valuable pages you can publish. It ranks well, it genuinely helps, and clients arrive prepared, which speeds up your own work.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we advertise interest rates?",
        answer:
          "You can, but it triggers disclosure requirements under Regulation Z and rates change constantly. Most brokers find a calculator plus a rate enquiry works better and carries less risk.",
      },
      {
        question: "Do we need NMLS numbers on every page?",
        answer:
          "Requirements vary by state and situation. Common practice is company NMLS in the footer sitewide, and individual originator NMLS on their profile. Confirm with your compliance officer.",
      },
      {
        question: "Are calculators worth building?",
        answer:
          "Yes — they are consistently the most-used feature on mortgage sites and generate genuine enquiries. Label results clearly as estimates.",
      },
    ],
    related: ["real-estate-agent-website", "insurance-agent-website", "bookkeeping-service-website"],
  },

  {
    slug: "tax-preparation-website",
    eyebrow: "Tax preparation",
    title: "Tax preparation service website design",
    seoTitle: "Tax Preparation Website Design | ROVQIX",
    description:
      "Websites for tax preparers — pricing by return type, credentials, appointment booking, document checklists and seasonal capacity.",
    excerpt: "Pricing by return type, credentials, and booking that survives March.",
    primaryKeyword: "tax preparation website design",
    secondaryKeywords: [
      "tax preparer website",
      "cpa website design small",
      "tax service website design",
      "accountant website small business",
    ],
    answer:
      "A tax preparation website from ROVQIX costs $349 to $1,290 and takes about a week. It covers pricing by return type, your credentials, appointment booking, document checklists and honest capacity information during the season.",
    intro:
      "Tax preparation is the most seasonal business there is. The website has to handle a January to April crush and then sell something else for eight months.",
    deliverables: [
      {
        title: "Pricing by return type",
        description:
          "Simple, itemised, self-employed, business. Predictable enough to publish and rarely published.",
        icon: "Receipt",
      },
      {
        title: "Credentials",
        description:
          "CPA, EA or PTIN. Clients cannot tell preparers apart otherwise and this is the differentiator.",
        icon: "BadgeCheck",
      },
      {
        title: "Document checklists",
        description:
          "What to bring, by situation. Ranks well, genuinely helps, and speeds up your appointments.",
        icon: "ClipboardList",
      },
      {
        title: "Appointment booking",
        description:
          "With realistic slot lengths, and the ability to close bookings when you reach capacity.",
        icon: "CalendarCheck",
      },
      {
        title: "Off-season services",
        description:
          "Planning, bookkeeping, amendments and audits — which fill the other eight months.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "How do you handle extreme seasonality?",
        answer:
          "Book early, close bookings honestly when full, and promote off-season services the rest of the year.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open bookings in December or early January, before the rush starts.",
              "Show remaining availability, which creates urgency and manages expectations.",
              "Close bookings when you genuinely hit capacity rather than taking work you cannot do well.",
              "State the deadline for guaranteed filing without an extension.",
              "Switch the site to planning and bookkeeping services after April.",
            ],
          },
          {
            type: "callout",
            title: "Turning work away protects your reputation",
            text: "A preparer who takes on more than they can handle in March produces late filings and errors. Publishing a capacity cut-off is better business than a bad April.",
          },
        ],
      },
      {
        heading: "Why publish document checklists?",
        body: [
          {
            type: "p",
            text: "Because they rank well seasonally, they genuinely help clients, and a client who arrives with everything makes your appointment half as long.",
          },
          {
            type: "p",
            text: "Make separate checklists for common situations — employed, self-employed, rental income, first-time filer. It is more useful than one long list and each one targets a different search.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish prices?",
        answer:
          "Yes, by return type. Clients shop around and preparers who publish get shortlisted. Complex situations can be quoted after a review.",
      },
      {
        question: "How do we compete with DIY tax software?",
        answer:
          "On complexity and representation. Say plainly that a simple W-2 return does not need you. That honesty makes your case for self-employment, rental income and business returns far stronger.",
      },
      {
        question: "What should the site do in the off-season?",
        answer:
          "Promote planning, bookkeeping, amendments and audit representation. Those services are what turn a seasonal business into a year-round one.",
      },
    ],
    related: ["bookkeeping-service-website", "insurance-agent-website", "notary-service-website"],
  },

  {
    slug: "coffee-roaster-website",
    eyebrow: "Coffee roasters",
    title: "Coffee roaster website design",
    seoTitle: "Coffee Roaster Website Design | ROVQIX",
    description:
      "Websites for coffee roasters — bean origins and tasting notes, subscriptions, wholesale accounts and online ordering.",
    excerpt: "Origins and tasting notes, subscriptions that recur, and wholesale accounts.",
    primaryKeyword: "coffee roaster website design",
    secondaryKeywords: [
      "coffee roastery website",
      "specialty coffee website design",
      "coffee subscription website",
      "wholesale coffee website",
    ],
    answer:
      "A coffee roaster website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers bean origins and tasting notes, subscription ordering, wholesale accounts and retail ecommerce — coffee being one of the few local products where shipping genuinely works.",
    intro:
      "Coffee is unusual among local food businesses: it ships well, it is consumed repeatedly, and subscriptions genuinely work. That makes the website a real sales channel rather than a brochure.",
    deliverables: [
      {
        title: "Origins and tasting notes",
        description:
          "Farm, region, process, altitude and notes. Specialty buyers read all of it before purchasing.",
        icon: "FileText",
      },
      {
        title: "Subscriptions",
        description:
          "Recurring delivery with frequency and grind options. The most valuable thing on the site.",
        icon: "RefreshCw",
      },
      {
        title: "Wholesale accounts",
        description:
          "Cafés and offices, with pricing tiers and account signup. Steady high-volume revenue.",
        icon: "Building2",
      },
      {
        title: "Grind options",
        description:
          "Whole bean or ground for a specific brew method. Essential and often missing at checkout.",
        icon: "Blocks",
      },
      {
        title: "Roast dates",
        description:
          "When it was roasted, which specialty buyers specifically check and most sites omit.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "Why do subscriptions matter so much?",
        answer:
          "Because coffee is consumed on a predictable cycle, which makes it one of the few products where subscription genuinely fits.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Let customers choose frequency based on how much they drink, not a fixed schedule.",
              "Offer a roaster's choice option, which is easier to commit to than picking every time.",
              "Make skipping and pausing genuinely easy — friction here causes cancellations.",
              "Remember grind preference so reordering is effortless.",
              "Send a reminder before each shipment, which reduces surprise charges and disputes.",
            ],
          },
          {
            type: "callout",
            title: "Easy cancellation increases signups",
            text: "As with any subscription, making cancellation obvious converts better than hiding it. The fear of being trapped is what stops people subscribing in the first place.",
          },
        ],
      },
      {
        heading: "Is wholesale worth building for?",
        body: [
          {
            type: "p",
            text: "Usually yes. A single café account can be worth more than dozens of retail subscriptions, with far less packaging and shipping work.",
          },
          {
            type: "p",
            text: "The wholesale page should speak to a café owner: pricing tiers by volume, delivery schedule, equipment support and training, and whether you offer exclusivity in an area.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we sell online?",
        answer:
          "Yes — coffee is one of the few local food products that ships well and is bought repeatedly. Unlike most local retailers, an online store genuinely earns its keep here.",
      },
      {
        question: "Should we show roast dates?",
        answer:
          "Yes. Specialty buyers specifically look for it and it signals freshness. Roasters who hide it are assumed to be shipping old stock.",
      },
      {
        question: "How much origin detail is too much?",
        answer:
          "For specialty buyers, hard to overdo. Show a short summary with the option to expand into full detail, so casual buyers are not overwhelmed while enthusiasts get what they want.",
      },
    ],
    related: ["cafe-website", "butcher-shop-website", "boutique-retail-website"],
  },
];

export const localRetailMiscPages = makeLocalPages(specs);
