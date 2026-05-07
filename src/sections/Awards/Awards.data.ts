export type AwardCategory = "teaching" | "research" | "scholarship" | "academic";

export interface AwardItem {
  title: string;
  date: string;
  org: string;
  description: string;
  categories: AwardCategory[];
  link?: string;
}

export const awards: AwardItem[] = [
  {
    title: "Bronze Tablet",
    date: "2026",
    org: "University of Illinois",
    description: "Highest academic honor at UIUC, awarded to the top 3% of graduating seniors in each college.",
    categories: ["academic"],
  },
  {
    title: "Distinguished Chancellor's Scholar",
    date: "2026",
    org: "University of Illinois",
    description: "Recognized for exceptional academic achievement and contributions to research and campus life.",
    categories: ["academic"],
  },
  {
    title: "Finalist, ACM Undergraduate Student Research Competition",
    date: "2025",
    org: "ACM CHI 2025",
    description: "Selected as a finalist in the ACM Undergraduate Student Research Competition at CHI 2025.",
    categories: ["research"],
  },
  {
    title: "Outstanding Course Assistant Award",
    date: "2025",
    org: "CS 102: Little Bits to Big Ideas",
    description: "Awarded for outstanding performance and student impact as a course assistant.",
    categories: ["teaching"],
  },
  {
    title: "CHP Outstanding Senior Award",
    date: "2025",
    org: "Campus Honors Program, UIUC",
    description: "Awarded to graduating Campus Honors Program seniors for exceptional academic and research contributions.",
    categories: ["academic"],
  },
  {
    title: "John and Dorothy Durkin Women in Engineering Scholarship",
    date: "2025",
    org: "University of Illinois",
    description: "Scholarship recognizing women in engineering who demonstrate academic excellence and leadership.",
    categories: ["scholarship"],
  },
  {
    title: "Conference Travel Grants",
    date: "2025",
    org: "OUR & Campus Honors Program, UIUC",
    description: "Travel grants from the Office of Undergraduate Research and CHP to present PLAID at CHI 2025 in Yokohama.",
    categories: ["research"],
  },
  {
    title: "Summer Research Award",
    date: "2024",
    org: "Campus Honors Program, UIUC",
    description: "Competitive summer grant to pursue full-time undergraduate research.",
    categories: ["research"],
  },
  {
    title: "Chancellor's Scholar",
    date: "2022",
    org: "Campus Honors Program, UIUC",
    description: "Named a Chancellor's Scholar upon admission for exceptional academic achievement. Ongoing.",
    categories: ["academic"],
  },
  {
    title: "Edmund J. James Scholar",
    date: "2022",
    org: "University of Illinois",
    description: "One of the University's most prestigious honors for incoming undergraduates, recognizing academic merit. Ongoing.",
    categories: ["academic"],
  },
];
