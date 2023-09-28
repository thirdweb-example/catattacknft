'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
var ethers = require('ethers');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
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
 * Create a wallet instance using a private key stored in AWS Secrets Manager.
 *
 *  @example
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk"
 * import { AwsSecretsManagerWallet } from "@thirdweb-dev/sdk/evm/wallets"
 *
 * const wallet = new AwsSecretsManagerWallet({
 *   secretName: "my-secret",
 *   secretKeyName: "private-key",
 *   awsConfig: {
 *     region: "us-east-1",
 *     credentials: {
 *       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
 *       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
 *     },
 *   }
 * });
 *
 * const sdk = await ThirdwebSDK.fromWallet(wallet, "mainnet");
 * ```
 */
class AwsSecretsManagerWallet extends evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract.AbstractWallet {
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
      // construct our promise that will resolve to a signer (eventually)
      classPrivateFieldSet._classPrivateFieldSet(this, _signer, new Promise(async (resolve, reject) => {
        try {
          const {
            GetSecretValueCommand,
            SecretsManagerClient
          } = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@aws-sdk/client-secrets-manager')); });
          const client = new SecretsManagerClient(classPrivateFieldSet._classPrivateFieldGet(this, _options).awsConfig || {});
          const res = await client.send(new GetSecretValueCommand({
            SecretId: classPrivateFieldSet._classPrivateFieldGet(this, _options).secretId,
            VersionStage: "AWSCURRENT" // VersionStage defaults to AWSCURRENT if unspecified
          }));

          if (!res || !res.SecretString) {
            throw new Error(`No secret found at ${classPrivateFieldSet._classPrivateFieldGet(this, _options).secretId}`);
          }
          let privateKey;
          try {
            privateKey = JSON.parse(res.SecretString)[classPrivateFieldSet._classPrivateFieldGet(this, _options).secretKeyName];
          } catch {
            throw new Error(`Secret ${classPrivateFieldSet._classPrivateFieldGet(this, _options).secretId} is not a valid JSON object! Please convert secret to a JSON object with key ${classPrivateFieldSet._classPrivateFieldGet(this, _options).secretKeyName}.`);
          }
          if (!privateKey) {
            throw new Error(`Secret ${classPrivateFieldSet._classPrivateFieldGet(this, _options).secretId} does not have key ${classPrivateFieldSet._classPrivateFieldGet(this, _options).secretKeyName}`);
          }
          resolve(new ethers.Wallet(privateKey));
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

exports.AwsSecretsManagerWallet = AwsSecretsManagerWallet;
