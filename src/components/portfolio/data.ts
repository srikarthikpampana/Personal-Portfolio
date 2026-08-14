import { Cloud, Lock, ShieldCheck, Terminal, Users, Workflow, type LucideIcon } from "lucide-react";

export const PROFILE = {
  name: "Sri Karthik Pampana",
  title: "DevOps Engineer → DevSecOps | Cloud Security",
  subtitle:
    "Automating pipelines, hardening containers, and building cloud-secure infrastructure — one step at a time on the path to DevSecOps.",
  email: "srikarthikpampana@gmail.com",
  github: "https://github.com/srikarthikpampana",
  linkedin: "https://linkedin.com/in/srikarthikpampana",
  location: "Chennai, India",
};

export type SkillGroup = { icon: LucideIcon; title: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Cloud,
    title: "Cloud",
    items: ["AWS ECS", "AWS EC2", "IAM", "AWS CDK", "AWS Services", "GCP", "Azure (basics)"],
  },
  {
    icon: Workflow,
    title: "DevOps",
    items: ["CI/CD", "Docker", "GitHub Actions"],
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
    ],
  },
  {
    icon: Terminal,
    title: "Automation",
    items: ["Scripting", "APIs", "Python", "Shell"],
  },
  {
    icon: Users,
    title: "Collaboration",
    items: ["Documentation", "Incident support", "Stakeholder coordination"],
  },
  {
    icon: Lock,
    title: "Practices",
    items: ["Least privilege", "Shift-left security", "Threat awareness"],
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
    body: "Moved into cloud and DevOps work: CI/CD pipelines in GitHub Actions, containerized workloads, infrastructure as code with AWS CDK, and day-to-day AWS operations.",
    tags: ["AWS", "CI/CD", "Docker", "AWS CDK"],
  },
  {
    phase: "Current",
    title: "Container & Application Security Remediation",
    body: "Working on a remediation agent that scans containers and applications for vulnerabilities and patches them — closing the gap between finding a CVE and fixing it, alongside my ongoing AWS and CI/CD work.",
    tags: ["Vulnerability scanning", "Remediation", "CVE triage"],
  },
  {
    phase: "Next",
    title: "DevSecOps / Cloud Security",
    body: "Targeting DevSecOps and Cloud Security engineering roles where security is built into the platform, not bolted on afterwards.",
    tags: ["DevSecOps", "Cloud Security", "Platform"],
  },
];

export type Project = {
  icon: LucideIcon;
  title: string;
  description: string;
  problem: string;
  tools: string[];
  improvement: string;
  link: string;
};

export const PROJECTS: Project[] = [];

export const SECURITY_FOCUS = [
  {
    title: "Container Hardening",
    body: "Minimal base images, non-root users, and patched dependencies.",
  },
  {
    title: "Vulnerability Remediation",
    body: "Triage by real risk, fix at the source, and verify the fix holds — the core of my remediation agent work.",
  },
  {
    title: "CI/CD Security Checks",
    body: "Working toward automated scanning and gates in GitHub Actions pipelines, not manual review.",
  },
  {
    title: "Least Privilege",
    body: "Scoped IAM roles per application, defined in CDK rather than set up by hand.",
  },
  {
    title: "Shift-Left Mindset",
    body: "Aiming to catch findings during development, not after deployment.",
  },
  {
    title: "Secure by Default",
    body: "Encryption, logging, and guardrails baked into the baseline.",
  },
  {
    title: "AWS Best Practices",
    body: "Infrastructure as code with CDK, and configuration aligned to AWS guidance across ECS, EC2, and IAM.",
  },
  {
    title: "Continuous Verification",
    body: "Repeatable checks so fixes stay fixed over time, not one-off patches.",
  },
];

export const RESUME_HIGHLIGHTS = [
  "DevSecOps focus",
  "Cloud Security focus",
  "AppSec remediation",
  "Container hardening",
  "Development background",
];

export const LEARNING = ["CompTIA Security+", "AWS CloudOps", "AWS Security Specialty"];

export const NOTES = [
  { title: "Hardening container base images", tag: "Containers" },
  { title: "Wiring security gates into CI/CD", tag: "Pipelines" },
  { title: "Automating AWS security baselines", tag: "Cloud" },
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
