"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mailtoHref, openComposed } from "@/lib/compose";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    openComposed(
      mailtoHref("Newsletter subscription", `Please add ${email} to the ROVQIX newsletter.`)
    );
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p className="flex h-10 max-w-sm items-center gap-2 text-sm text-muted-foreground">
        <Check className="size-4 text-foreground" />
        Send the email that just opened to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          required
          className="h-10 rounded-full"
        />
        <Button size="lg" className="h-10 shrink-0 rounded-full">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
