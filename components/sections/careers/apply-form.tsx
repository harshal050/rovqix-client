"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, SendIcon, Paperclip } from "lucide-react";

import { careerApplySchema, type CareerApplyValues } from "@/lib/schemas/careers";
import type { CareerItem } from "@/lib/api/careers";
import { siteConfig } from "@/lib/constants/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function ApplyForm({ jobs }: { jobs: CareerItem[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplyValues>({
    resolver: zodResolver(careerApplySchema),
  });

  async function onSubmit(values: CareerApplyValues) {
    setSubmitError(false);

    if (!ADMIN_API_URL) {
      setSubmitError(true);
      return;
    }

    try {
      const resumeDataUrl = resumeFile ? await fileToDataUrl(resumeFile) : undefined;
      const res = await fetch(`${ADMIN_API_URL}/api/public/careers/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, resumeDataUrl }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      setResumeFile(null);
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
        <h3 className="font-heading text-xl font-medium">Application received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for applying — we&apos;ll review your application and reach out if there&apos;s a
          fit.
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

      <div className="flex flex-col gap-1.5">
        <label htmlFor="resume" className="text-sm font-medium">
          Resume{" "}
          <span className="ml-1 text-xs font-normal text-muted-foreground">
            (PDF or DOC, optional)
          </span>
        </label>
        <label
          htmlFor="resume"
          className="flex h-10 w-full cursor-pointer items-center gap-2 rounded-lg border border-dashed border-input px-3 text-sm text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
        >
          <Paperclip className="size-4 shrink-0" />
          <span className="truncate">{resumeFile ? resumeFile.name : "Attach your resume"}</span>
        </label>
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
        />
      </div>

      {submitError && (
        <p className="text-sm text-destructive">
          Something went wrong submitting your application. Please try again, or email your resume
          directly to{" "}
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
            Submitting…
          </>
        ) : (
          <>
            Submit Application
            <SendIcon data-icon="inline-end" className="size-3.5" />
          </>
        )}
      </Button>
    </form>
  );
}
