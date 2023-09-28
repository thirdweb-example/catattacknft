'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet = require('../../local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.cjs.prod.js');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
require('../../../../dist/base-06270032.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');

/* eslint-disable @typescript-eslint/no-var-requires */

class AsyncJsonFileStorage {
  constructor(filePath) {
    this.filePath = require("node:path").resolve(filePath);
  }
  async getItem(key) {
    const content = await require("node:fs/promises").readFile(this.filePath, {
      encoding: "utf-8"
    });
    if (!content) {
      return null;
    }
    const data = JSON.parse(content);
    return data[key];
  }
  async setItem(key, value) {
    // if the file doesn't exist, create it

    try {
      const content = await require("node:fs/promises").readFile(this.filePath, {
        encoding: "utf-8"
      });
      const data = content ? JSON.parse(content) : {};
      data[key] = value;
      await require("node:fs/promises").writeFile(this.filePath, JSON.stringify(data));
    } catch {
      await require("node:fs/promises").writeFile(this.filePath, JSON.stringify({
        [key]: value
      }));
    }
  }
  async removeItem(key) {
    const content = await require("node:fs/promises").readFile(this.filePath, {
      encoding: "utf-8"
    });
    const data = JSON.parse(content);
    delete data[key];
    await require("node:fs/promises").writeFile(this.filePath, JSON.stringify(data));
  }
}

class LocalWalletNode extends evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet.LocalWallet {
  constructor(options) {
    const storage = new AsyncJsonFileStorage(options?.storageJsonFile || "./wallet.json");
    super({
      storage,
      ...options
    });
  }
}

exports.LocalWalletNode = LocalWalletNode;
