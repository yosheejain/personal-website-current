import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 160px 12px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 880px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: 28px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Block = styled.div`
  padding: 0 0 8px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  gap: 16px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LeftColumn = styled(Column)`
  padding-left: 20px;
`;

export const RightColumn = styled(Column)`
  padding-left: 24px;
`;

export const School = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const Degree = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const DegreeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h3 {
    margin-bottom: 2px;
  }
`;

export const HighlightSubTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.pageAccentTint} 0%,
    transparent 100%
  );
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 0 ${({ theme }) => theme.borderRadius.sm} ${({ theme }) => theme.borderRadius.sm} 0;
  margin: 0 0 4px;
  display: inline-block;
  width: fit-content;
`;

export const DegreeItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.975rem;
  font-weight: 600;
  margin: 0;
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.975rem;
  font-weight: 600;
  margin: 0;
`;

export const Details = styled.ul`
  margin: 2px 0 0;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  font-size: 0.95rem;

  li {
    margin: 1px 0;
  }

  li::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InlineLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: ${({ theme }) => theme.colors.borderColor};
  transition: color 0.2s ease, text-decoration-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.borderColor};
  margin: 20px 0 0;
`;

export const FactList = styled.ul`
  margin: 8px 0 6px;
  padding-left: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  font-size: 0.98rem;

  li {
    margin: 2px 0;
  }

  li::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CourseTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`;

export const CourseTag = styled.span`
  padding: 5px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.pageAccentTint};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.pageAccentBorder};
  }
`;

export const PhotoCard = styled.div`
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
`;

export const Photo = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 3 / 2;
`;

export const PhotoCaption = styled.p`
  margin: 0;
  padding: 10px 14px 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  background: ${({ theme }) => theme.colors.backgroundGray};
`;
