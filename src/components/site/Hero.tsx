import { ReactNode } from "react";
import { T } from "./LangText";

function Glyph() {
  return (
    <span className="hero-word relative inline-flex h-[0.92em] w-[0.92em] items-center justify-center align-[-0.08em]">
      <svg
        viewBox="0 0 64 64"
        className="glyph-a absolute inset-0 h-full w-full text-accent-blue"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M28 4h8l2.2 16.2L52.2 10l5.8 5.8-10.2 14L62 32l-14.2 2.2L58 48.2 52.2 54 38.2 43.8 36 60h-8l-2.2-16.2L11.8 54 6 48.2l10.2-14L2 32l14.2-2.2L6 15.8 11.8 10l14 10.2L28 4Z"
        />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="glyph-b absolute inset-0 h-full w-full text-accent-red"
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M26 12c-8 4-12 10-12 20s4 16 12 20M38 12c8 4 12 10 12 20s-4 16-12 20"
        />
      </svg>
    </span>
  );
}

function Parens() {
  return (
    <span className="hero-word inline-flex items-center" aria-hidden>
      <span className="px-[0.08em] font-sans text-[0.72em] font-light text-cream">
        (
      </span>
      <Glyph />
      <span className="px-[0.08em] font-sans text-[0.72em] font-light text-cream">
        )
      </span>
    </span>
  );
}

function Word({
  children,
  color = "text-cream",
  delay = 0,
}: {
  children: ReactNode;
  color?: string;
  delay?: number;
}) {
  return (
    <span
      className={`hero-word inline-block motion-reduce:animate-none animate-hero-in ${color}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[max(100svh,700px)] flex-col items-center justify-center overflow-hidden bg-background px-[clamp(18px,4vw,40px)] text-center">
      <h1 className="relative z-10 -mb-[6vh] max-w-[18ch] font-stamp text-[clamp(46px,8.1vw,119px)] leading-[1.02] tracking-tight sm:max-w-none">
        <span data-lang="en" className="block">
          <span className="block">
            <Word delay={0}>building</Word> <Parens />{" "}
            <Word delay={90} color="text-accent-red">
              software
            </Word>
          </span>
          <span className="block">
            <Word delay={180}>is</Word> <Word delay={270}>the</Word>{" "}
            <Word delay={360} color="text-accent-blue">
              job.
            </Word>
          </span>
          <span className="block">
            <Word delay={450} color="text-accent-red">
              loving
            </Word>{" "}
            <Word delay={540}>it</Word> <Word delay={630}>is</Word>{" "}
            <Word delay={720}>the</Word> <Parens />{" "}
            <Word delay={810} color="text-accent-blue">
              bonus
            </Word>
          </span>
        </span>
        <span data-lang="tr" className="block">
          <span className="block">
            <Word delay={0}>yazılım</Word> <Parens />{" "}
            <Word delay={90} color="text-accent-red">
              yapmak
            </Word>
          </span>
          <span className="block">
            <Word delay={180}>asıl</Word>{" "}
            <Word delay={270} color="text-accent-blue">
              iş.
            </Word>
          </span>
          <span className="block">
            <Word delay={450} color="text-accent-red">
              sevmek
            </Word>{" "}
            <Word delay={540}>ise</Word> <Parens />{" "}
            <Word delay={720} color="text-accent-blue">
              bonus
            </Word>
          </span>
        </span>
      </h1>
      <a
        href="#intro"
        className="scroll-hint absolute bottom-[clamp(28px,4.4vh,46px)] left-1/2 z-10 -translate-x-1/2 text-accent-blue"
        aria-label="Intro"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 9L12 17L20 9"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <p className="absolute bottom-[6px] left-0 right-0 z-10 text-center text-[9px] font-light tracking-wide text-foreground/30">
        <T en="İstanbul · full-stack & AI" tr="İstanbul · full-stack ve yapay zekâ" />
      </p>
    </section>
  );
}
