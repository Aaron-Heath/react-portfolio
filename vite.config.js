// https://www.robinwieruch.de/vite-create-react-app/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    base: "/react-portfolio",
    plugins: [react()],
  };
});