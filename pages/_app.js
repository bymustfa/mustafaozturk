import React from "react";
import "@/assets/css/style.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import theme from "@/utils/theme";

import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />

      <Analytics />
    </ChakraProvider>
  );
}
export default appWithTranslation(MyApp);
