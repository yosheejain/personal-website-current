import styled, { createGlobalStyle, css, DefaultTheme } from "styled-components";

const sharedTokens = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "60px",
    "4xl": "100px",
  },
  borderRadius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "50%",
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 12px rgba(0, 0, 0, 0.15)",
    lg: "0 6px 24px rgba(0, 0, 0, 0.1)",
  },
  typography: {
    fontSize: {
      xs: "0.8rem",
      sm: "0.85rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.4,
      normal: 1.6,
      relaxed: 1.7,
    },
  },
  transitions: {
    fast: "0.2s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};

export const lightTheme: DefaultTheme = {
  mode: "light",
  ...sharedTokens,
  colors: {
    // Brand
    primary: "#00462A",
    primaryHover: "#006B42",
    // Text
    textPrimary: "#1a1a1a",
    textSecondary: "#4A5D57",
    textMuted: "#374151",
    textAccent: "#36AE92",
    // Backgrounds
    backgroundWhite: "#ffffff",
    backgroundGray: "#f9f9f9",
    backgroundLight: "#E8F1ED",
    // Borders
    borderColor: "#CDE1D9",
    borderLight: "#f3f4f6",
    // Neutrals
    gray400: "#9CA3AF",
    gray200: "#E5E7EB",
    // Accents
    supportGreen: "#6BAE9C",
    amber: "#935F06",
    coralRed: "#CC0000",
    pageAccentTint: "rgba(0, 70, 42, 0.06)",
    pageAccentBorder: "rgba(0, 70, 42, 0.15)",
    pageAccentShadow: "rgba(0, 70, 42, 0.20)",
    // Surfaces
    pageBg: "#ffffff",
    pageBgAlt: "#f4f8f6",
    cardBg: "#fefefe",
    cardBorder: "#e2e8f0",
    slateHeadingBg: "#1e293b",
    slateHeadingText: "#f8fafc",
    pillInactiveBg: "#ffffff",
    pillInactiveText: "#64748b",
    mutedSurface: "#fafaf8",
    headingDark: "#0f172a",
    navBarBg: "rgba(248, 252, 250, 0.82)",
    navBarBgScrolled: "rgba(248, 252, 250, 0.94)",
    focusRing: "#00462A",
    nameHighlightBg: "#fde8c8",
    nameHighlightText: "#7c3a00",
  },
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  ...sharedTokens,
  colors: {
    // Brand: brighter green for legibility on dark
    primary: "#36AE92",
    primaryHover: "#5BC4AB",
    // Text
    textPrimary: "#f1f5f4",
    textSecondary: "#a8b8b1",
    textMuted: "#c5d3cc",
    textAccent: "#6BD8B6",
    // Backgrounds
    backgroundWhite: "#0e1714",
    backgroundGray: "#0a120f",
    backgroundLight: "#16221d",
    // Borders
    borderColor: "#243530",
    borderLight: "#1a2925",
    // Neutrals
    gray400: "#a8b8b1",
    gray200: "#374b44",
    // Accents
    supportGreen: "#5BC4AB",
    amber: "#E0B266",
    coralRed: "#FF6B6B",
    pageAccentTint: "rgba(54, 174, 146, 0.10)",
    pageAccentBorder: "rgba(54, 174, 146, 0.28)",
    pageAccentShadow: "rgba(54, 174, 146, 0.28)",
    // Surfaces
    pageBg: "#0e1714",
    pageBgAlt: "#0a120f",
    cardBg: "#16201d",
    cardBorder: "#243530",
    slateHeadingBg: "#cbd5e1",
    slateHeadingText: "#0f172a",
    pillInactiveBg: "#16201d",
    pillInactiveText: "#a8b8b1",
    mutedSurface: "#0f1816",
    headingDark: "#f1f5f4",
    navBarBg: "rgba(14, 23, 20, 0.78)",
    navBarBgScrolled: "rgba(14, 23, 20, 0.94)",
    focusRing: "#6BD8B6",
    nameHighlightBg: "rgba(224, 178, 102, 0.22)",
    nameHighlightText: "#E0B266",
  },
};

// Backwards-compatible alias for any existing import sites
export const theme = lightTheme;

// Global Styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Lato", "Lato Black", "Lato Bold", "Lato Regular", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.pageBg};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    letter-spacing: -0.02em;
  }

  h1 { font-size: ${({ theme }) => theme.typography.fontSize["3xl"]}; }
  h2 { font-size: ${({ theme }) => theme.typography.fontSize["2xl"]}; }
  h3 { font-size: ${({ theme }) => theme.typography.fontSize.xl}; }

  p { line-height: ${({ theme }) => theme.typography.lineHeight.relaxed}; }

  ::selection {
    background-color: ${({ theme }) => theme.colors.pageAccentTint};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  /* Skip link for keyboard users */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 12px;
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 10px 16px;
    border-radius: 8px;
    z-index: 10000;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: top 0.2s ease;
  }
  .skip-link:focus {
    top: 12px;
    outline: 3px solid ${({ theme }) => theme.colors.focusRing};
    outline-offset: 2px;
  }

  /* Accessibility mode: bumps base size, kills motion, forces visible focus, raises contrast */
  body.a11y-mode {
    font-size: 18px;

    *,
    *::before,
    *::after {
      animation-duration: 0.001s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001s !important;
      scroll-behavior: auto !important;
    }

    *:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.focusRing} !important;
      outline-offset: 3px !important;
      border-radius: 4px;
    }

    a:not(.no-underline) {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
  }

  /* Honor system preference even outside the toggle */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *,
    *::before,
    *::after {
      animation-duration: 0.001s !important;
      transition-duration: 0.001s !important;
    }
  }

  /* High-contrast overrides applied alongside a11y-mode (per theme) */
  body.a11y-mode.theme-light {
    --hc-text: #000000;
    --hc-secondary: #1a1a1a;
    --hc-border: #1a2a24;
  }
  body.a11y-mode.theme-dark {
    --hc-text: #ffffff;
    --hc-secondary: #f1f5f4;
    --hc-border: #c5d3cc;
  }
`;

// Layout Components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const Section = styled.section<{ background?: "white" | "gray" }>`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing["4xl"]} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing["3xl"]};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, background = "white" }) => (background === "gray" ? theme.colors.pageBgAlt : theme.colors.pageBg)};
`;

export const Card = styled.div<{ hover?: boolean }>`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  ${({ hover, theme }) =>
    hover &&
    css`
      transition: transform ${theme.transitions.fast}, box-shadow ${theme.transitions.fast};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.md};
      }
    `}
`;

export const Button = styled.button<{ size?: "small" | "medium" | "large" }>`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  text-decoration: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case "large":
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.fontSize.lg};
        `;
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
        `;
    }
  }}

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ButtonLink = styled.a<{ size?: "small" | "medium" | "large" }>`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case "large":
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.fontSize.lg};
        `;
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
        `;
    }
  }}

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

// Typography Components
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.02em;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: ${({ columns = 3 }) => `repeat(${columns}, 1fr)`};
  gap: ${({ theme, gap }) => gap || theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const media = {
  mobile: `@media (max-width: ${lightTheme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${lightTheme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${lightTheme.breakpoints.desktop})`,
};

export const ResponsiveSection = styled(Section)`
  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing["3xl"]} ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const ResponsiveContainer = styled(Container)`
  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export default lightTheme;
