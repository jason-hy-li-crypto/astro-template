import { CustomThemeConfig } from "tailwindcss/types/config";
const brand = {
    // black & white
    white: '#FFFFFF',
    black: '#000000',
    // primary
    primary: '#574BE8',
    primaryDarker: '#4237C6',
    primaryLighter: '#8C82FF',
    // secondary
    green: '#89FA90',
    pink: '#E14FBA',
    cyan: '#77D8D6',
    cyanDarker: '#277568',
    lightBlue: '#D3D8DA',
    orange: '#EA590C',
    yellow: '#FFC774',
    purpleLighter: '#6B5EFF',
    purpleDeeper: '#B46AFF',
    sunset: '#FF9D00',
    deepBlue: '#0069BF',
    deepGreen: '#009393',
    trader1: '#8A3FFC',
    trader2: '#BA4E00',
    trader3: '#0043CE',
    traderSelf: '#F1C21B',
    referralCodeBorder1: '#5648FF',
    referralCodeBorder2: '#088E7F',
  } as const
  
  
const greyScale = {
    900: '#0C0C0C',
    800: '#11101B',
    700: '#161521',
    600: '#191922',
    500: '#303030',
    400: '#999999',
    300: '#999999',
    200: '#999999',
    100: '#EDEDED',
} as const
const colors = {
  greyScale,
  brand
};

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
export const customTokens = {
  colors,
} satisfies Partial<CustomThemeConfig>
