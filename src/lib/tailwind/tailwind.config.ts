import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss";
import { CSSRuleObject } from "tailwindcss/types/config";
import daisyConfig from "./daisy.config";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    /** override existing token */
    // spacing: {
    //   "1/2": "50%",
    // },

    /** extend existing token */
    extend: {
      // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
      // spacing: {
      //   CUSTOM_VALUE: "10px",
      // },
      // colors: {
      //   CUSTOM_COLOR: {
      //     100: "#f7f7f7",
      //   },
      // },
      fontFamily: {},
      fontSize: {},
    },
  },
  plugins: [
    require("daisyui"),
    /** https://tailwindcss.com/docs/plugins */
    plugin((api) => {
      api.addComponents({
        ".btn-jason": {
          color: "red",
        },
      });
    }),
  ],

  daisyui: daisyConfig,
};
export default config;
