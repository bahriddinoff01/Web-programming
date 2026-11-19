import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

// Builds the Week 12-1 task pages (react/week-12/task1-4.html)
// into ../week 12/week 12-1/ — run with: npm run build
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: page('./week-12'),
  base: './',
  build: {
    outDir: page('../week 12/week 12-1'),
    // Only replace task1-4.html and assets/; keep index.html (the Week 12-1 hub)
    emptyOutDir: false,
    rollupOptions: {
      input: {
        task1: page('./week-12/task1.html'),
        task2: page('./week-12/task2.html'),
        task3: page('./week-12/task3.html'),
        task4: page('./week-12/task4.html'),
      },
    },
  },
})
