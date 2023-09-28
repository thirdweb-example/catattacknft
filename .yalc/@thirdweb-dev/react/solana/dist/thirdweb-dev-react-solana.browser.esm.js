import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { ThirdwebSDKProvider } from '@thirdweb-dev/react-core/solana';
export * from '@thirdweb-dev/react-core/solana';
import { getUrlForNetwork } from '@thirdweb-dev/sdk/solana';
import { jsx } from 'react/jsx-runtime';

const DEFAULT_WALLETS = [new PhantomWalletAdapter()];

/**
 * Gives access to the ThirdwebSDK instance and other useful hooks to the rest of the app.
 * Requires to be wrapped with a ConnectionProvider and a WalletProvider from @solana/wallet-adapter-react.
 * @example
 * ```tsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
 *
 * const App = () => {
 *  return (
 *     <ThirdwebProvider network="devnet">
 *       <YourApp />
 *     </ThirdwebProvider>
 * )};
 * ```
 * @beta
 */
const ThirdwebProvider = _ref => {
  let {
    network,
    wallets = DEFAULT_WALLETS,
    autoConnect = true,
    children
  } = _ref;
  const clusterUrl = getUrlForNetwork(network);
  return /*#__PURE__*/jsx(ConnectionProvider, {
    endpoint: clusterUrl,
    children: /*#__PURE__*/jsx(WalletProvider, {
      wallets: wallets,
      autoConnect: autoConnect,
      children: /*#__PURE__*/jsx(ThirdwebWrapperProvider, {
        network: network,
        children: children
      })
    })
  });
};

/**
 * @internal
 */
const ThirdwebWrapperProvider = _ref2 => {
  let {
    network,
    children
  } = _ref2;
  const wallet = useWallet();
  return /*#__PURE__*/jsx(ThirdwebSDKProvider, {
    network: network,
    wallet: wallet,
    children: children
  });
};

export { ThirdwebProvider, ThirdwebWrapperProvider };
