import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, inAppWallet, localWallet, metamaskWallet, smartWallet, walletConnect } from "@thirdweb-dev/react";
import { ChakraProvider, background, extendTheme } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const activeChain = "ethereum";
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;
const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: '#070707',
        color: '#e7e8e8',
        fontFamily: 'Inter, sans-serif',
      }
    }
  }
})

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const smartWalletConfig = {
    factoryAddress: "",
    gasless: true,
  }
  return (
    <QueryClientProvider client={reactQueryClient}>
      <ThirdwebProvider
        clientId={CLIENT_ID}
        activeChain={activeChain}
        supportedWallets={[
          // smartWallet(metamaskWallet(), smartWalletConfig())
          // embeddedWallet(),
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          localWallet(),
          inAppWallet({
            auth: {
              options: ["email", "google"],
            },
          }),
        ]}
      >
        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
