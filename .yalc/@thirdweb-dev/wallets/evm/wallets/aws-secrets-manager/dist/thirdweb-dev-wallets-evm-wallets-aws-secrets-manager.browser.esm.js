import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import { Wallet } from 'ethers';
import '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

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
class AwsSecretsManagerWallet extends AbstractWallet {
  constructor(options) {
    super();
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _options, options);
  }
  async getSigner() {
    if (!_classPrivateFieldGet(this, _signer)) {
      // construct our promise that will resolve to a signer (eventually)
      _classPrivateFieldSet(this, _signer, new Promise(async (resolve, reject) => {
        try {
          const {
            GetSecretValueCommand,
            SecretsManagerClient
          } = await import('@aws-sdk/client-secrets-manager');
          const client = new SecretsManagerClient(_classPrivateFieldGet(this, _options).awsConfig || {});
          const res = await client.send(new GetSecretValueCommand({
            SecretId: _classPrivateFieldGet(this, _options).secretId,
            VersionStage: "AWSCURRENT" // VersionStage defaults to AWSCURRENT if unspecified
          }));

          if (!res || !res.SecretString) {
            throw new Error(`No secret found at ${_classPrivateFieldGet(this, _options).secretId}`);
          }
          let privateKey;
          try {
            privateKey = JSON.parse(res.SecretString)[_classPrivateFieldGet(this, _options).secretKeyName];
          } catch {
            throw new Error(`Secret ${_classPrivateFieldGet(this, _options).secretId} is not a valid JSON object! Please convert secret to a JSON object with key ${_classPrivateFieldGet(this, _options).secretKeyName}.`);
          }
          if (!privateKey) {
            throw new Error(`Secret ${_classPrivateFieldGet(this, _options).secretId} does not have key ${_classPrivateFieldGet(this, _options).secretKeyName}`);
          }
          resolve(new Wallet(privateKey));
        } catch (err) {
          // remove the cached promise so we can try again
          _classPrivateFieldSet(this, _signer, undefined);
          reject(err);
        }
      }));
    }
    return _classPrivateFieldGet(this, _signer);
  }
}

export { AwsSecretsManagerWallet };
