import {
  SmartWalletConfigOptions,
  ThirdwebProvider,
  embeddedWallet,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, CLIENT_ID, FACTORY_ADDR } from "../utils/constants";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const swConfig: SmartWalletConfigOptions = {
  factoryAddress: FACTORY_ADDR,
  gasless: true,
  bundlerUrl: `https://${CHAIN.chainId}.bundler.thirdweb-dev.com`,
  paymasterUrl: `https://${CHAIN.chainId}.bundler.thirdweb-dev.com`,
  // bundlerUrl: `http://0.0.0.0:8787?chain=${CHAIN.chainId}`,
  // paymasterUrl: `http://0.0.0.0:8787/v2?chain=${CHAIN.chainId}`,
};

function MyApp({ Component, pageProps }: AppProps) {
  const [clientId, setClientId] = useState<string | null>(null);
  useEffect(() => {
    setClientId(localStorage.getItem("TW_CLIENT_ID") || CLIENT_ID);
    localStorage.setItem("IS_THIRDWEB_DEV", "true");
    localStorage.setItem(
      "THIRDWEB_DEV_URL",
      "https://embedded-wallet.thirdweb-dev.com"
    );
  }, []);
  return (
    <ThirdwebProvider
      activeChain={CHAIN}
      clientId={clientId || CLIENT_ID}
      sdkOptions={{
        gatewayUrls: ["https://ipfs.io/ipfs/"],
      }}
      supportedWallets={[
        // smartWallet(embeddedWallet(), swConfig),
        smartWallet(localWallet(), swConfig),
      ]}
    >
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
