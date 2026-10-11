export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Hire", href: "/hire" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Next.js Development", href: "/services/nextjs-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Ecommerce Development", href: "/services/ecommerce-development" },
    { label: "Web Applications", href: "/services/web-application-development" },
    { label: "All Services", href: "/services" },
  ],
  hire: [
    { label: "Hire Next.js Developers", href: "/hire/hire-nextjs-developers" },
    { label: "Hire React Developers", href: "/hire/hire-react-developers" },
    { label: "Dedicated Team", href: "/hire/dedicated-development-team" },
    { label: "White Label for Agencies", href: "/hire/white-label-web-development" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Where We Work", href: "/locations" },
  ],
  resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
