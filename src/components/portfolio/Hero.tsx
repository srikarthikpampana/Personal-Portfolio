import {
  ArrowDown,
  ArrowRight,
  Cloud,
  Download,
  Github,
  Linkedin,
  MapPin,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "./data";

const FOCUS = [
  {
    icon: Cloud,
    number: "01",
    title: "Build the foundation",
    body: "AWS CDK · ECS · scoped IAM roles",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Ship through automation",
    body: "GitHub Actions · OIDC · MLOps",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Close the security loop",
    body: "Scan · patch · verify · pull request",
  },
];

export function Hero() {
  return (
    <section id="hero" className="hero-aura relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
              Open to DevSecOps & Cloud Security roles
            </p>
            <h1 className="mt-6 max-w-xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              {PROFILE.name}
            </h1>
            <p className="gradient-text mt-5 max-w-xl font-display text-lg font-medium sm:text-xl">
              {PROFILE.title}
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PROFILE.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-11">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-11">
                <a href={PROFILE.resume} download="Sri-Karthik-Pampana-Resume.pdf">
                  <Download className="mr-1 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {PROFILE.location}
              </span>
            </div>
          </div>
          <div className="relative hidden rounded-2xl border border-primary/20 bg-card/70 p-5 shadow-[var(--shadow-soft)] sm:p-7 lg:block">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Engineering focus
              </p>
              <ShieldCheck className="h-5 w-5 text-cyan" aria-hidden="true" />
            </div>
            <p className="mt-5 font-display text-2xl font-semibold">Build. Ship. Secure.</p>
            <div className="mt-5 space-y-3">
              {FOCUS.map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/65 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {item.number}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Infrastructure and delivery experience, with security woven into the workflow.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3 border-t border-border/70 pt-6 sm:mt-12">
          {[
            { value: "AWS", label: "Cloud infrastructure" },
            { value: "CI/CD", label: "Delivery automation" },
            { value: "Security", label: "Remediation focus" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl font-semibold sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#projects"
          className="mt-6 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary"
        >
          Explore personal projects <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
