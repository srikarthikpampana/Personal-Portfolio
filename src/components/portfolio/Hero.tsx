import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE, LEARNING } from "./data";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const auraY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden py-20"
    >
      <motion.div
        style={{ y: auraY }}
        className="hero-aura pointer-events-none absolute inset-0"
        aria-hidden
      />
      <motion.div
        style={{ y: gridY }}
        className="grid-pattern pointer-events-none absolute inset-0"
        aria-hidden
      />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          Open to DevSecOps &amp; Cloud Security roles
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl"
        >
          {PROFILE.name}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="gradient-text mt-4 max-w-3xl font-display text-lg font-medium sm:text-2xl"
        >
          {PROFILE.title}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {PROFILE.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
