import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/testTable1/',
  build: {
    outDir: 'build' // теперь сборка будет в папку build
  }
})