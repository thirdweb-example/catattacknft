import { AbstractWallet } from '../../base/dist/thirdweb-dev-wallets-solana-wallets-base.browser.esm.js';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
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
