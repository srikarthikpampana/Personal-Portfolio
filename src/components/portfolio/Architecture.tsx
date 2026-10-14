import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureStep } from "./data";

export function Architecture({
  steps,
  compact = false,
}: {
  steps: ArchitectureStep[];
  compact?: boolean;
}) {
  return (
    <ol
      aria-label="Architecture flow"
      className={
        compact
          ? "flex flex-wrap items-center gap-2"
          : "grid gap-3 sm:flex sm:flex-wrap sm:items-stretch"
      }
    >
      {steps.map((step, index) => (
        <li
          key={step.label}
          className={
            compact ? "flex items-center gap-2" : "flex min-w-0 items-center gap-2 sm:flex-1"
          }
        >
          <div
            className={
              compact
                ? "rounded-md border border-primary/20 bg-primary/5 px-2.5 py-2 font-mono text-[11px] text-foreground"
                : "w-full min-w-0 rounded-xl border border-primary/20 bg-primary/5 p-4"
            }
          >
            {!compact && (
              <p className="mb-2 font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
            )}
            <p className={compact ? "" : "text-sm font-semibold"}>{step.label}</p>
            {!compact && (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
            )}
          </div>
          {index < steps.length - 1 && (
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 text-primary sm:block"
              aria-hidden="true"
            />
          )}
          {!compact && index < steps.length - 1 && (
            <ArrowDown className="h-4 w-4 shrink-0 text-primary sm:hidden" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
