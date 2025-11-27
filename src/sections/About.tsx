import React from "react";
import styled from "styled-components";
import { Section, Title, Subtitle, Card } from "../styles/styled-components";
import { SectionContainer, SectionTitle } from "../styles/section";
import { contacts } from "../data/Contact.data";
import MonoIcon, { MonoIconName } from "../components/MonoIcon";

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 4px solid ${({ theme }) => theme.colors.backgroundWhite};
  margin-top: -60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
    justify-self: center;
    margin-top: 0;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const ContactChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 9999px;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: background-color ${({ theme }) => theme.transitions.fast}, color ${({ theme }) => theme.transitions.fast}, border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.supportGreen};
    color: ${({ theme }) => theme.colors.backgroundWhite};
    border-color: ${({ theme }) => theme.colors.supportGreen};
  }
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
`;

const labelToIconName = (label: string): MonoIconName | null => {
  switch (label.toLowerCase()) {
    case "email":
      return "Email";
    case "twitter":
      return "Twitter";
    case "bluesky":
      return "Bluesky";
    case "phone":
      return "Phone";
    case "linkedin":
      return "LinkedIn";
    case "github":
      return "GitHub";
    case "google scholar":
      return "Scholar";
    default:
      return null;
  }
};

const About: React.FC = () => {
  return (
    <Section id="about" background="gray">
      <SectionContainer>
        <Title>Yoshee Jain</Title>

        <AboutContent>
          <AboutText>
            <p style={{ fontSize: "1rem", color: "#374151", lineHeight: "1.7" }}>
              My passion lies in bridging technology and people by making technology more accessible for marginalized communities. 🔗🫂 My research interests include Human-Computer Interaction (HCI),
              Educational Technology, Large Language Models.
            </p>
            <ContactRow>
              {contacts.map((c, idx) => {
                const iconName = labelToIconName(c.label);
                return (
                  <ContactChip key={idx} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel={c.href?.startsWith("http") ? "noreferrer" : undefined}>
                    {iconName && <MonoIcon name={iconName} size={16} />}
                    <ContactLabel>{c.label}</ContactLabel>
                  </ContactChip>
                );
              })}
            </ContactRow>
          </AboutText>

          <ProfileImage>
            <img src="/img/ProfileIMG.jpeg" alt="Yoshee Jain" />
          </ProfileImage>
        </AboutContent>
      </SectionContainer>
    </Section>
  );
};

export default About;
