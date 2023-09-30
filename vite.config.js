import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";


export default defineConfig({
  server: {
    host: true,
    port: 8888,
  },

  plugins: [react()],

  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
});