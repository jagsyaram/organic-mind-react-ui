import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "https://jagsyaram.github.io/organic-mind-react-ui/", // Replace 'your-repo-name' with the name of your GitHub repository
});
