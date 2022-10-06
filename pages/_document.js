import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  const title = "Mustafa ÖZTÜRK";
  const description = "Mustafa ÖZTÜRK";
  const keywords = "Mustafa ÖZTÜRK";
  const url = "https://mustafa-ozturk.kim";

  return (
    <Html lang="en">
      <Head>
        <title>Mustafa ÖZTÜRK</title>

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="description" content="" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Vodafone" />
        <meta name="twitter:card" content={description} />
        <meta name="twitter:site" content="Vodafone" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@VodafoneTR" />
        <meta name="search_name" content={title} />
        <meta name="search_description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
