import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { AutoConnect, ThirdwebProvider } from "thirdweb/react";
import { appMetadata, client, wallets } from "../utils/constants";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider>
      {/* <AutoConnect
        wallets={wallets}
        client={client}
        appMetadata={appMetadata}
      /> */}
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
