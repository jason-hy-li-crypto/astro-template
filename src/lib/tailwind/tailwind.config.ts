import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss";
import daisyConfig from "./daisy.config";
import { customTokens } from "./customTokens";
import { button } from "./components/button";
const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    /** override existing token */
    // spacing:` {
    //   "1/2": "50%",
    // },

    /** extend existing token */
    extend: customTokens,
  },
  plugins: [
    require("daisyui"),
    /** https://tailwindcss.com/docs/plugins */
    plugin((api) => {
      api.addComponents({
        ...button.custom,
      });
    }),
  ],

  daisyui: daisyConfig,
};
export default config;
