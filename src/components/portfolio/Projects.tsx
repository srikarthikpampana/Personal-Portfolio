import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected security engineering work"
      description="Practical work across pipelines, containers, cloud baselines, and compliance automation."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.title} className="glass-card flex flex-col rounded-2xl p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/70">
                <p.icon className="h-5 w-5 text-primary" />
              </span>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} on GitHub`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <dl className="mt-5 space-y-3 border-t border-border/70 pt-5 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">Problem solved</dt>
                <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">Security improvement</dt>
                <dd className="mt-1 text-muted-foreground">{p.improvement}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-1">
              <Button asChild variant="outline" size="sm">
                <a href={p.link} target="_blank" rel="noreferrer">
                  View Project <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}