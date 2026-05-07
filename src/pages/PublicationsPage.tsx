import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

interface PublicationLink {
  label: string;
  href: string;
}

interface Publication {
  title: string;
  thumb: string;
  thumbImage?: string;
  description: string;
  authors: string;
  venue: string;
  links: PublicationLink[];
  year?: string;
  card?: boolean;
}

const publications: Publication[] = [
  {
    title: "Exploring the Role of Tracing in AI-Supported Planning for Algorithmic Reasoning.",
    thumb: "",
    description: "",
    authors: "Yoshee Jain, Heejin Do, Zihan Wu, April Yi Wang",
    venue: "arXiv Preprint. Submitted Feb 2026.",
    year: "2026",
    links: [{ label: "arXiv", href: "https://arxiv.org" }],
    card: false,
  },
  {
    title: "Uncovering the Internet's Hidden Values: An Empirical Study of Desirable Behavior Using Highly-Upvoted Content on Reddit.",
    thumb: "",
    description: "",
    authors: "Agam Goyal, Charlotte Lambert, Yoshee Jain, Eshwar Chandrasekharan",
    venue: "2026 International AAAI Conference on Web and Social Media (ICWSM). 2026.",
    year: "2026",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2410.13036" }],
    card: false,
  },
  {
    title: "Linguistic Comparison of AI- and Human-Written Responses to Online Mental Health Queries.",
    thumb: "",
    description: "",
    authors: "Koustuv Saha, Yoshee Jain, Munmum De Choudhury",
    venue: "NPJ Artificial Intelligence. 2026.",
    year: "2026",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2504.09271" }],
    card: false,
  },
  {
    title: "PLAID: Supporting Computing Instructors to Identify Domain-Specific Programming Plans at Scale.",
    thumb: "",
    thumbImage: "/img/pubs/plaid.png",
    description:
      "How do instructors identify common patterns in a computing domain? Can we help them by automating information gathering with LLMs? In this work, we interviewed 10 computing educators to understand their challenges in programming plan identification, and designed PLAID for supporting them in information gathering and refinement tasks through design workshops. An user study with 12 participants showed that PLAID helps instructors to identify programming plans faster, with smaller workload, and with more satisfaction.",
    authors: "Yoshee Jain*, Mehmet Arif Demirtas*, Kathryn Cunningham",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI). 2025",
    year: "2025",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3706598.3713832" },
      { label: "Demo", href: "https://tryplaid.web.illinois.edu/" },
      { label: "Video", href: "https://www.youtube.com/watch?v=bMWQWTNqP-A" },
      { label: "GitHub", href: "https://github.com/yosheejain/plaid-interface" },
      { label: "Poster", href: "https://github.com/yosheejain/personal-website-agentic/blob/main/public/CSLS%20SP25%20Poster.pptx%20(2)-1.pdf" },
    ],
    card: true,
  },
  {
    title: "Exploring the Potential of Large Language Models for Estimating the Reading Comprehension Question Difficulty.",
    thumb: "",
    description: "",
    authors: "Yoshee Jain, John Hollander, Amber He, Sunny Tang, Liang Zhang, John Sabatini",
    venue: "International Conference on Human-Computer Interaction (HCII). 2025",
    year: "2025",
    links: [{ label: "Paper", href: "https://link.springer.com/chapter/10.1007/978-3-031-92967-0_14" }],
    card: false,
  },
  {
    title: "Online Communities as a Support System for Alzheimer's and Dementia Care: Large-scale Exploratory Study.",
    thumb: "",
    description: "",
    authors: "Sidharth Kaliappan, Chunyu Liu, Yoshee Jain, Ravi Karkar, Koustuv Saha",
    venue: "JMIR Aging. 2025",
    year: "2025",
    links: [{ label: "Paper", href: "https://aging.jmir.org/2025/1/e68890" }],
    card: false,
  },
  {
    title: "AI vs Humans for Online Support: Comparing the Language of Responses from LLMs and Online Communities of Alzheimer's Disease.",
    thumb: "",
    thumbImage: "/img/pubs/tochi.png",
    description:
      "AI can provide emotional and informational support like OCs, but they do not engage in deeper conversations, provide references, and share personal experiences. AI responses tend to be more verbose, readable, and complex. AI responses exhibited greater empathy, but more formal and analytical language, lacking personal narratives and linguistic diversity.",
    authors: "Koustuv Saha, Yoshee Jain, Chunyu Liu, Sidharth Kaliappan, Ravi Karkar",
    venue: "ACM Transactions on Computing for Healthcare. 2025",
    year: "2025",
    links: [{ label: "DOI", href: "https://dl.acm.org/doi/abs/10.1145/3709366" }],
    card: true,
  },
  {
    title: "Voices Lost in the Algorithm: Improving Instagram's Moderation of Mental Health Communities.",
    thumb: "",
    description: "",
    authors: "Eunice Mok*, Yoshee Jain*, Sriya Gottiparthi*, Eshwar Chandrasekharan",
    venue: "2025 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW). 2025.",
    year: "2025",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/abs/10.1145/3715070.3749259" },
      { label: "Poster", href: "https://github.com/yosheejain/personal-website-agentic/blob/main/public/SCUBA%20Research%20Poster%20STARS%2025-2.pdf" },
    ],
    card: false,
  },
  {
    title: "Investigating How Gilds Were Employed On Reddit.",
    thumb: "",
    description: "",
    authors: "Charlotte Lambert, Yoshee Jain, Koustuv Saha, Eshwar Chandrasekharan",
    venue: "2024 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW). 2024",
    year: "2024",
    links: [{ label: "DOI", href: "https://dl.acm.org/doi/pdf/10.1145/3678884.3681916" }],
    card: false,
  },
  {
    title: "Towards Methods for Identifying High-Quality Domain-Specific Programming Patterns.",
    thumb: "",
    description: "",
    authors: "Yoshee Jain, Kathryn Cunningham",
    venue: "ACM International Computing Education Research Conference V.2 (ICER). 2023",
    year: "2023",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/abs/10.1145/3568812.3603478" },
      { label: "Poster", href: "https://github.com/yosheejain/personal-website-agentic/blob/main/public/ICER%20SU23%20Poster.pptx%20(1)-1.pdf" },
    ],
    card: false,
  },
];

const CURRENT_YEAR = new Date().getFullYear();

// ─── Styled Components ──────────────────────────────────────────────────────

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

// Dark slate heading pill — green is reserved for active filters
const SectionPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 999px;
  background: #1e293b;
  color: #f8fafc;
  font-weight: 800;
  letter-spacing: 0.015em;
  font-size: 15px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
`;

const YearRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: -2px;
`;

// Inactive: white bg, green hover. Active: brand green.
const YearPill = styled.button<{ active?: boolean }>`
  border: 1px solid
    ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.borderColor)};
  cursor: pointer;
  padding: 7px 14px;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.01em;
  font-size: 13.5px;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "#ffffff"};
  color: ${({ active, theme }) =>
    active ? theme.colors.backgroundWhite : "#64748b"};
  box-shadow: ${({ active, theme }) =>
    active ? `0 4px 14px ${theme.colors.pageAccentShadow}` : "0 1px 3px rgba(0,0,0,0.06)"};
  transition: all 0.18s ease;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.primaryHover : theme.colors.pageAccentTint};
    color: ${({ active, theme }) =>
      active ? theme.colors.backgroundWhite : theme.colors.primary};
    transform: translateY(-1px);
    border-color: ${({ active, theme }) => (active ? theme.colors.primaryHover : theme.colors.pageAccentBorder)};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  column-gap: 20px;
  row-gap: 28px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

// Card uses a warm-white base + slate accent strip instead of all-green
const Card = styled.article`
  background: #fefefe;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e293b 0%, #475569 60%, ${({ theme }) => theme.colors.primary} 100%);
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09), 0 16px 40px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e1;
  }

  .card-body::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Thumb = styled.div`
  float: left;
  max-width: 240px;
  width: auto;
  border-radius: 10px;
  display: inline-block;
  margin-right: 18px;
  margin-bottom: 14px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 720px) {
    float: none;
    max-width: 100%;
    margin-right: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const PubTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;
  line-height: 1.45;
`;

const Desc = styled.p`
  margin: 0 0 14px;
  color: #475569;
  line-height: 1.65;
  font-size: 14.5px;
`;

const Authors = styled.p`
  margin: 0 0 6px;
  font-style: italic;
  font-size: 14px;
  color: #334155;
`;

const Venue = styled.span`
  display: inline-block;
  margin: 0 0 14px;
  font-weight: 700;
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 13px;
  border-radius: 999px;
  background: #ffffff;
  color: #475569;
  font-weight: 600;
  text-decoration: none;
  font-size: 12.5px;
  border: 1px solid #e2e8f0;
  transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease, border-color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.pageAccentTint};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.pageAccentBorder};
  }
`;

// ─── Cite list ──────────────────────────────────────────────────────────────

const CiteList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CiteItem = styled.li`
  background: #fefefe;
  border: 1px solid #e2e8f0;
  border-left: 3px solid ${({ theme }) => theme.colors.pageAccentBorder};
  border-radius: 0 12px 12px 0;
  padding: 15px 18px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.18s ease, transform 0.18s ease, border-left-color 0.18s ease;

  &:hover {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transform: translateX(2px);
    border-left-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CiteTitle = styled.div`
  font-weight: 700;
  font-size: 14.5px;
  color: #0f172a;
  margin-bottom: 5px;
  line-height: 1.45;
`;

const CiteAuthors = styled.div`
  font-style: italic;
  font-size: 13.5px;
  color: #475569;
  margin-bottom: 4px;
`;

const NameHighlight = styled.span`
  background: #fde8c8;
  padding: 1px 6px;
  border-radius: 5px;
  font-weight: 800;
  font-style: normal;
  color: #7c3a00;
`;

const CiteVenue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 4px;
`;

const CiteLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const CiteLinkTag = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 4px 11px;
  border-radius: 999px;
  background: #ffffff;
  color: #64748b;
  font-weight: 600;
  text-decoration: none;
  font-size: 12px;
  border: 1px solid #e2e8f0;
  transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease, border-color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.pageAccentTint};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.pageAccentBorder};
  }
`;

// ─── Empty state ─────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const EmptyStateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 48px 24px;
  background: #fafaf8;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  animation: ${fadeIn} 0.3s ease both;
`;

const EmptyEmoji = styled.span`
  font-size: 2rem;
`;

const EmptyText = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-style: italic;
  text-align: center;
  line-height: 1.5;
`;

// ─── Component ───────────────────────────────────────────────────────────────

const PublicationsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  const highlightName = (text: string) => {
    const regex = /Yoshee Jain/gi;
    const parts = text.split(regex);
    const matches = text.match(regex) || [];
    return parts.flatMap((part, idx) => {
      const items = [<React.Fragment key={`part-${idx}`}>{part}</React.Fragment>];
      if (idx < matches.length) {
        items.push(<NameHighlight key={`hl-${idx}`}>{matches[idx]}</NameHighlight>);
      }
      return items;
    });
  };

  const getEmptyMessage = (year: string): { emoji: string; text: string } => {
    const y = Number(year);
    if (year === "all") return { emoji: "🔍", text: "Nothing here yet." };
    if (y >= CURRENT_YEAR) {
      return { emoji: "🌿", text: "Yoshee is working hard on her current projects!" };
    }
    return { emoji: "🌱", text: "Yoshee was still learning about research this year." };
  };

  const years = useMemo(() => {
    const collected = publications.map((p) => p.year).filter(Boolean) as string[];
    const unique = Array.from(new Set(collected));
    unique.sort((a, b) => Number(b) - Number(a));
    return unique;
  }, []);

  const filteredHighlights = useMemo(() => {
    if (selectedYear === "all") return publications.filter((p) => p.card !== false);
    return publications.filter((p) => p.year === selectedYear && p.card !== false);
  }, [selectedYear]);

  const filteredAll = useMemo(() => {
    if (selectedYear === "all") return publications;
    return publications.filter((p) => p.year === selectedYear);
  }, [selectedYear]);

  const emptyMsg = getEmptyMessage(selectedYear);

  return (
    <Wrapper>
      {/* Highlights heading + shared year filter on same row */}
      <HeadingRow>
        <SectionPill>Highlights</SectionPill>
        <YearRow>
          <YearPill active={selectedYear === "all"} onClick={() => setSelectedYear("all")}>
            All
          </YearPill>
          {years.map((y) => (
            <YearPill key={y} active={selectedYear === y} onClick={() => setSelectedYear(y)}>
              {y}
            </YearPill>
          ))}
        </YearRow>
      </HeadingRow>

      {filteredHighlights.length === 0 ? (
        <EmptyStateBox>
          <EmptyEmoji>{emptyMsg.emoji}</EmptyEmoji>
          <EmptyText>{emptyMsg.text}</EmptyText>
        </EmptyStateBox>
      ) : (
        <Grid>
          {filteredHighlights.map((pub) => (
            <Card key={pub.title}>
              <div className="card-body">
                <Thumb>
                  {pub.thumbImage ? <img src={pub.thumbImage} alt={pub.title} /> : pub.thumb}
                </Thumb>
                <PubTitle>{pub.title}</PubTitle>
                <Desc>{pub.description}</Desc>
                <Authors>{highlightName(pub.authors)}</Authors>
                <Venue>{pub.venue}</Venue>
                <Links>
                  {pub.links.map((link) => (
                    <Tag key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </Tag>
                  ))}
                </Links>
              </div>
            </Card>
          ))}
        </Grid>
      )}

      {/* All publications section */}
      <HeadingRow>
        <SectionPill>All Publications</SectionPill>
      </HeadingRow>

      {filteredAll.length === 0 ? (
        <EmptyStateBox>
          <EmptyEmoji>{emptyMsg.emoji}</EmptyEmoji>
          <EmptyText>{emptyMsg.text}</EmptyText>
        </EmptyStateBox>
      ) : (
        <CiteList>
          {filteredAll.map((pub) => (
            <CiteItem key={`cite-${pub.title}`}>
              <CiteTitle>{pub.title}</CiteTitle>
              <CiteAuthors>{highlightName(pub.authors)}</CiteAuthors>
              <CiteVenue>{pub.venue}</CiteVenue>
              <CiteLinks>
                {pub.links.map((link) => (
                  <CiteLinkTag key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </CiteLinkTag>
                ))}
              </CiteLinks>
            </CiteItem>
          ))}
        </CiteList>
      )}
    </Wrapper>
  );
};

export default PublicationsPage;
