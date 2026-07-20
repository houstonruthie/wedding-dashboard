"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  applyPalette,
  defaultPalette,
  normalizePalette,
  Palette,
  paletteStorageKey,
} from "../components/ThemeProvider";

const paletteGroups: { name: string; slots: { key: keyof Palette; label: string }[] }[] = [
  {
    name: "Primary 1",
    slots: [
      { key: "lightPrimary1", label: "Light Primary 1" },
      { key: "darkPrimary1", label: "Dark Primary 1" },
    ],
  },
  {
    name: "Primary 2",
    slots: [
      { key: "lightPrimary2", label: "Light Primary 2" },
      { key: "darkPrimary2", label: "Dark Primary 2" },
    ],
  },
  {
    name: "Secondary",
    slots: [
      { key: "secondary1", label: "Secondary 1" },
      { key: "secondary2", label: "Secondary 2" },
    ],
  },
  {
    name: "Neutral",
    slots: [
      { key: "lightNeutral", label: "Light Neutral" },
      { key: "darkNeutral", label: "Dark Neutral" },
    ],
  },
];

const paletteSlots = paletteGroups.flatMap((group) => group.slots);

export default function ColorsPage() {
  const [palette, setPalette] = useState<Palette>(defaultPalette);
  const [selected, setSelected] = useState<keyof Palette>("lightPrimary1");
  const [draftColor, setDraftColor] = useState(defaultPalette.lightPrimary1);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(paletteStorageKey);
        if (!stored) return;
        const nextPalette = normalizePalette(JSON.parse(stored));
        setPalette(nextPalette);
        setDraftColor(nextPalette.lightPrimary1);
      } catch {
        window.localStorage.removeItem(paletteStorageKey);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function selectSlot(key: keyof Palette) {
    setSelected(key);
    setDraftColor(palette[key]);
    setSaved(false);
  }

  function saveColor() {
    const nextPalette = { ...palette, [selected]: draftColor };
    setPalette(nextPalette);
    window.localStorage.setItem(paletteStorageKey, JSON.stringify(nextPalette));
    applyPalette(nextPalette);
    setSaved(true);
  }

  const selectedLabel = paletteSlots.find((slot) => slot.key === selected)?.label;

  return (
    <main className="color-page">
      <div className="color-shell">
        <header className="color-header">
          <div>
            <p className="eyebrow">Website settings</p>
            <h1>Color palette</h1>
            <p className="intro">
              Build the eight-color palette used across your website. Select a
              swatch, choose its new color, then save your change.
            </p>
          </div>
          <Link className="back-link" href="/">
            View website
          </Link>
        </header>

        <section className="palette-card" aria-labelledby="palette-heading">
          <div className="section-heading">
            <div>
              <p className="step">01</p>
              <h2 id="palette-heading">Your palette</h2>
            </div>
            <p>Choose a square to replace</p>
          </div>

          <div className="swatch-grid">
            {paletteGroups.map((group) => (
              <div className="swatch-group" key={group.name}>
                {group.slots.map(({ key, label }) => (
                  <button
                    className={`swatch-button ${selected === key ? "selected" : ""}`}
                    key={key}
                    type="button"
                    onClick={() => selectSlot(key)}
                    aria-pressed={selected === key}
                  >
                    <span
                      className="swatch-color"
                      style={{ backgroundColor: palette[key] }}
                    >
                      {selected === key && <span className="checkmark">✓</span>}
                    </span>
                    <span className="swatch-label">{label}</span>
                    <span className="swatch-hex">{palette[key].toUpperCase()}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="picker-card" aria-labelledby="picker-heading">
          <div className="picker-copy">
            <p className="step">02</p>
            <h2 id="picker-heading">Replace {selectedLabel}</h2>
            <p>
              Click the color square to open your color picker. Your saved
              selection will replace the active palette square.
            </p>
          </div>

          <div className="picker-controls">
            <label className="native-picker" style={{ backgroundColor: draftColor }}>
              <span className="sr-only">Choose a color for {selectedLabel}</span>
              <input
                type="color"
                value={draftColor}
                onChange={(event) => {
                  setDraftColor(event.target.value);
                  setSaved(false);
                }}
              />
            </label>

            <label className="hex-field">
              <span>Hex color</span>
              <input
                type="text"
                value={draftColor.toUpperCase()}
                maxLength={7}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^#[0-9a-fA-F]{0,6}$/.test(value)) {
                    setDraftColor(value);
                    setSaved(false);
                  }
                }}
                onBlur={() => {
                  if (!/^#[0-9a-fA-F]{6}$/.test(draftColor)) {
                    setDraftColor(palette[selected]);
                  }
                }}
              />
            </label>

            <button
              className="save-button"
              type="button"
              onClick={saveColor}
              disabled={!/^#[0-9a-fA-F]{6}$/.test(draftColor)}
            >
              {saved ? "Saved" : "Save color"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
