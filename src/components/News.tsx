import React from "react";
import styled from "styled-components";

type NewsCategory = "Awards" | "Publications" | "Experience" | "Teaching" | "Education" | "Travel";

interface NewsItem {
  title: string;
  month: string;
  year: string;
  category: NewsCategory;
}

const newsItems: NewsItem[] = [
  { title: "Best Paper Honorable Mention at CHI", month: "Apr", year: "2025", category: "Publications" },
  { title: "Outstanding Teaching Assistant Award (CS 225)", month: "May", year: "2025", category: "Teaching" },
  { title: "Campus Excellence Scholarship renewed", month: "Jun", year: "2025", category: "Awards" },
  { title: "HCI Research Intern @ KIXLAB", month: "Jun", year: "2025", category: "Experience" },
  { title: "Kyoto travel journal published", month: "Jul", year: "2025", category: "Travel" },
];

const StripSection = styled.section`
  padding: 100px 0 8px;
  background: transparent;
`;

const StripContainer = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const StripHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 800;
  letter-spacing: 0.01em;
`;

const Reel = styled.div`
  display: flex;
  gap: 14px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 999px;
  }
`;

const Card = styled.div`
  min-width: 250px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.12);
  }
`;

const MetaRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
`;

const DateText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.01em;
  font-size: 0.85rem;
`;

const CategoryPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(0, 70, 42, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  letter-spacing: 0.02em;
  font-size: 0.95rem;
`;

const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 800;
  line-height: 1.5;
  font-size: 1.05rem;
`;

const News: React.FC = () => {
  return (
    <StripSection>
      <StripContainer>
        <StripHeading>News</StripHeading>
        <Reel>
          {newsItems.map((item, idx) => (
            <Card key={`${item.title}-${idx}`}>
              <DateText>
                  {item.month} {item.year}
                </DateText>
              <Title>{item.title}</Title>
              <MetaRow>
                <CategoryPill>{item.category}</CategoryPill>
              </MetaRow>
              
            </Card>
          ))}
        </Reel>
      </StripContainer>
    </StripSection>
  );
};

export default News;
