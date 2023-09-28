'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
var ethersGcpKmsSigner = require('ethers-gcp-kms-signer');
require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
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
