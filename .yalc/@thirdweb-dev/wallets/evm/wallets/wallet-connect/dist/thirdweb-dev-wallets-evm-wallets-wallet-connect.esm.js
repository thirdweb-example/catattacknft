import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-20f7cf73.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import { T as TW_WC_PROJECT_ID } from '../../../../dist/wc-c5b5676b.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import 'eventemitter3';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

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
class WalletConnect extends AbstractClientWallet {
  get walletName() {
    return "WalletConnect";
  }
  constructor(options) {
    super(options?.walletId || WalletConnect.id, options);
    _classPrivateMethodInitSpec(this, _removeListeners);
    _classPrivateMethodInitSpec(this, _setupListeners);
    _classPrivateFieldInitSpec(this, _walletConnectConnector, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _maybeThrowError, {
      writable: true,
      value: error => {
        if (error) {
          throw error;
        }
      }
    });
    _classPrivateFieldInitSpec(this, _onConnect, {
      writable: true,
      value: data => {
        _classPrivateFieldSet(this, _provider, data.provider);
        if (!_classPrivateFieldGet(this, _provider)) {
          throw new Error("WalletConnect provider not found after connecting.");
        }
      }
    });
    _classPrivateFieldInitSpec(this, _onDisconnect, {
      writable: true,
      value: () => {
        _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
      }
    });
    _classPrivateFieldInitSpec(this, _onChange, {
      writable: true,
      value: async payload => {
        if (payload.chain) ; else if (payload.account) ;
      }
    });
    _classPrivateFieldInitSpec(this, _onMessage, {
      writable: true,
      value: payload => {
        switch (payload.type) {
          case "display_uri":
            this.emit("display_uri", payload.data);
            break;
        }
      }
    });
    _classPrivateFieldInitSpec(this, _onSessionRequestSent, {
      writable: true,
      value: () => {
        this.emit("wc_session_request_sent");
      }
    });
    this.projectId = options?.projectId || TW_WC_PROJECT_ID;
    this.qrcode = options?.qrcode === false ? false : true;
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        WalletConnectConnector
      } = await import('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.esm.js');
      _classPrivateFieldSet(this, _walletConnectConnector, new WalletConnectConnector({
        chains: this.chains,
        options: {
          qrcode: this.qrcode,
          projectId: this.projectId,
          dappMetadata: this.dappMetadata,
          storage: this.walletStorage,
          qrModalOptions: this.options?.qrModalOptions
        }
      }));
      this.connector = new WagmiAdapter(_classPrivateFieldGet(this, _walletConnectConnector));
      _classPrivateFieldSet(this, _provider, await _classPrivateFieldGet(this, _walletConnectConnector).getProvider());
      _classPrivateMethodGet(this, _setupListeners, _setupListeners2).call(this);
    }
    return this.connector;
  }
  async connectWithQrCode(options) {
    await this.getConnector();
    const wcConnector = _classPrivateFieldGet(this, _walletConnectConnector);
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
  if (!_classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
  _classPrivateFieldGet(this, _walletConnectConnector).on("connect", _classPrivateFieldGet(this, _onConnect));
  _classPrivateFieldGet(this, _walletConnectConnector).on("disconnect", _classPrivateFieldGet(this, _onDisconnect));
  _classPrivateFieldGet(this, _walletConnectConnector).on("change", _classPrivateFieldGet(this, _onChange));
  _classPrivateFieldGet(this, _walletConnectConnector).on("message", _classPrivateFieldGet(this, _onMessage));
  _classPrivateFieldGet(this, _provider)?.signer.client.on("session_request_sent", _classPrivateFieldGet(this, _onSessionRequestSent));
}
function _removeListeners2() {
  if (!_classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("connect", _classPrivateFieldGet(this, _onConnect));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("disconnect", _classPrivateFieldGet(this, _onDisconnect));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("change", _classPrivateFieldGet(this, _onChange));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("message", _classPrivateFieldGet(this, _onMessage));
  _classPrivateFieldGet(this, _provider)?.signer.client.removeListener("session_request_sent", _classPrivateFieldGet(this, _onSessionRequestSent));
}
_defineProperty(WalletConnect, "id", walletIds.walletConnect);
_defineProperty(WalletConnect, "meta", {
  name: "WalletConnect",
  iconURL: "ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"
});

export { WalletConnect };
