export interface ContactItemData {
  icon: string;
  label: string;
  value?: string;
  href?: string;
}

export const contacts: ContactItemData[] = [
  { icon: "📧", label: "Email", href: "mailto:yosheelr@gmail.com" },
  { icon: "🐦", label: "Twitter", href: "https://twitter.com/" },
  { icon: "🌌", label: "Bluesky", href: "https://bsky.app/" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/yoshee-doh-45102a252/" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/doh-ha" },
  { icon: "🎓", label: "Google Scholar", href: "https://scholar.google.com/" },
];
