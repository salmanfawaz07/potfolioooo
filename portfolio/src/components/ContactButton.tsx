import { Magnetic } from "./Magnetic";
import { SITE } from "@/config/site";

interface ContactButtonProps {
  className?: string;
  href?: string;
}

export function ContactButton({ className = "", href }: ContactButtonProps) {
  const target = href ?? (SITE.EMAIL ? `mailto:${SITE.EMAIL}` : "#contact");

  return (
    <Magnetic strength={0.25}>
      <a
        href={target}
        className={`
          inline-flex items-center justify-center rounded-full
          bg-gradient-to-r from-[#8B1524] to-[var(--color-accent)]
          px-7 py-3.5 text-sm font-medium tracking-[0.18em] text-white uppercase
          shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
          ring-1 ring-white/20
          transition-transform duration-300 hover:scale-[1.03]
          ${className}
        `}
      >
        CONTACT ME
      </a>
    </Magnetic>
  );
}
