import React, { useState, useEffect, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/styled-components";
import NavBar from "./components/NavBar";
import SectionDots from "./components/SectionDots";
import Footer from "./components/Footer";
import About from "./sections/About";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import PageLayout from "./pages/PageLayout";
import PublicationsPage from "./pages/PublicationsPage";
import Awards from "./sections/Awards";
import Teaching from "./sections/Teaching";
import Travel from "./sections/Travel";
import News from "./components/News";

const AppContainer = styled.div`
  font-family: "Lato", "Lato Black", "Lato Bold", "Lato Regular", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const SECTION_LIST = [{ id: "about", label: "About" }];

type PageId = "home" | "education" | "experience" | "awards" | "publications" | "teaching" | "travel";

const PAGE_INFO: Record<Exclude<PageId, "home">, { title: string; description: string }> = {
  education: { title: "Education", description: "Coursework, programs, and milestones from Ewha, Uppsala, and beyond." },
  experience: { title: "Experience", description: "Roles, projects, and collaborations that shaped my practice." },
  awards: { title: "Awards", description: "Highlights and recognitions from the journey so far." },
  publications: { title: "Publications", description: "Papers, articles, and works-in-progress in HCI and education." },
  teaching: { title: "Teaching", description: "Workshops, mentorship, and classroom stories I am proud of." },
  travel: { title: "Travel", description: "Trips and adventures worth remembering." },
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(SECTION_LIST[0].id);

  useEffect(() => {
    const path = window.location.pathname.replace(/\.html$/, "");
    const slug = path === "/" ? "" : path.replace(/^\//, "");
    if (!slug) {
      setCurrentPage("home");
    } else if (["education", "experience", "awards", "publications", "teaching", "travel"].includes(slug)) {
      setCurrentPage(slug as PageId);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== "home") return;
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
  }, [currentPage]);

  useEffect(() => {
    const handlePop = () => {
      const path = window.location.pathname.replace(/\.html$/, "");
      const slug = path === "/" ? "" : path.replace(/^\//, "");
      if (!slug) {
        setCurrentPage("home");
      } else if (["education", "experience", "awards", "publications", "teaching", "travel"].includes(slug)) {
        setCurrentPage(slug as PageId);
      }
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    if (pendingSection && currentPage === "home") {
      const element = document.getElementById(pendingSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(pendingSection);
      setPendingSection(null);
    }
  }, [pendingSection, currentPage]);

  const handleNavigatePage = (pageId: string) => {
    const validPage = (["education", "experience", "awards", "publications", "teaching", "travel"] as PageId[]).includes(pageId as PageId)
      ? (pageId as PageId)
      : "home";
    setCurrentPage(validPage);
    window.history.pushState({}, "", validPage === "home" ? "/" : `/${validPage}`);
    if (validPage !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionChange = (sectionId: string) => {
    if (currentPage !== "home") {
      setPendingSection(sectionId);
      handleNavigatePage("home");
      return;
    }
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderPage = useMemo(() => {
    if (currentPage === "home") {
      return (
        <>
          <NavBar activeSection={activeSection} activePage="home" onSectionChange={handleSectionChange} onNavigatePage={handleNavigatePage} />
          <SectionDots sections={SECTION_LIST} activeSection={activeSection} onSectionChange={handleSectionChange} />
          <About />
          <Footer />
        </>
      );
    }

    if (currentPage === "education") {
      return (
        <>
          <NavBar activePage="education" onNavigatePage={handleNavigatePage} onSectionChange={handleSectionChange} />
          <Education />
          <Footer />
        </>
      );
    }

    if (currentPage === "experience") {
      return (
        <>
          <NavBar activePage="experience" onNavigatePage={handleNavigatePage} onSectionChange={handleSectionChange} />
          <Experience />
          <Footer />
        </>
      );
    }

    if (currentPage === "awards") {
      return (
        <>
          <NavBar activePage="awards" onNavigatePage={handleNavigatePage} onSectionChange={handleSectionChange} />
          <Awards />
          <Footer />
        </>
      );
    }

    if (currentPage === "teaching") {
      return (
        <>
          <NavBar activePage="teaching" onNavigatePage={handleNavigatePage} onSectionChange={handleSectionChange} />
          <Teaching />
          <Footer />
        </>
      );
    }

    if (currentPage === "travel") {
      return (
        <>
          <NavBar activePage="travel" onNavigatePage={handleNavigatePage} onSectionChange={handleSectionChange} />
          <Travel />
          <Footer />
        </>
      );
    }

    const pageMeta = PAGE_INFO[currentPage as Exclude<PageId, "home">];
    const isPublications = currentPage === "publications";
    const pageBody = isPublications ? <PublicationsPage /> : null;

    return (
      <>
        <PageLayout
          title={pageMeta.title}
          description={pageMeta.description}
          activePage={currentPage}
          onNavigatePage={handleNavigatePage}
          onSectionChange={handleSectionChange}
          variant={isPublications ? "bare" : "card"}
        >
          {pageBody}
        </PageLayout>
        <Footer />
      </>
    );
  }, [currentPage, activeSection]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>{renderPage}</AppContainer>
    </ThemeProvider>
  );
};

export default App;
