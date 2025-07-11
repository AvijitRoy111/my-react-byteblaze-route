import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Warning limit বাড়ানো
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router-vendor';
            }
            return 'vendor'; // অন্য সব node_modules আলাদা chunk
          }
        }
      }
    }
  }
});
