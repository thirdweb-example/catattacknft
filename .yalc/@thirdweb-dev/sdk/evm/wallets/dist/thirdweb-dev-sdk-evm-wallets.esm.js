import { _ as _defineProperty } from '../../../dist/defineProperty-e24c82ea.esm.js';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { ethers } from 'ethers';
import { AwsKmsSigner } from 'ethers-aws-kms-signer';

class AbstractWallet {}

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
    _defineProperty(this, "secretId", void 0);
    _defineProperty(this, "secretKeyName", void 0);
    _defineProperty(this, "client", void 0);
    _defineProperty(this, "cachedSigner", void 0);
    this.secretId = options.secretId;
    this.secretKeyName = options.secretKeyName;
    this.client = new SecretsManagerClient(options.awsConfig);
  }
  async getSigner(provider) {
    if (this.cachedSigner) {
      return this.cachedSigner;
    }
    const res = await this.client.send(new GetSecretValueCommand({
      SecretId: this.secretId,
      VersionStage: "AWSCURRENT" // VersionStage defaults to AWSCURRENT if unspecified
    }));

    if (!res || !res.SecretString) {
      throw new Error(`No secret found at ${this.secretId}`);
    }
    const privateKey = JSON.parse(res.SecretString)[this.secretKeyName];
    if (!privateKey) {
      throw new Error(`Secret ${this.secretId} does not have key ${this.secretKeyName}`);
    }
    this.cachedSigner = new ethers.Wallet(privateKey, provider);
    return this.cachedSigner;
  }
}

/**
 * Create a wallet instance using a private key stored in AWS KMS.
 *
 *  @example
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk"
 * import { AwsKmsWallet } from "@thirdweb-dev/sdk/evm/wallets"
 *
 * const wallet = new AwsKmsallet({
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
    _defineProperty(this, "cachedSigner", void 0);
    this.cachedSigner = this.updateSigner(new AwsKmsSigner(options));
  }
  async getSigner(provider) {
    if (provider) {
      this.cachedSigner = this.updateSigner(this.cachedSigner.connect(provider));
    }
    return this.cachedSigner;
  }

  // Add _signTypedData method onto the signer for now so we don't need to reimpliment
  // The entire AWS KMS signer repository and maintain it ourselves.
  updateSigner(signer) {
    signer._signTypedData = async function (domain, types, value) {
      const hash = ethers.utils._TypedDataEncoder.hash(domain, types, value);
      return signer._signDigest(hash);
    };
    return signer;
  }
}

export { AbstractWallet, AwsKmsWallet, AwsSecretsManagerWallet };
