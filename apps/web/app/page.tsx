import { Hero } from "@/components/sections/home/hero";
import { Clients } from "@/components/sections/home/clients";
import { Intro } from "@/components/sections/home/intro";
import { Services } from "@/components/sections/home/services";
import { Categories } from "@/components/sections/home/categories";
import { Process } from "@/components/sections/home/process";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { TechStack } from "@/components/sections/home/tech-stack";
import { AiTechnologies } from "@/components/sections/home/ai-technologies";
import { Workflow } from "@/components/sections/home/workflow";
import { PricingPreview } from "@/components/sections/home/pricing-preview";
import { Stats } from "@/components/sections/home/stats";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Cta } from "@/components/sections/home/cta";
import { Faq } from "@/components/sections/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Intro />
      <Services />
      <Categories />
      <Process />
      <FeaturedProjects />
      <WhyChooseUs />
      <TechStack />
      <AiTechnologies />
      <Workflow />
      <Stats />
      <PricingPreview />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
