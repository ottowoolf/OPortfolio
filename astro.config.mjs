import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	  // ... integrations
  site: 'https://github.com/ottowoolf', // Your GitHub username URL
  base: '/OPortfolio',                 // Your repository name
});