import { customTokens } from "../customTokens";

const custom = {
  /** add new variant */
  ".btn-jason": {
    color: customTokens.colors.brand.primary,
    "&:hover": {
      color: customTokens.colors.brand.primaryLighter,
    },
  },
};
const daisy = {
  /** override existing variant */
  ".btn-primary": {
    color: "red",
  },
};

export const button = {
  custom,
  daisy,
};
