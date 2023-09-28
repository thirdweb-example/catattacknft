import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import { _ as _classPrivateFieldInitSpec, b as _classPrivateFieldGet, a as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { utils, providers } from 'ethers';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { g as getValidPublicRPCUrl } from '../../../../dist/url-453bcd09.esm.js';
import { W as WagmiConnector } from '../../../../dist/WagmiConnector-6011bbb1.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-dd5a6036.esm.js';
import { U as UserRejectedRequestError, C as ChainNotConfiguredError, A as AddChainError, S as SwitchChainError } from '../../../../dist/errors-b9032b4e.esm.js';
import '@thirdweb-dev/chains';
import 'eventemitter3';

var _client = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
class CoinbaseWalletConnector extends WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options
    } = _ref;
    super({
      chains,
      options: {
        reloadOnDisconnect: false,
        ...options
      }
    });
    _classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    _defineProperty(this, "id", walletIds.coinbase);
    _defineProperty(this, "name", "Coinbase Wallet");
    _defineProperty(this, "ready", true);
    _classPrivateFieldInitSpec(this, _client, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: utils.getAddress(accounts[0])
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
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.enable();
      const account = utils.getAddress(accounts[0]);
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        try {
          const chain = await this.switchChain(chainId);
          id = chain.chainId;
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
    provider.close();
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
    return utils.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    if (!_classPrivateFieldGet(this, _provider)) {
      let CoinbaseWalletSDK = (await import('@coinbase/wallet-sdk')).default;
      // Workaround for Vite dev import errors
      // https://github.com/vitejs/vite/issues/7112
      if (typeof CoinbaseWalletSDK !== "function" &&
      // @ts-expect-error This import error is not visible to TypeScript
      typeof CoinbaseWalletSDK.default === "function") {
        CoinbaseWalletSDK = CoinbaseWalletSDK.default;
      }
      _classPrivateFieldSet(this, _client, new CoinbaseWalletSDK(this.options));
      const walletExtensionChainId = _classPrivateFieldGet(this, _client).walletExtension?.getChainId();
      const chain = this.chains.find(chain_ => this.options.chainId ? chain_.chainId === this.options.chainId : chain_.chainId === walletExtensionChainId) || this.chains[0];
      const chainId = this.options.chainId || chain?.chainId;
      const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpc[0];
      _classPrivateFieldSet(this, _provider, _classPrivateFieldGet(this, _client).makeWeb3Provider(jsonRpcUrl, chainId));
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
    const id = utils.hexValue(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${id}`,
        slug: `${id}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        testnet: false,
        chain: "ethereum",
        shortName: "eth"
      };
    } catch (error) {
      const chain = this.chains.find(x => x.chainId === chainId);
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
              rpcUrls: getValidPublicRPCUrl(chain),
              // no client id on purpose here
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
  async setupListeners() {
    const provider = await this.getProvider();
    provider.on("accountsChanged", this.onAccountsChanged);
    provider.on("chainChanged", this.onChainChanged);
    provider.on("disconnect", this.onDisconnect);
  }
  async getQrUrl() {
    await this.getProvider();
    if (!_classPrivateFieldGet(this, _client)) {
      throw new Error("Coinbase Wallet SDK not initialized");
    }
    return _classPrivateFieldGet(this, _client).getQrUrl();
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}

export { CoinbaseWalletConnector };
