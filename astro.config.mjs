import { defineConfig } from "astro/config";
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: () => {
            return "sites/default/files/product/img/AZ/ja/[name][extname]";
          },
        },
      },
    },
  },
});
