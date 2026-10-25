import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", // ← AGREGA ESTA LÍNEA AQUÍ
  plugins: [react(), tailwindcss()],
});
