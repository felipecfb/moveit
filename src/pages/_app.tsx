import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Toast } from "../components/Toast";
import { AuthProvider } from "../context/AuthContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
          <Toast />
          <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
