import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "./components/SiteNav";
import {
  coupleNames,
  engagementDateLabel,
  getDaysUntilWedding,
  weddingDateLabel,
} from "./wedding-data";

export default function Home() {
  const daysUntilWedding = getDaysUntilWedding();

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#211d1b]">
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(248,241,229,0.68),rgba(255,253,249,0))]" />
        <div className="absolute left-0 top-20 h-px w-full bg-[#ded0c2]/60" />
        <SiteNav />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-18">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#8c4b5b]">
              {weddingDateLabel}
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.9] tracking-normal text-[#211d1b] sm:text-7xl lg:text-8xl">
              {coupleNames}
            </h1>
           

            <div className="mt-10 flex flex-col gap-5 border-y border-[#ded0c2] py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-5xl leading-none tracking-normal text-[#25334d]">
                  {daysUntilWedding}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8c4b5b]">
                  days to go
                </p>
              </div>
              <Link
                href="/dashboard"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#ded0c2] bg-white/72 px-5 text-xs font-bold uppercase tracking-[0.16em] text-[#6c625a] shadow-sm transition hover:border-[#8c4b5b] hover:text-[#8c4b5b]"
              >
                Planning Dashboard
              </Link>
            </div>
          </div>

          <div className="relative min-h-[560px] lg:min-h-[700px]" aria-label="Engagement photos">
            <div className="absolute left-0 top-0 h-[82%] w-[64%] border border-[#ded0c2] bg-white p-3 shadow-[0_28px_90px_rgba(33,29,27,0.12)] sm:left-8">
              <div className="relative h-full overflow-hidden">
                <Image
                  src="/images/IMG_2028.JPG"
                  alt="Zach and Ruthie engagement portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 70vw"
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 h-[48%] w-[58%] border border-[#ded0c2] bg-white p-3 shadow-[0_22px_70px_rgba(33,29,27,0.1)]">
              <div className="relative h-full overflow-hidden">
                <Image
                  src="/images/IMG_2060.JPG"
                  alt="Zach and Ruthie engagement photo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 62vw"
                />
              </div>
            </div>

            <div className="absolute right-4 top-8 hidden border border-[#ded0c2] bg-[#fffdf9]/92 px-5 py-4 text-right shadow-sm backdrop-blur sm:block">
              <p className="font-serif text-3xl leading-none text-[#8c4b5b]">05.09</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6c625a]">
                Engaged
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ded0c2]/70 bg-white/72">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8c4b5b]">
              Save the date
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-normal text-[#211d1b] sm:text-5xl">
              April 22, 2028
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#6c625a]">
            We cannot wait to celebrate with the people we love most.
          </p>
        </div>
      </section>
    </main>
  );
}
