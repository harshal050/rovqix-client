import Link from "../shared/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

import { getSiteSettings } from "../../lib/api/settings";
import { footerLinks } from "../../lib/constants/nav";
import { Reveal } from "../shared/reveal";
import { NewsletterForm } from "./newsletter-form";

export async function Footer() {
  const settings = await getSiteSettings();

  const socials = [
    { name: "Twitter", href: settings.socials.twitter, Icon: FaXTwitter },
    { name: "Instagram", href: settings.socials.instagram, Icon: FaInstagram },
    { name: "YouTube", href: settings.socials.youtube, Icon: FaYoutube },
    { name: "LinkedIn", href: settings.socials.linkedin, Icon: FaLinkedin },
  ];

  return (
    <footer className="relative mt-40 overflow-hidden border-t border-border bg-background">
      <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-20" />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-border pb-16 lg:flex-row lg:items-end">
            <h3 className="text-display-sm max-w-xl text-balance">
              Let&apos;s build something <span className="text-dim">worth remembering.</span>
            </h3>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Product &amp; design notes
              </p>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-2 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt={settings.companyName}
                width={504}
                height={100}
                className="h-6 w-auto dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{settings.tagline}</p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a
                href={settings.emailHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" /> {settings.email}
              </a>
              <a
                href={settings.phoneHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4" /> {settings.phone}
              </a>
              <a
                href={settings.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:-rotate-6 hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Hire Us" links={footerLinks.hire} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {settings.companyName}. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Let&apos;s build something premium
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <p
          aria-hidden
          className="font-heading pointer-events-none mt-10 -mb-6 text-center text-[20vw] leading-none font-medium tracking-tighter text-foreground/[0.05] select-none sm:text-[11rem]"
        >
          {settings.companyName}
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{title}</h4>
      <ul className="mt-5 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
