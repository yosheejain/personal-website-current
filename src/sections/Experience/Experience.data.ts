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
    organization: "UIUC — Dr. Max Fowler",
    orgDescription: "University of Illinois Urbana-Champaign",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Undergraduate Research Assistant",
        duration: "Jan 2026 – Present",
        description:
          "CS Education, AI, Quantitative Analysis, Natural-Language Processing, Statistical Modeling",
      },
    ],
  },
  {
    organization: "ETH Zürich",
    orgDescription:
      "Dr. April Yi Wang, Dr. Zihan Wu, Dr. Heejin Do [[BR_768]] Federal Institute of Technology Zurich",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Undergraduate Summer Research Assistant",
        duration: "May 2025 – Feb 2026",
        description:
          "Human-Computer Interaction, AI, CS Education, Experimental Research, Mixed-Methods Research",
      },
    ],
  },
  {
    organization: "KIXLAB, KAIST",
    orgDescription:
      "Dr. Juho Kim, Dr. Seungju Kim, Dr. Saelyne Yang, Chen Zhou [[BR_768]] Korea Advanced Institute of Science and Technology",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Undergraduate Summer Research Intern",
        duration: "Jun 2025 – Dec 2025",
        description:
          "Human-Computer Interaction, Computer Vision, Multimodal LLMs, Education",
      },
    ],
  },
  {
    organization: "HCII, Carnegie Mellon University",
    orgDescription:
      "Dr. Jionghao Lin, Dr. John Sabatini, Dr. John Hollander, Dr. Liang Zhang",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Undergraduate Research Intern",
        duration: "May 2024 – Aug 2024",
        description: "Human-Computer Interaction, AI, Education",
      },
    ],
  },
  {
    organization: "CSLS Lab, UIUC",
    orgDescription: "Dr. Katie Cunningham [[BR_768]] University of Illinois Urbana-Champaign",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Undergraduate Research Assistant",
        duration: "Jan 2023 – Present",
        description:
          "CS Education, Human-Computer Interaction, AI, Experimental Research, Mixed-Methods Research",
      },
    ],
  },
  {
    organization: "SCUBA Lab, UIUC",
    orgDescription:
      "Dr. Eshwar Chandrasekharan, Charlotte Lambert [[BR_768]] University of Illinois Urbana-Champaign",
    tags: ["CSE"],
    roles: [
      {
        title: "Undergraduate Research Assistant",
        duration: "Aug 2023 – Aug 2025",
        description:
          "Human-Computer Interaction, Social Computing, Data Science, Causal Inference",
      },
    ],
  },
  {
    organization: "OnCARE Lab, UIUC",
    orgDescription:
      "Dr. Koustuv Saha, Dr. Ravi Karkar [[BR_768]] University of Illinois Urbana-Champaign",
    tags: ["CSE"],
    roles: [
      {
        title: "Undergraduate Research Assistant",
        duration: "Aug 2023 – May 2025",
        description:
          "Human-Computer Interaction, Social Computing, Data Science, AI, Mixed-Methods Research",
      },
    ],
  },
];
