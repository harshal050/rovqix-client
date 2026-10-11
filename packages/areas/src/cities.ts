/**
 * US metro data for the service-area pages.
 *
 * Every field here exists to make generated pages genuinely differ, not to pad
 * a template. Climate drives the seasonal section, metro tier drives the
 * competition section, and industry/neighbourhood data drives local specifics.
 *
 * If you add a city, fill in every field with real information. A city entry
 * with generic values produces a generic page, which is the failure mode these
 * pages are most at risk of.
 */
export type Climate = "snow" | "heat" | "humid" | "mild" | "coastal";
export type MetroTier = "major" | "large" | "mid";

export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  /** Rough metro population, used for the competition framing. */
  metroTier: MetroTier;
  climate: Climate;
  /** Timezone label used in the contact section. */
  timezone: string;
  /**
   * Real local industries. OPTIONAL — only fill this in for cities where you
   * have verified information. Do not guess; a generated page repeating an
   * invented local fact is worse than a page that omits it.
   */
  industries?: string[];
  /** Neighbourhoods and nearby towns. OPTIONAL, same rule as industries. */
  areas?: string[];
  /** A genuine local characteristic. OPTIONAL, same rule as industries. */
  localNote?: string;
};

export const cities: City[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    metroTier: "major",
    climate: "heat",
    timezone: "Mountain (no DST)",
    industries: ["home services", "healthcare", "real estate", "hospitality"],
    areas: ["Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Gilbert"],
    localNote:
      "Extreme summer heat shifts demand for outdoor trades into early mornings and the cooler months, and drives year-round demand for cooling and pool services.",
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    metroTier: "major",
    climate: "humid",
    timezone: "Central",
    industries: ["energy", "healthcare", "logistics", "construction"],
    areas: ["The Heights", "Katy", "Sugar Land", "Pearland", "Spring", "Cypress"],
    localNote:
      "Humidity and hurricane season shape demand for roofing, restoration and exterior work, and flooding history makes many customers cautious about contractors.",
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    metroTier: "major",
    climate: "snow",
    timezone: "Central",
    industries: ["manufacturing", "logistics", "insurance", "professional services"],
    areas: ["Lincoln Park", "Wicker Park", "Evanston", "Oak Park", "Naperville", "Schaumburg"],
    localNote:
      "Hard winters create strong seasonal swings, and dense neighbourhood boundaries mean customers often search by neighbourhood rather than by city.",
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    metroTier: "major",
    climate: "humid",
    timezone: "Eastern",
    industries: ["logistics", "film and media", "fintech", "professional services"],
    areas: ["Buckhead", "Decatur", "Marietta", "Alpharetta", "Sandy Springs", "Smyrna"],
    localNote:
      "Sprawling metro geography means travel time is a real cost, and customers pay close attention to whether a business genuinely covers their suburb.",
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    metroTier: "major",
    climate: "heat",
    timezone: "Central",
    industries: ["corporate services", "telecom", "real estate", "construction"],
    areas: ["Plano", "Frisco", "Irving", "Arlington", "Richardson", "McKinney"],
    localNote:
      "Rapid suburban growth means a constant flow of new residents who have no established relationships and search online for everything.",
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    metroTier: "large",
    climate: "snow",
    timezone: "Mountain",
    industries: ["outdoor brands", "construction", "technology", "healthcare"],
    areas: ["Boulder", "Aurora", "Lakewood", "Littleton", "Arvada", "Golden"],
    localNote:
      "Snow season creates urgent seasonal demand, and a transplant-heavy population means fewer customers rely on long-standing local word of mouth.",
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    metroTier: "large",
    climate: "coastal",
    timezone: "Pacific",
    industries: ["technology", "healthcare", "maritime", "coffee and food"],
    areas: ["Bellevue", "Ballard", "Capitol Hill", "Redmond", "Kirkland", "Renton"],
    localNote:
      "Persistent damp drives demand for moss, gutter and exterior work, and a technically literate customer base researches thoroughly before contacting anyone.",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    metroTier: "large",
    climate: "humid",
    timezone: "Eastern",
    industries: ["hospitality", "real estate", "international trade", "healthcare"],
    areas: ["Coral Gables", "Brickell", "Doral", "Hialeah", "Kendall", "Aventura"],
    localNote:
      "A large bilingual customer base means Spanish-language service is a genuine advantage, and hurricane season concentrates demand for exterior trades.",
  },
  {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    metroTier: "large",
    climate: "snow",
    timezone: "Eastern",
    industries: ["healthcare", "education", "biotech", "professional services"],
    areas: ["Cambridge", "Somerville", "Brookline", "Newton", "Quincy", "Medford"],
    localNote:
      "Older housing stock creates steady demand for repair and renovation trades, and permitting requirements are stricter than in much of the country.",
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    metroTier: "large",
    climate: "snow",
    timezone: "Eastern",
    industries: ["healthcare", "education", "pharmaceuticals", "manufacturing"],
    areas: ["Center City", "Fishtown", "Manayunk", "King of Prussia", "Cherry Hill", "Bala Cynwyd"],
    localNote:
      "A large stock of row homes and pre-war properties shapes what trades are in demand and how jobs are typically priced.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    stateAbbr: "CA",
    metroTier: "large",
    climate: "mild",
    timezone: "Pacific",
    industries: ["biotech", "defense", "tourism", "craft brewing"],
    areas: ["La Jolla", "North Park", "Chula Vista", "Carlsbad", "Encinitas", "Coronado"],
    localNote:
      "Mild year-round weather smooths seasonal demand for outdoor trades, and California licensing requirements are among the strictest in the country.",
  },
  {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    metroTier: "mid",
    climate: "coastal",
    timezone: "Pacific",
    industries: ["outdoor brands", "food and beverage", "technology", "manufacturing"],
    areas: ["Beaverton", "Hillsboro", "Lake Oswego", "Gresham", "Tigard", "Milwaukie"],
    localNote:
      "Long wet seasons drive demand for moss removal, gutters and exterior maintenance, and customers here weigh sustainability claims seriously.",
  },
  {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    metroTier: "mid",
    climate: "humid",
    timezone: "Central",
    industries: ["healthcare services", "music and entertainment", "hospitality", "construction"],
    areas: ["Franklin", "Brentwood", "Hendersonville", "Murfreesboro", "East Nashville", "Germantown"],
    localNote:
      "Sustained population growth means a steady supply of new residents with no existing providers, which favours businesses that are easy to find online.",
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    metroTier: "mid",
    climate: "humid",
    timezone: "Eastern",
    industries: ["banking", "insurance", "healthcare", "construction"],
    areas: ["Ballantyne", "Matthews", "Huntersville", "Concord", "Davidson", "Pineville"],
    localNote:
      "A finance-heavy professional population values scheduling reliability and online booking more than the regional average.",
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "Florida",
    stateAbbr: "FL",
    metroTier: "mid",
    climate: "humid",
    timezone: "Eastern",
    industries: ["healthcare", "financial services", "tourism", "construction"],
    areas: ["St. Petersburg", "Clearwater", "Brandon", "Wesley Chapel", "Riverview", "Largo"],
    localNote:
      "A large retiree population means accessibility and clear phone contact matter more here than in most markets.",
  },
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    metroTier: "mid",
    climate: "heat",
    timezone: "Central",
    industries: ["technology", "hospitality", "construction", "music and events"],
    areas: ["Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "South Congress", "East Austin"],
    localNote:
      "A young, tech-literate population expects online booking and instant quotes, and will skip businesses that require a phone call to get a price.",
  },
  {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "Minnesota",
    stateAbbr: "MN",
    metroTier: "mid",
    climate: "snow",
    timezone: "Central",
    industries: ["retail", "medical devices", "agriculture", "manufacturing"],
    areas: ["Saint Paul", "Bloomington", "Edina", "Plymouth", "Maple Grove", "Eden Prairie"],
    localNote:
      "Severe winters create sharp seasonal demand and make reliability during extreme weather a genuine differentiator.",
  },
  {
    slug: "detroit",
    name: "Detroit",
    state: "Michigan",
    stateAbbr: "MI",
    metroTier: "mid",
    climate: "snow",
    timezone: "Eastern",
    industries: ["automotive", "manufacturing", "healthcare", "logistics"],
    areas: ["Royal Oak", "Ferndale", "Troy", "Dearborn", "Birmingham", "Warren"],
    localNote:
      "A wide spread of housing age and value means quoting varies enormously by suburb, and customers compare quotes carefully.",
  },
  {
    slug: "las-vegas",
    name: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    metroTier: "mid",
    climate: "heat",
    timezone: "Pacific",
    industries: ["hospitality", "events", "construction", "entertainment"],
    areas: ["Henderson", "Summerlin", "North Las Vegas", "Spring Valley", "Paradise", "Enterprise"],
    localNote:
      "Extreme heat and a service economy working unusual hours mean evening and early-morning availability is worth advertising.",
  },
  {
    slug: "orlando",
    name: "Orlando",
    state: "Florida",
    stateAbbr: "FL",
    metroTier: "mid",
    climate: "humid",
    timezone: "Eastern",
    industries: ["tourism", "hospitality", "healthcare", "construction"],
    areas: ["Winter Park", "Kissimmee", "Altamonte Springs", "Lake Nona", "Oviedo", "Apopka"],
    localNote:
      "A large short-term rental market creates steady demand for cleaning, maintenance and turnaround services on tight schedules.",
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    state: "California",
    stateAbbr: "CA",
    metroTier: "mid",
    climate: "heat",
    timezone: "Pacific",
    industries: ["government", "agriculture", "healthcare", "construction"],
    areas: ["Roseville", "Folsom", "Elk Grove", "Davis", "Rocklin", "Citrus Heights"],
    localNote:
      "Hot dry summers drive demand for cooling, irrigation and pool work, and California licensing rules apply strictly to most trades.",
  },
  {
    slug: "kansas-city",
    name: "Kansas City",
    state: "Missouri",
    stateAbbr: "MO",
    metroTier: "mid",
    climate: "snow",
    timezone: "Central",
    industries: ["logistics", "agriculture technology", "engineering", "healthcare"],
    areas: ["Overland Park", "Olathe", "Lee's Summit", "Independence", "Shawnee", "Liberty"],
    localNote:
      "A metro split across two states means licensing and tax questions differ depending on which side of the line a job sits.",
  },
  {
    slug: "columbus",
    name: "Columbus",
    state: "Ohio",
    stateAbbr: "OH",
    metroTier: "mid",
    climate: "snow",
    timezone: "Eastern",
    industries: ["insurance", "retail", "logistics", "education"],
    areas: ["Dublin", "Westerville", "Hilliard", "Gahanna", "Grove City", "Upper Arlington"],
    localNote:
      "A large student population creates predictable seasonal turnover in rentals, cleaning and moving services each August.",
  },
  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    state: "Pennsylvania",
    stateAbbr: "PA",
    metroTier: "mid",
    climate: "snow",
    timezone: "Eastern",
    industries: ["healthcare", "robotics", "education", "manufacturing"],
    areas: ["Shadyside", "Squirrel Hill", "Mount Lebanon", "Cranberry", "Bethel Park", "Wexford"],
    localNote:
      "Steep terrain and older housing make access a real factor in quoting exterior and delivery-based trades.",
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    state: "Utah",
    stateAbbr: "UT",
    metroTier: "mid",
    climate: "snow",
    timezone: "Mountain",
    industries: ["technology", "outdoor recreation", "healthcare", "construction"],
    areas: ["Sandy", "Provo", "Ogden", "West Jordan", "Draper", "Lehi"],
    localNote:
      "Rapid growth along the Wasatch Front means new housing developments and a constant stream of customers new to the area.",
  },
];

export const cityBySlug = new Map(cities.map((city) => [city.slug, city]));

/** Seasonal paragraph, driven by real climate rather than a generic sentence. */
export const climateNotes: Record<Climate, string> = {
  snow:
    "Winter changes everything here. Demand concentrates sharply in the shoulder seasons, and customers judge a business on whether it turns up during bad weather. Availability during and immediately after a storm is worth stating plainly.",
  heat:
    "Summer heat dominates the calendar. Outdoor work shifts to early mornings for several months, cooling-related demand spikes, and customers searching in July expect same-day or next-day availability.",
  humid:
    "Humidity and storm season drive a lot of the work here. Moisture damage, mould and exterior wear create recurring demand, and hurricane or severe-storm periods produce sudden surges in urgent enquiries.",
  mild:
    "Mild weather year-round smooths out the seasonal peaks most markets deal with. That means steadier demand, but also more competitors operating at full capacity all year rather than only in season.",
  coastal:
    "Long damp periods drive steady demand for moisture, moss and exterior maintenance work. Customers here are used to weather delays but expect to be told about them rather than left waiting.",
};

/** Competition framing, driven by metro size. */
export const tierNotes: Record<MetroTier, string> = {
  major:
    "This is a large, competitive market. There are established operators with hundreds of reviews, so a new or smaller business competes on responsiveness, specialisation and neighbourhood focus rather than on general visibility.",
  large:
    "Competition is real but not saturated. A well-maintained Google Business Profile with consistent reviews genuinely moves the needle here, which is not always true in the largest metros.",
  mid:
    "This market is winnable. Many competing businesses have weak or neglected online presence, so getting the basics right — accurate listings, real photos, consistent reviews — often puts you ahead of established names.",
};
