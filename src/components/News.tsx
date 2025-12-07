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
  { title: "Outstanding Course Assistant Award (CS 102) 🏅", month: "Nov", year: "2025", category: "Awards" },
  { title: "Traveling to Bergen, Norway to present at CSCW 2025! ✈️", month: "Oct", year: "2025", category: "Travel" },
  { title: "Finalist in the ACM Undergraduate Student Research Competition 🧠", month: "Sep", year: "2025", category: "Awards" },
  { title: "Received the CHP Outstanding Senior Award 🏆", month: "Jun", year: "2025", category: "Awards" },
  { title: "John and Dorothy Durkin Women in Engineering Scholarship 🌟", month: "Jun", year: "2025", category: "Awards" },
  { title: "Illinois Engineering Achievement Scholarship renewed 💰", month: "Jun", year: "2025", category: "Awards" },
  { title: "Instagram's banning analysis poster accepted at CSCW 2025 📄", month: "Jun", year: "2025", category: "Publications" },
  { title: "Traveling to Daejeon, Korea for summer internship! 🇰🇷", month: "Jul", year: "2025", category: "Travel" },
  { title: "Presenting our paper remotely at HCII 2025 🎥", month: "Jun", year: "2025", category: "Publications" },
  { title: "Jeffrey P. Blahut Memorial Scholarship 🎓", month: "May", year: "2025", category: "Awards" },
  { title: "Interning at KIXLAB, KAIST with Dr. Juho Kim 👩🏻‍💻", month: "May", year: "2025", category: "Experience" },
  { title: "Harold and Ruth Hayward/Tau Beta Pi Award Fund 🎖️", month: "May", year: "2025", category: "Awards" },
  { title: "Traveling to Yokohama to present PLAID 🌸", month: "Apr", year: "2025", category: "Travel" },
  { title: "Travel grants from OUR and CHP for PLAID awarded 🎟️", month: "Mar", year: "2025", category: "Awards" },
  { title: "LLMs for reading comprehension paper accepted at HCII 2025 📚", month: "Jan", year: "2025", category: "Publications" },
  { title: "PLAID (first author) accepted at CHI 2025 🎉", month: "Jan", year: "2025", category: "Publications" },
  { title: "First citation on my work at ICER 2023! 🔍", month: "Jan", year: "2025", category: "Publications" },
  { title: "AI vs. Humans for Online Mental Health Support accepted at ACM HEALTH 📝", month: "Dec", year: "2024", category: "Publications" },
  { title: "Illinois Engineering Achievement and Outstanding Scholarships awarded 🎁", month: "May", year: "2024", category: "Awards" },
  { title: "Interning at HCII, CMU with Dr. Jionghao Lin 💪🏻", month: "May", year: "2024", category: "Experience" },
  { title: "CHP Summer Research Grant for CS SRP awarded 💵", month: "Apr", year: "2024", category: "Awards" },
  { title: "Selected for CS SRP 2024 🙌🏻", month: "Apr", year: "2024", category: "Experience" },
  { title: "Continuing RA in OnCARE Lab with Dr. Koustuv Saha 👩🏻‍💻", month: "Aug", year: "2023", category: "Experience" },
  { title: "Continuing RA in SCUBA Lab with Dr. Eshwar Chandrasekharan 👩🏻‍💻", month: "Aug", year: "2023", category: "Experience" },
  { title: "Programming plans poster accepted at ICER 2023 ✅", month: "Jun", year: "2023", category: "Publications" },
  { title: "Illinois Engineering Achievement and Outstanding Scholarships awarded 💸", month: "May", year: "2023", category: "Awards" },
  { title: "Summer research intern with Dr. Katie Cunningham ☀️", month: "Apr", year: "2023", category: "Experience" },
  { title: "Named Chancellor's Scholar in the Campus Honors Program 🏅", month: "Mar", year: "2023", category: "Awards" },
  { title: "Admitted to CS STARS program with Dr. Katie Cunningham ✨", month: "Jan", year: "2023", category: "Education" },
  { title: "Starting UIUC CS undergrad! 🎓", month: "Aug", year: "2022", category: "Education" },
];

const StripSection = styled.section`
  padding: 40px 0 8px;
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
