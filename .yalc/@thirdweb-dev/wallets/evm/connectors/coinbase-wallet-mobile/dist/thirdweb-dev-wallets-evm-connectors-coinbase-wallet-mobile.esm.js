import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import { _ as _classPrivateFieldInitSpec, b as _classPrivateFieldGet, a as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldSet-0ee02dfd.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { configure } from '@coinbase/wallet-mobile-sdk';
import { providers } from 'ethers';
import { getAddress, hexValue } from 'ethers/lib/utils.js';
import { a as Connector, U as UserRejectedRequestError, C as ChainNotConfiguredError, A as AddChainError, S as SwitchChainError } from '../../../../dist/Connector-e09e02a8.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-6e84ca74.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import 'eventemitter3';

var _provider = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
class CoinbaseMobileWalletConnector extends Connector {
  constructor(_ref) {
    let {
      chains,
      options
    } = _ref;
    super({
      chains,
      options: {
        ...options
      }
    });
    _classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    _defineProperty(this, "id", "coinbaseWallet");
    _defineProperty(this, "name", "Coinbase Wallet");
    _defineProperty(this, "ready", true);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", () => {
      this.emit("disconnect");
    });
    configure({
      callbackURL: options.callbackURL,
      hostURL: options.hostURL,
      hostPackageName: options.hostPackageName
    });
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
      this.emit("message", {
        type: "connecting"
      });
      const account = await provider.request({
        method: "eth_requestAccounts",
        params: []
      });
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        try {
          const chain = await this.switchChain(chainId);
          id = chain.id;
          unsupported = this.isChainUnsupported(id);
        } catch (e) {
          console.error(`Connected but failed to switch to desired chain ${chainId}`, e);
        }
      }
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new providers.Web3Provider(provider)
      };
    } catch (error) {
      if (/(user closed modal|accounts received is empty)/i.test(error.message)) {
        throw new UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    if (!_classPrivateFieldGet(this, _provider)) {
      return;
    }
    const provider = await this.getProvider();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    provider.disconnect();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    if (accounts.length === 0) {
      throw new Error("No accounts found");
    }
    // return checksum address
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    if (!_classPrivateFieldGet(this, _provider)) {
      let CoinbaseWalletMobileSDK = (await import('@coinbase/wallet-mobile-sdk/build/WalletMobileSDKEVMProvider')).WalletMobileSDKEVMProvider;
      if (typeof CoinbaseWalletMobileSDK !== "function" &&
      // @ts-expect-error This import error is not visible to TypeScript
      typeof CoinbaseWalletMobileSDK.default === "function") {
        CoinbaseWalletMobileSDK = CoinbaseWalletMobileSDK.default;
      }
      const chain = this.chains.find(chain_ => chain_.id === this.options.chainId) || this.chains[0];
      const chainId = this.options.chainId;
      const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpcUrls.default.http[0];
      _classPrivateFieldSet(this, _provider, new CoinbaseWalletMobileSDK({
        jsonRpcUrl,
        chainId
      }));
    }
    return _classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const id = hexValue(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return this.chains.find(x => x.id === chainId) ?? {
        id: chainId,
        name: `Chain ${id}`,
        network: `${id}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpcUrls: {
          default: {
            http: [""]
          },
          public: {
            http: [""]
          }
        }
      };
    } catch (error) {
      const chain = this.chains.find(x => x.id === chainId);
      if (!chain) {
        throw new ChainNotConfiguredError({
          chainId,
          connectorId: this.id
        });
      }

      // Indicates chain is not added to provider
      if (error.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: id,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: [chain.rpcUrls.public?.http[0] ?? chain.rpcUrls.default.http[0]],
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          return chain;
        } catch (addError) {
          if (_classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, addError)) {
            throw new UserRejectedRequestError(addError);
          }
          throw new AddChainError();
        }
      }
      if (_classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
  async watchAsset(_ref2) {
    let {
      address,
      decimals = 18,
      image,
      symbol
    } = _ref2;
    const provider = await this.getProvider();
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}

export { CoinbaseMobileWalletConnector };
