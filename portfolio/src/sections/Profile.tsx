import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { profile } from "@/data/profile";

export function Profile() {
  return (
    <section id="profile" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel number="01" label="PROFILE" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.05] tracking-wide text-[var(--color-text-primary)] md:text-6xl lg:text-7xl">
            I BUILD WITH CODE, AI & CURIOSITY.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <FadeIn delay={0.15} className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
              {profile.intro}
            </p>
            <ul className="mt-8 space-y-2">
              {profile.interests.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-mono text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-5">
            <dl className="space-y-6 border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
              {profile.metadata.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-base text-[var(--color-text-primary)]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
