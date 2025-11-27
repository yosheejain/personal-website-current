import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 80px 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.875rem; /* ~30px */
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
  grid-template-columns: 0.3fr 0.7fr; /* 4:6 ratio */
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
  padding-left: 20px; /* align left edge with Experience OrgLabel */
`;

export const RightColumn = styled(Column)`
  padding-left: 24px; /* match Experience card inner padding */
`;

export const School = styled.h3`
  font-size: 1.25rem; /* 20px */
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
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  color: ${(props) => props.theme.colors.textPrimary};
  background: none;
  background-color: ${(props) => props.theme.colors.primary}12;
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  margin: 0 0 4px; /* tighter bottom to couple with details */
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
  font-size: 0.975rem; /* ~15.6px */
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
  margin: 2px 0 0; /* tighter top to couple with heading */
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  font-size: 0.95rem; /* ~15px */

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
  background: ${({ theme }) => theme.colors.gray200};
  margin: 20px 0 0;
`;
