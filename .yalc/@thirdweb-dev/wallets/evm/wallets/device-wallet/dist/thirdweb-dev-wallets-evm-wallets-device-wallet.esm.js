import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-0ee02dfd.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { a as AbstractClientWallet, c as createAsyncLocalStorage } from '../../../../dist/base-9746420d.esm.js';
import { Ethereum, defaultChains } from '@thirdweb-dev/chains';
import { Wallet, utils } from 'ethers';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'eventemitter3';

const STORAGE_KEY_WALLET_DATA = "deviceWalletData";
var _ethersWallet = /*#__PURE__*/new WeakMap();
var _storage2 = /*#__PURE__*/new WeakMap();
var _saveData = /*#__PURE__*/new WeakSet();
class DeviceWallet extends AbstractClientWallet {
  get walletName() {
    return "Device Wallet";
  }
  constructor(options) {
    super(DeviceWallet.id, options);
    /**
     * store the wallet data to storage
     */
    _classPrivateMethodInitSpec(this, _saveData);
    _defineProperty(this, "connector", void 0);
    _defineProperty(this, "options", void 0);
    _classPrivateFieldInitSpec(this, _ethersWallet, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _storage2, {
      writable: true,
      value: void 0
    });
    this.options = options || {};
    _classPrivateFieldSet(this, _storage2, options?.storage || createAsyncLocalStorage("deviceWallet"));
  }
  async getConnector() {
    if (!this.connector) {
      const {
        DeviceWalletConnector
      } = await import('../../../connectors/device-wallet/dist/thirdweb-dev-wallets-evm-connectors-device-wallet.esm.js');
      if (!_classPrivateFieldGet(this, _ethersWallet)) {
        throw new Error("wallet is not initialized");
      }
      this.connector = new DeviceWalletConnector({
        chain: this.options.chain || Ethereum,
        ethersWallet: _classPrivateFieldGet(this, _ethersWallet),
        chains: this.options.chains || defaultChains
      });
    }
    return this.connector;
  }

  /**
   * load saved wallet data from storage or generate a new one and save it
   */
  async loadOrCreate(options) {
    if (await this.isSaved()) {
      await this.load(options);
    } else {
      await this.generate();
      await this.save(options);
    }
  }

  /**
   * creates a new random wallet
   * @returns the address of the newly created wallet
   */
  async generate() {
    if (_classPrivateFieldGet(this, _ethersWallet)) {
      throw new Error("wallet is already initialized");
    }
    _classPrivateFieldSet(this, _ethersWallet, Wallet.createRandom());
    return _classPrivateFieldGet(this, _ethersWallet).address;
  }

  /**
   * create device wallet from an "encryptedJson", "privateKey" or "mnemonic"
   * @returns
   */
  async import(options) {
    if (_classPrivateFieldGet(this, _ethersWallet)) {
      throw new Error("wallet is already initialized");
    }
    if ("encryptedJson" in options) {
      _classPrivateFieldSet(this, _ethersWallet, await Wallet.fromEncryptedJson(options.encryptedJson, options.password));
      return _classPrivateFieldGet(this, _ethersWallet).address;
    }
    if ("privateKey" in options) {
      if (!options.encryption && !isValidPrivateKey(options.privateKey)) {
        throw new Error("invalid private key");
      }
      const privateKey = await getDecryptor(options.encryption)(options.privateKey);
      if (options.encryption && (privateKey === "" || !isValidPrivateKey(privateKey))) {
        throw new Error("invalid password");
      }
      _classPrivateFieldSet(this, _ethersWallet, new Wallet(privateKey));
      return _classPrivateFieldGet(this, _ethersWallet).address;
    }
    if ("mnemonic" in options) {
      if (!options.encryption && !utils.isValidMnemonic(options.mnemonic)) {
        throw new Error("invalid mnemonic");
      }
      const mnemonic = await getDecryptor(options.encryption)(options.mnemonic);
      if (options.encryption && (mnemonic === "" || !utils.isValidMnemonic(mnemonic))) {
        throw new Error("invalid password");
      }
      _classPrivateFieldSet(this, _ethersWallet, Wallet.fromMnemonic(mnemonic));
      return _classPrivateFieldGet(this, _ethersWallet).address;
    }
    throw new Error("invalid import strategy");
  }

  /**
   * initialize the wallet from saved data on storage
   * @param password - password used for encrypting the wallet
   */
  async load(options) {
    if (_classPrivateFieldGet(this, _ethersWallet)) {
      throw new Error("wallet is already initialized");
    }
    const walletData = await this.getSavedData(options.storage);
    if (!walletData) {
      throw new Error("No Saved wallet found in storage");
    }

    // strategy mismatch
    if (walletData.strategy !== options.strategy) {
      throw new Error(`Saved wallet data is not ${options.strategy}, it is ${walletData.strategy}`);
    }
    if (options.strategy === "encryptedJson") {
      return this.import({
        encryptedJson: walletData.data,
        password: options.password
      });
    }

    // encryption mismatch
    if (walletData.isEncrypted && !options.encryption) {
      throw new Error("Saved wallet data is encrypted, but no password is provided");
    }
    if (!walletData.isEncrypted && options.encryption) {
      throw new Error("Saved wallet data is not encrypted, but encryption config is provided");
    }
    if (options.strategy === "privateKey") {
      return this.import({
        privateKey: walletData.data,
        encryption: options.encryption
      });
    }
    if (options.strategy === "mnemonic") {
      return this.import({
        mnemonic: walletData.data,
        encryption: options.encryption
      });
    }
    throw new Error("invalid load strategy");
  }

  /**
   * Save the wallet data to storage
   */
  async save(options) {
    const wallet = _classPrivateFieldGet(this, _ethersWallet);
    if (!wallet) {
      throw new Error("Wallet is not initialized");
    }
    if (options.strategy === "encryptedJson") {
      const encryptedData = await wallet.encrypt(options.password, {
        scrypt: {
          N: 1 << 32
        }
      });
      await _classPrivateMethodGet(this, _saveData, _saveData2).call(this, {
        address: wallet.address,
        data: encryptedData,
        strategy: "encryptedJson",
        isEncrypted: true
      }, options.storage);
    }
    if (options.strategy === "privateKey") {
      const privateKey = await getEncryptor(options.encryption)(wallet.privateKey);
      await _classPrivateMethodGet(this, _saveData, _saveData2).call(this, {
        address: wallet.address,
        data: privateKey,
        strategy: "privateKey",
        isEncrypted: !!options.encryption
      }, options.storage);
    }
    if (options.strategy === "mnemonic") {
      const mnemonic = await getEncryptor(options.encryption)(wallet.mnemonic.phrase);
      await _classPrivateMethodGet(this, _saveData, _saveData2).call(this, {
        address: wallet.address,
        data: mnemonic,
        strategy: "mnemonic",
        isEncrypted: !!options.encryption
      }, options.storage);
    }
  }

  /**
   * @returns true if wallet data is saved in storage
   */
  async isSaved() {
    try {
      const data = await this.getSavedData();
      return !!data;
    } catch (e) {
      return false;
    }
  }

  /**
   * deletes the saved wallet data from storage
   */
  async deleteSaved() {
    await _classPrivateFieldGet(this, _storage2).removeItem(STORAGE_KEY_WALLET_DATA);
  }

  /**
   * encrypts the wallet with given password and returns the encrypted wallet
   * @param password - password for encrypting the wallet data
   */
  async export(options) {
    const wallet = _classPrivateFieldGet(this, _ethersWallet);
    if (!wallet) {
      throw new Error("Wallet is not initialized");
    }
    if (options.strategy === "encryptedJson") {
      return wallet.encrypt(options.password, {
        scrypt: {
          N: 1 << 32
        }
      });
    }
    if (options.strategy === "privateKey") {
      return getEncryptor(options.encryption)(wallet.privateKey);
    }
    if (options.strategy === "mnemonic") {
      if (!wallet.mnemonic) {
        throw new Error("mnemonic can not be computed if wallet is created from a private key");
      }
      return getEncryptor(options.encryption)(wallet.mnemonic.phrase);
    }
    throw new Error("Invalid export strategy");
  }

  /**
   * Get the saved wallet data from storage
   */
  async getSavedData(storage) {
    const _storage = storage || _classPrivateFieldGet(this, _storage2);
    const savedDataStr = await _storage.getItem(STORAGE_KEY_WALLET_DATA);
    if (!savedDataStr) {
      return null;
    }
    try {
      const savedData = JSON.parse(savedDataStr);
      if (!savedData) {
        return null;
      }
      return savedData;
    } catch (e) {
      return null;
    }
  }
}
async function _saveData2(data, storage) {
  const _storage = storage || _classPrivateFieldGet(this, _storage2);
  await _storage.setItem(STORAGE_KEY_WALLET_DATA, JSON.stringify(data));
}
_defineProperty(DeviceWallet, "id", "deviceWallet");
_defineProperty(DeviceWallet, "meta", {
  name: "Device Wallet",
  iconURL: "ipfs://QmcNddbYBuQKiBFnPcxYegjrX6S6z9K1vBNzbBBUJMn2ox/device-wallet.svg"
});
async function defaultEncrypt(message, password) {
  const cryptoJS = (await import('crypto-js')).default;
  return cryptoJS.AES.encrypt(message, password).toString();
}
async function defaultDecrypt(message, password) {
  const cryptoJS = (await import('crypto-js')).default;
  return cryptoJS.AES.decrypt(message, password).toString(cryptoJS.enc.Utf8);
}

/**
 * if encryption object is provided
 *  - return the encryption.decrypt function if given, else return the default decrypt function
 * if encryption object is not provided
 * - return a noop function
 * @returns
 */
function getDecryptor(encryption) {
  const noop = async msg => msg;
  return encryption ? msg => (encryption.decrypt || defaultDecrypt)(msg, encryption.password) : noop;
}

/**
 * if encryption object is provided
 *  - return the encryption.encrypt function if given, else return the default encrypt function
 * if encryption object is not provided
 * - return a noop function
 * @returns
 */
function getEncryptor(encryption) {
  const noop = async msg => msg;
  return encryption ? msg => (encryption.encrypt || defaultEncrypt)(msg, encryption.password) : noop;
}
function isValidPrivateKey(value) {
  return value.match(/^(0x)?[0-9a-f]{64}$/i);
}

export { DeviceWallet };
