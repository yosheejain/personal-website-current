import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      primary: string;
      primaryHover: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      textAccent: string;
      backgroundWhite: string;
      backgroundGray: string;
      backgroundLight: string;
      borderColor: string;
      borderLight: string;
      gray400: string;
      gray200: string;
      supportGreen: string;
      amber: string;
      coralRed: string;
      pageAccentTint: string;
      pageAccentBorder: string;
      pageAccentShadow: string;
      pageBg: string;
      pageBgAlt: string;
      cardBg: string;
      cardBorder: string;
      slateHeadingBg: string;
      slateHeadingText: string;
      pillInactiveBg: string;
      pillInactiveText: string;
      mutedSurface: string;
      headingDark: string;
      navBarBg: string;
      navBarBgScrolled: string;
      focusRing: string;
      nameHighlightBg: string;
      nameHighlightText: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    typography: {
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
      };
      fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeight: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
