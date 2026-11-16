import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Section as EduSection } from "../Education/Education.styles";
import { teachingItems, CourseTag } from "./Teaching.data";
import { SectionTitle } from "../../styles/section";

// Match the Publications section width (PageInner: 1240px, 16px gutters)
const Section = styled(EduSection)`
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const SectionContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const extractCourseCode = (title: string) => {
  const m = title.match(/CS\s+\d+[A-Z]*/);
  return m ? m[0] : null;
};

const extractRole = (title: string) => title.split("—")[0].trim();

const extractCourseName = (title: string) => {
  const parts = title.split(/—|:/);
  if (parts.length >= 3) return parts.slice(2).join(":").trim();
  if (parts.length === 2) return parts[1].trim();
  return title;
};

// ─── Carousel ────────────────────────────────────────────────────────────────

const CarouselWrap = styled.div`
  position: relative;
`;

const Track = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 6px 2px 14px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const Card = styled.article`
  flex: 1 0 260px;
  scroll-snap-align: start;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.pageAccentBorder};
    box-shadow: 0 10px 28px ${({ theme }) => theme.colors.pageAccentShadow};
  }

  @media (max-width: 560px) {
    flex-basis: 78%;
  }
`;

const CardTop = styled.div`
  background: ${({ theme }) => theme.colors.pageAccentTint};
  border-bottom: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
  padding: 18px 20px 14px;
`;

const CourseCode = styled.div`
  font-size: 1.9rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`;

const CardBody = styled.div`
  padding: 14px 20px 18px;
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
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const CourseName = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.35;
`;

const Org = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const PeriodRow = styled.div`
  margin-top: auto;
  padding-top: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const PeriodChip = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.pageAccentTint};
  border: 1px solid ${({ theme }) => theme.colors.pageAccentBorder};
  padding: 3px 10px;
  border-radius: 999px;
  width: fit-content;
`;

const TAG_COLORS: Record<CourseTag, { light: string; dark: string }> = {
  Graduate:      { light: "#6D28D9", dark: "#C4B5FD" },
  Research:      { light: "#0F766E", dark: "#5EEAD4" },
  Undergraduate: { light: "#1D4ED8", dark: "#93C5FD" },
  Introductory:  { light: "#B45309", dark: "#FCD34D" },
  Large:         { light: "#BE185D", dark: "#F9A8D4" },
};

const TagPill = styled.span<{ $tag: CourseTag }>`
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  width: fit-content;
  ${({ $tag, theme }) => {
    const c = theme.mode === "dark" ? TAG_COLORS[$tag].dark : TAG_COLORS[$tag].light;
    return `
      color: ${c};
      background: ${c}14;
      border: 1px solid ${c}40;
    `;
  }}
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
`;

const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, opacity 0.18s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundWhite};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const Teaching: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (276), behavior: "smooth" });
  };

  return (
    <Section id="teaching">
      <SectionContainer>
        <SectionTitle>Teaching</SectionTitle>

        <CarouselWrap>
          <Track ref={trackRef} onScroll={updateArrows}>
            {teachingItems.map((item, idx) => {
              const code = extractCourseCode(item.title);
              const role = extractRole(item.title);
              return (
                <Card key={`${item.title}-${idx}`}>
                  <CardTop>
                    <CourseCode>{code ? code.replace("CS ", "CS ") : role}</CourseCode>
                  </CardTop>
                  <CardBody>
                    <RoleLabel>{role}</RoleLabel>
                    <CourseName>{code ? extractCourseName(item.title) : item.title}</CourseName>
                    {item.org && <Org>{item.org}</Org>}
                    <PeriodRow>
                      {item.date.split(" · ").map((d) => (
                        <PeriodChip key={d}>{d}</PeriodChip>
                      ))}
                    </PeriodRow>
                    {item.tags && item.tags.length > 0 && (
                      <TagRow>
                        {item.tags.map((t) => (
                          <TagPill key={t} $tag={t}>{t}</TagPill>
                        ))}
                      </TagRow>
                    )}
                  </CardBody>
                </Card>
              );
            })}
          </Track>

          {(canPrev || canNext) && (
            <Controls>
              <ArrowButton type="button" aria-label="Previous" onClick={() => scrollBy(-1)} disabled={!canPrev}>
                ‹
              </ArrowButton>
              <ArrowButton type="button" aria-label="Next" onClick={() => scrollBy(1)} disabled={!canNext}>
                ›
              </ArrowButton>
            </Controls>
          )}
        </CarouselWrap>
      </SectionContainer>
    </Section>
  );
};

export default Teaching;
