'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet = require('./smart-wallet-9923590f.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('./base-61a301bf.cjs.dev.js');
var wc = require('./wc-bf863bbf.cjs.dev.js');
var walletIds = require('./walletIds-2f745506.cjs.dev.js');
var WagmiConnector = require('./WagmiConnector-6ff7d562.cjs.dev.js');
var errors = require('./errors-323b40ec.cjs.dev.js');
var normalizeChainId = require('./normalizeChainId-8778491e.cjs.dev.js');
var connector = require('./connector-a63dd9e7.cjs.dev.js');
var getInjectedMetamaskProvider = require('./getInjectedMetamaskProvider-4e3b30b1.cjs.dev.js');
var getInjectedPhantomProvider = require('./getInjectedPhantomProvider-84b0e75f.cjs.dev.js');
var getInjectedRainbowProvider = require('./getInjectedRainbowProvider-3436e57e.cjs.dev.js');
var getInjectedCoinbaseProvider = require('./getInjectedCoinbaseProvider-44030433.cjs.dev.js');
var assertWindowEthereum = require('./assertWindowEthereum-83395b2f.cjs.dev.js');
var evm_wallets_paperWallet_dist_thirdwebDevWalletsEvmWalletsPaperWallet = require('../evm/wallets/paper-wallet/dist/thirdweb-dev-wallets-evm-wallets-paper-wallet.cjs.dev.js');
var evm_wallets_blocto_dist_thirdwebDevWalletsEvmWalletsBlocto = require('../evm/wallets/blocto/dist/thirdweb-dev-wallets-evm-wallets-blocto.cjs.dev.js');
var evm_wallets_coinbaseWallet_dist_thirdwebDevWalletsEvmWalletsCoinbaseWallet = require('../evm/wallets/coinbase-wallet/dist/thirdweb-dev-wallets-evm-wallets-coinbase-wallet.cjs.dev.js');
var evm_wallets_embeddedWallet_dist_thirdwebDevWalletsEvmWalletsEmbeddedWallet = require('../evm/wallets/embedded-wallet/dist/thirdweb-dev-wallets-evm-wallets-embedded-wallet.cjs.dev.js');
var evm_wallets_ethers_dist_thirdwebDevWalletsEvmWalletsEthers = require('../evm/wallets/ethers/dist/thirdweb-dev-wallets-evm-wallets-ethers.cjs.dev.js');
var evm_wallets_frame_dist_thirdwebDevWalletsEvmWalletsFrame = require('../evm/wallets/frame/dist/thirdweb-dev-wallets-evm-wallets-frame.cjs.dev.js');
var evm_wallets_injected_dist_thirdwebDevWalletsEvmWalletsInjected = require('../evm/wallets/injected/dist/thirdweb-dev-wallets-evm-wallets-injected.cjs.dev.js');
var evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet = require('../evm/wallets/local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.cjs.dev.js');
var evm_wallets_magic_dist_thirdwebDevWalletsEvmWalletsMagic = require('../evm/wallets/magic/dist/thirdweb-dev-wallets-evm-wallets-magic.cjs.dev.js');
var evm_wallets_metamask_dist_thirdwebDevWalletsEvmWalletsMetamask = require('../evm/wallets/metamask/dist/thirdweb-dev-wallets-evm-wallets-metamask.cjs.dev.js');
var evm_wallets_phantom_dist_thirdwebDevWalletsEvmWalletsPhantom = require('../evm/wallets/phantom/dist/thirdweb-dev-wallets-evm-wallets-phantom.cjs.dev.js');
var evm_wallets_privateKey_dist_thirdwebDevWalletsEvmWalletsPrivateKey = require('../evm/wallets/private-key/dist/thirdweb-dev-wallets-evm-wallets-private-key.cjs.dev.js');
var evm_wallets_rainbowWallet_dist_thirdwebDevWalletsEvmWalletsRainbowWallet = require('../evm/wallets/rainbow-wallet/dist/thirdweb-dev-wallets-evm-wallets-rainbow-wallet.cjs.dev.js');
var constants = require('./constants-59c3e5a4.cjs.dev.js');
var evm_wallets_safe_dist_thirdwebDevWalletsEvmWalletsSafe = require('../evm/wallets/safe/dist/thirdweb-dev-wallets-evm-wallets-safe.cjs.dev.js');
var evm_wallets_trust_dist_thirdwebDevWalletsEvmWalletsTrust = require('../evm/wallets/trust/dist/thirdweb-dev-wallets-evm-wallets-trust.cjs.dev.js');
var evm_wallets_walletConnect_dist_thirdwebDevWalletsEvmWalletsWalletConnect = require('../evm/wallets/wallet-connect/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect.cjs.dev.js');
var evm_wallets_walletConnectV1_dist_thirdwebDevWalletsEvmWalletsWalletConnectV1 = require('../evm/wallets/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect-v1.cjs.dev.js');
var evm_wallets_zerion_dist_thirdwebDevWalletsEvmWalletsZerion = require('../evm/wallets/zerion/dist/thirdweb-dev-wallets-evm-wallets-zerion.cjs.dev.js');
var embeddedWallet = require('./embedded-wallet-a8627807.cjs.dev.js');
var auth = require('./auth-48859d5f.cjs.dev.js');
require('./classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('./classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('./defineProperty-21d22449.cjs.dev.js');
require('@walletconnect/core');
require('@walletconnect/web3wallet');
require('ethers');
require('eventemitter3');
require('@walletconnect/jsonrpc-utils');
require('@thirdweb-dev/sdk');
require('@thirdweb-dev/chains');
require('../evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('buffer');
require('../evm/connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.cjs.dev.js');
require('@paperxyz/sdk-common-utilities');
require('ethers/lib/utils');

const PREFIX = "__TW__";
class LocalStorage {
  constructor(name) {
    this.name = name;
  }
  getItem(key) {
    return localStorage.getItem(`${PREFIX}/${this.name}/${key}`);
  }
  setItem(key, value) {
    return localStorage.setItem(`${PREFIX}/${this.name}/${key}`, value);
  }
  removeItem(key) {
    return localStorage.removeItem(`${PREFIX}/${this.name}/${key}`);
  }
}
function createLocalStorage(name) {
  return new LocalStorage(name);
}

class CredentialsStorage {
  async getItem() {
    const credential = await navigator.credentials.get({
      password: true,
      unmediated: true
    });
    if (credential && "password" in credential) {
      return credential.password;
    }
    return null;
  }
  async setItem(key, value) {
    const credential = await navigator.credentials.create({
      password: {
        id: key,
        name: key,
        password: value
      }
    });
    if (!credential) {
      throw new Error("Credential not created");
    }
    await navigator.credentials.store(credential);
  }
  async removeItem() {
    // Question: is there any way to remove a credential?
    const credential = await navigator.credentials.get({
      password: true,
      unmediated: true
    });
    if (credential) {
      await navigator.credentials.preventSilentAccess();
    }
  }
}

exports.SmartWallet = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.SmartWallet;
exports.WalletConnectHandler = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.WalletConnectHandler;
exports.WalletConnectV2Handler = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.WalletConnectV2Handler;
exports.getAllSigners = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.getAllSigners;
exports.getAllSmartWallets = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.getAllSmartWallets;
exports.getSmartWalletAddress = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.getSmartWalletAddress;
exports.isSmartWalletDeployed = evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.isSmartWalletDeployed;
exports.AbstractClientWallet = evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet;
exports.AsyncLocalStorage = evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AsyncLocalStorage;
exports.DEFAULT_DAPP_META = evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.DEFAULT_DAPP_META;
exports.createAsyncLocalStorage = evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.createAsyncLocalStorage;
exports.EIP155_SIGNING_METHODS = wc.EIP155_SIGNING_METHODS;
exports.walletIds = walletIds.walletIds;
exports.WagmiConnector = WagmiConnector.WagmiConnector;
exports.AddChainError = errors.AddChainError;
exports.ChainNotConfiguredError = errors.ChainNotConfiguredError;
exports.ProviderRpcError = errors.ProviderRpcError;
exports.SwitchChainError = errors.SwitchChainError;
exports.UserRejectedRequestError = errors.UserRejectedRequestError;
exports.normalizeChainId = normalizeChainId.normalizeChainId;
exports.Connector = connector.Connector;
exports.WagmiAdapter = connector.WagmiAdapter;
exports.getInjectedMetamaskProvider = getInjectedMetamaskProvider.getInjectedMetamaskProvider;
exports.getInjectedPhantomProvider = getInjectedPhantomProvider.getInjectedPhantomProvider;
exports.getInjectedRainbowProvider = getInjectedRainbowProvider.getInjectedRainbowProvider;
exports.getInjectedCoinbaseProvider = getInjectedCoinbaseProvider.getInjectedCoinbaseProvider;
exports.assertWindowEthereum = assertWindowEthereum.assertWindowEthereum;
exports.PaperWallet = evm_wallets_paperWallet_dist_thirdwebDevWalletsEvmWalletsPaperWallet.PaperWallet;
exports.BloctoWallet = evm_wallets_blocto_dist_thirdwebDevWalletsEvmWalletsBlocto.BloctoWallet;
exports.CoinbaseWallet = evm_wallets_coinbaseWallet_dist_thirdwebDevWalletsEvmWalletsCoinbaseWallet.CoinbaseWallet;
exports.EmbeddedWallet = evm_wallets_embeddedWallet_dist_thirdwebDevWalletsEvmWalletsEmbeddedWallet.EmbeddedWallet;
exports.EthersWallet = evm_wallets_ethers_dist_thirdwebDevWalletsEvmWalletsEthers.EthersWallet;
exports.FrameWallet = evm_wallets_frame_dist_thirdwebDevWalletsEvmWalletsFrame.FrameWallet;
exports.InjectedWallet = evm_wallets_injected_dist_thirdwebDevWalletsEvmWalletsInjected.InjectedWallet;
exports.LocalWallet = evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet.LocalWallet;
exports.isValidPrivateKey = evm_wallets_localWallet_dist_thirdwebDevWalletsEvmWalletsLocalWallet.isValidPrivateKey;
exports.MagicLink = evm_wallets_magic_dist_thirdwebDevWalletsEvmWalletsMagic.MagicLink;
exports.MetaMaskWallet = evm_wallets_metamask_dist_thirdwebDevWalletsEvmWalletsMetamask.MetaMaskWallet;
exports.PhantomWallet = evm_wallets_phantom_dist_thirdwebDevWalletsEvmWalletsPhantom.PhantomWallet;
exports.PrivateKeyWallet = evm_wallets_privateKey_dist_thirdwebDevWalletsEvmWalletsPrivateKey.PrivateKeyWallet;
exports.RainbowWallet = evm_wallets_rainbowWallet_dist_thirdwebDevWalletsEvmWalletsRainbowWallet.RainbowWallet;
exports.SafeSupportedChainsSet = constants.SafeSupportedChainsSet;
exports.SafeWallet = evm_wallets_safe_dist_thirdwebDevWalletsEvmWalletsSafe.SafeWallet;
exports.TrustWallet = evm_wallets_trust_dist_thirdwebDevWalletsEvmWalletsTrust.TrustWallet;
exports.WalletConnect = evm_wallets_walletConnect_dist_thirdwebDevWalletsEvmWalletsWalletConnect.WalletConnect;
exports.WalletConnectV1 = evm_wallets_walletConnectV1_dist_thirdwebDevWalletsEvmWalletsWalletConnectV1.WalletConnectV1;
exports.ZerionWallet = evm_wallets_zerion_dist_thirdwebDevWalletsEvmWalletsZerion.ZerionWallet;
exports.AUTH_TOKEN_LOCAL_STORAGE_NAME = embeddedWallet.AUTH_TOKEN_LOCAL_STORAGE_NAME;
exports.DEVICE_SHARE_LOCAL_STORAGE_NAME = embeddedWallet.DEVICE_SHARE_LOCAL_STORAGE_NAME;
exports.DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED = embeddedWallet.DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED;
exports.EmbeddedWalletSdk = embeddedWallet.EmbeddedWalletSdk;
exports.UserStatus = embeddedWallet.UserStatus;
exports.WALLET_USER_DETAILS_LOCAL_STORAGE_NAME = embeddedWallet.WALLET_USER_DETAILS_LOCAL_STORAGE_NAME;
exports.WALLET_USER_ID_LOCAL_STORAGE_NAME = embeddedWallet.WALLET_USER_ID_LOCAL_STORAGE_NAME;
exports.AuthProvider = auth.AuthProvider;
exports.RecoveryShareManagement = auth.RecoveryShareManagement;
exports.CredentialsStorage = CredentialsStorage;
exports.LocalStorage = LocalStorage;
exports.createLocalStorage = createLocalStorage;
