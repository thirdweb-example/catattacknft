import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { a as ConnectorNotFoundError, U as UserRejectedRequestError, R as ResourceUnavailableError } from '../../../../dist/errors-b9032b4e.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { InjectedConnector } from '../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.esm.js';
import { utils } from 'ethers';
import { g as getInjectedPhantomProvider } from '../../../../dist/getInjectedPhantomProvider-95d9fe04.esm.js';
import '../../../../dist/assertWindowEthereum-7e869013.esm.js';
import '../../../../dist/url-453bcd09.esm.js';
import '@thirdweb-dev/chains';
import '../../../../dist/WagmiConnector-6011bbb1.esm.js';
import 'eventemitter3';
import '../../../../dist/normalizeChainId-dd5a6036.esm.js';

var _UNSTABLE_shimOnConnectSelectAccount = /*#__PURE__*/new WeakMap();
class PhantomConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Phantom",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider: getInjectedPhantomProvider
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
    _defineProperty(this, "id", walletIds.phantom);
    _classPrivateFieldInitSpec(this, _UNSTABLE_shimOnConnectSelectAccount, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _UNSTABLE_shimOnConnectSelectAccount, options.UNSTABLE_shimOnConnectSelectAccount);
  }

  /**
   * Connect to injected Phantom provider
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

export { PhantomConnector };
