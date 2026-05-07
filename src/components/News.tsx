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

const categoryConfig: Record<NewsCategory, { bg: string; text: string; accent: string; dot: string }> = {
  Awards:       { bg: "rgba(217, 119, 6, 0.08)",  text: "#92400E", accent: "#D97706", dot: "#F59E0B" },
  Publications: { bg: "rgba(0, 70, 42, 0.07)",    text: "#00462A", accent: "#00462A", dot: "#36AE92" },
  Experience:   { bg: "rgba(13, 148, 136, 0.08)", text: "#0F766E", accent: "#0D9488", dot: "#14B8A6" },
  Teaching:     { bg: "rgba(124, 58, 237, 0.07)", text: "#5B21B6", accent: "#7C3AED", dot: "#8B5CF6" },
  Education:    { bg: "rgba(37, 99, 235, 0.07)",  text: "#1E40AF", accent: "#2563EB", dot: "#60A5FA" },
  Travel:       { bg: "rgba(220, 38, 38, 0.07)",  text: "#991B1B", accent: "#DC2626", dot: "#F87171" },
};

// ─── Styled components ───────────────────────────────────────────────────────

const SidebarOuter = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 32px;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const SidebarTitle = styled.span`
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CountBadge = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: rgba(0, 70, 42, 0.06);
  border: 1px solid rgba(0, 70, 42, 0.14);
  border-radius: 999px;
  padding: 2px 9px;
`;

const Feed = styled.div`
  overflow-y: auto;
  max-height: 430px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 6px;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.borderColor} transparent;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderColor};
    border-radius: 999px;
  }
`;

const Card = styled.div<{ $accent: string; $bg: string }>`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-top: 3px solid ${({ $accent }) => $accent};
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.09);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

const CategoryPill = styled.span<{ $bg: string; $text: string }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $text }) => $text};
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  flex-shrink: 0;
`;

const Dot = styled.span<{ $color: string }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const DateChip = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray400};
  white-space: nowrap;
  flex-shrink: 0;
`;

const CardTitle = styled.p`
  margin: 0;
  font-size: 0.83rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.4;
`;

// ─── Component ───────────────────────────────────────────────────────────────

const News: React.FC = () => (
  <SidebarOuter>
    <SidebarHeader>
      <SidebarTitle>Updates</SidebarTitle>
      <CountBadge>{newsItems.length}</CountBadge>
    </SidebarHeader>
    <Feed>
      {newsItems.map((item, idx) => {
        const cfg = categoryConfig[item.category];
        return (
          <Card key={`${item.title}-${idx}`} $accent={cfg.accent} $bg={cfg.bg}>
            <CardTop>
              <CategoryPill $bg={cfg.bg} $text={cfg.text}>
                <Dot $color={cfg.dot} />
                {item.category}
              </CategoryPill>
              <DateChip>{item.month} '{item.year.slice(2)}</DateChip>
            </CardTop>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        );
      })}
    </Feed>
  </SidebarOuter>
);

export default News;
