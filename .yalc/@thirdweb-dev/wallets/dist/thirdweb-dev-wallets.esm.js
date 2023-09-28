export { S as SmartWallet, a as WalletConnectHandler, W as WalletConnectV2Handler, g as getAllSigners, b as getAllSmartWallets, c as getSmartWalletAddress, i as isSmartWalletDeployed } from './smart-wallet-f0be510e.esm.js';
export { a as AbstractClientWallet, A as AsyncLocalStorage, D as DEFAULT_DAPP_META, c as createAsyncLocalStorage } from './base-04cc6f4f.esm.js';
export { E as EIP155_SIGNING_METHODS } from './wc-c5b5676b.esm.js';
export { w as walletIds } from './walletIds-18a8e969.esm.js';
export { W as WagmiConnector } from './WagmiConnector-6011bbb1.esm.js';
export { A as AddChainError, C as ChainNotConfiguredError, P as ProviderRpcError, S as SwitchChainError, U as UserRejectedRequestError } from './errors-b9032b4e.esm.js';
export { n as normalizeChainId } from './normalizeChainId-dd5a6036.esm.js';
export { C as Connector, W as WagmiAdapter } from './connector-20f7cf73.esm.js';
export { g as getInjectedMetamaskProvider } from './getInjectedMetamaskProvider-1785ca47.esm.js';
export { g as getInjectedPhantomProvider } from './getInjectedPhantomProvider-95d9fe04.esm.js';
export { g as getInjectedRainbowProvider } from './getInjectedRainbowProvider-9357ff18.esm.js';
export { g as getInjectedCoinbaseProvider } from './getInjectedCoinbaseProvider-e3192950.esm.js';
export { a as assertWindowEthereum } from './assertWindowEthereum-7e869013.esm.js';
export { PaperWallet } from '../evm/wallets/paper-wallet/dist/thirdweb-dev-wallets-evm-wallets-paper-wallet.esm.js';
export { BloctoWallet } from '../evm/wallets/blocto/dist/thirdweb-dev-wallets-evm-wallets-blocto.esm.js';
export { CoinbaseWallet } from '../evm/wallets/coinbase-wallet/dist/thirdweb-dev-wallets-evm-wallets-coinbase-wallet.esm.js';
export { EmbeddedWallet } from '../evm/wallets/embedded-wallet/dist/thirdweb-dev-wallets-evm-wallets-embedded-wallet.esm.js';
export { EthersWallet } from '../evm/wallets/ethers/dist/thirdweb-dev-wallets-evm-wallets-ethers.esm.js';
export { FrameWallet } from '../evm/wallets/frame/dist/thirdweb-dev-wallets-evm-wallets-frame.esm.js';
export { InjectedWallet } from '../evm/wallets/injected/dist/thirdweb-dev-wallets-evm-wallets-injected.esm.js';
export { LocalWallet, isValidPrivateKey } from '../evm/wallets/local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.esm.js';
export { MagicLink } from '../evm/wallets/magic/dist/thirdweb-dev-wallets-evm-wallets-magic.esm.js';
export { MetaMaskWallet } from '../evm/wallets/metamask/dist/thirdweb-dev-wallets-evm-wallets-metamask.esm.js';
export { PhantomWallet } from '../evm/wallets/phantom/dist/thirdweb-dev-wallets-evm-wallets-phantom.esm.js';
export { PrivateKeyWallet } from '../evm/wallets/private-key/dist/thirdweb-dev-wallets-evm-wallets-private-key.esm.js';
export { RainbowWallet } from '../evm/wallets/rainbow-wallet/dist/thirdweb-dev-wallets-evm-wallets-rainbow-wallet.esm.js';
export { S as SafeSupportedChainsSet } from './constants-8444c0b0.esm.js';
export { SafeWallet } from '../evm/wallets/safe/dist/thirdweb-dev-wallets-evm-wallets-safe.esm.js';
export { TrustWallet } from '../evm/wallets/trust/dist/thirdweb-dev-wallets-evm-wallets-trust.esm.js';
export { WalletConnect } from '../evm/wallets/wallet-connect/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect.esm.js';
export { WalletConnectV1 } from '../evm/wallets/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect-v1.esm.js';
export { ZerionWallet } from '../evm/wallets/zerion/dist/thirdweb-dev-wallets-evm-wallets-zerion.esm.js';
export { A as AUTH_TOKEN_LOCAL_STORAGE_NAME, D as DEVICE_SHARE_LOCAL_STORAGE_NAME, a as DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED, E as EmbeddedWalletSdk, U as UserStatus, W as WALLET_USER_DETAILS_LOCAL_STORAGE_NAME, b as WALLET_USER_ID_LOCAL_STORAGE_NAME } from './embedded-wallet-3e27c9eb.esm.js';
export { A as AuthProvider, R as RecoveryShareManagement } from './auth-5d8c5d43.esm.js';
import './classPrivateMethodGet-71fe23d8.esm.js';
import './classPrivateFieldSet-e25e1cec.esm.js';
import './defineProperty-e24c82ea.esm.js';
import '@walletconnect/core';
import '@walletconnect/web3wallet';
import 'ethers';
import 'eventemitter3';
import '@walletconnect/jsonrpc-utils';
import '@thirdweb-dev/sdk';
import '@thirdweb-dev/chains';
import '../evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'buffer';
import '../evm/connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.esm.js';
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
