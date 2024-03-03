import {
  ThirdwebProvider as TWOld,
  embeddedWallet,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, CLIENT_ID, FACTORY_ADDR, client } from "../utils/constants";
import {
  ThirdwebProvider,
  embeddedWalletConfig,
  smartWalletConfig,
} from "thirdweb/react";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TWOld
      activeChain={BaseSepoliaTestnet}
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
      <ThirdwebProvider
        client={client}
        wallets={[
          smartWalletConfig(embeddedWalletConfig(), {
            chain: CHAIN,
            factoryAddress: FACTORY_ADDR,
            gasless: true,
          }),
          // smartWalletConfig(localWalletConfig(), {
          //   chain: CHAIN,
          //   factoryAddress: FACTORY_ADDR,
          //   gasless: true,
          // }),
        ]}
      >
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ThirdwebProvider>
    </TWOld>
  );
}

export default MyApp;
