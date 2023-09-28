import { InjectedConnector } from '../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js';
import { a as assertWindowEthereum } from '../../../../dist/assertWindowEthereum-b48c1686.browser.esm.js';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '../../../../dist/url-bc88b2b6.browser.esm.js';
import '@thirdweb-dev/chains';
import 'ethers';
import '../../../../dist/WagmiConnector-2f14002d.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';
import '../../../../dist/errors-d961f852.browser.esm.js';

class ZerionConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Zerion",
      getProvider() {
        function getReady(ethereum) {
          const isZerion = !!ethereum?.isZerion;
          if (!isZerion) {
            return;
          }
          return ethereum;
        }
        if (assertWindowEthereum(globalThis.window)) {
          if (globalThis.window.ethereum?.providers) {
            return globalThis.window.ethereum.providers.find(getReady);
          }
          return getReady(globalThis.window.ethereum);
        }
      }
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage
    });
  }
}

export { ZerionConnector };
