import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Rubik } from "next/font/google";
import { cn, siteConfig } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - Software Developer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "portfolio",
    "mustafa",
    "mustafa öztürk",
    "mustafa öztürk kim",
    "mustafa öztürk portfolio",
    "öztürk",
    "öztürk kim",
    "öztürk portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
  ],
  authors: [
    {
      name: "Mustafa ÖZTÜRK",
      url: "https://github.com/bymustfa",
    },
  ],
  creator: "Mustafa ÖZTÜRK",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/me.jpg`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/me.jpg`],
    creator: "@_bymustfa",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between py-14  px-40 max-md:p-4 bg-transparent max-sm:pb-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" },
          )}
        >
          {children}
          <Navbar />
        </main>
      </body>
    </html>
  );
}
