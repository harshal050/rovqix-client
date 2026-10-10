"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, SendIcon } from "lucide-react";

import { careerApplySchema, type CareerApplyValues } from "@/lib/schemas/careers";
import type { CareerItem } from "@/lib/api/careers";
import { siteConfig } from "@/lib/constants/site";
import { composeBody, mailtoHref, openComposed } from "@/lib/compose";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ApplyForm({ jobs }: { jobs: CareerItem[] }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerApplyValues>({
    resolver: zodResolver(careerApplySchema),
  });

  function onSubmit(values: CareerApplyValues) {
    const body = composeBody([
      ["Name", values.name],
      ["Email", values.email],
      ["Phone", values.phone],
      ["Position", values.position],
      ["Why I'm a great fit", values.message],
    ]);
    openComposed(
      mailtoHref(
        `Application: ${values.position} — ${values.name}`,
        `${body}\n\n(Please attach your resume to this email.)`
      )
    );
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="gradient-border glass-panel flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="font-heading text-xl font-medium">Almost there</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your application is ready in your email app — attach your resume, hit send, and
          we&apos;ll reach out if there&apos;s a fit.
        </p>
        <Button variant="outline" className="mt-2 rounded-full" onClick={() => setSubmitted(false)}>
          Submit another application
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
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <Input
            id="name"
            placeholder="Jordan Lee"
            className={cn("h-10", errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            placeholder="you@example.com"
            className={cn("h-10", errors.email && "border-destructive")}
            {...register("email")}
          />
          {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input id="phone" placeholder="+91 00000 00000" className="h-10" {...register("phone")} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="position" className="text-sm font-medium">
            Position
          </label>
          <select
            id="position"
            defaultValue=""
            className={cn(
              "h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30",
              errors.position && "border-destructive"
            )}
            {...register("position")}
          >
            <option value="" disabled>
              Select a role
            </option>
            {jobs.map((job) => (
              <option key={job._id} value={job.title}>
                {job.title}
              </option>
            ))}
            <option value="General Application">General Application</option>
          </select>
          {errors.position && (
            <span className="text-xs text-destructive">{errors.position.message}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Why you&apos;re a great fit{" "}
          <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your experience and why you'd like to join ROVQIX…"
          rows={4}
          {...register("message")}
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Submitting opens your email app with this application addressed to{" "}
        <a href={siteConfig.emailHref} className="underline">
          {siteConfig.email}
        </a>{" "}
        — attach your resume (PDF or DOC) there before sending.
      </p>

      <Button type="submit" size="lg" className="mt-2 h-11 rounded-full">
        Submit Application
        <SendIcon data-icon="inline-end" className="size-3.5" />
      </Button>
    </form>
  );
}
