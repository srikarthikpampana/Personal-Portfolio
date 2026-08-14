import { Code2, Cloud, ShieldCheck, FileCheck } from "lucide-react";
import { Section } from "./Section";

const PILLARS = [
  { icon: Code2, title: "Development background", body: "Comfortable reading and fixing code, not just reporting findings." },
  { icon: Cloud, title: "Cloud & DevOps", body: "Hands-on with AWS, containers, CI/CD, and infrastructure as code." },
  { icon: ShieldCheck, title: "Security remediation", body: "Container and application vulnerabilities fixed and verified." },
  { icon: FileCheck, title: "Compliance direction", body: "Moving into SOC 2 control mapping and evidence automation." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An engineer who bridges building and securing"
      description="I started in development, moved into cloud and DevOps, and now work at the point where engineering meets security. That path means I fix vulnerabilities with the context of how the system was built — and automate the fix so it stays fixed."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            My day-to-day sits across container security remediation and application vulnerability
            resolution: triaging scanner output, rebuilding and hardening images, patching dependencies,
            and working with developers to close application findings properly rather than suppressing them.
          </p>
          <p>
            Alongside that, I am moving into SOC 2 compliance work — mapping the technical controls we
            already run to audit requirements and automating the evidence behind them. Automation is the
            common thread: if a check is repeatable, it belongs in a pipeline, not a checklist.
          </p>
          <p>
            I am targeting DevSecOps and Cloud Security engineering roles at product-based companies, where
            security is designed into the platform and measured continuously.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.title} className="glass-card rounded-xl p-5">
              <p.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}