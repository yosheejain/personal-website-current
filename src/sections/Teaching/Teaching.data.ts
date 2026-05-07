export interface TeachingItem {
  title: string;
  date: string;
  org: string;
  description: string;
  categories: ("courses" | "mentoring" | "clubs")[];
}

export const teachingItems: TeachingItem[] = [
  {
    title: "Course Assistant — CS 101: Intro Computing: Engrg & Sci.",
    date: "Spring 2026",
    org: "University of Illinois Urbana-Champaign",
    description:
      "Assisted students in an introductory computing course for engineering and science majors. Held office hours, graded assignments, and supported lab sessions. Also served in Fall 2025.",
    categories: ["courses"],
  },
  {
    title: "Course Assistant — CS 102: Little Bits to Big Ideas",
    date: "Spring 2025",
    org: "University of Illinois Urbana-Champaign",
    description:
      "Supported a non-major introductory computing course. Received the Outstanding Course Assistant Award for student impact and engagement.",
    categories: ["courses"],
  },
  {
    title: "Project Manager — CS 124 Honors: Introduction to Computer Science I",
    date: "Spring 2023",
    org: "University of Illinois Urbana-Champaign",
    description:
      "Managed course projects and supported students in the honors section of the introductory CS course.",
    categories: ["courses"],
  },
];
