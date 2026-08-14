import { Section } from "./Section";
import { SECURITY_FOCUS } from "./data";

export function Security() {
  return (
    <Section
      id="security"
      eyebrow="Security"
      title="How I approach secure engineering"
      description="Principles I apply from the first commit through to production."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SECURITY_FOCUS.map((item) => (
          <div
            key={item.title}
            className="bg-card p-6 transition-colors hover:bg-secondary/60"
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}