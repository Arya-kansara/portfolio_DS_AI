# Arya Kansara — Data Scientist | ML & Generative AI Portfolio

React + Vite + Tailwind CSS + Framer Motion. Dark glassmorphism theme with a
violet-to-cyan "neural network" identity, distinct from the Data Analyst portfolio.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, or any static host.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or drag-and-drop the `dist/` folder at vercel.com after `npm run build`.

## Editing content

Everything — name, bio, skills, project bullets, links — lives in one file:

```
src/data/content.js
```

**Important:** the Notegoo project link currently points to your GitHub profile
(https://github.com/Arya-kansara) as a placeholder. Once Notegoo has its own repo,
update the `link` field for it in `src/data/content.js`.

## Structure

```
src/
  components/
    Nav.jsx        — top navigation bar
    Hero.jsx        — landing section with animated neural-network visual
    About.jsx       — bio + education + publication
    Skills.jsx      — toolkit grid
    Projects.jsx    — project cards with metric highlights
    Footer.jsx      — contact section
  data/
    content.js      — ALL editable content lives here
  App.jsx
  main.jsx
  index.css
```

## Notes

- This portfolio uses a violet/cyan "neural" accent theme, while the Data Analyst
  portfolio uses a teal/indigo "dashboard" theme — keep them visually distinct if
  you link both from one place.
- Colors, fonts, and spacing tokens are defined in `tailwind.config.js`.
