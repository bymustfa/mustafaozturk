import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  itemClassName,
  slow = false,
  label,
}: {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  slow?: boolean;
  label?: string;
}) {
  const row = (hidden = false) => (
    <span
      aria-hidden={hidden || undefined}
      className={cn(
        "flex shrink-0 items-center gap-[clamp(32px,6vw,72px)] pr-[clamp(32px,6vw,72px)]",
        itemClassName,
      )}
    >
      {children}
    </span>
  );

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        aria-hidden
        className={cn(
          "flex w-max motion-reduce:animate-none",
          slow ? "animate-marquee-slow" : "animate-marquee",
        )}
      >
        {row(false)}
        {row(true)}
      </div>
      {label ? <span className="sr-only">{label}</span> : null}
    </div>
  );
}
