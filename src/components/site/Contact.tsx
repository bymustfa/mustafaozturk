import { site } from "@/lib/content";
import { Marquee } from "./Marquee";
import { T } from "./LangText";

const channels = [
  { href: site.links.github, en: "GitHub", tr: "GitHub" },
  { href: site.links.linkedin, en: "LinkedIn", tr: "LinkedIn" },
  { href: site.links.x, en: "X", tr: "X" },
  { href: site.links.medium, en: "Medium", tr: "Medium" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative pb-28 pt-[clamp(72px,12vh,140px)]">
      <h2 className="sr-only">
        <T en="Contact" tr="İletişim" />
      </h2>
      <div className="relative">
        <Marquee className="font-stamp text-[clamp(40px,9vw,120px)] uppercase leading-[0.95] tracking-tight">
          <span>github.com/bymustfa</span>
          <span className="text-accent-blue">*</span>
          <span>linkedin.com/in/bymustfa</span>
          <span className="text-accent-red">*</span>
        </Marquee>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[clamp(18px,4vw,40px)]">
          <a
            href={site.links.linkedin}
            className="pointer-events-auto rounded-full bg-accent-blue px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.01em] text-black transition-colors hover:bg-cream sm:text-xs"
          >
            <T en="let's talk ↗" tr="konuşalım ↗" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
        <p className="text-sm text-foreground/70">
          <T
            en="No public inbox on this site. The conversation lives on LinkedIn, the code on GitHub."
            tr="Bu sitede açık bir e-posta yok. Konuşma LinkedIn'de, kod GitHub'da."
          />
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.08em]">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                className="text-cream/80 underline-offset-4 transition-colors hover:text-accent-blue hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                <T en={channel.en} tr={channel.tr} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
