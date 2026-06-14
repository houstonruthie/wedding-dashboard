export const weddingDateLabel = "April 22, 2028";
export const engagementDateLabel = "May 9, 2026";
export const coupleNames = "Zach & Ruthie";

export function getDaysUntilWedding() {
  const weddingDate = new Date("2028-04-22T16:00:00");
  const today = new Date();

  return Math.max(
    0,
    Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
  );
}

export const guestNavItems = [
  { label: "Our Story", href: "/#story" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Travel", href: "/#travel" },
  { label: "Registry", href: "/#registry" },
  { label: "RSVP", href: "/#rsvp" },
  { label: "Gallery", href: "/#gallery" },
];

export const planningNavItems = [
  { label: "Planning Dashboard", href: "/dashboard" },
  { label: "Colors", href: "/colors" },
  { label: "Moodboard", href: "/moodboard" },
  { label: "Budget", href: "/budget" },
  { label: "Playlist", href: "/playlist" },
  { label: "Guest Preview", href: "/guest-preview" },
];

export const paletteSwatches = [
  { name: "Sage", value: "#8fa58d" },
  { name: "Blush", value: "#e7aaa6" },
  { name: "Ivory", value: "#f8f1e5" },
  { name: "Ink", value: "#25334d" },
  { name: "Berry", value: "#8c4b5b" },
];
