import Link from "next/link";
import { getFeatured } from "@/lib/content";
import { Marquee } from "./Marquee";
import ProjectShowcase from "./ProjectShowcase";
import { T } from "./LangText";

export default function Featured() {
  const featured = getFeatured();

  return (
    <div className="relative z-10 md:-mt-[18vh]">
      <div className="relative pt-[clamp(48px,8vw,96px)]">
        <h2 className="sr-only">
          <T en="Featured works" tr="Öne çıkan işler" />
        </h2>
        <Marquee
          itemClassName="gap-[clamp(14px,1.85vw,26px)] pr-[clamp(14px,1.85vw,26px)]"
          className="font-stamp text-[clamp(44px,11vw,140px)] uppercase leading-[1.08] tracking-tight"
        >
          <span className="flex items-center gap-[clamp(14px,1.85vw,26px)]">
            <T en="featured works" tr="öne çıkan işler" />
            <span className="translate-y-[0.08em] text-accent-blue">*</span>
          </span>
          <span className="flex items-center gap-[clamp(14px,1.85vw,26px)]" aria-hidden>
            <T en="featured works" tr="öne çıkan işler" />
            <span className="translate-y-[0.08em] text-accent-blue">*</span>
          </span>
        </Marquee>
        <div className="pointer-events-none flex justify-end px-[clamp(18px,4vw,40px)] pt-4 md:absolute md:inset-x-0 md:bottom-0 md:top-[clamp(48px,8vw,96px)] md:items-center md:pt-0">
          <Link
            href="/work"
            className="pointer-events-auto rounded-full bg-accent-red px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.01em] text-cream shadow-lg transition-colors hover:bg-cream hover:text-black sm:text-xs"
          >
            <T en="all works ↗" tr="tüm işler ↗" />
          </Link>
        </div>
      </div>
      {featured.map((project) => (
        <ProjectShowcase key={project.slug} project={project} />
      ))}
    </div>
  );
}
