import { LocalWallet } from '../../local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.esm.js';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import '../../../../dist/walletIds-18a8e969.esm.js';
import '../../../../dist/base-04cc6f4f.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

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
