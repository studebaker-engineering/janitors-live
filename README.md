# Janitors

React + TypeScript + Vite with React Compiler and Biome.

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — check lint rules, formatting, and imports
- `npm run lint:fix` — apply safe fixes and formatting
- `npm run format` — format files

## Upcoming shows

Copy `.env.example` to `.env.local` and set `VITE_SHOWS_CSV_URL` to the Google
Sheet's published public CSV URL. Restart Vite after changing it. The sheet must
have the headers `date,venue,location,bands`; dates must use `M/D/YYYY` or
`MM/DD/YYYY`. Quote fields containing commas using normal CSV quoting. Bands
remain a single string.

Set `VITE_SHOWS_CSV_URL` in Netlify's environment variables as well, then rebuild
and deploy. Vite embeds this public URL at build time; do not put secrets in it.
The browser downloads the CSV on mount using Papa Parse. The published URL must
allow browser requests (CORS); no proxy or backend is provided.

Invalid or missing dates are skipped. Valid shows are sorted chronologically,
with today's shows included in Upcoming Shows using the visitor's local
calendar date. Past shows appear in the Live Archive, most recent first. Original CSV date strings are displayed unchanged. Empty venue,
location, or bands fields display `TBA`. Network, CSV parsing, and missing-header
errors display a friendly error; an empty schedule displays a separate message.
