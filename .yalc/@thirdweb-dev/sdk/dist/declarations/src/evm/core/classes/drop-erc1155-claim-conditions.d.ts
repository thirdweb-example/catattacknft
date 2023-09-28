import type { Drop1155, DropERC1155_V2, DropSinglePhase1155, DropSinglePhase1155_V1 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish } from "ethers";
import { ClaimEligibility } from "../../enums";
import { SnapshotEntryWithProof } from "../../schema/contracts/common/snapshots";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { ClaimCondition, ClaimConditionFetchOptions, ClaimConditionsForToken, ClaimOptions, ClaimVerification } from "../../types/claim-conditions/claim-conditions";
import { BaseClaimConditionERC1155, PrebuiltEditionDrop } from "../../types/eips";
import { ContractMetadata } from "./contract-metadata";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Manages claim conditions for Edition Drop contracts
 * @public
 */
export declare class DropErc1155ClaimConditions<TContract extends PrebuiltEditionDrop | BaseClaimConditionERC1155> {
    private contractWrapper;
    private metadata;
    private storage;
    constructor(contractWrapper: ContractWrapper<PrebuiltEditionDrop | BaseClaimConditionERC1155>, metadata: ContractMetadata<TContract, any>, storage: ThirdwebStorage);
    /** ***************************************
     * READ FUNCTIONS
     *****************************************/
    /**
     * Get the currently active claim condition
     *
     * @returns the claim condition metadata
     */
    getActive(tokenId: BigNumberish, options?: ClaimConditionFetchOptions): Promise<ClaimCondition>;
    private get;
    /**
     * Get all the claim conditions
     *
     * @returns the claim conditions metadata
     */
    getAll(tokenId: BigNumberish, options?: ClaimConditionFetchOptions): Promise<ClaimCondition[]>;
    /**
     * Can Claim
     *
     * @remarks Check if a particular NFT can currently be claimed by a given user.
     *
     * @example
     * ```javascript
     * // Quantity of tokens to check claimability of
     * const quantity = 1;
     * const canClaim = await contract.canClaim(quantity);
     * ```
     */
    canClaim(tokenId: BigNumberish, quantity: BigNumberish, addressToCheck?: AddressOrEns): Promise<boolean>;
    /**
     * For any claim conditions that a particular wallet is violating,
     * this function returns human-readable information about the
     * breaks in the condition that can be used to inform the user.
     *
     * @param tokenId - the token id to check
     * @param quantity - The desired quantity that would be claimed.
     * @param addressToCheck - The wallet address, defaults to the connected wallet.
     *
     */
    getClaimIneligibilityReasons(tokenId: BigNumberish, quantity: BigNumberish, addressToCheck?: AddressOrEns): Promise<ClaimEligibility[]>;
    /**
     * Returns allow list information and merkle proofs for the given address.
     * @param tokenId - the token ID to check
     * @param claimerAddress - the claimer address
     * @param claimConditionId - optional the claim condition id to get the proofs for
     */
    getClaimerProofs(tokenId: BigNumberish, claimerAddress: AddressOrEns, claimConditionId?: BigNumberish): Promise<SnapshotEntryWithProof | null>;
    /**
     * Get the total supply claimed by a specific wallet
     * @param walletAddress the wallet address to check
     * @returns the total supply claimed
     */
    getSupplyClaimedByWallet(tokenId: BigNumberish, walletAddress: AddressOrEns): Promise<BigNumber>;
    /** ***************************************
     * WRITE FUNCTIONS
     *****************************************/
    /**
     * Set claim conditions on a single NFT
     *
     * @remarks Sets the public mint conditions that need to be fulfilled by users to claim a particular NFT in this contract.
     *
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     *
     * // Optionally specify addresses that can claim
     * const snapshots = ['0x...', '0x...']
     *
     * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
     * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
     *
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxClaimableSupply: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: snapshots, // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     *
     * const tokenId = 0; // the id of the NFT to set claim conditions on
     * await dropContract.claimConditions.set(tokenId, claimConditions);
     * ```
     *
     * @param tokenId - The id of the NFT to set the claim conditions on
     * @param claimConditionInputs - The claim conditions
     * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
     */
    set: {
        (tokenId: BigNumberish, claimConditionInputs: {
            startTime?: number | Date | undefined;
            currencyAddress?: string | undefined;
            price?: string | number | undefined;
            maxClaimableSupply?: string | number | undefined;
            maxClaimablePerWallet?: string | number | undefined;
            waitInSeconds?: string | number | bigint | BigNumber | undefined;
            merkleRootHash?: string | number[] | undefined;
            snapshot?: string[] | {
                address: string;
                maxClaimable?: string | number | undefined;
                price?: string | number | undefined;
                currencyAddress?: string | undefined;
            }[] | null | undefined;
            metadata?: import("zod").objectInputType<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip"> | undefined;
        }[], resetClaimEligibilityForAll?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish, claimConditionInputs: {
            startTime?: number | Date | undefined;
            currencyAddress?: string | undefined;
            price?: string | number | undefined;
            maxClaimableSupply?: string | number | undefined;
            maxClaimablePerWallet?: string | number | undefined;
            waitInSeconds?: string | number | bigint | BigNumber | undefined;
            merkleRootHash?: string | number[] | undefined;
            snapshot?: string[] | {
                address: string;
                maxClaimable?: string | number | undefined;
                price?: string | number | undefined;
                currencyAddress?: string | undefined;
            }[] | null | undefined;
            metadata?: import("zod").objectInputType<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip"> | undefined;
        }[], resetClaimEligibilityForAll?: any) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Set claim conditions on multiple NFTs at once
     *
     * @remarks Sets the claim conditions that need to be fulfilled by users to claim the given NFTs in this contract.
     *
     * @example
     * ```javascript
     * const claimConditionsForTokens = [
     *   {
     *     tokenId: 0,
     *     claimConditions: [{
     *       startTime: new Date(), // start the claim phase now
     *       maxClaimableSupply: 2, // limit how many mints for this tokenId
     *       price: 0.01, // price for this tokenId
     *       snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *     }]
     *   },
     *   {
     *     tokenId: 1,
     *     claimConditions: [{
     *       startTime: new Date(),
     *       price: 0.08, // different price for this tokenId
     *     }]
     *   },
     * ];
     *
     * await dropContract.claimConditions.setBatch(claimConditionsForTokens);
     * ```
     *
     * @param claimConditionsForToken - The claim conditions for each NFT
     * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
     */
    setBatch: {
        (claimConditionsForToken: ClaimConditionsForToken[], resetClaimEligibilityForAll?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (claimConditionsForToken: ClaimConditionsForToken[], resetClaimEligibilityForAll?: any) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Update a single claim condition with new data.
     * @param tokenId - the token id to update
     * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
     * @param claimConditionInput - the new data to update, previous data will be retained
     */
    update: {
        (tokenId: BigNumberish, index: number, claimConditionInput: {
            startTime?: number | Date | undefined;
            currencyAddress?: string | undefined;
            price?: string | number | undefined;
            maxClaimableSupply?: string | number | undefined;
            maxClaimablePerWallet?: string | number | undefined;
            waitInSeconds?: string | number | bigint | BigNumber | undefined;
            merkleRootHash?: string | number[] | undefined;
            snapshot?: string[] | {
                address: string;
                maxClaimable?: string | number | undefined;
                price?: string | number | undefined;
                currencyAddress?: string | undefined;
            }[] | null | undefined;
            metadata?: import("zod").objectInputType<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip"> | undefined;
        }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish, index: number, claimConditionInput: {
            startTime?: number | Date | undefined;
            currencyAddress?: string | undefined;
            price?: string | number | undefined;
            maxClaimableSupply?: string | number | undefined;
            maxClaimablePerWallet?: string | number | undefined;
            waitInSeconds?: string | number | bigint | BigNumber | undefined;
            merkleRootHash?: string | number[] | undefined;
            snapshot?: string[] | {
                address: string;
                maxClaimable?: string | number | undefined;
                price?: string | number | undefined;
                currencyAddress?: string | undefined;
            }[] | null | undefined;
            metadata?: import("zod").objectInputType<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip"> | undefined;
        }) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Returns proofs and the overrides required for the transaction.
     *
     * @returns - `overrides` and `proofs` as an object.
     */
    prepareClaim(tokenId: BigNumberish, quantity: BigNumberish, checkERC20Allowance: boolean, address?: AddressOrEns): Promise<ClaimVerification>;
    getClaimArguments(tokenId: BigNumberish, destinationAddress: AddressOrEns, quantity: BigNumberish, claimVerification: ClaimVerification): Promise<any[]>;
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     *
     * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
     */
    getClaimTransaction(destinationAddress: AddressOrEns, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
    isNewSinglePhaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<DropSinglePhase1155>;
    isNewMultiphaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<Drop1155>;
    isLegacySinglePhaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<DropSinglePhase1155_V1>;
    isLegacyMultiPhaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<DropERC1155_V2>;
    private getSnapshotFormatVersion;
}
//# sourceMappingURL=drop-erc1155-claim-conditions.d.ts.map