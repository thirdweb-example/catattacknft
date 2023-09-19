import {
  ThirdwebProvider,
  embeddedWallet,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, CLIENT_ID, FACTORY_ADDR } from "../utils/constants";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={CHAIN}
      clientId={CLIENT_ID}
      supportedWallets={[
        smartWallet(embeddedWallet(), {
          factoryAddress: FACTORY_ADDR,
          gasless: true,
        }),
        smartWallet(localWallet(), {
          factoryAddress: FACTORY_ADDR,
          gasless: true,
        }),
      ]}
    >
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
