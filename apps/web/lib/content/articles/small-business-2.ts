import type { Article } from "@rovqix/shared/lib/content/types";

/** Small business cluster, batch 2. Same plain-English voice as batch 1. */
export const smallBusinessArticles2: Article[] = [
  {
    slug: "do-i-need-a-blog-for-my-business",
    title: "Does my small business need a blog?",
    seoTitle: "Does My Small Business Need a Blog?",
    description:
      "When a blog earns its keep for a local business, when it is a waste of time, and what to write instead if you have no time.",
    excerpt: "Usually no. An abandoned blog looks worse than none at all.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "does my business need a blog",
    secondaryKeywords: ["small business blog", "blog for local business", "is blogging worth it", "what to blog about"],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Most local service businesses do not need a blog. Three posts from two years ago look worse than no blog at all. What works better is a small set of genuinely useful pages answering the questions customers actually ask — written once and left alone rather than updated weekly.",
    takeaways: [
      "An abandoned blog damages credibility more than having none.",
      "Evergreen answer pages beat a dated post feed.",
      "Blogs work when you have a real content habit or a research-heavy service.",
      "For local trades, your Google Business Profile matters more.",
      "Write five useful pages, not fifty thin posts.",
    ],
    sections: [
      {
        heading: "When a blog genuinely helps",
        body: [
          {
            type: "list",
            items: [
              "Your customers research heavily before buying — solar, cosmetic procedures, financial services.",
              "You genuinely enjoy writing and will keep it up for years, not months.",
              "You sell nationally or online, where search traffic is your main channel.",
              "You have expertise nobody else in your area is publishing.",
              "Someone on your team has writing as an actual job responsibility.",
            ],
          },
          {
            type: "callout",
            title: "The two-year test",
            text: "Will you still be posting in two years? If the honest answer is no, do not start. A blog whose newest post is dated 2024 tells visitors the business may not still be running.",
          },
        ],
      },
      {
        heading: "What to do instead",
        answer: "Write a handful of permanent pages answering the questions you get asked on every call.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "List the ten questions customers ask you most often.",
              "Pick the five that people would search for before contacting anyone.",
              "Write a proper page for each — not a post, a page in your navigation.",
              "Keep them updated when something changes. That is the only maintenance.",
              "Link them from your service pages so visitors find them naturally.",
            ],
          },
          {
            type: "p",
            text: "These pages do not carry a date, so they never look stale. They answer real questions, so they rank. And they are finished once written, which is why they actually get done.",
          },
        ],
      },
      {
        heading: "If you do blog, do it properly",
        body: [
          {
            type: "list",
            items: [
              "Commit to a realistic frequency. Monthly is fine; sporadic is not.",
              "Write about what customers ask, not industry news nobody searches for.",
              "Longer, useful posts beat short frequent ones.",
              "Do not publish AI-written filler. It reads as filler and search engines discount it.",
              "Remove or update posts that have aged badly rather than leaving them.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will a blog help me rank on Google?",
        answer:
          "It can, if the posts genuinely answer searches people make. For a local plumber, a well-built service page and a strong Google Business Profile will do considerably more than a blog.",
      },
      {
        question: "Can I use AI to write blog posts?",
        answer:
          "You can, but unedited AI content tends to be generic and search engines are increasingly good at discounting it. Use it to draft from your own expertise, not to generate posts about topics you know nothing about.",
      },
      {
        question: "How often should I post?",
        answer:
          "Whatever you can genuinely sustain. Once a month forever beats weekly for two months then nothing.",
      },
      {
        question: "Should I delete an old abandoned blog?",
        answer:
          "Either update the best posts and remove the rest, or take the blog down and keep the useful content as permanent pages. Leaving it visibly abandoned is the worst option.",
      },
    ],
    references: [
      { label: "Google Search Central — creating helpful content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    internalLinks: [
      { label: "Local SEO starter", href: "/local/local-seo-starter" },
      { label: "Local business websites", href: "/local" },
    ],
    related: ["how-many-pages-does-a-small-business-website-need", "why-isnt-my-website-showing-on-google"],
  },

  {
    slug: "what-is-ssl-and-do-i-need-it",
    title: "What is SSL, and do I need it?",
    seoTitle: "What Is SSL and Do I Need It?",
    description:
      "The padlock in the browser explained — what SSL does, why every site needs it now, and why you should not be paying extra for it.",
    excerpt: "Yes, you need it. No, you should not be paying for it.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "what is ssl",
    secondaryKeywords: ["do i need ssl", "https for small business", "website not secure warning", "ssl certificate cost"],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "SSL is what puts the padlock in the browser and turns your address into https. It encrypts information travelling between your visitor and your website. Every site needs it — browsers now warn visitors on sites without it — and it should cost you nothing, because free certificates are standard.",
    takeaways: [
      "Every website needs SSL, even without a shop or forms.",
      "Without it, browsers show a 'not secure' warning to your visitors.",
      "It should be free. Hosts charging $80 a year are overcharging.",
      "It renews automatically once set up correctly.",
      "It is a minor search ranking factor, but the warning is the real issue.",
    ],
    sections: [
      {
        heading: "What it actually does",
        body: [
          {
            type: "p",
            text: "When someone fills in your contact form, the information travels across the internet to your website. Without SSL that information is readable by anyone who intercepts it. With SSL it is scrambled so only your site can read it.",
          },
          {
            type: "p",
            text: "The visible signs are a padlock icon in the browser and an address starting https rather than http.",
          },
        ],
      },
      {
        heading: "Why you need it even without a shop",
        answer: "Because browsers now actively warn visitors about sites without it.",
        body: [
          {
            type: "list",
            items: [
              "Chrome and other browsers display a 'Not secure' warning in the address bar.",
              "Some browsers show a full-page warning before letting people continue.",
              "It is a small positive ranking signal in Google.",
              "Contact forms send personal information, even if you take no payments.",
              "Customers notice the warning and it looks unprofessional.",
            ],
          },
          {
            type: "callout",
            title: "The warning is the real problem",
            text: "Most small businesses do not need encryption for security reasons alone. They need it because a visitor seeing 'Not secure' next to a business name assumes something is wrong and leaves.",
          },
        ],
      },
      {
        heading: "What it should cost",
        body: [
          {
            type: "table",
            head: ["Situation", "Cost"],
            rows: [
              ["Squarespace, Wix, Shopify", "Included"],
              ["Most modern hosts", "Free, via Let's Encrypt"],
              ["Cloudflare in front of your site", "Free"],
              ["Host charging $50–$150 a year", "Overcharging — ask for the free option"],
              ["Extended validation certificate", "Only for large financial institutions"],
            ],
          },
          {
            type: "p",
            text: "Free certificates from Let's Encrypt are the standard across the industry and are technically identical for a small business site. If your host insists you must pay, that is a reason to consider moving.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I check if I have SSL?",
        answer:
          "Open your site and look at the address bar. A padlock and https means you have it. 'Not secure' means you do not.",
      },
      {
        question: "Does SSL make my site safe from hackers?",
        answer:
          "No. It protects information in transit. It does nothing about weak passwords, outdated software or vulnerable plugins, which are how sites actually get compromised.",
      },
      {
        question: "Do I need to renew it?",
        answer:
          "Certificates expire, usually every 90 days for free ones, but renewal is automatic on any properly configured host. If yours expires visibly, something is misconfigured.",
      },
      {
        question: "Will switching to https hurt my rankings?",
        answer:
          "Not if done properly, with all http addresses redirected to https. Done badly it can cause duplicate-content issues, so it is worth having someone check the redirects.",
      },
    ],
    references: [
      { label: "Let's Encrypt — free certificates", href: "https://letsencrypt.org/" },
    ],
    internalLinks: [
      { label: "Website care plans", href: "/local/website-care-plan" },
      { label: "Website refresh service", href: "/local/website-refresh-service" },
    ],
    related: ["what-is-web-hosting", "how-to-back-up-your-website"],
  },

  {
    slug: "how-to-write-your-about-page",
    title: "How to write an about page that actually helps",
    seoTitle: "How to Write a Small Business About Page",
    description:
      "The about page is often the second most visited page on a small business site. Here is what to put on it and what to leave out.",
    excerpt: "It is not about you. It is about why someone should trust you.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to write an about page",
    secondaryKeywords: ["about us page small business", "about page examples", "what to write about page", "business about page tips"],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "An about page should answer why a stranger should trust you with their money. Include who actually does the work, how long you have been doing it, your qualifications or licences, and a real photograph. Leave out corporate language about passion and excellence — it says nothing and everyone uses it.",
    takeaways: [
      "It is the second most visited page on most small business sites.",
      "A real photo of a real person outperforms everything else on it.",
      "Specifics build trust. Adjectives do not.",
      "Include licences, qualifications and years operating.",
      "Write like you speak, not like a brochure.",
    ],
    sections: [
      {
        heading: "What to include",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Who you are, with a photograph of an actual person.",
              "How long you have been doing this, as a number of years.",
              "Qualifications, licences, insurance and certifications.",
              "Where you are based and the area you cover.",
              "Why you started, briefly, if there is a genuine reason.",
              "What makes you different, stated concretely rather than claimed.",
            ],
          },
          {
            type: "callout",
            title: "The photograph does most of the work",
            text: "A clear photograph of the person who will turn up beats any amount of writing. For trades and personal services it is the single highest-value element on the page.",
          },
        ],
      },
      {
        heading: "What to leave out",
        body: [
          {
            type: "table",
            head: ["Instead of", "Write"],
            rows: [
              ["'We are passionate about quality'", "'Every job is checked before we leave'"],
              ["'Committed to excellence'", "'We have been doing this for 14 years'"],
              ["'Customer-focused approach'", "'We answer the phone ourselves'"],
              ["'Industry-leading service'", "'Licensed, insured, and here since 2011'"],
              ["'Our journey began...'", "'I trained as an electrician in 2009'"],
            ],
          },
          {
            type: "p",
            text: "Every one of the left-hand phrases appears on thousands of websites. They are invisible to readers because they carry no information. The right-hand versions say something a competitor cannot copy.",
          },
        ],
      },
      {
        heading: "Length and structure",
        body: [
          {
            type: "list",
            items: [
              "Three to five short paragraphs is plenty for most businesses.",
              "Put the most important thing first — usually who you are and how long you have done this.",
              "Break it up with a photo and any credentials.",
              "End with a clear next step: call, book, or get a quote.",
              "Read it out loud. If you would not say it to a customer, rewrite it.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I write in first or third person?",
        answer:
          "First person for a sole trader or small team — it reads as human. Third person suits larger companies. Whichever you choose, be consistent across the site.",
      },
      {
        question: "Do I have to include a photo of myself?",
        answer:
          "For a trade or personal service, it genuinely helps. Customers are deciding whether to let you into their home. If you are uncomfortable, a photo of you working or of your team is a reasonable alternative.",
      },
      {
        question: "How long should it be?",
        answer:
          "Three hundred to five hundred words is usually plenty. Nobody reads a two-thousand word company history on a plumber's website.",
      },
      {
        question: "Should I mention my team?",
        answer:
          "If customers will meet them, yes — names and photos. It reassures people about who is turning up, which matters more than most owners realise.",
      },
    ],
    references: [
      { label: "Nielsen Norman Group — about us pages research", href: "https://www.nngroup.com/articles/" },
    ],
    internalLinks: [
      { label: "One-page website design", href: "/local/one-page-website-design" },
      { label: "Photos for your business website", href: "/local/small-business-photo-guide" },
    ],
    related: ["should-i-put-prices-on-my-website", "how-many-pages-does-a-small-business-website-need"],
  },

  {
    slug: "how-to-back-up-your-website",
    title: "How to back up your website (and actually test it)",
    seoTitle: "How to Back Up Your Small Business Website",
    description:
      "What to back up, how often, where to keep it, and why an untested backup is not a backup at all.",
    excerpt: "Most people have backups. Far fewer have ever tested restoring one.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to back up your website",
    secondaryKeywords: ["website backup small business", "restore website backup", "wordpress backup", "website disaster recovery"],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "Back up your website files and its database, at least weekly, stored somewhere other than the website's own server. Most importantly, test restoring one at least once — an untested backup is an assumption, and the moment you need it is the worst time to discover it does not work.",
    takeaways: [
      "Files and database are both needed. One without the other is useless.",
      "Store backups off the server. A server failure takes both otherwise.",
      "Test a restore at least once. Most people never do.",
      "Keep several versions, not just the most recent.",
      "Builders like Squarespace handle this for you.",
    ],
    sections: [
      {
        heading: "What needs backing up",
        body: [
          {
            type: "table",
            head: ["What", "Why", "Changes"],
            rows: [
              ["Website files", "Design, images, code", "Rarely"],
              ["Database", "Pages, posts, settings, orders", "Constantly"],
              ["Email", "Usually separate from the site", "Constantly"],
              ["Domain settings", "Where your site and email point", "Rarely"],
            ],
          },
          {
            type: "callout",
            title: "Files without the database is not a backup",
            text: "On WordPress and most content systems, your actual content lives in the database. A backup of just the files gives you an empty shell. Both are needed and they must be from the same point in time.",
          },
        ],
      },
      {
        heading: "How often, and where",
        body: [
          {
            type: "list",
            items: [
              "A brochure site that rarely changes: weekly is fine.",
              "A site with a blog or bookings: daily.",
              "A shop taking orders: daily at minimum, with the database more often.",
              "Keep at least 30 days of versions, so you can go back past a problem you noticed late.",
              "Store them somewhere other than the website's own server — cloud storage or your own computer.",
            ],
          },
          {
            type: "p",
            text: "The off-server point matters. If your host has a serious failure or your account is suspended, backups stored on that same host disappear with everything else.",
          },
        ],
      },
      {
        heading: "Test the restore",
        answer: "Restore a backup to a test location at least once, so you know the process works.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ask your host or developer to restore a backup to a staging or test address.",
              "Check the pages load, images appear and forms are present.",
              "Note how long it took. That is your realistic recovery time.",
              "Write down the steps, so someone else could do it.",
              "Repeat annually, or after any major change to the site.",
            ],
          },
          {
            type: "callout",
            title: "The failure nobody expects",
            text: "Backups that have been silently failing for months are extremely common. The file exists, the schedule says it ran, and the contents are empty or corrupted. Only a restore test catches that.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does my host back up my site?",
        answer:
          "Many do, but often only for a short window and sometimes as a paid add-on. Check what is included and how far back it goes. Never rely solely on your host — keep your own copy too.",
      },
      {
        question: "Do I need backups on Squarespace or Wix?",
        answer:
          "They handle infrastructure backups for you. You cannot download a full copy in the same way, which is a real limitation, but you are protected from server failure.",
      },
      {
        question: "How much do backups cost?",
        answer:
          "Usually nothing meaningful. Free plugins handle WordPress, most hosts include something, and cloud storage for a small site costs a few dollars a year.",
      },
      {
        question: "What if my site gets hacked?",
        answer:
          "Restore from a backup made before the compromise, then fix the vulnerability that let them in. Restoring without fixing the cause means it happens again within days.",
      },
    ],
    references: [
      { label: "OWASP — logging and monitoring guidance", href: "https://cheatsheetseries.owasp.org/" },
    ],
    internalLinks: [
      { label: "Website care plans", href: "/local/website-care-plan" },
      { label: "Website rescue service", href: "/local/website-rescue-service" },
    ],
    related: ["database-backup-and-recovery", "what-is-web-hosting"],
  },

  {
    slug: "how-long-does-a-website-take-to-build",
    title: "How long does it take to build a website?",
    seoTitle: "How Long Does It Take to Build a Website?",
    description:
      "Realistic timelines by project type, what actually causes delays, and how to make your project finish on time.",
    excerpt: "One to nine weeks. The delay is almost never the building.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how long does a website take to build",
    secondaryKeywords: ["website build timeline", "how long web design takes", "website project schedule", "website launch timeline"],
    authorId: "harshal",
    publishedAt: "2026-08-13",
    answer:
      "A one-page site takes about a week, a starter site one to two weeks, and a custom design and build four to nine weeks. The most common cause of delay is content — photos and words that were not ready — followed by slow review rounds. Development itself is rarely the bottleneck.",
    takeaways: [
      "One page: a week. Starter site: one to two. Custom: four to nine.",
      "Missing content is the number one cause of delay.",
      "Committee review is the number two cause.",
      "Have photos and text ready before the project starts.",
      "Name one decision-maker who can approve without escalating.",
    ],
    sections: [
      {
        heading: "Realistic timelines",
        body: [
          {
            type: "table",
            head: ["Type", "Timeline", "Your time needed"],
            rows: [
              ["One-page site", "About 1 week", "About 2 hours"],
              ["Starter site, 4–6 pages", "1–2 weeks", "2–3 hours"],
              ["Custom design, small", "4–6 weeks", "5–8 hours"],
              ["Custom design, larger", "6–9 weeks", "8–15 hours"],
              ["Online shop", "4–14 weeks", "10–30 hours"],
              ["Web application", "6–16 weeks", "20+ hours"],
            ],
          },
          {
            type: "p",
            text: "These assume content is ready and you respond to reviews within a couple of days. Both assumptions are frequently wrong, which is why projects slip.",
          },
        ],
      },
      {
        heading: "What actually causes delays",
        body: [
          {
            type: "table",
            head: ["Cause", "How common"],
            rows: [
              ["Content not ready", "Very common"],
              ["Slow review and approval", "Very common"],
              ["Too many people with opinions", "Common"],
              ["Scope added mid-project", "Common"],
              ["Waiting on a third party", "Occasional"],
              ["Actual development problems", "Rare"],
            ],
          },
          {
            type: "callout",
            title: "Content is the bottleneck",
            text: "Almost every late website project is late because the words and photos arrived weeks after they were promised. Getting those ready before the project starts is the single biggest thing within your control.",
          },
        ],
      },
      {
        heading: "How to finish on time",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Gather photos and write your services and prices before the project starts.",
              "Name one person who can approve designs without asking three others.",
              "Agree review turnaround — two working days is reasonable.",
              "Collect feedback into one list per round rather than sending it in dribs.",
              "Resist adding scope mid-project. Note it for phase two.",
              "Agree a launch date and work backwards from it.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can a website be built in a day?",
        answer:
          "A basic one-page site from a template, yes, if all the content is ready. Anything genuinely custom cannot be, and anyone promising it is either using a template or cutting corners.",
      },
      {
        question: "Why does a custom site take six weeks?",
        answer:
          "Most of that is decisions and review, not building. Design rounds, feedback, revisions and content approval take real calendar time even when everyone moves quickly.",
      },
      {
        question: "What if I need it by a specific date?",
        answer:
          "Say so before you commit. A good developer will tell you honestly whether it is achievable and what would have to be cut. A launch date given after the project starts is much harder to hit.",
      },
      {
        question: "Can I launch in stages?",
        answer:
          "Yes, and it is often sensible. Launch the essential pages, then add the rest. It gets you online sooner and spreads the content work over more time.",
      },
    ],
    references: [
      { label: "Nielsen Norman Group — design process research", href: "https://www.nngroup.com/articles/" },
    ],
    internalLinks: [
      { label: "One-page website design", href: "/local/one-page-website-design" },
      { label: "How to choose a web designer", href: "/blog/how-to-choose-a-web-designer" },
    ],
    related: ["what-to-prepare-before-building-a-website", "scoping-a-website-project-that-wont-blow-up"],
  },

  {
    slug: "what-to-prepare-before-building-a-website",
    title: "What to prepare before your website gets built",
    seoTitle: "What to Prepare Before Building a Website",
    description:
      "A checklist of everything to gather before a web project starts, so it finishes on time and costs what you were quoted.",
    excerpt: "Gather these seven things first and your project will not slip.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "what to prepare for a new website",
    secondaryKeywords: ["website project checklist", "what does my web designer need", "website content checklist", "prepare for web design"],
    authorId: "harshal",
    publishedAt: "2026-08-13",
    answer:
      "Before a build starts, gather: your services and prices, ten to twenty photos, your logo files, your opening hours and contact details, access to your domain, three websites you like, and a decision about who approves the design. Having these ready is the difference between a one-week project and a two-month one.",
    takeaways: [
      "Content readiness decides your timeline more than anything else.",
      "Phone photos are fine. Missing photos are not.",
      "Know who has final say before you start.",
      "Find your domain login before the project, not during launch week.",
      "Three example sites you like saves a whole design round.",
    ],
    sections: [
      {
        heading: "The checklist",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Your services, written out, with prices or ranges.",
              "Ten to twenty photos — your premises, your work, your team. Phone photos are fine.",
              "Your logo, ideally as the original file rather than a screenshot.",
              "Opening hours, including holidays, and all contact details.",
              "Your domain registrar login, or confirmation of who holds it.",
              "Three websites you like and one you dislike, with a note on why.",
              "The name of the one person who approves the design.",
            ],
          },
          {
            type: "callout",
            title: "Find your domain login now",
            text: "This holds up more launches than anything else. If you cannot remember where your domain is registered, sort it out before the project starts rather than on the day you want to go live.",
          },
        ],
      },
      {
        heading: "Writing your services",
        body: [
          {
            type: "list",
            items: [
              "One short paragraph per service, in your own words.",
              "Say what it includes and what it does not.",
              "Add a price or a range, even if approximate.",
              "Note anything customers frequently misunderstand.",
              "Do not worry about polish — a designer can tidy your words, but cannot invent your services.",
            ],
          },
          {
            type: "p",
            text: "Writing this yourself takes an hour or two and saves both money and weeks of delay. Nobody can describe what you do as accurately as you can.",
          },
        ],
      },
      {
        heading: "Photos: what to shoot",
        body: [
          {
            type: "list",
            items: [
              "The outside of your premises, so people recognise it.",
              "Inside, so they know what to expect.",
              "Five to ten examples of your actual work.",
              "You and your team, faces visible.",
              "Anything that shows scale or quality — tools, equipment, materials.",
              "Shoot in daylight, clean the lens, take more than you need.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What if I do not have photos?",
        answer:
          "Take them on your phone. A well-lit phone photo of your real work is better than stock photography, and it takes an afternoon. Ask your designer for a shot list for your trade.",
      },
      {
        question: "What if I cannot write the content?",
        answer:
          "Most developers will write it for a fee, usually $300 to $1,500. Even then they need you to explain your services first, so a rough draft from you saves time and money.",
      },
      {
        question: "Do I need a logo?",
        answer:
          "Not strictly. A clean text treatment of your business name works fine and many good sites use exactly that. Do not delay the project for a logo.",
      },
      {
        question: "What if I do not know what I want it to look like?",
        answer:
          "Find three sites you like, including competitors, and note what you like about each. That is more useful to a designer than trying to describe a style in words.",
      },
    ],
    references: [
      { label: "Google Business Profile — official help", href: "https://support.google.com/business/" },
    ],
    internalLinks: [
      { label: "Photos for your business website", href: "/local/small-business-photo-guide" },
      { label: "How to choose a web designer", href: "/blog/how-to-choose-a-web-designer" },
    ],
    related: ["how-long-does-a-website-take-to-build", "how-to-write-your-about-page"],
  },

  {
    slug: "wix-squarespace-or-wordpress",
    title: "Wix, Squarespace or WordPress: which should you use?",
    seoTitle: "Wix vs Squarespace vs WordPress for Small Business",
    description:
      "An honest comparison of the three most common options for a small business website, and which suits which situation.",
    excerpt: "Squarespace for most, WordPress if you need plugins, Wix if you want layout freedom.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "wix vs squarespace vs wordpress",
    secondaryKeywords: ["best website builder small business", "squarespace or wordpress", "wix vs wordpress", "which website platform"],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Squarespace suits most small businesses that want to build it themselves — good results with the least effort. WordPress suits you if you need specific plugins or expect to grow into something complex. Wix gives the most layout freedom but is the easiest to make a mess with. All three are legitimate choices.",
    takeaways: [
      "Squarespace: best results for least effort. The default recommendation.",
      "WordPress: most flexible, most maintenance, biggest talent pool.",
      "Wix: most layout freedom, easiest to make look untidy.",
      "All three cost roughly the same monthly.",
      "Your time is the real cost in all three cases.",
    ],
    sections: [
      {
        heading: "The honest comparison",
        body: [
          {
            type: "table",
            head: ["", "Squarespace", "WordPress", "Wix"],
            rows: [
              ["Ease of use", "Easiest", "Hardest", "Easy but fiddly"],
              ["Monthly cost", "$16–$49", "$10–$25 hosting", "$17–$45"],
              ["Design quality out of the box", "High", "Depends on theme", "Variable"],
              ["Flexibility", "Moderate", "Unlimited", "High for layout"],
              ["Maintenance needed", "None", "Regular", "None"],
              ["Finding help later", "Moderate", "Easiest", "Moderate"],
              ["Moving away later", "Difficult", "Easiest", "Difficult"],
            ],
          },
        ],
      },
      {
        heading: "Which to choose",
        body: [
          {
            type: "list",
            items: [
              "Choose Squarespace if you want a good-looking site with the least effort and no maintenance. This suits most local businesses.",
              "Choose WordPress if you need a specific plugin, expect to grow into something complex, or want the widest choice of people who can work on it later.",
              "Choose Wix if you want to position things precisely and are willing to spend more time on it.",
              "Choose a custom build if the site is a genuine competitive asset and you have budget beyond $2,500.",
            ],
          },
          {
            type: "callout",
            title: "The lock-in difference",
            text: "WordPress content can be exported and moved almost anywhere. Squarespace and Wix are much harder to leave — you can export some content, but the design does not come with you. Worth knowing before you commit.",
          },
        ],
      },
      {
        heading: "What people get wrong",
        body: [
          {
            type: "list",
            items: [
              "Choosing WordPress without understanding it needs updating regularly.",
              "Installing twenty plugins, which is how WordPress sites become slow and insecure.",
              "Uploading full-size photos on any platform, which is the main cause of slow sites.",
              "Assuming a builder means no work — expect 20 to 60 hours to do it properly.",
              "Picking based on which has the most features rather than which you will actually finish.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which is best for SEO?",
        answer:
          "All three are capable. WordPress has more control for advanced work, but for a small business site the platform is rarely the limiting factor — content and your Google Business Profile matter far more.",
      },
      {
        question: "Can I move from one to another later?",
        answer:
          "Yes, but it means rebuilding the design. Content can usually be exported. WordPress is the easiest to leave; the hosted builders are hardest.",
      },
      {
        question: "Is WordPress free?",
        answer:
          "The software is free; hosting, a theme and some plugins are not. Expect $10 to $30 a month all in, which is similar to the builders.",
      },
      {
        question: "What about Shopify?",
        answer:
          "If you are selling products online as a main activity, Shopify is better than all three. If you sell occasionally, a builder with basic shop features is usually enough.",
      },
    ],
    references: [
      { label: "Google Search Central — SEO starter guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    ],
    internalLinks: [
      { label: "DIY or hire someone?", href: "/compare/diy-vs-hiring-a-web-designer" },
      { label: "Small business website cost", href: "/cost/small-business-website-cost" },
    ],
    related: ["what-should-a-small-business-website-cost", "what-is-web-hosting"],
  },

  {
    slug: "how-to-track-where-customers-come-from",
    title: "How to know where your customers actually come from",
    seoTitle: "How to Track Where Your Customers Come From",
    description:
      "Simple ways to find out which marketing brings in customers, without setting up complicated analytics.",
    excerpt: "The simplest method is asking. The second simplest is a separate phone number.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to track where customers come from",
    secondaryKeywords: ["marketing attribution small business", "which marketing works", "track website enquiries", "call tracking small business"],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Ask every new customer how they found you and write it down — that alone beats most analytics setups for a small business. Add a separate phone number for any paid advertising, and check the enquiry source in your website form. Together those three cost almost nothing and tell you which marketing to keep paying for.",
    takeaways: [
      "Asking every customer is the cheapest and most reliable method.",
      "A separate number for ads tells you instantly whether they work.",
      "Website forms can record the source automatically.",
      "Most small businesses cannot say which marketing works. That is expensive.",
      "You need three months of data before drawing conclusions.",
    ],
    sections: [
      {
        heading: "The three things worth doing",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ask every new customer how they found you, and record it. A tally on a notepad works.",
              "Use a separate phone number on any paid advertising, so those calls are unambiguous.",
              "Have your website form record which page the enquiry came from.",
            ],
          },
          {
            type: "callout",
            title: "Asking beats analytics for small businesses",
            text: "Analytics tells you about website visits. It cannot tell you that a customer saw your van, checked your reviews, then called. Asking captures the whole picture, which for a local business is usually more useful.",
          },
        ],
      },
      {
        heading: "What analytics can and cannot tell you",
        body: [
          {
            type: "table",
            head: ["Question", "Analytics", "Asking"],
            rows: [
              ["How many visited the site", "Yes", "No"],
              ["Which pages they looked at", "Yes", "No"],
              ["Whether they became a customer", "Sometimes", "Yes"],
              ["Whether they saw your van first", "No", "Yes"],
              ["Whether a friend recommended you", "No", "Yes"],
              ["Which advert they responded to", "Partly", "Yes"],
            ],
          },
          {
            type: "p",
            text: "Both are useful. For most local businesses, asking is the higher-value one and takes ten seconds per customer.",
          },
        ],
      },
      {
        heading: "Making sense of the numbers",
        body: [
          {
            type: "list",
            items: [
              "Count customers, not enquiries. Ten calls that book nothing is worse than three that all book.",
              "Give it three months. A single month is too noisy to conclude anything.",
              "Compare cost per customer, not cost per enquiry.",
              "Remember word of mouth is usually the biggest source and cannot be bought directly.",
              "Do not cut a channel after a bad month. Look at the trend.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need Google Analytics?",
        answer:
          "It is free and worth having for website traffic, but do not expect it to tell you where customers came from. For a local business, asking customers directly is more useful.",
      },
      {
        question: "Is call tracking worth paying for?",
        answer:
          "If you spend meaningfully on advertising, yes — a separate number per campaign is cheap and removes all guesswork. For a business with no ad spend, it is unnecessary.",
      },
      {
        question: "What if customers say 'the internet'?",
        answer:
          "Follow up with 'Google, or somewhere else?' Most will remember. Even rough data is far better than none.",
      },
      {
        question: "How do I track word of mouth?",
        answer:
          "Just ask who recommended them, and note it. It is usually the largest source and knowing which customers refer is worth more than any analytics report.",
      },
    ],
    references: [
      { label: "Google Analytics — official help", href: "https://support.google.com/analytics/" },
    ],
    internalLinks: [
      { label: "Local SEO starter", href: "/local/local-seo-starter" },
      { label: "Google Business Profile setup", href: "/local/google-business-profile-setup" },
    ],
    related: ["how-to-get-more-google-reviews", "why-isnt-my-website-showing-on-google"],
  },

  {
    slug: "website-legal-pages-you-need",
    title: "What legal pages does a small business website need?",
    seoTitle: "Legal Pages Your Small Business Website Needs",
    description:
      "Privacy policy, terms, cookie notices and accessibility — what a small business site actually needs and what is overkill.",
    excerpt: "A privacy policy is the one nearly everyone needs. The rest depends.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "website legal pages small business",
    secondaryKeywords: ["do i need a privacy policy", "website terms and conditions", "cookie notice small business", "website legal requirements"],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "If your website collects any personal information — including a contact form or analytics — you need a privacy policy. Terms of service matter if you sell online. A cookie notice is required if you use tracking cookies and have visitors from regions that require consent. This is general information, not legal advice.",
    takeaways: [
      "A contact form counts as collecting personal information.",
      "Privacy policy: nearly always needed.",
      "Terms: needed if you sell or take bookings online.",
      "Cookie consent depends on your tracking and your visitors.",
      "Generated templates are a starting point, not a substitute for advice.",
    ],
    sections: [
      {
        heading: "What each page is for",
        body: [
          {
            type: "table",
            head: ["Page", "Needed when", "Priority"],
            rows: [
              ["Privacy policy", "You collect any personal data", "High — nearly everyone"],
              ["Cookie notice", "You use tracking or analytics cookies", "High if you use analytics"],
              ["Terms of service", "You sell or take bookings online", "High for shops"],
              ["Refund policy", "You sell products or services online", "High for shops"],
              ["Accessibility statement", "Public sector, or good practice", "Medium"],
              ["Disclaimer", "You give advice — health, legal, financial", "High in those fields"],
            ],
          },
          {
            type: "callout",
            title: "A contact form counts",
            text: "Many owners assume a privacy policy is only for shops. A contact form collects a name and email, which is personal information. That is enough to need a policy explaining what you do with it.",
          },
        ],
      },
      {
        heading: "What a privacy policy should say",
        body: [
          {
            type: "list",
            items: [
              "What information you collect — form submissions, analytics, cookies.",
              "Why you collect it and what you use it for.",
              "Who else sees it — your email provider, analytics, booking system.",
              "How long you keep it.",
              "How someone can ask for their data or ask you to delete it.",
              "How to contact you about it.",
            ],
          },
          {
            type: "p",
            text: "Keep it in plain language. A policy nobody can understand serves nobody, and clarity is increasingly what regulators expect.",
          },
        ],
      },
      {
        heading: "Cookies and consent",
        body: [
          {
            type: "list",
            items: [
              "Essential cookies that make the site work generally do not need consent.",
              "Analytics and advertising cookies usually do, depending on where your visitors are.",
              "If you use Google Analytics or advertising pixels, assume you need a notice.",
              "A banner that loads the tracking before consent is given does not comply.",
              "The simplest compliant option is often not to use tracking cookies at all.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I copy another business's privacy policy?",
        answer:
          "It is a poor idea — it will describe their systems, not yours, and it may be copyrighted. A reputable generator that asks about your actual setup is a better starting point.",
      },
      {
        question: "Are policy generators good enough?",
        answer:
          "For a simple brochure site with a contact form, usually a reasonable starting point. If you handle health, financial or children's data, get proper legal advice.",
      },
      {
        question: "Do I need a cookie banner?",
        answer:
          "If you use analytics or advertising cookies and have visitors from regions requiring consent, yes. If you use no tracking at all, you may not need one.",
      },
      {
        question: "Is this legal advice?",
        answer:
          "No. This is general information to help you know what to ask about. Requirements vary by state and country, and a lawyer should confirm what applies to your business.",
      },
    ],
    references: [
      { label: "FTC — privacy and security guidance for business", href: "https://www.ftc.gov/business-guidance/privacy-security" },
    ],
    internalLinks: [
      { label: "Website care plans", href: "/local/website-care-plan" },
      { label: "Local business websites", href: "/local" },
    ],
    related: ["privacy-compliance-for-websites", "what-is-ssl-and-do-i-need-it"],
  },

  {
    slug: "how-to-speed-up-your-website-yourself",
    title: "How to speed up your website yourself",
    seoTitle: "How to Speed Up Your Website (DIY Guide)",
    description:
      "Four things a non-technical owner can do to make their website faster, in order of impact, without hiring anyone.",
    excerpt: "It is almost always the photos. Here is how to fix it yourself.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to speed up my website",
    secondaryKeywords: ["website too slow fix", "make website faster", "slow website small business", "speed up wordpress site"],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "Resize your images first — on most small business sites that alone fixes the problem. Then remove plugins and widgets you do not use, turn off anything that autoplays, and check your hosting is not the bottleneck. Test on your phone with wifi off, because that is what your customers experience.",
    takeaways: [
      "Photos are the cause on the overwhelming majority of small business sites.",
      "Resize before uploading. 2000 pixels wide is plenty.",
      "Every plugin and widget costs load time.",
      "Test on a phone on mobile data, not a laptop on wifi.",
      "Under three seconds is the target.",
    ],
    sections: [
      {
        heading: "Test it properly first",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Turn wifi off on your phone.",
              "Open your website and count how long until you can read something.",
              "Under three seconds is fine. Over five is losing you customers.",
              "Try it on a page with lots of photos, which is usually the worst one.",
              "Ask someone else to try it too, since your browser may have cached the site.",
            ],
          },
          {
            type: "callout",
            title: "Your laptop lies to you",
            text: "On office wifi with a cached site, everything feels fast. Your customer is on a phone on mobile data seeing it for the first time. That is the only test that matters.",
          },
        ],
      },
      {
        heading: "Fix the photos",
        answer: "Resize every image to about 2000 pixels wide before uploading it.",
        body: [
          {
            type: "list",
            items: [
              "A photo straight from a phone can be 4000 pixels wide and several megabytes.",
              "Your website never displays it larger than about 2000 pixels.",
              "Resizing to 2000 pixels wide typically cuts the file by 80% with no visible difference.",
              "Free tools do this in your browser, or your phone's photo app can export smaller.",
              "Do this before uploading, not after. Replacing images later is more work.",
            ],
          },
          {
            type: "p",
            text: "On most slow small business websites, this one change fixes the problem entirely. It is worth doing before considering anything else.",
          },
        ],
      },
      {
        heading: "Then the other three",
        body: [
          {
            type: "table",
            head: ["Fix", "Effort", "Impact"],
            rows: [
              ["Resize images", "Low", "Very high"],
              ["Remove unused plugins", "Low", "High on WordPress"],
              ["Remove chat and popup widgets", "Low — a decision", "High"],
              ["Turn off autoplay video", "Low", "High if you have one"],
              ["Add a caching plugin", "Medium", "Medium"],
              ["Move to better hosting", "Medium", "Medium"],
            ],
          },
          {
            type: "p",
            text: "Chat widgets, review carousels and popups are frequently the second biggest cost after photos. Each one loads code from another company's server before your page finishes.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How fast should my website be?",
        answer:
          "Under three seconds to show something readable, on a phone on mobile data. Under two is better. Over five and you are losing a meaningful share of visitors.",
      },
      {
        question: "Will a faster site help my Google ranking?",
        answer:
          "Slightly. The bigger benefit is that visitors stay. For a local business, reviews and your Google Business Profile affect ranking more than speed does.",
      },
      {
        question: "Do I need a caching plugin?",
        answer:
          "On WordPress it helps, but fix your images first. A caching plugin on a site with enormous photos is treating the symptom.",
      },
      {
        question: "Is cheap hosting making my site slow?",
        answer:
          "Sometimes, but far less often than people assume. Fix images and plugins first — if it is still slow after that, then look at hosting.",
      },
    ],
    references: [
      { label: "web.dev — fast load times", href: "https://web.dev/explore/fast" },
    ],
    internalLinks: [
      { label: "Fix a slow website", href: "/local/website-speed-fix" },
      { label: "Photos for your business website", href: "/local/small-business-photo-guide" },
    ],
    related: ["core-web-vitals-explained", "modern-image-formats"],
  },

  {
    slug: "how-to-move-your-website-to-a-new-host",
    title: "How to move your website to a new host",
    seoTitle: "How to Move Your Website to a New Host",
    description:
      "What is involved in moving hosts, what can go wrong, and how to do it without your site or email going down.",
    excerpt: "It is routine. The two things that go wrong are email and forgotten redirects.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "how to move website to new host",
    secondaryKeywords: ["change web hosting", "website migration small business", "transfer website host", "move wordpress host"],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "Moving hosts means copying your website files and database to the new host, testing it there, then pointing your domain at the new server. The two things that most often go wrong are business email breaking and old page addresses not redirecting. Both are avoidable with a checklist.",
    takeaways: [
      "Do not cancel the old host until the new one is confirmed working.",
      "Email often lives with hosting — check before you move.",
      "Test the site on the new host before switching the domain.",
      "Keep the old host running for two weeks afterwards.",
      "A small site takes an hour or two to move.",
    ],
    sections: [
      {
        heading: "The order to do it in",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Take a full backup of files and database from the old host.",
              "Set up the new host and upload everything there.",
              "Test the site on the new host using a temporary address.",
              "Check every page loads, forms work and images appear.",
              "Sort out email before touching the domain settings.",
              "Point the domain at the new host.",
              "Wait, then confirm everything works on the live address.",
              "Keep the old host for two weeks before cancelling.",
            ],
          },
          {
            type: "callout",
            title: "Never cancel first",
            text: "Cancelling the old host before the new one is confirmed working is how sites disappear for a week. Pay for both for a month. It is the cheapest insurance in this process.",
          },
        ],
      },
      {
        heading: "The email trap",
        body: [
          {
            type: "p",
            text: "If your business email came with your hosting, moving hosts can stop your email working. This is the single most common problem in a hosting move and it is often discovered after the fact.",
          },
          {
            type: "list",
            items: [
              "Find out where your email is hosted before you start.",
              "If it is with the old host, either move it separately or set up the new email first.",
              "Copy existing messages across before switching, or you may lose access to them.",
              "This is a good moment to move email to Google Workspace or Microsoft 365, which is separate from hosting.",
              "Test sending and receiving before cancelling anything.",
            ],
          },
        ],
      },
      {
        heading: "What else to check afterwards",
        body: [
          {
            type: "list",
            items: [
              "Every page loads, especially ones you rarely visit.",
              "Contact forms send and arrive — test with a real submission.",
              "SSL is working and the padlock shows.",
              "Images all appear, since paths sometimes break.",
              "Any bookings, shop or login functions still work.",
              "Search Console for any sudden crawl errors in the following week.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will my site go down during the move?",
        answer:
          "Done properly, no. The site runs on the old host until the domain is switched, and the new copy is already tested and waiting. Any downtime is usually minutes, not hours.",
      },
      {
        question: "How long does the domain switch take?",
        answer:
          "Usually minutes to a few hours, occasionally up to a day for all networks to update. During that window some visitors see the old server and some the new, which is why you keep both running.",
      },
      {
        question: "Will moving hurt my Google ranking?",
        answer:
          "Not if the addresses stay the same and the site is not down. Moving host does not change your URLs, so there is normally no ranking effect.",
      },
      {
        question: "Can I move a Squarespace or Wix site?",
        answer:
          "Not in the same way — those include hosting and cannot be moved elsewhere. Leaving them means rebuilding, though you can export some content.",
      },
    ],
    references: [
      { label: "Google Search Central — site moves", href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    ],
    internalLinks: [
      { label: "Website rescue service", href: "/local/website-rescue-service" },
      { label: "Business email and domain setup", href: "/local/business-email-and-domain-setup" },
    ],
    related: ["what-is-web-hosting", "how-to-back-up-your-website"],
  },

  {
    slug: "social-media-or-website-for-small-business",
    title: "Do I need a website if I have social media?",
    seoTitle: "Website or Social Media for Small Business?",
    description:
      "What a website does that a Facebook or Instagram page cannot, when social alone is genuinely enough, and why platform risk matters.",
    excerpt: "They do different jobs. The risk is building only on land you do not own.",
    category: "Small business",
    cluster: "small-business",
    primaryKeyword: "website or social media for business",
    secondaryKeywords: ["do i need a website if i have facebook", "instagram instead of website", "social media vs website", "facebook page for business"],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "Social media reaches people who already follow you. A website reaches people searching for what you sell, and you control it. If you are fully booked from Instagram you can wait, but relying entirely on a platform means one rule change can remove your main sales channel overnight.",
    takeaways: [
      "Social reaches followers. A website reaches searchers.",
      "You do not own your social audience. The platform does.",
      "Social posts rarely appear in Google results.",
      "Most businesses want both, doing different jobs.",
      "If you are full from social alone, waiting is a legitimate choice.",
    ],
    sections: [
      {
        heading: "What each one does",
        body: [
          {
            type: "table",
            head: ["", "Social media", "Website"],
            rows: [
              ["Reaches", "Existing followers", "People searching now"],
              ["Appears in Google", "Rarely", "Yes"],
              ["You control it", "No", "Yes"],
              ["Cost", "Free", "$349+"],
              ["Full prices and services", "Awkward", "Yes"],
              ["Bookings and forms", "Limited", "Yes"],
              ["Survives a rule change", "No", "Yes"],
            ],
          },
          {
            type: "callout",
            title: "The platform risk is real",
            text: "Accounts get suspended in error, reach algorithms change, and platforms decline. Businesses that built entirely on one platform have lost their main channel overnight with no way to contact their own customers.",
          },
        ],
      },
      {
        heading: "When social alone is genuinely enough",
        body: [
          {
            type: "list",
            items: [
              "You are fully booked and not trying to grow.",
              "Your work is highly visual and your audience lives on Instagram.",
              "You sell mainly to people who already know you.",
              "You are testing a new business and are not committed yet.",
              "Money is tight and your Google Business Profile is not set up yet — do that first.",
            ],
          },
        ],
      },
      {
        heading: "The minimum sensible setup",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Google Business Profile, set up properly. Free, and the biggest single lever for a local business.",
              "A one-page website so you appear in searches and own something.",
              "Whichever social platform your customers actually use, kept active.",
              "A way to collect customer contact details that you own — even a simple list.",
            ],
          },
          {
            type: "p",
            text: "That combination costs a few hundred dollars once, covers search and social, and means no single platform can remove your ability to reach customers.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can a Facebook page rank on Google?",
        answer:
          "It can appear for searches of your business name, but rarely for 'plumber near me' type searches. Your Google Business Profile is far more effective for those.",
      },
      {
        question: "Which social platform should I use?",
        answer:
          "Whichever your customers use, and only one if that is all you can maintain. An active account on one platform beats neglected accounts on four.",
      },
      {
        question: "Can I link my website from social?",
        answer:
          "Yes, and you should — it is one of the main reasons to have both. Put it in your profile and in posts where relevant.",
      },
      {
        question: "What if I have no time for either?",
        answer:
          "Set up your Google Business Profile and get reviews. It needs the least ongoing effort and delivers the most for a local business.",
      },
    ],
    references: [
      { label: "Google Business Profile — official help", href: "https://support.google.com/business/" },
    ],
    internalLinks: [
      { label: "Does my business need a website?", href: "/local/do-i-need-a-website" },
      { label: "Google Business Profile setup", href: "/local/google-business-profile-setup" },
    ],
    related: ["why-isnt-my-website-showing-on-google", "do-i-need-a-blog-for-my-business"],
  },
];
