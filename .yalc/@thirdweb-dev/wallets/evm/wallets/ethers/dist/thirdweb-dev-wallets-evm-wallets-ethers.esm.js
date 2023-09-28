import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
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
