import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "@/utils/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="tr">
        <Head>
          <title>MUSTAFA ÖZTÜRK</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
