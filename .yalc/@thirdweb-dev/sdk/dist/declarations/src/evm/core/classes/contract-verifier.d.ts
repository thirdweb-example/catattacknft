import { SDKOptions } from "../../schema/sdk-options";
import { ConstructorParamMap } from "../../types/any-evm/deploy-data";
import { NetworkInput } from "../types";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * Handles verification of new contracts on any EVM
 * @public
 */
export declare class ContractVerifier extends RPCConnectionHandler {
    private storage;
    constructor(network: NetworkInput, options: SDKOptions, storage: ThirdwebStorage);
    updateSignerOrProvider(network: NetworkInput): void;
    /**
     * Verifies a Thirdweb contract
     *
     * @example
     * ```javascript
     *
     * // Note: If verifying on a network different from the SDK instance's network,
     * //       update the verifier's chain/network as below:
     * //
     * //       sdk.verifier.updateSignerOrProvider(chainId);
     *
     * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
     * const explorerAPIKey = "" // Generate API key on the explorer
     *
     * await sdk.verifier.verifyThirdwebContract(
     *   "DropERC721",
     *   explorerAPIUrl,
     *   explorerAPIKey,
     * );
     * ```
     * @param contractName
     * @param explorerAPIUrl
     * @param explorerAPIKey
     */
    verifyThirdwebContract(contractName: string, explorerAPIUrl: string, explorerAPIKey: string, contractVersion?: string, constructorArgs?: ConstructorParamMap): Promise<void>;
    /**
     * Verifies any contract
     *
     * @example
     * ```javascript
     *
     * // Note: If verifying on a network different from the SDK instance's network,
     * //       update the verifier's chain/network as below:
     * //
     * //       sdk.verifier.updateSignerOrProvider(chainId);
     *
     * const contractAddress = ""
     * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
     * const explorerAPIKey = "" // Generate API key on the explorer
     *
     * await sdk.verifier.verifyContract(
     *   contractAddress,
     *   explorerAPIUrl,
     *   explorerAPIKey,
     * );
     * ```
     * @param contractAddress
     * @param explorerAPIUrl
     * @param explorerAPIKey
     */
    verifyContract(contractAddress: string, explorerAPIUrl: string, explorerAPIKey: string, constructorArgs?: ConstructorParamMap): Promise<void>;
}
//# sourceMappingURL=contract-verifier.d.ts.map