import { A as AsyncJsonFileStorage } from '../../../../dist/AsyncJsonFileStorage-f092f3e8.esm.js';
import { LocalWallet } from '../../local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import 'fs';
import 'path';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '../../../../dist/walletIds-93948c58.esm.js';
import '../../../../dist/base-0142d377.esm.js';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
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
