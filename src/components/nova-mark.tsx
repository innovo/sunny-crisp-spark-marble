import { cn } from "@/lib/utils";

export function NovaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-5", className)} aria-hidden>
      <g fill="currentColor" transform="translate(16 16)">
        <rect x="-6.2" y="-6.2" width="12.4" height="12.4" />
        <rect x="-6.2" y="-6.2" width="12.4" height="12.4" transform="rotate(45)" />
      </g>
    </svg>
  );
}

export function NovaWordmark({
  subtitle,
  inverted,
}: {
  subtitle?: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "grid size-9 place-items-center rounded-md",
          inverted ? "bg-primary-fg text-primary" : "bg-primary text-primary-fg",
        )}
      >
        <NovaMark />
      </span>
      <span>
        <span className="block font-display text-lg leading-none font-medium">Nova</span>
        {subtitle ? (
          <span className="mt-0.5 block text-[11px] tracking-[0.14em] text-muted uppercase">{subtitle}</span>
        ) : (
          <span className="mt-0.5 block text-[11px] tracking-[0.14em] text-muted uppercase">Church</span>
        )}
      </span>
    </div>
  );
}
