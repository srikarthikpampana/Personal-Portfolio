import { Cloud, GraduationCap, ShieldCheck, Workflow } from "lucide-react";
import { Section } from "./Section";

const STRENGTHS = [
  {
    icon: Cloud,
    title: "Reproducible infrastructure",
    body: "CDK stacks for AWS networking, ECS services, and scoped IAM roles.",
  },
  {
    icon: Workflow,
    title: "Automated delivery",
    body: "GitHub Actions pipelines with OIDC authentication and environment-specific deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Security remediation",
    body: "Container and application findings connected to patches, verification, and reviewable pull requests.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An engineering foundation. A security mindset."
      description="I'm a DevOps Engineer at A3 Transforms, working across AWS infrastructure, CI/CD, MLOps, and AI-assisted vulnerability remediation. My background in digital forensics and applied deep learning shapes how I approach building and securing systems."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {STRENGTHS.map((item) => (
          <div key={item.title} className="rounded-xl border border-border p-6">
            <item.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-5">
        <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
        <div>
          <p className="text-sm font-medium">
            B.Tech · Computer Science with Cyber Security · 2025
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Kakinada Institute of Engineering and Technology, Andhra Pradesh, India
          </p>
        </div>
      </div>
    </Section>
  );
}
