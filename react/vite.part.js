// Shared Vite settings for the React task pages that live inside the site.
// Each part has its own source folder and writes its built pages into its
// week folder, next to the hub page (index.html), which is left alone.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const here = (p) => fileURLToPath(new URL(p, import.meta.url))

export function partConfig(srcDir, outDir, pages) {
  return defineConfig({
    plugins: [react(), tailwindcss()],
    root: here(srcDir),
    base: './',
    build: {
      outDir: here(outDir),
      // Keep index.html (the part's hub page); only replace the task pages and assets/
      emptyOutDir: false,
      rollupOptions: {
        input: Object.fromEntries(pages.map((name) => [name, here(`${srcDir}/${name}.html`)])),
      },
    },
  })
}
