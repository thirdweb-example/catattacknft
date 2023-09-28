import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract } from "ethers";
import { AbiEvent, AbiFunction, PublishedMetadata } from "../../schema/contracts/custom";
import { ContractWrapper } from "./contract-wrapper";
/**
 * Handles publish metadata for a contract
 * @internal
 */
export declare class ContractPublishedMetadata<TContract extends BaseContract> {
    private contractWrapper;
    private storage;
    private _cachedMetadata;
    constructor(contractWrapper: ContractWrapper<BaseContract>, storage: ThirdwebStorage);
    /**
     * Get the published metadata for this contract
     * @public
     */
    get(): Promise<PublishedMetadata>;
    /**
     * @public
     */
    extractFunctions(): Promise<AbiFunction[]>;
    /**
     * @public
     */
    extractEvents(): Promise<AbiEvent[]>;
}
//# sourceMappingURL=contract-published-metadata.d.ts.map