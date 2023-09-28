import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract } from "ethers";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractMetadata } from "./contract-metadata";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Have an official Application URI for this contract.
 * @remarks Configure an official Application URI for this contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const appURI = await contract.app.get();
 * appURI = "ipfs://some_ipfs_hash";
 *
 * await contract.app.set(appURI)
 * ```
 * @public
 */
export declare class ContractAppURI<TContract extends BaseContract> implements DetectableFeature {
    featureName: "AppURI";
    private contractWrapper;
    metadata: ContractMetadata<BaseContract, any>;
    storage: ThirdwebStorage;
    constructor(contractWrapper: ContractWrapper<TContract>, metadata: ContractMetadata<BaseContract, any>, storage: ThirdwebStorage);
    /**
     * Get App URI
     * @returns the appURI (typically an IPFS hash)
     * @example
     * ```javascript
     * const appURI = await contract.app.get();
     * console.log(appURI) // "ipfs://some_ipfs_hash";
     * ```
     * @twfeature AppURI
     */
    get(): Promise<string>;
    /**
     * Set App URI
     * @param appURI - the uri to set (typically an IPFS hash)
     * @example
     * ```javascript
     * const appURI = "ipfs://some_ipfs_hash";
     * await contract.app.set(appURI);
     * ```
     * @twfeature AppURI
     */
    set: {
        (appURI: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (appURI: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=contract-appuri.d.ts.map