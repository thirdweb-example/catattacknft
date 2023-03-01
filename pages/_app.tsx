import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BaseGoerli } from "@thirdweb-dev/chains";

import "tailwindcss/tailwind.css";

// This is the chain your dApp will work on.
const activeChain = BaseGoerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
