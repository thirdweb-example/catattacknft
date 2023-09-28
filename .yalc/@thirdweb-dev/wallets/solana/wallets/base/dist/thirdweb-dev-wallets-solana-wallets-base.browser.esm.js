import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import bs58 from 'bs58';
import nacl from 'tweetnacl';

class AbstractWallet {
  constructor() {
    _defineProperty(this, "type", "solana");
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.publicKey.toBase58();
  }
  async signMessage(message) {
    const signer = await this.getSigner();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await signer.signMessage(encodedMessage);
    const signature = bs58.encode(signedMessage);
    return signature;
  }
  async verifySignature(message, signature, address) {
    return nacl.sign.detached.verify(new TextEncoder().encode(message), bs58.decode(signature), bs58.decode(address));
  }
}

export { AbstractWallet };
