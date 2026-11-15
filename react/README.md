# Week 11-1 React exercises (source)

This folder is the React + Vite source code for the Week 11-1 exercise pages.
The finished pages live in `../week 11/week 11-1/` (ex_1.html, ex_2.html, ex_3.html and `assets/`).

| File | What it is |
| --- | --- |
| `src/ProfileCard.jsx` | Exercise 1 – ProfileCard with props and a default avatar |
| `src/NotificationList.jsx` | Exercise 2 – list with `.map()` and conditional rendering |
| `src/Card.jsx` | Exercise 3 – reusable Card with `props.children` |
| `src/mount.jsx` | Renders an exercise and shows its source code on the page |
| `src/style.css` | Page styles (same look as the rest of the site) |
| `ex_1.html` – `ex_3.html` | Page templates (text, headings, "How it works") |

## Commands

```bash
npm install      # first time only
npm run dev      # live preview while editing (open the printed localhost link)
npm run build    # writes the finished pages into ../week 11/week 11-1/
```

Run `npm run build` after every change, then commit both this folder and `week 11/week 11-1/`.
The build only replaces ex_1–3.html and `assets/`; the Week 11-1 index page is left alone.
The site's floating navigation bar only appears in the built pages, not in `npm run dev`.
