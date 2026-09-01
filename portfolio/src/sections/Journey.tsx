import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { journey, futureObjectives } from "@/data/journey";

export function Journey() {
  return (
    <section id="journey" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionLabel number="06" label="JOURNEY" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-display text-4xl tracking-wide md:text-6xl">
            STILL BUILDING.
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-0">
          {journey.map((item, i) => (
            <FadeIn key={item.id} delay={0.05 * i}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                {i < journey.length - 1 && (
                  <div className="absolute left-[7px] top-8 h-full w-px bg-[var(--color-border)]" />
                )}
                <div
                  className={`relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 ${
                    item.isGoal
                      ? "border-[var(--color-accent)] bg-transparent"
                      : "border-[var(--color-text-primary)] bg-[var(--color-text-primary)]"
                  }`}
                />
                <div>
                  <p
                    className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
                      item.isGoal ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg text-[var(--color-text-primary)]">{item.description}</p>
                  {item.isGoal && (
                    <p className="mt-1 font-mono text-[10px] tracking-wider text-[var(--color-text-secondary)] uppercase">
                      Goal — not yet achieved
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
              Next Objective
            </p>
            <ul className="mt-6 space-y-3">
              {futureObjectives.map((obj) => (
                <li
                  key={obj}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {obj}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[10px] tracking-wider text-[var(--color-text-secondary)] uppercase">
              These are aspirations, not claims of achievement.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
