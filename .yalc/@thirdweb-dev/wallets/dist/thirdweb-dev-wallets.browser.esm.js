export { S as SmartWallet, a as WalletConnectHandler, W as WalletConnectV2Handler, g as getAllSigners, b as getAllSmartWallets, c as getSmartWalletAddress, i as isSmartWalletDeployed } from './smart-wallet-45de7330.browser.esm.js';
export { a as AbstractClientWallet, A as AsyncLocalStorage, D as DEFAULT_DAPP_META, c as createAsyncLocalStorage } from './base-402f7b12.browser.esm.js';
export { E as EIP155_SIGNING_METHODS } from './wc-c6a6a61c.browser.esm.js';
export { w as walletIds } from './walletIds-a64268ca.browser.esm.js';
export { W as WagmiConnector } from './WagmiConnector-2f14002d.browser.esm.js';
export { A as AddChainError, C as ChainNotConfiguredError, P as ProviderRpcError, S as SwitchChainError, U as UserRejectedRequestError } from './errors-d961f852.browser.esm.js';
export { n as normalizeChainId } from './normalizeChainId-e4cc0175.browser.esm.js';
export { C as Connector, W as WagmiAdapter } from './connector-05689d68.browser.esm.js';
export { g as getInjectedMetamaskProvider } from './getInjectedMetamaskProvider-928dd9c3.browser.esm.js';
export { g as getInjectedPhantomProvider } from './getInjectedPhantomProvider-175b0596.browser.esm.js';
export { g as getInjectedRainbowProvider } from './getInjectedRainbowProvider-33485100.browser.esm.js';
export { g as getInjectedCoinbaseProvider } from './getInjectedCoinbaseProvider-980f40a9.browser.esm.js';
export { a as assertWindowEthereum } from './assertWindowEthereum-b48c1686.browser.esm.js';
export { PaperWallet } from '../evm/wallets/paper-wallet/dist/thirdweb-dev-wallets-evm-wallets-paper-wallet.browser.esm.js';
export { BloctoWallet } from '../evm/wallets/blocto/dist/thirdweb-dev-wallets-evm-wallets-blocto.browser.esm.js';
export { CoinbaseWallet } from '../evm/wallets/coinbase-wallet/dist/thirdweb-dev-wallets-evm-wallets-coinbase-wallet.browser.esm.js';
export { EmbeddedWallet } from '../evm/wallets/embedded-wallet/dist/thirdweb-dev-wallets-evm-wallets-embedded-wallet.browser.esm.js';
export { EthersWallet } from '../evm/wallets/ethers/dist/thirdweb-dev-wallets-evm-wallets-ethers.browser.esm.js';
export { FrameWallet } from '../evm/wallets/frame/dist/thirdweb-dev-wallets-evm-wallets-frame.browser.esm.js';
export { InjectedWallet } from '../evm/wallets/injected/dist/thirdweb-dev-wallets-evm-wallets-injected.browser.esm.js';
export { LocalWallet, isValidPrivateKey } from '../evm/wallets/local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.browser.esm.js';
export { MagicLink } from '../evm/wallets/magic/dist/thirdweb-dev-wallets-evm-wallets-magic.browser.esm.js';
export { MetaMaskWallet } from '../evm/wallets/metamask/dist/thirdweb-dev-wallets-evm-wallets-metamask.browser.esm.js';
export { PhantomWallet } from '../evm/wallets/phantom/dist/thirdweb-dev-wallets-evm-wallets-phantom.browser.esm.js';
export { PrivateKeyWallet } from '../evm/wallets/private-key/dist/thirdweb-dev-wallets-evm-wallets-private-key.browser.esm.js';
export { RainbowWallet } from '../evm/wallets/rainbow-wallet/dist/thirdweb-dev-wallets-evm-wallets-rainbow-wallet.browser.esm.js';
export { S as SafeSupportedChainsSet } from './constants-9cc70a7d.browser.esm.js';
export { SafeWallet } from '../evm/wallets/safe/dist/thirdweb-dev-wallets-evm-wallets-safe.browser.esm.js';
export { TrustWallet } from '../evm/wallets/trust/dist/thirdweb-dev-wallets-evm-wallets-trust.browser.esm.js';
export { WalletConnect } from '../evm/wallets/wallet-connect/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect.browser.esm.js';
export { WalletConnectV1 } from '../evm/wallets/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect-v1.browser.esm.js';
export { ZerionWallet } from '../evm/wallets/zerion/dist/thirdweb-dev-wallets-evm-wallets-zerion.browser.esm.js';
export { A as AUTH_TOKEN_LOCAL_STORAGE_NAME, D as DEVICE_SHARE_LOCAL_STORAGE_NAME, a as DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED, E as EmbeddedWalletSdk, U as UserStatus, W as WALLET_USER_DETAILS_LOCAL_STORAGE_NAME, b as WALLET_USER_ID_LOCAL_STORAGE_NAME } from './embedded-wallet-e4397148.browser.esm.js';
export { A as AuthProvider, R as RecoveryShareManagement } from './auth-e91a1229.browser.esm.js';
import './classPrivateMethodGet-ea199cc3.browser.esm.js';
import './classPrivateFieldSet-a5db7c83.browser.esm.js';
import './defineProperty-c8ecdc07.browser.esm.js';
import '@walletconnect/core';
import '@walletconnect/web3wallet';
import 'ethers';
import 'eventemitter3';
import '@walletconnect/jsonrpc-utils';
import '@thirdweb-dev/sdk';
import '@thirdweb-dev/chains';
import '../evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'buffer';
import '../evm/connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.browser.esm.js';
import '@paperxyz/sdk-common-utilities';
import 'ethers/lib/utils';

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

export { CredentialsStorage, LocalStorage, createLocalStorage };
