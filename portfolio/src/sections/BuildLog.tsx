import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { buildLog } from "@/data/buildLog";

export function BuildLog() {
  return (
    <section id="build-log" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionLabel number="05" label="BUILD LOG" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-display text-4xl tracking-wide md:text-5xl">
            CURRENTLY BUILDING.
          </h2>
        </FadeIn>

        {buildLog.length === 0 ? (
          <FadeIn delay={0.2}>
            <div className="mt-12 border border-dashed border-[var(--color-border)] p-10 text-center">
              <p className="font-mono text-sm tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
                BUILD LOG — UPDATING
              </p>
              <p className="mt-3 text-[var(--color-text-secondary)]">
                Verified milestones will appear here.
              </p>
            </div>
          </FadeIn>
        ) : (
          <ul className="mt-12 space-y-8">
            {buildLog.map((entry, i) => (
              <FadeIn key={entry.id} delay={0.05 * i}>
                <li className="border-l-2 border-[var(--color-accent)]/40 pl-6">
                  <p className="font-mono text-[11px] tracking-[0.15em] text-[var(--color-text-secondary)]">
                    {entry.date}
                  </p>
                  <h3 className="mt-1 text-lg text-[var(--color-text-primary)]">{entry.title}</h3>
                  <p className="mt-1 text-[var(--color-text-secondary)]">{entry.description}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
