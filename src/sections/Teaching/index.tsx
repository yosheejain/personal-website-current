import React, { useMemo, useEffect, useState } from "react";
import SectionDots from "../../components/SectionDots";
import {
  Section,
  SectionContainer,
  Timeline,
  ExperienceItem,
  OrgColumn,
  OrgLabel,
  OrgDescription,
  TimelineDot,
  ExperienceContent,
  RoleTitle,
  Description,
  TimelineDotDesktop,
  YearPill,
  FiltersBar,
  FilterContainer,
  FilterButton,
  TagsContainer,
  Tag,
} from "../Experience/Experience.styles";
import { teachingItems } from "./Teaching.data";

const Teaching: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "courses" | "mentoring" | "clubs">("all");
  const years = useMemo(() => {
    const yearSet = new Set<string>();
    teachingItems.forEach((t) => {
      const y = t.date.split(" ").pop();
      if (y) yearSet.add(y);
    });
    return Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
  }, []);

  const [activeYearId, setActiveYearId] = useState<string>("");

  useEffect(() => {
    if (years.length) setActiveYearId(`year-${years[0]}`);
  }, [years]);

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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="teaching">
      <SectionDots sections={years.map((y) => ({ id: `year-${y}`, label: y }))} activeSection={activeYearId} onSectionChange={handleYearChange} />
      <SectionContainer>
        <FiltersBar>
          <FilterContainer>
            <FilterButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
              All
            </FilterButton>
            <FilterButton active={activeCategory === "courses"} onClick={() => setActiveCategory("courses")}>
              Courses
            </FilterButton>
            <FilterButton active={activeCategory === "mentoring"} onClick={() => setActiveCategory("mentoring")}>
              Mentoring
            </FilterButton>
            <FilterButton active={activeCategory === "clubs"} onClick={() => setActiveCategory("clubs")}>
              Clubs
            </FilterButton>
          </FilterContainer>
        </FiltersBar>
        <Timeline>
          {years.map((year) => {
            const items = teachingItems.filter((t) => {
              const inYear = t.date.endsWith(year);
              const inCat = activeCategory === "all" || t.categories.includes(activeCategory);
              return inYear && inCat;
            });
            if (!items.length) return null;
            return (
              <div key={year} id={`year-${year}`} style={{ marginBottom: 32 }}>
                <YearPill>{year}</YearPill>
                {items.map((teach, idx) => (
                  <div key={`${teach.title}-${idx}`} style={{ position: "relative" }}>
                    <ExperienceItem isLeft>
                      <OrgColumn>
                        <OrgLabel>{teach.org}</OrgLabel>
                        <OrgDescription>{teach.date}</OrgDescription>
                        <TimelineDot />
                      </OrgColumn>
                      <ExperienceContent isLeft>
                        <TagsContainer>
                          {teach.categories.map((cat) => (
                            <Tag key={cat} variant={cat}>
                              {cat.toUpperCase()}
                            </Tag>
                          ))}
                        </TagsContainer>
                        <RoleTitle>{teach.title}</RoleTitle>
                        <Description>{teach.description}</Description>
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

export default Teaching;
