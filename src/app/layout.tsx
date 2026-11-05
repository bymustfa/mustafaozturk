import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Anton, Archivo, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Nav from "@/components/site/Nav";
import SmoothScroll from "@/components/site/SmoothScroll";
import ViewportFade from "@/components/site/ViewportFade";
import { T } from "@/components/site/LangText";
import { site } from "@/lib/content";

const languageScript = `(function(){var lang=document.documentElement.getAttribute("data-lang")==="tr"?"tr":"en";try{var stored=localStorage.getItem("mo-lang");if(stored==="tr"||stored==="en"){lang=stored;}else{var nav=((navigator.languages&&navigator.languages[0])||navigator.language||"").toLowerCase();lang=nav.indexOf("tr")===0?"tr":"en";localStorage.setItem("mo-lang",lang);}document.cookie="mo-lang="+lang+";path=/;max-age=31536000;SameSite=Lax";}catch(e){}document.documentElement.dataset.lang=lang;document.documentElement.lang=lang==="tr"?"tr":"en";})();`;

const sans = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const stamp = Anton({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-stamp",
  display: "swap",
});

const serif = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Mustafa Öztürk",
    "Mustafa Ozturk",
    "bymustfa",
    "software developer",
    "full-stack",
    "yazılım geliştirici",
    "Istanbul",
    "Vodafone",
  ],
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitter,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mustafa Öztürk",
  alternateName: "bymustfa",
  jobTitle: "Software Developer",
  url: site.url,
  homeLocation: "Istanbul",
  worksFor: { "@type": "Organization", name: "Vodafone Türkiye" },
  sameAs: [site.links.github, site.links.linkedin, site.links.x, site.links.medium],
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const lang = headerList.get("x-mo-lang") === "tr" ? "tr" : "en";

  return (
    <html
      lang={lang}
      data-lang={lang}
      suppressHydrationWarning
      className={`${sans.variable} ${stamp.variable} ${serif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#content" className="skip-link">
          <T en="Skip to content" tr="İçeriğe geç" />
        </a>
        <Nav />
        <ViewportFade />
        <main id="content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
