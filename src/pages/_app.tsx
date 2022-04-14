import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  shadows: { outline: "0 0 0 3px rgba(183, 148, 244, 0.6)" },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
