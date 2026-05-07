import React from "react";
import styled from "styled-components";
import { Section } from "../styles/styled-components";
import { SectionContainer } from "../styles/section";
import { contacts } from "../data/Contact.data";
import MonoIcon from "../components/MonoIcon";
import News from "../components/News";

// Two zones: left (photo + bio) | right (sidebar)
const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  align-items: start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 36px 0;
  }
`;

// Photo + bio sit together in a flex row so photo centers against bio only
const LeftZone = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  padding-right: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: 0;
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const ProfileImage = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid #ffffff;
  box-shadow:
    0 0 0 6px rgba(0, 70, 42, 0.10),
    0 0 0 11px rgba(0, 70, 42, 0.04),
    0 20px 48px rgba(0, 0, 0, 0.14);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 160px;
    height: 160px;
  }
`;

const BioBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.03em;
  margin: 0;
  line-height: 1.1;
`;

const BioText = styled.p`
  font-size: 0.97rem;
  color: #3d4a42;
  line-height: 1.75;
  margin: 0;
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ContactChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 13px;
  border-radius: 9999px;
  text-decoration: none;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.18s ease;
  font-size: 0.84rem;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 14px rgba(0, 70, 42, 0.2);
    transform: translateY(-1px);
  }
`;

const labelToIconName = (label: string): import("../components/MonoIcon").MonoIconName | null => {
  switch (label.toLowerCase()) {
    case "email":         return "Email";
    case "twitter":       return "Twitter";
    case "bluesky":       return "Bluesky";
    case "phone":         return "Phone";
    case "linkedin":      return "LinkedIn";
    case "github":        return "GitHub";
    case "google scholar":return "Scholar";
    default:              return null;
  }
};

const About: React.FC = () => (
  <Section
    id="about"
    background="gray"
    style={{ paddingTop: "96px", paddingBottom: "72px", background: "#f8faf9" }}
  >
    <SectionContainer>
      <AboutLayout>
        {/* Left: photo + bio */}
        <LeftZone>
          <ProfileImage>
            <img src="/img/ProfileIMG.jpeg" alt="Yoshee Jain" />
          </ProfileImage>

          <BioBlock>
            <Name>Yoshee Jain</Name>

            <BioText>
              I'm an incoming CS PhD student at UIUC starting in Fall 2026 (woot!).{" "}
              My research interests lie at the intersection of{" "}
              <strong>human-centered AI</strong> and <strong>computing education</strong>,
              focusing on the design of interactive learning environments that support people from
              diverse backgrounds in learning computing. 
            </BioText>

            <ContactRow>
              {contacts.map((c, idx) => {
                const iconName = labelToIconName(c.label);
                return (
                  <ContactChip
                    key={idx}
                    href={c.href || "#"}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {iconName && <MonoIcon name={iconName} size={14} />}
                    {c.label}
                  </ContactChip>
                );
              })}
            </ContactRow>
          </BioBlock>
        </LeftZone>

        {/* Right: updates sidebar */}
        <News />
      </AboutLayout>
    </SectionContainer>
  </Section>
);

export default About;
