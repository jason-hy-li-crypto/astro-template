import { Config } from "daisyui";

const daisyConfig: Config = {
  logs: true,
  themes: [
    {
      moonLander: {
        /** base theme tokens */
        primary: "#0089ff",
        "primary-content": "#000716",
        secondary: "#910000",
        "secondary-content": "#eed1cc",
        accent: "#843900",
        "accent-content": "#e8d6cd",
        neutral: "#0f171f",
        "neutral-content": "#c8cbcd",
        "base-100": "#e2ffff",
        "base-200": "#c4dede",
        "base-300": "#a8bebe",
        "base-content": "#121616",
        info: "#0060fa",
        "info-content": "#d0e2ff",
        success: "#00b700",
        "success-content": "#000c00",
        warning: "#de6f00",
        "warning-content": "#120400",
        error: "#ff1540",
        "error-content": "#160001",
        // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
        // "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
        // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        // "--animation-btn": "0.25s", // duration of animation when you click on button
        // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        // "--border-btn": "1px", // border width of buttons
        // "--tab-border": "1px", // border width of tabs
        // "--tab-radius": "0.5rem", // border radius of tabs

        /** create new variant, but not recognized by intellisense */
        // ".btn-jason": {
        //   backgroundColor: "#ff0000",
        //   color: "#ffffff",
        //   "&:hover": {
        //     backgroundColor: "#ff0000",
        //   },
        // },
        /** override existing variant */
        // ".btn-primary": {
        //   backgroundColor: "green",
        //   color: "#ffffff",
        //   "&:hover": {
        //     backgroundColor: "#ff0000",
        //   },
        // },
      },
    },
  ],
};
export default daisyConfig;
