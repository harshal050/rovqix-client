/**
 * Every business type, in publishing order. APPEND ONLY: the order decides
 * which subdomain each page lives on (see ../shards/*.json).
 */
import type { ServiceType } from "./service-types";

import { barberShop } from "../types/barber-shop";
import { hairSalon } from "../types/hair-salon";
import { nailSalon } from "../types/nail-salon";
import { daySpa } from "../types/day-spa";
import { tattooStudio } from "../types/tattoo-studio";
import { gym } from "../types/gym";
import { yogaStudio } from "../types/yoga-studio";
import { personalTrainer } from "../types/personal-trainer";
import { dentalPractice } from "../types/dental-practice";
import { chiropractor } from "../types/chiropractor";
import { veterinaryClinic } from "../types/veterinary-clinic";
import { plumber } from "../types/plumber";
import { electrician } from "../types/electrician";
import { hvacCompany } from "../types/hvac-company";
import { roofingCompany } from "../types/roofing-company";
import { landscaping } from "../types/landscaping";
import { cleaningService } from "../types/cleaning-service";
import { pestControl } from "../types/pest-control";
import { autoRepair } from "../types/auto-repair";
import { autoDetailing } from "../types/auto-detailing";
import { handyman } from "../types/handyman";
import { generalContractor } from "../types/general-contractor";
import { movingCompany } from "../types/moving-company";
import { restaurant } from "../types/restaurant";
import { cafe } from "../types/cafe";
import { pizzaShop } from "../types/pizza-shop";
import { bakery } from "../types/bakery";
import { foodTruck } from "../types/food-truck";
import { catering } from "../types/catering";
import { bar } from "../types/bar";
import { boutique } from "../types/boutique";
import { florist } from "../types/florist";
import { petGrooming } from "../types/pet-grooming";
import { photographer } from "../types/photographer";
import { locksmith } from "../types/locksmith";
import { applianceRepair } from "../types/appliance-repair";
import { pressureWashing } from "../types/pressure-washing";
import { windowCleaning } from "../types/window-cleaning";
import { junkRemoval } from "../types/junk-removal";
import { computerRepair } from "../types/computer-repair";
import { physicalTherapy } from "../types/physical-therapy";
import { medSpa } from "../types/med-spa";
import { counsellingPractice } from "../types/counselling-practice";
import { nutritionist } from "../types/nutritionist";
import { acupunctureClinic } from "../types/acupuncture-clinic";
import { seniorCare } from "../types/senior-care";
import { medicalPractice } from "../types/medical-practice";
import { optometrist } from "../types/optometrist";
import { swimSchool } from "../types/swim-school";
import { martialArtsSchool } from "../types/martial-arts-school";
import { danceStudio } from "../types/dance-studio";
import { musicLessons } from "../types/music-lessons";
import { tutoringService } from "../types/tutoring-service";
import { daycare } from "../types/daycare";
import { drivingSchool } from "../types/driving-school";
import { dryCleaner } from "../types/dry-cleaner";
import { tailorAndAlterations } from "../types/tailor-and-alterations";
import { laundromat } from "../types/laundromat";
import { printShop } from "../types/print-shop";
import { selfStorage } from "../types/self-storage";
import { funeralHome } from "../types/funeral-home";
import { eventVenue } from "../types/event-venue";
import { weddingVenue } from "../types/wedding-venue";
import { eventPlanner } from "../types/event-planner";
import { djService } from "../types/dj-service";
import { partyRental } from "../types/party-rental";
import { videographer } from "../types/videographer";
import { photographerStudio } from "../types/photographer-studio";
import { bikeShop } from "../types/bike-shop";
import { hardwareStore } from "../types/hardware-store";
import { gardenCenter } from "../types/garden-center";
import { butcherShop } from "../types/butcher-shop";
import { liquorStore } from "../types/liquor-store";
import { coffeeRoaster } from "../types/coffee-roaster";
import { giftShop } from "../types/gift-shop";
import { jewelryStore } from "../types/jewelry-store";
import { petStore } from "../types/pet-store";
import { tanningSalon } from "../types/tanning-salon";
import { lashAndBrow } from "../types/lash-and-brow";
import { carWash } from "../types/car-wash";
import { tireShop } from "../types/tire-shop";
import { towingCompany } from "../types/towing-company";
import { poolService } from "../types/pool-service";
import { snowRemoval } from "../types/snow-removal";
import { chimneySweep } from "../types/chimney-sweep";
import { septicService } from "../types/septic-service";
import { gutterCleaning } from "../types/gutter-cleaning";
import { paintingContractor } from "../types/painting-contractor";
import { flooringContractor } from "../types/flooring-contractor";
import { fencingContractor } from "../types/fencing-contractor";
import { garageDoorCompany } from "../types/garage-door-company";
import { solarInstaller } from "../types/solar-installer";
import { securitySystemInstaller } from "../types/security-system-installer";
import { itSupport } from "../types/it-support";
import { phoneRepair } from "../types/phone-repair";
import { bookkeepingService } from "../types/bookkeeping-service";
import { taxPreparation } from "../types/tax-preparation";
import { insuranceAgent } from "../types/insurance-agent";
import { realEstateAgent } from "../types/real-estate-agent";
import { mortgageBroker } from "../types/mortgage-broker";
import { notaryService } from "../types/notary-service";
import { travelAgent } from "../types/travel-agent";

export const serviceTypes: ServiceType[] = [
  barberShop,
  hairSalon,
  nailSalon,
  daySpa,
  tattooStudio,
  gym,
  yogaStudio,
  personalTrainer,
  dentalPractice,
  chiropractor,
  veterinaryClinic,
  plumber,
  electrician,
  hvacCompany,
  roofingCompany,
  landscaping,
  cleaningService,
  pestControl,
  autoRepair,
  autoDetailing,
  handyman,
  generalContractor,
  movingCompany,
  restaurant,
  cafe,
  pizzaShop,
  bakery,
  foodTruck,
  catering,
  bar,
  boutique,
  florist,
  petGrooming,
  photographer,
  locksmith,
  applianceRepair,
  pressureWashing,
  windowCleaning,
  junkRemoval,
  computerRepair,
  physicalTherapy,
  medSpa,
  counsellingPractice,
  nutritionist,
  acupunctureClinic,
  seniorCare,
  medicalPractice,
  optometrist,
  swimSchool,
  martialArtsSchool,
  danceStudio,
  musicLessons,
  tutoringService,
  daycare,
  drivingSchool,
  dryCleaner,
  tailorAndAlterations,
  laundromat,
  printShop,
  selfStorage,
  funeralHome,
  eventVenue,
  weddingVenue,
  eventPlanner,
  djService,
  partyRental,
  videographer,
  photographerStudio,
  bikeShop,
  hardwareStore,
  gardenCenter,
  butcherShop,
  liquorStore,
  coffeeRoaster,
  giftShop,
  jewelryStore,
  petStore,
  tanningSalon,
  lashAndBrow,
  carWash,
  tireShop,
  towingCompany,
  poolService,
  snowRemoval,
  chimneySweep,
  septicService,
  gutterCleaning,
  paintingContractor,
  flooringContractor,
  fencingContractor,
  garageDoorCompany,
  solarInstaller,
  securitySystemInstaller,
  itSupport,
  phoneRepair,
  bookkeepingService,
  taxPreparation,
  insuranceAgent,
  realEstateAgent,
  mortgageBroker,
  notaryService,
  travelAgent,
];
