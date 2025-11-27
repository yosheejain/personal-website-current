import React, { useMemo, useState, useEffect } from "react";
import { awards, AwardCategory } from "./Awards.data";
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
  FilterContainer,
  FilterButton,
  YearPill,
  RoleTitle,
  Description,
  TagsContainer,
  Tag,
  TimelineDotDesktop,
} from "../Experience/Experience.styles";
import SectionDots from "../../components/SectionDots";

const categoryOptions: { id: AwardCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "teaching", label: "Teaching" },
  { id: "research", label: "Research" },
  { id: "scholarship", label: "Scholarship" },
  { id: "academic", label: "Academic" },
];

const Awards: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | AwardCategory>("all");
  const [activeYearId, setActiveYearId] = useState<string>("");

  const years = useMemo(() => {
    const yearSet = new Set<string>();
    awards.forEach((a) => {
      const y = a.date.split(" ").pop();
      if (y) yearSet.add(y);
    });
    return Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
  }, []);

  useEffect(() => {
    if (years.length) setActiveYearId(`year-${years[0]}`);
  }, [years]);

  const filtered = useMemo(() => {
    return awards.filter((a) => {
      const matchCategory = activeCategory === "all" || a.categories.includes(activeCategory);
      return matchCategory;
    });
  }, [activeCategory]);

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
    <Section id="awards">
      <SectionDots sections={years.map((y) => ({ id: `year-${y}`, label: y }))} activeSection={activeYearId} onSectionChange={handleYearChange} />
      <SectionContainer>
        <FilterContainer>
          {categoryOptions.map((opt) => (
            <FilterButton key={opt.id} active={activeCategory === opt.id} onClick={() => setActiveCategory(opt.id as typeof activeCategory)}>
              {opt.label}
            </FilterButton>
          ))}
        </FilterContainer>
        <Timeline>
          {years.map((year) => {
            const yearAwards = filtered.filter((a) => a.date.endsWith(year));
            if (!yearAwards.length) return null;
            return (
              <div key={year} id={`year-${year}`} style={{ marginBottom: 32 }}>
                <YearPill>{year}</YearPill>
                {yearAwards.map((award, idx) => (
                  <div key={`${award.title}-${idx}`} style={{ position: "relative" }}>
                    <ExperienceItem isLeft>
                      <OrgColumn>
                        <OrgLabel>{award.org}</OrgLabel>
                        <OrgDescription>{award.date}</OrgDescription>
                        <TimelineDot />
                      </OrgColumn>
                      <ExperienceContent isLeft>
                        <TagsContainer>
                          {award.categories.map((cat) => (
                            <Tag key={cat} variant={cat}>
                              {cat.toUpperCase()}
                            </Tag>
                          ))}
                        </TagsContainer>
                        <RoleTitle>{award.title}</RoleTitle>
                        <Description>{award.description}</Description>
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

export default Awards;
