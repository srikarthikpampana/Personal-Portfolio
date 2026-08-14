import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE, LEARNING } from "./data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden py-20"
    >
      <div className="hero-aura pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          Open to DevSecOps &amp; Cloud Security roles
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl">
          {PROFILE.name}
        </h1>
        <p className="gradient-text mt-4 max-w-3xl font-display text-lg font-medium sm:text-2xl">
          {PROFILE.title}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {PROFILE.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              <Mail className="mr-1 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Currently learning
          </span>
          {LEARNING.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}