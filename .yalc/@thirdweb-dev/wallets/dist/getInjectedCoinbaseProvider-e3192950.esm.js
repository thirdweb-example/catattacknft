import { a as assertWindowEthereum } from './assertWindowEthereum-7e869013.esm.js';

function getInjectedCoinbaseProvider() {
  if (typeof window === "undefined") {
    return;
  }
  function getReady(ethereum) {
    const isCoinbaseWallet = !!ethereum?.isCoinbaseWallet;
    if (isCoinbaseWallet) {
      return ethereum;
    }
    if (ethereum && "overrideIsMetaMask" in ethereum) {
      if ("providerMap" in ethereum) {
        if (ethereum.providerMap instanceof Map) {
          if (ethereum.providerMap.has("CoinbaseWallet")) {
            return ethereum;
          }
        }
      }
    }
  }
  if (assertWindowEthereum(globalThis.window)) {
    if (globalThis.window.ethereum?.providers) {
      return globalThis.window.ethereum.providers.find(getReady);
    }
    return getReady(globalThis.window.ethereum);
  }
}

export { getInjectedCoinbaseProvider as g };
