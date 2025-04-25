import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/movie-app",
  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      'movie-app-openshift-git-shin-noda-dev.apps.rm3.7wse.p1.openshiftapps.com'
    ]
  }
})
