import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'react-vendor': ['react', 'react-dom'],
          'animation': ['gsap', '@gsap/react'],
          'utils': ['react-responsive', 'leva']
        }
      }
    },
    chunkSizeWarningLimit: 2000
  }
})
