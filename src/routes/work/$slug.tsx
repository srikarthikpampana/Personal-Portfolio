import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Download, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Architecture } from "@/components/portfolio/Architecture";
import { CASE_STUDIES, PROFILE, SITE_URL } from "@/components/portfolio/data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((item) => item.slug === params.slug);
    if (!study) throw notFound();
    const { icon: _icon, ...content } = study;
    return { study: content };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { study } = loaderData;
    const title = `${study.title} — Sri Karthik Pampana`;
    const url = `${SITE_URL}/work/${study.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: study.description },
        { property: "og:title", content: title },
        { property: "og:description", content: study.description },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: study.description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Nav homeLinks />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-6xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32"
      >
        <Link
          to="/"
          hash="projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to personal projects
        </Link>
        <header className="mt-6 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {study.category} · Case study
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{study.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {study.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>
        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm font-semibold text-primary">{study.highlight}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.contribution}</p>
        </div>
        <section aria-labelledby="architecture-title" className="mt-12">
          <h2 id="architecture-title" className="text-2xl font-semibold">
            Architecture at a glance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Simplified flow of the system.</p>
          <div className="mt-5">
            <Architecture steps={study.architecture} />
          </div>
        </section>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-9">
            {[
              { title: "The problem", text: study.problem },
              { title: "My contribution", text: study.contribution },
              { title: "The approach", text: study.approach },
              ...(study.validation ? [{ title: "Verification", text: study.validation }] : []),
              { title: "The outcome", text: study.outcome },
            ].map((item) => (
              <section key={item.title}>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </section>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Engineering decisions</h2>
            </div>
            <ul className="mt-5 list-disc space-y-4 pl-4 text-sm leading-relaxed text-muted-foreground">
              {study.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="mt-14 flex flex-wrap gap-4 border-t border-border pt-7">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
          >
            Discuss this project <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.resume}
            download="Sri-Karthik-Pampana-Resume.pdf"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
