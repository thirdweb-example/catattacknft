'use strict';

var assertWindowEthereum = require('./assertWindowEthereum-1a9cc710.cjs.prod.js');

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
  if (assertWindowEthereum.assertWindowEthereum(globalThis.window)) {
    if (globalThis.window.ethereum?.providers) {
      return globalThis.window.ethereum.providers.find(getReady);
    }
    return getReady(globalThis.window.ethereum);
  }
}

exports.getInjectedCoinbaseProvider = getInjectedCoinbaseProvider;
