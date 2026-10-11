import { getClientLogos } from "@/lib/api/clients";
import { Marquee } from "@rovqix/shared/components/shared/marquee";
import { Reveal } from "@rovqix/shared/components/shared/reveal";

export async function Clients() {
  const clientLogos = await getClientLogos();

  return (
    <section className="relative py-20">
      <Reveal className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Trusted by teams building the next generation of products
        </p>
      </Reveal>

      <div className="mt-10">
        <Marquee>
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="font-heading shrink-0 text-2xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground/70"
            >
              {logo}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
