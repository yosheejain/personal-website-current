import React from "react";
import styled from "styled-components";
import { Container } from "../styles/styled-components";
import NavBar from "../components/NavBar";

const PageSection = styled.section<{ compact?: boolean }>`
  min-height: 100vh;
  padding: ${({ compact }) => (compact ? "100px 2px 64px" : "140px 16px 100px")};
  background: #fafafa;
`;

const PageCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border: 1px solid rgba(0, 70, 42, 0.08);
  border-radius: 22px;
  padding: 40px 46px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(0, 70, 42, 0.08), transparent 45%);
    pointer-events: none;
  }
`;

const BareContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2px;
`;

const PageTitle = styled.h1`
  margin: 0 0 12px;
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

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, activePage, onNavigatePage, onSectionChange, children, variant = "card" }) => {
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
              <PageTitle>{title}</PageTitle>
              <PageSubtitle>{description}</PageSubtitle>
              {children}
            </PageCard>
          </Container>
        )}
      </PageSection>
    </>
  );
};

export default PageLayout;
