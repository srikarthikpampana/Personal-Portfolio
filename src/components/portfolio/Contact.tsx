import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "./Section";
import { PROFILE } from "./data";

const ITEMS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Github, label: "GitHub", value: "github.com/your-username", href: PROFILE.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/your-profile", href: PROFILE.linkedin },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk security engineering"
      description="Open to DevSecOps, Cloud Security, and Platform Engineering opportunities."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => {
          const content = (
            <>
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 break-words text-sm font-medium">{item.value}</p>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass-card block rounded-xl p-6"
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className="glass-card rounded-xl p-6">
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
}