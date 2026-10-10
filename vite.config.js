import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Oder '0.0.0.0'
    port: 5173,
    watch: {
      usePolling: true, // Hilft unter Windows/WSL2 bei Hot-Reload-Problemen mit Volumes
    },
  },
})