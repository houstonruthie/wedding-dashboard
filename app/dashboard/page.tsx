import Link from "next/link";
import { SiteNav } from "../components/SiteNav";
import {
  getDaysUntilWedding,
  paletteSwatches,
  planningNavItems,
  weddingDateLabel,
} from "../wedding-data";

const planningCards = [
  {
    title: "Palette Lab",
    href: "/colors",
    detail: "Collect color stories, test swatches, and decide what feels like the wedding.",
    meta: "Design system",
  },
  {
    title: "Moodboard",
    href: "/moodboard",
    detail: "Pinterest links, venue references, floral ideas, dress notes, and screenshots.",
    meta: "Inspo archive",
  },
  {
    title: "Playlist",
    href: "/playlist",
    detail: "Ceremony music, dinner atmosphere, dance-floor essentials, and must-play notes.",
    meta: "Music map",
  },
  {
    title: "Budget",
    href: "/budget",
    detail: "Estimates, deposits, remaining balances, and the spending categories that matter.",
    meta: "Private numbers",
  },
  {
    title: "Venue",
    href: "/moodboard",
    detail: "Photos, floor plan thoughts, ceremony setup, and guest flow ideas.",
    meta: "Place notes",
  },
  {
    title: "Guest Site Preview",
    href: "/guest-preview",
    detail: "A private staging area for story, schedule, travel, registry, RSVP, and gallery.",
    meta: "Public draft",
  },
];

export default function Dashboard() {
  const daysUntilWedding = getDaysUntilWedding();

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#211d1b]">
      <section className="border-b border-[#ded0c2] bg-[#211d1b] text-white">
        <SiteNav tone="dark" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e7aaa6]">
              Private planning area
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight tracking-normal sm:text-6xl">
              The command center can stay behind the curtain.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/74">
              Keep experiments, links, budget notes, and unfinished ideas here while the homepage
              stays clean enough to become the real guest site.
            </p>
          </div>

          <aside className="border border-white/18 bg-white/8 p-6 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7aaa6]">
              {weddingDateLabel}
            </p>
            <p className="mt-4 font-serif text-6xl leading-none tracking-normal">{daysUntilWedding}</p>
            <p className="mt-2 text-sm font-medium text-white/68">days until the wedding</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[260px_1fr] lg:py-16">
        <aside className="h-fit border border-[#ded0c2] bg-[#faf7f1]/78 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c4b5b]">Planning</p>
          <div className="mt-5 grid gap-2">
            {planningNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-transparent px-3 py-3 text-sm font-bold text-[#4f423a] transition hover:border-[#ded0c2] hover:bg-[#f8f1e5]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-5 overflow-hidden border border-[#ded0c2]">
            {paletteSwatches.map((swatch) => (
              <div
                key={swatch.name}
                className="aspect-square"
                style={{ backgroundColor: swatch.value }}
                title={swatch.name}
              />
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8c4b5b]">
                Idea cards
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-normal text-[#211d1b]">
                Build these one at a time.
              </h2>
            </div>
            <Link
              href="/guest-preview"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#cbb8a9] bg-[#faf7f1]/86 px-5 text-sm font-bold text-[#4f423a] transition hover:border-[#8c4b5b] hover:text-[#8c4b5b]"
            >
              View guest preview
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {planningCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group min-h-64 border border-[#ded0c2] bg-[#faf7f1]/80 p-6 transition hover:-translate-y-0.5 hover:border-[#8c4b5b] hover:bg-[#f8f1e5]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c4b5b]">
                  {card.meta}
                </p>
                <h3 className="mt-5 font-serif text-3xl tracking-normal text-[#25334d]">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#6c625a]">{card.detail}</p>
                <span className="mt-8 inline-flex text-sm font-bold text-[#4f423a] transition group-hover:text-[#8c4b5b]">
                  Open placeholder
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
