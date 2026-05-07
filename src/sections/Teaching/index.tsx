import React from "react";
import styled from "styled-components";
import { Section, SectionContainer } from "../Experience/Experience.styles";
import { teachingItems } from "./Teaching.data";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const extractCourseCode = (title: string) => {
  const m = title.match(/CS\s+\d+[A-Z]*/);
  return m ? m[0] : null;
};

const extractRole = (title: string) => {
  const parts = title.split("—");
  return parts[0].trim();
};

const extractCourseName = (title: string) => {
  const parts = title.split(/—|:/);
  if (parts.length >= 3) return parts.slice(2).join(":").trim();
  if (parts.length === 2) return parts[1].trim();
  return title;
};

const CAT_COLORS: Record<string, { accent: string; tint: string; label: string }> = {
  courses:   { accent: "#2563EB", tint: "rgba(37,99,235,0.07)",  label: "Course"    },
  mentoring: { accent: "#0D9488", tint: "rgba(13,148,136,0.07)", label: "Mentoring" },
  clubs:     { accent: "#7C3AED", tint: "rgba(124,58,237,0.07)", label: "Service"   },
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

// ─── Filter row ───────────────────────────────────────────────────────────────

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

const FilterPill = styled.button<{ $active: boolean; $color: string }>`
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

// ─── Card grid ────────────────────────────────────────────────────────────────

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px)  { grid-template-columns: 1fr; }
`;

const Card = styled.article<{ $accent: string }>`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.10);
  }
`;

const CardAccentBar = styled.div<{ $accent: string; $tint: string }>`
  background: ${({ $tint }) => $tint};
  border-bottom: 1px solid ${({ $accent }) => $accent}30;
  padding: 18px 20px 14px;
  position: relative;
`;

const CourseCode = styled.div<{ $accent: string }>`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: ${({ $accent }) => $accent};
  line-height: 1;
  margin-bottom: 2px;
  opacity: 0.85;
`;

const CourseCodeAlt = styled.div<{ $accent: string }>`
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${({ $accent }) => $accent};
  line-height: 1;
  margin-bottom: 2px;
  opacity: 0.85;
`;

const CategoryBadge = styled.span<{ $accent: string; $tint: string }>`
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => $accent}55;
  color: ${({ $accent }) => $accent};
  background: #ffffff;
`;

const CardBody = styled.div`
  padding: 16px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const RoleLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const CourseName = styled.h3`
  font-size: 0.93rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.35;
`;

const PeriodChip = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  padding: 3px 9px;
  border-radius: 999px;
  width: fit-content;
`;

const Desc = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 4px 0 0;
  line-height: 1.6;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const Teaching: React.FC = () => {
  return (
    <Section id="teaching">
      <SectionContainer>
        <PageHeader>
          <PageTitle>Teaching</PageTitle>
          <CountBadge>{teachingItems.length} courses</CountBadge>
        </PageHeader>

        <CardGrid>
          {teachingItems.map((item, idx) => {
            const primaryCat = item.categories[0];
            const cfg = CAT_COLORS[primaryCat] ?? CAT_COLORS.courses;
            const code = extractCourseCode(item.title);
            const role = extractRole(item.title);
            const courseName = extractCourseName(item.title);

            return (
              <Card key={`${item.title}-${idx}`} $accent={cfg.accent}>
                <CardAccentBar $accent={cfg.accent} $tint={cfg.tint}>
                  {code
                    ? <CourseCode $accent={cfg.accent}>{code.replace("CS ", "CS\u00A0")}</CourseCode>
                    : <CourseCodeAlt $accent={cfg.accent}>{role.split(" ").slice(0, 2).join(" ")}</CourseCodeAlt>
                  }
                  <CategoryBadge $accent={cfg.accent} $tint={cfg.tint}>{cfg.label}</CategoryBadge>
                </CardAccentBar>

                <CardBody>
                  <RoleLabel>{role}</RoleLabel>
                  <CourseName>{code ? courseName : item.title}</CourseName>
                  <PeriodChip>{item.date}</PeriodChip>
                  {item.org && (
                    <p style={{ fontSize: "0.74rem", color: "#94a3b8", margin: 0 }}>{item.org}</p>
                  )}
                  <Desc>{item.description}</Desc>
                </CardBody>
              </Card>
            );
          })}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
};

export default Teaching;
