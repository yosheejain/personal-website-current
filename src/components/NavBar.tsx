import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ isScrolled }) => (isScrolled ? "translateY(-2px)" : "translateY(0)")};
  opacity: ${({ isScrolled }) => (isScrolled ? 0.95 : 1)};

  @media (max-width: 768px) {
    top: 12px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    justify-content: flex-start;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
  pointer-events: auto;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.backgroundWhite : theme.colors.textSecondary)};
  font-weight: 700;
  font-size: 14px;
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primary : "rgba(0, 70, 42, 0.09)")};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    background: ${({ isActive, theme }) => (isActive ? theme.colors.primaryHover : "rgba(0, 70, 42, 0.18)")};
    color: ${({ isActive, theme }) => (isActive ? theme.colors.backgroundWhite : theme.colors.primary)};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 14px;
  }
`;

const RightLink = styled.a`
  margin-left: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  pointer-events: auto;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface NavBarProps {
  activeSection?: string;
  activePage?: string;
  onSectionChange?: (section: string) => void;
  onNavigatePage?: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, activePage, onSectionChange, onNavigatePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About", type: "section" as const, href: "#about" },
    { id: "education", label: "Education", type: "page" as const, href: "/education" },
    { id: "publications", label: "Publications", type: "page" as const, href: "/publications" },
    { id: "experience", label: "Experience", type: "page" as const, href: "/experience" },
    { id: "awards", label: "Honors", type: "page" as const, href: "/awards" },
    { id: "teaching", label: "Teaching", type: "page" as const, href: "/teaching" },
    { id: "travel", label: "Travel", type: "page" as const, href: "/travel" },
  ];

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    e.preventDefault();
    if (onNavigatePage) {
      onNavigatePage(pageId);
    }
  };

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.id}>
            {item.type === "section" ? (
              <NavLink href={item.href} isActive={activeSection === item.id} onClick={(e) => handleSectionClick(e, item.id)}>
                {item.label}
              </NavLink>
            ) : (
              <NavLink href={item.href} isActive={activePage === item.id} onClick={(e) => handlePageClick(e, item.id)}>
                {item.label}
              </NavLink>
            )}
          </NavItem>
        ))}
      </NavList>
      <RightLink href="/CV.pdf" target="_blank" rel="noreferrer">
        CV
      </RightLink>
    </NavContainer>
  );
};

export default NavBar;
