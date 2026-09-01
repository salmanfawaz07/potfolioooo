import { motion } from "framer-motion";
import { HeroScene } from "@/three/HeroScene";
import { ContactButton } from "@/components/ContactButton";
import { Magnetic } from "@/components/Magnetic";
import { SITE } from "@/config/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-10 pt-24 md:px-8 md:pt-28"
    >
      {/* 3D Globe Animation */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Portrait - moved UP */}
      <div className="pointer-events-none absolute bottom-[6%] left-[1.5%] z-20 hidden h-[72vh] min-h-[420px] max-h-[760px] lg:block">
        <motion.img
          src="/portrait.jpg"
          alt="Mohammed Salman Fawaz"
          initial={reduced ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="h-full w-auto max-w-none select-none bg-transparent object-cover object-center"
          style={{ objectPosition: "center top" }}
          draggable={false}
        />
      </div>

      {/* Mobile Portrait */}
      <div className="pointer-events-none absolute left-2 top-20 z-20 h-48 w-36 opacity-80 sm:h-56 sm:w-44 lg:hidden">
        <img
          src="/portrait.jpg"
          alt=""
          className="h-full w-full select-none bg-transparent object-cover object-center"
          style={{ objectPosition: "center top" }}
          draggable={false}
        />
      </div>

      {/* ===================== RIGHT SIDE CONTENT ===================== */}
      <div className="relative z-10 flex h-full flex-col justify-between lg:ml-[42%]">
        {/* Editorial statement */}
        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          animate="show"
          className="max-w-xs"
        >
          <motion.p
            variants={item}
            className="font-mono text-[10px] leading-relaxed tracking-[0.18em] text-[var(--color-text-secondary)] uppercase"
          >
            Building intelligent
            <br />
            systems through
            <br />
            code & curiosity.
          </motion.p>
        </motion.div>

        {/* Name */}
        <div className="my-auto">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative"
          >
            <div className="absolute -top-8 right-0 font-mono text-[9px] tracking-[0.35em] text-white/20 uppercase">
              SUBJECT_01 // AI_ML
            </div>

            <h1 className="font-display text-[clamp(3.6rem,12vw,9.5rem)] leading-[0.82] tracking-[0.01em] text-right">
              <span className="relative block text-[var(--color-text-primary)]">
                MOHAMMED
                <span className="absolute -bottom-1 right-0 h-px w-full bg-gradient-to-l from-[var(--color-accent)]/60 to-transparent" />
              </span>

              <span className="relative mt-1 block text-[var(--color-text-primary)]">
                <span className="text-[var(--color-accent)]">SAL</span>
                MAN
              </span>

              <span className="relative mt-1 block text-[var(--color-text-secondary)]">
                FAWAZ
                <span className="ml-3 inline-block align-middle font-mono text-[10px] tracking-[0.3em] text-[var(--color-accent)]/70">
                  // 03
                </span>
              </span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="ml-auto mt-6 h-px w-3/4 origin-right bg-gradient-to-l from-white/30 via-white/10 to-transparent"
            />
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-5 flex flex-wrap justify-end gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.18em] text-[var(--color-text-secondary)] uppercase"
          >
            <span>CSE / AI & ML</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Engineering Student</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>India</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>{SITE.educationPeriod}</span>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-medium tracking-[0.18em] text-white uppercase backdrop-blur-sm transition hover:bg-white/10"
              >
                VIEW WORK
              </a>
            </Magnetic>
            {SITE.RESUME_URL && (
              <a
                href={SITE.RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-[0.15em] text-[var(--color-text-secondary)] uppercase underline-offset-4 hover:text-white hover:underline"
              >
                DOWNLOAD RESUME
              </a>
            )}
            <ContactButton className="ml-0 sm:ml-2" />
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-cyan)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)]" />
              </span>
              SYSTEM STATUS
            </div>
            <div className="mt-1 pl-3.5 text-[var(--color-text-primary)]">BUILDING</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}