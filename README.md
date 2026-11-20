# AI Tools Hub

Premium dark SaaS-style AI tools directory built with React, Vite, React Router and Lucide React.

## Run locally

1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Included in this frontend

- Home, Explore, Categories, Category details, Tool details
- Trending, New arrivals, Compare, Submit tool
- Login, Register, Dashboard, Favorites, Profile
- Admin dashboard, About, Contact, Privacy, Terms
- 100 sample AI tool records
- Search, category/pricing filters, sorting, favorites and compare selection
- Theme toggle and mobile navigation
- Favorites and demo session persisted in localStorage

## Important

This is a frontend starter, not a production backend. Login/register, reviews, submissions and admin data are demo/local-only. Before public launch, connect a secure backend, database, real authentication, server-side admin authorization, validation and moderation. Tool details/pricing are sample directory data and must be verified against official websites before publishing.

## Main structure

- `src/data/tools.js` — 100 sample tool records
- `src/components/` — reusable UI
- `src/pages/` — page components
- `src/context/` — app state
- `src/styles.css` — design system and responsive styling
