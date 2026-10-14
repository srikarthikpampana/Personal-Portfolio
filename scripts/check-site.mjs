import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = new URL(process.argv[2] || "http://localhost:8080");
const content = await readFile(
  new URL("../src/components/portfolio/data.ts", import.meta.url),
  "utf8",
);
const slugs = [...content.matchAll(/slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);
const companySlugs = [
  "ai-vulnerability-remediation",
  "mlops-training-pipeline",
  "multi-application-cdk",
  "multi-agent-orchestration",
];
assert.deepEqual(
  slugs,
  ["deepnet-guardian", "gcp-ctfd-deployment"],
  "Only personal projects should have public case studies",
);
async function page(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  return response;
}
const home = await (await page("/")).text();
for (const text of [
  "Sri Karthik Pampana",
  "A3 Transforms",
  "DeepNet Guardian",
  "Cyber Rakshak Org",
])
  assert(home.includes(text), `Missing homepage content: ${text}`);
assert(!home.includes("Coming soon"), "Homepage contains unfinished placeholders");
assert(home.includes("Personal projects"), "Projects must be labeled as personal work");
assert(home.includes("Professional experience"), "Company experience needs a separate section");
assert(
  home.indexOf('id="projects"') < home.indexOf('id="experience"'),
  "Personal projects should precede professional experience",
);
assert(home.includes('href="/resume.pdf"'), "Homepage resume link is missing");
for (const slug of slugs) {
  const html = await (await page(`/work/${slug}`)).text();
  assert(html.includes("Architecture at a glance"), `Case study missing at ${slug}`);
  assert(
    html.includes(`https://srikarthikpampana.vercel.app/work/${slug}`),
    `Canonical metadata missing at ${slug}`,
  );
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `Duplicate canonicals at ${slug}`);
}
const resume = await page("/resume.pdf");
assert(
  resume.headers.get("content-type")?.includes("application/pdf"),
  "Resume must be served as a PDF",
);
const pdf = Buffer.from(await resume.arrayBuffer());
assert.equal(pdf.subarray(0, 5).toString(), "%PDF-", "Resume response is not a PDF");
for (const asset of ["/og-image.png", "/robots.txt", "/favicon.svg"]) await page(asset);
const sitemap = await (await page("/sitemap.xml")).text();
for (const slug of slugs) assert(sitemap.includes(`/work/${slug}`), `Sitemap is missing ${slug}`);
for (const slug of companySlugs) {
  assert(!home.includes(`/work/${slug}`), `Company case study is linked on the homepage: ${slug}`);
  assert(
    !sitemap.includes(`/work/${slug}`),
    `Company case study is listed in the sitemap: ${slug}`,
  );
  assert.equal(
    (await fetch(new URL(`/work/${slug}`, base))).status,
    404,
    `Company case study must not be published: ${slug}`,
  );
}
assert.equal(
  (await fetch(new URL("/work/not-a-real-case-study", base))).status,
  404,
  "Unknown case study should return 404",
);
console.log(
  `Site checks passed: personal projects, separate professional experience, ${slugs.length} personal case studies, company case-study 404s, PDF resume, and SEO assets.`,
);
