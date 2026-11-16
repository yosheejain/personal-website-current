export interface TeachingItem {
  title: string;
  date: string;
  org: string;
  description: string;
  categories: ("courses" | "mentoring" | "clubs")[];
  tags?: CourseTag[];
}

export type CourseTag = "Graduate" | "Undergraduate" | "Research" | "Introductory" | "Large";

export const teachingItems: TeachingItem[] = [
  {
    title: "Teaching Assistant — CS 500: Programming Education in the Age of GenAI",
    date: "Fall 2026",
    tags: ["Graduate", "Research"],
    org: "University of Illinois Urbana-Champaign",
    description:
      "Assisting in teaching a graduate course about how AI is reshaping computing education with 20+ graduate students. Shortlisted papers to develop the reading list, helped design assessments, and provided feedback on student projects.",
    categories: ["courses"],
  },
  {
    title: "Course Assistant — CS 101: Intro Computing: Engrg & Sci.",
    date: "Fall 2025 · Spring 2026",
    tags: ["Undergraduate", "Introductory", "Large"],
    org: "University of Illinois Urbana-Champaign",
    description:
      "Assisted students in an introductory computing course for engineering and science majors. Held office hours, graded assignments, and supported lab sessions.",
    categories: ["courses"],
  },
  {
    title: "Course Assistant — CS 102: Little Bits to Big Ideas",
    date: "Spring 2025",
    tags: ["Undergraduate", "Introductory", "Large"],
    org: "University of Illinois Urbana-Champaign",
    description:
      "Supported a non-major introductory computing course. Received the Outstanding Course Assistant Award for student impact and engagement.",
    categories: ["courses"],
  },
  {
    title: "Project Manager — CS 124 Honors: Introduction to Computer Science I",
    date: "Spring 2023",
    tags: ["Undergraduate", "Introductory"],
    org: "University of Illinois Urbana-Champaign",
    description:
      "Managed course projects and supported students in the honors section of the introductory CS course.",
    categories: ["courses"],
  },
];
