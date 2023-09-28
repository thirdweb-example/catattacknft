import { AbstractWallet } from '../../base/dist/thirdweb-dev-wallets-solana-wallets-base.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import 'bs58';
import 'tweetnacl';

class SignerWallet extends AbstractWallet {
  constructor(signer) {
    super();
    this.signer = signer;
  }
  async getSigner() {
    return this.signer;
  }
}

export { SignerWallet };
