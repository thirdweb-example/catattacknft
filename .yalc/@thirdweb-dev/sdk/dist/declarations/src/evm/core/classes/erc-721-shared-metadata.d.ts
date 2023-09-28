import type { SharedMetadata } from "@thirdweb-dev/contracts-js";
import { type ThirdwebStorage } from "@thirdweb-dev/storage";
import { BasicNFTInput } from "../../../core/schema/nft";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Set shared metadata for ERC721 NFTs (Open Edition)
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.sharedMetadata.set(metadata);
 * ```
 */
export declare class Erc721SharedMetadata implements DetectableFeature {
    featureName: "ERC721SharedMetadata";
    private contractWrapper;
    private storage;
    constructor(contractWrapper: ContractWrapper<SharedMetadata>, storage: ThirdwebStorage);
    /**
     * Get Shared Metadata
     *
     * @remarks Get the shared metadata for the Open Edition NFTs.
     *
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}");
     *
     * const tx = await contract.erc721.sharedMetadata.get();
     * ```
     *
     * @returns - The shared metadata for the Open Edition NFTs.
     */
    get(): Promise<BasicNFTInput | undefined>;
    /**
     * Set Shared Metadata
     *
     * @remarks Set the shared metadata for the Open Edition NFTs.
     *
     * @example
     * ```javascript
     * const metadata = {
     *  name: "My NFT",
     *  description: "This is my NFT",
     *  image: ...
     *  animation_url: ...
     * };
     *
     * const contract = await sdk.getContract("{{contract_address}}");
     *
     * const tx = await contract.erc721.sharedMetadata.set(metadata);
     * ```
     *
     * @param metadata - The metadata you want to set for the shared metadata.
     *
     * @returns - Receipt for the transaction
     */
    set: {
        (metadata: {
            name?: string | number | null | undefined;
            description?: string | null | undefined;
            image?: any;
            animation_url?: any;
        }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (metadata: {
            name?: string | number | null | undefined;
            description?: string | null | undefined;
            image?: any;
            animation_url?: any;
        }) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    private sanitizeJSONString;
}
//# sourceMappingURL=erc-721-shared-metadata.d.ts.map