import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { LiveProjectButton } from "@/components/LiveProjectButton";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - 1 - index) * 0.03]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="sticky top-24 origin-top"
    >
      <article className="overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
                <span className="text-[var(--color-accent)]">{project.number}</span>
                <span>{project.category}</span>
                <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px]">
                  {project.status}
                </span>
              </div>
              <h3 className="mt-6 font-display text-4xl tracking-wide md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-[var(--color-text-secondary)]">
                {project.shortDescription}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to={`/work/${project.id}`}
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10 px-6 py-3 text-xs font-medium tracking-[0.18em] text-white uppercase transition hover:bg-[var(--color-accent)]/20"
              >
                VIEW PROJECT
              </Link>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/10"
                >
                  SOURCE CODE
                </a>
              )}
              {project.liveUrl && <LiveProjectButton href={project.liveUrl} />}
            </div>
          </div>

          {/* Abstract visual */}
          <div className="relative min-h-[280px] bg-gradient-to-br from-[#0A0A0C] to-[#151518] lg:min-h-[360px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-4 rounded-full border border-[var(--color-accent)]/20" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-white/10">
                  {project.number}
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] tracking-wider text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionLabel number="03" label="SELECTED WORK" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-display text-4xl tracking-wide md:text-6xl lg:text-7xl">
            PROOF OF WHAT I BUILD.
          </h2>
        </FadeIn>

        <div className="relative mt-20 space-y-8 pb-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
