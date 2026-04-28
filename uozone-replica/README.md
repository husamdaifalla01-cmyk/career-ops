# uoZone replica

React + Vite + TypeScript + Tailwind replica of the uOttawa uoZone portal and the PeopleSoft View My Grades flow.

## Run locally

```bash
cd uozone-replica
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Routes

- `/` — uoZone home (Welcome bar, brand header, primary nav, dashboard cards)
- `/services`, `/finances`, `/applications` — placeholder pages
- `/academics` — bridge with link into the PeopleSoft flow
- `/ps/term-info` — term selector (PeopleSoft)
- `/ps/grades/:termId` — class grades + term statistics for a term

## Data

Real data for `2025 Spring/Summer Term` (Maurice Ayoub). Plausible placeholder data for `2024 Fall`, `2025 Winter`, `2025 Fall`. Other terms show "No grades posted for this term yet." — fill them in inside `src/data/grades.ts`.
