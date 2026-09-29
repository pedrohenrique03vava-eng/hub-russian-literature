import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <-- Importe o plugin aqui

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Adicione o plugin na lista
  ],
  base: "/hub-russian-literature/",
});
