'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AsyncJsonFileStorage = require('../../../../dist/AsyncJsonFileStorage-7d1a2742.cjs.prod.js');
var evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet = require('../../local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.cjs.prod.js');
require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
require('fs');
require('path');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('../../../../dist/walletIds-ecfdb6ad.cjs.prod.js');
require('../../../../dist/base-3accd3fa.cjs.prod.js');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/chains');

class LocalWalletNode extends evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet.LocalWallet {
  constructor(options) {
    const storage = new AsyncJsonFileStorage.AsyncJsonFileStorage(options?.storageJsonFile || "./wallet.json");
    super({
      storage,
      ...options
    });
  }
}

exports.LocalWalletNode = LocalWalletNode;
