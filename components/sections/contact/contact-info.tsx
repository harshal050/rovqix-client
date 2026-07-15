import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

import { getSiteSettings } from "@/lib/api/settings";
import { Reveal } from "@/components/shared/reveal";

export async function ContactInfo() {
  const settings = await getSiteSettings();

  const socials = [
    { name: "Twitter", href: settings.socials.twitter, Icon: FaXTwitter },
    { name: "Instagram", href: settings.socials.instagram, Icon: FaInstagram },
    { name: "YouTube", href: settings.socials.youtube, Icon: FaYoutube },
    { name: "LinkedIn", href: settings.socials.linkedin, Icon: FaLinkedin },
  ];

  const infoItems = [
    { icon: Mail, label: "Email", value: settings.email, href: settings.emailHref },
    { icon: Phone, label: "Phone", value: settings.phone, href: settings.phoneHref },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message us directly",
      href: settings.whatsappHref,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Reveal>
        <div className="glass-panel gradient-border flex flex-col gap-5 rounded-2xl p-7">
          {infoItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
                <item.icon className="size-4.5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium transition-colors group-hover:text-brand-blue">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-panel gradient-border flex items-start gap-4 rounded-2xl p-7">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
            <Clock className="size-4.5" />
          </span>
          <div>
            <p className="text-sm font-medium">Business Hours</p>
            <p className="mt-1 text-sm text-muted-foreground">{settings.businessHours}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="glass-panel relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl">
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-2 text-center">
            <MapPin className="size-6 text-brand-blue" />
            <p className="text-sm text-muted-foreground">Remote-first studio, working worldwide</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="flex items-center gap-2">
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="glass-panel flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </Reveal>
    </div>
  );
}
