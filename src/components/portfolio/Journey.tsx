import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";
import { TIMELINE } from "./data";

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <Section
      id="journey"
      eyebrow="Journey"
      title="Development → Cloud → Security → DevSecOps"
      description="One continuous path: each step built on the last, moving closer to security engineering."
    >
      <div ref={containerRef} className="relative">
        <div className="absolute inset-y-0 left-0 w-px bg-border" aria-hidden />
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="absolute inset-y-0 left-0 w-px bg-primary"
          aria-hidden
        />

        <RevealGroup as="ol" className="relative space-y-6 pl-6 sm:pl-10" stagger={0.15}>
          {TIMELINE.map((item, i) => (
            <RevealItem key={item.title} as="li" className="relative">
              <span
                className={`absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-background sm:-left-[47px] ${
                  i === TIMELINE.length - 1 ? "bg-cyan" : "bg-primary"
                }`}
              />
              <div className="glass-card rounded-xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {item.phase}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
