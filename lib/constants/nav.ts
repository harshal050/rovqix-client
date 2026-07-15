export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
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
    { label: "Business Websites", href: "/services#business" },
    { label: "Startup Websites", href: "/services#startup" },
    { label: "SaaS Platforms", href: "/services#saas" },
    { label: "AI Websites", href: "/services#ai" },
    { label: "Ecommerce Stores", href: "/services#ecommerce" },
    { label: "Enterprise Websites", href: "/services#enterprise" },
  ],
  resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
