import Link from "next/link";
import { T } from "@/components/site/LangText";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-28 text-center">
      <p className="font-stamp text-[clamp(72px,16vw,180px)] leading-none text-cream">
        404
      </p>
      <p className="mt-4 max-w-md text-lg text-foreground/80">
        <T en="This page is not on the site." tr="Bu sayfa sitede yok." />
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase text-black transition-colors hover:bg-accent-red hover:text-cream"
      >
        <T en="Back home" tr="Ana sayfa" />
      </Link>
    </div>
  );
}
