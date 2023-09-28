import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ConstructorParamMap } from "../types/any-evm/deploy-data";
/**
 * @public
 *
 * Verifies a Thirdweb Prebuilt Contract, e.g. Marketplace, DropERC721, etc
 *
 * @example
 * ```javascript
 *
 * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
 * const explorerAPIKey = "" // Generate API key on the explorer
 * const chainId = 1 // Change according to the network
 *
 * await sdk.verifier.verifyThirdwebPrebuiltImplementation(
 *   "DropERC721",
 *   chainId,
 *   explorerAPIUrl,
 *   explorerAPIKey,
 *   storage // this could be used from the SDK instance, e.g. sdk.storage
 * );
 * ```
 * @param contractName
 * @param chainId
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param storage
 */
export declare function verifyThirdwebPrebuiltImplementation(contractName: string, chainId: number, explorerAPIUrl: string, explorerAPIKey: string, storage: ThirdwebStorage, contractVersion?: string, clientId?: string, secretKey?: string, constructorArgs?: ConstructorParamMap): Promise<string | string[]>;
/**
 * @public
 *
 * Verifies any contract
 *
 * @example
 * ```javascript
 *
 * const contractAddress = ""
 * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
 * const explorerAPIKey = "" // Generate API key on the explorer
 * const chainId = 1 // Change according to the network
 *
 * await sdk.verifier.verify(
 *   contractAddress,
 *   chainId,
 *   explorerAPIUrl,
 *   explorerAPIKey,
 *   storage // this could be used from the SDK instance, e.g. sdk.storage
 * );
 * ```
 * @param contractAddress
 * @param chainId
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param storage
 */
export declare function verify(contractAddress: string, chainId: number, explorerAPIUrl: string, explorerAPIKey: string, storage: ThirdwebStorage, encodedConstructorArgs?: string): Promise<string | string[]>;
/**
 * @internal
 *
 * Check status of the contract submitted for verification to the explorer
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param guid
 */
export declare function checkVerificationStatus(explorerAPIUrl: string, explorerAPIKey: string, guid: string | string[]): Promise<unknown>;
/**
 * @internal
 *
 * Check if the contract is already verified on etherscan
 * @param contractAddress
 * @param chainId
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * ClientId get from https://thirdweb.com/create-api-key
 * @param clientId
 */
export declare function isVerifiedOnEtherscan(contractAddress: string, chainId: number, explorerAPIUrl: string, explorerAPIKey: string, clientId?: string): Promise<boolean>;
//# sourceMappingURL=verification.d.ts.map