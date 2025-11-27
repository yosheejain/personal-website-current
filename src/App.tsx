import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/styled-components";
import NavBar from "./components/NavBar";
import SectionDots from "./components/SectionDots";
import Footer from "./components/Footer";
import About from "./sections/About";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const SECTION_LIST = [
  { id: "about", label: "About" },
  { id: "project", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(SECTION_LIST[0].id);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <NavBar activeSection={activeSection} onSectionChange={setActiveSection} />
        <SectionDots sections={SECTION_LIST} activeSection={activeSection} onSectionChange={setActiveSection} />
        <About />
        <Project />
        <Experience />
        <Education />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
