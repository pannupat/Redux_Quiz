import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    open:true,
    port:9000,
    proxy:{
      '/api':{
        target: 'http://localhost.9000',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/, '')
      }
    }
  }
})
