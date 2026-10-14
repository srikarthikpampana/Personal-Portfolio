# Sri Karthik Pampana — Portfolio

Portfolio built with TanStack Start, React, Vite, and Tailwind CSS.

## Development

Use Node.js 22.12+ and the existing npm lockfile:

```sh
npm ci
npm run dev
```

## Validation and production build

```sh
npm run check:assets
npx tsc --noEmit
npm run build
npm run check:site -- http://localhost:8080
```

`check:assets` runs automatically before production builds. `check:site` requires a running server and can also be run against the deployed URL after release:

```sh
npm run check:site -- https://srikarthikpampana.vercel.app
```

It checks the homepage, personal case-study routes, PDF response, social-preview and indexing assets, sitemap coverage, and unknown-route 404 behavior. It also checks that company case-study URLs are absent from navigation and the sitemap and return 404.

## Content

- `src/components/portfolio/data.ts`: profile, dated experience, skills, certifications, and case studies.
- `src/components/portfolio/`: homepage sections and architecture diagrams.
- `src/routes/work/$slug.tsx`: shareable case-study pages and route-specific SEO metadata.
- `public/resume.pdf`: supplied resume, served by every resume button.
- `public/sitemap.xml`: homepage and case-study URLs. Update when adding case studies.

Experience dates, education, completed certifications, and personal projects follow the supplied resume. Professional experience contains high-level role responsibilities. Company code, internal architecture, and detailed company case-study pages are excluded. Public case studies are limited to personal projects: DeepNet Guardian and the GCP CTFd deployment. Add public repository links and performance measurements only when verified.
