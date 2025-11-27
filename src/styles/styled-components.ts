import styled, { createGlobalStyle, css } from "styled-components";

// Theme Configuration
export const theme = {
  colors: {
    // Primary brand
    primary: "#00462A", // main CTA/link
    primaryHover: "#006B42", // hover state

    // Text
    textPrimary: "#1a1a1a", // keep black-ish as requested
    textSecondary: "#4A5D57", // use provided caption tone
    textMuted: "#374151",
    textAccent: "#36AE92", // 강조 텍스트 색상

    // Backgrounds
    backgroundWhite: "#ffffff",
    backgroundGray: "#F3F8F6", // map to sage/mint tint
    backgroundLight: "#E8F1ED", // map to card background tint

    // Borders / dividers
    borderColor: "#CDE1D9", // map to provided divider color
    borderLight: "#f3f4f6",

    // Neutral grays
    gray400: "#9CA3AF",
    gray200: "#E5E7EB",

    // Supporting accents
    supportGreen: "#6BAE9C", // tags/hover subtle
    amber: "#935F06", // highlight/warn
    coralRed: "#CC0000", // error/focus
  },

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    letter-spacing: -0.02em;
  }

  h1 { font-size: ${({ theme }) => theme.typography.fontSize["3xl"]}; }
  h2 { font-size: ${({ theme }) => theme.typography.fontSize["2xl"]}; }
  h3 { font-size: ${({ theme }) => theme.typography.fontSize.xl}; }

  p { line-height: ${({ theme }) => theme.typography.lineHeight.relaxed}; }

  /* Selection Styles */
  ::selection {
    background-color: rgba(0, 70, 42, 0.2);
    color: ${({ theme }) => theme.colors.textPrimary};
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
  background: ${({ theme, background = "white" }) => (background === "gray" ? theme.colors.backgroundGray : theme.colors.backgroundWhite)};
`;

export const Card = styled.div<{ hover?: boolean }>`
  background: ${({ theme }) => theme.colors.backgroundWhite};
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

// Grid Components
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

// Responsive utilities
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
};

// Responsive Section
export const ResponsiveSection = styled(Section)`
  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing["3xl"]} ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing["2xl"]};
  }
`;

// Responsive Container
export const ResponsiveContainer = styled(Container)`
  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export default theme;
