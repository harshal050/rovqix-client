import { makeLocalPages, type LocalSpec } from "./local-builder";

/**
 * Personal care and appointment-based businesses. The common thread is that
 * booking is the conversion, and the customer is choosing on photos and
 * reviews before they ever read a word of copy.
 */
const specs: LocalSpec[] = [
  {
    slug: "barber-shop-website",
    eyebrow: "Barber shops",
    title: "Barber shop website design",
    seoTitle: "Barber Shop Website Design from $349 | ROVQIX",
    description:
      "Simple, fast websites for barber shops — booking, prices, photos of your cuts and directions. Live in about a week from $349, and you own it.",
    excerpt: "Booking, prices and a gallery of your work. Live in about a week.",
    primaryKeyword: "barber shop website design",
    secondaryKeywords: [
      "barber website",
      "barbershop website builder",
      "website for barbers",
      "barber booking website",
    ],
    answer:
      "A barber shop website costs $349 to $1,290 from ROVQIX and takes about a week. It shows your cuts, your prices, your hours and a booking link — which is all most customers need before they walk in or book a chair.",
    intro:
      "Nobody reads a barber's website. They look at the photos, check the price, and tap book or call. Everything else on the page is in the way.",
    deliverables: [
      {
        title: "Gallery of your cuts",
        description:
          "The single thing customers actually judge you on. Phone photos are fine if they are well lit.",
        icon: "Images",
      },
      {
        title: "Booking link that works",
        description:
          "Connected to Booksy, Square, Fresha or whatever you already use — not a second system to manage.",
        icon: "CalendarCheck",
      },
      {
        title: "Prices up front",
        description:
          "Cut, beard, fade, kids. Showing prices stops the calls asking how much and filters out time-wasters.",
        icon: "Receipt",
      },
      {
        title: "Tap to call and directions",
        description:
          "Big buttons at the top on mobile. Most of your traffic is someone standing nearby deciding where to go.",
        icon: "Phone",
      },
      {
        title: "Your barbers",
        description:
          "Names and photos. Regulars book a person, not a shop, and new customers pick a face they like.",
        icon: "Users",
      },
      {
        title: "Google reviews shown",
        description:
          "Pulled in live so they stay current without you touching anything.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "What do barber shop customers actually look for?",
        answer:
          "Photos of your work, the price, whether you are open now, and how to book. In that order.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Photos of real cuts you have done. Stock photos of models are obvious and put people off.",
              "Price for a standard cut. Hiding it makes people assume it is expensive.",
              "Whether you are open right now, which needs your hours to be correct and current.",
              "A booking button or a phone number they can tap once.",
              "Where you are, with a map that opens in their phone's maps app.",
            ],
          },
          {
            type: "callout",
            title: "Your Google listing matters more than your website",
            text: "Most barber searches end on Google Maps, not on a website. We make sure your Google Business Profile is set up properly and linked to the site — that is usually worth more than anything else we do.",
          },
        ],
      },
      {
        heading: "Do you need a website if you use Booksy or Instagram?",
        body: [
          {
            type: "p",
            text: "Honestly, if you are fully booked from Instagram and walk-ins, you may not need one yet. We will tell you that rather than sell you a site.",
          },
          {
            type: "list",
            items: [
              "A website helps when you want to show up in Google searches, which Instagram does not do.",
              "It gives you somewhere to send people that is not owned by a platform that can change the rules.",
              "It makes you look established, which matters if you are chasing higher-priced work.",
              "It is where your prices, hours and directions live in one place that stays correct.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can customers book through the website?",
        answer:
          "Yes — we connect the booking system you already use, like Booksy, Square or Fresha. If you do not have one, we can add a simple request form instead, or point you at a booking tool that suits your shop.",
      },
      {
        question: "I do not have good photos. Is that a problem?",
        answer:
          "Not really. We will tell you exactly what to shoot on your phone — a few cuts in good light near the window, the chairs, the front of the shop. That is usually enough and it looks more genuine than stock photography.",
      },
      {
        question: "Will this get me to the top of Google?",
        answer:
          "For your shop name, yes. For competitive searches like 'barber near me', your Google Business Profile and your reviews matter more than your website. We set the profile up properly, but nobody can promise a ranking.",
      },
    ],
    related: ["hair-salon-website", "tattoo-studio-website", "nail-salon-website"],
  },

  {
    slug: "hair-salon-website",
    eyebrow: "Hair salons",
    title: "Hair salon website design",
    seoTitle: "Hair Salon Website Design from $349 | ROVQIX",
    description:
      "Websites for hair salons — online booking, service menu with prices, stylist profiles and a gallery. Live in about a week from $349.",
    excerpt: "Service menu, stylist profiles and booking, without the clutter.",
    primaryKeyword: "hair salon website design",
    secondaryKeywords: [
      "salon website",
      "hairdresser website design",
      "salon booking website",
      "website for hair stylists",
    ],
    answer:
      "A hair salon website from ROVQIX costs $349 to $1,290 and takes one to two weeks. It covers your service menu with prices, stylist profiles, a gallery of your work and a booking link connected to the system you already use.",
    intro:
      "Salon websites go wrong by trying to look like a fashion magazine. Customers want the price of a colour and whether they can get in on Saturday.",
    deliverables: [
      {
        title: "Service menu with prices",
        description:
          "Cut, colour, balayage, treatments — with prices or ranges. The most-visited part of any salon site.",
        icon: "Receipt",
      },
      {
        title: "Stylist profiles",
        description:
          "Photos, specialisms and their own booking links. Clients follow a stylist, not a salon.",
        icon: "Users",
      },
      {
        title: "Before and after gallery",
        description:
          "Colour work especially. This is what convinces someone to pay more than the salon down the road.",
        icon: "Images",
      },
      {
        title: "Online booking",
        description:
          "Connected to Fresha, Vagaro, Square or your existing system, so there is only one diary.",
        icon: "CalendarCheck",
      },
      {
        title: "Consultation notes",
        description:
          "Colour corrections and extensions usually need a consultation first. We make that path clear.",
        icon: "MessageSquare",
      },
      {
        title: "Reviews and directions",
        description:
          "Google reviews pulled in live, plus tap-to-call and map directions on mobile.",
        icon: "BadgeCheck",
      },
    ],
    sections: [
      {
        heading: "Why do salon prices belong on the website?",
        answer:
          "Because hiding them costs you more bookings than it protects, and it fills your phone with price questions.",
        body: [
          {
            type: "p",
            text: "The usual objection is that colour work varies too much to price. That is true, and a range solves it: 'Balayage from $180, depending on length and thickness — book a free consultation for an exact quote.'",
          },
          {
            type: "list",
            items: [
              "A range filters out people who were never going to book, before they take up phone time.",
              "It sets expectations, which reduces awkward conversations at the till.",
              "Salons that show nothing are assumed to be expensive, which loses mid-market clients.",
              "It gives you a reason to mention the consultation, which is where you sell the bigger service.",
            ],
          },
        ],
      },
      {
        heading: "Should each stylist have their own page?",
        body: [
          {
            type: "p",
            text: "A profile section, yes. A full page each, usually only if they build their own following and share the link. The practical version is a profile card with a photo, their specialisms and a direct booking link.",
          },
          {
            type: "callout",
            title: "Direct stylist links are worth doing",
            text: "If a stylist can post one link that books straight into their own chair, they will share it. That is free marketing your competitors' sites usually cannot do.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can clients book a specific stylist?",
        answer:
          "Yes, if your booking system supports it — most do. We link each stylist profile to their own booking page so a client can go straight to the person they want.",
      },
      {
        question: "Can we show different prices for junior and senior stylists?",
        answer:
          "Yes. We usually show it as a range with a note about levels, which is clearer than a long table and easier for you to keep updated.",
      },
      {
        question: "Can we sell products or gift cards on the site?",
        answer:
          "Gift cards yes, usually through your booking system which already handles payment. Full product ecommerce is a bigger job and we would talk you through whether it is worth it for your volume.",
      },
    ],
    related: ["barber-shop-website", "nail-salon-website", "day-spa-website"],
  },

  {
    slug: "nail-salon-website",
    eyebrow: "Nail salons",
    title: "Nail salon website design",
    seoTitle: "Nail Salon Website Design from $349 | ROVQIX",
    description:
      "Websites for nail salons and nail techs — service menu, design gallery, booking and walk-in availability. From $349, live in about a week.",
    excerpt: "A design gallery that loads fast, plus prices and booking.",
    primaryKeyword: "nail salon website design",
    secondaryKeywords: [
      "nail salon website",
      "nail tech website",
      "manicure website design",
      "nail salon booking site",
    ],
    answer:
      "A nail salon website from ROVQIX costs $349 to $1,290 and takes about a week. The core of it is a fast-loading design gallery, a clear service menu with prices and durations, and a booking link.",
    intro:
      "Nail salon sites live or die on the gallery. It is also the thing that makes most of them painfully slow on a phone.",
    deliverables: [
      {
        title: "Fast design gallery",
        description:
          "Dozens of photos that still load quickly on mobile data, which is where almost all of this traffic is.",
        icon: "Images",
      },
      {
        title: "Service menu with durations",
        description:
          "Price and how long it takes. Duration matters here more than in most trades — people book around a lunch break.",
        icon: "Clock",
      },
      {
        title: "Booking link",
        description:
          "Connected to your existing system, with walk-in availability noted if you take them.",
        icon: "CalendarCheck",
      },
      {
        title: "Nail tech profiles",
        description:
          "For salons where techs have their own following, with their own gallery and booking link.",
        icon: "Users",
      },
      {
        title: "Hygiene and safety",
        description:
          "Sterilisation practice and licensing, stated plainly. It reassures a nervous first-time customer.",
        icon: "ShieldCheck",
      },
      {
        title: "Tap to call and map",
        description:
          "Big mobile buttons, because most visitors are nearby and deciding right now.",
        icon: "Phone",
      },
    ],
    sections: [
      {
        heading: "How do you show a big gallery without a slow website?",
        answer:
          "Load a handful of images first and fetch the rest as the customer scrolls.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Resize every photo properly before it goes on the site — a straight-from-phone image is far too large.",
              "Use modern image formats, which cut file size by more than half with no visible difference.",
              "Load the first six images immediately, then the rest as they scroll.",
              "Reserve the space so the page does not jump around as photos arrive.",
              "Keep the gallery to your best work. Two hundred photos is not better than forty good ones.",
            ],
          },
          {
            type: "callout",
            title: "Slow galleries lose bookings",
            text: "On a phone on mobile data, a gallery of unoptimised photos can take eight seconds. Most people leave before it finishes. We handle this automatically, but it is the single biggest issue on nail salon sites we look at.",
          },
        ],
      },
      {
        heading: "Should you organise the gallery by style?",
        body: [
          {
            type: "p",
            text: "If you have more than about thirty photos, yes — acrylics, gel, nail art, pedicures. It helps customers find what they want and it gives you something to link to when someone asks 'do you do that?'.",
          },
          {
            type: "p",
            text: "Below thirty photos, a single grid is simpler and works fine. We will not build categories you do not need.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I add new photos myself?",
        answer:
          "Yes. Uploading to the gallery is designed to be as simple as posting to Instagram, and the site resizes and optimises the images automatically so you cannot accidentally slow it down.",
      },
      {
        question: "Can we take walk-ins as well as bookings?",
        answer:
          "Yes. We show current walk-in availability if your system tracks it, or just state your walk-in policy clearly so people know before they travel.",
      },
      {
        question: "Do we need to list every service?",
        answer:
          "No, and a shorter menu usually converts better. List your main services with prices and add a line saying to ask about anything else.",
      },
    ],
    related: ["hair-salon-website", "day-spa-website", "barber-shop-website"],
  },

  {
    slug: "day-spa-website",
    eyebrow: "Spas",
    title: "Day spa and massage website design",
    seoTitle: "Day Spa & Massage Website Design | ROVQIX",
    description:
      "Websites for day spas and massage therapists — treatment menu, packages, gift cards and booking, with the calm feel the business is selling.",
    excerpt: "Treatment menu, packages and gift cards, with booking that works.",
    primaryKeyword: "day spa website design",
    secondaryKeywords: [
      "massage therapist website",
      "spa website design",
      "massage booking website",
      "wellness website design",
    ],
    answer:
      "A day spa or massage website from ROVQIX costs $349 to $1,290 and takes one to two weeks. It covers your treatment menu with durations and prices, packages, gift card sales and a booking link.",
    intro:
      "Spa websites are selling a feeling, which makes it tempting to bury the practical information. The customer still needs to know what a 60-minute massage costs.",
    deliverables: [
      {
        title: "Treatment menu",
        description:
          "Duration and price for each treatment, grouped so a first-time visitor can navigate it easily.",
        icon: "Receipt",
      },
      {
        title: "Packages and bundles",
        description:
          "Your higher-value offers presented properly, since these are where the margin usually is.",
        icon: "Sparkles",
      },
      {
        title: "Gift cards",
        description:
          "A large share of spa revenue, especially at holidays. Sold through your booking system.",
        icon: "CreditCard",
      },
      {
        title: "Therapist credentials",
        description:
          "Licensing and qualifications, which matter more here than in most personal-care trades.",
        icon: "BadgeCheck",
      },
      {
        title: "What to expect",
        description:
          "First-visit information — arrival time, what to wear, what happens. It removes hesitation before booking.",
        icon: "FileText",
      },
      {
        title: "Calm, fast design",
        description:
          "The look matters here, but not at the cost of a page that takes six seconds to load.",
        icon: "Palette",
      },
    ],
    sections: [
      {
        heading: "Why does a 'what to expect' page increase bookings?",
        answer:
          "Because first-time spa customers are quietly nervous, and uncertainty stops them booking.",
        body: [
          {
            type: "list",
            items: [
              "How early to arrive, and what happens if they are late.",
              "What to wear, and what happens during the treatment.",
              "Whether they undress, and how privacy is handled.",
              "Tipping expectations, which people are genuinely unsure about.",
              "Cancellation policy, stated kindly but clearly.",
            ],
          },
          {
            type: "callout",
            title: "Answer the awkward questions",
            text: "The questions people are too embarrassed to phone and ask are exactly the ones stopping them booking. Putting the answers on the page removes the barrier quietly.",
          },
        ],
      },
      {
        heading: "How should packages be presented?",
        body: [
          {
            type: "p",
            text: "Show the individual price alongside the package price so the saving is visible. Three options works better than seven — too much choice makes people postpone the decision rather than pick.",
          },
          {
            type: "p",
            text: "Put the package you most want to sell in the middle position. It is the one most people choose when they are not sure.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we sell gift cards through the site?",
        answer:
          "Yes, usually through your booking system which already handles payment and delivery. That keeps everything in one place rather than adding a separate store to reconcile.",
      },
      {
        question: "Can clients fill in intake forms before arriving?",
        answer:
          "If your booking system supports it, yes, and it saves real time at the desk. For health information we would use your booking provider's forms rather than a plain website form, since that data needs handling properly.",
      },
      {
        question: "We want a very specific look. Can you do that with a template?",
        answer:
          "Within reason — your colours, fonts, photography and layout choices. If you want something genuinely bespoke, that is a custom build starting around $2,500 and we will say so rather than stretching the template.",
      },
    ],
    related: ["hair-salon-website", "nail-salon-website", "yoga-studio-website"],
  },

  {
    slug: "tattoo-studio-website",
    eyebrow: "Tattoo studios",
    title: "Tattoo studio website design",
    seoTitle: "Tattoo Studio Website Design | ROVQIX",
    description:
      "Websites for tattoo studios and artists — portfolio by artist and style, consultation requests, deposits and aftercare. From $349.",
    excerpt: "Portfolio by artist and style, plus a consultation request that filters.",
    primaryKeyword: "tattoo studio website design",
    secondaryKeywords: [
      "tattoo artist website",
      "tattoo shop website",
      "tattoo portfolio website",
      "tattoo booking website",
    ],
    answer:
      "A tattoo studio website from ROVQIX costs $349 to $1,290 and takes about a week. It is built around artist portfolios organised by style, a consultation request form that captures enough detail to quote, and clear deposit and aftercare information.",
    intro:
      "Tattoo enquiries waste enormous amounts of artist time when the form asks for a name and an email. The form is where this website earns its money.",
    deliverables: [
      {
        title: "Portfolio by artist and style",
        description:
          "Traditional, realism, fine line, blackwork. Customers search by style first, then pick an artist.",
        icon: "Images",
      },
      {
        title: "Consultation request that filters",
        description:
          "Placement, size, style, reference images and budget — so artists can quote instead of playing email tennis.",
        icon: "ClipboardList",
      },
      {
        title: "Deposit information",
        description:
          "How much, whether it is refundable, and what it holds. Stated clearly to avoid the usual disputes.",
        icon: "CreditCard",
      },
      {
        title: "Shop policies",
        description:
          "Age requirements, ID, guests, touch-ups. All the things you currently repeat forty times a week.",
        icon: "FileText",
      },
      {
        title: "Aftercare instructions",
        description:
          "A page you can point every client to, which reduces healing problems and the messages about them.",
        icon: "HeartPulse",
      },
      {
        title: "Licensing and hygiene",
        description:
          "Health department licensing and sterilisation practice, which reassures first-time clients.",
        icon: "ShieldCheck",
      },
    ],
    sections: [
      {
        heading: "What should the enquiry form ask for?",
        answer:
          "Enough that an artist can give a rough quote without a single follow-up email.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Placement on the body, which drives difficulty and price more than anything else.",
              "Approximate size in inches or centimetres, with a note that they can estimate.",
              "Style, matched to the styles your artists actually do.",
              "Reference image upload — one or two, not a mood board of thirty.",
              "Budget range, which filters out enquiries that were never going to happen.",
              "Preferred artist, if they have one.",
            ],
          },
          {
            type: "callout",
            title: "A longer form is the right answer here",
            text: "For most businesses we cut form fields. Tattoo enquiries are the exception: an extra thirty seconds for the customer saves the artist several emails per enquiry, and the people who will not fill it in were rarely serious.",
          },
        ],
      },
      {
        heading: "Should each artist have their own section?",
        body: [
          {
            type: "p",
            text: "Yes. Tattoo clients choose an artist far more deliberately than they choose a shop, and artists move between studios. Each artist gets a gallery, their styles, their availability status and a way to enquire with them specifically.",
          },
          {
            type: "p",
            text: "It also means an artist can share one link to their own portfolio, which is the version they will actually post.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can clients pay a deposit online?",
        answer:
          "Yes, we can add a deposit payment link. Many studios prefer to take it after the consultation once the design is agreed, and we will set it up whichever way you work.",
      },
      {
        question: "Can artists update their own galleries?",
        answer:
          "Yes, each artist can be given access to upload to their own gallery only. Images are resized automatically so the site stays fast.",
      },
      {
        question: "Do we need an age verification gate?",
        answer:
          "Usually not for a portfolio site, though the age requirement should be stated clearly on the enquiry form and policies page. If your state or your imagery makes a gate advisable, we will add one.",
      },
    ],
    related: ["barber-shop-website", "hair-salon-website", "photographer-website"],
  },

  {
    slug: "gym-and-fitness-studio-website",
    eyebrow: "Gyms",
    title: "Gym and fitness studio website design",
    seoTitle: "Gym & Fitness Studio Website Design | ROVQIX",
    description:
      "Websites for gyms, CrossFit boxes and fitness studios — class timetable, membership pricing, free trial signup and trainer profiles. From $349.",
    excerpt: "Timetable, membership prices and a free-trial signup that converts.",
    primaryKeyword: "gym website design",
    secondaryKeywords: [
      "fitness studio website",
      "crossfit gym website",
      "personal training website",
      "gym membership website",
    ],
    answer:
      "A gym or fitness studio website from ROVQIX costs $349 to $1,290 and takes one to two weeks. The essentials are a current class timetable, membership pricing, a free-trial or first-class signup, and trainer profiles.",
    intro:
      "Gym websites almost always hide the two things people came for: the timetable and the price. Both should be reachable in one tap.",
    deliverables: [
      {
        title: "Class timetable",
        description:
          "Current, readable on a phone, and pulled from your booking system so it cannot go stale.",
        icon: "CalendarCheck",
      },
      {
        title: "Membership pricing",
        description:
          "Shown plainly. Gyms that hide pricing lose people to the one down the road that does not.",
        icon: "Receipt",
      },
      {
        title: "Free trial signup",
        description:
          "The main conversion for most gyms. Short form, immediate confirmation, clear next step.",
        icon: "Target",
      },
      {
        title: "Trainer profiles",
        description:
          "Qualifications and specialisms. People join a gym because of a coach more often than a facility.",
        icon: "Users",
      },
      {
        title: "Photos of the real space",
        description:
          "Your actual gym, including the equipment. Stock gym photography fools nobody.",
        icon: "Images",
      },
      {
        title: "Beginner reassurance",
        description:
          "What a first session looks like, which is the main thing stopping nervous beginners walking in.",
        icon: "MessageSquare",
      },
    ],
    sections: [
      {
        heading: "Why should gyms show membership prices?",
        answer:
          "Because the enquiry-form-first approach loses more prospects than it converts.",
        body: [
          {
            type: "p",
            text: "The traditional gym sales model hides price to force a phone conversation. That worked when people had to visit to compare. Now they open three tabs, and the two that show pricing get considered.",
          },
          {
            type: "list",
            items: [
              "Show your main membership options and what each includes.",
              "If you have joining fees or contracts, say so — finding out later damages trust badly.",
              "Offer a trial as the low-commitment step instead of using price opacity as the hook.",
              "Keep it to three options. Long comparison tables make people leave to think about it.",
            ],
          },
        ],
      },
      {
        heading: "What stops beginners walking in?",
        body: [
          {
            type: "list",
            items: [
              "Not knowing whether everyone there will be much fitter than them.",
              "Not knowing what happens in the first session, or whether they will look lost.",
              "Not knowing what to bring or wear.",
              "Worrying about being sold to aggressively on arrival.",
              "Not knowing whether they can leave if they hate it.",
            ],
          },
          {
            type: "callout",
            title: "Write for the nervous beginner",
            text: "Most gym websites are written for people who already train. The bigger untapped market is the person who has not been to a gym in five years — and a short, honest 'your first visit' section converts them better than another photo of someone deadlifting.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can the timetable update automatically?",
        answer:
          "Yes, if you use a booking system like Mindbody, Glofox, Wodify or similar. We pull the live timetable so you are not maintaining it in two places and getting caught out when a class changes.",
      },
      {
        question: "Can people sign up for memberships online?",
        answer:
          "Through your booking or membership system, yes. We link the signup rather than rebuilding payments, which keeps billing and access control in the system that already handles them.",
      },
      {
        question: "Should we have a blog?",
        answer:
          "Only if someone will genuinely write it. An abandoned blog with three posts from 2024 looks worse than none. If you do want one, we will set it up so it is easy to post to.",
      },
    ],
    related: ["yoga-studio-website", "personal-trainer-website", "martial-arts-school-website"],
  },

  {
    slug: "yoga-studio-website",
    eyebrow: "Yoga studios",
    title: "Yoga studio website design",
    seoTitle: "Yoga Studio Website Design | ROVQIX",
    description:
      "Websites for yoga and pilates studios — class schedule, class descriptions for beginners, pricing, packages and teacher profiles. From $349.",
    excerpt: "Schedule, class descriptions and packages, explained for beginners.",
    primaryKeyword: "yoga studio website design",
    secondaryKeywords: [
      "yoga website design",
      "pilates studio website",
      "yoga class booking website",
      "yoga teacher website",
    ],
    answer:
      "A yoga studio website from ROVQIX costs $349 to $1,290 and takes one to two weeks. It covers the live class schedule, class descriptions written for beginners, class pack and membership pricing, and teacher profiles.",
    intro:
      "Yoga studio sites tend to assume the reader already knows what vinyasa is. Most people searching do not, and that gap is where the bookings are lost.",
    deliverables: [
      {
        title: "Live class schedule",
        description:
          "Pulled from your booking system so it is always right, and readable on a phone.",
        icon: "CalendarCheck",
      },
      {
        title: "Class descriptions in plain English",
        description:
          "What each style actually involves, how hard it is, and whether a beginner can join.",
        icon: "FileText",
      },
      {
        title: "Pricing and packs",
        description:
          "Drop-in, class packs, memberships and intro offers, laid out so people can compare quickly.",
        icon: "Receipt",
      },
      {
        title: "Teacher profiles",
        description:
          "Training, style and a photo. Students follow teachers, and they book around a teacher's classes.",
        icon: "Users",
      },
      {
        title: "First-class information",
        description:
          "What to bring, when to arrive, whether mats are provided. Removes the reason not to try.",
        icon: "MessageSquare",
      },
      {
        title: "Intro offer",
        description:
          "The two-week or first-class offer given real prominence, since it is the main conversion.",
        icon: "Target",
      },
    ],
    sections: [
      {
        heading: "Why write class descriptions for beginners?",
        answer:
          "Because your existing students do not need the website, and beginners cannot tell the styles apart.",
        body: [
          {
            type: "table",
            head: ["Unhelpful", "Helpful"],
            rows: [
              ["Vinyasa Flow — all levels", "Vinyasa Flow — continuous movement linked to breath. Moderately physical. Fine for beginners with reasonable mobility."],
              ["Yin — 75 min", "Yin — slow, floor-based holds of 3–5 minutes. Gentle and deeply stretching. Good first class."],
              ["Ashtanga Led", "Ashtanga Led — a set, physically demanding sequence. Best once you have a few months of practice."],
            ],
          },
          {
            type: "callout",
            title: "Say who each class is not for",
            text: "Telling someone a class is probably too advanced for them builds more trust than claiming everything is for all levels. It also stops a bad first experience that loses them permanently.",
          },
        ],
      },
      {
        heading: "How should the intro offer be handled?",
        body: [
          {
            type: "p",
            text: "Give it one prominent place on the home page and one clear page of its own. Do not spread it across five banners — repetition reads as pressure, and this audience responds badly to pressure.",
          },
          {
            type: "p",
            text: "Be explicit about what happens when the intro period ends. Auto-renewal that surprises someone is the fastest way to lose a new student and get a bad review.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can students book and pay online?",
        answer:
          "Through your booking system, yes — Mindbody, Momence, Punchpass, WellnessLiving and similar all work. We link to it rather than rebuilding payments and class credits.",
      },
      {
        question: "Can we offer online classes too?",
        answer:
          "Yes. We can list virtual classes alongside in-person ones and link to your video platform. Hosting the video ourselves is possible but usually more cost than it is worth.",
      },
      {
        question: "Can teachers update their own profiles?",
        answer:
          "Yes, if you want them to. Most studios prefer one person to manage it so the tone stays consistent, and we set it up either way.",
      },
    ],
    related: ["gym-and-fitness-studio-website", "day-spa-website", "dance-studio-website"],
  },

  {
    slug: "personal-trainer-website",
    eyebrow: "Personal trainers",
    title: "Personal trainer website design",
    seoTitle: "Personal Trainer Website Design | ROVQIX",
    description:
      "Websites for personal trainers and coaches — packages, results, free consultation booking and credentials. Built to turn enquiries into paying clients.",
    excerpt: "Packages, real results and a consultation booking. Built for one person.",
    primaryKeyword: "personal trainer website",
    secondaryKeywords: [
      "personal training website design",
      "fitness coach website",
      "online coaching website",
      "pt website builder",
    ],
    answer:
      "A personal trainer website from ROVQIX costs $349 to $1,290 and takes about a week. It focuses on your packages and pricing, genuine client results, your credentials, and a free consultation booking as the main call to action.",
    intro:
      "A personal trainer is selling themselves, not a facility. That changes what the website has to do — it has to make one specific person look worth $80 an hour.",
    deliverables: [
      {
        title: "Your story and approach",
        description:
          "Why you train the way you do. Clients pick a trainer on fit, and this is where fit is communicated.",
        icon: "MessageSquare",
      },
      {
        title: "Packages and pricing",
        description:
          "Session blocks, monthly coaching, online programmes. Shown plainly so people can self-select.",
        icon: "Receipt",
      },
      {
        title: "Real client results",
        description:
          "With permission, and honestly presented. Specific outcomes beat generic transformation photos.",
        icon: "BarChart3",
      },
      {
        title: "Credentials",
        description:
          "Certifications, insurance and specialisms. Especially important for rehab or pre-natal work.",
        icon: "BadgeCheck",
      },
      {
        title: "Free consultation booking",
        description:
          "The single call to action. One button, on every screen, straight into your calendar.",
        icon: "CalendarCheck",
      },
      {
        title: "Where you train",
        description:
          "Gym, studio, in-home or online. People filter on this immediately and it is often left out.",
        icon: "Network",
      },
    ],
    sections: [
      {
        heading: "What makes a trainer's site convert?",
        answer:
          "Being specific about who you help. A trainer for everyone reads as a trainer for nobody.",
        body: [
          {
            type: "list",
            items: [
              "Name the client you are best for: postnatal, over-50s, first-time lifters, runners, rehab.",
              "Say what you do not do. It makes the rest of the page more believable.",
              "Show results with numbers and context, not just photographs.",
              "Include the price, or at least a starting price. Trainers who hide it get fewer enquiries.",
              "Put your face on it. This is a personal service and anonymity does not sell it.",
            ],
          },
          {
            type: "callout",
            title: "Niche down on the page, not in your business",
            text: "You can still train anyone. But a page that speaks directly to one type of client converts far better than one that lists every service, and it usually attracts the clients you most want anyway.",
          },
        ],
      },
      {
        heading: "Do you need a website if you get clients by referral?",
        body: [
          {
            type: "p",
            text: "If you are full and referrals keep coming, probably not yet. We would rather say that than sell you something.",
          },
          {
            type: "p",
            text: "It becomes worth it when you want to raise your rates, launch online coaching, or stop relying on one gym's foot traffic. A site is where a referral checks you out before they call — and where an online programme actually gets sold.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I sell online programmes through the site?",
        answer:
          "Yes, either linked to a coaching platform like Trainerize or with a simple payment link for a programme you deliver yourself. Full course hosting is a bigger build and we would discuss whether the volume justifies it.",
      },
      {
        question: "Can clients book consultations directly into my calendar?",
        answer:
          "Yes, connected to Calendly, Acuity or your existing booking tool so it respects your real availability and does not double-book you.",
      },
      {
        question: "I only have phone photos. Is that enough?",
        answer:
          "Usually yes, and often better than stock. A few well-lit photos of you actually coaching are more convincing than professional shots of models in a gym you do not work in.",
      },
    ],
    related: ["gym-and-fitness-studio-website", "yoga-studio-website", "physical-therapy-website"],
  },

  {
    slug: "dental-practice-website",
    eyebrow: "Dentists",
    title: "Dental practice website design",
    seoTitle: "Dental Practice Website Design | ROVQIX",
    description:
      "Websites for dental practices — services, new patient information, insurance accepted, appointment requests and the accessibility standards healthcare needs.",
    excerpt: "New patient info, insurance accepted and appointment requests, done accessibly.",
    primaryKeyword: "dental website design",
    secondaryKeywords: [
      "dentist website design",
      "dental practice website",
      "dental office website",
      "orthodontist website design",
    ],
    answer:
      "A dental practice website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers services, new patient information, which insurance you accept, appointment requests, and meets accessibility standards that healthcare sites are expected to hit.",
    intro:
      "Two things drive dental enquiries and both are usually buried: whether you take their insurance, and whether they can get an appointment this week.",
    deliverables: [
      {
        title: "Insurance accepted",
        description:
          "A plain list of plans you take. It is the most-checked information on any dental site and usually hardest to find.",
        icon: "ShieldCheck",
      },
      {
        title: "New patient information",
        description:
          "What the first visit involves, forms to complete beforehand, and what to bring.",
        icon: "ClipboardList",
      },
      {
        title: "Services explained simply",
        description:
          "Crowns, implants, whitening — described in plain language rather than clinical terms.",
        icon: "FileText",
      },
      {
        title: "Appointment requests",
        description:
          "A request form or link to your scheduling system, with emergency contact handled separately.",
        icon: "CalendarCheck",
      },
      {
        title: "Accessible build",
        description:
          "Readable at large text sizes, keyboard operable, proper contrast. Expected for healthcare.",
        icon: "Accessibility",
      },
      {
        title: "Meet the team",
        description:
          "Dentists and hygienists with credentials. Anxious patients want to see who will treat them.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Why does insurance information matter so much?",
        answer:
          "Because for most US patients it is the first filter, before location and before reviews.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "List the plans you accept by name, on a page that is easy to reach from the menu.",
              "Say plainly whether you are in-network or out-of-network, since patients understand the difference.",
              "Explain your payment options for those without insurance, including any membership plan.",
              "Keep it current. An out-of-date list produces angry phone calls and bad reviews.",
              "If it is complicated, say 'call us and we will check' rather than leaving the page blank.",
            ],
          },
          {
            type: "callout",
            title: "This is not a design question",
            text: "Practices spend on photography and animation while the insurance page is a PDF from 2019. Fixing that one page usually does more for new patient numbers than a redesign.",
          },
        ],
      },
      {
        heading: "How do you write for anxious patients?",
        body: [
          {
            type: "list",
            items: [
              "Say what a procedure actually feels like, not just what it is.",
              "Mention sedation options if you offer them, plainly and without euphemism.",
              "Avoid stock photography of perfect teeth; photos of your actual team work better.",
              "Give the price or a range where you can. Fear of an unknown bill keeps people away.",
              "Make it easy to ask a question without committing to an appointment.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can patients book appointments online?",
        answer:
          "Yes, either linked to your practice management system if it supports online scheduling, or as a request form your front desk confirms. Many practices prefer requests so they can triage.",
      },
      {
        question: "Can we collect patient forms through the website?",
        answer:
          "For anything with health information we use your practice management system's secure forms rather than a plain website form, because that data needs handling properly. We link to it clearly.",
      },
      {
        question: "Does the site need to be HIPAA compliant?",
        answer:
          "A marketing website with no patient data does not store protected health information, so the question mostly applies to forms. We keep health information out of the website and in your practice system, which is the simpler and safer arrangement.",
      },
      {
        question: "Do dental websites need to meet accessibility standards?",
        answer:
          "Healthcare sites are a common target for accessibility complaints in the US, so yes, we build to WCAG 2.2 AA as standard rather than treating it as an upgrade.",
      },
    ],
    related: ["medical-practice-website", "chiropractor-website", "optometrist-website"],
  },

  {
    slug: "chiropractor-website",
    eyebrow: "Chiropractors",
    title: "Chiropractor website design",
    seoTitle: "Chiropractor Website Design | ROVQIX",
    description:
      "Websites for chiropractic clinics — conditions treated, new patient offers, insurance, appointment booking and honest, compliant claims.",
    excerpt: "Conditions treated, insurance and booking — with claims that stay compliant.",
    primaryKeyword: "chiropractor website design",
    secondaryKeywords: [
      "chiropractic website design",
      "chiropractic clinic website",
      "chiropractor web design",
      "physical therapy website design",
    ],
    answer:
      "A chiropractic website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers conditions you treat, new patient offers, insurance accepted, online booking, and keeps health claims within what regulators and advertising standards allow.",
    intro:
      "Chiropractic sites get into trouble in one specific way: claims. Getting the language right protects the practice and still converts.",
    deliverables: [
      {
        title: "Conditions treated",
        description:
          "Organised by what patients search — back pain, sciatica, neck pain — not by technique names.",
        icon: "Network",
      },
      {
        title: "Careful claim language",
        description:
          "Describing what you do and what patients report, without claiming outcomes you cannot substantiate.",
        icon: "ShieldCheck",
      },
      {
        title: "New patient offer",
        description:
          "The consultation or first-visit offer given prominence, since it is the main conversion.",
        icon: "Target",
      },
      {
        title: "Insurance and payment",
        description:
          "Plans accepted, cash rates and payment plans, stated clearly.",
        icon: "Receipt",
      },
      {
        title: "Online booking",
        description:
          "Connected to your practice system so availability is real and the front desk is not double-booked.",
        icon: "CalendarCheck",
      },
      {
        title: "Accessible build",
        description:
          "Patients in pain often use larger text and assistive technology. The site needs to work for them.",
        icon: "Accessibility",
      },
    ],
    sections: [
      {
        heading: "How should health claims be worded?",
        answer:
          "Describe the treatment and what patients commonly report, rather than promising a clinical outcome.",
        body: [
          {
            type: "table",
            head: ["Risky", "Safer"],
            rows: [
              ["Cures sciatica", "Commonly used to help manage sciatica symptoms"],
              ["Fixes your posture permanently", "Assessment and treatment aimed at improving posture"],
              ["Eliminates the need for surgery", "Some patients explore conservative care before considering surgery"],
              ["Treats migraines", "Patients often seek care for headache and migraine symptoms"],
            ],
          },
          {
            type: "callout",
            title: "We build what your compliance guidance says",
            text: "We are not qualified to advise on what claims your board or the FTC permits. We write to the guidance you or your association provide, and we will flag wording that looks like a common risk area.",
          },
        ],
      },
      {
        heading: "What do new chiropractic patients want to know?",
        body: [
          {
            type: "list",
            items: [
              "Whether their specific problem is something you treat.",
              "What actually happens in a first appointment, including whether they will be adjusted that day.",
              "Whether it hurts. People genuinely worry about this and rarely ask.",
              "What it costs, with and without insurance.",
              "How many visits are typically involved, which is the main hesitation.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we run a new patient special on the site?",
        answer:
          "Yes, and it usually works well. Check your state board rules on advertised discounts and insurance interaction first — some states restrict offers for insured patients specifically.",
      },
      {
        question: "Can patients book online?",
        answer:
          "Yes, connected to systems like ChiroTouch, Jane or Genesis where they support online scheduling. Otherwise we use a request form your front desk confirms.",
      },
      {
        question: "Should we write blog posts about conditions?",
        answer:
          "Condition pages, yes — those rank and convert. A general blog only if someone will maintain it. One good page about sciatica beats twenty thin posts.",
      },
    ],
    related: ["physical-therapy-website", "medical-practice-website", "dental-practice-website"],
  },

  {
    slug: "physical-therapy-website",
    eyebrow: "Physical therapy",
    title: "Physical therapy clinic website design",
    seoTitle: "Physical Therapy Website Design | ROVQIX",
    description:
      "Websites for physical therapy clinics — conditions and specialisms, direct access information, insurance, referrals and appointment requests.",
    excerpt: "Conditions, direct access rules and insurance — the three things patients check.",
    primaryKeyword: "physical therapy website design",
    secondaryKeywords: [
      "physiotherapy website design",
      "pt clinic website",
      "rehab clinic website",
      "sports therapy website",
    ],
    answer:
      "A physical therapy clinic website from ROVQIX costs $749 to $1,290 and takes one to two weeks. It covers conditions and specialisms, whether patients need a referral in your state, insurance accepted, and appointment requests.",
    intro:
      "Most PT enquiries stall on one question the website never answers: do I need a doctor's referral first?",
    deliverables: [
      {
        title: "Direct access explained",
        description:
          "Whether patients can come without a referral in your state, and what the limits are. Rarely explained well.",
        icon: "FileText",
      },
      {
        title: "Conditions and specialisms",
        description:
          "Sports injury, post-surgical, vestibular, pelvic health. Patients search by their specific problem.",
        icon: "Network",
      },
      {
        title: "Insurance and self-pay",
        description:
          "Plans accepted, visit limits and cash rates, which matter enormously in this category.",
        icon: "Receipt",
      },
      {
        title: "Referral information for doctors",
        description:
          "A simple page physicians can use to refer, which is a major source of patients.",
        icon: "Handshake",
      },
      {
        title: "Therapist credentials",
        description:
          "Specialist certifications, which genuinely differentiate clinics in this field.",
        icon: "BadgeCheck",
      },
      {
        title: "Accessible build",
        description:
          "Patients with mobility and vision limitations are a large share of your visitors.",
        icon: "Accessibility",
      },
    ],
    sections: [
      {
        heading: "Why explain direct access so prominently?",
        answer:
          "Because many patients assume they need a referral and never enquire.",
        body: [
          {
            type: "p",
            text: "Every US state permits some form of direct access to physical therapy, but the conditions vary — visit limits, time limits, and rules about which insurers will pay without a referral. Most clinic websites say nothing about it.",
          },
          {
            type: "list",
            items: [
              "State plainly whether a patient can book without seeing a doctor first.",
              "Explain any visit or time limit before a referral becomes necessary.",
              "Note that insurance may still require a referral even where state law does not.",
              "Give a clear next step for someone who does have a referral already.",
            ],
          },
          {
            type: "callout",
            title: "Check your current rules",
            text: "Direct access rules change and vary by state and payer. We build to what you tell us; confirm the specifics with your state association before publishing.",
          },
        ],
      },
      {
        heading: "How do you attract physician referrals?",
        body: [
          {
            type: "list",
            items: [
              "A dedicated referral page with your fax, secure email and referral form.",
              "Clear statement of specialisms and certifications, which is what a referring physician screens on.",
              "Turnaround expectations — how fast you can see a referred patient.",
              "Clinician profiles with credentials, since referrals are made to people.",
              "Keep it short. Referring offices scan; they do not read.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can patients request appointments online?",
        answer:
          "Yes, as a request your front desk confirms, or connected to your practice system if it supports scheduling. Requests are common here because insurance needs verifying first.",
      },
      {
        question: "Should we list cash rates?",
        answer:
          "If you take self-pay patients, yes. It is a growing segment, particularly for sports and performance work, and those patients specifically search for clinics that publish rates.",
      },
      {
        question: "Can we handle intake forms on the site?",
        answer:
          "We link to your practice management system's secure forms rather than collecting health information through a plain website form. That keeps the data where it belongs.",
      },
    ],
    related: ["chiropractor-website", "medical-practice-website", "personal-trainer-website"],
  },

  {
    slug: "veterinary-clinic-website",
    eyebrow: "Veterinarians",
    title: "Veterinary clinic website design",
    seoTitle: "Veterinary Clinic Website Design | ROVQIX",
    description:
      "Websites for veterinary practices — services, emergency information, new client registration, appointment requests and clear pricing guidance.",
    excerpt: "Emergency info that is findable at 2am, plus services and registration.",
    primaryKeyword: "veterinary website design",
    secondaryKeywords: [
      "vet clinic website",
      "veterinary practice website",
      "animal hospital website",
      "vet website design",
    ],
    answer:
      "A veterinary clinic website from ROVQIX costs $749 to $1,290 and takes one to two weeks. The priorities are emergency information that is instantly findable, services and pricing guidance, new client registration and appointment requests.",
    intro:
      "A meaningful share of veterinary website visits happen when someone is frightened about their animal. Design for that visitor first.",
    deliverables: [
      {
        title: "Emergency information first",
        description:
          "Out-of-hours number and nearest emergency hospital, reachable in one tap from every page.",
        icon: "Zap",
      },
      {
        title: "Services and species",
        description:
          "What you treat and which animals you see, since not every practice takes exotics or large animals.",
        icon: "HeartPulse",
      },
      {
        title: "Pricing guidance",
        description:
          "Consultation fee and common procedure ranges. Cost anxiety is a real barrier to people bringing animals in.",
        icon: "Receipt",
      },
      {
        title: "New client registration",
        description:
          "A form that captures pet details before the first visit, saving time at the desk.",
        icon: "ClipboardList",
      },
      {
        title: "Appointment requests",
        description:
          "Connected to your practice system, with urgent cases routed to phone rather than a form.",
        icon: "CalendarCheck",
      },
      {
        title: "Team and facilities",
        description:
          "Vets, nurses and the practice itself. People are trusting you with a family member.",
        icon: "Users",
      },
    ],
    sections: [
      {
        heading: "Why does emergency information come first?",
        answer:
          "Because the most stressed visitor to your site is the one who needs an answer in ten seconds.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "An emergency banner or bar visible on every page, not buried in a contact page.",
              "The out-of-hours number as a tap-to-call link, since they are on a phone.",
              "The nearest 24-hour emergency hospital named, with a map link, even though it is a competitor.",
              "A short list of what counts as an emergency, so people do not hesitate when they should not.",
              "Clear statement of your own opening hours right next to it.",
            ],
          },
          {
            type: "callout",
            title: "Send people to the emergency hospital",
            text: "Naming the local 24-hour hospital on your site feels like sending business away. It is the single most trust-building thing a veterinary website can do, and those clients come back to you for routine care.",
          },
        ],
      },
      {
        heading: "Should veterinary prices be published?",
        body: [
          {
            type: "p",
            text: "At least the consultation fee, and ranges for common procedures like vaccinations, neutering and dentals. Cost uncertainty genuinely stops people bringing animals in, which is bad for the animal and for you.",
          },
          {
            type: "p",
            text: "Ranges with a note that a proper quote follows examination is honest and standard. It also reduces the number of phone calls that are purely price checks.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can clients request appointments online?",
        answer:
          "Yes, as a request your team confirms. We deliberately route anything urgent to a phone number instead, because a form is the wrong channel for a sick animal.",
      },
      {
        question: "Can we integrate with our practice management system?",
        answer:
          "Where systems like ezyVet, Cornerstone or Provet Cloud offer online booking or client portals, we link to them. Deeper integration is possible but usually beyond a starter site.",
      },
      {
        question: "Should we have a pet care blog?",
        answer:
          "A few genuinely useful pages — vaccination schedules, what to do if your pet eats something, seasonal hazards — earn steady search traffic. A general blog nobody updates does not.",
      },
    ],
    related: ["medical-practice-website", "pet-grooming-website", "dental-practice-website"],
  },
];

export const localPersonalCarePages = makeLocalPages(specs);
