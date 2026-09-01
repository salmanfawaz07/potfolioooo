import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";

export function Evidence() {
  const liveCount = projects.filter((p) => p.liveUrl).length;
  const sourceCount = projects.filter((p) => p.githubUrl).length;

  return (
    <section id="evidence" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel number="04" label="EVIDENCE" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-display text-4xl tracking-wide md:text-6xl">
            REAL WORK. REAL SYSTEMS.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn>
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                Projects
              </p>
              <p className="mt-3 font-display text-5xl">{projects.length}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Documented builds</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                Live / Deployed
              </p>
              <p className="mt-3 font-display text-5xl">{liveCount || "—"}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {liveCount ? "Verified URLs" : "Links coming soon"}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                Source Available
              </p>
              <p className="mt-3 font-display text-5xl">{sourceCount || "—"}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {sourceCount ? "Public repositories" : "Repositories private / pending"}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                Certifications
              </p>
              <p className="mt-3 font-display text-5xl">{certifications.length}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Verified</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
              Certifications
            </h3>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.id}
                  className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4"
                >
                  <div>
                    <p className="text-lg text-[var(--color-text-primary)]">{c.title}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {c.issuer} · {c.focus}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--color-cyan)]/40 px-3 py-1 font-mono text-[10px] tracking-wider text-[var(--color-cyan)] uppercase">
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
