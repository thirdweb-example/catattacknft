'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-422af97a.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-f8e3fea3.cjs.prod.js');
var chains = require('@thirdweb-dev/chains');
var ethers = require('ethers');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('eventemitter3');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

const STORAGE_KEY_WALLET_DATA = "deviceWalletData";
var _ethersWallet = /*#__PURE__*/new WeakMap();
var _storage2 = /*#__PURE__*/new WeakMap();
var _saveData = /*#__PURE__*/new WeakSet();
class DeviceWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Device Wallet";
  }
  constructor(options) {
    super(DeviceWallet.id, options);
    /**
     * store the wallet data to storage
     */
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _saveData);
    defineProperty._defineProperty(this, "connector", void 0);
    defineProperty._defineProperty(this, "options", void 0);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _ethersWallet, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _storage2, {
      writable: true,
      value: void 0
    });
    this.options = options || {};
    classPrivateFieldSet._classPrivateFieldSet(this, _storage2, options?.storage || evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.createAsyncLocalStorage("deviceWallet"));
  }
  async getConnector() {
    if (!this.connector) {
      const {
        DeviceWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/device-wallet/dist/thirdweb-dev-wallets-evm-connectors-device-wallet.cjs.prod.js'); });
      if (!classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet)) {
        throw new Error("wallet is not initialized");
      }
      this.connector = new DeviceWalletConnector({
        chain: this.options.chain || chains.Ethereum,
        ethersWallet: classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet),
        chains: this.options.chains || chains.defaultChains
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
    if (classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet)) {
      throw new Error("wallet is already initialized");
    }
    classPrivateFieldSet._classPrivateFieldSet(this, _ethersWallet, ethers.Wallet.createRandom());
    return classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet).address;
  }

  /**
   * create device wallet from an "encryptedJson", "privateKey" or "mnemonic"
   * @returns
   */
  async import(options) {
    if (classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet)) {
      throw new Error("wallet is already initialized");
    }
    if ("encryptedJson" in options) {
      classPrivateFieldSet._classPrivateFieldSet(this, _ethersWallet, await ethers.Wallet.fromEncryptedJson(options.encryptedJson, options.password));
      return classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet).address;
    }
    if ("privateKey" in options) {
      if (!options.encryption && !isValidPrivateKey(options.privateKey)) {
        throw new Error("invalid private key");
      }
      const privateKey = await getDecryptor(options.encryption)(options.privateKey);
      if (options.encryption && (privateKey === "" || !isValidPrivateKey(privateKey))) {
        throw new Error("invalid password");
      }
      classPrivateFieldSet._classPrivateFieldSet(this, _ethersWallet, new ethers.Wallet(privateKey));
      return classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet).address;
    }
    if ("mnemonic" in options) {
      if (!options.encryption && !ethers.utils.isValidMnemonic(options.mnemonic)) {
        throw new Error("invalid mnemonic");
      }
      const mnemonic = await getDecryptor(options.encryption)(options.mnemonic);
      if (options.encryption && (mnemonic === "" || !ethers.utils.isValidMnemonic(mnemonic))) {
        throw new Error("invalid password");
      }
      classPrivateFieldSet._classPrivateFieldSet(this, _ethersWallet, ethers.Wallet.fromMnemonic(mnemonic));
      return classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet).address;
    }
    throw new Error("invalid import strategy");
  }

  /**
   * initialize the wallet from saved data on storage
   * @param password - password used for encrypting the wallet
   */
  async load(options) {
    if (classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet)) {
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
    const wallet = classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet);
    if (!wallet) {
      throw new Error("Wallet is not initialized");
    }
    if (options.strategy === "encryptedJson") {
      const encryptedData = await wallet.encrypt(options.password, {
        scrypt: {
          N: 1 << 32
        }
      });
      await classPrivateMethodGet._classPrivateMethodGet(this, _saveData, _saveData2).call(this, {
        address: wallet.address,
        data: encryptedData,
        strategy: "encryptedJson",
        isEncrypted: true
      }, options.storage);
    }
    if (options.strategy === "privateKey") {
      const privateKey = await getEncryptor(options.encryption)(wallet.privateKey);
      await classPrivateMethodGet._classPrivateMethodGet(this, _saveData, _saveData2).call(this, {
        address: wallet.address,
        data: privateKey,
        strategy: "privateKey",
        isEncrypted: !!options.encryption
      }, options.storage);
    }
    if (options.strategy === "mnemonic") {
      const mnemonic = await getEncryptor(options.encryption)(wallet.mnemonic.phrase);
      await classPrivateMethodGet._classPrivateMethodGet(this, _saveData, _saveData2).call(this, {
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
    await classPrivateFieldSet._classPrivateFieldGet(this, _storage2).removeItem(STORAGE_KEY_WALLET_DATA);
  }

  /**
   * encrypts the wallet with given password and returns the encrypted wallet
   * @param password - password for encrypting the wallet data
   */
  async export(options) {
    const wallet = classPrivateFieldSet._classPrivateFieldGet(this, _ethersWallet);
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
    const _storage = storage || classPrivateFieldSet._classPrivateFieldGet(this, _storage2);
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
  const _storage = storage || classPrivateFieldSet._classPrivateFieldGet(this, _storage2);
  await _storage.setItem(STORAGE_KEY_WALLET_DATA, JSON.stringify(data));
}
defineProperty._defineProperty(DeviceWallet, "id", "deviceWallet");
defineProperty._defineProperty(DeviceWallet, "meta", {
  name: "Device Wallet",
  iconURL: "ipfs://QmcNddbYBuQKiBFnPcxYegjrX6S6z9K1vBNzbBBUJMn2ox/device-wallet.svg"
});
async function defaultEncrypt(message, password) {
  const cryptoJS = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('crypto-js')); })).default;
  return cryptoJS.AES.encrypt(message, password).toString();
}
async function defaultDecrypt(message, password) {
  const cryptoJS = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('crypto-js')); })).default;
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

exports.DeviceWallet = DeviceWallet;
