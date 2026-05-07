import React, { useState, useEffect } from "react";
import styled from "styled-components";

const navItems = [
  { id: "about",        label: "About",        href: "#about" },
  { id: "education",    label: "Education",    href: "#education" },
  { id: "publications", label: "Publications", href: "#publications" },
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
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.navBarBgScrolled : theme.colors.navBarBg};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
  border-radius: 999px;
  padding: 5px;
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled
      ? `0 6px 28px rgba(0, 0, 0, 0.10), 0 2px 6px ${theme.colors.pageAccentTint}`
      : "0 4px 18px rgba(0, 0, 0, 0.07)"};
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
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
  color: ${({ $isActive, theme }) => ($isActive ? "#ffffff" : theme.colors.pillInactiveText)};
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
  background: ${({ theme }) => theme.colors.pageAccentBorder};
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

const IconButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : "transparent")};
  color: ${({ $active, theme }) => ($active ? "#ffffff" : theme.colors.primary)};
  transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primaryHover : theme.colors.pageAccentTint};
    transform: scale(1.05);
  }

  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2;
  }
`;

interface NavBarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  themeMode: "light" | "dark";
  a11yMode: boolean;
  onThemeToggle: () => void;
  onA11yToggle: () => void;
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const A11yIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="4.5" r="1.6" fill="currentColor" />
    <path d="M5 8.5h14" />
    <path d="M12 8.5v5" />
    <path d="M9 21l3-7.5L15 21" />
  </svg>
);

const NavBar: React.FC<NavBarProps> = ({
  activeSection,
  onSectionChange,
  themeMode,
  a11yMode,
  onThemeToggle,
  onA11yToggle,
}) => {
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
    <NavOuter aria-label="Primary">
      <GlassBar $scrolled={isScrolled}>
        <NavList>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <NavItem key={item.id}>
                <NavLink
                  href={item.href}
                  $isActive={isActive}
                  aria-current={isActive ? "true" : undefined}
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
        <IconButton
          type="button"
          onClick={onThemeToggle}
          aria-label={themeMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={themeMode === "dark"}
          title={themeMode === "dark" ? "Light mode" : "Dark mode"}
        >
          {themeMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
        <IconButton
          type="button"
          onClick={onA11yToggle}
          aria-label={a11yMode ? "Disable accessibility mode" : "Enable accessibility mode"}
          aria-pressed={a11yMode}
          title={a11yMode ? "Accessibility on" : "Accessibility off"}
          $active={a11yMode}
        >
          <A11yIcon />
        </IconButton>
      </GlassBar>
    </NavOuter>
  );
};

export default NavBar;
