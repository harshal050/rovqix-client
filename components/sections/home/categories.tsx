import { getCategories } from "@/lib/api/categories";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { RevealStagger } from "@/components/shared/reveal";
import { CategoryChip } from "@/components/sections/home/category-chip";

export async function Categories() {
  const websiteCategories = await getCategories();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Categories"
        title="Whatever product you're building, we've shipped it."
        gradientWord="we've shipped it."
        description="A decade-spanning range of digital products, distilled into one consistent standard of craft."
      />

      <RevealStagger
        className="mt-14 flex flex-wrap items-center justify-center gap-3"
        stagger={0.05}
      >
        {websiteCategories.map((category) => (
          <CategoryChip key={category.label}>
            <DynamicIcon name={category.icon} className="size-4 text-brand-blue" />
            {category.label}
          </CategoryChip>
        ))}
      </RevealStagger>
    </section>
  );
}
