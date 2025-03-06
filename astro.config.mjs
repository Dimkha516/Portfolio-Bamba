import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/Dimkha516',
  base: 'Portfolio-Bamba',
  trailingSlash: "always",
  integrations: [tailwind()],
});
