export interface TeachingItem {
  title: string;
  date: string; // e.g., "May 2025"
  org: string;
  description: string;
  categories: ("courses" | "mentoring" | "clubs")[];
}

export const teachingItems: TeachingItem[] = [
  {
    title: "Lead Instructor, Intro to Programming Workshop",
    date: "May 2025",
    org: "CS 125 Outreach",
    description: "Designed and delivered a 3-day Python bootcamp for 60 incoming freshmen, focusing on problem decomposition and debugging habits.",
    categories: ["courses"],
  },
  {
    title: "Teaching Assistant, CS 225 Data Structures",
    date: "Dec 2024",
    org: "University of Illinois",
    description: "Ran weekly discussions, created supplemental visualizations for balanced trees, and mentored 120+ students through office hours.",
    categories: ["courses", "mentoring"],
  },
  {
    title: "Workshop Mentor, Girls Who Code",
    date: "Aug 2024",
    org: "Champaign Community",
    description: "Guided high school students through web projects, emphasizing accessibility basics and inclusive design critiques.",
    categories: ["mentoring", "clubs"],
  },
];
