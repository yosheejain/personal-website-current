import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Section, FiltersBar, FilterContainer, FilterButton, SectionContainer } from "./Experience.styles";
import { experiences } from "./Experience.data";

const isCurrent = (duration = "") => duration.includes("Present");

const yearRange = (duration: string) => {
  const years = duration.match(/\b20\d{2}\b/g);
  if (!years) return duration;
  return years.length === 1 ? years[0] : `${years[0]}–${years[years.length - 1]}`;
};

// ─── Pulse animation for active dot ─────────────────────────────────────────

const pulseRing = keyframes`
  0%   { transform: scale(1);   opacity: 0.8; }
  60%  { transform: scale(1.9); opacity: 0;   }
  100% { transform: scale(1.9); opacity: 0;   }
`;

// ─── Page header ─────────────────────────────────────────────────────────────

const PageHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 32px;
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

// ─── Section dividers ─────────────────────────────────────────────────────────

const GroupLabel = styled.div`
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 14px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:first-of-type { margin-top: 0; }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderColor};
  }
`;

// ─── Grids ───────────────────────────────────────────────────────────────────

const ActiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const PastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 580px)  { grid-template-columns: 1fr; }
`;

// ─── Cards ────────────────────────────────────────────────────────────────────

const Card = styled.article<{ $active?: boolean }>`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: ${({ $active }) => ($active ? "26px 28px" : "20px 22px")};
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 6px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.pageAccentBorder});
    border-radius: 18px 18px 0 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.09);
  }
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

const OrgName = styled.h3<{ $large?: boolean }>`
  font-size: ${({ $large }) => ($large ? "1.08rem" : "0.92rem")};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

const RoleTitle = styled.p`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const SupervisorLine = styled.p`
  font-size: 0.79rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  line-height: 1.45;
`;

const InstitutionLine = styled.p`
  font-size: 0.74rem;
  color: #94a3b8;
  margin: 0;
`;

const PeriodChip = styled.span<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.pageAccentTint)};
  color: ${({ $active, theme }) => ($active ? "#ffffff" : theme.colors.primary)};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.pageAccentBorder)};
`;

const PulseWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    animation: ${pulseRing} 1.8s ease-out infinite;
  }
`;

const ActiveDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffffff;
  flex-shrink: 0;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 6px;
`;

const AreaTag = styled.span`
  font-size: 0.67rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  padding: 2px 8px;
  border-radius: 6px;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "cse" | "edu">("all");

  const filtered = useMemo(() =>
    experiences.filter(exp => {
      if (activeFilter === "all") return true;
      return exp.tags?.includes(activeFilter.toUpperCase());
    }),
  [activeFilter]);

  const active = filtered.filter(e => isCurrent(e.roles[0]?.duration));
  const past   = filtered.filter(e => !isCurrent(e.roles[0]?.duration));

  const renderCard = (exp: typeof experiences[0], isActiveProp: boolean) => {
    const areas = (exp.roles[0]?.description || "").split(",").map(s => s.trim()).filter(Boolean);
    const parts = (exp.orgDescription || "").split("[[BR_768]]").map(s => s.trim());
    const supervisor   = parts[0] || "";
    const institution  = parts[1] || "";
    const duration     = exp.roles[0]?.duration || "";

    return (
      <Card key={exp.organization} $active={isActiveProp}>
        <CardTopRow>
          <OrgName $large={isActiveProp}>{exp.organization}</OrgName>
          <PeriodChip $active={isActiveProp}>
            {isActiveProp
              ? (<><PulseWrapper><ActiveDot /></PulseWrapper> Active</>)
              : yearRange(duration)}
          </PeriodChip>
        </CardTopRow>

        <RoleTitle>{exp.roles[0]?.title}</RoleTitle>
        {supervisor   && <SupervisorLine>{supervisor}</SupervisorLine>}
        {institution  && <InstitutionLine>{institution}</InstitutionLine>}
        {!isActiveProp && <InstitutionLine>{duration}</InstitutionLine>}
        {isActiveProp  && <InstitutionLine>{duration}</InstitutionLine>}

        <TagsRow>
          {areas.map(area => <AreaTag key={area}>{area}</AreaTag>)}
        </TagsRow>
      </Card>
    );
  };

  return (
    <Section id="experience">
      <SectionContainer>
        <PageHeader>
          <PageTitle>Research Experience</PageTitle>
          <CountBadge>{experiences.length} positions</CountBadge>
        </PageHeader>

        <FiltersBar style={{ marginBottom: 28 }}>
          <FilterContainer>
            <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>All</FilterButton>
            <FilterButton active={activeFilter === "cse"} onClick={() => setActiveFilter("cse")}>CS &amp; HCI</FilterButton>
            <FilterButton active={activeFilter === "edu"} onClick={() => setActiveFilter("edu")}>Education</FilterButton>
          </FilterContainer>
        </FiltersBar>

        {active.length > 0 && (
          <>
            <GroupLabel>Currently Active</GroupLabel>
            <ActiveGrid>{active.map(exp => renderCard(exp, true))}</ActiveGrid>
          </>
        )}

        {past.length > 0 && (
          <>
            <GroupLabel>Past Positions</GroupLabel>
            <PastGrid>{past.map(exp => renderCard(exp, false))}</PastGrid>
          </>
        )}
      </SectionContainer>
    </Section>
  );
};

export default Experience;
