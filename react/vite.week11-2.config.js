import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

// Builds the Week 11-2 task pages (react/week-12/task1-5.html)
// into ../week 11/week 11-2/ — run with: npm run build
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: page('./week-12'),
  base: './',
  build: {
    outDir: page('../week 11/week 11-2'),
    // Only replace task1-5.html and assets/; keep index.html (the Week 11-2 hub)
    emptyOutDir: false,
    rollupOptions: {
      input: {
        task1: page('./week-12/task1.html'),
        task2: page('./week-12/task2.html'),
        task3: page('./week-12/task3.html'),
        task4: page('./week-12/task4.html'),
        task5: page('./week-12/task5.html'),
      },
    },
  },
})
