import { motion } from "motion/react";
import { Section } from "./Section";
import { RevealGroup } from "./Reveal";
import { SECURITY_FOCUS } from "./data";

export function Security() {
  return (
    <Section
      id="security"
      eyebrow="Security"
      title="How I approach secure engineering"
      description="Principles I apply from the first commit through to production."
    >
      <RevealGroup
        className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.06}
      >
        {SECURITY_FOCUS.map((item) => (
          <motion.div
            key={item.title}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative bg-card p-6 transition-colors hover:bg-secondary/60"
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
