import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { a as ConnectorNotFoundError, U as UserRejectedRequestError, R as ResourceUnavailableError } from '../../../../dist/errors-d961f852.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { InjectedConnector } from '../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js';
import { utils } from 'ethers';
import { g as getInjectedMetamaskProvider } from '../../../../dist/getInjectedMetamaskProvider-928dd9c3.browser.esm.js';
import '../../../../dist/assertWindowEthereum-b48c1686.browser.esm.js';
import '../../../../dist/url-bc88b2b6.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../../../dist/WagmiConnector-2f14002d.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';

var _UNSTABLE_shimOnConnectSelectAccount = /*#__PURE__*/new WeakMap();
class MetaMaskConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "MetaMask",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider: getInjectedMetamaskProvider
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage
    });
    _defineProperty(this, "id", walletIds.metamask);
    _classPrivateFieldInitSpec(this, _UNSTABLE_shimOnConnectSelectAccount, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _UNSTABLE_shimOnConnectSelectAccount, options.UNSTABLE_shimOnConnectSelectAccount);
  }

  /**
   * Connect to injected MetaMask provider
   */
  async connect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {
        type: "connecting"
      });

      // Attempt to show wallet select prompt with `wallet_requestPermissions` when
      // `shimDisconnect` is active and account is in disconnected state (flag in storage)
      let account = null;
      if (_classPrivateFieldGet(this, _UNSTABLE_shimOnConnectSelectAccount) && this.options?.shimDisconnect && !Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))) {
        account = await this.getAccount().catch(() => null);
        const isConnected = !!account;
        if (isConnected) {
          // Attempt to show another prompt for selecting wallet if already connected
          try {
            await provider.request({
              method: "wallet_requestPermissions",
              params: [{
                eth_accounts: {}
              }]
            });
          } catch (error) {
            // Not all MetaMask injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
            // Only bubble up error if user rejects request
            if (this.isUserRejectedRequestError(error)) {
              throw new UserRejectedRequestError(error);
            }
          }
        }
      }

      // if account is not already set, request accounts and use the first account
      if (!account) {
        const accounts = await provider.request({
          method: "eth_requestAccounts"
        });
        account = utils.getAddress(accounts[0]);
      }

      // get currently connected chainId
      let connectedChainId = await this.getChainId();
      // check if connected chain is unsupported
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is given, but does not match the currently connected chainId, switch to the given chainId
      if (options.chainId && connectedChainId !== options.chainId) {
        try {
          await this.switchChain(options.chainId);
          // recalculate the chainId and isUnsupported
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id : ${options.chainId}`, e);
        }
      }

      // if shimDisconnect is enabled
      if (this.options?.shimDisconnect) {
        // add shimDisconnectKey in storage - this signals that connector is "connected"
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      const connectionInfo = {
        chain: {
          id: connectedChainId,
          unsupported: isUnsupported
        },
        provider: provider,
        account
      };
      this.emit("connect", connectionInfo);
      return connectionInfo;
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw new ResourceUnavailableError(error);
      }
      throw error;
    }
  }
  async switchAccount() {
    const provider = await this.getProvider();
    await provider.request({
      method: "wallet_requestPermissions",
      params: [{
        eth_accounts: {}
      }]
    });
  }
}

export { MetaMaskConnector };
