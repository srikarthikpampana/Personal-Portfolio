import { ArrowUpRight, Github, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { PROJECTS, PROFESSIONAL_WORK } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Professional work & personal projects"
      description="Generic write-ups of work I've done professionally, plus personal projects with public code."
    >
      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Professional work
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Described generically — no company names, internal code, or proprietary details.
        </p>

        <RevealGroup className="mt-6 grid gap-6 lg:grid-cols-2">
          {PROFESSIONAL_WORK.map((w) => (
            <RevealItem key={w.title} as="article">
              <TiltCard className="glass-card group/card relative flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-200 group-hover/card:opacity-100 group-focus-within/card:opacity-100 sm:right-5 sm:top-5">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View case study <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] max-w-lg overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/70">
                            <w.icon className="h-4 w-4 text-primary" />
                          </span>
                          <DialogTitle>{w.title}</DialogTitle>
                        </div>
                        <DialogDescription>{w.description}</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            Problem
                          </p>
                          <p className="mt-1.5 leading-relaxed text-muted-foreground">
                            {w.caseStudy.problem}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            Approach
                          </p>
                          <p className="mt-1.5 leading-relaxed text-muted-foreground">
                            {w.caseStudy.approach}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            Outcome
                          </p>
                          <p className="mt-1.5 leading-relaxed text-muted-foreground">
                            {w.caseStudy.outcome}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 border-t border-border/70 pt-4">
                          {w.tools.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/70">
                  <w.icon className="h-5 w-5 text-primary" />
                </span>

                <h4 className="mt-5 max-w-[85%] text-lg font-semibold">{w.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {w.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Personal projects
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Public code you can click through and verify.
        </p>

        {PROJECTS.length === 0 ? (
          <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <RevealItem
                key={i}
                className="glass-card flex flex-col items-center justify-center rounded-2xl p-10 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/70">
                  <Hammer className="h-5 w-5 text-primary" />
                </span>
                <h4 className="mt-4 text-base font-semibold">Coming soon</h4>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  This section is being updated with real project write-ups. Check back shortly.
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <RevealGroup className="mt-6 grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p) => (
              <RevealItem key={p.title} as="article">
                <TiltCard className="glass-card flex h-full flex-col rounded-2xl p-6 sm:p-7">
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

                  <h4 className="mt-5 text-lg font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <dl className="mt-5 space-y-3 border-t border-border/70 pt-5 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">
                        Problem solved
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">
                        Security improvement
                      </dt>
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
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </Section>
  );
}
