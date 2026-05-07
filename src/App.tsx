import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/styled-components";
import NavBar from "./components/NavBar";
import IntroSplash from "./components/IntroSplash";
import SectionDots from "./components/SectionDots";
import Footer from "./components/Footer";
import About from "./sections/About";
import Education from "./sections/Education";
import PublicationsPage from "./pages/PublicationsPage";
import YosheeBot from "./components/YosheeBot";

const AppContainer = styled.div`
  font-family: "Lato", "Lato Black", "Lato Bold", "Lato Regular", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const PageSection = styled.section<{ $alt?: boolean }>`
  min-height: 100vh;
  padding: 140px 16px 100px;
  background: ${({ $alt, theme }) => ($alt ? theme.colors.pageBgAlt : theme.colors.pageBg)};
  scroll-margin-top: 80px;
  transition: background-color 0.25s ease;

  @media (max-width: 768px) {
    padding: 110px 12px 72px;
  }
`;

const PageInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const SECTION_LIST = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
];

type ThemeMode = "light" | "dark";

const readInitialThemeMode = (): ThemeMode => {
  try {
    const saved = localStorage.getItem("themeMode");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const readInitialA11yMode = (): boolean => {
  try {
    return localStorage.getItem("a11yMode") === "1";
  } catch {
    return false;
  }
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(SECTION_LIST[0].id);
  const [themeMode, setThemeMode] = useState<ThemeMode>(readInitialThemeMode);
  const [a11yMode, setA11yMode] = useState<boolean>(readInitialA11yMode);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of SECTION_LIST) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && SECTION_LIST.some((s) => s.id === hash)) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("themeMode", themeMode);
    } catch {}
    document.body.classList.toggle("theme-dark", themeMode === "dark");
    document.body.classList.toggle("theme-light", themeMode === "light");
  }, [themeMode]);

  useEffect(() => {
    try {
      localStorage.setItem("a11yMode", a11yMode ? "1" : "0");
    } catch {}
    document.body.classList.toggle("a11y-mode", a11yMode);
  }, [a11yMode]);

  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const toggleA11yMode = useCallback(() => {
    setA11yMode((prev) => !prev);
  }, []);

  const activeTheme = useMemo(() => (themeMode === "dark" ? darkTheme : lightTheme), [themeMode]);

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      {!a11yMode && <IntroSplash />}
      <AppContainer>
        <NavBar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          themeMode={themeMode}
          a11yMode={a11yMode}
          onThemeToggle={toggleThemeMode}
          onA11yToggle={toggleA11yMode}
        />
        <SectionDots sections={SECTION_LIST} activeSection={activeSection} onSectionChange={handleSectionChange} />

        <main id="main-content">
          <About />
          <Education />
          <PageSection id="publications" $alt>
            <PageInner>
              <PublicationsPage />
            </PageInner>
          </PageSection>
        </main>

        <Footer />
      </AppContainer>
      <YosheeBot />
    </ThemeProvider>
  );
};

export default App;
