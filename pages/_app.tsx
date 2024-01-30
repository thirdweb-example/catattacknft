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

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const swConfig: SmartWalletConfigOptions = {
  factoryAddress: FACTORY_ADDR,
  gasless: true,
  // bundlerUrl: `https://${CHAIN.chainId}.bundler.thirdweb-dev.com`,
  // paymasterUrl: `https://${CHAIN.chainId}.bundler.thirdweb-dev.com`,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={CHAIN}
      clientId={CLIENT_ID}
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
