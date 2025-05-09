import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },

  plugins: [react(), sentryVitePlugin({
    org: "home-00d",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
});