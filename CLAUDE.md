# CRM Project

A personal CRM app built as a single `index.html` file (React via CDN + Babel standalone). Hosted on GitHub Pages — keep it simple, no build tools or frameworks.

## Git & Deployment
- Always commit and push changes automatically after completing work. The user does not want to manage git manually.
- This repo is deployed via GitHub Pages, so `index.html` in the root must always be a working, self-contained page.

## Tech Stack
- Single HTML file with inline React (via unpkg CDN), Babel standalone for JSX
- No build step, no npm, no bundler
- Vanilla CSS in a `<style>` block
- All state managed with React hooks (`useState`, `useMemo`, etc.)

## Conventions
- Keep everything in `index.html` — do not split into separate files unless explicitly asked
- Emoji-based icons for groups (defined in `GROUP_ICONS` object)
- Flag images via flagcdn.com for country-based groups
