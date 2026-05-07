import React, { useState, useEffect } from "react";
import styled from "styled-components";

const navItems = [
  { id: "about",        label: "About",        type: "section" as const, href: "#about",        color: "#00462A" },
  { id: "education",    label: "Education",    type: "page"    as const, href: "/education",    color: "#2563EB" },
  { id: "publications", label: "Publications", type: "page"    as const, href: "/publications", color: "#00462A" },
  { id: "experience",   label: "Experience",   type: "page"    as const, href: "/experience",   color: "#0D9488" },
  { id: "awards",       label: "Honors",       type: "page"    as const, href: "/awards",       color: "#D97706" },
  { id: "teaching",     label: "Teaching",     type: "page"    as const, href: "/teaching",     color: "#7C3AED" },
  { id: "travel",       label: "Travel",       type: "page"    as const, href: "/travel",       color: "#DC2626" },
];

const NavOuter = styled.nav`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 12px;
    padding: 0 8px;
    justify-content: flex-start;
  }
`;

const GlassBar = styled.div<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(248, 252, 250, 0.94)" : "rgba(248, 252, 250, 0.82)"};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(0, 70, 42, 0.14);
  border-radius: 999px;
  padding: 5px;
  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0 6px 28px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 70, 42, 0.08)"
      : "0 4px 18px rgba(0, 0, 0, 0.07)"};
  transition: background 0.25s ease, box-shadow 0.25s ease;
  pointer-events: auto;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2px;
`;

const NavItem = styled.li``;

const NavLink = styled.a<{ $isActive: boolean; $color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ $isActive, $color }) => ($isActive ? "#ffffff" : "#64748b")};
  font-weight: 600;
  font-size: 13.5px;
  padding: 8px 16px;
  border-radius: 999px;
  background: ${({ $isActive, $color }) => ($isActive ? $color : "transparent")};
  box-shadow: ${({ $isActive, $color }) =>
    $isActive ? `0 2px 10px ${$color}44` : "none"};
  transition: all 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ $isActive, $color }) =>
      $isActive ? $color : `${$color}14`};
    color: ${({ $isActive, $color }) => ($isActive ? "#ffffff" : $color)};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 7px 12px;
  }
`;

const NavDivider = styled.div`
  width: 1px;
  height: 18px;
  background: rgba(0, 70, 42, 0.14);
  margin: 0 4px;
  flex-shrink: 0;
`;

const CVLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-weight: 700;
  font-size: 13.5px;
  color: #00462A;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 999px;
  transition: background 0.18s ease;
  white-space: nowrap;
  letter-spacing: 0.01em;

  &:hover {
    background: rgba(0, 70, 42, 0.08);
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (onSectionChange) onSectionChange(sectionId);
  };

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    e.preventDefault();
    if (onNavigatePage) onNavigatePage(pageId);
  };

  return (
    <NavOuter>
      <GlassBar $scrolled={isScrolled}>
        <NavList>
          {navItems.map((item) => {
            const isActive = item.type === "section"
              ? activeSection === item.id
              : activePage === item.id;
            return (
              <NavItem key={item.id}>
                <NavLink
                  href={item.href}
                  $isActive={isActive}
                  $color={item.color}
                  onClick={(e) =>
                    item.type === "section"
                      ? handleSectionClick(e, item.id)
                      : handlePageClick(e, item.id)
                  }
                >
                  {item.label}
                </NavLink>
              </NavItem>
            );
          })}
        </NavList>
        <NavDivider />
        <CVLink href="/CV.pdf" target="_blank" rel="noreferrer">
          CV ↗
        </CVLink>
      </GlassBar>
    </NavOuter>
  );
};

export default NavBar;
