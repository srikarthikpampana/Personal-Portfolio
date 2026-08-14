import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border/60 py-20 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </Reveal>
        <Reveal className="mt-12" delay={0.12}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
