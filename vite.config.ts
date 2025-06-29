import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to replace environment variables in HTML
function htmlEnvPlugin() {
  return {
    name: 'html-env-plugin',
    transformIndexHtml(html: string) {
      const gaId = process.env.VITE_GA_MEASUREMENT_ID || ''
      return html.replace(/%VITE_GA_MEASUREMENT_ID%/g, gaId)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlEnvPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
