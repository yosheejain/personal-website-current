export interface ExperienceRole {
  title: string;
  description: string;
  duration?: string;
}

export interface ExperienceItemData {
  organization: string;
  orgDescription?: string;

  roles: ExperienceRole[];
  logoUrl?: string;
  tags?: string[];
}

export const experiences: ExperienceItemData[] = [
  {
    organization: "KIXLAB @KAIST",
    orgDescription: "KAIST Interaction Lab (Prof. Juho Kim)",

    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "HCI Research Intern",
        duration: "Jun 2025 - Present",
        description: "Research on LLM-based Diagnosis System of Math Problem Solving Skills",
      },
    ],
  },
  {
    organization: "Jinseon Girls' Middle School",
    orgDescription: "",

    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Information Science Teacher",
        duration: "May 2025",
        description: "Taught Block coding to 3rd grade students using Entry",
      },
    ],
  },
  {
    organization: "HCIL @EWHA",
    orgDescription: "Human-Computer Interaction Lab \n (Prof. Uran Oh)",

    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "HCI Research Intern",
        duration: "Jan 2025 - Present",
        description: "Research on Designing AI Prompt Engineering in Educational Contexts",
      },
    ],
  },
  {
    organization: "GDGoC",
    orgDescription: "Google Developers Group on Campus",

    tags: ["CSE"],
    roles: [
      {
        title: "AI Member",
        duration: "Sep 2024 - Jun 2025",
        description: "Participated in AI study sessions and worked on AI projects.",
      },
      {
        title: "DevRel Core Member",
        duration: "Sep 2024 - Jun 2025",
        description:
          "Managed the club's Notion page, organized Part Exchange Sessions, MT and supported IT events such as Devfest 2024:Responsible AI in Action, co-hosted by GDG Pangyo, GDGoC Yonsei, and GDGoC Ewha.",
      },
    ],
  },
  {
    organization: "Ewha W.U. Elementary School",
    orgDescription: "",

    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Teaching Assistant",
        duration: "Mar 2024 - Jul 2024",
        description: "Assisted regular computer classes for 3rd. 4th and 5th grade students using Scratch, Entry, Tinkercad, and Makey Makey.",
      },
    ],
  },
  {
    organization: "EURON",
    orgDescription: "Ewha AI & Data Analysis Club",

    tags: ["CSE"],
    roles: [
      {
        title: "ML Member",
        duration: "Mar 2024 - Sep 2024",
        description: "Participated in Machine Learning study sessions by delivering lectures to peers and worked on AI projects.",
      },
      {
        title: "PR Team Executive",
        duration: "Mar 2024 - Sep 2024",
        description: "Managed the club's Notion page and supported the planning of the Homecoming Day event.",
      },
    ],
  },
  {
    organization: "Self Design Challenge ",
    orgDescription: "University Innovation Center Supported [[BR_768]] Program for Student-Designed Projects",

    tags: ["CSE"],
    roles: [
      {
        title: "Unity Developer",
        duration: "Jan 2023 - Jul 2023",
        description:
          "Worked on a project in collaboration with students from various academic backgrounds, while receiving support from industry mentors, faculty supervisors, and alumni mentors from previous project.",
      },
      {
        title: "Mentor",
        duration: "Mar 2024 - Jul 2024",
        description: "Provided guidance and mentorship to participants in the Self Design Challenge.",
      },
    ],
  },

  {
    organization: "EFUB",
    orgDescription: "Ewha Web Development Carrer Club",

    tags: ["CSE"],
    roles: [
      {
        title: "Frontend Developer",
        duration: "Mar 2022- Dec 2022",
        description: "Developed Frontend development skills through seminars and projects.",
      },
    ],
  },
  {
    organization: "Spring Light",
    orgDescription: "Yonsei, Ewha, Sogang University [[BR_768]]Education Voluntering Club",

    tags: ["EDU"],
    roles: [
      {
        title: "Tutoring Volunteer",
        duration: "Mar 2021- Feb 2022",
        description: "Tutored Mathematics and English to middle school students at community child center.",
      },
      {
        title: "PR Team Executive",
        duration: "Mar 2021- Feb 2022",
        description: "Designed club promotional materials and participated in overall club operations.",
      },
    ],
  },
];
