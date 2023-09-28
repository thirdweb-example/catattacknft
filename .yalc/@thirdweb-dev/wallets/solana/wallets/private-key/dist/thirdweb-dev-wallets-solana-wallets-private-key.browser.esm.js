import { KeypairWallet } from '../../keypair/dist/thirdweb-dev-wallets-solana-wallets-keypair.browser.esm.js';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@noble/ed25519';
import '../../base/dist/thirdweb-dev-wallets-solana-wallets-base.browser.esm.js';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import 'tweetnacl';

class PrivateKeyWallet extends KeypairWallet {
  constructor(privateKey) {
    super(Keypair.fromSecretKey(bs58.decode(privateKey)));
  }
}

export { PrivateKeyWallet };
