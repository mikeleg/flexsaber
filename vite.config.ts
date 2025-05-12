import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Set the build output directory to 'dist'
    lib: {
      entry: 'src/main.ts',
      name: 'flexsaber',
      fileName: (format) => `flexsaber.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      external: /^lit/,
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});
