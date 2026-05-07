import styled from "styled-components";
import { SectionContainer as BaseSectionContainer } from "../../styles/section";
import { media } from "../../styles/styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing["4xl"]} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing["3xl"]};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  width: 100%;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0 ${({ theme }) => theme.spacing["2xl"]};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0 ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const SectionContainer = styled(BaseSectionContainer)`
  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const FiltersBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Timeline = styled.div`
  position: relative;
  min-height: 400px;
  width: 100%;
  max-width: 1200px;

  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.pageAccentShadow} 0%,
      ${({ theme }) => theme.colors.pageAccentBorder} 60%,
      ${({ theme }) => theme.colors.pageAccentTint} 100%
    );
  }
`;

export const ExperienceItem = styled.div<{ isLeft: boolean }>`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  column-gap: 24px;
  margin-bottom: 40px;
  position: relative;
  padding-left: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    padding-left: 0;
  }

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const OrgColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    padding-top: 0;
    align-items: center;
  }
`;

export const OrgLabel = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  align-self: start;
  line-height: 1.3;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    width: 100%;
    align-self: center;
  }
`;

export const YearPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.pageAccentTint};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  align-self: flex-start;
  transform: translateX(-120%);
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
`;

export const OrgDescription = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 2px 0 0;
  padding-left: 20px;
  white-space: pre-line;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
`;

export const OrgLogo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const YearFilterRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
`;

export const YearFilterPill = styled.button<{ active: boolean }>`
  border: none;
  cursor: pointer;
  padding: 7px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  background: ${({ active, theme }) => (active ? theme.colors.primary : "rgba(255, 255, 255, 0.7)")};
  color: ${({ active, theme }) => (active ? theme.colors.backgroundWhite : theme.colors.textSecondary)};
  box-shadow: ${({ active, theme }) =>
    active ? `0 4px 14px ${theme.colors.pageAccentShadow}` : "0 1px 4px rgba(0, 0, 0, 0.07)"};
  border: 1px solid ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.borderColor};
  transition: all 0.18s ease;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.primaryHover : theme.colors.pageAccentTint};
    color: ${({ active, theme }) =>
      active ? theme.colors.backgroundWhite : theme.colors.primary};
    transform: translateY(-1px);
    border-color: ${({ active, theme }) => (active ? theme.colors.primaryHover : theme.colors.primary)};
  }
`;

export const ExperienceContent = styled.div<{ isLeft: boolean }>`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px ${({ theme }) => theme.colors.pageAccentTint};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: box-shadow 0.18s ease, transform 0.18s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09), 0 2px 6px ${({ theme }) => theme.colors.pageAccentBorder};
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 6px;

  @media (max-width: 768px) {
    position: static;
    top: auto;
    right: auto;
    margin-top: 8px;
    margin-bottom: 12px;
    justify-content: flex-start;
  }
`;

export const Tag = styled.span<{
  variant: "cse" | "edu" | "teaching" | "research" | "scholarship" | "academic" | "courses" | "mentoring" | "clubs";
}>`
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  ${({ variant, theme }) => {
    switch (variant) {
      case "cse":
        return `background: ${theme.colors.primary}; color: white;`;
      case "edu":
        return `background: ${theme.colors.supportGreen}; color: white;`;
      case "teaching":
        return `background: ${theme.colors.primary}; color: white;`;
      case "research":
        return `background: ${theme.colors.primary}; color: white;`;
      case "scholarship":
        return `background: #2E7D5E; color: white;`;
      case "academic":
        return `background: #4A9B87; color: white;`;
      case "courses":
        return `background: ${theme.colors.primary}; color: white;`;
      case "mentoring":
        return `background: ${theme.colors.supportGreen}; color: white;`;
      case "clubs":
        return `
          background: ${theme.colors.pageAccentTint};
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.pageAccentBorder};
        `;
      default:
        return `background: ${theme.colors.gray200}; color: ${theme.colors.textSecondary};`;
    }
  }}
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Organization = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const RoleTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  margin: 2px 0 0;
  font-size: 1.02rem;
`;

export const RolePeriod = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
  font-size: 0.83rem;
  margin-left: 8px;
  font-style: italic;
`;

export const LogoSlot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 24px;
  top: 34px;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.pageAccentBorder}, 0 2px 6px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    top: 50%;
    display: block;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const TimelineDotDesktop = styled.div`
  position: absolute;
  left: 24px;
  top: 34px;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.pageAccentBorder}, 0 2px 6px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Duration = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  margin: 4px 0 12px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  font-size: 0.9rem;
  white-space: pre-line;
`;

export const MobileOnlyBr = styled.br`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;

export const SmallMobileOnlyBr = styled.br`
  display: none;
  @media (max-width: 480px) {
    display: inline;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.7fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 7px 16px;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  background: ${({ theme, active }) => (active ? theme.colors.primary : "rgba(255, 255, 255, 0.7)")};
  color: ${({ theme, active }) => (active ? "white" : theme.colors.textSecondary)};
  border: 1px solid ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.borderColor};
  box-shadow: ${({ active, theme }) =>
    active ? `0 4px 14px ${theme.colors.pageAccentShadow}` : "0 1px 4px rgba(0, 0, 0, 0.06)"};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme, active }) =>
      active ? theme.colors.primaryHover : theme.colors.pageAccentTint};
    color: ${({ theme, active }) => (active ? "white" : theme.colors.primary)};
    transform: translateY(-1px);
  }
`;
