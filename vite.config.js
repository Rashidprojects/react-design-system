import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Entry point for the component library
      entry: 'src/index.ts',  // Ensure this points to your library's entry file
      name: 'ReactDesignSystem',  // Name of the library
      fileName: (format) => `react-design-system.${format}.js`,  // Output file name format
      formats: ['es', 'umd'],  // Output formats: ES modules and UMD
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Exclude react and react-dom from the build
      output: {
        globals: {
          react: 'React',  // Global variable name for React
          'react-dom': 'ReactDOM',  // Global variable name for ReactDOM
        },
      },
    },
  },
});
