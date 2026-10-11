import { Briefcase, MapPin, Clock } from "lucide-react";
import type { CareerItem } from "@/lib/api/careers";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@rovqix/shared/components/ui/accordion";

export function JobList({ jobs }: { jobs: CareerItem[] }) {
  if (jobs.length === 0) {
    return (
      <div className="glass-panel gradient-border rounded-2xl p-10 text-center">
        <p className="text-muted-foreground">
          We don&apos;t have any open roles right now — check back soon, or send us your resume
          anyway using the form below.
        </p>
      </div>
    );
  }

  return (
    <Reveal>
      <Accordion className="glass-panel gradient-border rounded-2xl px-6">
        {jobs.map((job) => (
          <AccordionItem key={job._id} value={job._id}>
            <AccordionTrigger className="py-6 text-base">
              <span className="flex flex-col gap-2">
                <span className="font-heading text-lg font-medium">{job.title}</span>
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {job.department && (
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="size-3.5" />
                      {job.department}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {job.type}
                  </span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>{job.description}</p>
              {job.responsibilities.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">Responsibilities</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    {job.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.requirements.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">Requirements</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    {job.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
