This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pexels Video Setup (Single Vercel Deploy)

This project now resolves background videos through a built-in Next.js API route:

- `/api/pexels/video/skyline`
- `/api/pexels/video/hero`
- `/api/pexels/video/interior`
- `/api/pexels/video/attractions`
- `/api/pexels/video/dining`
- `/api/pexels/video/events`

These routes run on Vercel Serverless Functions inside the same deployment. No separate backend service (Railway/Render/etc.) is required.

1. Add `PEXELS_API_KEY` in Vercel Project Settings -> Environment Variables.
2. Redeploy.
3. (Optional for local dev) add `PEXELS_API_KEY=your_key` to `.env.local`.

If `PEXELS_API_KEY` is missing or the Pexels API is unavailable, the app automatically falls back to stable public Pexels CDN video URLs.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
