import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app-shared",
      filename: "remoteEntry.js",
      exposes: {
        "./Form": "./src/components/Form/index.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3010,
  },
  preview: {
    port: 3010,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
