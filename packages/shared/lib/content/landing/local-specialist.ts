import { makeLocalPages, type LocalSpec } from "./local-builder";

/**
 * Specialist trades and shops, batch 1.
 *
 * Every entry here must have a genuinely different website requirement from
 * everything already in /local. If a new business type would produce the same
 * page as an existing one with a different name on it, do not add it.
 */
const specs: LocalSpec[] = [
  {
    slug: "massage-therapist-website",
    eyebrow: "Massage therapists",
    title: "Massage therapist website design",
    seoTitle: "Massage Therapist Website Design | ROVQIX",
    description:
      "Websites for massage therapists — modalities explained, session pricing, licensing, intake forms and online booking that respects your real availability.",
    excerpt: "Modalities explained in plain English, plus booking that reflects your real diary.",
    primaryKeyword: "massage therapist website design",
    secondaryKeywords: ["massage therapy website", "mobile massage website", "sports massage website design", "lmt website"],
    answer:
      "A massage therapist website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your modalities in language clients understand, session lengths and prices, your licence, intake forms and online booking.",
    intro:
      "Most clients cannot tell deep tissue from myofascial release. The site that explains which one suits their problem gets the booking.",
    deliverables: [
      { title: "Modalities in plain English", description: "Swedish, deep tissue, sports, prenatal — described by the problem each solves, not by the technique name.", icon: "FileText" },
      { title: "Session lengths and prices", description: "30, 60 and 90 minutes with prices. Duration matters here as much as cost.", icon: "Receipt" },
      { title: "Licence and insurance", description: "Your LMT licence number and liability insurance, which separates you from unlicensed operators.", icon: "BadgeCheck" },
      { title: "Intake before arrival", description: "Health history collected through your booking system, saving ten minutes of every appointment.", icon: "ClipboardList" },
      { title: "Mobile or studio", description: "Whether you travel, what you need on site, and any travel fee.", icon: "Globe" },
    ],
    sections: [
      {
        heading: "How should modalities be described?",
        answer: "By the problem they solve, not by the name of the technique.",
        body: [
          { type: "table", head: ["Instead of", "Write"], rows: [
            ["Deep tissue massage", "Deep tissue — for chronic tightness in the back, neck and shoulders. Firm pressure; you may be sore the next day."],
            ["Myofascial release", "Myofascial release — slow, sustained pressure for long-standing restriction and old injury sites."],
            ["Prenatal massage", "Prenatal — side-lying and supported, safe from the second trimester. Say if you have specific training."],
          ]},
          { type: "callout", title: "Say who each one is not for", text: "Telling someone deep tissue is probably too intense for a first visit builds more trust than claiming everything suits everyone — and it prevents a bad first experience." },
        ],
      },
      {
        heading: "Why collect intake before the appointment?",
        body: [
          { type: "p", text: "Health history taken at the door costs ten minutes of a sixty-minute session. Collected at booking, the client arrives and you start on time." },
          { type: "list", items: [
            "Use your booking platform's secure forms, not a plain website form — this is health information.",
            "Ask about injuries, conditions, medications and pressure preference.",
            "Flag contraindications so you can contact them before they travel.",
            "Store it against the client record so returning clients only update changes.",
          ]},
        ],
      },
    ],
    faqs: [
      { question: "Can clients book online?", answer: "Yes, through systems built for bodywork such as Jane, Vagaro or Square. We connect the one you already use so there is a single diary." },
      { question: "Should I show prices?", answer: "Yes, by session length. It is the first thing clients compare and hiding it loses bookings to the therapist who published." },
      { question: "I work mobile. What changes?", answer: "Your travel area and any fee become primary information, plus what you need on site — space for the table, and access." },
    ],
    related: ["day-spa-website", "physical-therapy-website", "acupuncture-clinic-website"],
  },
  {
    slug: "esthetician-website",
    eyebrow: "Estheticians",
    title: "Esthetician and skincare studio website design",
    seoTitle: "Esthetician Website Design | ROVQIX",
    description:
      "Websites for estheticians — treatment menu, skin concern pages, before and after photos, product lines and booking with patch test rules.",
    excerpt: "Organised by skin concern, which is how clients actually search.",
    primaryKeyword: "esthetician website design",
    secondaryKeywords: ["skincare studio website", "facial spa website design", "beauty therapist website", "skin clinic website"],
    answer:
      "An esthetician website from ROVQIX costs $349 to $1,290 and takes about a week. It organises treatments by skin concern rather than by product name, with pricing, results photos, product lines and online booking.",
    intro:
      "Clients search their problem — acne, pigmentation, ageing — not your treatment names. Structuring the site that way is the whole difference.",
    deliverables: [
      { title: "Organised by concern", description: "Acne, pigmentation, rosacea, ageing. Each links to the treatments that address it.", icon: "Network" },
      { title: "Treatment menu with duration", description: "Price and time per treatment, since clients book around a lunch break.", icon: "Receipt" },
      { title: "Before and after gallery", description: "Real client results with consent, which is what converts in skincare.", icon: "Images" },
      { title: "Product lines carried", description: "The brands you retail and use. Clients search for specific lines.", icon: "ShoppingBag" },
      { title: "Patch tests and prep", description: "What to avoid before a treatment, and where a patch test is required.", icon: "ShieldCheck" },
    ],
    sections: [
      {
        heading: "Why organise by skin concern?",
        answer: "Because nobody searches for a treatment name they have never heard of.",
        body: [
          { type: "list", items: [
            "A client with acne searches 'acne facial near me', not 'salicylic peel'.",
            "A concern page can recommend a course rather than a single treatment, which raises average value.",
            "It lets you explain why one treatment suits them and another does not.",
            "Each concern is a separate search you can rank for.",
            "It positions you as diagnosing a problem rather than selling a service.",
          ]},
          { type: "callout", title: "Recommend a course, honestly", text: "Most skin concerns need several sessions. Saying so upfront — with realistic timelines and total cost — sets expectations and sells better than implying one facial fixes it." },
        ],
      },
      {
        heading: "How careful do claims need to be?",
        body: [
          { type: "p", text: "Describe what a treatment does and what clients typically notice. Avoid claiming to cure a skin condition — that crosses into medical claims and attracts regulatory attention." },
          { type: "list", items: [
            "Use your own client photos with written consent, never manufacturer stock.",
            "Do not retouch results photography, and keep the lighting consistent.",
            "Note when a concern should be seen by a dermatologist instead.",
            "State clearly which treatments require a consultation first.",
          ]},
        ],
      },
    ],
    faqs: [
      { question: "Should I show before and after photos?", answer: "Yes, with written client consent. They are the most persuasive content in skincare. Never use manufacturer images as if they were your results." },
      { question: "Can I sell products online?", answer: "Yes, though many estheticians find a simple 'reserve in studio' works better than shipping. It also brings the client back in." },
      { question: "Do I need patch test information on the site?", answer: "Yes for peels, lash and tint work. Stating the requirement at booking prevents clients arriving unable to be treated." },
    ],
    related: ["med-spa-website", "lash-and-brow-website", "day-spa-website"],
  },
  {
    slug: "sign-shop-website",
    eyebrow: "Sign shops",
    title: "Sign shop website design",
    seoTitle: "Sign Shop Website Design | ROVQIX",
    description:
      "Websites for sign makers — product range, material options, artwork requirements, quote requests with file upload and installation services.",
    excerpt: "Artwork requirements up front, which saves a week of back-and-forth per job.",
    primaryKeyword: "sign shop website design",
    secondaryKeywords: ["sign company website", "signage business website", "vehicle wrap website design", "banner printing website"],
    answer:
      "A sign shop website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your product range, materials, artwork file requirements, a quote form that accepts uploads, and installation services.",
    intro:
      "Most sign jobs stall on artwork. A page that states file requirements clearly saves days on every order.",
    deliverables: [
      { title: "Product range", description: "Storefront signs, vehicle wraps, banners, vinyl, wayfinding. Each is a different search.", icon: "Blocks" },
      { title: "Artwork requirements", description: "Vector formats, resolution, bleed, fonts outlined. The single biggest cause of delay.", icon: "FileText" },
      { title: "Quote form with upload", description: "Dimensions, quantity, material and artwork file — enough to quote without a phone call.", icon: "ClipboardList" },
      { title: "Materials explained", description: "Acrylic, aluminium, coroplast, vinyl — with lifespan and where each suits.", icon: "Layers" },
      { title: "Installation and permits", description: "Whether you install, and whether the customer needs a sign permit locally.", icon: "ShieldCheck" },
    ],
    sections: [
      {
        heading: "Why publish artwork requirements?",
        answer: "Because a customer sending a low-resolution logo from a website is the standard cause of a delayed job.",
        body: [
          { type: "list", ordered: true, items: [
            "State accepted formats plainly — vector preferred, and what to do if they only have a JPEG.",
            "Give minimum resolution for raster artwork at final print size.",
            "Ask for fonts outlined or supplied, since missing fonts break every file.",
            "Explain bleed and safe area with a simple diagram.",
            "Offer artwork setup as a paid service for customers who have nothing usable.",
          ]},
          { type: "callout", title: "Sell artwork setup", text: "A significant share of small-business customers have no usable logo file. Offering setup as a priced service turns a stalled job into a paid one, and most customers are relieved to be told." },
        ],
      },
      {
        heading: "What should the quote form capture?",
        body: [
          { type: "list", items: [
            "Dimensions and quantity — the two things that decide price.",
            "Material, or a description of where it will go if they do not know.",
            "Indoor or outdoor, which changes material and lifespan.",
            "Whether installation is needed.",
            "Artwork upload, or a note that they need setup.",
            "Deadline, since rush work is priced differently.",
          ]},
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Starting prices per product type help, though most sign work is quoted. Publishing a banner price list is easy and captures the low-end searches." },
      { question: "Do we need to mention permits?", answer: "For storefront and exterior signage, yes. Customers rarely know they need one, and being the shop that warns them builds trust." },
      { question: "Is vehicle wrap worth its own page?", answer: "Yes if you do it. It is a high-value, heavily-researched, visual purchase with completely different customer questions from a banner." },
    ],
    related: ["print-shop-website", "general-contractor-website", "boutique-retail-website"],
  },
  {
    slug: "embroidery-and-apparel-website",
    eyebrow: "Custom apparel",
    title: "Embroidery and custom apparel website design",
    seoTitle: "Embroidery & Custom Apparel Website Design | ROVQIX",
    description:
      "Websites for embroidery and custom apparel businesses — minimum orders, garment catalogues, digitising fees, artwork setup and turnaround times.",
    excerpt: "Minimums and setup fees stated plainly, which filters out the one-shirt enquiries.",
    primaryKeyword: "embroidery business website",
    secondaryKeywords: ["custom apparel website design", "screen printing website", "custom t shirt website", "workwear embroidery website"],
    answer:
      "A custom apparel website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are minimum order quantities, garment catalogue, digitising and setup fees, artwork requirements and turnaround times.",
    intro:
      "The enquiry that wastes most time in this trade is someone wanting one embroidered polo. Stating your minimum stops it before it arrives.",
    deliverables: [
      { title: "Minimum order stated", description: "Per garment and per design. The most useful filter on the whole site.", icon: "Receipt" },
      { title: "Garment catalogue", description: "Brands and styles you stock, with colours and size ranges.", icon: "ShoppingBag" },
      { title: "Setup and digitising fees", description: "One-off costs customers never expect. Stating them prevents a difficult conversation later.", icon: "FileText" },
      { title: "Artwork requirements", description: "Formats, stitch count implications and what happens with a low-quality logo.", icon: "ClipboardList" },
      { title: "Turnaround times", description: "Standard and rush, since most orders have an event date attached.", icon: "Clock" },
    ],
    sections: [
      {
        heading: "Why state minimums and setup fees upfront?",
        answer: "Because both are surprises that kill orders at the quote stage.",
        body: [
          { type: "table", head: ["Cost customers do not expect", "Why it exists"], rows: [
            ["Digitising fee", "Converting artwork to a stitch file, done once per design"],
            ["Screen setup fee", "One screen per colour, per design"],
            ["Minimum order", "Setup time is the same for 5 shirts or 500"],
            ["Colour change charge", "Each additional thread or ink colour adds handling"],
            ["Rush fee", "Reordering production around a deadline"],
          ]},
          { type: "callout", title: "The repeat-order advantage", text: "Say clearly that digitising is a one-time cost and reorders skip it. It turns a price objection into a reason to come back to you rather than start again elsewhere." },
        ],
      },
      {
        heading: "Embroidery or print — help them choose",
        body: [
          { type: "p", text: "Customers often ask for the wrong one. A short comparison page saves a conversation on every enquiry and positions you as the expert." },
          { type: "list", items: [
            "Embroidery: durable, premium feel, best for logos on polos, caps and workwear. Costs rise with stitch count.",
            "Screen print: best for large designs and big runs. Cost falls sharply with quantity, rises with colour count.",
            "Heat transfer or DTF: good for small runs and complex full-colour artwork.",
            "Say which you actually offer, and refer out honestly for the rest.",
          ]},
        ],
      },
    ],
    faqs: [
      { question: "What minimum should we set?", answer: "Whatever makes a job worth the setup time — commonly 6 to 12 pieces for embroidery, 12 to 24 for screen print. Publishing it saves more time than it costs in lost enquiries." },
      { question: "Should we show garment prices?", answer: "A starting price per garment type plus decoration helps. Full price grids are hard to maintain; a quote form with quantity works better." },
      { question: "Do customers understand digitising?", answer: "Almost never. A short explanation of what it is and why it is a one-time charge prevents the most common billing dispute in this trade." },
    ],
    related: ["print-shop-website", "sign-shop-website", "boutique-retail-website"],
  },
  {
    slug: "picture-framing-website",
    eyebrow: "Picture framing",
    title: "Picture framing website design",
    seoTitle: "Picture Framing Shop Website Design | ROVQIX",
    description:
      "Websites for custom framers — pricing guidance, conservation options, turnaround, gallery of past work and what to bring in.",
    excerpt: "Pricing guidance for a service customers have no reference point for.",
    primaryKeyword: "picture framing website",
    secondaryKeywords: ["custom framing shop website", "framer website design", "art framing business website", "bespoke framing website"],
    answer:
      "A picture framing website from ROVQIX costs $349 to $749 and takes about a week. Priorities are pricing guidance by size, conservation versus standard framing, turnaround times and a gallery of finished work.",
    intro:
      "Customers have no idea what framing costs and often assume it is far cheaper than it is. Managing that before they walk in saves both sides an awkward conversation.",
    deliverables: [
      { title: "Pricing guidance by size", description: "Typical ranges for common sizes, so nobody is shocked at the counter.", icon: "Receipt" },
      { title: "Conservation explained", description: "UV glass, acid-free mounts, and why they cost more. Most customers do not know this exists.", icon: "ShieldCheck" },
      { title: "Gallery of finished work", description: "Framed pieces in situ, which is how customers picture their own.", icon: "Images" },
      { title: "Turnaround times", description: "Standard and rush, since much of this work has a gift deadline.", icon: "Clock" },
      { title: "What to bring", description: "How to transport artwork safely, and whether an appointment is needed.", icon: "ClipboardList" },
    ],
    sections: [
      {
        heading: "Why publish price ranges for a bespoke service?",
        answer: "Because customers walk in expecting $40 and leave when quoted $250.",
        body: [
          { type: "p", text: "Framing is genuinely bespoke, but the ranges are predictable enough to publish. A simple table by size, with a note that mouldings and glass options move the number, prevents most walk-outs." },
          { type: "list", items: [
            "Give a range for common sizes — A4, A3, 16x20, and oversized.",
            "Show what moves the price: moulding, glass type, mount, conservation.",
            "Note your ready-made options if you carry them, for price-sensitive customers.",
            "Explain that a quote is exact once they choose materials.",
          ]},
          { type: "callout", title: "Offer the cheaper option honestly", text: "Telling someone a ready-made frame is fine for a poster costs you a small sale and earns the one where they bring in a family painting. Framers who only push bespoke lose the second visit." },
        ],
      },
      {
        heading: "Why does conservation framing deserve explaining?",
        body: [
          { type: "p", text: "Most customers do not know that ordinary glass and acidic mounts will fade and damage artwork over years. It is genuinely useful information and it justifies the higher-priced option without a hard sell." },
          { type: "p", text: "Explain UV-filtering glass, acid-free materials and reversibility, and say plainly when a piece does not need it. That honesty is what makes the recommendation credible when it does." },
        ],
      },
    ],
    faqs: [
      { question: "Should we show a full price list?", answer: "Ranges by size work better than a full list. Exact pricing depends on materials chosen, and a range plus a clear quote process sets the right expectation." },
      { question: "Do we need an online ordering system?", answer: "Rarely. Framing needs the piece in hand. A gallery, price guidance and an easy way to book a consultation is enough." },
      { question: "How important is the gallery?", answer: "Very. Customers cannot picture the result from a materials list. Photos of finished pieces on walls do the selling." },
    ],
    related: ["art-gallery-website", "gift-shop-website", "print-shop-website"],
  },
  {
    slug: "upholstery-shop-website",
    eyebrow: "Upholstery",
    title: "Upholstery shop website design",
    seoTitle: "Upholstery Shop Website Design | ROVQIX",
    description:
      "Websites for upholsterers — before and after galleries, fabric selection, realistic pricing guidance, lead times and what is worth reupholstering.",
    excerpt: "Before and after work, plus an honest answer to 'is this worth reupholstering?'",
    primaryKeyword: "upholstery shop website",
    secondaryKeywords: ["upholsterer website design", "furniture reupholstery website", "auto upholstery website", "custom upholstery business"],
    answer:
      "An upholstery website from ROVQIX costs $349 to $1,290 and takes about a week. The core is a before and after gallery, fabric selection guidance, pricing ranges, lead times and honest advice on when a piece is worth restoring.",
    intro:
      "The question every upholstery enquiry is really asking is whether the piece is worth the money. Answering that directly wins the work.",
    deliverables: [
      { title: "Before and after gallery", description: "Transformations grouped by furniture type. The strongest selling tool in this trade.", icon: "Images" },
      { title: "Pricing ranges", description: "By piece type — dining chair, armchair, three-seat sofa — plus fabric cost separately.", icon: "Receipt" },
      { title: "Worth-it guidance", description: "When a frame justifies restoration and when it does not. Builds real trust.", icon: "Scale" },
      { title: "Fabric selection", description: "Durability ratings, pet and child suitability, and whether customers can supply their own.", icon: "Palette" },
      { title: "Lead times", description: "Realistic turnaround, which is often months and should not be a surprise.", icon: "Clock" },
    ],
    sections: [
      {
        heading: "Answer 'is it worth reupholstering?'",
        answer: "With a simple rule the customer can apply before they contact you.",
        body: [
          { type: "list", items: [
            "Solid hardwood frames and eight-way hand-tied springs are almost always worth restoring.",
            "Sentimental and antique pieces are worth it regardless of the maths.",
            "Flat-pack and stapled softwood frames usually are not.",
            "As a guide, if restoration costs more than a comparable new piece and the frame is not special, say so.",
            "Offer a photo assessment so they can find out without hauling furniture across town.",
          ]},
          { type: "callout", title: "Talking people out of work earns work", text: "Telling someone their mass-market sofa is not worth $1,200 of labour costs one job and earns the referral for their mother's wing chair. It is the highest-trust page an upholsterer can publish." },
        ],
      },
      {
        heading: "How should fabric be handled?",
        body: [
          { type: "p", text: "Fabric is usually a separate line from labour, and customers do not expect that. State it clearly and explain the durability rating system, because it is the main thing that determines whether they are happy in three years." },
          { type: "list", items: [
            "Explain rub counts in plain terms: what suits a formal chair versus a family sofa.",
            "Say whether customers can supply their own fabric, and how much yardage to buy.",
            "Note performance fabrics for pets and children, which is a very common requirement.",
            "Be clear that fabric cost is quoted separately from labour.",
          ]},
        ],
      },
    ],
    faqs: [
      { question: "Should we let customers supply fabric?", answer: "Many shops do, with a clear note about required yardage and that you cannot warranty a fabric you did not supply. State the policy rather than deciding case by case." },
      { question: "How do we handle long lead times?", answer: "Publish them honestly. Customers accept a three-month wait they were told about and complain bitterly about one they discovered later." },
      { question: "Is auto upholstery a separate page?", answer: "Yes if you do it. Different customer, different search, different pricing basis entirely." },
    ],
    related: ["flooring-contractor-website", "picture-framing-website", "antique-shop-website"],
  },
  {
    slug: "bookstore-website",
    eyebrow: "Bookstores",
    title: "Independent bookstore website design",
    seoTitle: "Independent Bookstore Website Design | ROVQIX",
    description:
      "Websites for independent bookshops — events calendar, staff picks, special orders, book clubs and online ordering that competes with the big retailers.",
    excerpt: "Events and staff picks — the two things a big online retailer cannot replicate.",
    primaryKeyword: "bookstore website design",
    secondaryKeywords: ["independent bookshop website", "book shop web design", "used bookstore website", "bookstore events website"],
    answer:
      "A bookstore website from ROVQIX costs $349 to $1,290 and takes about a week. The priorities are an events calendar, staff picks, special order requests, book clubs and opening hours — the things that differentiate you from an online giant.",
    intro:
      "You will not beat a global retailer on price or range. You beat them on curation, events and someone who has actually read the book.",
    deliverables: [
      { title: "Events calendar", description: "Author visits, signings, readings, book clubs. The main reason people check a bookshop site.", icon: "CalendarCheck" },
      { title: "Staff picks", description: "Short, genuine recommendations with a name attached. This is your entire competitive advantage.", icon: "BadgeCheck" },
      { title: "Special orders", description: "A request form for anything you do not stock, which most customers do not know you can do.", icon: "ClipboardList" },
      { title: "Book clubs", description: "Current titles, meeting times and how to join. Community drives independent retail.", icon: "Users" },
      { title: "Sections and specialisms", description: "What you are genuinely known for, so people know the trip is worth making.", icon: "ShoppingBag" },
    ],
    sections: [
      {
        heading: "How do independents compete online?",
        answer: "On curation and community, never on catalogue size or price.",
        body: [
          { type: "list", items: [
            "Staff picks with real names and real opinions. Algorithmic recommendations cannot fake this.",
            "Events. An author reading is something no online retailer offers.",
            "Special orders, which most customers assume only the big sites can do.",
            "A specialism — local history, sci-fi, children's — that gives people a reason to seek you out.",
            "Being open when someone needs a gift today.",
          ]},
          { type: "callout", title: "Staff picks are the highest-value page", text: "A short, honest, personal recommendation is the one thing a global retailer structurally cannot produce. Update three or four a month and it becomes the reason people follow your shop." },
        ],
      },
      {
        heading: "Should you sell online?",
        body: [
          { type: "p", text: "Competing on general stock is not winnable. What does work is selling the things that are specific to you — signed copies, event tickets, curated bundles, gift cards and local-interest titles." },
          { type: "p", text: "Several bookshop-friendly platforms let you offer a full catalogue without holding stock, which is worth considering if customers keep asking. Just do not expect it to be a major revenue line." },
        ],
      },
    ],
    faqs: [
      { question: "Should we list our full inventory?", answer: "No — it changes constantly and nobody expects it. Sections, specialisms, staff picks and new arrivals is the right level." },
      { question: "Are events worth the effort?", answer: "They are usually the single best driver of footfall and loyalty for an independent bookshop, and the website is where people find them." },
      { question: "Can customers order books we do not stock?", answer: "Yes, and you should say so prominently. Most customers assume special orders are not a thing anymore." },
    ],
    related: ["gift-shop-website", "record-shop-website", "art-gallery-website"],
  },
  {
    slug: "record-shop-website",
    eyebrow: "Record shops",
    title: "Record shop website design",
    seoTitle: "Record Shop Website Design | ROVQIX",
    description:
      "Websites for record shops — new arrivals, we-buy-collections information, genres stocked, in-store events and Record Store Day.",
    excerpt: "New arrivals and 'we buy collections' — the two pages that actually get used.",
    primaryKeyword: "record shop website design",
    secondaryKeywords: ["vinyl store website", "record store web design", "used vinyl shop website", "music shop website"],
    answer:
      "A record shop website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are new arrivals, information on buying collections from the public, genres stocked, in-store events and Record Store Day plans.",
    intro:
      "Two pages do most of the work in a record shop site: what came in this week, and whether you buy collections.",
    deliverables: [
      { title: "New arrivals", description: "Updatable by you from a phone, since regulars check it weekly.", icon: "RefreshCw" },
      { title: "We buy collections", description: "What you buy, how valuation works and how to arrange it. A major source of stock and walk-ins.", icon: "Receipt" },
      { title: "Genres and specialisms", description: "What you actually go deep on, so collectors know whether to travel.", icon: "ShoppingBag" },
      { title: "Events and listening", description: "In-store sets, launches and Record Store Day, which is the biggest day of your year.", icon: "CalendarCheck" },
      { title: "Grading explained", description: "Your condition grading, which serious buyers check before trusting a shop.", icon: "BadgeCheck" },
    ],
    sections: [
      {
        heading: "Why does 'we buy collections' matter so much?",
        answer: "Because it is both your stock pipeline and a high-intent search.",
        body: [
          { type: "list", items: [
            "Someone clearing a relative's collection searches for a shop that buys — that is a valuable, urgent enquiry.",
            "Explain what you buy and what you do not, so nobody arrives with three hundred unsellable records.",
            "Describe how valuation works and whether you pay cash or trade credit.",
            "Say whether you travel for large collections.",
            "Set expectations on price honestly — most collections are worth less than the owner hopes.",
          ]},
          { type: "callout", title: "Manage price expectations on the page", text: "A short, kind paragraph explaining that common pressings have little resale value prevents a difficult conversation at the counter and makes you the shop people trust with the good stuff." },
        ],
      },
      {
        heading: "Should you sell online?",
        body: [
          { type: "p", text: "Most shops list rarities on a marketplace rather than building their own store — the buyer base is already there and the listing tools handle grading and shipping." },
          { type: "p", text: "Your own site is better used for new arrivals, holds and events. A 'hold this for me' request is often more valuable to a local shop than a checkout." },
        ],
      },
    ],
    faqs: [
      { question: "How often should new arrivals be updated?", answer: "Weekly at least. It is the page regulars check, and a stale list tells them there is nothing new to come in for." },
      { question: "Should we list individual records online?", answer: "Only rarities, and usually on an established marketplace. Listing general stock is more work than it returns for most shops." },
      { question: "Is Record Store Day worth a dedicated page?", answer: "Yes. It is the highest-traffic day of the year and people search specifically for which shops are participating and what queuing looks like." },
    ],
    related: ["bookstore-website", "music-instrument-store-website", "boutique-retail-website"],
  },
  {
    slug: "game-and-hobby-shop-website",
    eyebrow: "Game shops",
    title: "Game and hobby shop website design",
    seoTitle: "Game & Hobby Shop Website Design | ROVQIX",
    description:
      "Websites for game and hobby shops — event calendar, tournament schedules, table booking, product lines and community information.",
    excerpt: "The events calendar is the product. Everything else supports it.",
    primaryKeyword: "game shop website design",
    secondaryKeywords: ["hobby shop website", "board game store website", "tabletop gaming shop website", "comic shop website design"],
    answer:
      "A game and hobby shop website from ROVQIX costs $349 to $1,290 and takes about a week. The event calendar is the centrepiece — tournaments, game nights and league schedules — alongside table booking, product lines and community information.",
    intro:
      "A game shop's website is really an events site with a shop attached. Regulars check the calendar far more often than they check stock.",
    deliverables: [
      { title: "Event calendar", description: "Tournaments, game nights, leagues and demos. Updated by you, checked weekly by regulars.", icon: "CalendarCheck" },
      { title: "Table booking", description: "Reserving play space, which is genuinely scarce on busy nights.", icon: "Users" },
      { title: "Game systems supported", description: "Which games you host and stock. Players search by system, not by 'game shop'.", icon: "Blocks" },
      { title: "Newcomer information", description: "Whether beginners are welcome and how to join a first session. The biggest barrier to new customers.", icon: "MessageSquare" },
      { title: "Preorders and releases", description: "Upcoming releases customers can reserve, which locks in stock and revenue.", icon: "ShoppingBag" },
    ],
    sections: [
      {
        heading: "Why is the newcomer page so important?",
        answer: "Because walking into an established gaming community alone is genuinely intimidating.",
        body: [
          { type: "list", items: [
            "Say plainly whether beginners are welcome at each event, not just 'all welcome'.",
            "Explain what to bring, and whether loaner sets or demo copies are available.",
            "Describe what actually happens at a first session, step by step.",
            "Name a person to ask for on arrival. It removes most of the anxiety.",
            "Mention if there are dedicated beginner nights, which are worth running.",
          ]},
          { type: "callout", title: "This is your growth page", text: "Existing players already know your schedule. The website's job is converting the person who has been curious for a year into someone who turns up on a Tuesday." },
        ],
      },
      {
        heading: "How should the calendar work?",
        body: [
          { type: "p", text: "It needs to be editable by you in under a minute, filterable by game system, and clear about entry fees, start times and whether registration is required." },
          { type: "p", text: "Recurring events should repeat automatically rather than needing re-entry each week — that is the difference between a calendar that stays current and one that goes stale by March." },
        ],
      },
    ],
    faqs: [
      { question: "Should we sell products online?", answer: "Singles and preorders can work. General stock rarely competes with the big online retailers, and your advantage is the play space and community, not the catalogue." },
      { question: "Can players register for tournaments online?", answer: "Yes, and it helps you plan numbers. Many shops link to the official organiser platform for the system rather than building their own." },
      { question: "How do we handle table bookings?", answer: "A simple request or reservation form is enough for most shops. It prevents the Friday-night conflict over who booked what." },
    ],
    related: ["bookstore-website", "arcade-website", "record-shop-website"],
  },
  {
    slug: "art-gallery-website",
    eyebrow: "Art galleries",
    title: "Art gallery website design",
    seoTitle: "Art Gallery Website Design | ROVQIX",
    description:
      "Websites for galleries — current and past exhibitions, artist pages, works with proper image quality, enquiries and private view invitations.",
    excerpt: "Image quality is the whole product. Everything else is navigation.",
    primaryKeyword: "art gallery website design",
    secondaryKeywords: ["gallery website design", "art exhibition website", "artist representation website", "fine art gallery web design"],
    answer:
      "An art gallery website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers current and past exhibitions, artist pages, individual works presented at high image quality, enquiry handling and private view invitations.",
    intro:
      "A gallery site is judged on how the work looks on screen. Compressed, badly cropped images undermine the art and the price.",
    deliverables: [
      { title: "High-quality image presentation", description: "Works shown large and sharp, colour-accurate, with zoom. Compression is the enemy here.", icon: "Images" },
      { title: "Exhibition pages", description: "Current, upcoming and archived, since past exhibitions build institutional credibility.", icon: "CalendarCheck" },
      { title: "Artist pages", description: "Biography, statement, CV and available works. Collectors research the artist before the piece.", icon: "Users" },
      { title: "Work details", description: "Medium, dimensions, year and availability. Price shown or on request, consistently.", icon: "FileText" },
      { title: "Enquiry and mailing list", description: "Enquiries on specific works, and private view invitations, which drive actual sales.", icon: "MessageSquare" },
    ],
    sections: [
      {
        heading: "Why does image handling matter more here than anywhere?",
        answer: "Because the image is the product, and a bad one makes the work look cheap.",
        body: [
          { type: "list", ordered: true, items: [
            "Photograph work properly — even lighting, colour-accurate, square to the canvas.",
            "Serve large images without crushing them; the site should load fast without visibly degrading the work.",
            "Allow zoom on detail, which is how collectors assess surface and technique.",
            "Never crop a work to fit a layout. Show the full piece with its real proportions.",
            "Include a scale reference or dimensions prominently, since scale is impossible to judge on screen.",
          ]},
          { type: "callout", title: "Fast and high quality are not in conflict", text: "Modern image formats let you serve a large, sharp image at a fraction of the old file size. Galleries that compress heavily to stay fast are solving the problem the wrong way." },
        ],
      },
      {
        heading: "Should prices be shown?",
        body: [
          { type: "p", text: "Be consistent, whichever you choose. Mixed practice — some works priced, some 'on request' — reads as though pricing depends on who is asking." },
          { type: "p", text: "Showing prices is increasingly common at lower price points and removes a barrier for newer collectors. At the higher end, 'price on request' remains normal and expected." },
        ],
      },
    ],
    faqs: [
      { question: "Should we archive past exhibitions?", answer: "Yes. The archive is what demonstrates a gallery's programme and seriousness, and those pages continue to attract searches for the artists shown." },
      { question: "Can we sell online?", answer: "Increasingly common at accessible price points. Above that, enquiry-led sales remain the norm and the site's job is to prompt the conversation." },
      { question: "How important is the mailing list?", answer: "It is often the single biggest driver of private view attendance and sales. Make signing up easy and prominent." },
    ],
    related: ["picture-framing-website", "photographer-website", "bookstore-website"],
  },
];

export const localSpecialistPages = makeLocalPages(specs);
