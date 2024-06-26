import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import paraglide from "@inlang/paraglide-astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  // able prefetch page on link hover
  output: "static",
  i18n: {
    defaultLocale: "en",
    // the default locale
    locales: ["en", "ko"] // the locales you want to support
  },
  vite: {
    build: {
      sourcemap: "inline"
    }
  },
  prefetch: true,
  integrations: [paraglide({
    project: "./project.inlang",
    outdir: "./src/paraglide"
  }), react(), tailwind()]
});