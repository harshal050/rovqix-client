"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, SendIcon } from "lucide-react";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { siteConfig } from "@/lib/constants/site";
import { getAdminApiUrl } from "@/lib/api/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ADMIN_API_URL = getAdminApiUrl();

const fields: {
  name: keyof ContactFormValues;
  label: string;
  placeholder: string;
  optional?: boolean;
}[] = [
  { name: "name", label: "Full name", placeholder: "Jordan Lee" },
  { name: "email", label: "Work email", placeholder: "you@company.com" },
  { name: "company", label: "Company", placeholder: "Acme Inc.", optional: true },
  { name: "budget", label: "Budget range", placeholder: "$5k – $15k", optional: true },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(false);

    if (!ADMIN_API_URL) {
      setSubmitError(true);
      return;
    }

    try {
      const res = await fetch(`${ADMIN_API_URL}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="gradient-border glass-panel flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="font-heading text-xl font-medium">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
        <Button variant="outline" className="mt-2 rounded-full" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gradient-border glass-panel flex flex-col gap-5 rounded-2xl p-7 sm:p-9"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label htmlFor={field.name} className="text-sm font-medium">
              {field.label}
              {field.optional && (
                <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
              )}
            </label>
            <Input
              id={field.name}
              placeholder={field.placeholder}
              className={cn("h-10", errors[field.name] && "border-destructive")}
              {...register(field.name)}
            />
            {errors[field.name] && (
              <span className="text-xs text-destructive">{errors[field.name]?.message}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, timeline, and goals…"
          rows={5}
          className={cn(errors.message && "border-destructive")}
          {...register("message")}
        />
        {errors.message && (
          <span className="text-xs text-destructive">{errors.message.message}</span>
        )}
      </div>

      {submitError && (
        <p className="text-sm text-destructive">
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href={siteConfig.emailHref} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 h-11 rounded-full">
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <SendIcon data-icon="inline-end" className="size-3.5" />
          </>
        )}
      </Button>
    </form>
  );
}
