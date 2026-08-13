import type { Article } from "@/lib/content/types";

/**
 * Small business owner audience — shop owners, trades, local services.
 *
 * Different voice from the technical clusters: no jargon, short sentences,
 * and a direct answer in the first paragraph. These readers are looking for
 * one specific answer, not a comprehensive guide.
 */
export const smallBusinessArticles: Article[] = [
  {
    slug: "why-isnt-my-website-showing-on-google",
    title: "Why isn't my website showing up on Google?",
    seoTitle: "Why Isn't My Website Showing Up on Google?",
    description:
      "The real reasons a small business website does not appear in Google — from being brand new to being accidentally blocked — and how to check each one.",
    excerpt:
      "Work through these seven checks in order. One of them is almost always the answer.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "website not showing on google",
    secondaryKeywords: [
      "why is my site not on google",
      "website not indexed",
      "google can't find my website",
      "how to get website on google",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "The most common reasons are that the site is too new (Google takes days to weeks), it is accidentally blocked by a noindex tag or robots.txt, it has never been submitted to Google Search Console, or it is indexed but ranking too low to see. Search your exact domain name first — if it appears, you are indexed and the problem is ranking, not indexing.",
    takeaways: [
      "Search your exact domain first. That tells you if it is an indexing or a ranking problem.",
      "New sites take days to weeks. This is normal and nothing is broken.",
      "A 'discourage search engines' setting left on is the single most common cause.",
      "For local businesses, your Google Business Profile matters more than the website.",
      "Being indexed is not the same as ranking. They are separate problems with separate fixes.",
    ],
    sections: [
      {
        heading: "First, find out if you are indexed at all",
        answer:
          "Type your full domain into Google. If your site appears, you are indexed and the issue is ranking.",
        body: [
          {
            type: "p",
            text: "Search for your exact web address — for example yourbusiness.com. If your site comes up, Google knows about it. That changes the problem entirely: you are not invisible, you are just not ranking for the searches you care about.",
          },
          {
            type: "p",
            text: "If nothing comes up at all, Google has not indexed the site and you need to work through the checks below.",
          },
        ],
      },
      {
        heading: "The seven most common causes",
        body: [
          {
            type: "table",
            head: ["Cause", "How to check", "Fix"],
            rows: [
              ["Site is brand new", "Launched under 4 weeks ago", "Wait, and submit to Search Console"],
              ["Search engines discouraged", "A setting in WordPress or your builder", "Turn it off"],
              ["noindex tag", "Ask your developer, or check page source", "Remove it"],
              ["Blocked in robots.txt", "Visit yourbusiness.com/robots.txt", "Remove the block"],
              ["Never submitted", "No Search Console account", "Set one up and submit your sitemap"],
              ["Indexed but low ranking", "Domain search works", "Content and reviews, not indexing"],
              ["Wrong domain indexed", "An old or staging site appears", "Redirect the old one"],
            ],
          },
          {
            type: "callout",
            title: "The 'discourage search engines' checkbox",
            text: "WordPress and most builders have a setting that hides your site from search engines, meant for sites still being built. It is very often left switched on after launch. Check it first — it takes ten seconds and it is the answer more often than anything else.",
          },
        ],
      },
      {
        heading: "How long should a new website take to appear?",
        body: [
          {
            type: "list",
            items: [
              "A few days to a few weeks for a brand new site, once Google finds it.",
              "Faster if you submit it through Google Search Console rather than waiting.",
              "Faster if another site already links to you, which gives Google a route in.",
              "Slower if the site has very little content, since there is less reason to prioritise it.",
              "If it has been more than a month with nothing, something is likely blocking it.",
            ],
          },
        ],
      },
      {
        heading: "Indexed but nobody finds you",
        answer:
          "This is a ranking problem, and for a local business it is usually solved on Google Business Profile rather than the website.",
        body: [
          {
            type: "p",
            text: "If your site appears when you search your domain but not when you search 'plumber in [your town]', you are competing for that phrase against everyone else. That is normal and it is a different piece of work.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Set up and complete your Google Business Profile properly. For local searches this matters more than your website.",
              "Get reviews consistently. It is one of the strongest local ranking factors.",
              "Make sure each service you offer has its own page with real content.",
              "Include your town and service area naturally in your page text.",
              "Be patient. Local rankings move over months, not days.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I submit my site to Google?",
        answer:
          "Set up a free Google Search Console account, verify you own the site, and submit your sitemap — usually at yourbusiness.com/sitemap.xml. It takes about twenty minutes and it is the single most useful thing you can do.",
      },
      {
        question: "Do I have to pay Google to appear in search results?",
        answer:
          "No. Normal search results are free. Ads are separate and clearly labelled. Anyone charging you to 'submit your site to Google' is selling something you can do yourself for free.",
      },
      {
        question: "Why does my competitor rank above me?",
        answer:
          "Usually some combination of being closer to the searcher, having more reviews, having been established longer, or having more content. The first is outside anyone's control; the rest you can work on.",
      },
      {
        question: "I get emails saying my site is not on Google. Are they real?",
        answer:
          "Almost always spam, sent automatically to every domain. Check for yourself by searching your domain. Never buy SEO services from a cold email.",
      },
    ],
    references: [
      {
        label: "Google Search Central — how to get your site on Google",
        href: "https://developers.google.com/search/docs/fundamentals/get-on-google",
      },
    ],
    internalLinks: [
      { label: "Google Business Profile setup", href: "/local/google-business-profile-setup" },
      { label: "Local SEO starter", href: "/local/local-seo-starter" },
    ],
    related: ["how-to-get-more-google-reviews", "crawl-budget-and-indexing"],
  },

  {
    slug: "what-is-web-hosting",
    title: "What is web hosting, and what should you actually pay?",
    seoTitle: "What Is Web Hosting? A Plain-English Guide",
    description:
      "Web hosting explained without jargon — what it is, what it should cost for a small business site, and what you are being upsold.",
    excerpt:
      "Hosting is renting space for your website to live. Here is what it should actually cost.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "what is web hosting",
    secondaryKeywords: [
      "web hosting explained",
      "how much does hosting cost",
      "small business web hosting",
      "do i need hosting",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Web hosting is renting space on a computer that keeps your website online. For a small business website it should cost between $0 and $25 a month. Your domain name is separate and costs about $12 to $20 a year. If you are paying more than $50 a month for a simple brochure site, you are almost certainly being overcharged.",
    takeaways: [
      "Hosting and your domain name are two different things with two different bills.",
      "A small business site should cost $0–$25 a month to host.",
      "Modern static sites can often be hosted free.",
      "Make sure the domain is registered in your name, not your developer's.",
      "'Unlimited' hosting is a marketing term, not a technical one.",
    ],
    sections: [
      {
        heading: "What is hosting, in plain terms?",
        answer:
          "It is renting space on a computer that is always switched on, so people can reach your website.",
        body: [
          {
            type: "p",
            text: "Your website is a set of files. Those files have to sit on a computer that is connected to the internet all the time. Renting space on that computer is hosting. That is genuinely all it is.",
          },
          {
            type: "table",
            head: ["Thing", "What it is", "Typical cost"],
            rows: [
              ["Domain name", "Your address — yourbusiness.com", "$12–$20 a year"],
              ["Hosting", "Where the files live", "$0–$25 a month"],
              ["Email", "name@yourbusiness.com", "$6–$7 per person a month"],
              ["SSL certificate", "The padlock in the browser", "Should be free"],
            ],
          },
        ],
      },
      {
        heading: "What should a small business actually pay?",
        body: [
          {
            type: "list",
            items: [
              "A simple brochure or one-page site: often free, or a few dollars a month.",
              "A WordPress site: $10–$25 a month for decent shared hosting.",
              "A busy site with a shop: $25–$80 a month depending on traffic.",
              "A site built as static files: frequently $0, because free tiers cover small business traffic easily.",
              "If you are paying over $50 a month for a five-page site, ask what you are getting.",
            ],
          },
          {
            type: "callout",
            title: "Cheap hosting is usually fine",
            text: "For a small business site with modest traffic, budget hosting genuinely works. The place cheap hosting hurts is speed and support — worth paying a little more for, but not $100 a month.",
          },
        ],
      },
      {
        heading: "What are you being upsold?",
        body: [
          {
            type: "table",
            head: ["Upsell", "Do you need it?"],
            rows: [
              ["SSL certificate", "No — it should be included free"],
              ["Domain privacy", "Often worth a few dollars, sometimes included"],
              ["Site backup add-on", "Should be included, or use a free plugin"],
              ["'SEO tools' bundle", "No"],
              ["Dedicated IP address", "Almost never for a small site"],
              ["Premium support tier", "Only if you genuinely need phone support"],
              ["Unlimited everything", "Marketing language, not a real feature"],
            ],
          },
        ],
      },
      {
        heading: "The one thing that really matters",
        body: [
          {
            type: "p",
            text: "Make sure the domain name is registered in your name and your email address — not your web designer's. This is the single most important detail in this whole article.",
          },
          {
            type: "p",
            text: "If a developer registers your domain under their own account and later becomes unreachable, you can lose your web address and your business email. It happens regularly and it is entirely avoidable.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I move hosts if I am unhappy?",
        answer:
          "Yes, and it is a normal thing to do. Your domain stays yours and points wherever you tell it. Moving a small site typically takes an hour or two.",
      },
      {
        question: "Is free hosting safe to use?",
        answer:
          "Legitimate free tiers from established providers are genuinely fine for small sites. Avoid anything that puts advertising on your pages or does not let you use your own domain.",
      },
      {
        question: "Do I need hosting if I use Squarespace or Wix?",
        answer:
          "No — hosting is included in their monthly fee. You are paying for the builder and the hosting together, which is part of why those subscriptions cost more than hosting alone.",
      },
      {
        question: "What does 'downtime' mean and should I worry?",
        answer:
          "It means your site is unreachable. Any decent host is up more than 99.9% of the time. It only becomes worth worrying about if customers start telling you the site is down.",
      },
    ],
    references: [
      {
        label: "ICANN — information for domain name registrants",
        href: "https://www.icann.org/resources/pages/registrants-2019-04-16-en",
      },
    ],
    internalLinks: [
      { label: "Business email and domain setup", href: "/local/business-email-and-domain-setup" },
      { label: "Website care plans", href: "/local/website-care-plan" },
    ],
    related: ["choosing-a-hosting-provider", "what-should-a-small-business-website-cost"],
  },

  {
    slug: "how-to-get-more-google-reviews",
    title: "How to get more Google reviews (without breaking the rules)",
    seoTitle: "How to Get More Google Reviews",
    description:
      "A practical routine for collecting Google reviews consistently, what you are not allowed to do, and how to handle a bad one.",
    excerpt:
      "Two reviews a week beats twenty once. Here is the routine that actually works.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to get more google reviews",
    secondaryKeywords: [
      "get customer reviews",
      "ask for reviews",
      "google review link",
      "respond to bad reviews",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Ask in person at the moment the customer is happiest, then immediately send them your short Google review link by text. Make it a routine rather than a campaign — two reviews a week compounds far better than an occasional push. Never offer discounts or incentives for reviews; that breaks Google's policy and risks your listing.",
    takeaways: [
      "The short review link is the whole trick. Extra steps lose people.",
      "Ask in person, then send the link by text within a minute.",
      "Consistency beats volume. Two a week is excellent.",
      "Never incentivise reviews. It violates policy and can get reviews removed.",
      "Reply to every review, especially the negative ones.",
    ],
    sections: [
      {
        heading: "Get your short review link",
        answer:
          "Google gives every business a short link that opens the review box directly. Use only that.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open your Google Business Profile.",
              "Find the 'Ask for reviews' or 'Get more reviews' option.",
              "Copy the short link it gives you.",
              "Save it as a text shortcut on your phone so it is one tap to send.",
              "Put it on receipts, invoices and your email signature.",
            ],
          },
          {
            type: "callout",
            title: "Why the short link matters so much",
            text: "Asking someone to 'find us on Google and leave a review' loses most people at the search step. The short link opens the review box directly. That single difference roughly doubles the number you get.",
          },
        ],
      },
      {
        heading: "When to ask",
        body: [
          {
            type: "list",
            items: [
              "Immediately after a customer says something positive. That is the moment.",
              "At the end of a job when the customer is visibly pleased with the result.",
              "After a problem you fixed well — these customers are often the most willing.",
              "Never before the work is finished.",
              "Never repeatedly to the same person.",
            ],
          },
          {
            type: "p",
            text: "The phrasing matters less than the timing and the link. Something like 'It would really help us if you could leave a quick review — I'll text you the link now' works fine.",
          },
        ],
      },
      {
        heading: "What you are not allowed to do",
        body: [
          {
            type: "table",
            head: ["Not allowed", "Why it matters"],
            rows: [
              ["Offering discounts for reviews", "Violates Google policy; reviews can be removed"],
              ["Entering reviewers into a prize draw", "Same problem — it is an incentive"],
              ["Only asking happy customers selectively", "Called review gating; against policy"],
              ["Writing reviews yourself", "Fraudulent, and often detected"],
              ["Buying reviews", "Detected, removed, and can suspend your listing"],
              ["Asking staff to review", "Against policy and obvious to readers"],
            ],
          },
          {
            type: "callout",
            title: "The risk is your whole listing",
            text: "Google can remove reviews and, in serious cases, suspend a business profile. For a local business that listing is often the main source of customers, so it is not worth the risk for a handful of extra stars.",
          },
        ],
      },
      {
        heading: "How to handle a bad review",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Wait a few hours. Do not reply angry.",
              "Reply publicly, briefly and politely. You are writing for everyone else reading, not for the reviewer.",
              "Acknowledge the specific issue rather than being defensive.",
              "Offer to sort it out offline, with a direct contact.",
              "Do not argue, and never share private details about the customer.",
              "Then go and get three good reviews, which does more than the reply.",
            ],
          },
          {
            type: "p",
            text: "A calm, human reply to a bad review often reads better to future customers than the review itself reads badly. A page of perfect five-star reviews with no responses actually looks less trustworthy.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many reviews do I need?",
        answer:
          "More than your closest competitors, and recent ones. Twenty recent reviews usually beats a hundred from four years ago, because recency is part of how they are weighed and how customers read them.",
      },
      {
        question: "Can I get a false review removed?",
        answer:
          "You can report reviews that break Google's policies — spam, off-topic, or from someone who was never a customer. Removal is not guaranteed. A genuine but negative review will not be removed.",
      },
      {
        question: "Should I reply to positive reviews too?",
        answer:
          "Yes, briefly. It shows you are engaged and it encourages others. A short, specific thank you is enough; it does not need to be long.",
      },
      {
        question: "Do reviews on other sites matter?",
        answer:
          "Google reviews matter most for most local businesses because they appear in the map results. Industry-specific sites can matter in some trades, but Google is the priority.",
      },
    ],
    references: [
      {
        label: "Google — prohibited and restricted content for reviews",
        href: "https://support.google.com/contributionpolicy/answer/7400114",
      },
    ],
    internalLinks: [
      { label: "Google Business Profile setup", href: "/local/google-business-profile-setup" },
      { label: "Local SEO starter", href: "/local/local-seo-starter" },
    ],
    related: ["why-isnt-my-website-showing-on-google", "how-to-choose-a-web-designer"],
  },

  {
    slug: "what-should-a-small-business-website-cost",
    title: "What should a small business website cost?",
    seoTitle: "What Should a Small Business Website Cost?",
    description:
      "Honest price brackets for a small business website, what each one buys, and the warning signs of a quote that is too cheap.",
    excerpt:
      "Three real price brackets, and how to tell which one your business actually needs.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "small business website cost",
    secondaryKeywords: [
      "how much should a website cost",
      "website price small business",
      "cheap website warning signs",
      "website quote comparison",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Building it yourself on a builder costs $0 to $300 plus $16 to $40 a month. A template-based site built for you costs $349 to $1,290. A fully custom design and build starts around $2,500. Most local shops, salons and trades need the middle option, and the biggest hidden cost in the DIY route is 20 to 60 hours of your own time.",
    takeaways: [
      "Three real brackets: DIY, template built for you, and custom.",
      "Most local businesses need the middle one.",
      "DIY is not free — budget 20 to 60 hours of your time.",
      "A quote far below the others usually means missing scope.",
      "Always confirm the domain will be registered in your name.",
    ],
    sections: [
      {
        heading: "The three brackets",
        body: [
          {
            type: "table",
            head: ["", "DIY builder", "Template, built for you", "Custom"],
            rows: [
              ["Upfront", "$0 – $300", "$349 – $1,290", "$2,500+"],
              ["Monthly", "$16 – $40", "$0 – $99", "$0 – $99"],
              ["Your time", "20–60 hours", "About 2 hours", "5–15 hours"],
              ["Live in", "Weeks, your pace", "About 1 week", "4–9 weeks"],
              ["Looks unique?", "Not really", "Reasonably", "Yes"],
              ["Best for", "Tight budget, spare time", "Most local businesses", "Brand is the differentiator"],
            ],
          },
          {
            type: "callout",
            title: "The middle bracket barely gets discussed",
            text: "Most advice online presents a choice between doing it yourself and paying an agency several thousand. For a barber, café or plumber, a template adapted properly by someone else is the option that actually fits — and it is rarely mentioned.",
          },
        ],
      },
      {
        heading: "Warning signs in a cheap quote",
        body: [
          {
            type: "list",
            items: [
              "The domain will be registered in their name, not yours.",
              "You cannot get a copy of the site if you leave.",
              "There is a monthly fee with no clear list of what it covers.",
              "The quote does not say how many pages or what is included.",
              "There is no mention of who writes the content.",
              "You cannot see examples of sites they have actually built.",
              "They cannot tell you what happens if their estimate is wrong.",
            ],
          },
          {
            type: "p",
            text: "A $200 website is not automatically bad. A $200 website where you do not own the domain and cannot leave is a rental with an exit fee attached.",
          },
        ],
      },
      {
        heading: "Working out what you need",
        answer:
          "Compare the cost against what one new customer is worth to you.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Work out roughly what a new customer is worth over a year.",
              "Divide the website cost by that. That is how many customers it needs to bring in.",
              "For most trades, a $500 site pays for itself with a handful of jobs.",
              "If you have spare evenings and a tight budget, build it yourself.",
              "If you have no time, the template route is almost always the better value.",
              "Only go custom if looking distinctive genuinely changes what you can charge.",
            ],
          },
        ],
      },
      {
        heading: "The costs people forget",
        body: [
          {
            type: "table",
            head: ["Cost", "Typical"],
            rows: [
              ["Domain name", "$12–$20 a year"],
              ["Business email", "$6–$7 per person a month"],
              ["Hosting", "$0–$25 a month"],
              ["Photography", "$0 if you shoot it, $300–$800 if not"],
              ["Content writing", "$0 if you write it, $300–$1,500 if not"],
              ["Ongoing maintenance", "$0–$99 a month"],
            ],
          },
          {
            type: "p",
            text: "Photography and content are the two that hold projects up most often. Neither has to cost money if you are willing to do them, but both take time you should plan for.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a $200 website worth it?",
        answer:
          "It can be, if it is honest about being a template and you own the domain. Be careful of anything at that price that locks you in or where you cannot take the site with you.",
      },
      {
        question: "Why do agencies quote $5,000 for something similar?",
        answer:
          "They are usually quoting custom design, discovery and multiple revision rounds. That is real work and it suits some businesses. For a local shop it is often more than the job needs.",
      },
      {
        question: "Should I pay monthly or once?",
        answer:
          "Either works. Just make sure that if you stop paying, you keep the domain and can take the site elsewhere. A monthly fee you cannot leave is the arrangement to avoid.",
      },
      {
        question: "What is the cheapest thing that would actually help?",
        answer:
          "Setting up your Google Business Profile properly. It is free, takes an afternoon, and for most local businesses it brings in more customers than the website does.",
      },
    ],
    references: [
      {
        label: "Google Business Profile — official help",
        href: "https://support.google.com/business/",
      },
    ],
    internalLinks: [
      { label: "Small business website cost guide", href: "/cost/small-business-website-cost" },
      { label: "Starter template or custom build?", href: "/compare/starter-vs-custom-website" },
    ],
    related: ["how-to-choose-a-web-designer", "what-is-web-hosting"],
  },

  {
    slug: "how-to-choose-a-web-designer",
    title: "How to choose a web designer (and what to ask them)",
    seoTitle: "How to Choose a Web Designer: 10 Questions",
    description:
      "The questions to ask before hiring anyone to build your website, the answers that should worry you, and how to compare quotes fairly.",
    excerpt:
      "Ten questions. The answers to three of them tell you almost everything.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to choose a web designer",
    secondaryKeywords: [
      "questions to ask a web designer",
      "hiring a website developer",
      "web designer red flags",
      "compare website quotes",
    ],
    authorId: "harshal",
    publishedAt: "2026-08-13",
    answer:
      "Ask three questions before anything else: will the domain be registered in my name, what exactly is included, and what happens if your estimate is wrong. The answers separate a professional from someone who will cause you problems, and they matter far more than portfolio quality or price.",
    takeaways: [
      "Domain ownership is the single most important question. Ask it first.",
      "A quote without a page and feature list will change later.",
      "Ask what happens when the estimate is wrong. The answer is revealing.",
      "Cheapest quote usually means missing scope, not better value.",
      "Ask to speak to a client whose project went badly.",
    ],
    sections: [
      {
        heading: "The three questions that matter most",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Will the domain name be registered in my name, on my email? The only acceptable answer is yes. If the domain sits in their account and they disappear, you lose your web address and your business email.",
              "Exactly what is included? You want a list of pages and features, not a description of an outcome. Vague scope always becomes extra charges later.",
              "What happens if your estimate is wrong? 'We absorb it' means they priced honestly. 'We'd raise a change request' means the quote is an opening position.",
            ],
          },
          {
            type: "callout",
            title: "Ask the domain question first",
            text: "It takes ten seconds and it filters out a real category of problem. Losing a domain is far worse than a mediocre website, because it takes your email and your search presence with it.",
          },
        ],
      },
      {
        heading: "The other seven questions",
        body: [
          {
            type: "list",
            items: [
              "Who writes the content, and what happens to the timeline if it is late?",
              "How many rounds of changes are included, and what does an extra round cost?",
              "Can I edit the site myself afterwards, or do I have to come back to you?",
              "What happens after launch — is there support, and for how long?",
              "Can I see three sites you built for businesses like mine?",
              "If I want to leave in two years, what do I take with me?",
              "Can I speak to a client whose project ran into trouble?",
            ],
          },
          {
            type: "p",
            text: "That last one is the most revealing. Everyone has had a difficult project. How they describe it — and whether they will let you speak to that client — tells you more than any portfolio.",
          },
        ],
      },
      {
        heading: "How to compare quotes fairly",
        body: [
          {
            type: "table",
            head: ["Compare", "Not"],
            rows: [
              ["Number of pages included", "The headline price"],
              ["Who writes the content", "How nice the portfolio looks"],
              ["Rounds of revisions", "How quickly they replied"],
              ["What happens after launch", "Whether they seem friendly"],
              ["Domain and account ownership", "Their own website's design"],
              ["What is explicitly excluded", "Vague promises about SEO"],
            ],
          },
          {
            type: "callout",
            title: "The cheapest quote is rarely the cheapest job",
            text: "A quote significantly below the others usually has scope missing that will come back as change requests once you are committed. Compare the inclusions line by line before comparing the numbers.",
          },
        ],
      },
      {
        heading: "Warning signs",
        body: [
          {
            type: "list",
            items: [
              "They guarantee first place on Google. Nobody can, and saying so is a lie.",
              "They will not put the scope in writing.",
              "The domain or hosting goes in their name.",
              "There is a monthly fee with no clear list of what it covers.",
              "They cannot show you sites they have actually built.",
              "They pressure you to sign quickly.",
              "They contacted you first by cold email or cold call.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use a local designer?",
        answer:
          "It can help for photography and in-person meetings, but it is not essential. Good written communication matters far more than proximity. Judge on the answers to the questions above, not the postcode.",
      },
      {
        question: "Freelancer or agency?",
        answer:
          "A freelancer is usually cheaper and fine for a straightforward site. An agency costs more and gives you continuity if someone is unavailable. For a project under about $5,000, a good freelancer is often better value.",
      },
      {
        question: "How do I know if the price is fair?",
        answer:
          "Get three quotes with the same written brief. If one is dramatically lower, ask what is excluded rather than assuming it is a bargain.",
      },
      {
        question: "What if I already have a bad website from someone else?",
        answer:
          "First check who owns the domain and whether you can get access. Once you have control, a refresh is often cheaper than a rebuild — get someone to look before assuming you need to start over.",
      },
    ],
    references: [
      {
        label: "ICANN — registrant rights and responsibilities",
        href: "https://www.icann.org/resources/pages/registrants-2019-04-16-en",
      },
    ],
    internalLinks: [
      { label: "Website rescue service", href: "/local/website-rescue-service" },
      { label: "DIY or hire someone?", href: "/compare/diy-vs-hiring-a-web-designer" },
    ],
    related: ["what-should-a-small-business-website-cost", "scoping-a-website-project-that-wont-blow-up"],
  },

  {
    slug: "should-i-put-prices-on-my-website",
    title: "Should you put prices on your website?",
    seoTitle: "Should You Put Prices on Your Website?",
    description:
      "When publishing prices brings in better enquiries, when it genuinely does not, and how to show pricing when every job is different.",
    excerpt:
      "Usually yes. Here is when it genuinely is not, and how to price when every job differs.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "should i put prices on my website",
    secondaryKeywords: [
      "publish prices website",
      "hide prices from website",
      "pricing page small business",
      "show pricing or not",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "For most small businesses, yes. Publishing prices — even as ranges or a starting figure — filters out enquiries you were never going to win and stops you being assumed expensive. The main exception is genuinely bespoke work where the range is so wide a number would mislead, and even then a starting price usually helps.",
    takeaways: [
      "Hiding prices does not stop comparison. It removes you from it.",
      "A range or 'from' price works when exact pricing is impossible.",
      "Publishing filters out unviable enquiries before they cost you time.",
      "Customers assume hidden prices are high prices.",
      "State a minimum job size if you have one. It is kinder than declining later.",
    ],
    sections: [
      {
        heading: "What actually happens when you hide prices",
        answer:
          "People contact the businesses that published, and you never hear from them.",
        body: [
          {
            type: "p",
            text: "The usual reasoning is that hiding price forces a conversation where you can sell value. That worked when customers had to phone around. Now they open five tabs, and the two that show pricing get considered.",
          },
          {
            type: "list",
            items: [
              "You are not in the comparison; you are excluded from it.",
              "The enquiries you do get include people whose budget is a fraction of your minimum.",
              "Your team spends time quoting jobs that were never viable.",
              "Customers assume hidden means expensive, which is often wrong.",
              "Competitors who publish look more confident and more honest.",
            ],
          },
        ],
      },
      {
        heading: "How to price when every job is different",
        body: [
          {
            type: "table",
            head: ["Situation", "What to publish"],
            rows: [
              ["Standard services", "Exact prices"],
              ["Varies by size", "Price per unit — per foot, per room, per pound"],
              ["Varies by condition", "A range, plus what moves it up"],
              ["Fully bespoke", "A 'starting from' figure"],
              ["Callout work", "Your callout or diagnostic fee at minimum"],
              ["Genuinely unquotable", "A typical project range, honestly labelled"],
            ],
          },
          {
            type: "callout",
            title: "'From $X' is almost always possible",
            text: "Even for bespoke work, you know what your smallest realistic job costs. Publishing that one number filters out most unviable enquiries without committing you to anything.",
          },
        ],
      },
      {
        heading: "When hiding prices is genuinely reasonable",
        body: [
          {
            type: "list",
            items: [
              "Prices move with commodity or market rates, like a butcher or a metal fabricator.",
              "Pricing is contractually negotiated per client, as in some commercial work.",
              "Regulated services where advertising price is restricted.",
              "Where the range is so wide the number would actively mislead — though a starting figure usually still helps.",
            ],
          },
          {
            type: "p",
            text: "Even in these cases, saying something is better than saying nothing. 'Most projects fall between X and Y' or 'call for current rates' both beat silence.",
          },
        ],
      },
      {
        heading: "How to present pricing well",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Put it where people can find it, not buried three clicks deep.",
              "Say what is included, since that is where quotes actually differ.",
              "State your minimum job size if you have one.",
              "Note what would increase the price, so nobody feels ambushed later.",
              "Keep it current. An out-of-date price list is worse than none.",
              "Add a line inviting a conversation for anything unusual.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Won't competitors see my prices?",
        answer:
          "They already know roughly what you charge — they can ring and ask, or their customers tell them. The benefit of publishing to customers outweighs the tiny disadvantage of competitor visibility.",
      },
      {
        question: "What if I want to charge different customers differently?",
        answer:
          "Publish a standard rate and handle exceptions privately. Most businesses do this. What you should avoid is having no public rate at all so that every quote is invented from scratch.",
      },
      {
        question: "Will publishing prices attract only cheap customers?",
        answer:
          "The opposite, usually. Clear pricing at a fair level filters out bargain hunters and reassures serious customers that you are established and consistent.",
      },
      {
        question: "How often should I update prices?",
        answer:
          "Whenever they change, and review them at least annually. Make sure whoever maintains the site can change a price in minutes without calling a developer.",
      },
    ],
    references: [
      {
        label: "Baymard Institute — pricing transparency research",
        href: "https://baymard.com/research",
      },
    ],
    internalLinks: [
      { label: "One-page website design", href: "/local/one-page-website-design" },
      { label: "Local business websites", href: "/local" },
    ],
    related: ["what-should-a-small-business-website-cost", "anatomy-of-a-converting-landing-page"],
  },

  {
    slug: "how-many-pages-does-a-small-business-website-need",
    title: "How many pages does a small business website need?",
    seoTitle: "How Many Pages Does a Small Business Site Need?",
    description:
      "Why most small businesses need fewer pages than they think, which pages genuinely earn their place, and when one page is enough.",
    excerpt:
      "Usually four to six. More pages is not better, and thin pages actively hurt.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how many pages does a website need",
    secondaryKeywords: [
      "small business website pages",
      "one page vs multi page website",
      "what pages should my website have",
      "website structure small business",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Most small businesses need four to six pages: home, services, about, contact, and a page for each main service worth ranking separately. A single-location business with one service can work well on one page. Adding pages with thin content makes the whole site perform worse, not better.",
    takeaways: [
      "Four to six pages suits most local businesses.",
      "One page per service you genuinely want more enquiries for.",
      "Thin pages drag down the whole site — fewer, better wins.",
      "One page is genuinely enough for some businesses.",
      "Never create a page per town. It is the classic mistake.",
    ],
    sections: [
      {
        heading: "The pages that earn their place",
        body: [
          {
            type: "table",
            head: ["Page", "Needed?", "Why"],
            rows: [
              ["Home", "Always", "What you do, where, and how to contact you"],
              ["Services", "Usually", "Overview, linking to individual services"],
              ["Individual service pages", "For your main 2–5", "Each ranks for its own search"],
              ["About", "Usually", "Trust — especially for trades and personal services"],
              ["Contact", "Always", "Hours, map, form, phone"],
              ["Gallery", "If visual", "Essential for trades and beauty, pointless for others"],
              ["Pricing", "Usually", "Filters enquiries, builds trust"],
              ["Blog", "Only if maintained", "An abandoned blog looks worse than none"],
            ],
          },
        ],
      },
      {
        heading: "Why more pages is not better",
        answer:
          "Because thin, near-identical pages reduce the credibility of the whole site.",
        body: [
          {
            type: "list",
            items: [
              "A page with two paragraphs of generic text gives search engines nothing to rank.",
              "Near-duplicate pages compete with each other rather than helping.",
              "Every extra page is something else to keep up to date, and stale pages look bad.",
              "Visitors get lost in navigation that has more options than it needs.",
              "Search engines judge sites partly on overall quality, so weak pages drag on strong ones.",
            ],
          },
          {
            type: "callout",
            title: "The page-per-town mistake",
            text: "Creating forty pages that are identical except for the town name is a well-known pattern and search engines discount it. Make a page for an area only if you can write two hundred genuinely specific words about working there.",
          },
        ],
      },
      {
        heading: "When one page is enough",
        body: [
          {
            type: "list",
            items: [
              "You have one main service and one location.",
              "Customers mostly call rather than research at length.",
              "You do not plan to publish content.",
              "You want to be findable and credible rather than to rank for many searches.",
            ],
          },
          {
            type: "p",
            text: "The trade-off is that one page can really only rank for one main topic. If you want to appear separately for 'drain cleaning' and 'water heater repair', those need their own pages.",
          },
        ],
      },
      {
        heading: "How to decide",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "List the services you actually want more enquiries for. Usually two to five.",
              "Give each of those a real page with genuine detail.",
              "Add home, about and contact.",
              "Add a gallery if your work is visual.",
              "Add pricing unless you have a strong reason not to.",
              "Stop. Everything else can be a section rather than a page.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a blog?",
        answer:
          "Only if someone will genuinely write it. Three posts from two years ago look worse than no blog at all. For most local trades, good service pages and a maintained Google Business Profile do more.",
      },
      {
        question: "Should each service have its own page?",
        answer:
          "Each service you want more enquiries for, yes — people search the specific job, not 'services'. Minor services can be listed on one overview page.",
      },
      {
        question: "What about a page for each town I cover?",
        answer:
          "Only where you can write genuinely specific local content. A handful of real area pages beats forty near-identical ones, which search engines treat as low value.",
      },
      {
        question: "Can I add pages later?",
        answer:
          "Yes, and it is often the right approach — start with the essentials and add pages as you find out what people search for. Ask your developer to build it so extra pages are cheap to add.",
      },
    ],
    references: [
      {
        label: "Google Search Central — creating helpful content",
        href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
    internalLinks: [
      { label: "One-page website design", href: "/local/one-page-website-design" },
      { label: "Local SEO starter", href: "/local/local-seo-starter" },
    ],
    related: ["why-isnt-my-website-showing-on-google", "what-should-a-small-business-website-cost"],
  },

  {
    slug: "why-your-contact-form-isnt-working",
    title: "Why your contact form isn't working (and how to check)",
    seoTitle: "Why Your Contact Form Isn't Working",
    description:
      "Contact forms fail silently more often than any other part of a small business website. Here is how to test yours and what usually breaks.",
    excerpt:
      "Test your own form right now. A surprising number have not delivered an email in months.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "contact form not working",
    secondaryKeywords: [
      "website form not sending emails",
      "contact form going to spam",
      "test contact form",
      "website enquiries not coming through",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "Most broken contact forms are not broken at all — the emails are going to spam, or to an address nobody checks. Test yours by submitting a real enquiry from your phone, then check your inbox, your spam folder, and any shared inbox it might route to. If nothing arrives, the sending configuration is usually the cause.",
    takeaways: [
      "Test your own form today. It takes two minutes.",
      "Spam filtering is the most common cause, not a broken form.",
      "Forms often send to an old email address nobody monitors.",
      "Set up a copy to a second address as a safety net.",
      "Silent failure is the worst kind — you never know what you missed.",
    ],
    sections: [
      {
        heading: "Test it properly, right now",
        answer:
          "Submit a real enquiry from your phone on mobile data, then check every inbox it could reach.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open your website on your phone, with wifi off.",
              "Fill in the contact form as a customer would and submit it.",
              "Confirm you saw a success message. If nothing happened, that is your answer.",
              "Check the inbox it should arrive in.",
              "Check the spam folder. This is where it usually is.",
              "Check any shared or forwarded inbox it might route through.",
              "Wait ten minutes. Some forms queue and deliver slowly.",
            ],
          },
          {
            type: "callout",
            title: "Do this monthly",
            text: "Forms break silently when a host changes something, an email password changes, or a plugin updates. A two-minute test once a month catches it before you lose a month of enquiries.",
          },
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          {
            type: "table",
            head: ["Cause", "How common", "Fix"],
            rows: [
              ["Emails going to spam", "Very common", "Email authentication records"],
              ["Sending to an old address", "Common", "Update the form's destination"],
              ["Email password changed", "Common", "Update the sending credentials"],
              ["Form plugin broke on update", "Common on WordPress", "Reconfigure or replace"],
              ["Spam protection blocking real people", "Occasional", "Adjust the settings"],
              ["Form never configured at launch", "Occasional", "Configure it"],
            ],
          },
        ],
      },
      {
        heading: "Why forms end up in spam",
        body: [
          {
            type: "p",
            text: "Most contact forms send the email 'from' the visitor's address, through your website's server. To a spam filter that looks like forgery, because the server sending it is not authorised to send on that person's behalf.",
          },
          {
            type: "list",
            items: [
              "Send the form email from your own domain instead, with the visitor's address in the reply-to field.",
              "Set up SPF, DKIM and DMARC records for your domain so your mail is authenticated.",
              "Use a proper email sending service rather than the web host's basic mail function.",
              "Add the sending address to your contacts so your own filter learns it is safe.",
            ],
          },
          {
            type: "callout",
            title: "The reply-to trick",
            text: "Sending from your own address but setting reply-to as the visitor means the email arrives reliably, and hitting reply still goes to the customer. It fixes most spam problems in one change.",
          },
        ],
      },
      {
        heading: "Build in a safety net",
        body: [
          {
            type: "list",
            items: [
              "Send a copy to a second address, ideally on a different provider.",
              "Store submissions in the website itself as well as emailing them, so nothing is lost.",
              "Send the customer an automatic confirmation, so they know it worked.",
              "Show a clear success message rather than silently reloading the page.",
              "Display your phone number next to the form for anyone who would rather call.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How would I know if I am missing enquiries?",
        answer:
          "You often would not, which is what makes this so damaging. If enquiries dropped suddenly with no other explanation, test the form first before assuming it is a marketing problem.",
      },
      {
        question: "Should I use a form or just show my email address?",
        answer:
          "A form usually converts better and gives you structured information. Show your email and phone as well, since some people prefer them and it is a fallback if the form fails.",
      },
      {
        question: "Is spam protection worth having?",
        answer:
          "Yes, but keep it light. Aggressive protection blocks real customers, and a hidden field that catches bots is usually enough without making people solve puzzles.",
      },
      {
        question: "Can I get a text message when someone submits?",
        answer:
          "Yes, most form tools can send a text notification. For urgent trades where speed wins the job, it is genuinely worth setting up.",
      },
    ],
    references: [
      {
        label: "Google — email sender guidelines",
        href: "https://support.google.com/a/answer/81126",
      },
    ],
    internalLinks: [
      { label: "Website refresh service", href: "/local/website-refresh-service" },
      { label: "Business email and domain setup", href: "/local/business-email-and-domain-setup" },
    ],
    related: ["environment-variables-and-config", "why-isnt-my-website-showing-on-google"],
  },
];
