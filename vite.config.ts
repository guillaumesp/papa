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
        entryFileNames: `assets/[hash]-[name].js`,
        chunkFileNames: `assets/[hash]-[name].js`,
        assetFileNames: `assets/[hash]-[name].[ext]`
      },
      
    }
  }
})