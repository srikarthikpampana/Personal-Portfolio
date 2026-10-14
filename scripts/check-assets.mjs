import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

for (const asset of ["resume.pdf", "og-image.png", "favicon.svg", "robots.txt", "sitemap.xml"]) {
  const file = await readFile(new URL(`../public/${asset}`, import.meta.url));
  assert(file.length > 0, `${asset} is empty`);
  if (asset === "resume.pdf")
    assert.equal(file.subarray(0, 5).toString(), "%PDF-", "Resume must be a PDF");
}
console.log("Required public assets are present, including a valid PDF resume.");
