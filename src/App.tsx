import React, { useState, useEffect, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/styled-components";
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

const PageSection = styled.section`
  min-height: 100vh;
  padding: 140px 16px 100px;
  background: #ffffff;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 110px 12px 72px;
  }
`;

const PageInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const PageCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
  border-radius: 22px;
  padding: 40px 46px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.pageAccentTint}, 0 16px 40px rgba(0, 0, 0, 0.07);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 15% 0%, ${({ theme }) => theme.colors.pageAccentTint} 0%, transparent 55%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.pageAccentBorder});
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
    border-radius: 16px;
  }
`;

const PageHeaderArea = styled.div`
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const PageTitle = styled.h2`
  margin: 0 0 8px;
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const PageSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const SECTION_LIST = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Honors" },
  { id: "teaching", label: "Teaching" },
  { id: "travel", label: "Travel" },
];

const PLACEHOLDER_SECTIONS: { id: string; title: string; description: string }[] = [
  { id: "experience", title: "Experience", description: "Experience details will be added soon." },
  { id: "awards", title: "Honors", description: "Awards and honors will be added soon." },
  { id: "teaching", title: "Teaching", description: "Teaching highlights will be added soon." },
  { id: "travel", title: "Travel", description: "Travel stories and photos will be added soon." },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(SECTION_LIST[0].id);

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

  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntroSplash />
      <AppContainer>
        <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
        <SectionDots sections={SECTION_LIST} activeSection={activeSection} onSectionChange={handleSectionChange} />

        <About />
        <Education />

        <PageSection id="publications">
          <PageInner>
            <PublicationsPage />
          </PageInner>
        </PageSection>

        {PLACEHOLDER_SECTIONS.map((s) => (
          <PageSection key={s.id} id={s.id}>
            <PageInner>
              <PageCard>
                <PageHeaderArea>
                  <PageTitle>To be updated</PageTitle>
                  <PageSubtitle>{s.description}</PageSubtitle>
                </PageHeaderArea>
              </PageCard>
            </PageInner>
          </PageSection>
        ))}

        <Footer />
      </AppContainer>
      <YosheeBot />
    </ThemeProvider>
  );
};

export default App;
