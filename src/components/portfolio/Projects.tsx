import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Architecture } from "./Architecture";
import { CASE_STUDIES } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Personal projects"
      title="Projects I've built independently"
      description="My own work in network intrusion detection and cloud deployment."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {CASE_STUDIES.map((work, index) => (
          <article
            key={work.slug}
            className="glass-card flex h-full flex-col rounded-2xl p-6 sm:p-7"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <work.icon className="h-5 w-5 text-primary" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {work.category}
              </p>
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              <Link to="/work/$slug" params={{ slug: work.slug }} className="hover:text-primary">
                {work.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{work.description}</p>
            <p className="mt-4 text-sm font-medium text-primary">{work.highlight}</p>
            {index < 3 && (
              <div className="mt-5 border-t border-border/70 pt-4">
                <Architecture steps={work.architecture} compact />
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {work.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <Link
                to="/work/$slug"
                params={{ slug: work.slug }}
                aria-label={`Read case study: ${work.title}`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
              >
                Read case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
