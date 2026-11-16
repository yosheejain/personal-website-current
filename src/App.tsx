import React, { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/styled-components";
import NavBar from "./components/NavBar";
import SectionDots from "./components/SectionDots";
import Footer from "./components/Footer";
import About from "./sections/About";
import Education from "./sections/Education";
import PublicationsPage from "./pages/PublicationsPage";
import Teaching from "./sections/Teaching";
// import YosheeBot from "./components/YosheeBot";

const AppContainer = styled.div`
  font-family: "Lato", "Lato Black", "Lato Bold", "Lato Regular", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const PageSection = styled.section<{ $alt?: boolean; $compact?: boolean }>`
  min-height: ${({ $compact }) => ($compact ? "0" : "100vh")};
  padding: ${({ $compact }) => ($compact ? "56px 16px 56px" : "140px 16px 100px")};
  background: ${({ $alt, theme }) => ($alt ? theme.colors.pageBgAlt : theme.colors.pageBg)};
  scroll-margin-top: 80px;
  transition: background-color 0.25s ease;

  @media (max-width: 768px) {
    padding: ${({ $compact }) => ($compact ? "48px 12px 48px" : "110px 12px 72px")};
  }
`;

const PageInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const ClipWrapper = styled.div<{ $maxHeight?: number; $altBg?: boolean }>`
  position: relative;
  ${({ $maxHeight, $altBg, theme }) =>
    $maxHeight !== undefined
      ? css`
          max-height: ${$maxHeight}px;
          overflow: hidden;
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 150px;
            background: linear-gradient(
              to bottom,
              transparent,
              ${$altBg ? theme.colors.pageBgAlt : theme.colors.pageBg}
            );
            pointer-events: none;
          }
        `
      : ''}
`;

const ViewMoreRow = styled.div<{ $altBg?: boolean }>`
  background: ${({ $altBg, theme }) => ($altBg ? theme.colors.pageBgAlt : theme.colors.pageBg)};
  display: flex;
  justify-content: center;
  padding: 20px 16px 36px;
  transition: background-color 0.25s ease;
`;

const ViewMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 32px;
  border-radius: 999px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

interface CollapsibleProps {
  href: string;
  label: string;
  altBg?: boolean;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleProps> = ({ href, label, altBg, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [clipHeight, setClipHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.scrollHeight > window.innerHeight * 1.05) {
      setClipHeight(Math.round(window.innerHeight));
    }
  }, []);

  return (
    <>
      <ClipWrapper ref={ref} $maxHeight={clipHeight} $altBg={altBg}>
        {children}
      </ClipWrapper>
      {clipHeight !== undefined && (
        <ViewMoreRow $altBg={altBg}>
          <ViewMoreLink href={href} target="_blank" rel="noreferrer">
            {label} ↗
          </ViewMoreLink>
        </ViewMoreRow>
      )}
    </>
  );
};

const SECTION_LIST = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
];

type ThemeMode = "light" | "dark";

const readInitialThemeMode = (): ThemeMode => {
  try {
    const saved = localStorage.getItem("themeMode");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return "light";
};

const getViewParam = (): string | null => {
  try {
    return new URLSearchParams(window.location.search).get("view");
  } catch {
    return null;
  }
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(SECTION_LIST[0].id);
  const [themeMode, setThemeMode] = useState<ThemeMode>(readInitialThemeMode);

  const viewParam = useMemo(() => getViewParam(), []);

  useEffect(() => {
    const handleScroll = () => {
      // Viewport-relative positions work even when a section sits inside a
      // positioned wrapper (e.g. the collapsible Education clip).
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveSection(SECTION_LIST[SECTION_LIST.length - 1].id);
        return;
      }
      let current = SECTION_LIST[0].id;
      for (const section of SECTION_LIST) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
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
      localStorage.removeItem("a11yMode");
    } catch {}
    document.body.classList.toggle("theme-dark", themeMode === "dark");
    document.body.classList.toggle("theme-light", themeMode === "light");
    document.body.classList.remove("a11y-mode");
  }, [themeMode]);

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

  const activeTheme = useMemo(() => (themeMode === "dark" ? darkTheme : lightTheme), [themeMode]);

  // Full-page single-section view (opened from "View more" in a new tab)
  if (viewParam === "education" || viewParam === "publications") {
    return (
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <AppContainer>
          <NavBar themeMode={themeMode} onThemeToggle={toggleThemeMode} />
          {viewParam === "education" && <Education />}
          {viewParam === "publications" && (
            <PageSection id="publications" $alt>
              <PageInner>
                <PublicationsPage />
              </PageInner>
            </PageSection>
          )}
          <Footer />
        </AppContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <AppContainer>
        <NavBar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          themeMode={themeMode}
          onThemeToggle={toggleThemeMode}
        />
        <SectionDots sections={SECTION_LIST} activeSection={activeSection} onSectionChange={handleSectionChange} />

        <main id="main-content">
          <About />

          <CollapsibleSection href="?view=education" label="View full Education">
            <Education />
          </CollapsibleSection>

          <PageSection id="publications" $alt $compact>
            <PageInner>
              <PublicationsPage />
            </PageInner>
          </PageSection>

          <Teaching />
        </main>

        <Footer />
      </AppContainer>
      {/* <YosheeBot /> */}
    </ThemeProvider>
  );
};

export default App;
