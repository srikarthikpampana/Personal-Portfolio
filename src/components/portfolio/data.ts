import {
  Bot,
  Cloud,
  Network,
  ShieldCheck,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL = "https://srikarthikpampana.vercel.app";
export const PROFILE = {
  name: "Sri Karthik Pampana",
  title: "DevOps Engineer focused on DevSecOps & Cloud Security",
  subtitle:
    "I build AWS infrastructure and CI/CD pipelines, and automate container and application vulnerability remediation.",
  email: "srikarthikpampana@gmail.com",
  github: "https://github.com/srikarthikpampana",
  linkedin: "https://linkedin.com/in/srikarthikpampana",
  location: "Chennai, India",
  resume: "/resume.pdf",
};

export const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    company: "A3 Transforms",
    role: "DevOps Engineer",
    dates: "October 2025 – Present",
    current: true,
    summary:
      "Building and operating AWS infrastructure, delivery pipelines, and AI-assisted security workflows.",
    contributions: [
      "Build and maintain GitHub Actions pipelines with OIDC-based AWS role assumption.",
      "Design and maintain AWS infrastructure as code, container deployments, and application-specific access controls.",
      "Provision and maintain MLOps infrastructure and model delivery pipelines.",
      "Work on vulnerability remediation and contribute to multi-agent orchestration on Bedrock AgentCore.",
    ],
    tags: ["AWS CDK", "GitHub Actions", "ECS", "Bedrock AgentCore"],
  },
  {
    company: "CSG Lab · IIITH",
    role: "Deep Learning Intern",
    dates: "July 2024 – December 2024",
    current: false,
    summary: "Applied deep learning to a smart-city system for route planning and traffic control.",
    contributions: [
      "Designed and applied models using Raspberry Pi, APIs, and VPS servers.",
      "Optimized models for efficiency and practical deployment.",
    ],
    tags: ["Deep learning", "Raspberry Pi", "APIs", "VPS"],
  },
  {
    company: "Cyber Rakshak Org",
    role: "Digital Forensics Intern",
    dates: "May 2024 – July 2024",
    current: false,
    summary:
      "Supported digital investigations, evidence preservation, and incident response documentation.",
    contributions: [
      "Performed data recovery and log analysis using forensic and security tools.",
      "Prepared forensic reports and documentation to support incident response.",
    ],
    tags: ["Autopsy", "FTK", "Wireshark", "Burp Suite"],
  },
];

export type SkillGroup = { icon: LucideIcon; title: string; context: string; items: string[] };
export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Cloud,
    title: "AWS infrastructure",
    context: "Professional experience",
    items: ["AWS CDK", "ECS", "EC2", "IAM", "ECR", "VPC", "Amplify"],
  },
  {
    icon: Workflow,
    title: "Delivery & containers",
    context: "Professional experience",
    items: ["GitHub Actions", "Docker", "OIDC", "CI/CD pipeline design"],
  },
  {
    icon: ShieldCheck,
    title: "Application security",
    context: "Professional experience",
    items: [
      "Container scanning",
      "Vulnerability remediation",
      "AppSec",
      "Secrets management",
      "Secure SDLC",
    ],
  },
  {
    icon: Bot,
    title: "AI & MLOps",
    context: "Professional experience",
    items: ["Bedrock AgentCore", "Strands", "SageMaker", "MLflow"],
  },
  {
    icon: Terminal,
    title: "Languages & cloud",
    context: "Professional and project experience",
    items: ["Python", "Bash", "C", "SQL", "GCP", "Azure (basics)"],
  },
  {
    icon: Network,
    title: "Security & forensics",
    context: "Internship and project experience",
    items: ["Autopsy", "FTK", "Wireshark", "Burp Suite", "Nmap", "Metasploit"],
  },
];

export type ArchitectureStep = { label: string; detail: string };
export type CaseStudy = {
  slug: string;
  icon: LucideIcon;
  title: string;
  category: "Personal project";
  description: string;
  contribution: string;
  highlight: string;
  tools: string[];
  problem: string;
  approach: string;
  outcome: string;
  decisions: string[];
  validation?: string;
  architecture: ArchitectureStep[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "deepnet-guardian",
    icon: Network,
    title: "DeepNet Guardian",
    category: "Personal project",
    description:
      "A real-time network intrusion detection project combining live packet capture with custom LSTM models.",
    contribution:
      "Built the detection framework, live capture, parallel execution, and automated model deployment workflow.",
    highlight: "Live capture · LSTM-based intrusion detection",
    tools: ["Python", "LSTM", "Scapy", "Multithreading", "GitHub Actions"],
    problem:
      "Network traffic needs to be inspected as it arrives to identify potential port scans, denial-of-service traffic, and web-based attacks.",
    approach:
      "Scapy captures live packets for a custom-trained LSTM-based detection framework. Multithreading supports parallel execution. A GitHub Actions pipeline automates model deployment and updates, with monitoring and logging in the cloud environment.",
    outcome:
      "A deployed framework combines live traffic capture, model-based detection, and automated model updates.",
    decisions: [
      "Multithreading separates parallel work in the live detection framework.",
      "Automated model deployment supports repeatable updates.",
      "Monitoring and logging support operation of the deployed framework.",
    ],
    architecture: [
      { label: "Network traffic", detail: "Live packets" },
      { label: "Scapy", detail: "Packet capture" },
      { label: "LSTM model", detail: "Detection" },
      { label: "Monitoring", detail: "Logs and operations" },
    ],
  },
  {
    slug: "gcp-ctfd-deployment",
    icon: Cloud,
    title: "CTFd deployment on GCP",
    category: "Personal project",
    description:
      "A CTFd website deployed on an Ubuntu VM, with Cloud DNS domain mapping and HTTPS access.",
    contribution: "Deployed CTFd on Google Cloud and configured the domain and SSL setup.",
    highlight: "Ubuntu VM · domain mapping · HTTPS",
    tools: ["GCP", "Ubuntu", "CTFd", "Cloud DNS", "SSL"],
    problem:
      "A capture-the-flag platform needed a cloud deployment that participants could reach through a domain using encrypted connections.",
    approach:
      "Deployed CTFd on an Ubuntu VM in Google Cloud Platform, configured Cloud DNS for domain mapping, and set up SSL for HTTPS access.",
    outcome: "A functional CTFd website accessible through a configured domain and HTTPS.",
    decisions: [
      "HTTPS encrypts browser connections to the site.",
      "Cloud DNS manages the domain mapping.",
      "Ubuntu provides the VM environment for the application.",
    ],
    architecture: [
      { label: "Browser", detail: "HTTPS request" },
      { label: "Cloud DNS", detail: "Domain resolution" },
      { label: "Ubuntu VM", detail: "GCP compute" },
      { label: "CTFd", detail: "Challenge platform" },
    ],
  },
];

export const CERTIFICATIONS = [
  { title: "Google Cyber Security Professional Certificate", issuer: "Google" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy" },
  { title: "Getting Started with Cloud", issuer: "Juniper Networks" },
  { title: "Crash Course for Python", issuer: "Google" },
];
export const LEARNING = ["CompTIA Security+", "AWS CloudOps", "AWS Security Specialty"];

// Retained for the standalone Security section; the homepage now folds these themes into case studies.
export const SECURITY_FOCUS = [
  {
    title: "Container Hardening",
    body: "Minimal base images, non-root users, and patched dependencies.",
  },
  {
    title: "Vulnerability Remediation",
    body: "Scan, patch, verify, and raise changes for review.",
  },
  { title: "Least Privilege", body: "Scoped IAM roles defined in infrastructure as code." },
];
