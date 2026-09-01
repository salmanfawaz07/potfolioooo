interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({ href, label = "LIVE PROJECT", className = "" }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center rounded-full
        border border-white/25 px-5 py-2.5
        text-xs font-medium tracking-[0.18em] text-[var(--color-text-primary)] uppercase
        transition-colors duration-300 hover:bg-white/10
        ${className}
      `}
    >
      {label}
    </a>
  );
}
