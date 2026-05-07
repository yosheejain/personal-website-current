import React, { useState, useEffect } from "react";
import styled from "styled-components";

const navItems = [
  { id: "about",        label: "About",        href: "#about" },
  { id: "education",    label: "Education",    href: "#education" },
  { id: "publications", label: "Publications", href: "#publications" },
  { id: "experience",   label: "Experience",   href: "#experience" },
  { id: "awards",       label: "Honors",       href: "#awards" },
  { id: "teaching",     label: "Teaching",     href: "#teaching" },
  { id: "travel",       label: "Travel",       href: "#travel" },
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

  @media (max-width: 768px) {
    overflow-x: auto;
    max-width: calc(100vw - 16px);
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2px;
`;

const NavItem = styled.li``;

const NavLink = styled.a<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ $isActive, theme }) => ($isActive ? "#ffffff" : "#64748b")};
  font-weight: 600;
  font-size: 13.5px;
  padding: 8px 16px;
  border-radius: 999px;
  background: ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : "transparent")};
  box-shadow: ${({ $isActive, theme }) =>
    $isActive ? `0 2px 10px ${theme.colors.pageAccentShadow}` : "none"};
  transition: all 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary : theme.colors.pageAccentTint};
    color: ${({ $isActive, theme }) => ($isActive ? "#ffffff" : theme.colors.primary)};
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
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 999px;
  transition: background 0.18s ease;
  white-space: nowrap;
  letter-spacing: 0.01em;

  &:hover {
    background: ${({ theme }) => theme.colors.pageAccentTint};
  }
`;

interface NavBarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionChange }) => {
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

  return (
    <NavOuter>
      <GlassBar $scrolled={isScrolled}>
        <NavList>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <NavItem key={item.id}>
                <NavLink
                  href={item.href}
                  $isActive={isActive}
                  onClick={(e) => handleSectionClick(e, item.id)}
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
