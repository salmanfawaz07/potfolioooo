import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { skillCategories, services } from "@/data/skills";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel number="02" label="CAPABILITIES" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-display text-4xl tracking-wide md:text-6xl">
            WHAT I WORK WITH.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.id} delay={0.05 * i}>
              <div className="border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6">
                <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-accent)] uppercase">
                  {cat.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="flex items-baseline justify-between gap-4">
                      <span className="text-[var(--color-text-primary)]">{s.name}</span>
                      <span className="font-mono text-[10px] tracking-wider text-[var(--color-text-secondary)] uppercase">
                        {s.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Services / What I can build */}
        <div className="mt-24 overflow-hidden rounded-t-[2.5rem] bg-[#F1F0EC] px-6 py-16 text-[#0A0A0C] md:px-12 md:py-20">
          <FadeIn>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#85858A] uppercase">
              What I can build
            </p>
          </FadeIn>
          <div className="mt-10 space-y-8">
            {services.map((s, i) => (
              <FadeIn key={s.number} delay={0.05 * i}>
                <div className="grid gap-2 border-t border-black/10 pt-8 md:grid-cols-12 md:items-baseline">
                  <span className="font-mono text-sm text-[#85858A] md:col-span-1">
                    {s.number}
                  </span>
                  <h3 className="font-display text-2xl tracking-wide md:col-span-4 md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="text-[#3a3a3e] md:col-span-7 md:text-lg">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
