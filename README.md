# kaniz.dev (Next.js)

A personal technical site with:
- Interactive resume
- Blog powered by Hashnode as headless CMS
- Applications portfolio

## Modernized stack

- Next.js `^15.3.2`
- React `^19.2.0`
- Node `24.x` (via `engines` and `.nvmrc`)

These upgrades replace legacy framework versions that carried known ecosystem vulnerabilities and runtime incompatibilities.

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - lint with Next.js rules

## Hashnode setup

Set your publication host as an environment variable:

```bash
NEXT_PUBLIC_HASHNODE_HOST=your-publication.hashnode.dev
```

Then run:

```bash
npm run dev
```

## Security note

`npm audit` could not be executed in this environment due to blocked npm audit registry access (HTTP 403). Run `npm audit` in CI or a network with npm advisory access for a full vulnerability report.
