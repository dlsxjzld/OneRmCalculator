import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import prerender from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/'],
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
