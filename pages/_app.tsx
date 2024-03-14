import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, FACTORY_ADDR, client } from "../utils/constants";
import {
  ThirdwebProvider,
  embeddedWalletConfig,
  smartWalletConfig,
} from "thirdweb/react";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      client={client}
      wallets={[
        smartWalletConfig(embeddedWalletConfig(), {
          chain: CHAIN,
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
