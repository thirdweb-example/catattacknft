'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var fsModule = require('fs');
var path = require('path');
var evm_wallets_deviceWallet_dist_thirdwebDevWalletsEvmWalletsDeviceWallet = require('../../device-wallet/dist/thirdweb-dev-wallets-evm-wallets-device-wallet.cjs.prod.js');
require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-422af97a.cjs.prod.js');
require('../../../../dist/base-f8e3fea3.cjs.prod.js');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/chains');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var fsModule__default = /*#__PURE__*/_interopDefault(fsModule);
var path__default = /*#__PURE__*/_interopDefault(path);

const fs = fsModule__default["default"].promises;
class AsyncJsonFileStorage {
  constructor(filePath) {
    defineProperty._defineProperty(this, "filePath", void 0);
    this.filePath = path__default["default"].resolve(filePath);
  }
  async getItem(key) {
    const content = await fs.readFile(this.filePath, {
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
      const content = await fs.readFile(this.filePath, {
        encoding: "utf-8"
      });
      const data = content ? JSON.parse(content) : {};
      data[key] = value;
      await fs.writeFile(this.filePath, JSON.stringify(data));
    } catch {
      await fs.writeFile(this.filePath, JSON.stringify({
        [key]: value
      }));
    }
  }
  async removeItem(key) {
    const content = await fs.readFile(this.filePath, {
      encoding: "utf-8"
    });
    const data = JSON.parse(content);
    delete data[key];
    await fs.writeFile(this.filePath, JSON.stringify(data));
  }
}

class DeviceWalletNode extends evm_wallets_deviceWallet_dist_thirdwebDevWalletsEvmWalletsDeviceWallet.DeviceWallet {
  constructor(options) {
    const storage = new AsyncJsonFileStorage(options?.storageJsonFile || "./wallet.json");
    super({
      storage,
      ...options
    });
  }
}

exports.DeviceWalletNode = DeviceWalletNode;
