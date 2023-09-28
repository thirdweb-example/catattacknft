import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import fsModule from 'fs';
import path from 'path';
import { DeviceWallet } from '../../device-wallet/dist/thirdweb-dev-wallets-evm-wallets-device-wallet.browser.esm.js';
import '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-eea39a9a.browser.esm.js';
import '../../../../dist/base-901ad5ac.browser.esm.js';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/chains';

const fs = fsModule.promises;
class AsyncJsonFileStorage {
  constructor(filePath) {
    _defineProperty(this, "filePath", void 0);
    this.filePath = path.resolve(filePath);
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

class DeviceWalletNode extends DeviceWallet {
  constructor(options) {
    const storage = new AsyncJsonFileStorage(options?.storageJsonFile || "./wallet.json");
    super({
      storage,
      ...options
    });
  }
}

export { DeviceWalletNode };
