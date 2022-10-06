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
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
