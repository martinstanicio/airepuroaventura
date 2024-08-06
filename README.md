# airepuroaventura

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies.

```bash
pnpm install
```

Setup environment variables (read `.env.example`).

```bash
touch .env.local
```

Start the development server.

```bash
pnpm dev
```

Go to [http://localhost:3000](http://localhost:3000) to see the live preview.

## Project Structure

```plain
.
├── content/
│   └── trips.json # list of trips
├── public/
│   └── salidas/
│       └── ... # trips' images
├── src/
│   ├── app/
│   │   ├── contacto/
│   │   ├── salidas/
│   │   │   └── [slug]/
│   │   └── ... # layout, homepage, styles, etc
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   │   └── ... # shadcn/ui components
│   │   └── ... # custom components
│   └── lib/
├── .env.local # environment variables
├── package.json
├── tailwind.config.ts
└── ... # config files
```

## Command Guide

Start development server.

```bash
pnpm run dev
```

Generate production build.

```bash
pnpm run build
```

Start production server.

```bash
pnpm run start
```

Lint files for errors and warnings.

```bash
pnpm run lint
```

Format files with `prettier`.

```bash
pnpm run format
```

## Resources

- [Next.js](https://nextjs.org/docs/app)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
