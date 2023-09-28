import { A as AsyncJsonFileStorage } from '../../../../dist/AsyncJsonFileStorage-90a596f2.browser.esm.js';
import { LocalWallet } from '../../local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.browser.esm.js';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import 'fs';
import 'path';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '../../../../dist/walletIds-1ea97411.browser.esm.js';
import '../../../../dist/base-e1301995.browser.esm.js';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/chains';

class LocalWalletNode extends LocalWallet {
  constructor(options) {
    const storage = new AsyncJsonFileStorage(options?.storageJsonFile || "./wallet.json");
    super({
      storage,
      ...options
    });
  }
}

export { LocalWalletNode };
