'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var errors = require('../../../../dist/errors-9cece35a.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
var evm_connectors_injected_dist_thirdwebDevWalletsEvmConnectorsInjected = require('../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.cjs.prod.js');
var ethers = require('ethers');
var getInjectedRainbowProvider = require('../../../../dist/getInjectedRainbowProvider-3818a166.cjs.prod.js');
require('../../../../dist/assertWindowEthereum-1a9cc710.cjs.prod.js');
require('../../../../dist/url-f55506f3.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../../../dist/WagmiConnector-17577fd3.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/normalizeChainId-a44d9dec.cjs.prod.js');

var _UNSTABLE_shimOnConnectSelectAccount = /*#__PURE__*/new WeakMap();
class RainbowConnector extends evm_connectors_injected_dist_thirdwebDevWalletsEvmConnectorsInjected.InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Rainbow Wallet",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider: getInjectedRainbowProvider.getInjectedRainbowProvider
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
    defineProperty._defineProperty(this, "id", walletIds.walletIds.rainbow);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _UNSTABLE_shimOnConnectSelectAccount, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _UNSTABLE_shimOnConnectSelectAccount, options.UNSTABLE_shimOnConnectSelectAccount);
  }

  /**
   * Connect to injected Rainbow provider
   */
  async connect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new errors.ConnectorNotFoundError();
      }
      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {
        type: "connecting"
      });

      // Attempt to show wallet select prompt with `wallet_requestPermissions` when
      // `shimDisconnect` is active and account is in disconnected state (flag in storage)
      let account = null;
      if (classPrivateFieldSet._classPrivateFieldGet(this, _UNSTABLE_shimOnConnectSelectAccount) && this.options?.shimDisconnect && !Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))) {
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
            // Not all Rainbow injected providers support `wallet_requestPermissions` (e.g. Rainbow iOS).
            // Only bubble up error if user rejects request
            if (this.isUserRejectedRequestError(error)) {
              throw new errors.UserRejectedRequestError(error);
            }
          }
        }
      }

      // if account is not already set, request accounts and use the first account
      if (!account) {
        const accounts = await provider.request({
          method: "eth_requestAccounts"
        });
        account = ethers.utils.getAddress(accounts[0]);
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
        throw new errors.UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw new errors.ResourceUnavailableError(error);
      }
      throw error;
    }
  }
}

exports.RainbowConnector = RainbowConnector;
