import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

var _signer = /*#__PURE__*/new WeakMap();
class EthersWallet extends AbstractWallet {
  constructor(signer) {
    super();
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _signer, signer);
  }
  async getSigner() {
    return _classPrivateFieldGet(this, _signer);
  }
}

export { EthersWallet };
