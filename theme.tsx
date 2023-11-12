import { createBox, createText, createTheme } from "@shopify/restyle";

const buttonStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins_700Bold",
  fontSize: 16,
  lineHeight: 24,
  height: 56
};

const palette = {
  happyGreen100: "#31bc2e",
  happyGreen80: "#4ad146",
  happyGreen60: "#64e25d",
  happyGreen40: "#8ef789",
  happyGreen20: "#c3ffc0",
  shadeGreen100: "#004c46",
  shadeGreen80: "#065b53",
  shadeGreen60: "#117266",
  shadeGreen40: "#258c7d",
  shadeGreen20: "#3daa98",
  anchorGreen100: "#022d2b",
  anchorGreen80: "#003a36",
  anchorGreen60: "#004c46",
  anchorGreen40: "#065b53",
  anchorGreen20: "#117266",
  clearSky100: "#00ffe0",
  clearSky80: "#5cffe7",
  clearSky60: "#8dffec",
  clearSky40: "#b0fff0",
  clearSky20: "#d4fff7",
  goldenSun100: "#ffbc00",
  goldenSun80: "#ffce55",
  goldenSun60: "#ffd880",
  goldenSun40: "#ffe1a6",
  goldenSun20: "#ffedcc",
  black1: "#181818",
  gray3: "#828282",
  gray4: "#bdbdbd",
  wettest: "#004c74",
  lessWet: "#d3f4ff",
  ok: "#9fc631",
  bitDry: "#ffd786",
  dry: "#ff6e00",
  blackPrimary: "#000000",
  white: "#FFFFFF",
  greenPrimary: "#2AAB26",
  gray: "#e5e7eb",
  grayLight: "#EFEFEF",
  grayPrimary: "#4F4F4F",
  body: "#343434",
  heading: "#1D1D1F",
  black: "#0B0B0B",
  anchorGreenDark: "#022D2B",
  bgGreenLight: "#F0F6F0"
};

const theme = createTheme({
  colors: {
    ...palette
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 40,
    "3xl": 48,
    "4xl": 56,
    "5xl": 64,
    "6xl": 72,
    "7xl": 80
  },
  borderRadii: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    "2xl": 32,
    "3xl": 48,
    "4xl": 64
  },
  textVariants: {
    header: {
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 36,
      fontSize: 24
    },
    headerLarge: {
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 44,
      fontSize: 40
    },
    headerMedium: {
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      fontSize: 20,
      lineHeight: 28,
      color: "blackPrimary"
    },
    subheader: {
      fontWeight: "400",
      fontFamily: "Poppins_400Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "grayPrimary"
    },
    subheaderMedium: {
      fontWeight: "500",
      fontFamily: "Poppins_500Medium",
      fontSize: 16,
      lineHeight: 24,
      color: "grayPrimary"
    },
    title: {
      fontWeight: "400",
      fontFamily: "Poppins_400Regular",
      fontSize: 28,
      lineHeight: 38,
      color: "blackPrimary"
    },
    titleBold: {
      fontWeight: "400",
      fontFamily: "Poppins_600SemiBold",
      fontSize: 28,
      lineHeight: 38,
      color: "blackPrimary"
    },
    subheaderBold: {
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      fontSize: 16,
      lineHeight: 24,
      color: "blackPrimary"
    },
    subheaderBoldGray: {
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      fontSize: 16,
      lineHeight: 24,
      color: "grayPrimary"
    },
    subheaderBlack: {
      fontWeight: "400",
      fontFamily: "Poppins_400Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "blackPrimary"
    },
    label: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: "400",
      fontFamily: "Poppins_600SemiBold",
      color: "grayPrimary"
    },
    labelBold: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      color: "grayPrimary"
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins_600SemiBold"
    },
    body: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: "Poppins_400Regular",
      color: "body"
    },
    bodyBold: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: "600",
      fontFamily: "Poppins_600SemiBold",
      color: "body"
    },
    defaults: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: "400",
      fontFamily: "Poppins_400Regular",
      color: "body"
    }
  },
  buttonVariants: {
    default: {
      backgroundColor: "greenPrimary",
      color: "white",
      padding: "md",
      borderRadius: "md",
      ...buttonStyle
    },
    outline: {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "grayPrimary",
      padding: "md",
      borderRadius: "md",
      ...buttonStyle
    },
    ghost: {
      ...buttonStyle,
      height: "auto"
    },
    rounded: {
      backgroundColor: "greenPrimary",
      padding: "md",
      borderRadius: "2xl",
      ...buttonStyle
    },
    secondary: {
      backgroundColor: "gray",
      padding: "md",
      borderRadius: "md",
      ...buttonStyle
    },
    roundedSecondary: {
      backgroundColor: "grayLight",
      padding: "md",
      borderRadius: "2xl",
      ...buttonStyle
    }
  }
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
