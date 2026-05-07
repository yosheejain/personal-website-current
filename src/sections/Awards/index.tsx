import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { awards, AwardCategory } from "./Awards.data";
import { Section, SectionContainer } from "../Experience/Experience.styles";

// ─── Category color map ───────────────────────────────────────────────────────

const CAT_COLORS: Record<AwardCategory, { accent: string; tint: string; label: string }> = {
  teaching:    { accent: "#7C3AED", tint: "rgba(124,58,237,0.07)",  label: "Teaching"    },
  research:    { accent: "#0D9488", tint: "rgba(13,148,136,0.07)",  label: "Research"    },
  scholarship: { accent: "#D97706", tint: "rgba(217,119,6,0.07)",   label: "Scholarship" },
  academic:    { accent: "#2563EB", tint: "rgba(37,99,235,0.07)",   label: "Academic"    },
};

// ─── Page header ─────────────────────────────────────────────────────────────

const PageHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const PageTitle = styled.h1`
  font-size: 1.85rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.03em;
  margin: 0;
`;

const CountBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.pageAccentTint};
  border: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
  padding: 4px 12px;
  border-radius: 999px;
`;

// ─── Filter pills ─────────────────────────────────────────────────────────────

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
`;

const FilterPill = styled.button<{ $active: boolean; $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 15px;
  border-radius: 999px;
  border: 1px solid ${({ $active, $color }) => ($active ? $color : "#e2e8f0")};
  background: ${({ $active, $color }) => ($active ? $color : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#64748b")};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    border-color: ${({ $color }) => $color};
    background: ${({ $active, $color }) => ($active ? $color : `${$color}18`)};
    color: ${({ $active, $color }) => ($active ? "#ffffff" : $color)};
    transform: translateY(-1px);
  }
`;

const CatDot = styled.span<{ $color: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

// ─── Year band ────────────────────────────────────────────────────────────────

const YearBand = styled.div`
  position: relative;
  margin-bottom: 44px;

  &:last-child { margin-bottom: 0; }
`;

const YearRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const YearNumber = styled.span`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.13;
  user-select: none;
  flex-shrink: 0;
`;

const YearDivider = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.borderColor};
`;

// ─── Award grid ───────────────────────────────────────────────────────────────

const AwardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const AwardCard = styled.div<{ $accent: string; $tint: string }>`
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-left: 3px solid ${({ $accent }) => $accent};
  border-radius: 0 14px 14px 0;
  padding: 15px 18px;
  transition: transform 0.16s ease, box-shadow 0.16s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateX(3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    background: ${({ $tint }) => $tint};
  }
`;

const AwardTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 5px;
`;

const AwardTitle = styled.h3`
  font-size: 0.88rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.4;
`;

const CatBadge = styled.span<{ $color: string; $tint: string }>`
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 999px;
  background: ${({ $tint }) => $tint};
  color: ${({ $color }) => $color};
  white-space: nowrap;
  flex-shrink: 0;
`;

const AwardOrg = styled.p`
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 5px;
`;

const AwardDesc = styled.p`
  font-size: 0.76rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.5;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const allCategories: Array<AwardCategory | "all"> = ["all", "research", "scholarship", "academic", "teaching"];

const Awards: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AwardCategory | "all">("all");

  const years = useMemo(() => {
    const s = new Set<string>();
    awards.forEach(a => { const y = a.date.split(" ").pop(); if (y) s.add(y); });
    return Array.from(s).sort((a, b) => Number(b) - Number(a));
  }, []);

  const filtered = useMemo(() =>
    awards.filter(a => activeCategory === "all" || a.categories.includes(activeCategory)),
  [activeCategory]);

  return (
    <Section id="awards">
      <SectionContainer>
        <PageHeader>
          <PageTitle>Honors &amp; Awards</PageTitle>
          <CountBadge>{awards.length} recognitions</CountBadge>
        </PageHeader>

        <FilterRow>
          {allCategories.map(cat => {
            const cfg = cat === "all" ? { accent: "#64748b", tint: "rgba(100,116,139,0.07)", label: "All" } : CAT_COLORS[cat];
            return (
              <FilterPill
                key={cat}
                $active={activeCategory === cat}
                $color={cfg.accent}
                onClick={() => setActiveCategory(cat as typeof activeCategory)}
              >
                {cat !== "all" && <CatDot $color={cfg.accent} />}
                {cfg.label}
              </FilterPill>
            );
          })}
        </FilterRow>

        {years.map(year => {
          const yearItems = filtered.filter(a => a.date.split(" ").pop() === year);
          if (!yearItems.length) return null;
          return (
            <YearBand key={year}>
              <YearRow>
                <YearNumber>{year}</YearNumber>
                <YearDivider />
              </YearRow>
              <AwardGrid>
                {yearItems.map((award, idx) => {
                  const primaryCat = award.categories[0];
                  const cfg = CAT_COLORS[primaryCat];
                  return (
                    <AwardCard key={`${award.title}-${idx}`} $accent={cfg.accent} $tint={cfg.tint}>
                      <AwardTopRow>
                        <AwardTitle>{award.title}</AwardTitle>
                        <CatBadge $color={cfg.accent} $tint={cfg.tint}>{cfg.label}</CatBadge>
                      </AwardTopRow>
                      <AwardOrg>{award.org}</AwardOrg>
                      <AwardDesc>{award.description}</AwardDesc>
                    </AwardCard>
                  );
                })}
              </AwardGrid>
            </YearBand>
          );
        })}
      </SectionContainer>
    </Section>
  );
};

export default Awards;
