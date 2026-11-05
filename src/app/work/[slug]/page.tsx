import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { T } from "@/components/site/LangText";
import { getNextProject, getProject, projects } from "@/lib/content";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.summary.en,
  };
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);

  return (
    <article className="pb-28">
      <header className="px-[clamp(18px,4vw,48px)] pb-8 pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">
          <T en={project.context.en} tr={project.context.tr} />
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <h1 className="mt-3 max-w-[14ch] font-stamp text-[clamp(52px,9vw,120px)] uppercase leading-[0.88] tracking-tight text-cream">
          {project.title}
        </h1>
      </header>

      <div className="grid gap-10 px-[clamp(18px,4vw,48px)] py-14 lg:grid-cols-[140px_1fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
          Info
        </p>
        <div className="max-w-3xl">
          {project.role ? (
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent-blue">
              <T en={project.role.en} tr={project.role.tr} />
            </p>
          ) : null}
          <div className="mt-5 space-y-5 text-[clamp(18px,2vw,22px)] leading-relaxed text-foreground/90">
            {project.body.en.map((paragraph, index) => (
              <p key={paragraph.slice(0, 24)}>
                <T en={paragraph} tr={project.body.tr[index]} />
              </p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-cream/20 px-3 py-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          {project.links.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase text-black transition-colors hover:bg-accent-red hover:text-cream"
                >
                  <T en={link.en} tr={link.tr} /> ↗
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-foreground/55">
              <T
                en="No public URL for this one."
                tr="Bunun açık bir adresi yok."
              />
            </p>
          )}
        </div>
      </div>

      <div className="px-[clamp(18px,4vw,48px)]">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-end justify-between gap-6 border-t border-cream/15 py-8"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
              <T en="Next" tr="Sıradaki" />
            </span>
            <span className="mt-2 block font-stamp text-[clamp(36px,6vw,72px)] uppercase leading-none transition-colors group-hover:text-accent-red">
              {next.title}
            </span>
          </span>
          <span aria-hidden className="font-stamp text-4xl text-accent-blue">
            ↗
          </span>
        </Link>
      </div>
    </article>
  );
}
