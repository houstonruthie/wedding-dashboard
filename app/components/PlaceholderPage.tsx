import Link from "next/link";
import { SiteNav } from "./SiteNav";

type PlaceholderPageProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function PlaceholderPage({ title, eyebrow, description }: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#211d1b]">
      <SiteNav />
      <section className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-5xl place-items-center px-5 py-16 text-center sm:px-8">
        <div className="max-w-2xl border-y border-[#ded0c2] py-14">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8c4b5b]">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight tracking-normal sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-[#6c625a]">{description}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#211d1b] px-5 text-sm font-bold text-[#f8f1e5] transition hover:bg-[#25334d]"
            >
              Back to dashboard
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#cbb8a9] px-5 text-sm font-bold text-[#4f423a] transition hover:border-[#8c4b5b] hover:text-[#8c4b5b]"
            >
              View homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
