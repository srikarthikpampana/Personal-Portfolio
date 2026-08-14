import { motion } from "motion/react";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { RESUME_HIGHLIGHTS, NOTES } from "./data";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume & notes"
      description="A snapshot of the profile, plus technical writing coming soon."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Resume highlights</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {RESUME_HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 shrink-0 text-cyan" />
                {h}
              </li>
            ))}
          </ul>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 inline-block"
          >
            <Button asChild size="lg">
              <a href="/resume.pdf" download>
                <Download className="mr-1 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Notes & learning</h3>
            <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              Coming soon
            </span>
          </div>
          <ul className="mt-5 divide-y divide-border/70">
            {NOTES.map((n) => (
              <li key={n.title} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="text-muted-foreground">{n.title}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{n.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}