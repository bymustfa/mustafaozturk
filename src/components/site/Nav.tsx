"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const LANG_KEY = "mo-lang";

function setLang(next: "en" | "tr") {
  document.documentElement.dataset.lang = next;
  document.documentElement.lang = next === "tr" ? "tr" : "en";
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch {
    /* private mode */
  }
  document.cookie = `${LANG_KEY}=${next};path=/;max-age=31536000;SameSite=Lax`;
}

export default function Nav() {
  const pathname = usePathname();
  const workActive = pathname === "/work" || pathname.startsWith("/work/");
  const aboutActive = pathname === "/about";

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>("[data-set-lang]");
    const sync = () => {
      const current = document.documentElement.dataset.lang === "tr" ? "tr" : "en";
      buttons.forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          button.dataset.setLang === current ? "true" : "false",
        );
      });
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-lang"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <nav
        aria-label="Primary"
        className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex items-start justify-between bg-gradient-to-b from-background via-background/85 to-transparent px-[clamp(17px,2.9vw,34px)] pb-8 pt-[clamp(12px,1.7vw,22px)]"
      >
        <Link
          href="/"
          aria-label="Mustafa Öztürk, home"
          className="pointer-events-auto -ml-0.5 mt-0.5"
        >
          {/* Plain img so the GIF keeps looping. next/image would flatten it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/owl-mark.gif"
            srcSet="/owl-mark.gif 1x, /owl-mark@2x.gif 2x"
            width={40}
            height={40}
            alt="Mustafa Öztürk, home"
            className="block h-[clamp(28px,4vw,40px)] w-[clamp(28px,4vw,40px)]"
          />
        </Link>
        <div className="pointer-events-none absolute left-1/2 top-[clamp(16px,2.2vw,30px)] -translate-x-1/2">
          <div className="pointer-events-auto flex items-center font-sans text-[clamp(11px,1.5vw,13px)] font-bold uppercase tracking-[0.08em] text-cream">
            <button
              type="button"
              data-set-lang="en"
              className="lang-en px-[3px]"
              aria-pressed="true"
              aria-label="View in English"
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span aria-hidden className="opacity-30">
              /
            </span>
            <button
              type="button"
              data-set-lang="tr"
              className="lang-tr px-[3px]"
              aria-pressed="false"
              aria-label="Türkçe görüntüle"
              onClick={() => setLang("tr")}
            >
              TR
            </button>
          </div>
        </div>
        <Link
          href="/work"
          className={cn(
            "nav-link pointer-events-auto py-1 font-sans text-[clamp(20px,3.5vw,28px)] font-bold",
            workActive && "underline decoration-accent-blue decoration-2 underline-offset-4",
          )}
        >
          <span data-lang="en">work</span>
          <span data-lang="tr">işler</span>
        </Link>
      </nav>
      <nav
        aria-label="Secondary"
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 flex items-end justify-between px-[clamp(17px,2.9vw,34px)] pb-[clamp(12px,1.7vw,22px)] pt-8"
      >
        <Link
          href="/about"
          className={cn(
            "nav-link pointer-events-auto py-1 font-sans text-[clamp(20px,3.5vw,28px)] font-bold",
            aboutActive && "underline decoration-accent-blue decoration-2 underline-offset-4",
          )}
        >
          <span data-lang="en">about</span>
          <span data-lang="tr">hakkımda</span>
        </Link>
        <Link
          href="/#contact"
          className="pointer-events-auto py-1 font-sans text-[clamp(20px,3.5vw,28px)] font-bold text-accent-red transition-colors duration-200 hover:text-cream"
        >
          <span data-lang="en">contact</span>
          <span data-lang="tr">iletişim</span>
        </Link>
      </nav>
    </header>
  );
}
