# Mohammed Salman Fawaz — Portfolio

Cinematic technical noir portfolio for an AI & ML Engineering Student.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- Three.js + React Three Fiber + Drei
- React Router
- Lucide React

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173

## Configuration

Edit **one file** to update personal links:

`src/config/site.ts`

```ts
EMAIL: "",
GITHUB_URL: "",
LINKEDIN_URL: "",
RESUME_URL: "",
```

Leave empty to hide the corresponding buttons.

## Content files

- `src/data/profile.ts` — About text & metadata
- `src/data/projects.ts` — All project case studies
- `src/data/skills.ts` — Skills + what I can build
- `src/data/certifications.ts` — Verified certifications only
- `src/data/journey.ts` — Timeline & future objectives
- `src/data/buildLog.ts` — Manual build milestones

## Notes on authenticity

- No fabricated experience, awards, metrics, or URLs.
- Projects without live/GitHub links simply omit those buttons.
- Build log stays empty until verified milestones are added.
- Future goals are clearly labelled as goals.
