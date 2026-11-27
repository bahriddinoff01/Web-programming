import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const here = (p) => fileURLToPath(new URL(p, import.meta.url))

// The React contact form on the homepage (main container/Main.html).
// Builds one script with a fixed name, assets/react/contact-form.js,
// so Main.html can load it with a plain <script type="module"> tag.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: here('../assets/react'),
    emptyOutDir: true,
    rollupOptions: {
      input: here('./home-contact/main.jsx'),
      output: { entryFileNames: 'contact-form.js' },
    },
  },
})
