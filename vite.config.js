import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    modulePreload: {
      resolveDependencies(filename, deps, { hostType }) {
        if (hostType !== 'html') return deps;

        return deps.filter(
          (dep) => !dep.includes('three-') && !dep.includes('r3f-')
        );
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/')) return 'three';
          if (id.includes('\\node_modules\\three\\')) return 'three';
        },
      },
    },
  },
})
