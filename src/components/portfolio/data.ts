import {
  Cloud,
  Container,
  GitBranch,
  Lock,
  ShieldCheck,
  Terminal,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Sri Karthik Pampana",
  title: "DevSecOps Engineer | Cloud Security | Container Security | SOC 2",
  subtitle:
    "I build secure, automated, cloud-ready systems and remediate vulnerabilities across containers, applications, and infrastructure.",
  email: "karthik@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  location: "Chennai, India",
};

export const STATS = [
  { value: 120, suffix: "+", label: "Vulnerabilities remediated" },
  { value: 40, suffix: "+", label: "Container images hardened" },
  { value: 15, suffix: "+", label: "Pipelines secured" },
  { value: 5, suffix: "", label: "SOC 2 control areas supported" },
];

export type SkillGroup = { icon: LucideIcon; title: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Cloud,
    title: "Cloud",
    items: ["AWS", "Cloud security fundamentals", "IAM", "Logging", "Monitoring"],
  },
  {
    icon: Workflow,
    title: "DevOps",
    items: ["CI/CD", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    items: [
      "Container scanning",
      "AppSec",
      "Vulnerability remediation",
      "Secrets management",
      "Secure SDLC",
      "SOC 2",
    ],
  },
  {
    icon: Terminal,
    title: "Automation",
    items: ["Scripting", "APIs", "PowerShell", "Python", "Shell"],
  },
  {
    icon: Users,
    title: "Collaboration",
    items: ["Documentation", "Incident support", "Compliance coordination"],
  },
  {
    icon: Lock,
    title: "Practices",
    items: ["Least privilege", "Shift-left security", "Policy as code", "Threat awareness"],
  },
];

export const TIMELINE = [
  {
    phase: "Phase 01",
    title: "Development Foundation",
    body: "Started in application development — writing, debugging, and shipping code. Built the engineering fundamentals that still shape how I approach security today.",
    tags: ["Programming", "APIs", "Debugging"],
  },
  {
    phase: "Phase 02",
    title: "Cloud & DevOps",
    body: "Moved into cloud and DevOps work: CI/CD pipelines, containerized workloads, infrastructure as code, and day-to-day AWS operations.",
    tags: ["AWS", "CI/CD", "Docker", "Terraform"],
  },
  {
    phase: "Phase 03",
    title: "Container Security Remediation",
    body: "Took ownership of image scanning findings — rebuilding base images, patching packages, and reducing recurring CVEs across services.",
    tags: ["Image scanning", "Hardening", "CVE triage"],
  },
  {
    phase: "Phase 04",
    title: "Application Security Remediation",
    body: "Worked with development teams to resolve application vulnerabilities, validate fixes, and prevent regressions through pipeline checks.",
    tags: ["AppSec", "SAST/DAST", "Secure SDLC"],
  },
  {
    phase: "Phase 05",
    title: "SOC 2 Compliance",
    body: "Currently moving into SOC 2 work — mapping technical controls to requirements, collecting evidence, and automating repeatable checks.",
    tags: ["SOC 2", "Evidence", "Controls"],
  },
  {
    phase: "Next",
    title: "DevSecOps / Cloud Security",
    body: "Targeting DevSecOps and Cloud Security engineering roles where security is built into the platform, not bolted on afterwards.",
    tags: ["DevSecOps", "Cloud Security", "Platform"],
  },
];

export const PROJECTS = [
  {
    icon: GitBranch,
    title: "Secure CI/CD Pipeline",
    description:
      "A build pipeline with security gates wired in at every stage, from commit to deploy.",
    problem: "Builds shipped without consistent scanning or secret checks.",
    tools: ["GitHub Actions", "Trivy", "Gitleaks", "Docker"],
    improvement: "Blocking gates for critical CVEs and leaked secrets before merge.",
    link: "https://github.com/your-username/secure-cicd-pipeline",
  },
  {
    icon: Container,
    title: "Container Security Remediation",
    description:
      "Systematic remediation workflow for vulnerable container images across services.",
    problem: "High-severity CVEs kept reappearing across service images.",
    tools: ["Docker", "Trivy", "Kubernetes", "Shell"],
    improvement: "Slim, patched base images and a repeatable rebuild process.",
    link: "https://github.com/your-username/container-remediation",
  },
  {
    icon: Cloud,
    title: "Terraform Cloud Security Setup",
    description: "Reusable Terraform modules for a least-privilege AWS baseline.",
    problem: "Manual cloud setup produced inconsistent, over-permissive access.",
    tools: ["Terraform", "AWS IAM", "CloudTrail", "tfsec"],
    improvement: "Scoped IAM roles, encrypted storage, and audit logging by default.",
    link: "https://github.com/your-username/terraform-cloud-security",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Evidence Automation",
    description: "Scripts and jobs that collect recurring SOC 2 control evidence automatically.",
    problem: "Evidence collection was manual, slow, and easy to miss.",
    tools: ["Python", "AWS APIs", "GitHub Actions"],
    improvement: "Scheduled, timestamped evidence with consistent formatting.",
    link: "https://github.com/your-username/soc2-evidence-automation",
  },
];

export const SECURITY_FOCUS = [
  { title: "Container Hardening", body: "Minimal base images, non-root users, and patched dependencies." },
  { title: "Vulnerability Remediation", body: "Triage by real risk, fix at the source, and verify the fix holds." },
  { title: "Secure Pipeline Checks", body: "SAST, dependency, secret, and image scans as build gates." },
  { title: "Least Privilege", body: "Scoped IAM roles and short-lived credentials over broad access." },
  { title: "SOC 2 Control Mindset", body: "Technical work mapped to auditable, evidence-backed controls." },
  { title: "Shift-Left Security", body: "Findings surfaced in pull requests, not weeks after release." },
  { title: "Secure by Default", body: "Encryption, logging, and guardrails baked into the baseline." },
  { title: "Cloud Best Practices", body: "Monitoring, logging, and configuration aligned to AWS guidance." },
];

export const RESUME_HIGHLIGHTS = [
  "DevSecOps focus",
  "Cloud Security focus",
  "AppSec remediation",
  "SOC 2 readiness",
  "Development background",
];

export const LEARNING = ["SOC 2 Type II", "AWS Security Specialty", "Kubernetes hardening", "OPA / Policy as Code"];

export const NOTES = [
  { title: "Hardening container base images", tag: "Containers" },
  { title: "Wiring security gates into CI/CD", tag: "Pipelines" },
  { title: "Mapping AWS controls to SOC 2", tag: "Compliance" },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#security", label: "Security" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];