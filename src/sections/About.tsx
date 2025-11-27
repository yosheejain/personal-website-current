import React from "react";
import styled from "styled-components";
import { Section, Title, Subtitle, Card } from "../styles/styled-components";
import { SectionContainer, SectionTitle } from "../styles/section";
import { contacts } from "../data/Contact.data";
import MonoIcon, { MonoIconName } from "../components/MonoIcon";
import News from "../components/News";

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 4px solid ${({ theme }) => theme.colors.backgroundWhite};
  margin-top: 0;
  align-self: center;

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
    <Section id="about" background="gray" style={{ paddingTop: "100px", paddingBottom: "32px" }}>
      <SectionContainer>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <AboutContent>
            <AboutText>
              <Title>Yoshee Jain</Title>
              <p style={{ fontSize: "1rem", color: "#374151", lineHeight: "1.7" }}>
              In my research, I aim to design human-centered systems that can enable the transformation of computing as a core literacy for people
from diverse backgrounds. I aim to create educational technology tools that allow all students to engage with computing in ways
that align with their learning objectives and are meaningful to their future goals, using methods from human-computer interaction and
machine learning.
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

          <News />
        </div>
      </SectionContainer>
    </Section>
  );
};

export default About;
