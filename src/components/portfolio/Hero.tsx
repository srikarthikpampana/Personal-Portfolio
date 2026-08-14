import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE, LEARNING } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll("[data-hero-item]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.1,
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !auraRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(auraRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(gridRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden py-20"
    >
      <div ref={auraRef} className="hero-aura pointer-events-none absolute inset-0" aria-hidden />
      <div
        ref={gridRef}
        className="grid-pattern pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div
        ref={rootRef}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8"
      >
        <div
          data-hero-item
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          Open to DevSecOps &amp; Cloud Security roles
        </div>

        <h1
          data-hero-item
          className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl"
        >
          {PROFILE.name}
        </h1>
        <p
          data-hero-item
          className="gradient-text mt-4 max-w-3xl font-display text-lg font-medium sm:text-2xl"
        >
          {PROFILE.title}
        </p>
        <p
          data-hero-item
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {PROFILE.subtitle}
        </p>

        <div data-hero-item className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </motion.div>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
          </span>
        </div>

        <div data-hero-item className="mt-10 flex flex-wrap items-center justify-center gap-2">
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
