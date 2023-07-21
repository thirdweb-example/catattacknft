import { BaseGoerli } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  smartWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { FACTORY_ADDR } from "../utils/constants";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// This is the chain your dApp will work on.
const activeChain = BaseGoerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || ""}
      supportedWallets={[
        coinbaseWallet(),
        metamaskWallet(),
        walletConnect(),
        smartWallet({
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
