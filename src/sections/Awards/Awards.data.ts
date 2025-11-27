export type AwardCategory = "teaching" | "research" | "scholarship" | "academic";

export interface AwardItem {
  title: string;
  date: string; // e.g., "June 2025"
  org: string;
  description: string;
  categories: AwardCategory[];
  link?: string;
}

export const awards: AwardItem[] = [
  {
    title: "Campus Excellence Scholarship",
    date: "June 2025",
    org: "University of Illinois",
    description: "Full-tuition merit scholarship recognizing academic excellence and campus leadership.",
    categories: ["scholarship", "academic"],
    link: "#",
  },
  {
    title: "Outstanding Teaching Assistant Award",
    date: "May 2025",
    org: "CS 225: Data Structures",
    description: "Honored for creating inclusive recitation materials and mentoring 120+ students through office hours and review sessions.",
    categories: ["teaching"],
    link: "#",
  },
  {
    title: "Best Paper Award (Honorable Mention)",
    date: "April 2025",
    org: "CHI 2025",
    description: "Recognized for research on domain-specific programming plan detection with instructors-in-the-loop.",
    categories: ["research", "academic"],
    link: "#",
  },
  {
    title: "Undergraduate Research Fellowship",
    date: "August 2024",
    org: "Siebel School of Computer Science",
    description: "Funded to investigate explainable AI feedback for novice programmers in mixed-reality learning environments.",
    categories: ["research", "scholarship"],
    link: "#",
  },
  {
    title: "Dean's List",
    date: "May 2024",
    org: "University of Illinois",
    description: "Maintained GPA 4.00/4.00 across the academic year.",
    categories: ["academic"],
    link: "#",
  },
];
