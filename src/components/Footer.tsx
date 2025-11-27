import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundGray};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Copyright>© {currentYear} Yoshee Jain. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
