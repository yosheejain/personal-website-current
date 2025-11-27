import styled from "styled-components";
import { SectionContainer as BaseSectionContainer } from "../../styles/section";
import { media } from "../../styles/styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing["4xl"]} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing["3xl"]};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  width: 100%;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0 ${({ theme }) => theme.spacing["2xl"]};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0 ${({ theme }) => theme.spacing["2xl"]};
  }
`;

// Experience 전용 컨테이너: 모바일에서 좌우 40px 패딩 적용
export const SectionContainer = styled(BaseSectionContainer)`
  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const Timeline = styled.div`
  position: relative;
  min-height: 400px; /* 최소 높이 설정으로 레이아웃 폭 유지 */
  width: 100%; /* 부모 요소의 전체 너비를 차지하도록 설정 */
  max-width: 1200px; /* 최대 너비 제한으로 일정한 레이아웃 유지 */

  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
    transform: none;
  }
`;

export const ExperienceItem = styled.div<{ isLeft: boolean }>`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr; /* 4:6 ratio */
  column-gap: 24px;
  margin-bottom: 40px;
  position: relative;
  padding-left: 24px; /* space for timeline line */

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
  padding-top: 20px; /* align with first line of card text */
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    padding-top: 0;
    align-items: center;
  }
`;

export const OrgLabel = styled.h3`
  font-size: 1.125rem; /* smaller */
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  align-self: start; /* align with first line of card */
  line-height: 1.3;
  padding-left: 20px; /* keep text clear from timeline dot */

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    width: 100%;
    align-self: center;
  }
`;

export const OrgDescription = styled.p`
  font-size: 0.9rem;
  color: #4b5563; /* neutral caption */
  margin: 2px 0 0;
  padding-left: 20px; /* align with label start */
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
  margin-left: 20px; /* align with OrgLabel text start */
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

export const ExperienceContent = styled.div<{ isLeft: boolean }>`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;

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

export const Tag = styled.span<{ variant: "cse" | "edu" }>`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ variant, theme }) => {
    switch (variant) {
      case "cse":
        return `
          background: ${theme.colors.primary};
          color: white;
        `;
      case "edu":
        return `
          background: ${theme.colors.supportGreen};
          color: white;
        `;
      default:
        return `
          background: ${theme.colors.gray200};
          color: ${theme.colors.textSecondary};
        `;
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
  color: #1a1a1a;
  margin: 0;
`;

export const RoleTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  margin: 2px 0 0;
  font-size: 1.05rem;
`;

export const RolePeriod = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
  font-size: 0.85rem;
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

// Mobile-only timeline dot (inside OrgColumn)
export const TimelineDot = styled.div`
  position: absolute;
  left: 24px;
  top: 34px; /* align with first line of card text */
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    top: 50%; /* center vertically within OrgColumn */
    display: block;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

// Desktop/tablet timeline dot (positioned relative to ExperienceItem)
export const TimelineDotDesktop = styled.div`
  position: absolute;
  left: 24px;
  top: 34px; /* align with first line of card text (duration line) */
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Duration = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin: 4px 0 12px;
`;

export const Description = styled.p`
  color: #374151;
  line-height: 1.6;
  font-size: 0.9rem;
  white-space: pre-line;
`;

// Responsive line-break helpers
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
  gap: 12px;
  margin-bottom: 32px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.borderColor)};
  background: ${({ theme, active }) => (active ? theme.colors.primary : "transparent")};
  color: ${({ theme, active }) => (active ? "white" : theme.colors.textSecondary)};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.backgroundLight)};
    color: ${({ theme, active }) => (active ? "white" : theme.colors.primary)};
  }
`;
