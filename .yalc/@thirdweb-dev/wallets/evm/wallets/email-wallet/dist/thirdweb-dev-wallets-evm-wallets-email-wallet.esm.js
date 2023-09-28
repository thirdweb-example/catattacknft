import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldGet, b as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldGet-5cbab388.esm.js';
import { AbstractBrowserWallet } from '../../base/dist/thirdweb-dev-wallets-evm-wallets-base.esm.js';
import '../../../../dist/abstract-c169745b.esm.js';
import 'ethers';
import 'eventemitter3';
import '../../../../dist/storage-d861365e.esm.js';
import 'localforage';

var _connector = /*#__PURE__*/new WeakMap();
class EmailWallet extends AbstractBrowserWallet {
  get walletName() {
    return "Email Wallet";
  }
  constructor(options) {
    super(EmailWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    _classPrivateFieldInitSpec(this, _connector, {
      writable: true,
      value: void 0
    });
  }
  async getConnector() {
    if (!_classPrivateFieldGet(this, _connector)) {
      const {
        EmailWalletConnector
      } = await import('../../../connectors/email/dist/thirdweb-dev-wallets-evm-connectors-email.esm.js');
      _classPrivateFieldSet(this, _connector, new EmailWalletConnector({
        clientId: this.options.clientId,
        chain: this.options.chain
      }));
    }
    return _classPrivateFieldGet(this, _connector);
  }
}
_defineProperty(EmailWallet, "id", "email-wallet");

export { EmailWallet };
