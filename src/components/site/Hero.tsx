import { ReactNode } from "react";
import { T } from "./LangText";

function Mark({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex h-[0.92em] w-[0.92em] items-center justify-center align-[-0.08em] ${color}`}
    >
      {children}
    </span>
  );
}

function CubeMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" aria-hidden>
      <path
        d="M32 10 52 21 32 32 12 21Z"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 21v20l20 11V32"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 21v20L32 52"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      <path
        fill="currentColor"
        d="M32 6 38.2 25.8 58 32 38.2 38.2 32 58 25.8 38.2 6 32l19.8-6.2Z"
      />
    </svg>
  );
}

function Parens({ children }: { children: ReactNode }) {
  return (
    <span className="hero-word inline-flex items-center" aria-hidden>
      <span className="px-[0.08em] font-sans text-[0.72em] font-light text-cream">
        (
      </span>
      {children}
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
            <Word delay={0}>building</Word>{" "}
            <Parens>
              <Mark color="text-accent-blue">
                <CubeMark />
              </Mark>
            </Parens>{" "}
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
            <Word delay={720}>the</Word>{" "}
            <Parens>
              <Mark color="text-accent-red">
                <SparkMark />
              </Mark>
            </Parens>{" "}
            <Word delay={810} color="text-accent-blue">
              bonus
            </Word>
          </span>
        </span>
        <span data-lang="tr" className="block">
          <span className="block">
            <Word delay={0}>yazılım</Word>{" "}
            <Parens>
              <Mark color="text-accent-blue">
                <CubeMark />
              </Mark>
            </Parens>{" "}
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
            <Word delay={540}>ise</Word>{" "}
            <Parens>
              <Mark color="text-accent-red">
                <SparkMark />
              </Mark>
            </Parens>{" "}
            <Word delay={720} color="text-accent-blue">
              bonus
            </Word>
          </span>
        </span>
      </h1>
      <a
        href="#intro"
        className="scroll-hint absolute bottom-[clamp(28px,4.4vh,46px)] left-1/2 z-[45] -translate-x-1/2 text-accent-blue"
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
      <p className="absolute bottom-[6px] left-0 right-0 z-[45] text-center text-[9px] font-light tracking-wide text-foreground/30">
        <T en="İstanbul · full-stack & AI" tr="İstanbul · full-stack ve yapay zekâ" />
      </p>
    </section>
  );
}
