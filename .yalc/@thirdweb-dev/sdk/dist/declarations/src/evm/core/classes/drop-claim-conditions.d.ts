import type { Drop, DropERC20_V2, DropERC721_V3, DropSinglePhase, DropSinglePhase_V1 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish } from "ethers";
import { ClaimEligibility } from "../../enums";
import { SnapshotEntryWithProof } from "../../schema/contracts/common/snapshots";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { ClaimCondition, ClaimConditionFetchOptions, ClaimOptions, ClaimVerification } from "../../types/claim-conditions/claim-conditions";
import type { Amount } from "../../types/currency";
import { BaseClaimConditionERC721, BaseDropERC20, PrebuiltNFTDrop, PrebuiltTokenDrop } from "../../types/eips";
import { ContractMetadata } from "./contract-metadata";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Manages claim conditions for NFT Drop contracts
 * @public
 */
export declare class DropClaimConditions<TContract extends PrebuiltNFTDrop | PrebuiltTokenDrop | BaseClaimConditionERC721 | BaseDropERC20> {
    private contractWrapper;
    private metadata;
    private storage;
    constructor(contractWrapper: ContractWrapper<PrebuiltNFTDrop | PrebuiltTokenDrop | BaseClaimConditionERC721 | BaseDropERC20>, metadata: ContractMetadata<TContract, any>, storage: ThirdwebStorage);
    /** ***************************************
     * READ FUNCTIONS
     *****************************************/
    /**
     * Get the currently active claim condition
     *
     * @returns the claim condition metadata
     */
    getActive(options?: ClaimConditionFetchOptions): Promise<ClaimCondition>;
    private get;
    /**
     * Get all the claim conditions
     *
     * @returns the claim conditions metadata
     */
    getAll(options?: ClaimConditionFetchOptions): Promise<ClaimCondition[]>;
    /**
     * Can Claim
     *
     * @remarks Check if the drop can currently be claimed.
     *
     * @example
     * ```javascript
     * // Quantity of tokens to check claimability of
     * const quantity = 1;
     * const canClaim = await contract.canClaim(quantity);
     * ```
     */
    canClaim(quantity: Amount, addressToCheck?: AddressOrEns): Promise<boolean>;
    /**
     * For any claim conditions that a particular wallet is violating,
     * this function returns human readable information about the
     * breaks in the condition that can be used to inform the user.
     *
     * @param quantity - The desired quantity that would be claimed.
     * @param addressToCheck - The wallet address, defaults to the connected wallet.
     *
     */
    getClaimIneligibilityReasons(quantity: Amount, addressToCheck?: AddressOrEns): Promise<ClaimEligibility[]>;
    /**
     * Returns allow list information and merkle proofs for the given address.
     * @param claimerAddress - the claimer address
     * @param claimConditionId - optional the claim condition id to get the proofs for
     */
    getClaimerProofs(claimerAddress: AddressOrEns, claimConditionId?: BigNumberish): Promise<SnapshotEntryWithProof | null>;
    /**
     * Get the total supply claimed by a specific wallet
     * @param walletAddress the wallet address to check
     * @returns the total supply claimed
     */
    getSupplyClaimedByWallet(walletAddress: AddressOrEns): Promise<BigNumber>;
    /** ***************************************
     * WRITE FUNCTIONS
     *****************************************/
    /**
     * Set public mint conditions
     *
     * @remarks Sets the public mint conditions that need to be fullfiled by users to claim NFTs.
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
     * await dropContract.claimConditions.set(claimConditions);
     * ```
     *
     * @param claimConditionInputs - The claim conditions
     * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
     */
    set: {
        (claimConditionInputs: {
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
        prepare: (claimConditionInputs: {
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
     * Update a single claim condition with new data.
     *
     * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
     * @param claimConditionInput - the new data to update, previous data will be retained
     */
    update: {
        (index: number, claimConditionInput: {
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
        prepare: (index: number, claimConditionInput: {
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
    /** ***************************************
     * PRIVATE FUNCTIONS
     *****************************************/
    private getTokenDecimals;
    /**
     * Returns proofs and the overrides required for the transaction.
     *
     * @returns - `overrides` and `proofs` as an object.
     * @internal
     */
    prepareClaim(quantity: BigNumberish, checkERC20Allowance: boolean, decimals?: number, address?: string): Promise<ClaimVerification>;
    getClaimArguments(destinationAddress: AddressOrEns, quantity: BigNumberish, claimVerification: ClaimVerification): Promise<any[]>;
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress
     * @param quantity
     * @param options
     *
     * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
     */
    getClaimTransaction(destinationAddress: AddressOrEns, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
    isNewSinglePhaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<DropSinglePhase>;
    isNewMultiphaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<Drop>;
    isLegacySinglePhaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<DropSinglePhase_V1>;
    isLegacyMultiPhaseDrop(contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<DropERC721_V3 | DropERC20_V2>;
    private getSnapshotFormatVersion;
}
//# sourceMappingURL=drop-claim-conditions.d.ts.map