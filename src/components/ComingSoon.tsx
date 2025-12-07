import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  letter-spacing: 0.01em;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  width: fit-content;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.01em;
`;

const Note = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  font-size: 0.98rem;
`;

interface ComingSoonProps {
  label: string;
  note?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ label, note }) => {
  return (
    <Wrapper>
      <Pill>{label}</Pill>
      <Heading>To be updated soon</Heading>
      <Note>{note || null}</Note>
    </Wrapper>
  );
};

export default ComingSoon;
