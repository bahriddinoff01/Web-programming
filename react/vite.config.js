import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // Tailwind only applies to files that import src/tailwind.css,
  // so the Week 11-1 pages are not affected.
  plugins: [react(), tailwindcss()],
  // Relative paths, so the pages work inside the site on GitHub Pages
  base: './',
  build: {
    // Write the finished pages straight into the Week 11-1 folder
    outDir: '../week 11/week 11-1',
    // Only replace ex_1-3.html and assets/; keep index.html and the rest
    emptyOutDir: false,
    rollupOptions: {
      input: {
        ex_1: page('./ex_1.html'),
        ex_2: page('./ex_2.html'),
        ex_3: page('./ex_3.html'),
      },
    },
  },
})
