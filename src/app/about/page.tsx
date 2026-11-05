import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { T } from "@/components/site/LangText";
import {
  education,
  experience,
  site,
  stackGroups,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mustafa Öztürk is a full-stack developer and AI engineer in Istanbul. Currently at Vodafone Türkiye.",
};

export default function AboutPage() {
  return (
    <article className="px-[clamp(18px,4vw,48px)] pb-32 pt-28">
      <header className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">
            <T en="About" tr="Hakkımda" />
          </p>
          <h1 className="mt-3 max-w-[12ch] font-stamp text-[clamp(56px,9vw,120px)] uppercase leading-[0.9] tracking-tight">
            <T en="Full-stack from Istanbul." tr="İstanbul'dan full-stack." />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/85">
            <T
              en="I write full-stack software in Istanbul. Frontend at Vodafone, and products for agents, documents, and media with the teams I work in. If it repeats, an agent should do it."
              tr="İstanbul'da full-stack yazıyorum. Vodafone'da ön yüz; çalıştığım ekiplerle ajan, doküman ve medya ürünleri. Tekrar ediyorsa ajan yapsın."
            />
          </p>
        </div>
        <figure className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-md">
          <Image
            src="/images/me.jpg"
            alt="Mustafa Öztürk"
            fill
            priority
            sizes="(min-width: 976px) 420px, 90vw"
            className="object-cover grayscale transition duration-500 hover:grayscale-0"
          />
        </figure>
      </header>

      <section className="mt-20" aria-labelledby="now">
        <h2 id="now" className="font-stamp text-[clamp(36px,6vw,72px)] uppercase leading-none">
          <T en="Now" tr="Şimdi" />
        </h2>
        <ul className="mt-6 max-w-3xl space-y-3 text-lg leading-relaxed text-foreground/85">
          <li>
            <T
              en="At Vodafone Türkiye. Yanımda Premium, Evde İnternet, and the frontends next to them."
              tr="Vodafone Türkiye'deyim. Yanımda Premium, Evde İnternet ve yanlarındaki ön yüzler."
            />
          </li>
          <li>
            <T
              en="DevAtlas, Popil, Somra Media. LLM features and MCP servers live in the products."
              tr="DevAtlas, Popil, Somra Media. İçlerinde LLM ve MCP var."
            />
          </li>
          <li>
            <T
              en={
                <>
                  Writing on{" "}
                  <a className="underline underline-offset-4 hover:text-accent-blue" href={site.links.medium}>
                    Medium
                  </a>
                  .
                </>
              }
              tr={
                <>
                  Yazılar{" "}
                  <a className="underline underline-offset-4 hover:text-accent-blue" href={site.links.medium}>
                    Medium
                  </a>
                  &apos;da.
                </>
              }
            />
          </li>
        </ul>
        <p className="mt-6">
          <Link
            href="/writing"
            className="rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase text-black transition-colors hover:bg-accent-red hover:text-cream"
          >
            <T en="Writing ↗" tr="Yazılar ↗" />
          </Link>
        </p>
      </section>

      <section className="mt-20" aria-labelledby="stack">
        <h2 id="stack" className="font-stamp text-[clamp(36px,6vw,72px)] uppercase leading-none">
          <T en="Stack" tr="Yığın" />
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.label.en}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-red">
                <T en={group.label.en} tr={group.label.tr} />
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cream/20 px-3 py-1 text-sm text-cream/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="journey">
        <h2
          id="journey"
          className="font-stamp text-[clamp(36px,6vw,72px)] uppercase leading-none"
        >
          <T en="Work history" tr="İş geçmişi" />
        </h2>
        <ol className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
          {experience.map((item) => (
            <li
              key={`${item.place}-${item.years}`}
              className="grid gap-3 py-6 md:grid-cols-[140px_1fr]"
            >
              <div className="text-sm uppercase tracking-[0.08em] text-foreground/55">
                <div className="font-semibold text-foreground/80">{item.years}</div>
                <div>{item.location}</div>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-accent-red"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.place}
                    </a>
                  ) : (
                    item.place
                  )}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.08em] text-accent-blue">
                  <T en={item.role.en} tr={item.role.tr} />
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
                  <T en={item.summary.en} tr={item.summary.tr} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="study">
        <h2 id="study" className="font-stamp text-[clamp(36px,6vw,72px)] uppercase leading-none">
          <T en="Study" tr="Öğrenim" />
        </h2>
        <ol className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
          {education.map((item) => (
            <li key={item.title.en} className="grid gap-3 py-6 md:grid-cols-[140px_1fr]">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground/70">
                {item.years}
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  <T en={item.title.en} tr={item.title.tr} />
                </h3>
                {item.summary ? (
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
                    <T en={item.summary.en} tr={item.summary.tr} />
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
