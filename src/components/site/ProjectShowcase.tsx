import Link from "next/link";
import { Project } from "@/lib/content";
import { T } from "./LangText";

const tagTone = {
  cream: "bg-cream text-black",
  blue: "bg-accent-blue text-black",
  red: "bg-accent-red text-cream",
};

export default function ProjectShowcase({ project }: { project: Project }) {
  return (
    <section
      aria-label={project.title}
      className="border-t border-cream/10 px-[clamp(18px,4vw,40px)] py-[clamp(56px,9vh,104px)]"
    >
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
      <div className="grid items-start gap-x-[clamp(20px,3vw,44px)] gap-y-3 md:grid-cols-[1.45fr_auto_1.05fr]">
        <h3 className="text-balance text-[clamp(30px,5.6vw,62px)] font-black leading-[1] tracking-[-0.02em]">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors hover:text-accent-red"
          >
            {project.title}
          </Link>
        </h3>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex w-fit rounded-full bg-accent-red px-3.5 py-2 text-[11px] font-semibold uppercase text-cream md:hidden"
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
        <div className="md:pt-[0.45em]">
          <p className="text-[13px] leading-[1.45] text-foreground/85 sm:text-sm">
            <T en={project.summary.en} tr={project.summary.tr} />
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-foreground/45">
            {project.stack.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
