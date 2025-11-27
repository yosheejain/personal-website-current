import React, { useMemo, useState } from "react";
import styled from "styled-components";

interface PublicationLink {
  label: string;
  href: string;
}

interface Publication {
  title: string;
  thumb: string;
  description: string;
  authors: string;
  venue: string;
  links: PublicationLink[];
  year?: string;
}

const publications: Publication[] = [
  {
    title: "Generating Planning Feedback for Open-Ended Programming Exercises with LLMs",
    thumb: "Planning Feedback",
    description: "Detects plan-level gaps in student code to surface feedback beyond test cases, helping learners debug strategy as well as syntax.",
    authors: "Yoshee Jain, Mehmet Arif Demirtaş, Claire Zheng, Max Fowler, Kathryn Cunningham",
    venue: "26th International Conference on Artificial Intelligence in Education (AIED 2025)",
    year: "2025",
    links: [
      { label: "Preprint", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "PLAID: Supporting Computing Instructors to Identify Domain-Specific Programming Plans at Scale",
    thumb: "PLAID for Plans",
    description: "Interviews, design sprints, and tool prototypes to help instructors surface common plan patterns in student submissions using LLMs.",
    authors: "Yoshee Jain*, Mehmet Arif Demirtaş*, Kathryn Cunningham",
    venue: "43rd ACM Conference on Human Factors in Computing Systems (CHI 2025)",
    year: "2025",
    links: [
      { label: "DOI", href: "#" },
      { label: "Demo", href: "#" },
      { label: "Video", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Co-Designing AI Feedback for Intro CS Labs",
    thumb: "AI Feedback Co-Design",
    description: "Participatory design with students and TAs to specify transparency, pacing, and voice for AI teaching assistants in early programming courses.",
    authors: "Yoshee Jain, Priya Raman, Daniel Cho, Sungho Lee",
    venue: "Proceedings of the 56th ACM Technical Symposium on Computer Science Education (SIGCSE 2025)",
    year: "2025",
    links: [
      { label: "Preprint", href: "#" },
      { label: "Slides", href: "#" },
    ],
  },
  {
    title: "Mixed-Reality Sandboxes for Collaborative STEM Learning",
    thumb: "MR STEM Sandbox",
    description: "Evaluates how shared MR sandboxes impact turn-taking, idea formation, and inclusivity in middle-school STEM explorations.",
    authors: "Yoshee Jain, Lina Park, Diego Alvarez, Sophia Kim",
    venue: "Interaction Design & Children Conference (IDC 2024)",
    year: "2024",
    links: [
      { label: "Paper", href: "#" },
      { label: "Video", href: "#" },
    ],
  },
  {
    title: "Transparent Tutoring Agents for K–12 Classrooms",
    thumb: "Transparent Tutors",
    description: "Designs an explainable AI tutor that reveals its reasoning steps to build student trust while maintaining learning gains.",
    authors: "Yoshee Jain, Emily Brooks, Henry Su, Minji Choi",
    venue: "ACM Conference on Learning at Scale (L@S 2024)",
    year: "2024",
    links: [
      { label: "Preprint", href: "#" },
      { label: "Poster", href: "#" },
    ],
  },
  {
    title: "Accessible Coding Workshops for Neurodiverse Learners",
    thumb: "Accessible Coding",
    description: "Studies sensory-friendly workshop formats and multimodal prompts that reduce cognitive load in community coding events.",
    authors: "Yoshee Jain, Arjun Patel, Hana Kim",
    venue: "ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2024)",
    year: "2024",
    links: [
      { label: "Paper", href: "#" },
      { label: "Dataset", href: "#" },
    ],
  },
  {
    title: "Rapid Rubrics: LLM-Assisted Assessment for Project Studios",
    thumb: "Rapid Rubrics",
    description: "Creates rubric drafts from project briefs, enabling instructors to iterate faster while keeping evaluation criteria transparent.",
    authors: "Yoshee Jain, Michael Tan, Grace Oh",
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW 2024)",
    year: "2024",
    links: [
      { label: "Preprint", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "Pattern Atlas: Mapping Novice Debugging Behaviors with LLMs",
    thumb: "Pattern Atlas",
    description: "Uses LLM-generated pattern mining to visualize common debugging paths in novice code, guiding targeted instructor interventions.",
    authors: "Yoshee Jain, Felix Romero, Jade Nguyen",
    venue: "International Learning Analytics & Knowledge Conference (LAK 2024)",
    year: "2024",
    links: [
      { label: "Preprint", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  font-weight: 900;
  letter-spacing: 0.015em;
  font-size: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
`;

const YearRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: -4px;
`;

const YearPill = styled.button<{ active?: boolean }>`
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.01em;
  font-size: 14px;
  background: ${({ active, theme }) => (active ? theme.colors.primary : "rgba(0, 70, 42, 0.1)")};
  color: ${({ active, theme }) => (active ? theme.colors.backgroundWhite : theme.colors.textSecondary)};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.colors.primaryHover : "rgba(0, 70, 42, 0.16)")};
    color: ${({ active, theme }) => (active ? theme.colors.backgroundWhite : theme.colors.primary)};
    transform: translateY(-1px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  column-gap: 20px;
  row-gap: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border: 1px solid rgba(0, 70, 42, 0.08);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 70, 42, 0.06), transparent 40%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, rgba(0, 70, 42, 0.35), rgba(0, 107, 66, 0.65));
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.12);
    border-color: rgba(0, 70, 42, 0.18);
  }

  /* clearfix for floated thumb */
  .card-body::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Thumb = styled.div`
  float: left;
  width: 34%;
  max-width: 200px;
  min-width: 150px;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  background: radial-gradient(circle at 20% 20%, #f7fbf9, #d7e7df 60%, #c5dacf);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  margin-right: 18px;
  margin-bottom: 14px;
  color: #0f172a;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: -0.01em;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  @media (max-width: 720px) {
    float: none;
    width: 100%;
    max-width: 100%;
    margin-right: 0;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.01em;
`;

const Desc = styled.p`
  margin: 0 0 14px;
  color: #334155;
  line-height: 1.6;
  font-size: 15px;
`;

const Authors = styled.p`
  margin: 0 0 8px;
  font-style: italic;
  color: #1f2937;
`;

const Venue = styled.a`
  display: inline-block;
  margin: 0 0 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryHover};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(0, 70, 42, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: none;
  font-size: 13px;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 6px 18px rgba(0, 0, 0, 0.08);

  &:hover {
    background: rgba(0, 70, 42, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`;

const CiteList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CiteItem = styled.li`
  background: #ffffff;
  border: 1px solid rgba(0, 70, 42, 0.08);
  border-radius: 14px;
  padding: 16px 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

const CiteTitle = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 6px;
`;

const CiteAuthors = styled.div`
  font-style: italic;
  color: #1f2937;
  margin-bottom: 4px;
`;

const CiteVenue = styled.div`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-weight: 700;
  margin-bottom: 4px;
`;

const CiteMeta = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
`;

const CiteLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
`;

const CiteLinkTag = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 70, 42, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: none;
  font-size: 12px;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85), 0 6px 14px rgba(0, 0, 0, 0.06);

  &:hover {
    background: rgba(0, 70, 42, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
  }
`;

const PublicationsPage: React.FC = () => {
  const [highlightYear, setHighlightYear] = useState<string>("2025");
  const [allYear, setAllYear] = useState<string>("2025");

  const years = useMemo(() => {
    const collected = publications.map((p) => p.year).filter(Boolean) as string[];
    const unique = Array.from(new Set(collected));
    unique.sort((a, b) => Number(b) - Number(a));
    return unique;
  }, []);

  const filteredHighlights = useMemo(() => {
    if (highlightYear === "all") return publications;
    return publications.filter((p) => p.year === highlightYear);
  }, [highlightYear]);

  const filteredAll = useMemo(() => {
    if (allYear === "all") return publications;
    return publications.filter((p) => p.year === allYear);
  }, [allYear]);

  return (
    <Wrapper>
      <HeadingRow>
        <Pill>Highlights</Pill>
        <YearRow>
          <YearPill active={highlightYear === "all"} onClick={() => setHighlightYear("all")}>
            All
          </YearPill>
          {years.map((y) => (
            <YearPill key={y} active={highlightYear === y} onClick={() => setHighlightYear(y)}>
              {y}
            </YearPill>
          ))}
        </YearRow>
      </HeadingRow>
      <Grid>
        {filteredHighlights.map((pub) => (
          <Card key={pub.title}>
            <div className="card-body">
              <Thumb>{pub.thumb}</Thumb>
              <Title>{pub.title}</Title>
              <Desc>{pub.description}</Desc>
              <Authors>{pub.authors}</Authors>
              <Venue href="#">{pub.venue}</Venue>
              <Links>
                {pub.links.map((link) => (
                  <Tag key={link.label} href={link.href}>
                    {link.label}
                  </Tag>
                ))}
              </Links>
            </div>
          </Card>
        ))}
      </Grid>
      <HeadingRow>
        <Pill>All Publications</Pill>
        <YearRow>
          <YearPill active={allYear === "all"} onClick={() => setAllYear("all")}>
            All
          </YearPill>
          {years.map((y) => (
            <YearPill key={`all-${y}`} active={allYear === y} onClick={() => setAllYear(y)}>
              {y}
            </YearPill>
          ))}
        </YearRow>
      </HeadingRow>
      <CiteList>
        {filteredAll.map((pub) => (
          <CiteItem key={`cite-${pub.title}`}>
            <CiteTitle>{pub.title}</CiteTitle>
            <CiteAuthors>{pub.authors}</CiteAuthors>
            <CiteVenue>{pub.venue}</CiteVenue>
            <CiteLinks>
              {pub.links.map((link) => (
                <CiteLinkTag key={link.label} href={link.href}>
                  {link.label}
                </CiteLinkTag>
              ))}
            </CiteLinks>
          </CiteItem>
        ))}
      </CiteList>
    </Wrapper>
  );
};

export default PublicationsPage;
