import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assets: {
    // Include all assets in the "assets" folder
    include: ["**/*.png/*.PNG"],
  },
});
