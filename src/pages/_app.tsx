import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ChallengesProvider } from "../context/ChallengesContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
    </ChakraProvider>
  );
}

export default MyApp;
