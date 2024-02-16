import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:['**/*.glb'],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-css',
          resolveId(source) {
            if (source.endsWith('style.min.css')) {
              return source;
            }
          },
          load(id) {
            if (id.endsWith('style.min.css')) {
              return '';
            }
          },
        },
      ],
    },
  },
})
