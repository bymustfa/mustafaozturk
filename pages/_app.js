import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      {" "}
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
