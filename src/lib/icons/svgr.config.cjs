module.exports = {
  icon: true,
  typescript: true,
  ext: "tsx",
  outDir: "./src/lib/icons/src/icons",
  jsx: {
    babelConfig: {
      plugins: [
        /**
         * suffix all the id inner svg with react.useId()
         * to fix the side effect caused by duplicated id
         * @see https://stackoverflow.com/questions/49531434/hidding-svg-affects-other-svg-styles-in-the-same-page
         * @see https://github.com/gregberge/svgr/issues/322#issuecomment-1164541318
         */
        "react-inline-svg-unique-use-id",
      ],
    },
  },
  replaceAttrValues: {
    "#fff": "currentColor",
    "#ffffff": "currentColor",
    white: "currentColor",
    "#000": "currentColor",
    "#000000": "currentColor",
    black: "currentColor",
  },
};
