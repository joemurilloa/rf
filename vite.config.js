import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Importante: asegura que Vite use la raíz del proyecto
  build: {
    outDir: 'dist'
  }
});