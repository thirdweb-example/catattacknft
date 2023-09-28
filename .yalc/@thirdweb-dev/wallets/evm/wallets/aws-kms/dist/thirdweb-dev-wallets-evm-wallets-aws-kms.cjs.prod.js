'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _signer = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
/**
 * Create a wallet instance using a private key stored in AWS KMS.
 *
 *  @example
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk"
 * import { AwsKmsWallet } from "@thirdweb-dev/sdk/evm/wallets"
 *
 * const wallet = new AwsKmsWallet({
 *   region: "us-east-1",
 *   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
 *   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
 *   sessionToken: process.env.AWS_SESSION_TOKEN,
 *   keyId: process.env.AWS_KEY_ID,
 * });
 *
 * const sdk = await ThirdwebSDK.fromWallet(wallet, "mainnet");
 * ```
 */
class AwsKmsWallet extends evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract.AbstractWallet {
  constructor(options) {
    super();
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _options, options);
  }
  async getSigner() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _signer)) {
      classPrivateFieldSet._classPrivateFieldSet(this, _signer, new Promise(async (resolve, reject) => {
        try {
          const {
            AwsKmsSigner
          } = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('ethers-aws-kms-signer')); });
          resolve(new AwsKmsSigner(classPrivateFieldSet._classPrivateFieldGet(this, _options)));
        } catch (err) {
          // remove the cached promise so we can try again
          classPrivateFieldSet._classPrivateFieldSet(this, _signer, undefined);
          reject(err);
        }
      }));
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _signer);
  }
}

exports.AwsKmsWallet = AwsKmsWallet;
