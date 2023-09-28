'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var bs58 = require('bs58');
var nacl = require('tweetnacl');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var bs58__default = /*#__PURE__*/_interopDefault(bs58);
var nacl__default = /*#__PURE__*/_interopDefault(nacl);

class AbstractWallet {
  constructor() {
    defineProperty._defineProperty(this, "type", "solana");
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.publicKey.toBase58();
  }
  async signMessage(message) {
    const signer = await this.getSigner();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await signer.signMessage(encodedMessage);
    const signature = bs58__default["default"].encode(signedMessage);
    return signature;
  }
  async verifySignature(message, signature, address) {
    return nacl__default["default"].sign.detached.verify(new TextEncoder().encode(message), bs58__default["default"].decode(signature), bs58__default["default"].decode(address));
  }
}

exports.AbstractWallet = AbstractWallet;
