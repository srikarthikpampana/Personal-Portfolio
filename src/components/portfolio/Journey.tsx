import { BriefcaseBusiness } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "./data";

export function Journey() {
  return (
    <Section
      id="experience"
      eyebrow="Professional experience"
      title="My roles, responsibilities & contributions"
      description="Professional experience across DevOps, applied deep learning, and digital forensics."
    >
      <ol className="space-y-5">
        {EXPERIENCE.map((item) => (
          <li key={item.company} className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 md:grid-cols-[0.9fr_1.4fr] md:gap-10">
              <div>
                <div className="flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-primary" />
                  {item.current && (
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs text-primary">
                      Current role
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm font-medium">{item.company}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.dates}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {item.contributions.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.current && (
                  <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                    Company-owned work is summarized at a high level. Internal code and project
                    architecture remain private.
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
