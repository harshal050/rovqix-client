import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";
import { EyebrowBadge } from "@/components/shared/eyebrow-badge";

export function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  description,
  align = "left",
  index,
  className,
}: {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "center" | "left";
  index?: string;
  className?: string;
}) {
  const parts = gradientWord ? title.split(gradientWord) : [title];

  const heading = (
    <h2 className="text-display-sm text-dim max-w-2xl text-balance">
      {gradientWord && parts.length === 2 ? (
        <>
          {parts[0]}
          <span className="text-foreground">{gradientWord}</span>
          {parts[1]}
        </>
      ) : (
        <span className="text-foreground">{title}</span>
      )}
    </h2>
  );

  if (align === "center") {
    return (
      <div className={cn("flex flex-col items-center gap-6 text-center", className)}>
        {eyebrow && (
          <Reveal>
            <EyebrowBadge>{eyebrow}</EyebrowBadge>
          </Reveal>
        )}
        <Reveal delay={0.08}>{heading}</Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mx-auto max-w-xl text-balance text-muted-foreground">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="flex max-w-2xl flex-col gap-5">
        {eyebrow && (
          <Reveal>
            <EyebrowBadge>{eyebrow}</EyebrowBadge>
          </Reveal>
        )}
        <Reveal delay={0.08}>{heading}</Reveal>
      </div>
      <div className="flex items-end gap-4 lg:max-w-xs">
        {index && (
          <span className="font-heading hidden text-6xl leading-none font-light text-foreground/10 lg:block">
            {index}
          </span>
        )}
        {description && (
          <Reveal delay={0.16}>
            <p className="text-muted-foreground lg:text-right">{description}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
