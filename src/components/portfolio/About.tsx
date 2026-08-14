import { Code2, Cloud, ShieldCheck, FileCheck } from "lucide-react";
import { Section } from "./Section";

const PILLARS = [
  { icon: Cloud, title: "AWS Infrastructure", body: "Deploying applications across ECS, EC2, IAM, and other AWS services, with infrastructure defined in CDK." },
  { icon: FileCheck, title: "CI/CD & Automation", body: "GitHub Actions pipelines built and maintained end-to-end." },
  { icon: ShieldCheck, title: "Vulnerability Remediation", body: "Scanning and patching containers and applications via a remediation agent." },
  { icon: Code2, title: "Deployment Debugging", body: "Enough development skill to debug and fix issues blocking a release." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An engineer who bridges building and securing"
      description="I work across CI/CD, cloud infrastructure, and security remediation — building GitHub Actions pipelines, deploying applications on AWS with CDK, and maintaining a remediation agent that scans and patches container and application vulnerabilities."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            My day-to-day centers on deploying and running applications on AWS — ECS containers, EC2
            instances, IAM policies scoped per application, and other AWS services as each deployment
            needs — with infrastructure defined as CDK stacks and delivered through CI/CD pipelines I
            build and maintain in GitHub Actions.
          </p>
          <p>
            On the security side, I work on a remediation agent that scans containers and applications
            for vulnerabilities and patches them — closing the gap between finding a CVE and actually
            fixing it.
          </p>
          <p>
            I also do enough development work to debug and resolve issues that come up during
            deployment, so releases don't stall on problems I can fix myself.
          </p>
          <p>
            I am building toward full DevSecOps and Cloud Security engineering roles, where this
            remediation and infrastructure work becomes the core of the job, not a part of it.
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