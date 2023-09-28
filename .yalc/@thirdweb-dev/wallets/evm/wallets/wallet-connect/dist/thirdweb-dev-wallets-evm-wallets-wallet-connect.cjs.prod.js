'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var wc = require('../../../../dist/wc-1f862048.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
require('eventemitter3');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('@thirdweb-dev/sdk');

var _walletConnectConnector = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _maybeThrowError = /*#__PURE__*/new WeakMap();
var _onConnect = /*#__PURE__*/new WeakMap();
var _onDisconnect = /*#__PURE__*/new WeakMap();
var _onChange = /*#__PURE__*/new WeakMap();
var _onMessage = /*#__PURE__*/new WeakMap();
var _onSessionRequestSent = /*#__PURE__*/new WeakMap();
var _setupListeners = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
class WalletConnect extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "WalletConnect";
  }
  constructor(options) {
    super(options?.walletId || WalletConnect.id, options);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _removeListeners);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _setupListeners);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _walletConnectConnector, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _maybeThrowError, {
      writable: true,
      value: error => {
        if (error) {
          throw error;
        }
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onConnect, {
      writable: true,
      value: data => {
        classPrivateFieldSet._classPrivateFieldSet(this, _provider, data.provider);
        if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
          throw new Error("WalletConnect provider not found after connecting.");
        }
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onDisconnect, {
      writable: true,
      value: () => {
        classPrivateMethodGet._classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onChange, {
      writable: true,
      value: async payload => {
        if (payload.chain) ; else if (payload.account) ;
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onMessage, {
      writable: true,
      value: payload => {
        switch (payload.type) {
          case "display_uri":
            this.emit("display_uri", payload.data);
            break;
        }
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onSessionRequestSent, {
      writable: true,
      value: () => {
        this.emit("wc_session_request_sent");
      }
    });
    this.projectId = options?.projectId || wc.TW_WC_PROJECT_ID;
    this.qrcode = options?.qrcode === false ? false : true;
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        WalletConnectConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.cjs.prod.js'); });
      classPrivateFieldSet._classPrivateFieldSet(this, _walletConnectConnector, new WalletConnectConnector({
        chains: this.chains,
        options: {
          qrcode: this.qrcode,
          projectId: this.projectId,
          dappMetadata: this.dappMetadata,
          storage: this.walletStorage,
          qrModalOptions: this.options?.qrModalOptions
        }
      }));
      this.connector = new connector.WagmiAdapter(classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector));
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, await classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).getProvider());
      classPrivateMethodGet._classPrivateMethodGet(this, _setupListeners, _setupListeners2).call(this);
    }
    return this.connector;
  }
  async connectWithQrCode(options) {
    await this.getConnector();
    const wcConnector = classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector);
    if (!wcConnector) {
      throw new Error("WalletConnect connector not found");
    }
    const wcProvider = await wcConnector.getProvider();
    wcProvider.on("display_uri", uri => {
      options.onQrCodeUri(uri);
    });

    // trigger connect flow
    this.connect({
      chainId: options.chainId
    }).then(options.onConnected);
  }
}
function _setupListeners2() {
  if (!classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  classPrivateMethodGet._classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("connect", classPrivateFieldSet._classPrivateFieldGet(this, _onConnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("disconnect", classPrivateFieldSet._classPrivateFieldGet(this, _onDisconnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("change", classPrivateFieldSet._classPrivateFieldGet(this, _onChange));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("message", classPrivateFieldSet._classPrivateFieldGet(this, _onMessage));
  classPrivateFieldSet._classPrivateFieldGet(this, _provider)?.signer.client.on("session_request_sent", classPrivateFieldSet._classPrivateFieldGet(this, _onSessionRequestSent));
}
function _removeListeners2() {
  if (!classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("connect", classPrivateFieldSet._classPrivateFieldGet(this, _onConnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("disconnect", classPrivateFieldSet._classPrivateFieldGet(this, _onDisconnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("change", classPrivateFieldSet._classPrivateFieldGet(this, _onChange));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("message", classPrivateFieldSet._classPrivateFieldGet(this, _onMessage));
  classPrivateFieldSet._classPrivateFieldGet(this, _provider)?.signer.client.removeListener("session_request_sent", classPrivateFieldSet._classPrivateFieldGet(this, _onSessionRequestSent));
}
defineProperty._defineProperty(WalletConnect, "id", walletIds.walletIds.walletConnect);
defineProperty._defineProperty(WalletConnect, "meta", {
  name: "WalletConnect",
  iconURL: "ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"
});

exports.WalletConnect = WalletConnect;
