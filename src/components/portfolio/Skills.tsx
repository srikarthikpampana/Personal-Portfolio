import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { SKILL_GROUPS } from "./data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tooling across cloud, pipelines, and security"
      description="The stack I use to build, harden, and verify systems."
    >
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <RevealItem key={group.title}>
            <TiltCard className="glass-card h-full rounded-xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/70">
                  <group.icon className="h-4 w-4 text-primary" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
