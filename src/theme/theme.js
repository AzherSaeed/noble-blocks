import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    whiteGradBg: " linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 139.47%)",
    skyBlueBg: "#0886FF",
    lightBlueColor: "#BDE3FF",
    blackHeading: "#000000",
  },
  typography: {
    fontFamily: "Inter",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: { fontSize: "48px" },
    h2: { fontSize: "40px" },
    h3: { fontSize: "32px" },
    h4: { fontSize: "20px" },
  },
  overrides: {
    MuiContainer: {
      root: {
        maxWidth: `1110px`,
      },
    },
  },
});

export default theme;
