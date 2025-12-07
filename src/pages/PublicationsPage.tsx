import React, { useMemo, useState } from "react";
import styled from "styled-components";

interface PublicationLink {
  label: string;
  href: string;
}

interface Publication {
  title: string;
  thumb: string;
  thumbImage?: string; // optional image for highlight card
  description: string;
  authors: string;
  venue: string;
  links: PublicationLink[];
  year?: string;
  card?: boolean; // whether to show this in the highlight cards
}

const publications: Publication[] = [
  {
    title: "Linguistic Comparison of AI- and Human-Written Responses to Online Mental Health Queries.",
    thumb: "",
    description: "",
    authors: "Koustuv Saha, Yoshee Jain, Munmum De Choudhury",
    venue: "Nature: Artificial Intelligence. Under Review. 2025",
    year: "2025",
    links: [
      { label: "arXiv", href: "https://arxiv.org/pdf/2504.09271" },
    ],
    card: false,
  },
  {
    title: "Uncovering the Internet’s Hidden Values: An Empirical Study of Desirable Behavior Using Highly-Upvoted Content on Reddit.",
    thumb: "",
    description: "",
    authors: "Agam Goyal, Charlotte Lambert, Yoshee Jain, Eshwar Chandrasekharan",
    venue: "International AAAI Conference on Web and Social Media (ICWSM). 2026",
    year: "2026",
    links: [
      { label: "arXiv", href: "https://arxiv.org/pdf/2410.13036" },
    ],
    card: false,
  },
  
  {
    title: "PLAID: Supporting Computing Instructors to Identify Domain-Specific Programming Plans at Scale.",
    thumb: "",
    thumbImage: "/img/pubs/plaid.png",
    description: "How do instructors identify common patterns in a computing domain? Can we help them by automating information gathering with LLMs? In this work, we interviewed 10 computing educators to understand their challenges in programming plan identification, and designed PLAID for supporting them in information gathering and refinement tasks through design workshops. An user study with 12 participants showed that PLAID helps instructors to identify programming plans faster, with smaller workload, and with more satisfaction.",
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
    links: [
      { label: "Paper", href: "https://link.springer.com/chapter/10.1007/978-3-031-92967-0_14" },
    ],
    card: false,
  },
  {
    title: "Online Communities as a Support System for Alzheimer’s and Dementia Care: Large-scale Exploratory Study.",
    thumb: "",
    description: "",
    authors: "Sidharth Kaliappan, Chunyu Liu, Yoshee Jain, Ravi Karkar, Koustuv Saha",
    venue: "JMIR Aging. 2025",
    year: "2025",
    links: [
      { label: "Paper", href: "https://aging.jmir.org/2025/1/e68890" },
    ],
    card: false,
  },
  {
    title: "AI vs Humans for Online Support: Comparing the Language of Responses from LLMs and Online Communities of Alzheimer’s Disease.",
    thumb: "",
    thumbImage: "/img/pubs/tochi.png",
    description: "AI can provide emotional and informational support like OCs, but they do not engage in deeper conversations, provide references, and share personal experiences. AI responses tend to be more verbose, readable, and complex. AI responses exhibited greater empathy, but more formal and analytical language, lacking personal narratives and linguistic diversity.",
    authors: "Koustuv Saha, Yoshee Jain, Chunyu Liu, Sidharth Kaliappan, Ravi Karkar",
    venue: "ACM Transactions on Computing for Healthcare. 2025",
    year: "2025",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/abs/10.1145/3709366" },
    ],
    card: true,
  },
  {
    title: "Examining the Efficacy of Hashtag-Based Bans on Instagram.",
    thumb: "",
    description: "",
    authors: "Eunice Mok*, Yoshee Jain*, Sriya Gottiparthi*, Eshwar Chandrasekharan",
    venue: "2025 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW). 2025",
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
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/pdf/10.1145/3678884.3681916" },
    ],
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
  }
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
  max-width: 260px;
  width: auto;
  border-radius: 12px;
  display: inline-block;
  text-align: center;
  padding: 0;
  margin-right: 18px;
  margin-bottom: 14px;
  overflow: hidden;

  @media (max-width: 720px) {
    float: none;
    width: auto;
    max-width: 100%;
    margin-right: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
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

const NameHighlight = styled.span`
  background: #ffd9a8;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 800;
  color: #8a3a00;
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

  const highlightName = (text: string) => {
    const regex = /Yoshee Jain/gi;
    const parts = text.split(regex);
    const matches = text.match(regex) || [];

    return parts.flatMap((part, idx) => {
      const items = [<React.Fragment key={`part-${idx}`}>{part}</React.Fragment>];
      if (idx < matches.length) {
        items.push(
          <NameHighlight key={`hl-${idx}`}>{matches[idx]}</NameHighlight>
        );
      }
      return items;
    });
  };

  const years = useMemo(() => {
    const collected = publications.map((p) => p.year).filter(Boolean) as string[];
    const unique = Array.from(new Set(collected));
    unique.sort((a, b) => Number(b) - Number(a));
    return unique;
  }, []);

  const filteredHighlights = useMemo(() => {
    if (highlightYear === "all") return publications.filter((p) => p.card !== false);
    return publications.filter((p) => p.year === highlightYear && p.card !== false);
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
              <Thumb>
                {pub.thumbImage ? <img src={pub.thumbImage} alt={pub.title} /> : pub.thumb}
              </Thumb>
              <Title>{pub.title}</Title>
              <Desc>{pub.description}</Desc>
              <Authors>{highlightName(pub.authors)}</Authors>
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
            <CiteAuthors>{highlightName(pub.authors)}</CiteAuthors>
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
