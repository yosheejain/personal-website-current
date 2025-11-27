import React, { useMemo, useState } from "react";
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
  YearFilterRow,
  YearFilterPill,
  RoleTitle,
  Description,
  TagsContainer,
  Tag,
  TimelineDotDesktop,
} from "../Experience/Experience.styles";

const categoryOptions: { id: AwardCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "teaching", label: "Teaching" },
  { id: "research", label: "Research" },
  { id: "scholarship", label: "Scholarship" },
  { id: "academic", label: "Academic" },
];

const Awards: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | AwardCategory>("all");
  const [activeYear, setActiveYear] = useState<string>("all");

  const years = useMemo(() => {
    const yearSet = new Set<string>();
    awards.forEach((a) => {
      const y = a.date.split(" ").pop();
      if (y) yearSet.add(y);
    });
    return Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
  }, []);

  const filtered = useMemo(() => {
    return awards.filter((a) => {
      const matchCategory = activeCategory === "all" || a.categories.includes(activeCategory);
      const year = a.date.split(" ").pop();
      const matchYear = activeYear === "all" || year === activeYear;
      return matchCategory && matchYear;
    });
  }, [activeCategory, activeYear]);

  return (
    <Section id="awards">
      <SectionContainer>
        <FilterContainer>
          {categoryOptions.map((opt) => (
            <FilterButton key={opt.id} active={activeCategory === opt.id} onClick={() => setActiveCategory(opt.id as typeof activeCategory)}>
              {opt.label}
            </FilterButton>
          ))}
        </FilterContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <YearFilterRow>
            <YearFilterPill active={activeYear === "all"} onClick={() => setActiveYear("all")}>
              All
            </YearFilterPill>
            {years.map((y) => (
              <YearFilterPill key={y} active={activeYear === y} onClick={() => setActiveYear(y)}>
                {y}
              </YearFilterPill>
            ))}
          </YearFilterRow>
        </div>

        <Timeline>
          {filtered.map((award, idx) => (
            <div key={`${award.title}-${idx}`} style={{ position: "relative" }}>
              <ExperienceItem isLeft>
                <OrgColumn>
                  <OrgLabel>{award.date}</OrgLabel>
                  <OrgDescription>{award.org}</OrgDescription>
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
        </Timeline>
      </SectionContainer>
    </Section>
  );
};

export default Awards;
