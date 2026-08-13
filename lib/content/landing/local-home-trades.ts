import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/**
 * Specialist home-service trades. Each is a distinct search with its own
 * seasonality, licensing and buying trigger — check the differentiator is real
 * before adding another one here.
 */
const specs: LocalSpec[] = [
  {
    slug: "locksmith-website",
    eyebrow: "Locksmiths",
    title: "Locksmith website design",
    seoTitle: "Locksmith Website Design from $349 | ROVQIX",
    description:
      "Websites for locksmiths — emergency call button, licence and ID verification, service area, pricing and 24-hour availability.",
    excerpt: "One-tap calling and visible licensing, in a trade full of scam operators.",
    primaryKeyword: "locksmith website design",
    secondaryKeywords: [
      "locksmith web design",
      "emergency locksmith website",
      "auto locksmith website",
      "24 hour locksmith website",
    ],
    answer:
      "A locksmith website from ROVQIX costs $349 to $749 and takes about a week. It is built around one-tap emergency calling, visible licence and identification details, service area and honest pricing — because this trade has a serious reputation problem with scam operators.",
    intro:
      "Locksmithing has one of the worst scam problems of any trade. Being visibly licensed, local and priced is your entire competitive advantage.",
    deliverables: [
      {
        title: "One-tap emergency call",
        description:
          "Fixed to the screen. Someone locked out is on a phone with low battery and no patience.",
        icon: "Phone",
      },
      {
        title: "Licence and identification",
        description:
          "Licence number and what ID your technician will carry. Directly addresses the scam problem.",
        icon: "BadgeCheck",
      },
      {
        title: "Honest pricing",
        description:
          "Callout fee and typical job prices. Bait-and-switch pricing is the defining complaint in this trade.",
        icon: "Receipt",
      },
      {
        title: "Service area and response time",
        description:
          "Where you cover and roughly how fast you arrive, which is the deciding factor.",
        icon: "Globe",
      },
      {
        title: "Services split",
        description:
          "Residential, commercial and automotive are different jobs and different searches.",
        icon: "Network",
      },
    ],
    sections: [
      {
        heading: "How do you separate yourself from scam locksmiths?",
        answer:
          "Publish your licence, your real address and your actual prices — three things scam operators cannot.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Licence number displayed prominently, verifiable with your state.",
              "A real local address, not just a phone number and a service radius.",
              "Published callout fee and typical prices, since the classic scam is a low quote then a huge bill.",
              "Named technicians and what ID they carry when they arrive.",
              "Marked vehicles, if you have them, shown in photos.",
              "Years operating locally, stated as a number.",
            ],
          },
          {
            type: "callout",
            title: "Consumers are actively warned about your trade",
            text: "Local news and consumer bodies regularly run warnings about locksmith scams. That means customers arrive suspicious — and every verifiable detail you publish converts that suspicion into a call.",
          },
        ],
      },
      {
        heading: "What does an emergency visitor need?",
        body: [
          {
            type: "list",
            items: [
              "A tappable number above everything else, with no scrolling required.",
              "Confirmation you are available now, not just '24/7' as a slogan.",
              "Your service area, so they know instantly whether to keep looking.",
              "A price expectation, so they are not afraid to call.",
              "A page that loads in a second on a phone with one bar and 4% battery.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I publish my prices?",
        answer:
          "Yes — callout fee and typical job prices. In a trade defined by bait-and-switch billing, being the one company that publishes real numbers is the strongest signal you can send.",
      },
      {
        question: "Do I need more than one page?",
        answer:
          "Often not. Residential, commercial and automotive are worth separate pages if you do all three seriously, since they are distinct searches. Otherwise one page is enough.",
      },
      {
        question: "What matters most for getting calls?",
        answer:
          "Your Google Business Profile, then the reviews on it. Most locksmith searches are resolved on the map. The website's job is to confirm you are legitimate once they click through.",
      },
    ],
    related: ["garage-door-company-website", "handyman-website", "security-system-installer-website"],
  },

  {
    slug: "appliance-repair-website",
    eyebrow: "Appliance repair",
    title: "Appliance repair website design",
    seoTitle: "Appliance Repair Website Design | ROVQIX",
    description:
      "Websites for appliance repair businesses — brands serviced, diagnostic fee, appliance-specific pages, booking and service area.",
    excerpt: "Brands serviced and the diagnostic fee, which is what every caller asks.",
    primaryKeyword: "appliance repair website design",
    secondaryKeywords: [
      "appliance repair web design",
      "washer repair website",
      "refrigerator repair website",
      "appliance service website",
    ],
    answer:
      "An appliance repair website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are the brands you service, your diagnostic fee, pages for the main appliance types, online booking and your service area.",
    intro:
      "Every appliance repair call starts with the same two questions: do you fix this brand, and what does it cost to come out.",
    deliverables: [
      {
        title: "Brands serviced",
        description:
          "Listed by name. People search 'Samsung fridge repair', and this is how they find you.",
        icon: "ShoppingBag",
      },
      {
        title: "Diagnostic fee stated",
        description:
          "What a callout costs and whether it comes off the repair. The single most-asked question.",
        icon: "Receipt",
      },
      {
        title: "Pages by appliance",
        description:
          "Washer, dryer, fridge, oven, dishwasher. Each is a distinct search with distinct urgency.",
        icon: "Network",
      },
      {
        title: "Repair-or-replace guidance",
        description:
          "Honest advice on when a repair is not worth it, which builds real trust and referrals.",
        icon: "Scale",
      },
      {
        title: "Booking with time windows",
        description:
          "Realistic arrival windows, since customers have to take time off work.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "Why publish repair-or-replace guidance?",
        answer:
          "Because telling someone their ten-year-old dryer is not worth fixing earns more business than fixing it would.",
        body: [
          {
            type: "list",
            items: [
              "A rough rule customers can apply themselves — age, repair cost versus replacement cost.",
              "Typical lifespan by appliance type, which almost nobody knows.",
              "Which faults are usually cheap and which usually are not.",
              "When a repair genuinely makes sense on an older machine.",
              "It positions you as honest in a trade where people expect to be upsold.",
            ],
          },
          {
            type: "callout",
            title: "Honesty here is commercially smart",
            text: "The customer you talk out of a $400 repair on a dying machine calls you when they need the new one installed, and tells their neighbour. This page consistently outperforms the service pages on trust.",
          },
        ],
      },
      {
        heading: "Why list brands by name?",
        body: [
          {
            type: "p",
            text: "Because people search by brand and model, not by 'appliance repair'. A page listing every manufacturer you service captures searches your competitors miss entirely.",
          },
          {
            type: "p",
            text: "Note any brands you are factory authorised for. That is a genuine differentiator and worth stating clearly, particularly for warranty work.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I list every brand?",
        answer:
          "Every brand you genuinely service, yes. Do not list brands you cannot get parts for — a wasted callout costs you more than the search visibility is worth.",
      },
      {
        question: "Should I show the diagnostic fee?",
        answer:
          "Yes. It is the first question on every call and publishing it filters out people who expected a free visit, which saves you a great deal of phone time.",
      },
      {
        question: "Do I need a page per appliance?",
        answer:
          "For the main five — washer, dryer, fridge, oven, dishwasher — yes, since those are distinct high-volume searches. Not for every possible device.",
      },
    ],
    related: ["hvac-company-website", "handyman-website", "electrician-website"],
  },

  {
    slug: "garage-door-company-website",
    eyebrow: "Garage doors",
    title: "Garage door company website design",
    seoTitle: "Garage Door Company Website Design | ROVQIX",
    description:
      "Websites for garage door companies — emergency repair, spring replacement pricing, new door galleries, opener brands and booking.",
    excerpt: "Emergency spring repair up front, new door galleries behind it.",
    primaryKeyword: "garage door website design",
    secondaryKeywords: [
      "garage door repair website",
      "garage door company web design",
      "overhead door website",
      "garage door installer website",
    ],
    answer:
      "A garage door website from ROVQIX costs $349 to $1,290 and takes about a week. It splits two very different jobs: emergency repair — usually a broken spring — and planned new door installation, which is a considered purchase with a gallery.",
    intro:
      "Garage door businesses serve a panicked customer with a broken spring and a homeowner browsing door styles. Those need different pages.",
    deliverables: [
      {
        title: "Emergency repair path",
        description:
          "Broken spring, door off track, opener failed. Urgent, phone-first, above everything else.",
        icon: "Zap",
      },
      {
        title: "Repair pricing",
        description:
          "Spring replacement and common repairs priced, since these are standardised jobs.",
        icon: "Receipt",
      },
      {
        title: "New door gallery",
        description:
          "Styles, materials and colours. This is a visual purchase and customers browse before enquiring.",
        icon: "Images",
      },
      {
        title: "Opener brands",
        description:
          "Which openers you install and service, including smart models people specifically search for.",
        icon: "Blocks",
      },
      {
        title: "Safety messaging",
        description:
          "Why spring replacement is not a DIY job. It is genuinely dangerous and worth stating.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "Why split repair and installation?",
        answer:
          "Because one customer is panicking and one is browsing, and a page cannot serve both.",
        body: [
          {
            type: "table",
            head: ["", "Emergency repair", "New installation"],
            rows: [
              ["Urgency", "Today", "Weeks"],
              ["Decides on", "Availability and price", "Style and quality"],
              ["Main action", "Phone call", "Quote request"],
              ["Content needed", "Price, speed, area", "Gallery, materials, warranty"],
              ["Typical value", "$150 – $450", "$1,200 – $5,000"],
            ],
          },
          {
            type: "callout",
            title: "Repair pays the bills, installation pays the margin",
            text: "Emergency repair should be the most prominent path because it is the volume. Installation deserves its own well-built section because it is where the profit is.",
          },
        ],
      },
      {
        heading: "Should spring replacement be priced publicly?",
        body: [
          {
            type: "p",
            text: "Yes. It is a standardised job and customers are ringing round for a number anyway. Publishing it means you get the call instead of the third company they try.",
          },
          {
            type: "p",
            text: "It also lets you make the safety argument properly — spring replacement causes serious injuries every year, and a customer who understands why it is priced the way it is stops treating it as a commodity.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show new door prices?",
        answer:
          "Ranges by style and material. Exact pricing depends on size and options, but 'insulated steel doors typically $1,200 to $2,400 installed' sets expectations and filters enquiries.",
      },
      {
        question: "How important is the gallery?",
        answer:
          "For installation, it is the main content. Homeowners choose a door visually, and photos of doors on real houses in your area work far better than manufacturer catalogue images.",
      },
      {
        question: "Do we need emergency availability on the site?",
        answer:
          "State your actual hours honestly. Claiming 24/7 and not answering at 11pm generates bad reviews faster than the extra calls are worth.",
      },
    ],
    related: ["locksmith-website", "fencing-contractor-website", "handyman-website"],
  },

  {
    slug: "painting-contractor-website",
    eyebrow: "Painters",
    title: "Painting contractor website design",
    seoTitle: "Painting Contractor Website Design | ROVQIX",
    description:
      "Websites for painting contractors — before and after galleries, interior versus exterior, quote requests with photos, and licence details.",
    excerpt: "Before and after photos, and a quote form that takes photos instead of a site visit.",
    primaryKeyword: "painting contractor website design",
    secondaryKeywords: [
      "painter website design",
      "house painting website",
      "commercial painting website",
      "painting company web design",
    ],
    answer:
      "A painting contractor website from ROVQIX costs $349 to $1,290 and takes about a week. The highest-value elements are before and after galleries, separate interior and exterior paths, a quote form that accepts photos, and your licence and insurance details.",
    intro:
      "Painting is sold almost entirely on before and after photos, and quoted far more efficiently when the customer sends pictures first.",
    deliverables: [
      {
        title: "Before and after galleries",
        description:
          "Same angle, before and after. The most persuasive content available in this trade.",
        icon: "Images",
      },
      {
        title: "Interior and exterior split",
        description:
          "Different seasons, different concerns, different price points. Separate them.",
        icon: "Network",
      },
      {
        title: "Photo-based quoting",
        description:
          "Let customers send room photos and dimensions, so you can quote without driving out.",
        icon: "Phone",
      },
      {
        title: "Licence and insurance",
        description:
          "Displayed clearly, since customers are letting you into the house for several days.",
        icon: "BadgeCheck",
      },
      {
        title: "Process and prep",
        description:
          "What you do about furniture, masking and cleanup. Prep quality is the real differentiator.",
        icon: "ClipboardList",
      },
    ],
    sections: [
      {
        heading: "How do you quote without a site visit?",
        answer:
          "Ask for room photos and rough dimensions, which is enough for a ballpark on most interior work.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Number of rooms and rough dimensions, or square footage if they know it.",
              "Photos of each room, including ceilings and trim.",
              "Ceiling height, which changes the job significantly.",
              "Current condition — bare walls, wallpaper, damage, previous colour.",
              "Whether they want ceilings and trim included.",
              "A note that the quote is confirmed on inspection, which protects you.",
            ],
          },
          {
            type: "callout",
            title: "Photo quoting removes your biggest cost",
            text: "Driving to every enquiry to quote is the largest hidden expense in a painting business. A form that captures photos and dimensions lets you filter and ballpark before committing an afternoon.",
          },
        ],
      },
      {
        heading: "What actually wins painting jobs?",
        body: [
          {
            type: "list",
            items: [
              "Before and after photos of work in homes like theirs.",
              "Clarity about prep — sanding, filling, masking — since that is what separates good from cheap.",
              "How you protect furniture and floors, and who moves what.",
              "Whether the quote includes paint, and which brand and grade.",
              "How long the job takes and whether the crew works consecutive days.",
              "Cleanup, which is the most common complaint about painters.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show prices?",
        answer:
          "A per-room or per-square-foot range works well for interiors. Exterior work varies too much with height, condition and access, so a starting figure plus a photo-based quote is more realistic.",
      },
      {
        question: "How many gallery photos?",
        answer:
          "Twenty to forty, grouped by interior and exterior. Same-angle before and after pairs are worth far more than finished shots alone.",
      },
      {
        question: "Do we need separate commercial pages?",
        answer:
          "If you do commercial work seriously, yes. Commercial buyers care about scheduling around operations, insurance limits and references — completely different concerns from a homeowner.",
      },
    ],
    related: ["general-contractor-website", "flooring-contractor-website", "pressure-washing-website"],
  },

  {
    slug: "flooring-contractor-website",
    eyebrow: "Flooring",
    title: "Flooring contractor website design",
    seoTitle: "Flooring Contractor Website Design | ROVQIX",
    description:
      "Websites for flooring contractors — material galleries, per-square-foot pricing, room visualisation, and quote requests that capture area.",
    excerpt: "Material galleries and per-square-foot pricing, which is how customers compare.",
    primaryKeyword: "flooring contractor website design",
    secondaryKeywords: [
      "flooring company website",
      "hardwood flooring website",
      "tile installer website",
      "carpet installer website",
    ],
    answer:
      "A flooring contractor website from ROVQIX costs $349 to $1,290 and takes about a week. It centres on material galleries by type, per-square-foot pricing ranges, installation details and a quote form that captures room dimensions.",
    intro:
      "Flooring customers shop by material first — hardwood, LVP, tile, carpet — and then by price per square foot. Structure the site that way.",
    deliverables: [
      {
        title: "Galleries by material",
        description:
          "Hardwood, luxury vinyl, tile, carpet, laminate. Customers browse by material, not by room.",
        icon: "Images",
      },
      {
        title: "Per-square-foot pricing",
        description:
          "Ranges by material, installed. This is the unit customers compare on and it is rarely published.",
        icon: "Receipt",
      },
      {
        title: "What is included",
        description:
          "Subfloor prep, old floor removal, disposal, trim, transitions. Where quotes differ most.",
        icon: "ClipboardList",
      },
      {
        title: "Quote form with area",
        description:
          "Room dimensions and current flooring, which is enough to give a useful ballpark.",
        icon: "LayoutTemplate",
      },
      {
        title: "Timeline and disruption",
        description:
          "How long, and whether they can live in the house during it. A major practical concern.",
        icon: "Clock",
      },
    ],
    sections: [
      {
        heading: "Why publish per-square-foot pricing?",
        answer:
          "Because it is the unit flooring is compared in, and almost no contractor publishes it.",
        body: [
          {
            type: "table",
            head: ["What to publish", "Why"],
            rows: [
              ["Material cost range per sq ft", "Customers research this first"],
              ["Installation cost per sq ft", "Separates you from box-store pricing"],
              ["Removal and disposal cost", "A common surprise line item"],
              ["Subfloor prep range", "The most frequent quote variance"],
              ["Typical total for a room size", "Makes it concrete for a non-expert"],
            ],
          },
          {
            type: "callout",
            title: "Box stores publish, so you should too",
            text: "Customers arrive having already seen big-box per-square-foot pricing. If you publish nothing, you are assumed to be more expensive. Publishing lets you show what is included that theirs is not.",
          },
        ],
      },
      {
        heading: "What content wins flooring jobs?",
        body: [
          {
            type: "list",
            items: [
              "Large, well-lit photos of finished floors in real homes, not manufacturer renders.",
              "Honest comparison of materials — durability, cost, moisture, pets, resale.",
              "Subfloor preparation explained, since it is where cheap quotes cut corners.",
              "Warranty on materials and on your installation, stated separately.",
              "Photos of the crew working, which reassures on disruption and tidiness.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we compare materials honestly, including cheaper ones?",
        answer:
          "Yes. A page that explains when LVP is a better choice than hardwood earns trust and still gets you the installation job. Pushing everyone to the most expensive option is transparent and loses work.",
      },
      {
        question: "How do we handle box-store competition?",
        answer:
          "Publish what your price includes — subfloor prep, removal, disposal, trim, warranty. Box-store install quotes routinely exclude several of those, and customers only find out later.",
      },
      {
        question: "Do we need a room visualiser?",
        answer:
          "Rarely worth it for an independent contractor. Good photography of real installed floors converts better and costs a fraction as much to maintain.",
      },
    ],
    related: ["painting-contractor-website", "general-contractor-website", "handyman-website"],
  },

  {
    slug: "fencing-contractor-website",
    eyebrow: "Fencing",
    title: "Fencing contractor website design",
    seoTitle: "Fencing Contractor Website Design | ROVQIX",
    description:
      "Websites for fencing contractors — material and style galleries, per-linear-foot pricing, permit guidance and quote requests.",
    excerpt: "Per-linear-foot pricing, style galleries and the permit question everyone asks.",
    primaryKeyword: "fencing contractor website design",
    secondaryKeywords: [
      "fence company website",
      "fence installer website design",
      "fencing website",
      "deck and fence website",
    ],
    answer:
      "A fencing contractor website from ROVQIX costs $349 to $1,290 and takes about a week. Priorities are galleries by material and style, per-linear-foot pricing, permit and property-line guidance, and a quote form capturing fence length.",
    intro:
      "Two questions dominate fencing enquiries: what does it cost per foot, and do I need a permit. Answer both and the enquiries get much better.",
    deliverables: [
      {
        title: "Galleries by material",
        description:
          "Wood, vinyl, chain link, aluminium, composite. Customers decide on material first.",
        icon: "Images",
      },
      {
        title: "Per-linear-foot pricing",
        description:
          "Installed ranges by material and height. The unit fencing is compared in.",
        icon: "Receipt",
      },
      {
        title: "Permit guidance",
        description:
          "Whether permits are needed locally, height limits and setbacks. Constantly asked, rarely answered.",
        icon: "FileText",
      },
      {
        title: "Property line advice",
        description:
          "Surveys, neighbour agreements and shared fences. This is where fencing jobs go wrong.",
        icon: "ShieldCheck",
      },
      {
        title: "Quote form with length",
        description:
          "Linear feet, height, material and gates — enough for a real ballpark without a visit.",
        icon: "ClipboardList",
      },
    ],
    sections: [
      {
        heading: "Why answer the permit question on the site?",
        answer:
          "Because it is the first thing a homeowner worries about and almost no fencing site addresses it.",
        body: [
          {
            type: "list",
            items: [
              "Whether your local jurisdiction requires a permit, and for what height.",
              "Typical height limits for front and rear yards, which differ.",
              "Setback requirements from the property line and sidewalk.",
              "Whether you handle the permit application or the homeowner does.",
              "HOA approval, which catches people out constantly.",
            ],
          },
          {
            type: "callout",
            title: "This page ranks and converts",
            text: "'Do I need a permit for a fence in [area]' is a high-volume local search. A clear page answering it brings in exactly the homeowner who is about to commission a fence.",
          },
        ],
      },
      {
        heading: "How should property lines be handled?",
        body: [
          {
            type: "p",
            text: "Directly. Fence disputes with neighbours are the most common way these jobs go badly, and a contractor who raises it before installation looks professional rather than difficult.",
          },
          {
            type: "p",
            text: "Explain when a survey is advisable, how shared fences are usually handled, and that you build to the line the customer identifies. It protects you and it genuinely helps them.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish per-foot pricing?",
        answer:
          "Yes, as ranges by material and height. It is how customers compare, and publishing means you get the call rather than being assumed expensive.",
      },
      {
        question: "How do we handle gates in pricing?",
        answer:
          "Price them separately and say so. Gates are a significant cost and quotes that bundle them vaguely cause disputes when the customer wants three instead of one.",
      },
      {
        question: "Should we advise on property lines?",
        answer:
          "Advise generally, but never determine a boundary yourself. Say clearly that the homeowner is responsible for confirming the line, and recommend a survey where there is doubt.",
      },
    ],
    related: ["landscaping-company-website", "general-contractor-website", "garage-door-company-website"],
  },

  {
    slug: "pressure-washing-website",
    eyebrow: "Pressure washing",
    title: "Pressure washing website design",
    seoTitle: "Pressure Washing Website Design | ROVQIX",
    description:
      "Websites for pressure washing businesses — dramatic before and after photos, surface-based pricing, service area and instant quotes.",
    excerpt: "The most dramatic before-and-after photos of any trade. Use them properly.",
    primaryKeyword: "pressure washing website design",
    secondaryKeywords: [
      "power washing website",
      "soft washing website design",
      "driveway cleaning website",
      "exterior cleaning website",
    ],
    answer:
      "A pressure washing website from ROVQIX costs $349 to $749 and takes about a week. It is built around before and after photography, pricing by surface and area, service area and a quote form — this trade converts on visual proof more than any other.",
    intro:
      "Pressure washing has the best before and after photos in any trade. A half-cleaned driveway sells the job on its own.",
    deliverables: [
      {
        title: "Before and after photos",
        description:
          "Especially half-done shots showing the clean line. Nothing sells this service better.",
        icon: "Images",
      },
      {
        title: "Pricing by surface",
        description:
          "Driveway, siding, deck, roof — priced by area. Simple enough to publish, and most do not.",
        icon: "Receipt",
      },
      {
        title: "Soft wash explained",
        description:
          "Which surfaces need low pressure and why, which prevents damage and demonstrates competence.",
        icon: "ShieldCheck",
      },
      {
        title: "Service area",
        description:
          "Clear boundaries, since travel time destroys margin on jobs this size.",
        icon: "Globe",
      },
      {
        title: "Photo-based quoting",
        description:
          "Let customers send a photo and rough dimensions for an immediate ballpark.",
        icon: "Phone",
      },
    ],
    sections: [
      {
        heading: "How should before and after photos be presented?",
        answer:
          "Half-cleaned shots first — one surface, half done, in a single frame.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "The half-done shot is the single most persuasive image in this trade. Lead with it.",
              "Same angle, same lighting for separate before and after pairs.",
              "Group by surface type so customers find their own situation.",
              "Include the difficult jobs — heavy algae, oil stains, rust — which is what people search for.",
              "Keep the files optimised. Twenty large photos will otherwise make the page crawl.",
            ],
          },
          {
            type: "callout",
            title: "This trade converts on photos alone",
            text: "Pressure washing needs almost no persuasive copy. A gallery of genuinely dramatic transformations, a price and a phone number will out-convert any amount of writing.",
          },
        ],
      },
      {
        heading: "Why explain soft washing?",
        body: [
          {
            type: "p",
            text: "Because customers do not know that roofs, siding and older wood need low pressure, and a competitor who blasts them will cause damage. Explaining the difference positions you as the one who knows what they are doing.",
          },
          {
            type: "p",
            text: "It also justifies your price against the cheapest quote in the area, which is usually someone with a rented machine and no understanding of surface tolerance.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish prices?",
        answer:
          "Yes. Driveways and siding price predictably by area, and this is a comparison-shopped service. Publishing gets you the call.",
      },
      {
        question: "Can we quote from a photo?",
        answer:
          "Usually yes, for driveways and single-storey siding. Roofs and multi-storey work need a look, but a photo plus dimensions gets you close enough to a ballpark.",
      },
      {
        question: "Do we need many pages?",
        answer:
          "One page per main surface — driveway, siding, deck, roof — since those are separate searches. Beyond that, a gallery and a quote form is enough.",
      },
    ],
    related: ["window-cleaning-website", "gutter-cleaning-website", "cleaning-service-website"],
  },

  {
    slug: "window-cleaning-website",
    eyebrow: "Window cleaning",
    title: "Window cleaning website design",
    seoTitle: "Window Cleaning Website Design | ROVQIX",
    description:
      "Websites for window cleaning businesses — pricing by property size, recurring plans, residential and commercial paths, and online booking.",
    excerpt: "Price by window count or property size, plus recurring plans that stick.",
    primaryKeyword: "window cleaning website design",
    secondaryKeywords: [
      "window cleaner website",
      "window washing website design",
      "commercial window cleaning website",
      "residential window cleaning website",
    ],
    answer:
      "A window cleaning website from ROVQIX costs $349 to $749 and takes about a week. The most valuable elements are pricing by property size or window count, recurring service plans, separate residential and commercial paths, and online booking.",
    intro:
      "Window cleaning prices predictably by window count, which means you can quote and book online — something almost no competitor does.",
    deliverables: [
      {
        title: "Instant pricing",
        description:
          "By property size or window count. Predictable enough to publish and quote automatically.",
        icon: "Receipt",
      },
      {
        title: "Recurring plans",
        description:
          "Quarterly or biannual scheduling, which is the difference between a job and a customer.",
        icon: "RefreshCw",
      },
      {
        title: "Online booking",
        description:
          "Pick a date and confirm. Most competitors still require a phone call.",
        icon: "CalendarCheck",
      },
      {
        title: "What is included",
        description:
          "Inside and out, frames, sills, screens, tracks. Where quotes differ and disputes start.",
        icon: "ClipboardList",
      },
      {
        title: "Commercial path",
        description:
          "Storefronts and offices on contract, which is steadier revenue than residential.",
        icon: "Building2",
      },
    ],
    sections: [
      {
        heading: "Why offer instant online booking?",
        answer:
          "Because the price is predictable and almost every competitor still insists on a phone call.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ask for storeys, rough window count or property size.",
              "Show a price immediately, with a note that it is confirmed on arrival.",
              "Let them pick a date and book there and then.",
              "Offer the recurring discount at the point of booking, which is when it converts best.",
              "Send a reminder the day before, which cuts no-access visits substantially.",
            ],
          },
          {
            type: "callout",
            title: "No-access visits are the hidden cost",
            text: "Turning up to a locked gate or an absent customer is pure loss. A reminder the day before, and clear instructions about access and pets, removes most of them.",
          },
        ],
      },
      {
        heading: "How do you sell recurring cleaning?",
        body: [
          {
            type: "list",
            items: [
              "Offer it at the moment of first booking, not afterwards.",
              "Show the per-clean saving against one-off pricing.",
              "Make the frequency choice simple — quarterly or twice a year, not six options.",
              "State that they can skip or cancel, which removes the commitment fear.",
              "Explain the practical benefit: it never builds up, so each clean is faster and cheaper.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we really quote online?",
        answer:
          "For standard residential properties, yes. Window count and storeys give a reliable price. Add a line confirming on arrival to protect you on unusual properties.",
      },
      {
        question: "Should residential and commercial be separate?",
        answer:
          "Yes. Commercial buyers want contracts, insurance certificates and scheduling around opening hours. Residential customers want a price and a date.",
      },
      {
        question: "How do we handle high or awkward windows?",
        answer:
          "State clearly what you can reach and what needs specialist access. It avoids arriving at a job you cannot complete, which is the worst outcome for both sides.",
      },
    ],
    related: ["pressure-washing-website", "gutter-cleaning-website", "cleaning-service-website"],
  },

  {
    slug: "gutter-cleaning-website",
    eyebrow: "Gutters",
    title: "Gutter cleaning and installation website design",
    seoTitle: "Gutter Cleaning Website Design | ROVQIX",
    description:
      "Websites for gutter businesses — seasonal cleaning, guard installation, pricing by linear foot, and before and after photos.",
    excerpt: "Seasonal cleaning that books ahead, plus guard installation as the upsell.",
    primaryKeyword: "gutter cleaning website design",
    secondaryKeywords: [
      "gutter company website",
      "gutter installation website",
      "gutter guard website design",
      "roof gutter service website",
    ],
    answer:
      "A gutter website from ROVQIX costs $349 to $749 and takes about a week. It covers seasonal cleaning with advance booking, gutter guard installation, pricing by linear foot or property size, and before and after photos.",
    intro:
      "Gutter work is intensely seasonal and almost entirely reactive. The website's job is to capture bookings before the leaves fall rather than during the panic.",
    deliverables: [
      {
        title: "Seasonal booking",
        description:
          "Advance scheduling for autumn and spring, which smooths the worst of the seasonal rush.",
        icon: "CalendarCheck",
      },
      {
        title: "Pricing by size",
        description:
          "Single or two storey, linear feet or property size. Predictable enough to publish.",
        icon: "Receipt",
      },
      {
        title: "Gutter guards",
        description:
          "The high-value upsell, presented honestly including what guards do and do not solve.",
        icon: "ShieldCheck",
      },
      {
        title: "Before and after photos",
        description:
          "Blocked versus clear gutters, which makes the problem concrete for someone who cannot see their roof.",
        icon: "Images",
      },
      {
        title: "Damage prevention content",
        description:
          "What blocked gutters actually cause — fascia rot, foundation issues, ice dams. This creates urgency.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "How do you smooth the seasonal rush?",
        answer:
          "Take bookings before the season and offer recurring twice-yearly service.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open autumn bookings in late summer, before anyone is thinking about it.",
              "Offer a twice-yearly plan so the customer never has to remember.",
              "Send reminders ahead of each season, which converts a large share of past customers.",
              "Show remaining availability, which creates genuine urgency at peak.",
              "Keep the site live year-round — gutter searches happen after every storm.",
            ],
          },
          {
            type: "callout",
            title: "Recurring plans fix the seasonality",
            text: "A base of twice-yearly customers turns a frantic six weeks into a schedulable year. It is the single most valuable thing a gutter business can sell through its website.",
          },
        ],
      },
      {
        heading: "How should gutter guards be sold?",
        body: [
          {
            type: "p",
            text: "Honestly. Guards reduce cleaning frequency; they do not eliminate it, and overselling that is where the negative reviews in this category come from.",
          },
          {
            type: "p",
            text: "Explain what they handle well, what still gets through, and what maintenance they need. A customer who understands the trade-off is happier two years later, and honest framing still sells the job.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish cleaning prices?",
        answer:
          "Yes, by property size and storeys. It is a comparison-shopped service and publishing gets you the call.",
      },
      {
        question: "Do gutter guards eliminate cleaning?",
        answer:
          "No, and saying so builds trust. They significantly reduce frequency. Claiming they end cleaning entirely produces complaints and refund requests later.",
      },
      {
        question: "How do we handle storm surges?",
        answer:
          "Keep the site fast and the phone number prominent. Searches spike after storms and you want to be the one that loads and answers.",
      },
    ],
    related: ["roofing-company-website", "pressure-washing-website", "window-cleaning-website"],
  },

  {
    slug: "junk-removal-website",
    eyebrow: "Junk removal",
    title: "Junk removal website design",
    seoTitle: "Junk Removal Website Design | ROVQIX",
    description:
      "Websites for junk removal businesses — pricing by load volume, photo quoting, same-day availability and what you can and cannot take.",
    excerpt: "Price by load size, quote from a photo, and say what you cannot take.",
    primaryKeyword: "junk removal website design",
    secondaryKeywords: [
      "junk hauling website",
      "rubbish removal website design",
      "furniture removal website",
      "estate cleanout website",
    ],
    answer:
      "A junk removal website from ROVQIX costs $349 to $749 and takes about a week. The key elements are pricing by load volume, photo-based instant quoting, same-day availability and a clear list of what you can and cannot take.",
    intro:
      "Junk removal quotes fastest from a photo. A form that accepts pictures turns a phone conversation into a booked job.",
    deliverables: [
      {
        title: "Pricing by load",
        description:
          "Quarter, half, full truck, with a visual guide. Customers cannot estimate volume otherwise.",
        icon: "Receipt",
      },
      {
        title: "Photo quoting",
        description:
          "Send a photo, get a price. Faster than a phone call and far more accurate.",
        icon: "Phone",
      },
      {
        title: "What you cannot take",
        description:
          "Hazardous materials, paint, tyres, chemicals. Prevents wasted trips and awkward refusals.",
        icon: "ShieldCheck",
      },
      {
        title: "Same-day availability",
        description:
          "Much of this work is urgent — a move, a sale, a deadline. Availability is the deciding factor.",
        icon: "Zap",
      },
      {
        title: "Job types",
        description:
          "Single item, garage cleanout, estate clearance, construction debris. Different jobs, different searches.",
        icon: "Network",
      },
    ],
    sections: [
      {
        heading: "How do you make volume pricing understandable?",
        answer:
          "With photographs of actual truck loads at each price point.",
        body: [
          {
            type: "list",
            items: [
              "Show a real photo of a quarter, half and full truck load.",
              "Give examples — 'a half load is roughly a garage clearout or a bedroom set'.",
              "State the minimum charge clearly, since single-item jobs are common.",
              "Note surcharges for heavy items like concrete, or appliances needing special disposal.",
              "Explain that stairs and long carries may affect the price, before arrival rather than after.",
            ],
          },
          {
            type: "callout",
            title: "Nobody can estimate cubic yards",
            text: "Volume pricing in abstract units is meaningless to a homeowner. Photographs of loaded trucks at each tier turn it into something they can match against their own pile.",
          },
        ],
      },
      {
        heading: "Why publish what you cannot take?",
        body: [
          {
            type: "p",
            text: "Because arriving at a job you have to refuse costs you the trip and produces an angry customer. Hazardous waste, certain chemicals, tyres and some appliances have disposal restrictions that customers do not know about.",
          },
          {
            type: "p",
            text: "Listing them, with a note about where those items can go instead, is genuinely helpful and prevents most wasted visits.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we quote accurately from photos?",
        answer:
          "Usually yes, with a note that the final price is confirmed on arrival. It is far more accurate than a customer describing a pile over the phone.",
      },
      {
        question: "Should we mention recycling and donation?",
        answer:
          "Yes, if you do it. A growing share of customers care where their items end up, and it differentiates you from operators who take everything straight to landfill.",
      },
      {
        question: "Do we need separate pages per job type?",
        answer:
          "For the main ones — estate cleanout, garage clearout, construction debris, single item — yes. Those are distinct searches with distinct urgency and value.",
      },
    ],
    related: ["moving-company-website", "cleaning-service-website", "self-storage-website"],
  },

  {
    slug: "pool-service-website",
    eyebrow: "Pool service",
    title: "Pool service and maintenance website design",
    seoTitle: "Pool Service Website Design | ROVQIX",
    description:
      "Websites for pool service companies — recurring maintenance plans, repair services, opening and closing, and pricing by pool size.",
    excerpt: "Recurring maintenance plans, priced by pool size, booked online.",
    primaryKeyword: "pool service website design",
    secondaryKeywords: [
      "pool cleaning website",
      "pool maintenance website design",
      "pool repair website",
      "swimming pool service website",
    ],
    answer:
      "A pool service website from ROVQIX costs $349 to $1,290 and takes about a week. It focuses on recurring maintenance plans priced by pool size, repair services, seasonal opening and closing, and online signup.",
    intro:
      "Pool service is a recurring-revenue business. The website should sell the monthly plan, not the one-off clean.",
    deliverables: [
      {
        title: "Maintenance plans",
        description:
          "Weekly or biweekly, priced by pool size, with what each visit includes.",
        icon: "RefreshCw",
      },
      {
        title: "What each visit covers",
        description:
          "Chemicals, skimming, brushing, filter checks. Where plans differ and customers compare.",
        icon: "ClipboardList",
      },
      {
        title: "Repairs",
        description:
          "Pumps, heaters, filters, leaks. Higher-value work that maintenance customers eventually need.",
        icon: "Blocks",
      },
      {
        title: "Opening and closing",
        description:
          "Seasonal services with advance booking, which smooths the spring and autumn rush.",
        icon: "CalendarCheck",
      },
      {
        title: "Chemicals included or not",
        description:
          "The most common source of confusion when comparing pool service quotes.",
        icon: "Receipt",
      },
    ],
    sections: [
      {
        heading: "How should maintenance plans be presented?",
        answer:
          "By pool size, with the visit contents listed and chemicals explicitly included or excluded.",
        body: [
          {
            type: "table",
            head: ["What to state", "Why it matters"],
            rows: [
              ["Price by pool size", "The main variable customers can self-assess"],
              ["Visit frequency", "Weekly versus biweekly is a big price difference"],
              ["Chemicals included?", "The most common hidden cost in quotes"],
              ["What each visit covers", "Where cheap providers cut corners"],
              ["Filter cleans included?", "Often billed separately without warning"],
              ["Contract length", "Customers want to know they can stop"],
            ],
          },
          {
            type: "callout",
            title: "Chemicals are the comparison trap",
            text: "One company quotes $120 a month and another $180. The difference is usually chemicals. Stating it plainly lets customers compare honestly, and you stop losing to quotes that are not really cheaper.",
          },
        ],
      },
      {
        heading: "How do you handle seasonality?",
        body: [
          {
            type: "list",
            items: [
              "Open advance booking for spring openings in late winter.",
              "Offer closing bookings before the season ends, when customers are still thinking about the pool.",
              "Promote winterisation and off-season repairs to fill the quiet months.",
              "Keep the site live year-round; people research pool service in the off-season.",
              "Make the seasonal banner self-editable so you can swap it without calling us.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish monthly plan prices?",
        answer:
          "Yes, by pool size, with chemicals clearly included or excluded. It is the main thing customers compare and vagueness loses you the honest comparison.",
      },
      {
        question: "Can customers sign up online?",
        answer:
          "Yes, with address and pool details. Confirming the price after a first visit is standard and protects you on unusual pools.",
      },
      {
        question: "Should repairs be a separate page?",
        answer:
          "Yes. Repair searches are urgent and distinct from maintenance shopping, and repair jobs are considerably higher value.",
      },
    ],
    related: ["landscaping-company-website", "cleaning-service-website", "hvac-company-website"],
  },

  {
    slug: "solar-installer-website",
    eyebrow: "Solar",
    title: "Solar installer website design",
    seoTitle: "Solar Installer Website Design | ROVQIX",
    description:
      "Websites for solar installers — savings estimates, incentive and tax credit guidance, system pricing, financing and consultation booking.",
    excerpt: "Savings estimates and incentive guidance, with honest payback maths.",
    primaryKeyword: "solar installer website design",
    secondaryKeywords: [
      "solar company website",
      "solar panel installer website",
      "residential solar website design",
      "solar energy website",
    ],
    answer:
      "A solar installer website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It centres on savings estimation, federal and state incentive guidance, system pricing ranges, financing options and consultation booking.",
    intro:
      "Solar is a long, research-heavy purchase in an industry with a trust problem from aggressive door-to-door sales. Honest, detailed content is the differentiator.",
    deliverables: [
      {
        title: "Savings estimation",
        description:
          "A simple estimator using bill size and roof orientation, which is the main reason people enquire.",
        icon: "BarChart3",
      },
      {
        title: "Incentive guidance",
        description:
          "Federal tax credit, state and utility incentives, explained plainly and kept current.",
        icon: "Receipt",
      },
      {
        title: "System pricing ranges",
        description:
          "Typical system sizes and costs before and after incentives. Rarely published, always wanted.",
        icon: "Blocks",
      },
      {
        title: "Financing options",
        description:
          "Cash, loan, lease and PPA compared honestly, including the downsides of each.",
        icon: "CreditCard",
      },
      {
        title: "Licensing and warranties",
        description:
          "Your licence, equipment warranties and workmanship warranty, stated separately.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "How do you build trust in a sector with a bad reputation?",
        answer:
          "By publishing honest payback maths, including the cases where solar does not make sense.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Show realistic payback periods, not best-case figures from a south-facing roof in ideal conditions.",
              "State plainly when solar is a poor fit — heavy shade, an old roof, low usage, a planned move.",
              "Explain lease and PPA downsides, particularly the effect on selling the house.",
              "Publish system price ranges rather than requiring a home visit to learn anything.",
              "Show your licence, insurance and how long you have operated locally.",
              "Never use pressure tactics or expiring offers on the site. The audience is primed against them.",
            ],
          },
          {
            type: "callout",
            title: "Saying no is a selling point",
            text: "A page explaining when solar is not worth it converts better than one claiming it always is. This audience has been door-knocked and is looking for a reason to trust someone.",
          },
        ],
      },
      {
        heading: "How should incentives be handled?",
        body: [
          {
            type: "p",
            text: "Explain them clearly but date the page and note that programmes change. Federal, state and utility incentives all move, and stale information here causes real problems with customer expectations.",
          },
          {
            type: "p",
            text: "Be careful with tax language. Explain what the credit is in general terms and direct customers to a tax professional for their own situation, rather than advising on their liability.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish system prices?",
        answer:
          "Ranges by system size, yes, before and after incentives. In a sector where most competitors require a home visit before saying anything, transparency is a strong differentiator.",
      },
      {
        question: "Can we build a savings calculator?",
        answer:
          "A simple estimator using bill size and roof direction, yes. Keep it clearly labelled as an estimate — over-precise calculators create expectations that the survey then has to walk back.",
      },
      {
        question: "How do we handle tax credit questions?",
        answer:
          "Explain the programmes generally, date the page, and refer customers to a tax professional for their own circumstances. Do not advise on individual tax positions.",
      },
    ],
    related: ["roofing-company-website", "electrician-website", "hvac-company-website"],
  },

  {
    slug: "security-system-installer-website",
    eyebrow: "Security systems",
    title: "Security system installer website design",
    seoTitle: "Security System Installer Website Design | ROVQIX",
    description:
      "Websites for security and camera installers — system packages, monitoring plans, licensing, and residential versus commercial paths.",
    excerpt: "System packages, monitoring costs and the licence customers should check.",
    primaryKeyword: "security system installer website",
    secondaryKeywords: [
      "security camera installation website",
      "alarm company website design",
      "cctv installer website",
      "home security website design",
    ],
    answer:
      "A security installer website from ROVQIX costs $349 to $1,290 and takes about a week. It covers system packages and pricing, monitoring plan costs, licensing, and separate residential and commercial paths.",
    intro:
      "Security buyers are comparing you against DIY kits from big retailers. The argument is professional installation, monitoring and local response — make it explicitly.",
    deliverables: [
      {
        title: "System packages",
        description:
          "Clear tiers with what hardware is included, so customers can compare against DIY kits.",
        icon: "Blocks",
      },
      {
        title: "Monitoring plans",
        description:
          "Monthly cost, what monitoring actually does, and contract terms stated honestly.",
        icon: "Activity",
      },
      {
        title: "Licensing",
        description:
          "Alarm installer licensing is required in most states and is worth displaying.",
        icon: "BadgeCheck",
      },
      {
        title: "DIY comparison",
        description:
          "An honest comparison against retail kits, including when DIY is genuinely the better choice.",
        icon: "Scale",
      },
      {
        title: "Commercial path",
        description:
          "Access control, multi-site and compliance needs, which are a different sale entirely.",
        icon: "Building2",
      },
    ],
    sections: [
      {
        heading: "How do you compete with DIY security kits?",
        answer:
          "By being honest about where they are fine, and specific about where professional installation matters.",
        body: [
          {
            type: "table",
            head: ["DIY kit is fine when", "Professional install matters when"],
            rows: [
              ["Renting or short-term", "Owning and staying"],
              ["Small apartment", "Larger property with multiple entry points"],
              ["Comfortable with self-setup", "You want it done and verified"],
              ["No wired components needed", "Hardwired sensors or existing wiring"],
              ["Self-monitoring acceptable", "You want professional response"],
              ["No insurance requirement", "Insurer requires a certificated system"],
            ],
          },
          {
            type: "callout",
            title: "Conceding the DIY case wins the rest",
            text: "Telling an apartment renter to buy a retail kit costs you a sale you were not going to make, and makes your case far more credible to the homeowner reading the same page.",
          },
        ],
      },
      {
        heading: "How should monitoring contracts be presented?",
        body: [
          {
            type: "p",
            text: "Plainly, including length and cancellation terms. This industry has a poor reputation for long contracts sold without clear disclosure, and being upfront is a genuine differentiator.",
          },
          {
            type: "p",
            text: "State what monitoring actually does — who is called, in what order, and how police dispatch works — because most customers have never thought it through.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish monitoring prices?",
        answer:
          "Yes, including contract length. Customers are comparing against no-contract retail monitoring, and hiding your terms means they assume the worst.",
      },
      {
        question: "Do we need to show our licence?",
        answer:
          "Yes — alarm installation is licensed in most states, and displaying it separates you from unlicensed operators. Many states require it in advertising anyway.",
      },
      {
        question: "Should residential and commercial be separate?",
        answer:
          "Yes. Commercial buyers need access control, multi-site management and often compliance documentation. Those concerns would only clutter the residential page.",
      },
    ],
    related: ["locksmith-website", "electrician-website", "it-support-website"],
  },

  {
    slug: "it-support-website",
    eyebrow: "IT support",
    title: "IT support and managed services website design",
    seoTitle: "IT Support Company Website Design | ROVQIX",
    description:
      "Websites for IT support and managed service providers — service plans, response times, industries served, and onboarding process.",
    excerpt: "Response times and plan pricing, which is what small business buyers compare.",
    primaryKeyword: "it support website design",
    secondaryKeywords: [
      "managed service provider website",
      "it company website design",
      "computer support website",
      "msp website design",
    ],
    answer:
      "An IT support website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers managed service plans with per-user pricing, response time commitments, industries served, and what onboarding involves.",
    intro:
      "Small business IT buyers have usually been let down before. They are looking for response times and clarity, not a list of certifications.",
    deliverables: [
      {
        title: "Per-user plan pricing",
        description:
          "The unit MSPs are compared in. Publishing a starting figure is unusual and effective.",
        icon: "Receipt",
      },
      {
        title: "Response time commitments",
        description:
          "What you actually promise, by severity. The single biggest buying factor for small businesses.",
        icon: "Clock",
      },
      {
        title: "What is included",
        description:
          "Monitoring, patching, backup, helpdesk, security. Where MSP quotes differ most.",
        icon: "ClipboardList",
      },
      {
        title: "Industries served",
        description:
          "Sector experience matters where compliance is involved — medical, legal, financial.",
        icon: "Network",
      },
      {
        title: "Onboarding process",
        description:
          "What switching involves, which is the main thing stopping unhappy customers from moving.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "What do small business IT buyers actually compare?",
        answer:
          "Response time, per-user cost and whether they can reach a human quickly.",
        body: [
          {
            type: "list",
            items: [
              "How fast you respond, split by severity — a server down is not a printer issue.",
              "Whether support is a named person or a ticket queue.",
              "Per-user monthly cost, and what pushes it up.",
              "Whether after-hours support is included or extra.",
              "What happens when something needs someone on site.",
              "Contract length and how to leave.",
            ],
          },
          {
            type: "callout",
            title: "Certifications matter less than you think",
            text: "A wall of vendor badges means little to a small business owner. Response times, pricing and the ability to reach a person are what they judge on, and almost no MSP site leads with those.",
          },
        ],
      },
      {
        heading: "Why explain the onboarding process?",
        body: [
          {
            type: "p",
            text: "Because most prospects already have an IT provider they are unhappy with, and inertia is your biggest competitor. The fear is that switching will break something.",
          },
          {
            type: "p",
            text: "Lay out the steps: audit, documentation, transition period, handover of credentials. Showing that you have a process makes switching feel survivable, which is what actually closes these deals.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish per-user pricing?",
        answer:
          "A starting figure, yes. Buyers compare on it and most MSPs refuse to publish anything, so a number puts you on the shortlist while competitors are still trying to book a discovery call.",
      },
      {
        question: "Should we commit to response times publicly?",
        answer:
          "Yes, if you can meet them. It is the strongest differentiator available. Be conservative — a missed public commitment is worse than a modest one you always hit.",
      },
      {
        question: "Do we need sector-specific pages?",
        answer:
          "Where compliance differs — medical, legal, financial — yes. Those buyers search for sector-specific IT support and have requirements a general page cannot address.",
      },
    ],
    related: ["security-system-installer-website", "computer-repair-website", "bookkeeping-service-website"],
  },

  {
    slug: "computer-repair-website",
    eyebrow: "Computer repair",
    title: "Computer repair shop website design",
    seoTitle: "Computer Repair Shop Website Design | ROVQIX",
    description:
      "Websites for computer repair shops — service pricing, turnaround times, data recovery, drop-off information and brands serviced.",
    excerpt: "Flat-rate pricing and turnaround times, which is what people ring to ask.",
    primaryKeyword: "computer repair website design",
    secondaryKeywords: [
      "pc repair shop website",
      "laptop repair website",
      "computer store website design",
      "data recovery website",
    ],
    answer:
      "A computer repair website from ROVQIX costs $349 to $749 and takes about a week. It covers flat-rate service pricing, turnaround times, data recovery, drop-off and mail-in information, and the brands you service.",
    intro:
      "Computer repair customers are worried about two things: what it will cost, and whether they will lose their photos.",
    deliverables: [
      {
        title: "Flat-rate pricing",
        description:
          "Common jobs priced — screen replacement, virus removal, upgrades. Predictable and publishable.",
        icon: "Receipt",
      },
      {
        title: "Turnaround times",
        description:
          "How long for each job type. People need their computer back and this drives the choice.",
        icon: "Clock",
      },
      {
        title: "Data safety",
        description:
          "What happens to their data, and your recovery service. The main unspoken worry.",
        icon: "ShieldCheck",
      },
      {
        title: "Diagnostic policy",
        description:
          "Whether diagnosis is free and whether it comes off the repair. Always asked.",
        icon: "Search",
      },
      {
        title: "Brands and devices",
        description:
          "Mac, PC, laptops, phones, consoles. Being explicit prevents wasted trips.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "Why does data reassurance matter so much?",
        answer:
          "Because the fear of losing photos and documents outweighs the cost of the repair for most customers.",
        body: [
          {
            type: "list",
            items: [
              "State plainly whether data is preserved during common repairs.",
              "Explain your backup procedure before working on a machine.",
              "Describe your data recovery service for failed drives, with honest success expectations.",
              "State your privacy policy on accessing files, which customers worry about and rarely ask.",
              "Explain what happens to data on devices they leave for disposal or trade-in.",
            ],
          },
          {
            type: "callout",
            title: "This is the anxiety, not the price",
            text: "Customers will pay more to the shop that clearly explains their photos are safe. Almost no computer repair site addresses it, and it is the thing every customer is actually thinking about.",
          },
        ],
      },
      {
        heading: "Should repair prices be published?",
        body: [
          {
            type: "p",
            text: "For standard jobs, yes. Screen replacements, virus removal, SSD upgrades and RAM installs are predictable enough to price, and customers ring round for exactly these numbers.",
          },
          {
            type: "p",
            text: "Diagnostic-dependent work obviously cannot be priced upfront. Saying so, alongside a clear diagnostic fee policy, is enough.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we offer free diagnostics?",
        answer:
          "Many shops do as a customer acquisition tool. If you charge, state it clearly and say whether it comes off the repair. Either works; ambiguity does not.",
      },
      {
        question: "Do we need a page for data recovery?",
        answer:
          "Yes. It is a distinct, urgent, high-value search, and the customer's emotional state is completely different from someone with a slow laptop.",
      },
      {
        question: "Should we mention mail-in service?",
        answer:
          "If you offer it, yes — it widens your market well beyond your local area, particularly for specialist repairs.",
      },
    ],
    related: ["phone-repair-website", "it-support-website", "security-system-installer-website"],
  },

  {
    slug: "phone-repair-website",
    eyebrow: "Phone repair",
    title: "Phone repair shop website design",
    seoTitle: "Phone Repair Shop Website Design | ROVQIX",
    description:
      "Websites for phone and device repair shops — pricing by model and repair, walk-in wait times, warranty and parts quality.",
    excerpt: "Price by model and repair, plus how long they will wait in the shop.",
    primaryKeyword: "phone repair website design",
    secondaryKeywords: [
      "cell phone repair website",
      "iphone repair shop website",
      "mobile repair website design",
      "screen repair website",
    ],
    answer:
      "A phone repair website from ROVQIX costs $349 to $749 and takes about a week. The essentials are pricing by device model and repair type, walk-in wait times, warranty terms and honest information about parts quality.",
    intro:
      "Phone repair is priced per model and per fault. Publishing that grid is the whole website, and it stops the constant price calls.",
    deliverables: [
      {
        title: "Price by model and repair",
        description:
          "A searchable grid — screen, battery, charging port, by device. The core of the site.",
        icon: "Receipt",
      },
      {
        title: "Wait times",
        description:
          "How long a screen takes while they wait. Most repairs are same-visit and that is the selling point.",
        icon: "Clock",
      },
      {
        title: "Parts quality",
        description:
          "OEM versus aftermarket, explained honestly. It is the main quality difference between shops.",
        icon: "Blocks",
      },
      {
        title: "Warranty",
        description:
          "What you guarantee and for how long, which is a genuine differentiator against mall kiosks.",
        icon: "BadgeCheck",
      },
      {
        title: "Data safety",
        description:
          "Whether data is preserved, which customers worry about more than they mention.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "How should the price grid work?",
        answer:
          "Pick a device, see every repair price. Two taps, no form, no phone call.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A device picker covering the models you actually repair most.",
              "Every common repair listed for that device with a price.",
              "Wait time next to each price, since that drives the decision as much as cost.",
              "Note where a price varies by parts availability rather than pretending it is fixed.",
              "Keep it maintainable — the grid needs updating as new models arrive.",
            ],
          },
          {
            type: "callout",
            title: "This eliminates the price call",
            text: "Phone repair shops field constant calls asking the price of one specific repair on one specific model. A published grid answers all of them and converts far better than a receptionist reading numbers.",
          },
        ],
      },
      {
        heading: "Should you explain parts quality?",
        body: [
          {
            type: "p",
            text: "Yes. It is the main reason one shop charges $89 and another $149 for the same screen, and customers cannot tell the difference until the cheap one fails.",
          },
          {
            type: "p",
            text: "Explaining OEM, aftermarket and refurbished options — and offering a choice where you can — turns a price objection into an informed decision that often lands on the higher option.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish prices for every model?",
        answer:
          "For the models you repair regularly, yes. Older or rare devices can be quote-on-request. The grid is the main reason people visit this kind of site.",
      },
      {
        question: "How do we compete with mail-in services?",
        answer:
          "Same-day, in-person, and a local warranty they can walk into. Emphasise wait times — 'screen replaced in 30 minutes while you wait' beats posting a phone away for a week.",
      },
      {
        question: "Do we need to mention data?",
        answer:
          "Yes, briefly. Confirming that data is preserved during standard repairs removes an unspoken worry that stops some people coming in at all.",
      },
    ],
    related: ["computer-repair-website", "it-support-website", "boutique-retail-website"],
  },

  {
    slug: "bookkeeping-service-website",
    eyebrow: "Bookkeeping",
    title: "Bookkeeping service website design",
    seoTitle: "Bookkeeping Service Website Design | ROVQIX",
    description:
      "Websites for bookkeepers — monthly package pricing, software supported, industries served and a consultation booking.",
    excerpt: "Monthly packages and the software you work in, which is how clients filter.",
    primaryKeyword: "bookkeeping website design",
    secondaryKeywords: [
      "bookkeeper website",
      "bookkeeping service website",
      "accounting website design small",
      "virtual bookkeeper website",
    ],
    answer:
      "A bookkeeping website from ROVQIX costs $349 to $1,290 and takes about a week. It covers monthly package pricing, which accounting software you work in, industries you specialise in, and a consultation booking.",
    intro:
      "Bookkeeping clients filter on two things immediately: do you work in my software, and what does it cost per month.",
    deliverables: [
      {
        title: "Monthly packages",
        description:
          "Priced by transaction volume or business size. The unit clients compare in.",
        icon: "Receipt",
      },
      {
        title: "Software supported",
        description:
          "QuickBooks, Xero, Wave. Clients search by their software and will not switch for you.",
        icon: "Blocks",
      },
      {
        title: "Industries served",
        description:
          "Specialisms — trades, restaurants, ecommerce — since each has different bookkeeping quirks.",
        icon: "Network",
      },
      {
        title: "What is included",
        description:
          "Reconciliation, payroll, reporting, AP/AR. Where quotes differ and clients get surprised.",
        icon: "ClipboardList",
      },
      {
        title: "Credentials",
        description:
          "Certifications and whether you work with a CPA for tax filing, which clients need to know.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "How should bookkeeping be priced on the site?",
        answer:
          "Monthly packages by transaction volume, with clear boundaries on what is included.",
        body: [
          {
            type: "table",
            head: ["Pricing approach", "Effect"],
            rows: [
              ["'Contact for a quote'", "Loses clients who are comparing"],
              ["Hourly rate", "Clients cannot predict the bill and worry"],
              ["Monthly by transaction volume", "Predictable for both sides"],
              ["Tiered packages", "Easy to compare, easy to upgrade"],
            ],
          },
          {
            type: "callout",
            title: "Predictability is what clients buy",
            text: "Small business owners choose monthly bookkeeping packages over hourly billing even at a higher total cost, because they can budget for it. Pricing that way is a selling point, not just a convenience.",
          },
        ],
      },
      {
        heading: "Why does industry specialisation help?",
        body: [
          {
            type: "p",
            text: "Because bookkeeping for a restaurant is genuinely different from bookkeeping for an ecommerce store — tips and food cost versus inventory and marketplace fees.",
          },
          {
            type: "p",
            text: "A page naming the industries you know converts far better than a general one, and those clients are less price-sensitive because they know the alternative is explaining their business from scratch.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish monthly prices?",
        answer:
          "Yes, at least starting prices by business size. Clients are comparing several bookkeepers and the ones who publish get shortlisted.",
      },
      {
        question: "Do we need to mention tax filing?",
        answer:
          "Yes, clearly, whether you do it or work with a CPA who does. Clients often assume bookkeeping includes tax returns, and the misunderstanding causes real problems in April.",
      },
      {
        question: "Is a client portal worth it?",
        answer:
          "For document exchange, often yes. Most accounting platforms already provide one, so we usually link to that rather than building another place for clients to lose their receipts.",
      },
    ],
    related: ["it-support-website", "insurance-agent-website", "notary-service-website"],
  },

  {
    slug: "insurance-agent-website",
    eyebrow: "Insurance agents",
    title: "Insurance agent website design",
    seoTitle: "Insurance Agent Website Design | ROVQIX",
    description:
      "Websites for independent insurance agents — lines of coverage, carriers represented, quote requests and licensing details.",
    excerpt: "Coverage lines, carriers you represent, and a quote form that qualifies.",
    primaryKeyword: "insurance agent website design",
    secondaryKeywords: [
      "insurance agency website",
      "independent agent website",
      "insurance broker website design",
      "local insurance website",
    ],
    answer:
      "An insurance agent website from ROVQIX costs $349 to $1,290 and takes about a week. It covers the lines of coverage you write, the carriers you represent, quote request forms by coverage type, and your licensing details.",
    intro:
      "Independent agents compete with direct insurers spending millions on advertising. The argument is choice of carrier and a local human — make that explicit.",
    deliverables: [
      {
        title: "Lines of coverage",
        description:
          "Auto, home, life, commercial. Separate pages, since each is a different search and buyer.",
        icon: "Network",
      },
      {
        title: "Carriers represented",
        description:
          "Named carriers, which is the independent agent's main advantage over a direct writer.",
        icon: "Handshake",
      },
      {
        title: "Quote requests by line",
        description:
          "Different forms per coverage type, capturing what you actually need to quote.",
        icon: "ClipboardList",
      },
      {
        title: "Licence details",
        description:
          "Licence number and states you are licensed in, which is required and reassuring.",
        icon: "BadgeCheck",
      },
      {
        title: "Local presence",
        description:
          "A real office and a real person. This is the entire argument against buying direct online.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "How do you compete with direct insurers?",
        answer:
          "On carrier choice, claims advocacy and being a person the customer can actually reach.",
        body: [
          {
            type: "list",
            items: [
              "Name the carriers you represent — a direct writer offers one option, you offer several.",
              "Explain what you do at claim time, which is when customers discover the difference.",
              "Show a real office, a real face and a direct phone number.",
              "Offer an annual review, which direct insurers do not do.",
              "Explain coverage gaps people commonly have, demonstrating expertise rather than price.",
            ],
          },
          {
            type: "callout",
            title: "Do not compete on price",
            text: "You will lose an advertising battle against national direct insurers. Compete on choice, advice and claims support — the things a quote comparison engine cannot provide.",
          },
        ],
      },
      {
        heading: "How should quote forms be structured?",
        body: [
          {
            type: "p",
            text: "One per coverage line, asking only what you genuinely need to start a quote. A single form trying to cover auto, home and commercial serves none of them well.",
          },
          {
            type: "p",
            text: "Keep them short. You are not underwriting on the website — you are capturing enough to make an informed call, which is where the sale actually happens.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show premium prices?",
        answer:
          "You cannot meaningfully — premiums are individually rated. What you can do is explain what drives price and what discounts exist, which is more useful than a fake quote calculator.",
      },
      {
        question: "Do we need a page per coverage line?",
        answer:
          "Yes. Auto, home, life and commercial are entirely separate searches with different buyers. One combined page ranks for none of them well.",
      },
      {
        question: "Are there compliance rules for insurance advertising?",
        answer:
          "Yes, and they vary by state and carrier. We build what your compliance guidance specifies — licence display, disclaimers and approved carrier language.",
      },
    ],
    related: ["bookkeeping-service-website", "real-estate-agent-website", "notary-service-website"],
  },

  {
    slug: "real-estate-agent-website",
    eyebrow: "Real estate agents",
    title: "Real estate agent website design",
    seoTitle: "Real Estate Agent Website Design | ROVQIX",
    description:
      "Websites for individual agents and small teams — listings, neighbourhood guides, valuation requests and buyer and seller paths.",
    excerpt: "Listings, neighbourhood knowledge and a valuation request that generates sellers.",
    primaryKeyword: "real estate agent website design",
    secondaryKeywords: [
      "realtor website design",
      "real estate website for agents",
      "property agent website",
      "real estate team website",
    ],
    answer:
      "A real estate agent website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers your listings, neighbourhood guides that demonstrate local knowledge, a home valuation request, and separate buyer and seller paths.",
    intro:
      "Agents cannot out-listing the portals. What they can do is own neighbourhood knowledge and capture seller leads, which is where the commission is anyway.",
    deliverables: [
      {
        title: "Your listings",
        description:
          "Current and sold, from your MLS feed. Sold listings prove you actually transact.",
        icon: "Images",
      },
      {
        title: "Neighbourhood guides",
        description:
          "Genuine local knowledge — schools, commute, character, price trends. Your real differentiator.",
        icon: "Network",
      },
      {
        title: "Valuation request",
        description:
          "The main seller lead generator, and where the commission is.",
        icon: "Target",
      },
      {
        title: "Buyer and seller paths",
        description:
          "Different needs entirely. Sellers want a valuation; buyers want listings and process.",
        icon: "Users",
      },
      {
        title: "Your track record",
        description:
          "Sales volume, average days on market, list-to-sale ratio. Specifics beat adjectives.",
        icon: "BarChart3",
      },
    ],
    sections: [
      {
        heading: "Why do neighbourhood guides work?",
        answer:
          "Because the portals cannot write them, and buyers search for exactly this before contacting an agent.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Pick the specific neighbourhoods you genuinely know — three or four, not thirty.",
              "Write what a portal cannot: what the streets are actually like, where the noise is, which schools.",
              "Include real price trends and days-on-market data for that area.",
              "Add your own sold listings there as proof you work the area.",
              "Update them annually so the data stays credible.",
            ],
          },
          {
            type: "callout",
            title: "Depth beats coverage",
            text: "Four genuinely detailed neighbourhood guides will out-perform forty thin ones. The thin version is the same page with the name swapped, which search engines discount and buyers see through immediately.",
          },
        ],
      },
      {
        heading: "How should seller leads be captured?",
        body: [
          {
            type: "p",
            text: "A home valuation request is the standard and it works, provided you deliver a real valuation rather than an automated estimate followed by a sales call.",
          },
          {
            type: "p",
            text: "Be clear about what they will get and when. Sellers are wary of valuation forms precisely because so many are just lead capture with nothing behind them.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we show MLS listings on the site?",
        answer:
          "Through an IDX feed, subject to your MLS's rules on display and attribution. We confirm what your board permits before building, since the restrictions vary.",
      },
      {
        question: "Should we build pages for every neighbourhood?",
        answer:
          "No. Three or four you genuinely know, written with real depth, out-perform a large set of near-identical pages — which search engines treat as low value.",
      },
      {
        question: "Is a website worth it when everyone uses Zillow?",
        answer:
          "For buyer leads, the portals dominate. For seller leads, referrals and looking credible when someone searches your name, your own site earns its cost several times over on one transaction.",
      },
    ],
    related: ["real-estate", "insurance-agent-website", "photographer-website"],
  },

  {
    slug: "notary-service-website",
    eyebrow: "Notaries",
    title: "Notary and mobile notary website design",
    seoTitle: "Notary Service Website Design | ROVQIX",
    description:
      "Websites for notaries and mobile notary services — pricing, service area, document types, availability and booking.",
    excerpt: "Pricing, travel area and what documents you handle. A genuinely simple site.",
    primaryKeyword: "notary website design",
    secondaryKeywords: [
      "mobile notary website",
      "notary public website design",
      "loan signing agent website",
      "notary service website",
    ],
    answer:
      "A notary website from ROVQIX costs $349 to $549 and takes about a week. It covers your fees, travel area and travel fee, document types you handle, availability including after-hours, and online booking.",
    intro:
      "Notary customers need something signed today. The site needs to answer where you go, what it costs and when you are free.",
    deliverables: [
      {
        title: "Fees stated",
        description:
          "Notarial fee per signature plus travel fee. Often set by state, and always asked about.",
        icon: "Receipt",
      },
      {
        title: "Travel area",
        description:
          "Where you go and what travel costs. The main filter for a mobile notary.",
        icon: "Globe",
      },
      {
        title: "Document types",
        description:
          "Loan signings, powers of attorney, affidavits, apostilles. Different needs and different searches.",
        icon: "FileText",
      },
      {
        title: "Availability",
        description:
          "Including evenings and weekends, which is when much of this work happens.",
        icon: "Clock",
      },
      {
        title: "Commission details",
        description:
          "Commission number, expiry and state. Establishes legitimacy immediately.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "What does a notary customer need to know?",
        answer:
          "Whether you will come to them, what it costs, and whether you are free today.",
        body: [
          {
            type: "list",
            items: [
              "Your travel radius, with named towns rather than a vague mile count.",
              "Your fee structure — per signature plus travel, with any after-hours difference.",
              "What identification the signer needs to bring, which trips people up constantly.",
              "Whether you can provide witnesses, a very common requirement people forget.",
              "How quickly you can attend, since most of this work is urgent.",
            ],
          },
          {
            type: "callout",
            title: "The ID requirement page saves visits",
            text: "A wasted trip because the signer had no valid ID costs you the whole appointment. A short page listing acceptable identification prevents most of them.",
          },
        ],
      },
      {
        heading: "Is loan signing worth separating?",
        body: [
          {
            type: "p",
            text: "Yes, if you are a certified loan signing agent. It is higher-value, repeat work from title companies and lenders rather than one-off consumer jobs.",
          },
          {
            type: "p",
            text: "That page should speak to the escrow officer, not the consumer: certifications, background check status, E&O insurance, turnaround and how many signings you have completed.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I set my own fees?",
        answer:
          "Notarial fees are capped by state law in most states. Travel fees are usually separate and at your discretion. State both clearly and separately so customers understand the total.",
      },
      {
        question: "Do I need more than one page?",
        answer:
          "Usually not for general notary work. Add a loan signing page if you do that, since it targets a completely different customer.",
      },
      {
        question: "How do customers find a notary?",
        answer:
          "Mostly Google and directories, usually urgently. Your Google Business Profile matters at least as much as the website — make sure it shows your travel area and hours.",
      },
    ],
    related: ["bookkeeping-service-website", "insurance-agent-website", "real-estate-agent-website"],
  },

  {
    slug: "med-spa-website",
    eyebrow: "Med spas",
    title: "Med spa website design",
    seoTitle: "Med Spa Website Design | ROVQIX",
    description:
      "Websites for medical spas — treatment menus with pricing, before and after galleries, provider credentials and consultation booking.",
    excerpt: "Treatment pricing, real results and the credentials that make it a medical service.",
    primaryKeyword: "med spa website design",
    secondaryKeywords: [
      "medical spa website",
      "aesthetics clinic website design",
      "botox clinic website",
      "medspa web design",
    ],
    answer:
      "A med spa website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers the treatment menu with pricing, before and after galleries, provider medical credentials, and consultation booking.",
    intro:
      "Med spas sit between beauty and medicine. The website has to look like the former while proving the latter, and the claims need care.",
    deliverables: [
      {
        title: "Treatment menu with pricing",
        description:
          "Per unit or per area for injectables, per session for devices. Clients compare on this.",
        icon: "Receipt",
      },
      {
        title: "Before and after galleries",
        description:
          "Real patient results with consent, which is the primary purchase driver.",
        icon: "Images",
      },
      {
        title: "Provider credentials",
        description:
          "Who performs treatments and their medical qualifications. This is what makes it a med spa.",
        icon: "BadgeCheck",
      },
      {
        title: "Careful claim language",
        description:
          "Describing treatments and typical results without promising outcomes.",
        icon: "ShieldCheck",
      },
      {
        title: "Consultation booking",
        description:
          "The main conversion, since most treatments require assessment first.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "How should pricing be shown?",
        answer:
          "Per unit for injectables and per session for devices, with package pricing where you offer it.",
        body: [
          {
            type: "list",
            items: [
              "Per unit pricing for neuromodulators, which is how informed clients compare.",
              "Per syringe or per area for fillers, with a note that quantity varies by person.",
              "Per session and package pricing for laser and device treatments.",
              "Consultation fee, and whether it is credited against treatment.",
              "Membership or loyalty pricing if you run one, since it drives retention.",
            ],
          },
          {
            type: "callout",
            title: "Informed clients compare per unit",
            text: "Anyone who has had injectables before knows the per-unit price in their area. Publishing it signals you are established and stops you being screened out by people assuming you are expensive.",
          },
        ],
      },
      {
        heading: "How careful do claims need to be?",
        body: [
          {
            type: "p",
            text: "Very. Med spa advertising is regulated, and both state medical boards and the FTC take an interest in outcome claims and before-and-after imagery.",
          },
          {
            type: "list",
            items: [
              "Describe typical results rather than promising specific outcomes.",
              "Use only your own patient photos, with documented written consent.",
              "Do not retouch results photography, and keep lighting consistent.",
              "State who supervises treatments medically, which several states require.",
              "Include appropriate disclaimers where your compliance guidance specifies.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we show before and after photos?",
        answer:
          "With documented written patient consent, yes, and they are the most persuasive content available. Never use manufacturer stock images as if they were your results.",
      },
      {
        question: "Should we publish injectable pricing?",
        answer:
          "Per unit, yes. Experienced clients compare on it, and publishing signals confidence. Package and membership pricing can sit alongside it.",
      },
      {
        question: "Are there advertising rules we need to follow?",
        answer:
          "Yes — state medical board rules on who can perform and advertise treatments, plus FTC rules on claims and testimonials. We build to your compliance guidance rather than advising on it.",
      },
    ],
    related: ["day-spa-website", "dental-practice-website", "hair-salon-website"],
  },

  {
    slug: "counselling-practice-website",
    eyebrow: "Therapists",
    title: "Therapy and counselling practice website design",
    seoTitle: "Therapy Practice Website Design | ROVQIX",
    description:
      "Websites for therapists and counsellors — specialisms, fees and insurance, availability, credentials and a calm, private enquiry path.",
    excerpt: "Specialisms, fees and availability — with an enquiry path that respects privacy.",
    primaryKeyword: "therapist website design",
    secondaryKeywords: [
      "counselling website design",
      "therapy practice website",
      "psychologist website design",
      "mental health practice website",
    ],
    answer:
      "A therapy practice website from ROVQIX costs $349 to $1,290 and takes about a week. It covers your specialisms, session fees and insurance, current availability, credentials, and a private enquiry path — with clinical information kept out of website forms.",
    intro:
      "Someone looking for a therapist is often anxious and comparing several. Clarity about fit, cost and availability matters more than anything visual.",
    deliverables: [
      {
        title: "Specialisms stated plainly",
        description:
          "Anxiety, trauma, couples, adolescents. People search for their specific situation.",
        icon: "Network",
      },
      {
        title: "Fees and insurance",
        description:
          "Session fee, whether you take insurance, sliding scale. The most common reason people do not enquire.",
        icon: "Receipt",
      },
      {
        title: "Current availability",
        description:
          "Whether you are taking new clients. Saves an enquiry that ends in disappointment.",
        icon: "CalendarCheck",
      },
      {
        title: "Credentials and approach",
        description:
          "Licence, training and how you actually work, which is how clients judge fit.",
        icon: "BadgeCheck",
      },
      {
        title: "Private enquiry",
        description:
          "A minimal form that does not ask for clinical detail, with clear privacy expectations.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "Why state fees and availability so prominently?",
        answer:
          "Because they are the two things that stop someone enquiring, and both are easy to answer.",
        body: [
          {
            type: "list",
            items: [
              "Session fee, stated plainly. People will not ask, they will just move on.",
              "Whether you accept insurance, and which plans, or whether you provide superbills.",
              "Sliding scale availability if you offer it, and how to ask without embarrassment.",
              "Whether you are currently accepting new clients, updated honestly.",
              "Typical wait time for a first appointment.",
            ],
          },
          {
            type: "callout",
            title: "Say when you are full",
            text: "A therapist with no availability who takes enquiries anyway creates a bad experience for someone already struggling. Stating it — with a referral suggestion — is kinder and protects your reputation.",
          },
        ],
      },
      {
        heading: "How should the enquiry form work?",
        body: [
          {
            type: "p",
            text: "Minimally. Name, preferred contact method, and a short note about what they are looking for. Explicitly ask them not to include detailed clinical information, since a website form is not a secure clinical channel.",
          },
          {
            type: "p",
            text: "Say how and when you will respond, and what happens if they are in crisis — with crisis line details displayed clearly. That last point matters and is often missing.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a website form secure enough for client information?",
        answer:
          "Not for clinical detail. We keep forms minimal and state clearly that clients should not include sensitive information, directing detailed intake to your secure practice platform instead.",
      },
      {
        question: "Should I list my fees?",
        answer:
          "Yes. Cost is one of the main barriers to seeking therapy, and someone who cannot afford you will simply not enquire rather than ask. Publishing saves both of you time.",
      },
      {
        question: "Do I need crisis information on the site?",
        answer:
          "Yes, clearly displayed. Some visitors will be in acute distress, and a visible crisis line is both responsible and expected of a mental health practice website.",
      },
    ],
    related: ["medical-practice-website", "chiropractor-website", "nutritionist-website"],
  },

  {
    slug: "nutritionist-website",
    eyebrow: "Nutritionists",
    title: "Nutritionist and dietitian website design",
    seoTitle: "Nutritionist & Dietitian Website Design | ROVQIX",
    description:
      "Websites for nutritionists and dietitians — packages, specialisms, credentials, insurance and consultation booking.",
    excerpt: "Packages, specialisms and credentials — plus honest claims that stay compliant.",
    primaryKeyword: "nutritionist website design",
    secondaryKeywords: [
      "dietitian website design",
      "nutrition coach website",
      "nutrition practice website",
      "health coach website design",
    ],
    answer:
      "A nutritionist website from ROVQIX costs $349 to $1,290 and takes about a week. It covers service packages, specialisms, your credentials, whether you take insurance, and consultation booking.",
    intro:
      "Nutrition is a crowded field with wildly varying qualifications. Making yours visible is the fastest way to separate from unqualified competitors.",
    deliverables: [
      {
        title: "Credentials up front",
        description:
          "RD, RDN or your actual qualification. It is the main differentiator in a poorly regulated field.",
        icon: "BadgeCheck",
      },
      {
        title: "Specialisms",
        description:
          "Sports, diabetes, gut health, eating disorders, paediatric. Clients search their specific issue.",
        icon: "Network",
      },
      {
        title: "Package pricing",
        description:
          "Programmes rather than single sessions, since nutrition work needs continuity to help.",
        icon: "Receipt",
      },
      {
        title: "Insurance",
        description:
          "Whether medical nutrition therapy is covered, which many clients do not realise it can be.",
        icon: "ShieldCheck",
      },
      {
        title: "Careful claim language",
        description:
          "Describing what you do without promising clinical outcomes or weight loss figures.",
        icon: "FileText",
      },
    ],
    sections: [
      {
        heading: "Why lead with credentials?",
        answer:
          "Because 'nutritionist' is unregulated in many states and clients cannot tell the difference otherwise.",
        body: [
          {
            type: "p",
            text: "A registered dietitian has a degree, supervised practice and a credential. In many states anyone can call themselves a nutritionist. Clients researching carefully specifically look for this.",
          },
          {
            type: "list",
            items: [
              "State your credential and what it required, briefly.",
              "Mention state licensure where it applies to you.",
              "Note if you can bill insurance, which unqualified competitors usually cannot.",
              "Explain when you work alongside a physician, which signals clinical seriousness.",
            ],
          },
        ],
      },
      {
        heading: "How careful should claims be?",
        body: [
          {
            type: "p",
            text: "Careful. Specific weight-loss promises and disease-treatment claims attract regulatory attention and are hard to substantiate for an individual.",
          },
          {
            type: "list",
            items: [
              "Describe your approach and what the programme involves, rather than promising a result.",
              "Use client outcomes only with permission and with a clear note that results vary.",
              "Avoid before-and-after weight photography, which is both risky and off-putting to many clients.",
              "Never claim to treat or cure a medical condition unless that is genuinely within your scope.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I sell packages or single sessions?",
        answer:
          "Packages, mostly. Nutrition work needs continuity to be effective, and package pricing sets that expectation while making your revenue predictable.",
      },
      {
        question: "Can I take insurance?",
        answer:
          "Registered dietitians often can for medical nutrition therapy. If you do, say so prominently — many clients assume it is never covered and never check.",
      },
      {
        question: "Should I offer virtual consultations?",
        answer:
          "Yes, and say so clearly. Nutrition works well remotely and it widens your market considerably beyond your immediate area, subject to any state licensure limits.",
      },
    ],
    related: ["counselling-practice-website", "personal-trainer-website", "medical-practice-website"],
  },
];

export const localHomeTradesPages = makeLocalPages(specs);
