"use client";

import { useEffect } from "react";

export const defaultPalette = {
  lightPrimary1: "#B2D1E5",
  darkPrimary1: "#7696AB",
  lightPrimary2: "#C0CEAA",
  darkPrimary2: "#2E442D",
  secondary1: "#FFF4CD",
  secondary2: "#F0BCC9",
  lightNeutral: "#F4F4F2",
  darkNeutral: "#01395F",
};

export type Palette = typeof defaultPalette;
export const paletteStorageKey = "site-color-palette";

export function normalizePalette(saved: unknown): Palette {
  if (!saved || typeof saved !== "object") return defaultPalette;

  return Object.fromEntries(
    Object.entries(defaultPalette).map(([key, fallback]) => {
      const value = (saved as Record<string, unknown>)[key];
      return [key, typeof value === "string" && /^#[0-9a-fA-F]{6}$/.test(value) ? value : fallback];
    }),
  ) as Palette;
}

export function applyPalette(palette: Palette) {
  const root = document.documentElement;
  Object.entries(palette).forEach(([name, color]) => {
    root.style.setProperty(`--${name}`, color);
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = window.localStorage.getItem(paletteStorageKey);
    if (!saved) return;

    try {
      applyPalette(normalizePalette(JSON.parse(saved)));
    } catch {
      window.localStorage.removeItem(paletteStorageKey);
    }
  }, []);

  return children;
}
