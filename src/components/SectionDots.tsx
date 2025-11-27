import React from "react";
import styled from "styled-components";

const DotsWrapper = styled.div`
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 900;

  @media (max-width: 900px) {
    display: none;
  }
`;

const DotButton = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.borderColor)};
  background: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.backgroundWhite)};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.08);
    border-color: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const DotLabel = styled.span`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.backgroundWhite};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const DotItem = styled.div`
  position: relative;

  &:hover ${DotLabel} {
    opacity: 1;
    transform: translate(6px, -50%);
  }
`;

interface SectionDotsProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SectionDots: React.FC<SectionDotsProps> = ({ sections, activeSection, onSectionChange }) => {
  const handleClick = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <DotsWrapper>
      {sections.map((section) => (
        <DotItem key={section.id}>
          <DotButton type="button" isActive={activeSection === section.id} aria-label={section.label} onClick={() => handleClick(section.id)} />
          <DotLabel>{section.label}</DotLabel>
        </DotItem>
      ))}
    </DotsWrapper>
  );
};

export default SectionDots;
