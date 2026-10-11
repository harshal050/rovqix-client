"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MessageCircle, SendIcon } from "lucide-react";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { composeBody, mailtoHref, openComposed, whatsappHref } from "@rovqix/shared/lib/compose";
import { Input } from "@rovqix/shared/components/ui/input";
import { Textarea } from "@rovqix/shared/components/ui/textarea";
import { Button } from "@rovqix/shared/components/ui/button";
import { cn } from "@rovqix/shared/lib/utils";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function send(channel: "email" | "whatsapp") {
    return handleSubmit((values) => {
      const body = composeBody([
        ["Name", values.name],
        ["Email", values.email],
        ["Company", values.company],
        ["Budget", values.budget],
        ["Project details", values.message],
      ]);
      openComposed(
        channel === "email"
          ? mailtoHref(`New project enquiry from ${values.name}`, body)
          : whatsappHref(`Hi ROVQIX, I'd like to discuss a project.\n\n${body}`)
      );
      setSubmitted(true);
      reset();
    });
  }

  if (submitted) {
    return (
      <div className="gradient-border glass-panel flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="font-heading text-xl font-medium">Almost there</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your message is ready in your email app or WhatsApp — hit send there and we&apos;ll get
          back to you within one business day.
        </p>
        <Button variant="outline" className="mt-2 rounded-full" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={send("email")}
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

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="h-11 flex-1 rounded-full">
          Send via Email
          <SendIcon data-icon="inline-end" className="size-3.5" />
        </Button>
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-11 flex-1 rounded-full"
          onClick={send("whatsapp")}
        >
          Send on WhatsApp
          <MessageCircle data-icon="inline-end" className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
