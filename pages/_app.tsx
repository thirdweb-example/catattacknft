import { BaseGoerli } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  coinbaseWallet,
  localWallet,
  metamaskWallet,
  paperWallet,
  rainbowWallet,
  safeWallet,
  smartWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, FACTORY_ADDR, CLIENT_ID } from "../utils/constants";

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
        smartWallet({
          factoryAddress: FACTORY_ADDR,
          gasless: true,
          personalWallets: [
            paperWallet({
              paperClientId: CLIENT_ID,
            }),
            localWallet(),
          ],
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
