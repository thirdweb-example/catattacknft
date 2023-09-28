import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import { ethers } from 'ethers';
import { getChainProvider } from '@thirdweb-dev/sdk';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import 'eventemitter3';

var _signer = /*#__PURE__*/new WeakMap();
class PrivateKeyWallet extends AbstractWallet {
  constructor(privateKey, chain, secretKey) {
    super();
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _signer, new ethers.Wallet(privateKey, chain ? getChainProvider(chain, {
      secretKey
    }) : undefined));
  }
  async getSigner() {
    return _classPrivateFieldGet(this, _signer);
  }
}

export { PrivateKeyWallet };
