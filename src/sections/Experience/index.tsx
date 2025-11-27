import React, { useState } from "react";
import {
  Section,
  Timeline,
  ExperienceItem,
  ExperienceContent,
  TimelineDot,
  Duration,
  Description,
  CardHeader,
  RoleTitle,
  RolePeriod,
  OrgLabel,
  OrgColumn,
  OrgLogo,
  OrgDescription,
  TagsContainer,
  Tag,
  FilterContainer,
  FilterButton,
  SectionContainer,
  MobileOnlyBr,
  SmallMobileOnlyBr,
  TimelineDotDesktop,
} from "./Experience.styles";
import { SectionTitle } from "../../styles/section";
import { experiences } from "./Experience.data";
import { Container } from "../../styles/styled-components";

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.tags?.includes(activeFilter.toUpperCase());
  });

  const renderWithResponsiveBreaks = (text: string) => {
    const tokens = text.split(/(\[\[BR_768\]\]|\[\[BR_480\]\])/g);
    return tokens.map((tok, i) => {
      if (tok === "[[BR_768]]") return <MobileOnlyBr key={`br768-${i}`} />;
      if (tok === "[[BR_480]]") return <SmallMobileOnlyBr key={`br480-${i}`} />;
      return tok;
    });
  };

  return (
    <Section id="experience">
      <SectionContainer>
        <SectionTitle>Experience</SectionTitle>
        <FilterContainer>
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All
          </FilterButton>
          <FilterButton active={activeFilter === "cse"} onClick={() => setActiveFilter("cse")}>
            CSE
          </FilterButton>
          <FilterButton active={activeFilter === "edu"} onClick={() => setActiveFilter("edu")}>
            EDU
          </FilterButton>
        </FilterContainer>
        <Timeline>
          {filteredExperiences.map((exp, index) => (
            <div key={index} style={{ position: "relative" }}>
              <ExperienceItem isLeft>
                <OrgColumn>
                  <OrgLabel>{exp.organization}</OrgLabel>
                  <OrgDescription>{renderWithResponsiveBreaks(exp.orgDescription || "")}</OrgDescription>
                  {exp.logoUrl ? (
                    <OrgLogo>
                      <img src={exp.logoUrl} alt={`${exp.organization} logo`} />
                    </OrgLogo>
                  ) : null}
                  <TimelineDot />
                </OrgColumn>
                <ExperienceContent isLeft>
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} style={{ marginBottom: rIdx < exp.roles.length - 1 ? 12 : 0 }}>
                      <RoleTitle>
                        {role.title}
                        {role.duration && <RolePeriod>{role.duration}</RolePeriod>}
                      </RoleTitle>
                      {rIdx === 0 && exp.tags && (
                        <TagsContainer>
                          {exp.tags.map((tag, tIdx) => (
                            <Tag key={tIdx} variant={tag.toLowerCase() as "cse" | "edu"}>
                              {tag}
                            </Tag>
                          ))}
                        </TagsContainer>
                      )}
                      <Description>{role.description}</Description>
                    </div>
                  ))}
                </ExperienceContent>
                <TimelineDotDesktop />
              </ExperienceItem>
            </div>
          ))}
        </Timeline>
      </SectionContainer>
    </Section>
  );
};

export default Experience;
