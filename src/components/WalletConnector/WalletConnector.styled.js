import { rem } from "polished";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";
import { lighten, darken } from "polished";

import {
  fontFamilies,
  headlineFontStyles,
  bodyFont,
} from "../../theme/theme.config";

const primaryColor = "#f00";
const secondaryColor = "#0f0";
const accentColor = "#00f";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: lighten(0.1, primaryColor),
      main: primaryColor,
      dark: darken(0.1, primaryColor),
    },
    secondary: {
      light: lighten(0.1, secondaryColor),
      main: secondaryColor,
      dark: darken(0.1, secondaryColor),
    },
    accent: {
      light: lighten(0.1, accentColor),
      main: accentColor,
      dark: darken(0.1, accentColor),
    },
  },
  typography: {
    fontFamily: fontFamilies,
    h1: {
      ...headlineFontStyles,
    },
    h2: {
      ...headlineFontStyles,
    },
    h3: {
      ...headlineFontStyles,
    },
    h4: {
      fontFamily: bodyFont,
      fontWeight: 500,
    },
    h5: {
      fontFamily: bodyFont,
    },
    h6: {
      fontFamily: bodyFont,
    },
    subtitle1: {
      fontFamily: bodyFont,
    },
    subtitle2: {
      fontFamily: bodyFont,
    },
    body1: {
      fontFamily: bodyFont,
    },
    body2: {
      fontFamily: bodyFont,
    },
    button: {
      fontFamily: bodyFont,
    },
    caption: {
      fontFamily: bodyFont,
    },
    overline: {
      fontFamily: bodyFont,
    },
  },
});

const StyledWalletConnector = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: `${rem(2)} solid #000`,
  boxShadow: 24,
  p: 4,
}));

export { theme, StyledWalletConnector };
