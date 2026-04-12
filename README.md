This is a static-exported [Next.js](https://nextjs.org) project for `turkiyeteknikservis.com`.

## Getting Started

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Create a production export locally:

```bash
npm run build
```

This writes the deployable static site to `dist/`.

## Build Artifacts

`dist/` is a generated build artifact and is intentionally not committed to git.

Source code is versioned; the Cloudflare Pages workflow builds `dist/` during deployment.

## Deployment

Deployments run through GitHub Actions and publish the generated `dist/` directory to Cloudflare Pages.

Relevant files:

- `.github/workflows/deploy.yml`
- `next.config.ts`
- `CLOUDFLARE_SECURITY.md`
