'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AsyncJsonFileStorage = require('../../../../dist/AsyncJsonFileStorage-b36ac2dd.cjs.dev.js');
var evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet = require('../../local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.cjs.dev.js');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
require('fs');
require('path');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('../../../../dist/walletIds-e86b5140.cjs.dev.js');
require('../../../../dist/base-ac023379.cjs.dev.js');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
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
