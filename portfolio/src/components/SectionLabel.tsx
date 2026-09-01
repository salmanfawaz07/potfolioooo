interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-[var(--color-text-secondary)] uppercase ${className}`}>
      <span className="text-[var(--color-accent)]">{number}</span>
      <span className="h-px w-8 bg-[var(--color-border)]" />
      <span>{label}</span>
    </div>
  );
}
