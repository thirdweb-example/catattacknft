import { AbstractWallet } from "./abstract";
import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
import type { Signer } from "ethers";
export type AwsSecretsManagerWalletOptions = {
    secretId: string;
    secretKeyName: string;
    awsConfig?: SecretsManagerClientConfig;
};
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
export declare class AwsSecretsManagerWallet extends AbstractWallet {
    #private;
    constructor(options: AwsSecretsManagerWalletOptions);
    getSigner(): Promise<Signer>;
}
//# sourceMappingURL=aws-secrets-manager.d.ts.map