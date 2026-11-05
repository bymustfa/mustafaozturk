import { ReactNode } from "react";
import Link from "next/link";
import { placesAndTools } from "@/lib/content";
import { T } from "./LangText";
import { Marquee } from "./Marquee";

function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif text-[0.96em] font-normal italic">{children}</em>;
}

function Strong({
  children,
  color,
}: {
  children: ReactNode;
  color: "red" | "blue";
}) {
  return (
    <strong className={color === "red" ? "text-accent-red" : "text-accent-blue"}>
      {children}
    </strong>
  );
}

export default function Intro() {
  return (
    <section id="intro" className="relative md:h-[120vh]">
      <div className="flex min-h-[100svh] flex-col md:sticky md:top-0 md:h-[100svh] md:min-h-0 md:overflow-hidden">
        <div className="flex flex-1 items-center justify-center px-[clamp(18px,4vw,40px)]">
          <p className="mx-auto max-w-[22ch] text-center text-[clamp(20px,min(3.6vw,4.9vh),40px)] font-medium leading-[1.24] tracking-tight sm:max-w-[28ch] md:max-w-[40ch]">
            <span data-lang="en">
              <span className="text-accent-red">*</span> I&apos;m Mustafa Öztürk, a{" "}
              <Strong color="red">full-stack</Strong> developer and{" "}
              <Strong color="blue">AI engineer</Strong> in Istanbul. I move between{" "}
              <Em>interfaces</Em>, <Em>APIs</Em> and <Em>agents</Em> — and I still care
              about the craft. Currently at <Strong color="blue">Vodafone Türkiye</Strong>
              , previously <Strong color="red">Smartiks</Strong>,{" "}
              <Strong color="blue">Gökkuşağı Yazılım</Strong> and{" "}
              <Strong color="red">Litesoft</Strong>. Make yourself at{" "}
              <Link
                href="/about"
                className="inline-block rounded-full bg-accent-red px-[0.5em] py-[0.05em] align-[0.06em] text-[0.76em] font-bold text-cream transition-colors hover:bg-cream hover:text-black"
              >
                home
              </Link>
              !
            </span>
            <span data-lang="tr">
              <span className="text-accent-red">*</span> Ben Mustafa Öztürk, İstanbul&apos;da{" "}
              <Strong color="red">full-stack</Strong> geliştirici ve{" "}
              <Strong color="blue">AI mühendisiyim</Strong>.{" "}
              <Em>Arayüzler</Em>, <Em>API&apos;ler</Em> ve <Em>ajanlar</Em> arasında
              gidip geliyorum — zanaat hâlâ umurumda. Şu an{" "}
              <Strong color="blue">Vodafone Türkiye</Strong>&apos;deyim, öncesinde{" "}
              <Strong color="red">Smartiks</Strong>,{" "}
              <Strong color="blue">Gökkuşağı Yazılım</Strong> ve{" "}
              <Strong color="red">Litesoft</Strong>. Kendini{" "}
              <Link
                href="/about"
                className="inline-block rounded-full bg-accent-red px-[0.5em] py-[0.05em] align-[0.06em] text-[0.76em] font-bold text-cream transition-colors hover:bg-cream hover:text-black"
              >
                evinde
              </Link>{" "}
              hisset!
            </span>
          </p>
        </div>
        <div className="pb-[clamp(72px,10vh,110px)]">
          <Marquee slow label="Places and tools">
            {placesAndTools.map((name) => (
              <span
                key={name}
                className="whitespace-nowrap text-lg font-medium tracking-tight text-foreground/40 sm:text-xl md:text-2xl"
              >
                {name}
              </span>
            ))}
          </Marquee>
          <p className="sr-only">
            <T
              en="Employers and tools Mustafa already works with."
              tr="Mustafa'nın çalıştığı yerler ve kullandığı araçlar."
            />
          </p>
        </div>
      </div>
    </section>
  );
}
