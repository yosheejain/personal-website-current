export interface ContactItemData {
  icon: string;
  label: string;
  value?: string;
  href?: string;
}

export const contacts: ContactItemData[] = [
  { icon: "📧", label: "Email", href: "mailto:yosheej2@illinois.edu" },
  { icon: "🐦", label: "Twitter", href: "https://x.com/yosheejain" },
  { icon: "🌌", label: "Bluesky", href: "https://bsky.app/profile/yosheejain.bsky.social" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/yosheejain/" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/yosheejain" },
  { icon: "🎓", label: "Google Scholar", href: "https://scholar.google.com/citations?user=HSgotCcAAAAJ&hl=en&oi=ao" },
];
