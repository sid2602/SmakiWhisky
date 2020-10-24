const breakpoints: any = ["360px", "768px", "1024px", "1280px", "1600px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const theme = {
  colors: {
    primaryLight: "#F59f6e",
    primary: "#F2600C",
    black: "#262626",
    lighterBlack: "#404040",
    gray: "#5b5b5b",
  },
  variants: {
    container: {
      mx: "auto",
      maxWidth: 1200,
      width: "100%",
      px: 30,
    },
  },

  breakpoints,
};

export default theme;
