import { FadeIn } from "@/components/FadeIn";
import { Magnetic } from "@/components/Magnetic";
import { SITE } from "@/config/site";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

const contactCards = [
  {
    id: "email",
    label: "GMAIL",
    value: SITE.EMAIL,
    href: `mailto:${SITE.EMAIL}`,
    icon: Mail,
    meta: "PRIMARY CHANNEL",
  },
  {
    id: "phone",
    label: "CONTACT",
    value: SITE.PHONE,
    href: `tel:+91${SITE.PHONE}`,
    icon: Phone,
    meta: "DIRECT LINE",
  },
  {
    id: "github",
    label: "GITHUB",
    value: "salmanfawaz07",
    href: SITE.GITHUB_URL,
    icon: Github,
    meta: "SOURCE CODE",
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "Mohammed Salman Fawaz",
    href: SITE.LINKEDIN_URL,
    icon: Linkedin,
    meta: "PROFESSIONAL",
  },
  {
    id: "instagram",
    label: "INSTAGRAM",
    value: "@salmannn__73",
    href: SITE.INSTAGRAM_URL,
    icon: Instagram,
    meta: "PERSONAL",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] flex-col justify-between px-5 py-24 md:px-8 md:py-32"
    >
      {/* Subtle hologram grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(213,31,53,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(213,31,53,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeIn>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-text-secondary)] uppercase">
            FILE STATUS
            <span className="ml-3 text-[var(--color-cyan)]">OPEN</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-display text-5xl tracking-wide md:text-7xl lg:text-8xl">
            STILL BUILDING.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-lg text-lg text-[var(--color-text-secondary)]">
            More systems. More experiments. More to learn.
          </p>
        </FadeIn>

        {/* Hologram-style contact cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.id} delay={0.15 + i * 0.06}>
                <Magnetic strength={0.15}>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0C]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[#101114]/90"
                  >
                    {/* Hologram corner accents */}
                    <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-[var(--color-accent)]/30" />
                    <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[var(--color-accent)]/30" />

                    {/* Scan line effect */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-accent)] transition group-hover:border-[var(--color-accent)]/40 group-hover:bg-[var(--color-accent)]/10">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                        {card.meta}
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
                        {card.label}
                      </p>
                      <p className="mt-2 break-all text-base font-medium tracking-wide text-[var(--color-text-primary)] transition group-hover:text-white">
                        {card.value}
                      </p>
                    </div>

                    {/* Bottom technical line */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="font-mono text-[9px] tracking-widest text-white/30">
                        0{i + 1}
                      </span>
                    </div>
                  </a>
                </Magnetic>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <footer className="relative z-10 mx-auto mt-24 w-full max-w-6xl border-t border-[var(--color-border)] pt-8">
        <div className="flex flex-col gap-2 font-mono text-[11px] tracking-[0.15em] text-[var(--color-text-secondary)] uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>{SITE.name}</span>
          <span>CSE / AI & ML</span>
          <span>2026</span>
        </div>
      </footer>
    </section>
  );
}
