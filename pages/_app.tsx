import {
  ThirdwebProvider as TWOld,
  embeddedWallet,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, CLIENT_ID, FACTORY_ADDR } from "../utils/constants";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TWOld
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
      <ThirdwebProvider>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ThirdwebProvider>
    </TWOld>
  );
}

export default MyApp;
