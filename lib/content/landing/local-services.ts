import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/**
 * Appointment, event and specialist local services. Completes the `related`
 * links referenced from the other local files — add a page here before
 * referencing it as related anywhere else.
 */
const specs: LocalSpec[] = [
  {
    slug: "photographer-website",
    eyebrow: "Photographers",
    title: "Photographer website design",
    seoTitle: "Photographer Website Design from $349 | ROVQIX",
    description:
      "Websites for photographers — portfolio galleries that load fast, package pricing, availability enquiries and client galleries. From $349.",
    excerpt: "A portfolio that loads fast and pricing that stops the tyre-kickers.",
    primaryKeyword: "photographer website design",
    secondaryKeywords: [
      "photography website design",
      "wedding photographer website",
      "portrait photographer website",
      "photography portfolio website",
    ],
    answer:
      "A photographer's website from ROVQIX costs $349 to $1,290 and takes about a week. It centres on fast-loading portfolio galleries, package pricing, an availability enquiry form and a link to your client gallery system.",
    intro:
      "Photographers build the slowest websites on the internet, because the whole business is large images. That is the actual engineering problem here.",
    deliverables: [
      {
        title: "Fast galleries",
        description:
          "Large images that still load quickly, properly resized and loaded as the visitor scrolls.",
        icon: "Images",
      },
      {
        title: "Package pricing",
        description:
          "Starting prices at minimum. Photographers who publish nothing get enquiries they cannot convert.",
        icon: "Receipt",
      },
      {
        title: "Availability enquiry",
        description:
          "Date, location, type and budget — enough to say yes or no without three emails.",
        icon: "CalendarCheck",
      },
      {
        title: "Work split by type",
        description:
          "Weddings, portraits, commercial. Different buyers who should not have to wade through each other's work.",
        icon: "Network",
      },
      {
        title: "Client gallery link",
        description:
          "Connected to Pixieset, Pic-Time or ShootProof rather than rebuilding delivery.",
        icon: "Users",
      },
      {
        title: "About page with your face",
        description:
          "Clients are choosing someone to spend a day with. Anonymity costs bookings here.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "How do you show great photos without a slow site?",
        answer:
          "Resize properly, use modern formats, and load images as the visitor scrolls rather than all at once.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Never upload straight from the camera. A 12MB export has no business on a web page.",
              "Serve modern formats, which cut file size by more than half with no visible loss.",
              "Load the first few images immediately and fetch the rest on scroll.",
              "Reserve the space so the page does not jump as photos arrive.",
              "Curate hard. Thirty outstanding images convert better than two hundred good ones.",
            ],
          },
          {
            type: "callout",
            title: "Your portfolio is competing with a back button",
            text: "A gallery that takes eight seconds on a phone loses the booking before the first image renders. Photographers lose more work to slow sites than to weak portfolios.",
          },
        ],
      },
      {
        heading: "Should you publish prices?",
        body: [
          {
            type: "p",
            text: "A starting price at minimum. 'Wedding collections from $2,800' filters out the enquiries you were never going to take and reassures the ones you want.",
          },
          {
            type: "p",
            text: "Photographers who hide pricing entirely spend hours replying to enquiries from people with a $600 budget. The starting figure does that filtering for free, while you sleep.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use my Pixieset or Squarespace galleries?",
        answer:
          "Yes. We link client delivery galleries rather than rebuilding them, since those platforms already handle downloads, favourites and print sales properly.",
      },
      {
        question: "How many photos should the portfolio have?",
        answer:
          "Twenty to forty per category. Curation is a skill clients judge you on — a bloated gallery signals you cannot tell your best work from your average work.",
      },
      {
        question: "Do I need a blog?",
        answer:
          "Recent full sessions posted as galleries do work well for wedding photographers, because couples search for their venue. A general blog nobody maintains does not.",
      },
    ],
    related: ["event-planner-website", "videographer-website", "wedding-venue-website"],
  },

  {
    slug: "videographer-website",
    eyebrow: "Videographers",
    title: "Videographer website design",
    seoTitle: "Videographer Website Design | ROVQIX",
    description:
      "Websites for videographers — showreels that load fast, package pricing, enquiry forms and work split by type. From $349.",
    excerpt: "A showreel that plays instantly, without tanking your page speed.",
    primaryKeyword: "videographer website design",
    secondaryKeywords: [
      "video production website",
      "wedding videographer website",
      "videography portfolio website",
      "film company website",
    ],
    answer:
      "A videographer's website from ROVQIX costs $349 to $1,290 and takes about a week. The core is a showreel that loads fast, work organised by type, package pricing and an enquiry form that captures date, location and budget.",
    intro:
      "Video is heavy. The temptation is an autoplaying full-screen reel on the home page, which is also the fastest way to lose a visitor on mobile data.",
    deliverables: [
      {
        title: "Showreel done properly",
        description:
          "Hosted on Vimeo or YouTube, with a poster frame, never autoplaying as the largest element on the page.",
        icon: "Images",
      },
      {
        title: "Work by type",
        description:
          "Weddings, commercial, events. Buyers differ completely and should not have to filter manually.",
        icon: "Network",
      },
      {
        title: "Package pricing",
        description:
          "Starting prices with what is included — hours of coverage, edit length, delivery time.",
        icon: "Receipt",
      },
      {
        title: "Delivery timelines",
        description:
          "How long the edit takes. The most common complaint in this industry, and easily prevented.",
        icon: "Clock",
      },
      {
        title: "Enquiry form",
        description:
          "Date, location, type and budget so you can qualify without a call.",
        icon: "CalendarCheck",
      },
      {
        title: "Kit and crew",
        description:
          "What you shoot on and whether you work solo or with a team, which commercial clients ask.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "How should video be embedded?",
        answer:
          "Hosted externally with a poster image, loaded only when the visitor chooses to play it.",
        body: [
          {
            type: "list",
            items: [
              "Host on Vimeo or YouTube. Self-hosting large video files is expensive and slow.",
              "Show a poster frame, not an auto-loading player — the embed itself costs real page weight.",
              "Never make a video the largest element that has to load before the page feels ready.",
              "Autoplay muted background loops are acceptable only if short, compressed and non-critical.",
              "Always give a play control. Some people are on metered data and will leave rather than gamble.",
            ],
          },
          {
            type: "callout",
            title: "One reel, chosen carefully",
            text: "A single 60 to 90 second reel that represents your best work converts better than six full films nobody watches to the end.",
          },
        ],
      },
      {
        heading: "What do commercial clients want to see?",
        body: [
          {
            type: "list",
            items: [
              "Work in their sector, or close enough to be credible.",
              "Turnaround times, since commercial projects usually have a launch date.",
              "Whether you handle scripting and direction or shoot to their brief.",
              "Crew size and what you subcontract.",
              "Insurance and whether you can work on their site.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should the showreel autoplay?",
        answer:
          "A short muted loop can work if it is compressed and not the main content. A full reel should never autoplay — it costs page speed and irritates people on mobile data.",
      },
      {
        question: "Can I show client work under NDA?",
        answer:
          "Only with permission. We can build a password-protected section for work you can show privately to prospects but not publish, which is common for commercial videographers.",
      },
      {
        question: "How much does it cost?",
        answer:
          "$349 to $1,290 depending on how many sections you need. Video hosting stays on Vimeo or YouTube, so there is no extra hosting cost for your files.",
      },
    ],
    related: ["photographer-website", "event-planner-website", "wedding-venue-website"],
  },

  {
    slug: "event-planner-website",
    eyebrow: "Event planners",
    title: "Event planner website design",
    seoTitle: "Event Planner Website Design | ROVQIX",
    description:
      "Websites for event and wedding planners — service packages, real event galleries, consultation booking and enquiry forms that qualify by budget.",
    excerpt: "Packages, real event galleries and enquiries qualified by budget and date.",
    primaryKeyword: "event planner website design",
    secondaryKeywords: [
      "wedding planner website",
      "event planning website design",
      "party planner website",
      "corporate event planner website",
    ],
    answer:
      "An event planner website from ROVQIX costs $349 to $1,290 and takes about a week. It covers service packages, galleries of real events, consultation booking and an enquiry form that captures date, guest count and budget.",
    intro:
      "Planners waste enormous time on consultations with people whose budget is a fraction of the minimum. The enquiry form is where that gets fixed.",
    deliverables: [
      {
        title: "Service packages",
        description:
          "Full planning, partial planning, day-of coordination. Clients rarely know these differ until told.",
        icon: "Blocks",
      },
      {
        title: "Budget-qualifying enquiry",
        description:
          "Date, guest count and budget range, so a mismatch is caught before a consultation is booked.",
        icon: "ClipboardList",
      },
      {
        title: "Real event galleries",
        description:
          "Full events rather than detail shots, so clients can picture the whole day.",
        icon: "Images",
      },
      {
        title: "Consultation booking",
        description:
          "Straight into your calendar, since the consultation is where you actually close.",
        icon: "CalendarCheck",
      },
      {
        title: "Vendor relationships",
        description:
          "Preferred vendors and venues, which signals experience and local depth.",
        icon: "Handshake",
      },
      {
        title: "Your minimum",
        description:
          "Stated plainly. Kinder than declining an enquiry after someone has got their hopes up.",
        icon: "Receipt",
      },
    ],
    sections: [
      {
        heading: "How do you qualify enquiries without being off-putting?",
        answer:
          "Publish your package minimums and ask for a budget range as an optional field with a friendly explanation.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Publish 'full planning from $4,500' so the filter happens before the form.",
              "Use budget brackets rather than an open field — people pick, they do not type.",
              "Add a 'still working it out' option and reply to those with your typical ranges.",
              "Explain why you ask: it helps you recommend the right package. That is true and it softens the question.",
              "Ask the event date early, so you can decline on availability rather than on money.",
            ],
          },
          {
            type: "callout",
            title: "Publishing your minimum is a kindness",
            text: "Nobody enjoys a consultation that ends when the budget comes up. Putting the number on the page saves your time and spares the client an awkward hour.",
          },
        ],
      },
      {
        heading: "What should galleries show?",
        body: [
          {
            type: "p",
            text: "Complete events rather than styled detail shots. Clients want to see a whole day — ceremony, reception, the flow — because that is what they are buying.",
          },
          {
            type: "p",
            text: "Include a short note per event: guest count, venue, and the challenge you solved. That turns a pretty gallery into evidence of competence.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show package prices?",
        answer:
          "Starting prices, yes. Event planning is a category where clients have no reference point and often expect figures far below reality. A starting price positions you and filters enquiries.",
      },
      {
        question: "Can clients book consultations directly?",
        answer:
          "Yes, connected to your calendar. We usually gate it behind the enquiry form so you can review the budget and date before a call is confirmed.",
      },
      {
        question: "Do we need separate wedding and corporate sections?",
        answer:
          "If you do both seriously, yes. They are different buyers with different concerns — corporate clients care about logistics and invoicing, wedding clients care about the experience.",
      },
    ],
    related: ["wedding-venue-website", "photographer-website", "catering-company-website"],
  },

  {
    slug: "wedding-venue-website",
    eyebrow: "Venues",
    title: "Wedding and event venue website design",
    seoTitle: "Wedding & Event Venue Website Design | ROVQIX",
    description:
      "Websites for wedding and event venues — capacity and pricing, date availability, galleries, floor plans and tour bookings.",
    excerpt: "Capacity, price and date availability — the three things every enquiry asks.",
    primaryKeyword: "wedding venue website design",
    secondaryKeywords: [
      "event venue website",
      "banquet hall website design",
      "venue booking website",
      "event space website",
    ],
    answer:
      "A venue website from ROVQIX costs $749 to $1,290 and takes one to two weeks. The essentials are capacity, pricing structure, date availability, galleries showing the space set up different ways, floor plans and tour booking.",
    intro:
      "Every venue enquiry asks the same three questions. Answering them on the page means the enquiries you do get are from people who already fit.",
    deliverables: [
      {
        title: "Capacity clearly stated",
        description:
          "Seated, standing and ceremony capacity. The first filter for every single enquiry.",
        icon: "Users",
      },
      {
        title: "Pricing structure",
        description:
          "Hire fee, minimum spend, day-of-week differences. Vague pricing generates enquiries that go nowhere.",
        icon: "Receipt",
      },
      {
        title: "Date availability",
        description:
          "Even a simple 'dates remaining in 2026' list saves enormous back-and-forth.",
        icon: "CalendarCheck",
      },
      {
        title: "Galleries by setup",
        description:
          "The same room dressed for a wedding, a conference and a party. People cannot imagine it otherwise.",
        icon: "Images",
      },
      {
        title: "Floor plans",
        description:
          "Dimensions and layouts, which planners and corporate bookers specifically look for.",
        icon: "LayoutTemplate",
      },
      {
        title: "Tour booking",
        description:
          "The main conversion. Nobody books a venue without seeing it.",
        icon: "Target",
      },
    ],
    sections: [
      {
        heading: "What should be answered before the enquiry?",
        answer:
          "Capacity, price and availability. Everything else can wait for the tour.",
        body: [
          {
            type: "table",
            head: ["Question", "Why it must be on the page"],
            rows: [
              ["How many people fit?", "Instant disqualifier if it does not match"],
              ["What does it cost?", "Second filter, and the one venues hide most"],
              ["Is our date free?", "Determines whether anything else matters"],
              ["Can we use our own caterer?", "Deal-breaker for many couples"],
              ["What is included?", "Tables, chairs, staff, setup — big cost differences"],
              ["Is there parking or accommodation?", "Practical, and asked constantly"],
            ],
          },
          {
            type: "callout",
            title: "Hiding price generates worse enquiries, not more",
            text: "Venues fear that publishing a minimum spend will scare people off. It does — the wrong people. The enquiries that remain are from couples who can actually afford it.",
          },
        ],
      },
      {
        heading: "How should availability be shown?",
        body: [
          {
            type: "p",
            text: "Even a manually maintained list of remaining dates by season is enormously useful and rare. It creates genuine urgency and stops enquiries for dates you cannot serve.",
          },
          {
            type: "p",
            text: "A live calendar is better if your booking system supports it, but a page you update monthly is far better than nothing.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish our minimum spend?",
        answer:
          "Yes. It is the single most effective filter available to a venue, and couples increasingly expect it. Vague pricing mostly produces enquiries that waste a tour slot.",
      },
      {
        question: "Can couples check dates online?",
        answer:
          "Yes, either as a live calendar from your booking system or a maintained list of remaining dates. Both work; the maintained list is fine if updated monthly.",
      },
      {
        question: "How many photos do we need?",
        answer:
          "Enough to show the space in each configuration — wedding, corporate, party — plus the grounds, parking and any accommodation. Thirty to fifty well-chosen images.",
      },
    ],
    related: ["event-planner-website", "catering-company-website", "photographer-website"],
  },

  {
    slug: "medical-practice-website",
    eyebrow: "Medical practices",
    title: "Medical practice website design",
    seoTitle: "Medical Practice Website Design | ROVQIX",
    description:
      "Websites for medical practices — providers, services, insurance accepted, new patient information and appointment requests, built accessibly.",
    excerpt: "Providers, insurance and new patient info, with accessibility done properly.",
    primaryKeyword: "medical practice website design",
    secondaryKeywords: [
      "doctor website design",
      "medical office website",
      "clinic website design",
      "healthcare practice website",
    ],
    answer:
      "A medical practice website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers providers and credentials, services, insurance accepted, new patient information and appointment requests, built to WCAG 2.2 AA.",
    intro:
      "Two questions decide whether a patient calls you: do you take their insurance, and can they get in soon. Most practice websites answer neither clearly.",
    deliverables: [
      {
        title: "Insurance accepted",
        description:
          "A plain, current list of plans. The most-checked page and usually the hardest to find.",
        icon: "ShieldCheck",
      },
      {
        title: "Provider profiles",
        description:
          "Credentials, specialisms, languages spoken and whether they are accepting new patients.",
        icon: "Users",
      },
      {
        title: "New patient information",
        description:
          "What to bring, forms to complete, what the first visit involves.",
        icon: "ClipboardList",
      },
      {
        title: "Appointment requests",
        description:
          "A request form or link to your patient portal, with urgent care routed to the phone.",
        icon: "CalendarCheck",
      },
      {
        title: "Accessible build",
        description:
          "Large text support, keyboard operation and proper contrast. Expected for healthcare in the US.",
        icon: "Accessibility",
      },
      {
        title: "Locations and hours",
        description:
          "Per location, with parking and access information, which patients genuinely need.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "Why is insurance the most important page?",
        answer:
          "Because for most US patients it decides whether they can use you at all.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "List accepted plans by name, on a page reachable from the main menu.",
              "Say clearly whether you are in-network or out-of-network.",
              "Explain self-pay options and any membership or cash rates.",
              "Keep it current — an out-of-date list produces angry calls and one-star reviews.",
              "If it is genuinely complicated, say 'call and we will verify' rather than leaving it blank.",
            ],
          },
          {
            type: "callout",
            title: "Fix this before redesigning anything",
            text: "Practices routinely spend on photography while the insurance page is a scanned PDF from three years ago. Updating that one page usually does more for new patient volume than a full redesign.",
          },
        ],
      },
      {
        heading: "How should patient data be handled?",
        body: [
          {
            type: "p",
            text: "Keep it off the website. Health information belongs in your patient portal or practice management system, which is built for it. We link to those rather than collecting clinical detail through a website form.",
          },
          {
            type: "p",
            text: "A general contact form should say plainly not to include medical details, and requests should be limited to name, contact and a reason for the visit.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does our website need to be HIPAA compliant?",
        answer:
          "A marketing site that stores no patient information is not handling protected health data. The care is in forms — we keep clinical detail out of the website and in your patient portal, which is the simpler and safer arrangement.",
      },
      {
        question: "Can patients book appointments online?",
        answer:
          "Through your patient portal if it supports scheduling, or as a request your front desk confirms. Many practices prefer requests so they can triage and verify insurance first.",
      },
      {
        question: "Do medical websites need to meet accessibility standards?",
        answer:
          "Healthcare sites are a frequent target of accessibility complaints in the US, so we build to WCAG 2.2 AA as standard rather than as an upgrade.",
      },
    ],
    related: ["dental-practice-website", "optometrist-website", "chiropractor-website"],
  },

  {
    slug: "optometrist-website",
    eyebrow: "Optometrists",
    title: "Optometrist and eye care website design",
    seoTitle: "Optometrist Website Design | ROVQIX",
    description:
      "Websites for optometry practices — exam booking, insurance and vision plans, frame brands stocked, and contact lens reordering.",
    excerpt: "Exam booking, vision plans accepted and the frame brands you carry.",
    primaryKeyword: "optometrist website design",
    secondaryKeywords: [
      "optometry practice website",
      "eye doctor website design",
      "optical store website",
      "eye care clinic website",
    ],
    answer:
      "An optometry website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers eye exam booking, vision plans and medical insurance accepted, the frame brands you stock, and contact lens reordering.",
    intro:
      "Optometry is two businesses on one site: a medical practice and an optical retailer. Patients arrive for one and often do not realise you do the other.",
    deliverables: [
      {
        title: "Exam booking",
        description:
          "Online scheduling with exam type — routine, contact lens fitting, medical — since durations differ.",
        icon: "CalendarCheck",
      },
      {
        title: "Vision plans and insurance",
        description:
          "Both vision plans and medical insurance, which patients routinely confuse and you can clarify.",
        icon: "ShieldCheck",
      },
      {
        title: "Frame brands stocked",
        description:
          "Named brands, because people search for the designer they want and this is how they find you.",
        icon: "ShoppingBag",
      },
      {
        title: "Contact lens reordering",
        description:
          "A repeat order path, which keeps patients from drifting to online lens retailers.",
        icon: "RefreshCw",
      },
      {
        title: "Medical eye care",
        description:
          "Dry eye, glaucoma monitoring, diabetic exams — services patients do not know optometrists provide.",
        icon: "HeartPulse",
      },
      {
        title: "Accessible build",
        description:
          "Particularly important here, since a share of your patients have significant vision impairment.",
        icon: "Accessibility",
      },
    ],
    sections: [
      {
        heading: "Why explain the difference between vision plans and medical insurance?",
        answer:
          "Because patients assume they are the same thing, and the confusion costs you appointments and creates billing disputes.",
        body: [
          {
            type: "list",
            items: [
              "Vision plans typically cover routine exams, glasses and contacts.",
              "Medical insurance covers eye conditions — infections, dry eye, glaucoma, diabetic eye exams.",
              "A patient can be covered for one and not the other, and often does not know.",
              "Explaining this before the visit prevents surprise bills, which are a major source of complaints.",
              "It also surfaces your medical services, which many patients do not know you offer.",
            ],
          },
          {
            type: "callout",
            title: "This page prevents billing complaints",
            text: "A plain explanation of which insurance covers what removes the single most common source of angry post-visit phone calls in optometry.",
          },
        ],
      },
      {
        heading: "Why list frame brands by name?",
        body: [
          {
            type: "p",
            text: "People search for specific designers. If your site lists the brands you carry, you appear for those searches — and almost no independent optical site does this.",
          },
          {
            type: "p",
            text: "It also brings in customers who were going to buy online, because they discover the frame they wanted is available locally to try on today.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can patients reorder contacts online?",
        answer:
          "Yes, as a reorder request tied to their existing prescription, which you verify. It is the main defence against patients drifting to online lens retailers.",
      },
      {
        question: "Should we sell glasses online?",
        answer:
          "Usually not. Fitting and adjustment are your advantage over online retailers. Listing the brands you stock and inviting people to try them on works far better.",
      },
      {
        question: "Can we book different exam types?",
        answer:
          "Yes, and you should — a contact lens fitting takes considerably longer than a routine exam, and booking them as the same slot causes scheduling problems.",
      },
    ],
    related: ["medical-practice-website", "dental-practice-website", "boutique-retail-website"],
  },

  {
    slug: "tire-shop-website",
    eyebrow: "Tire shops",
    title: "Tire shop website design",
    seoTitle: "Tire Shop Website Design | ROVQIX",
    description:
      "Websites for tire shops — search by vehicle or tire size, pricing, appointment booking, brands stocked and fitting services.",
    excerpt: "Search by size or vehicle, real prices, and a booking that fits your bays.",
    primaryKeyword: "tire shop website design",
    secondaryKeywords: [
      "tire store website",
      "tyre shop website design",
      "wheel and tire website",
      "tire fitting website",
    ],
    answer:
      "A tire shop website from ROVQIX costs $349 to $1,290 and takes about a week. Priorities are search or lookup by tire size, pricing including fitting, appointment booking, and the brands you stock.",
    intro:
      "Tire buying is unusually price-transparent — customers arrive already knowing the size and often the online price. Competing means being clear about the total fitted cost.",
    deliverables: [
      {
        title: "Size and vehicle lookup",
        description:
          "Customers know their size or their car. Let them start from either without calling.",
        icon: "Search",
      },
      {
        title: "Fitted pricing",
        description:
          "Price including mounting, balancing, valves and disposal. This is where you beat online sellers.",
        icon: "Receipt",
      },
      {
        title: "Brands stocked",
        description:
          "Named brands and tiers, since customers search for specific manufacturers.",
        icon: "ShoppingBag",
      },
      {
        title: "Appointment booking",
        description:
          "With duration matched to the job, so your bays are not double-booked.",
        icon: "CalendarCheck",
      },
      {
        title: "Additional services",
        description:
          "Alignment, rotation, TPMS, repairs. These are the margin on top of the tire itself.",
        icon: "Blocks",
      },
      {
        title: "Seasonal changeovers",
        description:
          "Winter tire swaps and storage, which is a scheduling and revenue peak in northern states.",
        icon: "RefreshCw",
      },
    ],
    sections: [
      {
        heading: "How do you compete with online tire retailers?",
        answer:
          "On the total fitted price and on being able to do it today.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Publish the out-the-door price including mounting, balancing, valves and disposal.",
              "Make the comparison explicit — an online tire still needs fitting somewhere, at a cost.",
              "Show same-day or next-day availability, which online cannot match.",
              "Mention road hazard warranty and free rotations if you offer them.",
              "Be willing to fit customer-supplied tires and price that clearly. It brings people in.",
            ],
          },
          {
            type: "callout",
            title: "Out-the-door pricing wins",
            text: "Customers compare a tire price online against your tire price and assume you are expensive. Publishing the fitted total reframes the comparison to what they will actually pay, which is usually much closer than they expect.",
          },
        ],
      },
      {
        heading: "How much of a catalogue do you need?",
        body: [
          {
            type: "p",
            text: "Not a live inventory of every size. A lookup that captures the size and vehicle and returns a quote request, plus a page listing the brands and tiers you stock, covers most enquiries.",
          },
          {
            type: "p",
            text: "Full live inventory integration is possible but it is a much bigger build, and most independent shops do not have the data feed to support it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need live inventory on the site?",
        answer:
          "Usually not. A size lookup that produces a quote request works well and is far cheaper. Live inventory needs a supplier data feed most independents do not have.",
      },
      {
        question: "Should we publish prices?",
        answer:
          "Out-the-door prices for common sizes, yes. Customers are comparing against online prices anyway, and showing the fitted total is the strongest argument you have.",
      },
      {
        question: "Can customers book a fitting online?",
        answer:
          "Yes, with the appointment length matched to the job so your bay scheduling stays realistic.",
      },
    ],
    related: ["auto-repair-shop-website", "auto-detailing-website", "car-wash-website"],
  },

  {
    slug: "towing-company-website",
    eyebrow: "Towing",
    title: "Towing company website design",
    seoTitle: "Towing Company Website Design | ROVQIX",
    description:
      "Websites for towing and roadside assistance — one-tap emergency calling, service area, pricing transparency and fleet capability.",
    excerpt: "One tap to call, because nobody browses a towing website.",
    primaryKeyword: "towing company website design",
    secondaryKeywords: [
      "tow truck website",
      "roadside assistance website",
      "towing service website design",
      "24 hour towing website",
    ],
    answer:
      "A towing company website from ROVQIX costs $349 to $749 and takes about a week. It has one real job: a phone number that is one tap away on a phone, plus service area, availability and honest pricing.",
    intro:
      "Somebody on the hard shoulder is not reading your about page. This is the simplest website we build, and the simplicity is the point.",
    deliverables: [
      {
        title: "One-tap emergency call",
        description:
          "Enormous, fixed to the screen, above everything else. Nothing else on the page matters as much.",
        icon: "Phone",
      },
      {
        title: "24/7 availability stated",
        description:
          "If you are always available, say so at the top. If you are not, say your hours honestly.",
        icon: "Clock",
      },
      {
        title: "Service area",
        description:
          "Where you tow, so a stranded driver knows in two seconds whether to keep calling.",
        icon: "Globe",
      },
      {
        title: "Pricing transparency",
        description:
          "Hook-up fee and per-mile rate. Towing has a bad reputation for surprise bills; publishing helps.",
        icon: "Receipt",
      },
      {
        title: "Fleet and capability",
        description:
          "Flatbed, heavy duty, motorcycle, winch-out. It matters and it is often not stated.",
        icon: "Blocks",
      },
      {
        title: "Loads fast on bad signal",
        description:
          "A light page that works on one bar of signal at the roadside.",
        icon: "Gauge",
      },
    ],
    sections: [
      {
        heading: "What does a stranded driver need?",
        answer:
          "A tappable phone number, confirmation you cover the road they are on, and confirmation you are available now.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Phone number as a giant tap-to-call button, visible instantly without scrolling.",
              "'24/7' or your actual hours, right beside it.",
              "Service area, including which highways you cover.",
              "Roughly how long you take to arrive.",
              "Nothing else above the fold. No hero image, no slider, no company history.",
            ],
          },
          {
            type: "callout",
            title: "The lightest page we build",
            text: "A towing site should load in under a second on one bar of signal. That means very few images and almost no scripts. This is one case where a plain page genuinely outperforms a designed one.",
          },
        ],
      },
      {
        heading: "Should towing prices be published?",
        body: [
          {
            type: "p",
            text: "The hook-up fee and per-mile rate, yes. Towing has a reputation problem around surprise billing, and being one of the few companies that publishes rates is a real differentiator.",
          },
          {
            type: "p",
            text: "Note that heavy duty, winch-out and after-hours rates differ. Being upfront about that is better than a dispute at the roadside.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need more than one page?",
        answer:
          "Often not. A single well-built page with your number, area, services and rates does the job. We would rather build you one excellent page than five you do not need.",
      },
      {
        question: "Should we take bookings online?",
        answer:
          "No. Emergency towing is a phone call. A form for scheduled transport or vehicle moves is worth adding, but it should never compete with the call button.",
      },
      {
        question: "How much does it cost?",
        answer:
          "This is one of the few businesses where the $349 one-page site is genuinely the right answer rather than a compromise.",
      },
    ],
    related: ["auto-repair-shop-website", "tire-shop-website", "moving-company-website"],
  },

  {
    slug: "car-wash-website",
    eyebrow: "Car washes",
    title: "Car wash website design",
    seoTitle: "Car Wash Website Design | ROVQIX",
    description:
      "Websites for car washes — package pricing, unlimited membership signup, locations, hours and wait times.",
    excerpt: "Package pricing and membership signup, which is where the money is.",
    primaryKeyword: "car wash website design",
    secondaryKeywords: [
      "car wash website",
      "carwash membership website",
      "auto wash website design",
      "self serve car wash website",
    ],
    answer:
      "A car wash website from ROVQIX costs $349 to $1,290 and takes about a week. The commercial priority is the unlimited membership signup, alongside package pricing, locations and hours.",
    intro:
      "Modern car washes make their money on unlimited memberships, not single washes. The website should be built almost entirely around that conversion.",
    deliverables: [
      {
        title: "Membership signup",
        description:
          "The main conversion. Monthly price, what is included, and how to cancel — stated clearly.",
        icon: "RefreshCw",
      },
      {
        title: "Package pricing",
        description:
          "Wash tiers side by side, with the membership break-even made obvious.",
        icon: "Receipt",
      },
      {
        title: "Locations and hours",
        description:
          "Per site, with directions. Multi-location operators need this structured properly.",
        icon: "Globe",
      },
      {
        title: "What each wash includes",
        description:
          "Tier differences explained plainly, since customers cannot tell what 'ceramic' actually adds.",
        icon: "Blocks",
      },
      {
        title: "Fleet and commercial",
        description:
          "Business accounts, which most car wash sites never advertise and are steady revenue.",
        icon: "Building2",
      },
      {
        title: "Cancellation clarity",
        description:
          "How to cancel a membership, stated honestly. Hiding it generates chargebacks and bad reviews.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "How do you sell unlimited memberships?",
        answer:
          "By making the break-even obvious: two washes a month and it pays for itself.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Show the single wash price next to the monthly membership price.",
              "State the break-even explicitly — 'pays for itself after two washes'.",
              "Make signup possible in under a minute from a phone at the wash.",
              "Be honest about cancellation. Hiding it produces chargebacks and one-star reviews.",
              "Offer a first-month trial rate if you can, since the habit is what retains people.",
            ],
          },
          {
            type: "callout",
            title: "Easy cancellation increases signups",
            text: "Counter-intuitively, saying 'cancel anytime online in two clicks' converts better than burying it. The fear of being trapped is what stops people signing up in the first place.",
          },
        ],
      },
      {
        heading: "What else belongs on the site?",
        body: [
          {
            type: "list",
            items: [
              "Live or typical wait times if you can provide them.",
              "Height and vehicle restrictions, which prevents wasted trips.",
              "Whether you have free vacuums, which is a genuine decision factor.",
              "Fleet and commercial accounts, usually completely unadvertised.",
              "Gift cards, which sell well around holidays.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can people sign up for memberships on the site?",
        answer:
          "Yes, linked to your membership platform which handles billing and licence plate recognition. We do not rebuild the billing side.",
      },
      {
        question: "Should we show wait times?",
        answer:
          "If your system tracks it, yes — it is genuinely useful and almost nobody does it. Typical wait times by day and hour is a reasonable alternative if live data is not available.",
      },
      {
        question: "Do we need a page per location?",
        answer:
          "Yes, if you have multiple sites. Each needs its own hours, address and structured data so it appears correctly in local search.",
      },
    ],
    related: ["auto-detailing-website", "tire-shop-website", "auto-repair-shop-website"],
  },

  {
    slug: "self-storage-website",
    eyebrow: "Self storage",
    title: "Self storage website design",
    seoTitle: "Self Storage Website Design | ROVQIX",
    description:
      "Websites for self storage facilities — unit sizes and pricing, availability, online reservation, access hours and security features.",
    excerpt: "Unit sizes, real prices and availability — the three things every search wants.",
    primaryKeyword: "self storage website design",
    secondaryKeywords: [
      "storage facility website",
      "storage unit website design",
      "self storage web design",
      "storage rental website",
    ],
    answer:
      "A self storage website from ROVQIX costs $749 to $1,290 and takes one to two weeks. The essentials are unit sizes with real prices, current availability, online reservation, access hours and security features.",
    intro:
      "Storage is a commodity purchase decided on size, price and location. A site that shows all three beats one with better photography every time.",
    deliverables: [
      {
        title: "Unit sizes with prices",
        description:
          "Every size with the monthly price and what fits in it, since customers cannot visualise dimensions.",
        icon: "Receipt",
      },
      {
        title: "Availability",
        description:
          "What is actually free right now. The single most useful thing on a storage site.",
        icon: "CalendarCheck",
      },
      {
        title: "Online reservation",
        description:
          "Reserve or rent without calling, which is increasingly what customers expect.",
        icon: "Target",
      },
      {
        title: "Access hours and security",
        description:
          "Gate hours, cameras, lighting, individual alarms. Security is a genuine decision factor.",
        icon: "ShieldCheck",
      },
      {
        title: "Size guide",
        description:
          "What fits in a 5x10 versus a 10x20, in terms of rooms and furniture rather than cubic feet.",
        icon: "LayoutTemplate",
      },
      {
        title: "Climate control",
        description:
          "Which units are climate controlled and why it matters for certain contents.",
        icon: "Gauge",
      },
    ],
    sections: [
      {
        heading: "Why does the size guide matter so much?",
        answer:
          "Because almost nobody can picture what fits in a 10x10 unit.",
        body: [
          {
            type: "table",
            head: ["Unit", "Roughly fits"],
            rows: [
              ["5x5", "A closet — boxes, small furniture, seasonal items"],
              ["5x10", "A studio apartment's worth, or a motorcycle"],
              ["10x10", "A one-bedroom apartment"],
              ["10x15", "A two-bedroom apartment"],
              ["10x20", "A three-bedroom house, or a car"],
            ],
          },
          {
            type: "callout",
            title: "Describe in rooms, not square feet",
            text: "Customers do not think in square footage. 'Fits a one-bedroom apartment' converts far better than '100 sq ft', and it reduces the calls asking what size they need.",
          },
        ],
      },
      {
        heading: "Should availability and prices be live?",
        body: [
          {
            type: "p",
            text: "If your management software supports it, yes — live availability and pricing is a real advantage and most independent facilities do not offer it.",
          },
          {
            type: "p",
            text: "If not, a manually maintained list of what is available with current prices is still far better than 'call for availability', which is what most competitors say.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers rent online?",
        answer:
          "Yes, if your management system supports online move-ins — most modern ones do. Otherwise a reservation that your team confirms works well and still captures the enquiry.",
      },
      {
        question: "Should we show prices?",
        answer:
          "Yes. Storage is compared almost entirely on size, price and location. Hiding price means being excluded from the comparison entirely.",
      },
      {
        question: "How do we handle promotional rates?",
        answer:
          "Show both the promotional and standard rate clearly, with when it changes. Surprise increases after a first-month promotion are the main source of storage complaints.",
      },
    ],
    related: ["moving-company-website", "boutique-retail-website", "cleaning-service-website"],
  },

  {
    slug: "martial-arts-school-website",
    eyebrow: "Martial arts",
    title: "Martial arts school website design",
    seoTitle: "Martial Arts School Website Design | ROVQIX",
    description:
      "Websites for martial arts schools — class schedule by age and level, trial class signup, pricing, instructor credentials and gradings.",
    excerpt: "Class schedule by age and level, plus a trial signup that fills classes.",
    primaryKeyword: "martial arts website design",
    secondaryKeywords: [
      "karate school website",
      "bjj gym website design",
      "taekwondo school website",
      "martial arts academy website",
    ],
    answer:
      "A martial arts school website from ROVQIX costs $349 to $1,290 and takes about a week. It centres on a class schedule organised by age and level, a free trial class signup, membership pricing and instructor credentials.",
    intro:
      "Most martial arts enquiries are a parent deciding whether to enrol a seven-year-old. Write the site for that person, not for existing students.",
    deliverables: [
      {
        title: "Schedule by age and level",
        description:
          "Kids, teens, adults, beginners, advanced. Parents need to find their child's class in seconds.",
        icon: "CalendarCheck",
      },
      {
        title: "Free trial signup",
        description:
          "The main conversion in this category. Short form, immediate confirmation, clear what to expect.",
        icon: "Target",
      },
      {
        title: "Pricing",
        description:
          "Monthly membership, family rates and what is included. Schools that hide it lose enquiries.",
        icon: "Receipt",
      },
      {
        title: "Instructor credentials",
        description:
          "Ranks, lineage and background checks. Parents specifically look for all three.",
        icon: "BadgeCheck",
      },
      {
        title: "What to expect",
        description:
          "First class, what to wear, whether contact is involved. This is what parents are anxious about.",
        icon: "MessageSquare",
      },
      {
        title: "Gradings and progression",
        description:
          "How the belt or grading system works, which is a large part of the appeal for families.",
        icon: "Network",
      },
    ],
    sections: [
      {
        heading: "What does a parent want to know?",
        answer:
          "Whether it is safe, whether their child will fit in, what it costs, and when the classes are.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Is there contact or sparring, and at what age does it start?",
              "Are instructors background checked?",
              "What is the class size and the instructor-to-student ratio?",
              "What does it actually cost monthly, including gradings and uniform?",
              "Can they watch the class?",
              "What happens in a first lesson, and what should the child wear?",
            ],
          },
          {
            type: "callout",
            title: "Write for the nervous parent",
            text: "Most martial arts sites are written in a way that appeals to existing practitioners — lineage, style history, competition results. The paying customer is usually a parent who wants to know their child will be safe and included.",
          },
        ],
      },
      {
        heading: "Should you publish membership prices?",
        body: [
          {
            type: "p",
            text: "Yes, including the extras. The industry has a reputation for hidden costs — gradings, uniforms, contracts — and being upfront is a genuine differentiator.",
          },
          {
            type: "p",
            text: "If you use contracts, say so. Finding out at signup is a bad experience and it is where negative reviews in this category come from.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we offer a free trial class?",
        answer:
          "Almost always. It is the standard conversion in martial arts and it removes the risk for a hesitant parent. Make signing up take under a minute.",
      },
      {
        question: "Can students book classes online?",
        answer:
          "Yes, if you use a system like Zen Planner, Kicksite or Mindbody. We link the schedule and booking rather than duplicating your class management.",
      },
      {
        question: "Should we show competition results?",
        answer:
          "A section, yes — it signals quality. But it should not be the main content, since most enquiries are from families looking for fitness and discipline rather than competition.",
      },
    ],
    related: ["dance-studio-website", "gym-and-fitness-studio-website", "yoga-studio-website"],
  },

  {
    slug: "dance-studio-website",
    eyebrow: "Dance studios",
    title: "Dance studio website design",
    seoTitle: "Dance Studio Website Design | ROVQIX",
    description:
      "Websites for dance studios — class schedule by age and style, term enrolment, recital information, pricing and instructor profiles.",
    excerpt: "Schedule by age and style, term enrolment and the recital info parents need.",
    primaryKeyword: "dance studio website design",
    secondaryKeywords: [
      "dance school website",
      "ballet studio website design",
      "dance class website",
      "dance academy website",
    ],
    answer:
      "A dance studio website from ROVQIX costs $349 to $1,290 and takes about a week. It covers the class schedule by age and style, term enrolment, pricing including costume and recital fees, and instructor profiles.",
    intro:
      "Dance studios run on terms and recitals, not drop-in classes. The website has to handle enrolment windows and the enormous amount of recital admin that follows.",
    deliverables: [
      {
        title: "Schedule by age and style",
        description:
          "Ballet, jazz, hip hop, tap, by age band. Parents filter on both simultaneously.",
        icon: "CalendarCheck",
      },
      {
        title: "Term enrolment",
        description:
          "Enrolment windows, waitlists and what happens if a class fills. The main annual conversion.",
        icon: "ClipboardList",
      },
      {
        title: "Full cost picture",
        description:
          "Tuition plus costume, recital and registration fees. Hiding these creates real resentment.",
        icon: "Receipt",
      },
      {
        title: "Recital information",
        description:
          "Dates, tickets, costume deadlines. The single biggest source of parent questions each year.",
        icon: "Sparkles",
      },
      {
        title: "Dress code",
        description:
          "What to wear per class and level, with where to buy it. Asked constantly.",
        icon: "FileText",
      },
      {
        title: "Instructor profiles",
        description:
          "Training and background checks, both of which parents look for.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Why publish the full cost, including extras?",
        answer:
          "Because costume and recital fees can add several hundred dollars, and parents who discover that late feel misled.",
        body: [
          {
            type: "list",
            items: [
              "Tuition per term or month, stated clearly.",
              "Registration fee, if there is one.",
              "Costume costs per class, which surprise people the most.",
              "Recital fees and ticket costs.",
              "Required dress code items and roughly what they cost.",
              "Sibling and multi-class discounts.",
            ],
          },
          {
            type: "callout",
            title: "The costume bill is the complaint",
            text: "Almost every negative review of a dance studio mentions unexpected costs. Publishing the full annual picture upfront costs you a few enquiries and prevents most of those reviews.",
          },
        ],
      },
      {
        heading: "How should recital information be handled?",
        body: [
          {
            type: "p",
            text: "A dedicated section you can update yourself, with dates, deadlines, ticket information and costume requirements. It is the single biggest source of repetitive parent questions each year.",
          },
          {
            type: "p",
            text: "Building it so you can update it in minutes matters more than how it looks — recital details change and stale information causes real problems.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can parents enrol online?",
        answer:
          "Yes, through systems like Jackrabbit, DanceStudio-Pro or Studio Director. We link enrolment rather than duplicating your class management and billing.",
      },
      {
        question: "How do we handle waitlists?",
        answer:
          "Show which classes are full and let parents join a waitlist. It captures demand you would otherwise lose and tells you which classes to add next term.",
      },
      {
        question: "Do we need a separate page per class?",
        answer:
          "Not per class, but per style and age group is useful — 'ballet for ages 5-7' is how parents search and think.",
      },
    ],
    related: ["martial-arts-school-website", "yoga-studio-website", "music-lessons-website"],
  },

  {
    slug: "music-lessons-website",
    eyebrow: "Music teachers",
    title: "Music lessons and school website design",
    seoTitle: "Music Lessons Website Design | ROVQIX",
    description:
      "Websites for music teachers and schools — instruments taught, lesson pricing, trial lessons, teacher profiles and scheduling.",
    excerpt: "Instruments, pricing and a trial lesson booking that fills your week.",
    primaryKeyword: "music lessons website design",
    secondaryKeywords: [
      "music school website",
      "piano teacher website",
      "guitar lessons website",
      "music teacher website design",
    ],
    answer:
      "A music lessons website from ROVQIX costs $349 to $1,290 and takes about a week. It covers instruments and styles taught, lesson pricing and length, trial lesson booking, teacher profiles and scheduling.",
    intro:
      "Music teaching enquiries are mostly parents and adult beginners. Both want to know price, whether you teach their instrument, and whether they will feel stupid.",
    deliverables: [
      {
        title: "Instruments and styles",
        description:
          "What you teach and to what level, since people search for their specific instrument.",
        icon: "Network",
      },
      {
        title: "Lesson pricing",
        description:
          "Per lesson and per term, with length. Teachers who hide it get far fewer enquiries.",
        icon: "Receipt",
      },
      {
        title: "Trial lesson booking",
        description:
          "The main conversion. Low commitment and it lets both sides check the fit.",
        icon: "CalendarCheck",
      },
      {
        title: "Teacher profiles",
        description:
          "Training, experience and background checks, which parents specifically look for.",
        icon: "Users",
      },
      {
        title: "Location and format",
        description:
          "Your studio, their home, or online. People filter on this immediately.",
        icon: "Globe",
      },
      {
        title: "Exams and progression",
        description:
          "Grade exams if you prepare students for them, which is a significant draw for parents.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "What do adult beginners worry about?",
        answer:
          "Being too old, being judged, and not having time to practise.",
        body: [
          {
            type: "list",
            items: [
              "Say explicitly that you teach adult beginners, if you do. Most sites are implicitly aimed at children.",
              "Address the 'am I too old' question directly. It is the most common unspoken hesitation.",
              "Be realistic about practice time. Promising results with no practice is not credible.",
              "Mention that lessons can be relaxed and adult-appropriate rather than exam-focused.",
              "Show adult students, not just children, in any photography.",
            ],
          },
          {
            type: "callout",
            title: "Adult beginners are an underserved market",
            text: "Most music teaching websites are written entirely for parents of children. A section that speaks directly to adults picking up an instrument again is often the highest-converting page on the site.",
          },
        ],
      },
      {
        heading: "Should you teach online too?",
        body: [
          {
            type: "p",
            text: "If you do, say so prominently — it widens your catchment enormously and some students prefer it. State which instruments work well online and which do not.",
          },
          {
            type: "p",
            text: "Be honest where online is a compromise. Piano and guitar work well; drums and voice can be harder. Saying so builds trust rather than losing bookings.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can students book and pay online?",
        answer:
          "Yes, through a scheduling tool connected to your calendar. For recurring lessons most teachers prefer term billing, which we can link to a payment page.",
      },
      {
        question: "Should I list my prices?",
        answer:
          "Yes. Music lesson pricing is fairly standardised locally, and hiding it just means people contact the teacher who published theirs.",
      },
      {
        question: "Do I need a website if I am on lesson marketplaces?",
        answer:
          "Marketplaces take a cut and own the relationship. A website costs a few hundred dollars once and lets students find and book you directly, which pays for itself quickly.",
      },
    ],
    related: ["dance-studio-website", "tutoring-service-website", "martial-arts-school-website"],
  },

  {
    slug: "tutoring-service-website",
    eyebrow: "Tutoring",
    title: "Tutoring service website design",
    seoTitle: "Tutoring Service Website Design | ROVQIX",
    description:
      "Websites for tutors and tutoring centres — subjects and levels, pricing, tutor profiles, results and consultation booking.",
    excerpt: "Subjects, levels, pricing and results — what parents compare on.",
    primaryKeyword: "tutoring website design",
    secondaryKeywords: [
      "tutor website design",
      "tutoring centre website",
      "test prep website design",
      "online tutoring website",
    ],
    answer:
      "A tutoring website from ROVQIX costs $349 to $1,290 and takes about a week. It covers subjects and levels taught, pricing, tutor profiles and credentials, results where you can evidence them, and consultation booking.",
    intro:
      "Tutoring is bought by anxious parents shortly before something important. Clarity and credibility matter far more than design.",
    deliverables: [
      {
        title: "Subjects and levels",
        description:
          "Specific — 'AP Calculus' and 'SAT Math', not 'mathematics'. That is how parents search.",
        icon: "Network",
      },
      {
        title: "Pricing",
        description:
          "Per hour or per package, with any assessment fee. Parents compare on price and cannot without it.",
        icon: "Receipt",
      },
      {
        title: "Tutor credentials",
        description:
          "Qualifications, experience and background checks. The main trust signal in this category.",
        icon: "BadgeCheck",
      },
      {
        title: "Results, honestly",
        description:
          "Score improvements or grade outcomes where you can evidence them, without overclaiming.",
        icon: "BarChart3",
      },
      {
        title: "Format options",
        description:
          "In person, online, at home, group or one-to-one. Parents filter on this early.",
        icon: "Globe",
      },
      {
        title: "Consultation booking",
        description:
          "An assessment or consultation as the first step, which converts better than a direct sale.",
        icon: "CalendarCheck",
      },
    ],
    sections: [
      {
        heading: "How should results be presented?",
        answer:
          "Specifically and honestly, with the sample size, or not at all.",
        body: [
          {
            type: "list",
            items: [
              "'Average SAT improvement of 140 points across 62 students in 2025' is credible.",
              "'Guaranteed results' is not credible and may create a legal problem.",
              "Named testimonials with the outcome are stronger than anonymous quotes.",
              "If you cannot evidence a claim, do not make it — parents in this category are sceptical.",
              "Be clear about what the student also has to do. Tutoring is not passive.",
            ],
          },
          {
            type: "callout",
            title: "Overclaiming backfires here",
            text: "Parents comparing tutoring services are alert to exaggeration. A modest, specific, evidenced claim beats a bold unverifiable one, and it protects you if a student does not improve.",
          },
        ],
      },
      {
        heading: "Should subjects have their own pages?",
        body: [
          {
            type: "p",
            text: "For your main revenue subjects, yes. 'SAT prep', 'AP Chemistry' and 'elementary reading' are distinct searches with distinct parent concerns, and a page for each can rank on its own.",
          },
          {
            type: "p",
            text: "Not for every subject you could cover. Five strong pages beat thirty thin ones, and thin near-duplicate pages can hold the whole site back.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show hourly rates?",
        answer:
          "Yes. Tutoring is compared on price and credentials. Hiding rates means parents contact the services that published theirs and never reach you.",
      },
      {
        question: "Can parents book online?",
        answer:
          "An initial consultation or assessment, yes. Ongoing sessions are usually scheduled directly with the tutor once the relationship starts.",
      },
      {
        question: "Do we need background check information?",
        answer:
          "Yes, state it plainly. Parents are handing over their child, and it is one of the first things they check for.",
      },
    ],
    related: ["music-lessons-website", "daycare-website", "driving-school-website"],
  },

  {
    slug: "daycare-website",
    eyebrow: "Childcare",
    title: "Daycare and preschool website design",
    seoTitle: "Daycare & Preschool Website Design | ROVQIX",
    description:
      "Websites for daycares and preschools — licensing, availability by age group, pricing, daily schedule, staff credentials and tour booking.",
    excerpt: "Licensing, availability, price and a tour booking. Parents check all four.",
    primaryKeyword: "daycare website design",
    secondaryKeywords: [
      "preschool website design",
      "childcare centre website",
      "nursery website design",
      "early learning centre website",
    ],
    answer:
      "A daycare or preschool website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers licensing and ratios, availability by age group, pricing, the daily schedule, staff credentials and tour booking.",
    intro:
      "Choosing childcare is one of the most anxious decisions a parent makes. Every element of the site should be reducing that anxiety with concrete information.",
    deliverables: [
      {
        title: "Licensing and ratios",
        description:
          "Licence number, staff-to-child ratios and inspection status. The first thing careful parents check.",
        icon: "BadgeCheck",
      },
      {
        title: "Availability by age",
        description:
          "Infant, toddler, preschool. Waitlists are normal — showing status saves everyone time.",
        icon: "CalendarCheck",
      },
      {
        title: "Pricing",
        description:
          "Weekly or monthly by age group, plus registration fees. Childcare pricing is opaque and parents hate it.",
        icon: "Receipt",
      },
      {
        title: "Daily schedule",
        description:
          "What a day actually looks like — meals, naps, activities, outdoor time.",
        icon: "Clock",
      },
      {
        title: "Staff credentials",
        description:
          "Qualifications, background checks and first aid training, stated for each room if possible.",
        icon: "Users",
      },
      {
        title: "Tour booking",
        description:
          "The main conversion. No parent enrols without visiting first.",
        icon: "Target",
      },
    ],
    sections: [
      {
        heading: "What do parents check first?",
        answer:
          "Licensing, ratios, availability and price — usually in that order, before they look at anything else.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Licence number and current inspection status, ideally linked to the state register.",
              "Staff-to-child ratios by age group, stated as numbers.",
              "Whether you have space, and for which age groups.",
              "Weekly cost, plus registration and supply fees.",
              "Hours, including whether you cover their working day.",
              "Meals — provided or brought, and whether allergies are handled.",
            ],
          },
          {
            type: "callout",
            title: "Publish your licence number",
            text: "It lets a parent verify you independently in thirty seconds. Centres that display it are immediately more credible than those that do not, and it costs nothing.",
          },
        ],
      },
      {
        heading: "How should waitlists be handled?",
        body: [
          {
            type: "p",
            text: "Honestly. Show current status by age group — open, limited, waitlist — and let parents join a waitlist online with their expected start date.",
          },
          {
            type: "p",
            text: "Parents plan childcare months ahead. A waitlist signup captures demand you would otherwise lose entirely, and it tells you which age rooms to expand.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we publish our prices?",
        answer:
          "Yes. Childcare pricing is notoriously opaque and parents find it deeply frustrating. Publishing weekly rates by age group is a genuine competitive advantage in most markets.",
      },
      {
        question: "Can parents book tours online?",
        answer:
          "Yes, straight into your calendar. Tours are the main conversion and making them easy to book increases enrolments measurably.",
      },
      {
        question: "Can we share photos of children?",
        answer:
          "Only with written parental consent, and many centres avoid it entirely. Photos of the rooms, equipment and outdoor space work well without the consent complexity.",
      },
    ],
    related: ["tutoring-service-website", "dance-studio-website", "medical-practice-website"],
  },

  {
    slug: "driving-school-website",
    eyebrow: "Driving schools",
    title: "Driving school website design",
    seoTitle: "Driving School Website Design | ROVQIX",
    description:
      "Websites for driving schools — package pricing, lesson booking, instructor profiles, pass rates and test preparation information.",
    excerpt: "Package pricing, booking and pass rates — what learners and parents compare.",
    primaryKeyword: "driving school website design",
    secondaryKeywords: [
      "driving instructor website",
      "driving lessons website",
      "drivers ed website design",
      "driving academy website",
    ],
    answer:
      "A driving school website from ROVQIX costs $349 to $1,290 and takes about a week. It covers lesson package pricing, online booking, instructor profiles, pass rates where you can evidence them, and test preparation information.",
    intro:
      "Driving lessons are bought by parents for teenagers and by nervous adults. Both compare on price, availability and pass rate.",
    deliverables: [
      {
        title: "Package pricing",
        description:
          "Hourly and block packages, plus what the state-required course costs if you offer it.",
        icon: "Receipt",
      },
      {
        title: "Online booking",
        description:
          "Lesson scheduling with real instructor availability, which removes most of the phone admin.",
        icon: "CalendarCheck",
      },
      {
        title: "Pass rates",
        description:
          "If you can evidence them, they are the strongest differentiator in the category.",
        icon: "BarChart3",
      },
      {
        title: "Instructor profiles",
        description:
          "Credentials, experience and languages spoken, which matters more than schools realise.",
        icon: "Users",
      },
      {
        title: "State requirements",
        description:
          "Required hours, permit rules and test process for your state, explained plainly.",
        icon: "FileText",
      },
      {
        title: "Pickup areas",
        description:
          "Where you collect from, since lessons usually start at home or school.",
        icon: "Globe",
      },
    ],
    sections: [
      {
        heading: "Why explain state requirements?",
        answer:
          "Because parents and teenagers genuinely do not know them, and the school that explains it clearly gets the call.",
        body: [
          {
            type: "list",
            items: [
              "Required supervised hours and how they are logged.",
              "Permit rules, including how long a permit must be held before testing.",
              "Whether a classroom or online course is required, and how many hours.",
              "What happens on test day and what documents are needed.",
              "Whether you provide the car for the test, which is a common question.",
            ],
          },
          {
            type: "callout",
            title: "Be the school that explains it",
            text: "A clear page on your state's requirements ranks well and converts, because it is the first thing a confused parent searches for. Most competitors do not have one.",
          },
        ],
      },
      {
        heading: "Should you publish pass rates?",
        body: [
          {
            type: "p",
            text: "If yours are good and you can evidence them, absolutely — it is the strongest possible differentiator and very few schools publish anything.",
          },
          {
            type: "p",
            text: "State the sample and period honestly: 'first-time pass rate of 78% across 214 students in 2025'. Unsupported percentage claims read as marketing and do not convert.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can learners book lessons online?",
        answer:
          "Yes, with real instructor availability so you are not double-booked. It removes a large amount of scheduling phone time.",
      },
      {
        question: "Should we show package prices?",
        answer:
          "Yes. Driving schools are compared almost entirely on price and availability. Not publishing means being skipped.",
      },
      {
        question: "Do we need a page per service?",
        answer:
          "A page for teen drivers ed, one for adult lessons and one for the state requirements covers most of it. Refresher and defensive driving courses are worth their own pages if you offer them.",
      },
    ],
    related: ["tutoring-service-website", "auto-repair-shop-website", "music-lessons-website"],
  },

  {
    slug: "dry-cleaner-website",
    eyebrow: "Dry cleaners",
    title: "Dry cleaner and laundry website design",
    seoTitle: "Dry Cleaner Website Design | ROVQIX",
    description:
      "Websites for dry cleaners and laundry services — pricing by item, pickup and delivery scheduling, turnaround times and service areas.",
    excerpt: "Price list, turnaround times and pickup scheduling. That is the whole job.",
    primaryKeyword: "dry cleaner website design",
    secondaryKeywords: [
      "laundry service website",
      "dry cleaning website design",
      "laundromat website",
      "wash and fold website",
    ],
    answer:
      "A dry cleaner website from ROVQIX costs $349 to $749 and takes about a week. The essentials are a price list by item, turnaround times, pickup and delivery scheduling if you offer it, and your service area.",
    intro:
      "Dry cleaning is a simple website with two things that matter: what things cost, and when they will be ready.",
    deliverables: [
      {
        title: "Price list by item",
        description:
          "Shirts, suits, dresses, coats, household items. The most-visited page and often missing entirely.",
        icon: "Receipt",
      },
      {
        title: "Turnaround times",
        description:
          "Standard and express, with cut-off times for same-day service.",
        icon: "Clock",
      },
      {
        title: "Pickup and delivery",
        description:
          "Scheduling, service area and minimum order, which is the main growth area for cleaners.",
        icon: "CalendarCheck",
      },
      {
        title: "Specialist services",
        description:
          "Wedding dresses, leather, rugs, alterations. Higher margin and specifically searched for.",
        icon: "Sparkles",
      },
      {
        title: "Hours and locations",
        description:
          "Correct hours per location, including whether you have a late drop-off.",
        icon: "Globe",
      },
      {
        title: "Commercial accounts",
        description:
          "Restaurants, hotels and offices, which most cleaners never advertise online.",
        icon: "Building2",
      },
    ],
    sections: [
      {
        heading: "Why publish a full price list?",
        answer:
          "Because it is the one thing customers want and almost no dry cleaner publishes.",
        body: [
          {
            type: "list",
            items: [
              "It stops the phone calls asking how much a coat costs.",
              "It lets customers decide whether to bring five shirts or ten.",
              "It differentiates you from every competitor whose site says 'competitive prices'.",
              "It ranks — people search 'dry cleaning prices' plus their town.",
              "It builds trust in a category where customers expect to be surprised at the counter.",
            ],
          },
          {
            type: "callout",
            title: "Add a note for unusual items",
            text: "'Prices for wedding dresses, leather and unusual items quoted on inspection.' One line covers the exceptions and lets you publish everything else with confidence.",
          },
        ],
      },
      {
        heading: "Is pickup and delivery worth promoting?",
        body: [
          {
            type: "p",
            text: "It is the main growth area in the category and the main reason customers switch. If you offer it, it should be the most prominent thing on the site rather than a footnote.",
          },
          {
            type: "p",
            text: "State the service area, minimum order, collection days and how billing works. Vagueness here loses the customers most likely to be high value.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers schedule pickups online?",
        answer:
          "Yes, as a simple scheduling form with address, date and rough item count. It is far better than requiring a phone call and it captures customers outside your opening hours.",
      },
      {
        question: "Should we list every item price?",
        answer:
          "Your main items, yes, with a note that unusual pieces are quoted on inspection. A partial list is far better than none.",
      },
      {
        question: "Do we need more than one page?",
        answer:
          "Often not. A single page with prices, hours, services and a pickup form does the job for most cleaners. Multiple locations or a delivery service justify more.",
      },
    ],
    related: ["cleaning-service-website", "tailor-and-alterations-website", "boutique-retail-website"],
  },

  {
    slug: "tailor-and-alterations-website",
    eyebrow: "Tailors",
    title: "Tailor and alterations website design",
    seoTitle: "Tailor & Alterations Website Design | ROVQIX",
    description:
      "Websites for tailors and alteration shops — price list by garment and job, turnaround times, wedding alterations and appointment booking.",
    excerpt: "A price list by job type, turnaround times and wedding appointments.",
    primaryKeyword: "tailor website design",
    secondaryKeywords: [
      "alterations shop website",
      "seamstress website design",
      "clothing alterations website",
      "bespoke tailor website",
    ],
    answer:
      "A tailor or alterations website from ROVQIX costs $349 to $749 and takes about a week. It covers a price list by garment and job type, turnaround times, wedding and formal alterations, and appointment booking for fittings.",
    intro:
      "Alterations pricing is genuinely predictable — hem a pair of trousers, take in a jacket. Publishing it removes almost all the phone calls.",
    deliverables: [
      {
        title: "Price list by job",
        description:
          "Hem trousers, take in waist, shorten sleeves, replace zip. Predictable jobs with predictable prices.",
        icon: "Receipt",
      },
      {
        title: "Turnaround times",
        description:
          "Standard and rush, with what rush costs. Timing matters enormously for events.",
        icon: "Clock",
      },
      {
        title: "Wedding and formal",
        description:
          "Bridal alterations, with a fitting schedule and timeline. Your highest-value work.",
        icon: "Sparkles",
      },
      {
        title: "Fitting appointments",
        description:
          "Bookable, since fittings need time and walk-ins disrupt the workroom.",
        icon: "CalendarCheck",
      },
      {
        title: "Before and after photos",
        description:
          "Especially for structural alterations, which customers do not believe are possible.",
        icon: "Images",
      },
      {
        title: "Bespoke and repairs",
        description:
          "Made-to-measure and repair work if you do it, presented separately from alterations.",
        icon: "Blocks",
      },
    ],
    sections: [
      {
        heading: "Why does bridal alteration deserve its own page?",
        answer:
          "Because it is high value, booked months ahead, and searched for specifically.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Explain the fitting schedule — typically two or three fittings over several weeks.",
              "State how far in advance to book, which is the most common question.",
              "Give a price range, since bridal alterations vary from simple hems to full restructuring.",
              "Mention preservation and cleaning if you offer it.",
              "Show photos of previous bridal work, which reassures more than any description.",
            ],
          },
          {
            type: "callout",
            title: "Brides book early and search specifically",
            text: "'Wedding dress alterations near me' is a high-intent search with a customer who will pay properly and book months ahead. A dedicated page for it is usually the best-performing page on a tailor's site.",
          },
        ],
      },
      {
        heading: "How much of the price list should be published?",
        body: [
          {
            type: "p",
            text: "Most of it. Standard alterations are predictable enough to price, and publishing removes the constant phone calls asking what a hem costs.",
          },
          {
            type: "p",
            text: "Add a line that complex or unusual garments are quoted on inspection, which covers the exceptions without making the whole list vague.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers book fittings online?",
        answer:
          "Yes, and it helps a great deal for bridal work where fittings take time. Simple alterations can stay walk-in if that suits how you work.",
      },
      {
        question: "Should we show prices?",
        answer:
          "Yes for standard alterations. It is the most-searched information and publishing it removes most of the price calls, which are pure interruption in a workroom.",
      },
      {
        question: "Do we need many pages?",
        answer:
          "A main page with the price list, plus a dedicated bridal page, covers most tailors well. Add bespoke or repairs pages only if those are real revenue lines.",
      },
    ],
    related: ["dry-cleaner-website", "boutique-retail-website", "wedding-venue-website"],
  },

  {
    slug: "print-shop-website",
    eyebrow: "Print shops",
    title: "Print shop website design",
    seoTitle: "Print Shop Website Design | ROVQIX",
    description:
      "Websites for print shops and sign makers — product range, quote requests with file upload, turnaround times and artwork requirements.",
    excerpt: "Quote requests with file upload, plus artwork specs that prevent reprints.",
    primaryKeyword: "print shop website design",
    secondaryKeywords: [
      "printing company website",
      "sign shop website design",
      "commercial printer website",
      "print services website",
    ],
    answer:
      "A print shop website from ROVQIX costs $349 to $1,290 and takes about a week. The most valuable elements are a quote request form with file upload, clear artwork requirements, turnaround times and your product range.",
    intro:
      "Print shops lose money on artwork problems. A page that states file requirements clearly pays for the whole website in avoided reprints.",
    deliverables: [
      {
        title: "Quote request with upload",
        description:
          "Job type, quantity, size, deadline and the artwork file. Enough to quote without an exchange of emails.",
        icon: "ClipboardList",
      },
      {
        title: "Artwork requirements",
        description:
          "Formats, resolution, bleed, colour mode. This page prevents most reprints and disputes.",
        icon: "FileText",
      },
      {
        title: "Product range",
        description:
          "Business cards, banners, signage, apparel, large format. Each is a distinct search.",
        icon: "Network",
      },
      {
        title: "Turnaround times",
        description:
          "Standard and rush, with what rush costs and the cut-off for same-day.",
        icon: "Clock",
      },
      {
        title: "Portfolio",
        description:
          "Real jobs, especially signage and large format where customers want to see scale.",
        icon: "Images",
      },
      {
        title: "Trade and business accounts",
        description:
          "Repeat business customers, which are the steady revenue most print shops depend on.",
        icon: "Building2",
      },
    ],
    sections: [
      {
        heading: "Why does the artwork requirements page matter so much?",
        answer:
          "Because bad files are the main cause of delays, reprints and arguments in print.",
        body: [
          {
            type: "list",
            items: [
              "Accepted file formats, stated plainly, with which you prefer.",
              "Minimum resolution, and what happens if a file is too low.",
              "Bleed and safe area, with a diagram rather than a description.",
              "Colour mode, and a note that screen colour will not match print exactly.",
              "Font handling — outlined or embedded.",
              "A downloadable template for your common products.",
            ],
          },
          {
            type: "callout",
            title: "Templates prevent reprints",
            text: "Offering downloadable templates for your standard sizes eliminates a large share of artwork problems before they reach your prepress. It is one page of effort that saves money every week.",
          },
        ],
      },
      {
        heading: "Should you build an online ordering system?",
        body: [
          {
            type: "p",
            text: "For standardised products like business cards, possibly. For anything custom, a quote request works far better — print pricing depends on too many variables to configure reliably.",
          },
          {
            type: "p",
            text: "Most independent print shops get more value from a well-built quote form with file upload than from a web-to-print system that takes months to configure and still needs manual intervention.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers upload artwork on the site?",
        answer:
          "Yes, directly in the quote form, including large files. It removes the email-a-WeTransfer-link step that slows every job down.",
      },
      {
        question: "Should we show prices?",
        answer:
          "For standard products with fixed specifications, yes. For custom work, a starting price plus a quote form is more realistic than trying to build a pricing calculator.",
      },
      {
        question: "Do we need a page per product?",
        answer:
          "For your main lines — business cards, banners, signage, apparel — yes, since those are distinct searches. Not for every variation.",
      },
    ],
    related: ["general-contractor-website", "gift-shop-website", "boutique-retail-website"],
  },

  {
    slug: "funeral-home-website",
    eyebrow: "Funeral homes",
    title: "Funeral home website design",
    seoTitle: "Funeral Home Website Design | ROVQIX",
    description:
      "Websites for funeral homes — obituaries, service information, pre-planning, pricing disclosure and a calm, accessible design.",
    excerpt: "Obituaries, clear pricing and pre-planning, handled with the care it needs.",
    primaryKeyword: "funeral home website design",
    secondaryKeywords: [
      "funeral director website",
      "mortuary website design",
      "cremation services website",
      "funeral home web design",
    ],
    answer:
      "A funeral home website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers obituaries and service notices, pricing disclosure, pre-planning information, and a calm, highly accessible design.",
    intro:
      "Every visitor to a funeral home website is having a difficult day. Clarity and calm matter more here than on any other kind of site we build.",
    deliverables: [
      {
        title: "Obituaries and notices",
        description:
          "Service times, locations and condolence messages, updatable by your team quickly.",
        icon: "FileText",
      },
      {
        title: "Pricing disclosure",
        description:
          "A general price list, which US funeral homes are required to provide and should publish clearly.",
        icon: "Receipt",
      },
      {
        title: "Service options",
        description:
          "Burial, cremation, memorial and direct options explained plainly for people unfamiliar with them.",
        icon: "Network",
      },
      {
        title: "Pre-planning",
        description:
          "Information and enquiry for people planning ahead, which is a calm and valuable enquiry stream.",
        icon: "CalendarCheck",
      },
      {
        title: "Highly accessible",
        description:
          "Large text, high contrast, simple navigation. A large share of visitors are elderly.",
        icon: "Accessibility",
      },
      {
        title: "Immediate need contact",
        description:
          "A phone number available at any hour, prominent on every page.",
        icon: "Phone",
      },
    ],
    sections: [
      {
        heading: "How should pricing be presented?",
        answer:
          "Plainly and completely, in line with the FTC Funeral Rule's disclosure requirements.",
        body: [
          {
            type: "p",
            text: "US funeral providers must give a general price list to anyone who asks in person, and there has been sustained regulatory pressure toward online disclosure. Publishing it is both compliant and a genuine differentiator.",
          },
          {
            type: "list",
            items: [
              "A clear general price list, itemised rather than bundled into packages only.",
              "Direct cremation and immediate burial prices, which are specifically searched for.",
              "What is included in each package, and what is optional.",
              "Third-party costs such as cemetery fees, clearly separated.",
              "Payment options and any assistance programmes.",
            ],
          },
          {
            type: "callout",
            title: "Check your obligations",
            text: "The Funeral Rule's specific requirements change and we are not qualified to advise on compliance. We will publish exactly the price list your director provides and structure it clearly.",
          },
        ],
      },
      {
        heading: "How should the design differ?",
        body: [
          {
            type: "list",
            items: [
              "Large, high-contrast text by default. Many visitors are older and distressed.",
              "Simple navigation with few options, because decision-making is hard in grief.",
              "No animation, no autoplay, no marketing pressure.",
              "A phone number visible at all times.",
              "Restrained imagery — the space and the staff, not stock photography of grief.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can families submit obituaries online?",
        answer:
          "Yes, as a form your team reviews and publishes. Given the sensitivity, we always route it through staff review rather than publishing automatically.",
      },
      {
        question: "Should we publish prices?",
        answer:
          "Yes. Beyond the regulatory direction of travel, families under pressure appreciate transparency enormously, and homes that publish prices report better-quality enquiries.",
      },
      {
        question: "Can we stream services?",
        answer:
          "We can link to a streaming platform and provide a private page per service. Hosting the video ourselves is usually more cost and complexity than it is worth.",
      },
    ],
    related: ["florist-website", "medical-practice-website", "event-venue-website"],
  },

  {
    slug: "event-venue-website",
    eyebrow: "Event spaces",
    title: "Event space and hall website design",
    seoTitle: "Event Space & Hall Website Design | ROVQIX",
    description:
      "Websites for event spaces, halls and community venues — capacity, hire rates, availability, floor plans and booking enquiries.",
    excerpt: "Capacity, hourly and day rates, and what dates are actually free.",
    primaryKeyword: "event space website design",
    secondaryKeywords: [
      "event hall website",
      "community centre website",
      "venue hire website design",
      "meeting space website",
    ],
    answer:
      "An event space website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are capacity by layout, hourly and day hire rates, availability, floor plans and a booking enquiry form.",
    intro:
      "Event space hire is a simple transaction made complicated by vague websites. Capacity, price and availability answer almost every enquiry.",
    deliverables: [
      {
        title: "Capacity by layout",
        description:
          "Theatre, banquet, standing, classroom. The same room holds very different numbers.",
        icon: "Users",
      },
      {
        title: "Hire rates",
        description:
          "Hourly, half-day and full-day, with any differences by day of week.",
        icon: "Receipt",
      },
      {
        title: "Availability",
        description:
          "Even a simple calendar of free dates removes most of the back-and-forth.",
        icon: "CalendarCheck",
      },
      {
        title: "Floor plans",
        description:
          "Dimensions and layouts, which organisers need to plan and rarely find online.",
        icon: "LayoutTemplate",
      },
      {
        title: "What is included",
        description:
          "Tables, chairs, AV, kitchen access, parking, setup and cleanup. Big cost differences hide here.",
        icon: "ClipboardList",
      },
      {
        title: "Rules and restrictions",
        description:
          "Alcohol, noise, end times, outside catering. Stated upfront to avoid wasted enquiries.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "What should be answered before an enquiry?",
        answer:
          "Capacity, price, availability and what is included.",
        body: [
          {
            type: "table",
            head: ["Question", "Why it matters"],
            rows: [
              ["How many fit, in which layout?", "First filter for every organiser"],
              ["What does it cost per hour or day?", "Second filter, most often hidden"],
              ["Is our date free?", "Determines whether anything else matters"],
              ["Are tables and chairs included?", "Large hidden cost difference"],
              ["Can we bring our own caterer?", "Deal-breaker for many events"],
              ["What time must we finish?", "Rules out evening events entirely"],
            ],
          },
        ],
      },
      {
        heading: "How should rules be presented?",
        body: [
          {
            type: "p",
            text: "Plainly and early. Alcohol policy, noise limits, finish times and outside catering rules are the things most likely to disqualify a booking — and finding out late wastes everyone's time.",
          },
          {
            type: "p",
            text: "Presenting them as clear facts rather than a wall of terms reads as organised rather than restrictive.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we show hire rates?",
        answer:
          "Yes. Event space is compared on capacity, price and availability. A venue that does not publish rates simply gets excluded from most shortlists.",
      },
      {
        question: "Can people check availability online?",
        answer:
          "A calendar of free dates, yes, even if maintained manually. It is one of the most useful things you can offer and very few venues do.",
      },
      {
        question: "Do we need photos of every setup?",
        answer:
          "A few per layout — banquet, theatre, standing. People genuinely cannot picture the same room configured differently.",
      },
    ],
    related: ["wedding-venue-website", "event-planner-website", "bar-and-brewery-website"],
  },
];

export const localServicesPages = makeLocalPages(specs);
