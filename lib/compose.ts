import { siteConfig } from "@/lib/constants/site";

/**
 * The site is a static export with no backend, so forms hand their content to
 * the visitor's own email client or WhatsApp instead of POSTing it anywhere.
 */

/** Joins labelled fields into a message body, skipping empty values. */
export function composeBody(fields: [label: string, value: string | undefined][]): string {
  return fields
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => `${label}: ${value!.trim()}`)
    .join("\n");
}

export function mailtoHref(subject: string, body: string): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(text: string): string {
  return `${siteConfig.whatsappHref}?text=${encodeURIComponent(text)}`;
}

/**
 * Opens a composed message — mailto in the current tab, WhatsApp in a new one.
 * Forms call this after async validation, which some browsers (Safari) treat
 * as outside the click and block as a popup; fall back to the current tab.
 */
export function openComposed(href: string) {
  if (href.startsWith("mailto:")) {
    window.location.href = href;
    return;
  }
  const tab = window.open(href, "_blank");
  if (tab) tab.opener = null;
  else window.location.href = href;
}
