import type { Theme } from "@mui/material";
import { viVN } from "@mui/material/locale";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import merge from "lodash/merge";
import base from "./palette/base";
import custom from "./palette/custom";

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface CustomTheme {
  background: {
    sideBar: string;
    message1: string;
    message2: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Neutral;
    customTheme: CustomTheme;
  }

  interface PaletteOptions {
    neutral: Neutral;
    customTheme: CustomTheme;
  }
}

const createAppTheme = (): Theme => {
  const theme = createTheme(merge({}, custom, base, viVN));

  return responsiveFontSizes(theme);
};

export default createAppTheme;
