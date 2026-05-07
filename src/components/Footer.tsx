import React from "react";
import styled from "styled-components";

const FooterOuter = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 28px ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
  }
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.01em;
`;

const Copy = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.55);
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterOuter>
      <Inner>
        <Name>Yoshee Jain</Name>
        <Copy>© {currentYear} · All rights reserved</Copy>
      </Inner>
    </FooterOuter>
  );
};

export default Footer;
