import { Link, useParams } from "react-router-dom";
import { getProjectById } from "@/data/projects";
import { LiveProjectButton } from "@/components/LiveProjectButton";
import { Navigation } from "@/components/Navigation";
import { FadeIn } from "@/components/FadeIn";

export function ProjectCaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-5">
        <p className="font-mono text-sm tracking-wider text-[var(--color-text-secondary)]">
          PROJECT NOT FOUND
        </p>
        <Link to="/#work" className="text-[var(--color-accent)] underline">
          Back to work
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-svh px-5 pb-24 pt-28 md:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              to="/#work"
              className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase hover:text-white"
            >
              ← BACK TO WORK
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-[11px] tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
              <span className="text-[var(--color-accent)]">{project.number}</span>
              <span>{project.category}</span>
              <span className="rounded-full border border-white/15 px-2.5 py-0.5">
                {project.status}
              </span>
              {project.year && <span>{project.year}</span>}
            </div>
            <h1 className="mt-6 font-display text-5xl tracking-wide md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
              {project.description}
            </p>
          </FadeIn>

          {(project.liveUrl || project.githubUrl) && (
            <FadeIn delay={0.15} className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && <LiveProjectButton href={project.liveUrl} />}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium tracking-[0.18em] uppercase hover:bg-white/10"
                >
                  SOURCE CODE
                </a>
              )}
            </FadeIn>
          )}

          {project.problem && (
            <FadeIn delay={0.2} className="mt-16">
              <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                The Problem
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-primary)]">
                {project.problem}
              </p>
            </FadeIn>
          )}

          {project.approach && (
            <FadeIn delay={0.25} className="mt-12">
              <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                The Approach
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-primary)]">
                {project.approach}
              </p>
            </FadeIn>
          )}

          {project.architecture && (
            <FadeIn delay={0.3} className="mt-12">
              <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                The System
              </h2>
              <p className="mt-4 text-lg leading-relaxed whitespace-pre-line text-[var(--color-text-primary)]">
                {project.architecture}
              </p>
            </FadeIn>
          )}

          <FadeIn delay={0.35} className="mt-12">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
              Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-[var(--color-surface)] px-4 py-1.5 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>

          {project.learned && (
            <FadeIn delay={0.4} className="mt-12">
              <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
                What I Learned
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-primary)]">
                {project.learned}
              </p>
            </FadeIn>
          )}

          <FadeIn delay={0.45} className="mt-20">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-[0.15em] text-[var(--color-accent)] uppercase hover:underline"
            >
              ← BACK TO WORK
            </Link>
          </FadeIn>
        </div>
      </main>
    </>
  );
}
