import type { IRoyalty } from "@thirdweb-dev/contracts-js";
import { BigNumberish } from "ethers";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractMetadata, IGenericSchemaType } from "./contract-metadata";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Handle contract royalties
 * @remarks Configure royalties for an entire contract or a particular token.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
 * await contract.roles.setTokenRoyaltyInfo(tokenId, {
 *   seller_fee_basis_points: 100, // 1% royalty fee
 *   fee_recipient: "0x...", // the fee recipient
 * });
 * ```
 * @public
 */
export declare class ContractRoyalty<TContract extends IRoyalty, TSchema extends IGenericSchemaType> implements DetectableFeature {
    featureName: "Royalty";
    private contractWrapper;
    private metadata;
    constructor(contractWrapper: ContractWrapper<IRoyalty>, metadata: ContractMetadata<TContract, TSchema>);
    /**
     * Get the royalty recipient and fee
     * @returns - The royalty recipient and BPS
     * @example
     * ```javascript
     * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
     * console.log(royaltyInfo.fee_recipient);
     * console.log(royaltyInfo.seller_fee_basis_points);
     * ```
     * @public
     * @twfeature Royalty
     */
    getDefaultRoyaltyInfo(): Promise<{
        seller_fee_basis_points: number;
        fee_recipient: string;
    }>;
    /**
     * Get the royalty recipient and fee of a particular token
     * @returns - The royalty recipient and BPS
     * @example
     * ```javascript
     * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
     * console.log(royaltyInfo.fee_recipient);
     * console.log(royaltyInfo.seller_fee_basis_points);
     * ```
     * @public
     * @twfeature Royalty
     */
    getTokenRoyaltyInfo(tokenId: BigNumberish): Promise<{
        seller_fee_basis_points: number;
        fee_recipient: string;
    }>;
    /**
     * Set the royalty recipient and fee
     * @param royaltyData - the royalty recipient and fee
     *  @example
     * ```javascript
     * await contract.roles.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1% royalty fee
     *   fee_recipient: "0x...", // the fee recipient
     * });
     * ```
     * @public
     * @twfeature Royalty
     */
    setDefaultRoyaltyInfo: {
        (royaltyData: {
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
        }): Promise<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<{
                seller_fee_basis_points: number;
                fee_recipient: string;
            }>;
        }>;
        prepare: (royaltyData: {
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
        }) => Promise<Transaction<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<{
                seller_fee_basis_points: number;
                fee_recipient: string;
            }>;
        }>>;
    };
    /**
     * Set the royalty recipient and fee for a particular token
     * @param tokenId - the token id
     * @param royaltyData - the royalty recipient and fee
     * @example
     * ```javascript
     * const tokenId = 0;
     * await contract.roles.setTokenRoyaltyInfo(tokenId, {
     *   seller_fee_basis_points: 100, // 1% royalty fee
     *   fee_recipient: "0x...", // the fee recipient
     * });
     * ```
     * @public
     * @twfeature Royalty
     */
    setTokenRoyaltyInfo: {
        (tokenId: BigNumberish, royaltyData: {
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
        }): Promise<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<{
                seller_fee_basis_points: number;
                fee_recipient: string;
            }>;
        }>;
        prepare: (tokenId: BigNumberish, royaltyData: {
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
        }) => Promise<Transaction<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<{
                seller_fee_basis_points: number;
                fee_recipient: string;
            }>;
        }>>;
    };
}
//# sourceMappingURL=contract-royalty.d.ts.map