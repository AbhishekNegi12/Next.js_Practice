This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
## SSR - Server Side Rendering
This is default Behaviour

## SSG - Static Site Generation
Any content which does not have metwork calls is a static page by default

## ISR or ISG - Incremental Static Re-generation
fetch in next.js caches the response
However, there are exception, fetch requests are not cached when:
- used inside a server Action
- Used inside a Route Handler that uses the POST method