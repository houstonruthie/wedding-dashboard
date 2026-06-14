import Link from "next/link";
import { coupleNames, guestNavItems } from "../wedding-data";

type SiteNavProps = {
  tone?: "light" | "dark";
};

export function SiteNav({ tone = "light" }: SiteNavProps) {
  const isDark = tone === "dark";

  return (
    <header className="relative z-20">
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 ${
          isDark ? "text-white" : "text-[#211d1b]"
        }`}
      >
        <Link href="/" className="font-serif text-2xl leading-none tracking-normal">
          {coupleNames}
        </Link>

        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          {guestNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition ${
                isDark ? "text-white/76 hover:text-white" : "text-[#6c625a] hover:text-[#8c4b5b]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/dashboard"
          className={`inline-flex h-10 shrink-0 items-center justify-center rounded-full border px-4 text-xs font-bold uppercase tracking-[0.16em] transition ${
            isDark
              ? "border-white/28 bg-white/10 text-white hover:bg-white hover:text-[#211d1b]"
              : "border-[#cbb8a9] bg-[#faf7f1]/78 text-[#4f423a] hover:border-[#8c4b5b] hover:text-[#8c4b5b]"
          }`}
        >
          Planning
        </Link>
      </nav>
    </header>
  );
}
