import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/** Remaining specialist retail and service types. */
const specs: LocalSpec[] = [
  {
    slug: "antique-shop-website",
    eyebrow: "Antique shops",
    title: "Antique shop website design",
    seoTitle: "Antique Shop Website Design | ROVQIX",
    description:
      "Websites for antique dealers — what you specialise in, valuations, buying from the public, and stock that turns over constantly.",
    excerpt: "Specialism and 'we buy' — the two pages that bring dealers and sellers in.",
    primaryKeyword: "antique shop website",
    secondaryKeywords: ["antique dealer website design", "vintage shop website", "antiques centre website", "antique valuation website"],
    answer:
      "An antique shop website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your specialisms, valuation services, buying from the public, and a stock approach that works when inventory is one-of-a-kind and turns over constantly.",
    intro:
      "Antique stock is unique and sells once. That makes a conventional online catalogue almost unmaintainable, and changes what the website should do.",
    deliverables: [
      { title: "Specialisms", description: "Periods, makers and categories you actually deal in. Collectors search by exactly this.", icon: "Target" },
      { title: "We buy",  description: "What you purchase, how valuation works and whether you do house clearances.", icon: "Receipt" },
      { title: "Valuations", description: "Whether you appraise, what it costs, and whether it is for insurance or sale.", icon: "BadgeCheck" },
      { title: "Recent arrivals", description: "A rotating selection rather than a full catalogue, since stock sells once.", icon: "RefreshCw" },
      { title: "Trade welcome", description: "Whether other dealers can buy from you, which is significant volume for many shops.", icon: "Handshake" },
    ],
    sections: [
      {
        heading: "Why not build a full online catalogue?",
        answer: "Because unique stock sells once, and a catalogue full of sold items is worse than none.",
        body: [
          { type: "list", items: [
            "Every piece is one-of-a-kind, so a sold item cannot simply be restocked.",
            "Photographing and listing each item takes real time for a single sale.",
            "A page of sold items makes the shop look inactive.",
            "A rotating 'recent arrivals' selection of ten to twenty pieces achieves most of the effect.",
            "For genuine high-value pieces, an established marketplace reaches more buyers than your own site will.",
          ]},
          { type: "callout", title: "Specialism beats inventory", text: "Collectors search for a period, a maker or a category — not for 'antiques'. A page saying you specialise in mid-century Scandinavian furniture will out-earn a hundred individual listings." },
        ],
      },
      {
        heading: "Why does 'we buy' matter?",
        body: [
          { type: "p", text: "It is both your stock pipeline and a high-intent search. Someone clearing an estate is looking for a dealer who buys, and that enquiry is worth far more than a browser." },
          { type: "p", text: "Set expectations honestly on the page. Most inherited furniture is worth less than the owner hopes, and saying so kindly upfront makes you the dealer people trust with the genuinely valuable pieces." },
        ],
      },
    ],
    faqs: [
      { question: "Should we sell online?", answer: "For most shops, a rotating selection plus marketplace listings for high-value pieces works better than a full catalogue you cannot keep current." },
      { question: "Is valuation worth advertising?", answer: "Yes. It brings people through the door with items to sell, and paid insurance valuations are steady revenue in their own right." },
      { question: "How often should we update stock?", answer: "Monthly is enough for a rotating selection. What matters more is that it never shows sold pieces as available." },
    ],
    related: ["consignment-shop-website", "jewelry-store-website", "upholstery-shop-website"],
  },
  {
    slug: "music-instrument-store-website",
    eyebrow: "Instrument shops",
    title: "Musical instrument store website design",
    seoTitle: "Musical Instrument Store Website Design | ROVQIX",
    description:
      "Websites for instrument shops — brands stocked, rentals for school programmes, repair and setup services, and lessons.",
    excerpt: "School rentals and repair — the two things that pay the rent between sales.",
    primaryKeyword: "music store website design",
    secondaryKeywords: ["musical instrument shop website", "guitar shop website", "music store web design", "instrument rental website"],
    answer:
      "A musical instrument store website from ROVQIX costs $349 to $1,290 and takes about a week. It covers brands stocked, school rental programmes, repair and setup services, and lessons — the recurring revenue that carries a shop between instrument sales.",
    intro:
      "Instrument sales are lumpy and seasonal. Rentals, repairs and lessons are what make the business work, and most shop websites bury all three.",
    deliverables: [
      { title: "Brands stocked", description: "Named brands by instrument family. Musicians search by brand, always.", icon: "ShoppingBag" },
      { title: "School rentals", description: "Rent-to-own programmes for student instruments. Predictable, recurring, seasonal revenue.", icon: "RefreshCw" },
      { title: "Repair and setup", description: "Guitar setups, band instrument repair, restringing — priced, since these are steady work.", icon: "Blocks" },
      { title: "Lessons", description: "Instruments taught, rates and teacher profiles if you run a teaching room.", icon: "Users" },
      { title: "Try before buying", description: "That instruments can be played in store, which is the whole advantage over online retail.", icon: "Target" },
    ],
    sections: [
      {
        heading: "Why do school rentals matter so much?",
        answer: "Because they are predictable, recurring, and they land every August.",
        body: [
          { type: "list", items: [
            "Publish the programme clearly — monthly cost, what is included, and whether payments go towards purchase.",
            "State which schools and band programmes you supply.",
            "Explain maintenance and what happens if a student instrument is damaged.",
            "Open rental sign-ups in July, before the school year starts.",
            "Note step-up instruments for students continuing beyond the first year.",
          ]},
          { type: "callout", title: "August is your December", text: "School rental season is the single biggest revenue window for most instrument shops. A rental page that goes live in July and takes online sign-ups captures parents while they are organised." },
        ],
      },
      {
        heading: "Why publish repair pricing?",
        body: [
          { type: "p", text: "A guitar setup or a band instrument service is a standardised job with a predictable price, and players ring round for it. Publishing turns those calls into bookings and fills the workshop between sales." },
          { type: "p", text: "It also brings people into the shop, where they see instruments they were not planning to buy." },
        ],
      },
    ],
    faqs: [
      { question: "Should we sell instruments online?", answer: "Competing with the large online retailers on price and range is not winnable. Your advantages are trying before buying, setup included and local repair — sell those instead." },
      { question: "Are rentals worth the administration?", answer: "For most shops they are the most reliable revenue in the year, and rental families become buying customers as students progress." },
      { question: "Should we list repair prices?", answer: "Yes for standard jobs like setups and restringing. It captures the calls and fills the workshop." },
    ],
    related: ["record-shop-website", "game-and-hobby-shop-website", "music-lessons-website"],
  },
  {
    slug: "consignment-shop-website",
    eyebrow: "Consignment",
    title: "Consignment shop website design",
    seoTitle: "Consignment Shop Website Design | ROVQIX",
    description:
      "Websites for consignment stores — consignor terms and splits, what you accept, drop-off process and current stock highlights.",
    excerpt: "Consignor terms, because half your visitors want to sell, not buy.",
    primaryKeyword: "consignment shop website",
    secondaryKeywords: ["consignment store website design", "resale shop website", "thrift store website", "second hand shop website"],
    answer:
      "A consignment shop website from ROVQIX costs $349 to $749 and takes about a week. It has to serve two audiences: consignors who need terms, splits and drop-off rules, and shoppers who want to know what is in stock.",
    intro:
      "A consignment shop's website has two completely different visitors. Half want to buy, and half want to sell you something. Most sites only address the first.",
    deliverables: [
      { title: "Consignor terms", description: "Your split, pricing policy, consignment period and what happens to unsold items.", icon: "Receipt" },
      { title: "What you accept", description: "Categories, brands, condition and season. Prevents people arriving with unsellable bags.", icon: "ClipboardList" },
      { title: "Drop-off process", description: "Appointment or walk-in, item limits, and how long assessment takes.", icon: "CalendarCheck" },
      { title: "Stock highlights", description: "A rotating selection of good pieces, since full inventory is unmaintainable.", icon: "Images" },
      { title: "Payout process", description: "How and when consignors are paid, which is the most-asked question.", icon: "CreditCard" },
    ],
    sections: [
      {
        heading: "Why do consignor terms need their own page?",
        answer: "Because roughly half your website visitors are trying to sell, not buy.",
        body: [
          { type: "list", ordered: true, items: [
            "State the split plainly — what percentage the consignor receives.",
            "Explain who sets the price and whether items are marked down over time.",
            "Give the consignment period and what happens to unsold items at the end.",
            "Describe the payout schedule and method.",
            "List what you will not accept, which saves everyone a wasted trip.",
          ]},
          { type: "callout", title: "Rejecting items at the counter is the worst moment", text: "Someone arriving with four bags and leaving with three is an unhappy visit for both sides. A clear 'what we accept' page prevents almost all of it." },
        ],
      },
      {
        heading: "How should stock be shown?",
        body: [
          { type: "p", text: "A rotating selection of the best current pieces, updated weekly. A full catalogue is unmaintainable when stock is unique and turns over constantly, and stale listings damage trust." },
          { type: "p", text: "Instagram usually does this job better than a website gallery, so pulling the feed onto the site keeps it current with no extra work." },
        ],
      },
    ],
    faqs: [
      { question: "Should we list individual items?", answer: "Only highlights. Unique stock turning over weekly makes a full catalogue impossible to keep accurate, and inaccurate is worse than absent." },
      { question: "How detailed should consignor terms be?", answer: "Very. Ambiguity here causes disputes at payout. Split, pricing, period and unsold-item policy should all be unambiguous." },
      { question: "Do we need appointments for drop-off?", answer: "Most shops do, and stating it prevents people arriving during your busiest hour with bags of items." },
    ],
    related: ["antique-shop-website", "boutique-retail-website", "gift-shop-website"],
  },
  {
    slug: "courier-delivery-website",
    eyebrow: "Courier services",
    title: "Courier and local delivery website design",
    seoTitle: "Courier & Local Delivery Website Design | ROVQIX",
    description:
      "Websites for local couriers — pricing by distance and size, same-day availability, coverage area, business accounts and tracking.",
    excerpt: "Instant pricing by distance, and business accounts for the repeat work.",
    primaryKeyword: "courier service website",
    secondaryKeywords: ["local delivery service website", "same day courier website design", "messenger service website", "delivery company website"],
    answer:
      "A courier website from ROVQIX costs $349 to $1,290 and takes about a week. Priorities are instant pricing by distance and parcel size, same-day availability, coverage area, business accounts and tracking or proof of delivery.",
    intro:
      "Courier work splits into urgent one-off jobs and steady business accounts. The second is where the money is, and almost no courier site is written for it.",
    deliverables: [
      { title: "Instant pricing", description: "Distance and size in, price out. Predictable enough to quote without a call.", icon: "Receipt" },
      { title: "Same-day availability", description: "Cut-off times and how quickly you can collect. The deciding factor on urgent jobs.", icon: "Zap" },
      { title: "Coverage area", description: "Where you deliver and what happens beyond it.", icon: "Globe" },
      { title: "Business accounts", description: "Regular collections, monthly invoicing and account rates. The revenue that matters.", icon: "Building2" },
      { title: "Proof of delivery", description: "Tracking and signature or photo confirmation, which business clients require.", icon: "ShieldCheck" },
    ],
    sections: [
      {
        heading: "Why chase business accounts?",
        answer: "Because one law firm or pharmacy with a daily collection is worth hundreds of one-off jobs.",
        body: [
          { type: "list", items: [
            "Write a page aimed at an office manager, not a consumer sending a parcel.",
            "Offer account rates, monthly invoicing and scheduled collections.",
            "State your insurance cover, which businesses need before they can use you.",
            "Mention sectors you already serve — legal, medical, retail — which signals reliability.",
            "Make setting up an account a simple form, not a phone negotiation.",
          ]},
          { type: "callout", title: "One daily collection beats a hundred one-offs", text: "A single business with a scheduled daily pickup is predictable, routable revenue with no acquisition cost after the first sale. Most courier websites are written entirely for the one-off customer." },
        ],
      },
      {
        heading: "Why publish instant pricing?",
        body: [
          { type: "p", text: "Courier pricing is genuinely predictable from distance, size and urgency. A calculator that returns a price and takes the booking converts far better than a quote form, especially for urgent jobs where the customer is ringing several companies." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Yes. Distance and size make it calculable, and urgent customers book with whoever gives them a number fastest." },
      { question: "Do we need tracking?", answer: "For business accounts, effectively yes. Even a simple photo proof of delivery emailed on completion meets most requirements." },
      { question: "How do we win business accounts?", answer: "A page written for an office manager covering rates, invoicing, insurance and scheduled collections — then reliability over the first month." },
    ],
    related: ["moving-company-website", "junk-removal-website", "print-shop-website"],
  },
  {
    slug: "home-stager-website",
    eyebrow: "Home staging",
    title: "Home staging website design",
    seoTitle: "Home Staging Website Design | ROVQIX",
    description:
      "Websites for home stagers — before and after galleries, pricing models, agent partnerships and consultation versus full staging.",
    excerpt: "Before and after galleries, plus a page written for referring agents.",
    primaryKeyword: "home staging website design",
    secondaryKeywords: ["home stager website", "property styling website", "real estate staging website", "interior styling website"],
    answer:
      "A home staging website from ROVQIX costs $349 to $1,290 and takes about a week. It centres on before and after galleries, clear pricing models, a page for referring agents, and the difference between a consultation and full staging.",
    intro:
      "Staging sells on before and after photographs, and the client who books repeatedly is the estate agent, not the homeowner.",
    deliverables: [
      { title: "Before and after galleries", description: "Same room, same angle. The entire selling argument in one image pair.", icon: "Images" },
      { title: "Service tiers", description: "Consultation only, partial staging, full staging with rented furniture.", icon: "Layers" },
      { title: "Pricing model", description: "Consultation fee, staging fee and monthly furniture rental, stated separately.", icon: "Receipt" },
      { title: "Agent partnership page", description: "Written for agents, who refer repeatedly and are the real customer.", icon: "Handshake" },
      { title: "Results context", description: "Days on market and sale outcomes where you can evidence them honestly.", icon: "BarChart3" },
    ],
    sections: [
      {
        heading: "Why is the agent page the important one?",
        answer: "Because an agent listing twenty homes a year refers twenty staging jobs.",
        body: [
          { type: "list", items: [
            "Speak to what agents care about: turnaround, reliability and how staging affects days on market.",
            "Offer a consultation tier they can recommend to sellers on a tight budget.",
            "Explain who pays — seller, agent, or deferred to closing — since that varies.",
            "State how quickly you can stage after a listing agreement is signed.",
            "Provide photography-ready timing, since listing photos are usually shot the next day.",
          ]},
          { type: "callout", title: "Offer a low-cost consultation tier", text: "Not every seller will pay for full staging. A paid consultation with a written action list gives the agent something to recommend on every listing, and it converts into full staging often enough to be worth it." },
        ],
      },
      {
        heading: "How should results be presented?",
        body: [
          { type: "p", text: "Carefully. Staging genuinely helps, but claiming a specific percentage increase in sale price is hard to substantiate and easy to challenge." },
          { type: "p", text: "Days on market before and after, with context, is more defensible than price claims — and for an agent audience it is the more persuasive number anyway." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish staging prices?", answer: "Consultation fee definitely, and starting ranges for staging. Full staging depends on property size and furniture volume, so ranges plus a quote works best." },
      { question: "Who is the real customer?", answer: "Usually the agent. They refer repeatedly, and a page written for them is worth more than one written for a one-time seller." },
      { question: "Can we claim staging increases sale price?", answer: "Be careful. Days on market with context is more defensible and, for agents, more persuasive than an unsubstantiated price claim." },
    ],
    related: ["real-estate-agent-website", "photographer-website", "kitchen-remodeler-website"],
  },
];

export const localFinalPages = makeLocalPages(specs);
