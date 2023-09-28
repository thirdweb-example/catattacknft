'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
var ethersGcpKmsSigner = require('ethers-gcp-kms-signer');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');

var _options = /*#__PURE__*/new WeakMap();
class GcpKmsWallet extends evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract.AbstractWallet {
  constructor(options) {
    super();
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _options, options);
  }
  async getSigner() {
    return new ethersGcpKmsSigner.GcpKmsSigner(classPrivateFieldSet._classPrivateFieldGet(this, _options));
  }
}

exports.GcpKmsWallet = GcpKmsWallet;
