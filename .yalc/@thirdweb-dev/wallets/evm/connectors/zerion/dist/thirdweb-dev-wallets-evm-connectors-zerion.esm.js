import { InjectedConnector } from '../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.esm.js';
import { a as assertWindowEthereum } from '../../../../dist/assertWindowEthereum-7e869013.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '../../../../dist/url-453bcd09.esm.js';
import '@thirdweb-dev/chains';
import 'ethers';
import '../../../../dist/WagmiConnector-6011bbb1.esm.js';
import 'eventemitter3';
import '../../../../dist/normalizeChainId-dd5a6036.esm.js';
import '../../../../dist/errors-b9032b4e.esm.js';

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
        if (typeof window === "undefined") {
          return;
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
