import React from "react";
import styled from "styled-components";
import { Container } from "../styles/styled-components";
import NavBar from "../components/NavBar";

const PageSection = styled.section<{ compact?: boolean }>`
  min-height: 100vh;
  padding: ${({ compact }) => (compact ? "100px 2px 64px" : "140px 16px 100px")};
  background: #ffffff;
`;

const PageCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
  border-radius: 22px;
  padding: 40px 46px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.pageAccentTint}, 0 16px 40px rgba(0, 0, 0, 0.07);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 15% 0%, ${({ theme }) => theme.colors.pageAccentTint} 0%, transparent 55%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.pageAccentBorder});
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
    border-radius: 16px;
  }
`;

const BareContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2px;
`;

const PageHeaderArea = styled.div`
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const PageTitle = styled.h1`
  margin: 0 0 8px;
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const PageSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

interface PageLayoutProps {
  title: string;
  description: string;
  activePage: string;
  onNavigatePage: (page: string) => void;
  onSectionChange?: (section: string) => void;
  children?: React.ReactNode;
  variant?: "card" | "bare";
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  activePage,
  onNavigatePage,
  onSectionChange,
  children,
  variant = "card",
}) => {
  const isBare = variant === "bare";

  return (
    <>
      <NavBar activePage={activePage} onNavigatePage={onNavigatePage} onSectionChange={onSectionChange} />
      <PageSection compact={isBare}>
        {isBare ? (
          <BareContainer>{children}</BareContainer>
        ) : (
          <Container>
            <PageCard>
              <PageHeaderArea>
                <PageTitle>{title}</PageTitle>
                <PageSubtitle>{description}</PageSubtitle>
              </PageHeaderArea>
              {children}
            </PageCard>
          </Container>
        )}
      </PageSection>
    </>
  );
};

export default PageLayout;
