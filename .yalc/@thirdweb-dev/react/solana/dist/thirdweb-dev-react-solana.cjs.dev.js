'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletAdapterPhantom = require('@solana/wallet-adapter-phantom');
var walletAdapterReact = require('@solana/wallet-adapter-react');
var solana = require('@thirdweb-dev/react-core/solana');
var solana$1 = require('@thirdweb-dev/sdk/solana');
var jsxRuntime = require('react/jsx-runtime');

const DEFAULT_WALLETS = [new walletAdapterPhantom.PhantomWalletAdapter()];

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
  const clusterUrl = solana$1.getUrlForNetwork(network);
  return /*#__PURE__*/jsxRuntime.jsx(walletAdapterReact.ConnectionProvider, {
    endpoint: clusterUrl,
    children: /*#__PURE__*/jsxRuntime.jsx(walletAdapterReact.WalletProvider, {
      wallets: wallets,
      autoConnect: autoConnect,
      children: /*#__PURE__*/jsxRuntime.jsx(ThirdwebWrapperProvider, {
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
  const wallet = walletAdapterReact.useWallet();
  return /*#__PURE__*/jsxRuntime.jsx(solana.ThirdwebSDKProvider, {
    network: network,
    wallet: wallet,
    children: children
  });
};

exports.ThirdwebProvider = ThirdwebProvider;
exports.ThirdwebWrapperProvider = ThirdwebWrapperProvider;
Object.keys(solana).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return solana[k]; }
  });
});
