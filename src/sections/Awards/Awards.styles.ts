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

export const SectionContainer = styled(BaseSectionContainer)`
  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const FilterPill = styled.button<{ active: boolean }>`
  border: ${({ active, theme }) => (active ? `2px solid ${theme.colors.primary}` : `2px solid ${theme.colors.borderColor}`)};
  background: ${({ active, theme }) => (active ? theme.colors.primary : "transparent")};
  color: ${({ active, theme }) => (active ? theme.colors.backgroundWhite : theme.colors.textSecondary)};
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  box-shadow: ${({ active }) => (active ? "0 8px 18px rgba(0,0,0,0.12)" : "0 8px 18px rgba(0,0,0,0.04)")};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.colors.primaryHover : theme.colors.pageAccentTint)};
    color: ${({ active, theme }) => (active ? theme.colors.backgroundWhite : theme.colors.primary)};
    transform: translateY(-1px);
  }
`;

export const YearRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 6px 0 28px;
`;

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding-left: 28px;

  &::before {
    content: "";
    position: absolute;
    left: 14px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
  }

  @media (max-width: 768px) {
    padding-left: 0;

    &::before {
      left: 8px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 24px;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Dot = styled.span`
  position: absolute;
  left: -2px;
  top: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.pageAccentBorder};
`;

export const DateLabel = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  padding: 16px 18px;
`;

export const Title = styled.h3`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.05rem;
`;

export const Org = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Desc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  font-size: 0.95rem;
`;
