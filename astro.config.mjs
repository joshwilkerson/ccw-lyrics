import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll use our own globals.css
    }),
  ],
  output: 'static',
  server: {
    port: 4000,
  },
  build: {
    format: 'directory', // Creates clean URLs like /setlist/2025-07-24/ instead of /setlist/2025-07-24.html
  },
  vite: {
    ssr: {
      noExternal: ['gray-matter'], // Ensure gray-matter works in SSR
    },
  },
});
