import type { Metadata } from "next";
import { T } from "@/components/site/LangText";
import { site } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes by Mustafa Öztürk, published on Medium.",
};

type Post = {
  title: string;
  link: string;
  date?: string;
};

async function loadPosts(): Promise<Post[]> {
  try {
    const Parser = (await import("rss-parser")).default;
    const parser = new Parser();
    const feed = await parser.parseURL("https://medium.com/feed/@bymustfa");
    return (feed.items ?? [])
      .filter((item) => item.title && item.link)
      .slice(0, 12)
      .map((item) => ({
        title: item.title as string,
        link: item.link as string,
        date: item.isoDate,
      }));
  } catch {
    return [];
  }
}

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export default async function WritingPage() {
  const posts = await loadPosts();

  return (
    <article className="px-[clamp(18px,4vw,48px)] pb-32 pt-28">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">
          <T en="Writing" tr="Yazı" />
        </p>
        <h1 className="mt-3 font-stamp text-[clamp(64px,12vw,140px)] uppercase leading-[0.86]">
          Medium
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          <T
            en="Longer notes live on Medium under @bymustfa."
            tr="Uzun yazılar Medium'da, @bymustfa altında."
          />
        </p>
        <a
          href={site.links.medium}
          className="mt-6 inline-flex rounded-full bg-accent-red px-4 py-2 text-xs font-semibold uppercase text-cream transition-colors hover:bg-cream hover:text-black"
          rel="noreferrer"
          target="_blank"
        >
          medium.com/@bymustfa ↗
        </a>
      </header>

      {posts.length > 0 ? (
        <ol className="mt-14 divide-y divide-cream/15 border-y border-cream/15">
          {posts.map((post) => (
            <li key={post.link}>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-2 py-6 md:grid-cols-[140px_1fr] md:items-baseline"
              >
                <time className="text-sm uppercase tracking-[0.08em] text-foreground/50">
                  {formatDate(post.date)}
                </time>
                <span className="text-[clamp(22px,3vw,32px)] font-black leading-tight tracking-tight transition-colors group-hover:text-accent-red">
                  {post.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-14 max-w-xl text-foreground/70">
          <T
            en="The Medium feed did not load. The profile link above still opens the archive."
            tr="Medium akışı yüklenmedi. Yukarıdaki profil bağlantısı arşivi açmaya devam eder."
          />
        </p>
      )}
    </article>
  );
}
