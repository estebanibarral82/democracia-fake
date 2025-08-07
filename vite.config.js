import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/democracia-fake/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
