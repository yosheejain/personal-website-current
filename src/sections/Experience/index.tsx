import React, { useMemo, useState, useEffect } from "react";
import {
  Section,
  Timeline,
  ExperienceItem,
  ExperienceContent,
  TimelineDot,
  Description,
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
  FiltersBar,
  MobileOnlyBr,
  SmallMobileOnlyBr,
  TimelineDotDesktop,
  YearPill,
} from "./Experience.styles";
import { experiences } from "./Experience.data";
import SectionDots from "../../components/SectionDots";

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeYearId, setActiveYearId] = useState<string>("");

  const years = useMemo(() => {
    const yearSet = new Set<string>();
    experiences.forEach((exp) => {
      const dur = exp.roles[0]?.duration || "";
      const match = dur.match(/\b(20\d{2})\b/);
      if (match) yearSet.add(match[1]);
    });
    return Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
  }, []);

  useEffect(() => {
    if (years.length) {
      setActiveYearId(`year-${years[0]}`);
    }
  }, [years]);

  const filteredByCategory = useMemo(() => {
    return experiences.filter((exp) => {
      if (activeFilter === "all") return true;
      return exp.tags?.includes(activeFilter.toUpperCase());
    });
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      for (const year of years) {
        const el = document.getElementById(`year-${year}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveYearId(`year-${year}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [years]);

  const handleYearChange = (yearId: string) => {
    setActiveYearId(yearId);
    const el = document.getElementById(yearId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const yearOfExp = (exp: typeof experiences[number]) => {
    const dur = exp.roles[0]?.duration || "";
    const match = dur.match(/\b(20\d{2})\b/);
    return match ? match[1] : "";
  };

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
      <SectionDots sections={years.map((y) => ({ id: `year-${y}`, label: y }))} activeSection={activeYearId} onSectionChange={handleYearChange} />
      <SectionContainer>
        <FiltersBar>
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
        </FiltersBar>
        <Timeline>
          {years.map((year) => {
            const yearExperiences = filteredByCategory.filter((exp) => yearOfExp(exp) === year);
            if (!yearExperiences.length) return null;
            return (
              <div key={year} id={`year-${year}`} style={{ marginBottom: 32 }}>
                <YearPill>{year}</YearPill>
                {yearExperiences.map((exp, index) => (
                  <div key={`${year}-${index}`} style={{ position: "relative" }}>
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
                                  <Tag key={tIdx} variant={tag.toLowerCase() as any}>
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
              </div>
            );
          })}
        </Timeline>
      </SectionContainer>
    </Section>
  );
};

export default Experience;
