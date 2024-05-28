import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
       semanticTokens:{
        colors:{
          jason:{
            100:{
              value:'{colors.gray.1}'
            },
            200:{
              value:'red'
            }
          }
        }
       },
      breakpoints:{
        sm:'320px',
        xxxxl:'2560px'
      },
      recipes: {
        button: {
          base: {
            color: 'red'
          },
          variants: {
            variant: {
              jason:{
                color:'red'
              }
            }
          },

        }
      }
    },
  },
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: "styled-system",
});
