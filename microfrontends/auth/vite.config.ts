import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app-auth",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/App.tsx",
      },
      remotes: {
        "app-shared": "http://localhost:3010/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@apollo/client", "graphql"],
    }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
