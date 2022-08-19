import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import { RegisterProvider } from "../context/RegisterContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RegisterProvider>
          <Component {...pageProps} />
        </RegisterProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
