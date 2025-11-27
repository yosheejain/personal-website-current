import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
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
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primary : "rgba(0, 70, 42, 0.06)")};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    background: ${({ isActive, theme }) => (isActive ? theme.colors.primaryHover : "rgba(0, 70, 42, 0.14)")};
    color: ${({ isActive, theme }) => (isActive ? theme.colors.backgroundWhite : theme.colors.primary)};
    border-color: ${({ theme }) => theme.colors.supportGreen};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 14px;
  }
`;

interface NavBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About", type: "scroll" as const, href: "#about" },
    { id: "education", label: "Education", type: "link" as const, href: "./education.html" },
    { id: "experience", label: "Experience", type: "link" as const, href: "./experience.html" },
    { id: "awards", label: "Awards", type: "link" as const, href: "./awards.html" },
    { id: "publications", label: "Publications", type: "link" as const, href: "./publications.html" },
    { id: "teaching", label: "Teaching", type: "link" as const, href: "./teaching.html" },
    { id: "service", label: "Service", type: "link" as const, href: "./service.html" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.id}>
            {item.type === "scroll" ? (
              <NavLink href={item.href} isActive={activeSection === item.id} onClick={(e) => handleClick(e, item.id)}>
                {item.label}
              </NavLink>
            ) : (
              <NavLink href={item.href} isActive={false}>
                {item.label}
              </NavLink>
            )}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
