import { AbstractWallet } from "./abstract";
import type { Signer } from "ethers";
import type { AwsKmsSignerCredentials } from "ethers-aws-kms-signer";
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
export declare class AwsKmsWallet extends AbstractWallet {
    #private;
    constructor(options: AwsKmsSignerCredentials);
    getSigner(): Promise<Signer>;
}
//# sourceMappingURL=aws-kms.d.ts.map