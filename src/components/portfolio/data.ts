import {
  Bot,
  Boxes,
  Cloud,
  Lock,
  ShieldCheck,
  Terminal,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

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

export type ProfessionalWork = {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
  caseStudy: {
    problem: string;
    approach: string;
    outcome: string;
  };
};

export const PROFESSIONAL_WORK: ProfessionalWork[] = [
  {
    icon: Workflow,
    title: "MLOps platform: infrastructure & training pipeline",
    description:
      "End-to-end MLOps platform: CDK-provisioned infrastructure (SageMaker Studio, a VPC with private links, an MLflow tracking server) paired with a multi-stage GitHub Actions pipeline that trains, registers, configures, deploys, and tests models across sandbox and production environments.",
    tools: ["AWS CDK", "SageMaker Studio", "MLflow", "GitHub Actions", "OIDC", "Python"],
    caseStudy: {
      problem:
        "The ML platform needed both a reproducible cloud environment for data scientists to train models in, and a reliable, auditable way to take a trained model from code to a live inference endpoint — without manual AWS console work or long-lived credentials sitting in CI.",
      approach:
        "Built the environment as CDK stacks: SageMaker Studio for development, a VPC with private links so training jobs never leave the network, and an MLflow server to track experiments. On top of that, wrote a GitHub Actions pipeline with five chained jobs — train, register, configure endpoint, deploy, test — each running under a short-lived AWS role assumed via OIDC, scoped per environment (sandbox vs. production).",
      outcome:
        "Data scientists get a self-service, reproducible training environment, and shipping a new model version is a single pipeline run instead of a manual checklist — with no static AWS keys stored anywhere in CI.",
    },
  },
  {
    icon: Boxes,
    title: "Multi-application CDK deployments",
    description:
      "A repeatable base-resources-plus-service-stack pattern used to provision ECS-based services across three separate applications, with environment-specific configuration and VPC lookups.",
    tools: ["AWS CDK", "ECS", "IAM", "Python"],
    caseStudy: {
      problem:
        "Three separate applications each needed their own AWS infrastructure — networking, IAM, an ECS service — and standing each one up by hand risked drift between them and inconsistent security posture.",
      approach:
        "Designed a shared CDK pattern of a base-resources stack (VPC lookup, shared config) plus a service stack (ECS service, task definitions, scoped IAM roles) per application, so every app followed the same structure while still being deployed and configured independently.",
      outcome:
        "New application infrastructure goes from CDK code to a running ECS service without re-deriving the networking and IAM setup each time, and all three applications share a consistent, reviewable infrastructure pattern.",
    },
  },
  {
    icon: ShieldCheck,
    title: "AI vulnerability remediation platform",
    description:
      "Full-stack platform pairing a Next.js console — chat interface, pipeline monitoring, vulnerability triage, container and application security strategy management — with an agentic remediation engine running on AWS Bedrock AgentCore. Remediation runs can be triggered from a CI pipeline (e.g. GitHub Actions) or from chat, with fixes raised back as pull requests. Deployed via AWS Amplify with IAM-role-based security instead of static credentials.",
    tools: ["Next.js", "AWS Bedrock AgentCore", "AWS Amplify", "GitHub Actions", "IAM"],
    caseStudy: {
      problem:
        "Vulnerability findings from scanners pile up faster than teams can triage and fix them by hand, and there was no single place to trigger a scan or fix — whether from a CI pipeline or on demand — watch it run, and see the resulting fix.",
      approach:
        "Built a Next.js console with a chat interface backed by an agent running on AWS Bedrock AgentCore, plus dedicated views for pipeline runs, vulnerability lists, and container/application security strategy. Pipeline runs are tagged by trigger source — a CI pipeline (e.g. a GitHub Actions workflow step calling into the platform) or the chat agent — so both show up in the same run history. The remediation pipeline scans, decides a fix strategy, patches, verifies, and raises a pull request with the fix. Deployed on AWS Amplify with SSR compute, authenticating to the agent runtime through an IAM role rather than static keys.",
      outcome:
        "Vulnerability triage and remediation moved from scattered scanner output and manual fixes to a single console where CI-triggered and chat-triggered runs, the agent's fix, and the resulting pull request are all visible together.",
    },
  },
  {
    icon: Bot,
    title: "Multi-agent orchestration platform",
    description:
      "An orchestrator agent that routes requests to specialized subagents, built on Strands and deployed to AWS Bedrock AgentCore. Containerized via ECR, provisioned with CDK, and deployed through a GitHub Actions pipeline using OIDC federation for AWS auth.",
    tools: ["Strands", "AWS Bedrock AgentCore", "AWS CDK", "GitHub Actions", "ECR"],
    caseStudy: {
      problem:
        "A single general-purpose agent struggles to be equally good at every task — routing every request to one model/prompt combination meant weaker results on specialized work than a purpose-built subagent could produce.",
      approach:
        "Built an orchestrator agent using the Strands framework that classifies incoming requests and routes them to specialized subagents, each with its own tools and prompt, deployed on AWS Bedrock AgentCore. Wrote routing tests to confirm requests land on the right subagent, containerized the agents via ECR, and wired up CDK plus a GitHub Actions pipeline with OIDC-based AWS auth for deployment.",
      outcome:
        "Requests get handled by a subagent purpose-built for that task instead of one generalist agent, and the whole system deploys through a standard CI/CD pipeline with no long-lived AWS credentials.",
    },
  },
];

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
