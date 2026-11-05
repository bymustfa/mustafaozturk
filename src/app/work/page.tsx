import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/site/LangText";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products, Vodafone frontends, and open source by Mustafa Öztürk.",
};

export default function WorkPage() {
  return (
    <article className="px-[clamp(18px,4vw,48px)] pb-32 pt-28">
      <header className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">
          <T en="Work" tr="İşler" />
        </p>
        <h1 className="mt-3 font-stamp text-[clamp(64px,12vw,150px)] uppercase leading-[0.86] tracking-tight">
          <T en="All works" tr="Tüm işler" />
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
          <T
            en="Products I build, frontend work at Vodafone Türkiye, and open source under bymustfa. No invented clients."
            tr="Üzerinde çalıştığım ürünler, Vodafone Türkiye'deki ön yüz işi ve bymustfa altındaki açık kaynak. Uydurma müşteri yok."
          />
        </p>
      </header>
      <ol className="mt-14 divide-y divide-cream/15 border-y border-cream/15">
        {projects.map((project, index) => {
          const siteLink = project.links.find((link) => !link.href.includes("github.com"));
          const siteHost = siteLink
            ? new URL(siteLink.href).host.replace(/^www\./, "")
            : null;

          return (
            <li
              key={project.slug}
              className="grid gap-3 py-6 md:grid-cols-[72px_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="font-stamp text-2xl text-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <Link
                  href={`/work/${project.slug}`}
                  className="block text-[clamp(28px,4vw,44px)] font-black leading-none tracking-tight transition-colors hover:text-accent-red"
                >
                  {project.title}
                </Link>
                <p className="mt-2 text-sm uppercase tracking-[0.08em] text-foreground/50">
                  {project.year ? `${project.year} · ` : ""}
                  <T en={project.context.en} tr={project.context.tr} />
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.08em]">
                {siteLink && siteHost ? (
                  <a
                    href={siteLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-blue hover:text-cream"
                  >
                    {siteHost} ↗
                  </a>
                ) : null}
                <Link
                  href={`/work/${project.slug}`}
                  className="text-cream/70 hover:text-accent-blue"
                >
                  <T en="See case ↗" tr="Dosya ↗" />
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
