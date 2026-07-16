"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAdminApiUrl } from "@/lib/api/client";

const ADMIN_API_URL = getAdminApiUrl();

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !ADMIN_API_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`${ADMIN_API_URL}/api/public/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="flex h-10 max-w-sm items-center gap-2 text-sm text-muted-foreground">
        <Check className="size-4 text-foreground" />
        You&apos;re subscribed.
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
        <Button size="lg" className="h-10 shrink-0 rounded-full" disabled={status === "loading"}>
          {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : "Subscribe"}
        </Button>
      </div>
      {status === "error" && (
        <span className="text-xs text-destructive">Something went wrong. Please try again.</span>
      )}
    </form>
  );
}
