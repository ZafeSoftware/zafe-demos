import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zafe-demos.pages.dev',
  base: '/dylans-fencing',
  build: {
    format: 'file'
  },
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});
