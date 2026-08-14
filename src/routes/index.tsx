import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Projects } from "@/components/portfolio/Projects";
import { Security } from "@/components/portfolio/Security";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Sri Karthik Pampana — DevSecOps & Cloud Security Engineer";
const DESCRIPTION =
  "Portfolio of Sri Karthik Pampana: DevSecOps and Cloud Security Engineer working across container security, AppSec remediation, AWS, CI/CD, and SOC 2 compliance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Security />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
