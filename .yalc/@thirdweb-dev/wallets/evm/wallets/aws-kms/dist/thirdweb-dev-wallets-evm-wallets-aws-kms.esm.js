import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

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
class AwsKmsWallet extends AbstractWallet {
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
      _classPrivateFieldSet(this, _signer, new Promise(async (resolve, reject) => {
        try {
          const {
            AwsKmsSigner
          } = await import('ethers-aws-kms-signer');
          resolve(new AwsKmsSigner(_classPrivateFieldGet(this, _options)));
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

export { AwsKmsWallet };
