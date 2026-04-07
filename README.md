# Garden

A small Next.js website for backyard gardening and attracting pollinators.

This repository uses the Next.js App Router and is configured with TypeScript and ESLint.

## Pages
- `app/companion-gardening/page.tsx` - Companion gardening
- `app/pest-management/page.tsx` - Pest management
- `app/plants/page.tsx` - Plant information
- `app/resources/page.tsx` - Gardening resources

## Requirements
- Node.js 18+ recommended
- npm

## Install and run

```powershell
cd "c:\A Gentle Garden"
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Project structure
- `app/` - Next.js App Router folder with `layout.tsx`, page files, and components.
- `app/components/` - UI components such as `Logo.tsx`, `MobileMenu.tsx`, and `SearchBar.tsx`.
- `package.json` - scripts and dependencies.
- `tsconfig.json` - TypeScript compiler configuration.
- `next.config.mjs` - Next.js configuration.
- `global.d.ts` / `next-env.d.ts` - TypeScript types for the project.
