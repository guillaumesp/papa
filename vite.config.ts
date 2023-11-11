import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  publicDir: 'public',
    base: 'papa',
    build: {
    outDir: 'docs',
    rollupOptions: {
      
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
      
    }
  }
})