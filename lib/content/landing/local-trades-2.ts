import { makeLocalPages, type LocalSpec } from "@/lib/content/landing/local-builder";

/** Specialist construction and installation trades. */
const specs: LocalSpec[] = [
  {
    slug: "concrete-contractor-website",
    eyebrow: "Concrete contractors",
    title: "Concrete contractor website design",
    seoTitle: "Concrete Contractor Website Design | ROVQIX",
    description:
      "Websites for concrete contractors — driveways, patios, decorative finishes, square-foot pricing and a gallery that shows finish quality.",
    excerpt: "Square-foot pricing and finish galleries, because concrete is bought by the look.",
    primaryKeyword: "concrete contractor website",
    secondaryKeywords: ["concrete company website design", "driveway contractor website", "stamped concrete website", "concrete patio website"],
    answer:
      "A concrete contractor website from ROVQIX costs $349 to $1,290 and takes about a week. The essentials are square-foot price ranges by job type, a gallery organised by finish, and honest scheduling — concrete work is weather-bound and customers need to know that.",
    intro:
      "Concrete customers compare on two things: price per square foot and how the finish looks. Give them both and most of the quoting conversation is already done.",
    deliverables: [
      { title: "Job types", description: "Driveways, patios, walkways, slabs, foundations, steps — each searched separately.", icon: "Layers" },
      { title: "Square-foot ranges", description: "Plain concrete versus stamped, coloured or exposed aggregate. The number everyone wants.", icon: "Receipt" },
      { title: "Finish gallery", description: "Organised by finish and pattern, not by date. People choose visually.", icon: "Images" },
      { title: "Tear-out and replace", description: "Whether you remove old concrete and what that adds, which is half of residential work.", icon: "Hammer" },
      { title: "Weather and scheduling", description: "Honest lead times and pour conditions, which sets expectations before the deposit.", icon: "CalendarCheck" },
    ],
    sections: [
      {
        heading: "Why publish price per square foot?",
        answer: "Because it is the only number concrete customers compare, and hiding it costs you the call.",
        body: [
          { type: "table", head: ["Work", "Typical range per sq ft", "What moves it"], rows: [
            ["Plain broom-finish slab", "$6 – $12", "Thickness, reinforcement, access"],
            ["Exposed aggregate", "$10 – $16", "Stone choice, wash timing"],
            ["Stamped and coloured", "$14 – $26", "Pattern count, colour layers, sealing"],
            ["Tear-out of old concrete", "$2 – $6", "Thickness, reinforcement, disposal"],
          ], caption: "Illustrative ranges. Put your own numbers on the page — the point is that a range exists." },
          { type: "callout", title: "A range is not a quote", text: "Say clearly that the figure covers standard access and a level site, and that grading, drainage or poor access change it. Customers accept caveats; they do not accept silence." },
        ],
      },
      {
        heading: "How should the gallery be organised?",
        body: [
          { type: "p", text: "By finish and pattern, never chronologically. A customer wanting a stamped ashlar patio in a grey tone should reach ten of those in one click, not scroll through a year of driveways." },
          { type: "p", text: "Photograph in flat light, and include one wide shot showing how the pour meets the house and the edges. Edge and joint quality is what separates good work from bad, and it is what a knowledgeable buyer looks for." },
        ],
      },
    ],
    faqs: [
      { question: "Should we show stamped concrete separately?", answer: "Yes. It is a different search, a different price point and a different customer from a plain driveway pour." },
      { question: "How do we handle weather delays on the site?", answer: "State them upfront. A line explaining that pours are weather-dependent and how you reschedule prevents most complaints." },
      { question: "Is a quote form or a phone number better?", answer: "Both. Larger jobs come by form with photos attached; urgent repairs come by phone." },
    ],
    related: ["masonry-contractor-website", "paving-contractor-website", "general-contractor-website"],
  },
  {
    slug: "masonry-contractor-website",
    eyebrow: "Masonry",
    title: "Masonry contractor website design",
    seoTitle: "Masonry Contractor Website Design | ROVQIX",
    description:
      "Websites for masons — brick, block and stone work, repointing and repair, restoration credentials and a gallery that shows craft.",
    excerpt: "Repointing and restoration, where the margins and the reputation both live.",
    primaryKeyword: "masonry contractor website",
    secondaryKeywords: ["mason website design", "brickwork company website", "stone mason website", "repointing contractor website"],
    answer:
      "A masonry website from ROVQIX costs $349 to $1,290 and takes about a week. It should separate new-build work from repair and restoration, show craft closely in the gallery, and explain repointing — the job most homeowners do not know they need.",
    intro:
      "Masonry splits into new work and restoration. Restoration pays better, repeats less, and is what most homeowners are actually searching for when something starts crumbling.",
    deliverables: [
      { title: "Work types", description: "Brick, block, natural stone, veneer — different materials, different searches.", icon: "Blocks" },
      { title: "Repair and repointing", description: "The highest-intent work. Explain what failing mortar looks like.", icon: "Wrench" },
      { title: "Restoration credentials", description: "Historic or heritage experience, which is decisive on older properties.", icon: "BadgeCheck" },
      { title: "Close-up gallery", description: "Joint work and coursing photographed near, not from across the street.", icon: "Images" },
      { title: "Chimneys and fireplaces", description: "Steady repair work that arrives on its own search terms.", icon: "Flame" },
    ],
    sections: [
      {
        heading: "Why write a page about repointing?",
        answer: "Because homeowners see failing mortar long before they know what to call it.",
        body: [
          { type: "list", items: [
            "Describe the symptoms in plain words — crumbling mortar, gaps you can push a key into, damp inside an exterior wall.",
            "Explain why it matters: water gets in through the joints, not the brick.",
            "Say how it is priced, usually per square foot of wall face.",
            "Warn about mortar mix — hard modern mortar on soft old brick causes damage, and saying so proves you know the trade.",
            "Show a half-finished wall photo, which explains the job better than any paragraph.",
          ]},
          { type: "callout", title: "Symptom language wins the search", text: "Nobody searches 'repointing' until someone tells them the word. They search 'crumbling mortar between bricks'. Write the page in the language of the problem and it finds them first." },
        ],
      },
      {
        heading: "How should craft be shown?",
        body: [
          { type: "p", text: "Close. Masonry quality lives in joint consistency, coursing and how the work meets existing material. A wide shot of a finished wall shows none of it." },
          { type: "p", text: "For restoration, before and after pairs from the identical angle carry more weight than anything you can write, particularly where new work has to disappear into old." },
        ],
      },
    ],
    faqs: [
      { question: "Should new build and restoration be separate pages?", answer: "Yes. Different customers, different search terms, and restoration justifies a higher rate you should not dilute." },
      { question: "Is historic experience worth highlighting?", answer: "Strongly. On a listed or older property it is often the only qualification the owner cares about." },
      { question: "Do we need pricing?", answer: "Ranges per square foot for repointing and veneer help. Bespoke stonework is fairly quoted case by case." },
    ],
    related: ["concrete-contractor-website", "chimney-sweep-website", "foundation-repair-website"],
  },
  {
    slug: "drywall-contractor-website",
    eyebrow: "Drywall",
    title: "Drywall contractor website design",
    seoTitle: "Drywall Contractor Website Design | ROVQIX",
    description:
      "Websites for drywall contractors — hanging and finishing, repair work, texture matching, finish levels and builder subcontract work.",
    excerpt: "Repair jobs pay the calendar; builder contracts pay the year.",
    primaryKeyword: "drywall contractor website",
    secondaryKeywords: ["drywall company website design", "drywall repair website", "plastering contractor website", "sheetrock contractor website"],
    answer:
      "A drywall website from ROVQIX costs $349 to $1,290 and takes about a week. It should cover hanging and finishing, small repairs, texture matching and finish levels, plus a page aimed at builders and general contractors who provide the steady work.",
    intro:
      "Drywall has two customers with nothing in common: a homeowner with a hole in a wall, and a builder with a whole house. The website has to answer both without confusing either.",
    deliverables: [
      { title: "New hang and finish", description: "Whole-room and whole-house work, priced by the sheet or the square foot.", icon: "Layers" },
      { title: "Repair work", description: "Holes, water damage, cracks and popped screws. Small, frequent and easy to sell.", icon: "Wrench" },
      { title: "Texture matching", description: "Knockdown, orange peel, skip trowel. The reason repairs fail and a real differentiator.", icon: "Target" },
      { title: "Finish levels", description: "Level 3, 4 and 5 explained, which matters enormously and almost nobody publishes.", icon: "ClipboardList" },
      { title: "Contractor page", description: "For builders and GCs — crew size, capacity and turnaround.", icon: "Building2" },
    ],
    sections: [
      {
        heading: "Why explain drywall finish levels?",
        answer: "Because the difference between Level 4 and Level 5 is most of the price argument, and almost nobody explains it.",
        body: [
          { type: "table", head: ["Level", "What it means", "Where it is used"], rows: [
            ["Level 3", "Tape and one coat over fasteners", "Behind heavy texture or tile"],
            ["Level 4", "Tape and two to three coats, sanded", "Standard for flat paint and light texture"],
            ["Level 5", "Level 4 plus a full skim coat", "Gloss paint, critical lighting, large open walls"],
          ]},
          { type: "p", text: "When a customer compares your quote to a cheaper one, this table is usually the reason they differ. Publishing it turns a price objection into a specification conversation." },
        ],
      },
      {
        heading: "Why does texture matching deserve its own section?",
        body: [
          { type: "p", text: "It is where repairs visibly fail. A patch that is structurally perfect but textured wrong is obvious from the doorway, and homeowners have all seen one." },
          { type: "p", text: "Naming the textures you can match, with photos of a repaired area that disappears into the wall, converts better than any general claim about quality." },
        ],
      },
    ],
    faqs: [
      { question: "Should we take small repair jobs?", answer: "Many contractors use them to fill gaps and they lead to larger work. If you do not want them, say so on the site rather than fielding the calls." },
      { question: "How do we win builder work?", answer: "A page stating crew size, weekly sheet capacity and turnaround, aimed at a scheduler rather than a homeowner." },
      { question: "Is finish level worth publishing?", answer: "Yes. It is the most useful thing you can put on a drywall site and it defends your pricing." },
    ],
    related: ["painting-contractor-website", "general-contractor-website", "insulation-contractor-website"],
  },
  {
    slug: "insulation-contractor-website",
    eyebrow: "Insulation",
    title: "Insulation contractor website design",
    seoTitle: "Insulation Contractor Website Design | ROVQIX",
    description:
      "Websites for insulation contractors — spray foam, blown-in and batt, R-values, rebates and utility programmes, and energy savings.",
    excerpt: "Rebates and R-values — the two things that close an insulation sale.",
    primaryKeyword: "insulation contractor website",
    secondaryKeywords: ["spray foam insulation website", "insulation company website design", "attic insulation website", "blown in insulation website"],
    answer:
      "An insulation contractor website from ROVQIX costs $349 to $1,290 and takes about a week. It should cover insulation types and R-values, the areas you treat, available rebates and utility programmes, and honest framing of energy savings.",
    intro:
      "Insulation is an invisible product bought on a promise of savings. Rebates make the numbers work, and most contractors bury them.",
    deliverables: [
      { title: "Insulation types", description: "Spray foam, blown cellulose, fibreglass batt, rigid board — priced and compared.", icon: "Layers" },
      { title: "Areas treated", description: "Attic, walls, crawlspace, rim joist, garage. Each is a separate search.", icon: "Home" },
      { title: "R-value guidance", description: "Recommended values for your climate zone, which most homeowners have never seen.", icon: "BarChart3" },
      { title: "Rebates and programmes", description: "Utility rebates and tax credits, and whether you handle the paperwork.", icon: "Receipt" },
      { title: "Energy assessment", description: "Whether you assess first, and what that costs or whether it is credited back.", icon: "ClipboardList" },
    ],
    sections: [
      {
        heading: "Why lead with rebates?",
        answer: "Because they often cut the net cost by a third and turn a maybe into a signed job.",
        body: [
          { type: "list", items: [
            "List the utility and government programmes that apply where you work.",
            "Say plainly whether you file the paperwork or the homeowner does.",
            "Show a worked example: gross price, rebate, net cost.",
            "Note any deadlines, since expiring programmes create urgency you do not have to manufacture.",
            "Keep the page dated and reviewed, because these programmes change and stale information damages trust.",
          ]},
          { type: "callout", title: "Handle the paperwork", text: "Filing the rebate for the customer is a small operational cost and a large selling point. If you do it, put it in the headline — most competitors do not." },
        ],
      },
      {
        heading: "How honest should savings claims be?",
        body: [
          { type: "p", text: "Very. Savings depend on the existing insulation, air sealing, heating system and how the household lives. A promised percentage that does not materialise generates complaints and, in some jurisdictions, regulatory problems." },
          { type: "p", text: "Ranges with stated assumptions convert nearly as well and survive scrutiny. Comfort — no cold rooms, no draughts, a quieter house — is often the stronger argument anyway, because it is immediate and undeniable." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Ranges per square foot by insulation type help a lot. Whole-house numbers depend on too many variables to state usefully." },
      { question: "Can we promise energy savings?", answer: "Use ranges with stated assumptions. Specific percentage promises are hard to substantiate and generate disputes." },
      { question: "Do rebates really matter?", answer: "They are frequently the deciding factor. A page showing gross price, rebate and net cost outperforms any other page on an insulation site." },
    ],
    related: ["hvac-company-website", "drywall-contractor-website", "solar-installer-website"],
  },
  {
    slug: "siding-contractor-website",
    eyebrow: "Siding",
    title: "Siding contractor website design",
    seoTitle: "Siding Contractor Website Design | ROVQIX",
    description:
      "Websites for siding contractors — material comparison, whole-house pricing, storm and insurance work, and before and after galleries.",
    excerpt: "Material comparison plus insurance claims, which is where half the work comes from.",
    primaryKeyword: "siding contractor website",
    secondaryKeywords: ["siding company website design", "vinyl siding website", "james hardie contractor website", "siding replacement website"],
    answer:
      "A siding contractor website from ROVQIX costs $349 to $1,290 and takes about a week. It should compare materials honestly, give whole-house price ranges, explain storm damage and insurance claims, and show full-house before and after pairs.",
    intro:
      "Siding is a whole-house purchase made once in twenty years. The buyer is anxious, comparing materials they do not understand, and often dealing with an insurer.",
    deliverables: [
      { title: "Material comparison", description: "Vinyl, fibre cement, engineered wood, metal — cost, lifespan and maintenance side by side.", icon: "Layers" },
      { title: "Whole-house ranges", description: "Priced by house size, since square footage is what customers can estimate.", icon: "Receipt" },
      { title: "Storm and insurance work", description: "Hail and wind damage, and how you work with adjusters.", icon: "ShieldCheck" },
      { title: "Before and after", description: "Full-house pairs from the identical angle. The most persuasive asset you have.", icon: "Images" },
      { title: "Warranty terms", description: "Manufacturer and workmanship warranties separately, since they differ enormously.", icon: "BadgeCheck" },
    ],
    sections: [
      {
        heading: "Why compare materials honestly?",
        answer: "Because the customer is going to compare them anyway, and being the source builds the trust that wins the job.",
        body: [
          { type: "table", head: ["Material", "Relative cost", "Lifespan", "Maintenance"], rows: [
            ["Vinyl", "Lowest", "20 – 40 years", "Wash occasionally"],
            ["Engineered wood", "Mid", "20 – 30 years", "Repaint periodically"],
            ["Fibre cement", "Higher", "30 – 50 years", "Repaint every 10 – 15 years"],
            ["Metal", "Higher", "40+ years", "Minimal, can dent"],
          ]},
          { type: "p", text: "Say where the cheaper option is genuinely the right call. A contractor who talks a customer out of the expensive product on a rental property earns the referral for their own home." },
        ],
      },
      {
        heading: "How should insurance work be handled?",
        body: [
          { type: "p", text: "Explain the process plainly: inspection, claim, adjuster meeting, scope agreement, work. Homeowners who have never claimed find this genuinely intimidating and will choose whoever makes it feel manageable." },
          { type: "p", text: "Be careful with the language around deductibles. Offering to absorb or waive one is illegal in many states, and promising it in writing on a public page is a serious risk. Say you work with the adjuster; do not say you make the claim free." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish whole-house prices?", answer: "Ranges by house size and material. It filters out budgets that cannot work and saves everyone the site visit." },
      { question: "Is storm work worth a dedicated page?", answer: "In hail and wind regions it is often the largest single source of jobs, and it spikes seasonally on its own search terms." },
      { question: "How do we present warranties?", answer: "Separately. Manufacturer material warranty and your own workmanship warranty are different things and conflating them causes disputes." },
    ],
    related: ["roofing-company-website", "window-replacement-website", "painting-contractor-website"],
  },
  {
    slug: "foundation-repair-website",
    eyebrow: "Foundation repair",
    title: "Foundation repair website design",
    seoTitle: "Foundation Repair Website Design | ROVQIX",
    description:
      "Websites for foundation repair contractors — symptoms, inspection process, repair methods, transferable warranties and financing.",
    excerpt: "Symptom pages, because homeowners search cracks, not piering methods.",
    primaryKeyword: "foundation repair website",
    secondaryKeywords: ["foundation contractor website design", "basement waterproofing website", "foundation crack repair website", "house leveling website"],
    answer:
      "A foundation repair website from ROVQIX costs $349 to $1,290 and takes about a week. It should be built around symptoms homeowners recognise, explain the inspection and repair methods, and cover transferable warranties and financing — this is a distressed, high-ticket purchase.",
    intro:
      "Foundation work is expensive, frightening and bought under stress. The website's job is to reduce the fear enough that the homeowner books an inspection.",
    deliverables: [
      { title: "Symptom guide", description: "Stair-step cracks, sticking doors, sloping floors, gaps at trim. What people actually notice.", icon: "Target" },
      { title: "Inspection process", description: "What happens, how long it takes, and whether it costs anything.", icon: "ClipboardList" },
      { title: "Repair methods", description: "Piers, wall anchors, carbon fibre, slab jacking — with when each applies.", icon: "Wrench" },
      { title: "Warranty terms", description: "Length and, critically, whether it transfers to the next owner.", icon: "BadgeCheck" },
      { title: "Financing", description: "Monthly options, since few households have this budget available.", icon: "CreditCard" },
    ],
    sections: [
      {
        heading: "Why organise the site around symptoms?",
        answer: "Because homeowners search what they can see, not what the repair is called.",
        body: [
          { type: "list", items: [
            "Stair-step cracks in brick or block, and what they indicate.",
            "Doors and windows that stick or will not latch.",
            "Floors that slope, or a ball that rolls on its own.",
            "Gaps opening between walls and trim, or between the chimney and the house.",
            "Water in the basement, and when it is drainage rather than structure.",
          ]},
          { type: "callout", title: "Say when it is not urgent", text: "Many hairline cracks are cosmetic settlement. A page that tells homeowners which cracks do not need repair is the single strongest trust signal on a foundation site, and it costs you almost no real work." },
        ],
      },
      {
        heading: "Why does a transferable warranty matter?",
        body: [
          { type: "p", text: "Because foundation repair shows up in every future home sale. A buyer's inspector will find it, and a warranty the homeowner can hand over turns a red flag on the disclosure into a resolved item." },
          { type: "p", text: "If yours transfers, that belongs near the top of the page. It changes how a homeowner weighs the cost, because the money is partly recovered at sale." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Per-pier or per-linear-foot ranges with a clear statement that scope varies. Total silence on a five-figure job loses enquiries to whoever gives a number." },
      { question: "Is a free inspection worth offering?", answer: "It is close to standard in this trade. If you charge, say what the customer gets and whether it is credited against the work." },
      { question: "How do we handle fear-based marketing?", answer: "Avoid it. Telling homeowners which cracks are harmless earns more work over time than alarming everyone who visits." },
    ],
    related: ["masonry-contractor-website", "water-damage-restoration-website", "mold-remediation-website"],
  },
  {
    slug: "mold-remediation-website",
    eyebrow: "Mold remediation",
    title: "Mold remediation website design",
    seoTitle: "Mold Remediation Website Design | ROVQIX",
    description:
      "Websites for mold remediation companies — testing versus remediation, containment process, certifications, insurance and response times.",
    excerpt: "Certifications and clearance testing, because this is a health purchase.",
    primaryKeyword: "mold remediation website",
    secondaryKeywords: ["mold removal company website", "mold inspection website design", "mold remediation contractor website", "black mold removal website"],
    answer:
      "A mold remediation website from ROVQIX costs $349 to $1,290 and takes about a week. Priorities are certifications, the containment and remediation process, independent clearance testing, insurance handling and a clear response time.",
    intro:
      "Mold is a health worry, and the industry has a credibility problem. Certifications, a documented process and independent clearance testing are what separate you from it.",
    deliverables: [
      { title: "Certifications", description: "IICRC or equivalent, named and current. The primary trust signal in this trade.", icon: "BadgeCheck" },
      { title: "Process explained", description: "Containment, negative air, removal, treatment, clearance. Step by step.", icon: "ClipboardList" },
      { title: "Testing policy", description: "Whether you test, and whether clearance testing is independent of you.", icon: "ShieldCheck" },
      { title: "Response time", description: "How fast you can be on site, since mold usually follows a water event.", icon: "Zap" },
      { title: "Insurance handling", description: "What is typically covered, what is not, and whether you bill directly.", icon: "Receipt" },
    ],
    sections: [
      {
        heading: "Why should clearance testing be independent?",
        answer: "Because a company that tests, remediates and then certifies its own work has an obvious conflict of interest.",
        body: [
          { type: "p", text: "Some jurisdictions restrict this outright. Even where it is permitted, saying that final clearance is performed by a third-party hygienist you do not employ is a strong differentiator, and it is the thing a well-informed customer asks about." },
          { type: "callout", title: "State what you do not do", text: "If you do not perform your own clearance testing, say so and explain why. It reads as integrity rather than a gap in service, and it is the single most persuasive line on the page." },
        ],
      },
      {
        heading: "How should health claims be handled?",
        body: [
          { type: "p", text: "Carefully. Mold exposure affects people differently and the science on specific illnesses is contested. Diagnosing a visitor's symptoms on a web page is both wrong and a liability." },
          { type: "p", text: "Describe what mold is, what conditions cause it, and what remediation removes. Point people with health concerns to a doctor. Restrained language here is more credible than alarm, and it is the version that survives an insurer or attorney reading the page." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Ranges by affected area help. Scope depends on the extent and the material, so publish a starting point and inspect." },
      { question: "Do certifications matter to customers?", answer: "More than in almost any other trade. Name them and keep them current on the page." },
      { question: "How much should we say about health effects?", answer: "Little. Describe the problem and the remediation, and refer health questions to a physician." },
    ],
    related: ["water-damage-restoration-website", "foundation-repair-website", "home-inspector-website"],
  },
  {
    slug: "ev-charger-installer-website",
    eyebrow: "EV charging",
    title: "EV charger installer website design",
    seoTitle: "EV Charger Installer Website Design | ROVQIX",
    description:
      "Websites for EV charger installers — home installs, panel capacity, rebates and tax credits, commercial charging and typical costs.",
    excerpt: "Panel capacity and rebates, the two things every EV owner asks about.",
    primaryKeyword: "ev charger installer website",
    secondaryKeywords: ["ev charging installation website", "home ev charger website design", "electric car charger installer website", "level 2 charger installation website"],
    answer:
      "An EV charger installer website from ROVQIX costs $349 to $1,290 and takes about a week. Core content is home Level 2 installation, panel capacity and upgrades, rebates and tax credits, commercial and multi-unit charging, and realistic cost ranges.",
    intro:
      "Almost every EV charger enquiry starts with two unknowns: will my electrical panel take it, and what will it actually cost after rebates.",
    deliverables: [
      { title: "Home installation", description: "Level 2 charger installs, the bulk of residential demand.", icon: "Zap" },
      { title: "Panel capacity", description: "Whether the existing panel can take a charger, and what an upgrade costs.", icon: "ClipboardList" },
      { title: "Rebates and credits", description: "Utility rebates and federal or state credits, with a worked net-cost example.", icon: "Receipt" },
      { title: "Commercial and multi-unit", description: "Workplace, retail and apartment charging — a different, larger sale.", icon: "Building2" },
      { title: "Brands supported", description: "Which chargers you install, since many buyers arrive brand-first.", icon: "ShoppingBag" },
    ],
    sections: [
      {
        heading: "Why does the panel question dominate?",
        answer: "Because it is the difference between a $900 install and a $4,000 one.",
        body: [
          { type: "list", ordered: true, items: [
            "Explain that a Level 2 charger needs a dedicated 240V circuit, typically 40 to 60 amps.",
            "Describe how a homeowner can find their panel rating, so they can self-assess before calling.",
            "Give a range for a straightforward install on an adequate panel.",
            "Give a separate range for a panel upgrade or a service increase.",
            "Note that run length from panel to parking position moves the price meaningfully.",
          ]},
          { type: "callout", title: "Let them pre-qualify themselves", text: "A short 'can my panel handle it' section saves you unbillable site visits and reads as genuinely helpful. Customers who arrive already knowing they need an upgrade are far easier to close." },
        ],
      },
      {
        heading: "Why chase commercial work?",
        body: [
          { type: "p", text: "Workplaces, apartment buildings and retail sites install multiple units at once, often with their own incentive programmes, and they come back as fleets grow." },
          { type: "p", text: "That page should speak to a property manager: load assessment, number of ports, networked billing options, and ongoing service. It is a completely different document from the homeowner page and needs to be written as one." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish install prices?", answer: "Yes, as two ranges — straightforward install and install with panel work. It is the question every caller opens with." },
      { question: "Are rebates worth listing?", answer: "Yes, and they change often. A dated section you review quarterly is better than an out-of-date claim." },
      { question: "Is commercial worth a separate page?", answer: "Definitely. The buyer, the scope and the sales cycle are all different from a home install." },
    ],
    related: ["electrician-website", "solar-installer-website", "smart-home-installer-website"],
  },
  {
    slug: "smart-home-installer-website",
    eyebrow: "Smart home",
    title: "Smart home installer website design",
    seoTitle: "Smart Home Installer Website Design | ROVQIX",
    description:
      "Websites for smart home and AV installers — systems supported, whole-home versus single-room, network foundations and support plans.",
    excerpt: "Networking first, gadgets second — and a support plan that recurs.",
    primaryKeyword: "smart home installer website",
    secondaryKeywords: ["home automation company website", "av installer website design", "home theater installer website", "smart home integrator website"],
    answer:
      "A smart home installer website from ROVQIX costs $349 to $1,290 and takes about a week. It should cover the systems you support, whole-home versus single-room projects, the network work everything depends on, and ongoing support plans.",
    intro:
      "Smart home projects fail on networking, not on gadgets. The installers who say so upfront are the ones who get called back to fix everybody else's work.",
    deliverables: [
      { title: "Systems supported", description: "Control4, Lutron, Sonos, Ubiquiti, and the mainstream ecosystems. Buyers search by brand.", icon: "Blocks" },
      { title: "Project tiers", description: "Single room, whole home, and new-build pre-wire. Very different budgets.", icon: "Layers" },
      { title: "Network foundation", description: "Wi-Fi and structured cabling, which is what actually determines whether it works.", icon: "Globe" },
      { title: "Support plans", description: "Monthly or annual support, the recurring revenue that stabilises the business.", icon: "RefreshCw" },
      { title: "Builder partnerships", description: "New-build pre-wire work booked at framing, months before installation.", icon: "Building2" },
    ],
    sections: [
      {
        heading: "Why lead with networking?",
        answer: "Because a smart home on a weak network is an expensive collection of unreliable devices.",
        body: [
          { type: "p", text: "Most homeowners arriving on your site are thinking about lighting scenes and multi-room audio. Almost none are thinking about access points and cabling, and that is precisely why so many systems disappoint." },
          { type: "list", items: [
            "Explain that reliability is a network problem before it is a device problem.",
            "Say what you assess before quoting — coverage, cabling, panel and rack space.",
            "Offer a network-only engagement, which is a low-commitment first job that often grows.",
            "Mention rescue work on systems installed badly by someone else, which is a real search.",
          ]},
        ],
      },
      {
        heading: "Why sell a support plan?",
        body: [
          { type: "p", text: "Because these systems need attention. Firmware updates, replaced routers, new devices and changed passwords all break things, and a household without a support relationship calls a competitor when it does." },
          { type: "p", text: "A modest monthly plan covering remote support, updates and a priority visit turns one-off projects into a book of recurring revenue, and it is the number a buyer of your business would look at first." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish project prices?", answer: "Starting points by tier — a single room, a typical whole-home package. Full integration is genuinely bespoke." },
      { question: "Is rescue work worth advertising?", answer: "Yes. Homeowners with a half-working system installed by someone else are actively searching and ready to pay." },
      { question: "How do we win new-build work?", answer: "Get in front of builders at framing stage. A page written for builders about pre-wire timing and coordination does that." },
    ],
    related: ["electrician-website", "security-system-installer-website", "it-support-website"],
  },
  {
    slug: "custom-cabinetry-website",
    eyebrow: "Custom cabinetry",
    title: "Custom cabinetry website design",
    seoTitle: "Custom Cabinetry Website Design | ROVQIX",
    description:
      "Websites for cabinet makers — bespoke versus semi-custom, wood and finish options, lead times, design process and portfolio.",
    excerpt: "Lead times and a real portfolio, because bespoke is bought on trust.",
    primaryKeyword: "custom cabinetry website",
    secondaryKeywords: ["cabinet maker website design", "custom cabinets website", "joinery company website", "kitchen cabinet maker website"],
    answer:
      "A custom cabinetry website from ROVQIX costs $349 to $1,290 and takes about a week. It should distinguish bespoke from semi-custom, show woods, finishes and door styles, state honest lead times, and walk through the design process.",
    intro:
      "Bespoke cabinetry is a large purchase with a long lead time and no way to see the product before it is built. Everything on the site works to close that gap.",
    deliverables: [
      { title: "Bespoke vs semi-custom", description: "Different price points and lead times. Conflating them wastes both parties' time.", icon: "Layers" },
      { title: "Woods and finishes", description: "Species, door styles and finishes shown properly, since this is how clients decide.", icon: "Images" },
      { title: "Lead times", description: "Honest weeks from order to install. The most common cause of unhappy clients.", icon: "CalendarCheck" },
      { title: "Design process", description: "Consultation, drawings, approval, build, install — with who does what at each step.", icon: "ClipboardList" },
      { title: "Beyond kitchens", description: "Built-ins, wardrobes, libraries, vanities. Smaller jobs that fill the shop.", icon: "Blocks" },
    ],
    sections: [
      {
        heading: "Why state lead times openly?",
        answer: "Because a client who learns about a fourteen-week wait after paying a deposit becomes a problem for fourteen weeks.",
        body: [
          { type: "p", text: "Cabinetry lead times are long and clients are usually mid-renovation with trades scheduled behind you. Publishing a current range lets them plan and filters out anyone who needs it next month." },
          { type: "callout", title: "A long lead time is a quality signal", text: "Framed correctly, a booked-out shop reads as demand and care rather than delay. What damages you is the surprise, not the duration." },
        ],
      },
      {
        heading: "How should the portfolio work?",
        body: [
          { type: "p", text: "Photograph interiors, hardware and joinery, not just the closed elevation. What distinguishes bespoke work from a catalogue kitchen is drawer construction, matched grain and how the run meets an uneven wall." },
          { type: "p", text: "Grouping by style — shaker, slab, inset, painted — helps clients who know the look they want but not the vocabulary, and those groupings map neatly onto how people search." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "A per-linear-foot starting range for a typical kitchen. It filters out budgets that will never work, which saves you unpaid design time." },
      { question: "Are small jobs worth listing?", answer: "Yes. Built-ins and vanities fill gaps between kitchens and often lead to the kitchen later." },
      { question: "How much design work should be free?", answer: "Most shops offer an initial consultation free and charge for detailed drawings, crediting the fee against the order. Say which on the site." },
    ],
    related: ["kitchen-remodeler-website", "countertop-fabricator-website", "flooring-contractor-website"],
  },
  {
    slug: "countertop-fabricator-website",
    eyebrow: "Countertops",
    title: "Countertop fabricator website design",
    seoTitle: "Countertop Fabricator Website Design | ROVQIX",
    description:
      "Websites for countertop fabricators — material comparison, square-foot pricing, edge profiles, templating and slab selection.",
    excerpt: "Material and edge choices priced clearly, because that is the whole decision.",
    primaryKeyword: "countertop fabricator website",
    secondaryKeywords: ["granite countertop website design", "quartz countertop company website", "stone fabricator website", "countertop installer website"],
    answer:
      "A countertop fabricator website from ROVQIX costs $349 to $1,290 and takes about a week. It should compare materials on cost and maintenance, price by installed square foot, show edge profiles, and explain templating and slab selection.",
    intro:
      "Countertops are chosen on material, colour and edge, in that order, and priced by installed square foot. A website that answers all four converts without a showroom visit.",
    deliverables: [
      { title: "Material comparison", description: "Quartz, granite, marble, quartzite, solid surface — cost, durability, maintenance.", icon: "Layers" },
      { title: "Installed square-foot pricing", description: "By material tier, including fabrication and installation.", icon: "Receipt" },
      { title: "Edge profiles", description: "Shown visually with any price difference. A real decision customers make.", icon: "Images" },
      { title: "Templating and timeline", description: "Days from template to install, and what has to be ready beforehand.", icon: "CalendarCheck" },
      { title: "Slab selection", description: "Whether customers pick their own slab, which matters enormously for natural stone.", icon: "Target" },
    ],
    sections: [
      {
        heading: "Why does material comparison sell the job?",
        answer: "Because most buyers cannot tell quartz from quartzite and are frightened of choosing wrong.",
        body: [
          { type: "table", head: ["Material", "Relative cost", "Sealing", "Watch out for"], rows: [
            ["Quartz (engineered)", "Mid to high", "None", "Heat damage, UV in sunny rooms"],
            ["Granite", "Mid", "Periodic", "Variation between slabs"],
            ["Quartzite", "High", "Periodic", "Often mislabelled at supply"],
            ["Marble", "High", "Frequent", "Etching from acids, patina over time"],
          ]},
          { type: "p", text: "A fabricator who says plainly that marble will etch in a family kitchen, and offers it anyway to a client who wants the look, is the one who gets recommended." },
        ],
      },
      {
        heading: "Why explain templating?",
        body: [
          { type: "p", text: "Because clients routinely misunderstand the sequence and it wrecks their renovation schedule. Cabinets must be installed and level before templating; the sink and cooktop must be on site; nothing can move afterwards." },
          { type: "p", text: "A short numbered timeline from measure to install, with what must be ready at each point, prevents the most common cause of delay and makes you look like the organised party in the project." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish square-foot prices?", answer: "Yes, by material tier and installed. Every competitor is being asked and whoever answers gets the visit." },
      { question: "Do customers need to see slabs?", answer: "For natural stone, usually yes. Say clearly whether they select their own slab and where." },
      { question: "Is edge profile worth showing?", answer: "Yes. It is one of the few choices the customer makes alone, and photographs beat names entirely." },
    ],
    related: ["custom-cabinetry-website", "kitchen-remodeler-website", "flooring-contractor-website"],
  },
  {
    slug: "paving-contractor-website",
    eyebrow: "Paving",
    title: "Paving contractor website design",
    seoTitle: "Paving Contractor Website Design | ROVQIX",
    description:
      "Websites for asphalt and paving contractors — driveways and parking lots, sealcoating, repairs, commercial contracts and seasonal work.",
    excerpt: "Commercial lots and sealcoating maintenance, not just one-off driveways.",
    primaryKeyword: "paving contractor website",
    secondaryKeywords: ["asphalt paving company website", "driveway paving website design", "sealcoating company website", "parking lot paving website"],
    answer:
      "A paving contractor website from ROVQIX costs $349 to $1,290 and takes about a week. It should split residential driveways from commercial parking lots, cover sealcoating and repair as recurring maintenance, and explain the seasonal window honestly.",
    intro:
      "Paving has one profitable secret: sealcoating. It is recurring, it is scheduled, and it keeps the crew working between the big pours.",
    deliverables: [
      { title: "Residential driveways", description: "New, overlay and full replacement, priced by square foot.", icon: "Home" },
      { title: "Commercial lots", description: "Parking lots, striping and ADA compliance. Larger contracts, repeat clients.", icon: "Building2" },
      { title: "Sealcoating", description: "Recurring maintenance on a schedule. The steadiest revenue in the trade.", icon: "RefreshCw" },
      { title: "Repairs", description: "Potholes, cracks and patching. Small, fast, and a route into full replacement.", icon: "Wrench" },
      { title: "Season window", description: "When you can and cannot pave, since temperature genuinely limits the work.", icon: "CalendarCheck" },
    ],
    sections: [
      {
        heading: "Why build the site around commercial work?",
        answer: "Because a property manager with six lots is worth more than sixty driveways, and comes back annually.",
        body: [
          { type: "list", items: [
            "Write a page for property managers, not homeowners — scope, scheduling around business hours, and liability cover.",
            "Offer overnight and weekend work, which is often the deciding factor for a retail lot.",
            "Include striping and ADA-compliant marking, which many contractors subcontract and customers assume you handle.",
            "Offer a maintenance agreement: annual inspection, crack fill, sealcoat on a cycle.",
            "State your insurance limits, since commercial clients need them before they can award work.",
          ]},
          { type: "callout", title: "Sell the schedule, not the job", text: "A signed multi-year maintenance agreement on a commercial lot is worth several one-off pours and it makes next season predictable." },
        ],
      },
      {
        heading: "How should seasonality be handled?",
        body: [
          { type: "p", text: "State the temperature window plainly. Asphalt laid too cold fails, and a contractor who declines a November job explains more about their standards than any testimonial." },
          { type: "p", text: "Use the closed season productively on the site: book spring work in winter with a deposit and a scheduled date, so the calendar is full before the weather turns." },
        ],
      },
    ],
    faqs: [
      { question: "Should we publish prices?", answer: "Square-foot ranges for residential driveways and sealcoating. Commercial lots are quoted, but say what drives the number." },
      { question: "Is sealcoating worth promoting?", answer: "It is the most reliable revenue in paving — recurring, schedulable, and it keeps crews working in shoulder seasons." },
      { question: "How do we win property managers?", answer: "A page written for them covering scheduling, insurance limits, striping and multi-site maintenance agreements." },
    ],
    related: ["concrete-contractor-website", "snow-removal-website", "landscaping-company-website"],
  },
];

export const localTrades2Pages = makeLocalPages(specs);
