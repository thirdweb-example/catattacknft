import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import { GcpKmsSigner } from 'ethers-gcp-kms-signer';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

var _options = /*#__PURE__*/new WeakMap();
class GcpKmsWallet extends AbstractWallet {
  constructor(options) {
    super();
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _options, options);
  }
  async getSigner() {
    return new GcpKmsSigner(_classPrivateFieldGet(this, _options));
  }
}

export { GcpKmsWallet };
