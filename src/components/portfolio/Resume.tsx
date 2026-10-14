import { Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { CERTIFICATIONS, LEARNING, PROFILE } from "./data";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume & learning"
      title="Experience you can take with you"
      description="My professional background, completed certifications, and current study priorities."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Resume · PDF</p>
          <h3 className="mt-4 text-2xl font-semibold">DevOps, with a security focus</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            AWS infrastructure, CI/CD automation, MLOps, vulnerability remediation, and a foundation
            in digital forensics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="min-h-11">
              <a href={PROFILE.resume} download="Sri-Karthik-Pampana-Resume.pdf">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="min-h-11">
              <a href={PROFILE.resume} target="_blank" rel="noreferrer">
                View PDF <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-border p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Completed certifications</h3>
          <ul className="mt-5 space-y-4">
            {CERTIFICATIONS.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm font-medium">Currently studying</p>
            <p className="mt-1 text-xs text-muted-foreground">In progress</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {LEARNING.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
