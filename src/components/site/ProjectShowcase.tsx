import Link from "next/link";
import { Project, Tone } from "@/lib/content";
import { T } from "./LangText";

const tileTone: Record<Tone, string> = {
  cream: "bg-cream text-black",
  blue: "bg-accent-blue text-black",
  red: "bg-accent-red text-cream",
  ink: "bg-[#2a2922] text-cream ring-1 ring-inset ring-cream/30",
};

const tagTone = {
  cream: "bg-cream text-black",
  blue: "bg-accent-blue text-black",
  red: "bg-accent-red text-cream",
};

function Tiles({ project }: { project: Project }) {
  const cells = project.tiles.map((tile) => (
    <div
      key={tile.label}
      className={`relative aspect-[4/5] h-full shrink-0 overflow-hidden rounded-md ${tileTone[tile.tone]}`}
    >
      <span className="absolute left-3 top-3 text-[10px] font-semibold uppercase tracking-[0.08em] opacity-70">
        {tile.label}
      </span>
      <span className="absolute bottom-2 left-3 font-stamp text-[clamp(48px,7vw,92px)] leading-[0.8]">
        {tile.mark}
      </span>
    </div>
  ));

  return (
    <div className="min-h-[240px] flex-1 overflow-hidden px-[clamp(18px,4vw,40px)] pb-28 md:min-h-0 md:pb-32">
      <div className="h-[240px] overflow-x-auto md:h-full md:overflow-hidden">
        <div className="flex h-full w-max gap-3 pr-3 motion-reduce:animate-none md:animate-tiles">
          <div className="flex h-full shrink-0 gap-3 pr-3">{cells}</div>
          <div className="hidden h-full shrink-0 gap-3 pr-3 md:flex" aria-hidden>
            {cells}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectShowcase({ project }: { project: Project }) {
  return (
    <section aria-label={project.title} className="relative md:h-[132vh]">
      <div className="flex flex-col md:sticky md:top-0 md:h-[100svh] md:overflow-hidden">
        <div className="shrink-0 px-[clamp(18px,4vw,40px)] pb-[clamp(14px,2.5vh,26px)] pt-[clamp(88px,14vh,128px)]">
          <div className="mb-[clamp(10px,1.8vh,20px)] flex flex-wrap items-start justify-between gap-4">
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag.label.en}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.02em] sm:px-3 sm:text-[11px] ${tagTone[tag.tone]}`}
                >
                  <T en={tag.label.en} tr={tag.label.tr} />
                </li>
              ))}
            </ul>
            <Link
              href={`/work/${project.slug}`}
              className="hidden shrink-0 rounded-full bg-cream px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.01em] text-black transition-colors hover:bg-accent-red hover:text-cream sm:text-xs md:inline-flex"
            >
              <T en="See full case ↗" tr="Dosyayı aç ↗" />
            </Link>
          </div>
          <div className="grid items-start gap-x-[clamp(20px,3vw,44px)] gap-y-2 md:grid-cols-[1.45fr_auto_1.05fr]">
            <h3 className="mb-[clamp(12px,2vh,24px)] text-balance text-[clamp(30px,5.6vw,62px)] font-black leading-[1] tracking-[-0.02em]">
              <Link
                href={`/work/${project.slug}`}
                className="transition-colors hover:text-accent-red"
              >
                {project.title}
              </Link>
            </h3>
            <Link
              href={`/work/${project.slug}`}
              className="mb-4 inline-flex w-fit rounded-full bg-accent-red px-3.5 py-2 text-[11px] font-semibold uppercase text-cream md:hidden"
            >
              <T en="See full case ↗" tr="Dosyayı aç ↗" />
            </Link>
            <div className="text-[11px] uppercase leading-[1.5] tracking-[0.04em] text-foreground/45 md:min-w-[120px] md:pt-[0.45em]">
              {project.year ? (
                <div className="font-semibold text-foreground/70">{project.year}</div>
              ) : null}
              <div>
                <T en={project.context.en} tr={project.context.tr} />
              </div>
            </div>
            <p className="text-[13px] leading-[1.45] text-foreground/85 sm:text-sm md:pt-[0.45em]">
              <T en={project.summary.en} tr={project.summary.tr} />
            </p>
          </div>
        </div>
        <Tiles project={project} />
      </div>
    </section>
  );
}
