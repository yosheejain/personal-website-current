export interface TravelEntry {
  id: string;
  title: string;
  location: string;
  year: string;
  cover: string;
  summary: string;
  writeup: string;
  photos: { label: string; tint: string }[];
}

export const travels: TravelEntry[] = [
  {
    id: "kyoto-2024",
    title: "Temples & Tea",
    location: "Kyoto, Japan",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    summary: "Foggy mornings in Arashiyama, tea tastings in Uji, and endless lantern-lit alleys.",
    writeup: "Kyoto was a week of quiet mornings and long walks. I chased sunrise at Fushimi Inari, biked through rice paddies toward Uji for fresh matcha, and lingered at Nishiki Market until the lanterns flickered on. The best part was a rainy evening at Kiyomizu-dera, where the city lights below felt like stars.",
    photos: [
      { label: "Arashiyama", tint: "#8FB7A2" },
      { label: "Fushimi Inari", tint: "#B7845F" },
      { label: "Uji Tea", tint: "#6FAF9B" },
    ],
  },
  {
    id: "reykjavik-2023",
    title: "Lava & Lagoons",
    location: "Reykjavík, Iceland",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary: "Geothermal pools, black sand, and late-night sunsets that never quite end.",
    writeup: "Reykjavík was all about contrasts: steam rising off the Blue Lagoon while glaciers glowed in the distance, and black sand beaches beside neon green moss. I drove the Golden Circle, sampled too many skyr flavors, and found myself wide awake at midnight under a pastel sky.",
    photos: [
      { label: "Blue Lagoon", tint: "#9AD2D9" },
      { label: "Black Sand", tint: "#5C6B73" },
      { label: "Moss Fields", tint: "#8DAA5D" },
    ],
  },
  {
    id: "seoul-2022",
    title: "City Layers",
    location: "Seoul, South Korea",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1526481280695-3c469c2f0623?auto=format&fit=crop&w=1200&q=80",
    summary: "Han river picnics, late-night tteokbokki, and design inspiration in every alley.",
    writeup: "Seoul felt like a city that never stops iterating. I spent afternoons sketching at Dongdaemun Design Plaza, evenings on the Han River with convenience-store picnics, and mornings hopping between cafes in Ikseon-dong. The trip was a reminder that cities can be both fast and surprisingly gentle.",
    photos: [
      { label: "Han River", tint: "#9EC5E6" },
      { label: "DDP", tint: "#9A9EB1" },
      { label: "Ikseon-dong", tint: "#C59BB0" },
    ],
  },
];
