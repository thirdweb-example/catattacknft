import { TransactionResult } from "../types/common";
import { NFTDropConditionsInput, NFTDropConditions } from "../types/programs/nft-drop";
import { Metaplex } from "@metaplex-foundation/js";
/**
 * Set the claim conditions for your NFT Drop to control how people can claim NFTs
 *
 * @example
 * ```jsx
 * const program = await sdk.getProgram("{{program_address}}", "nft-drop");
 *
 * // Get the data of the claim condition on the drop
 * const claimCondition = await program.claimConditions.get();
 * // View the price of the drop
 * console.log(claimCondition.price);
 * // View the date when the drop will go live
 * console.log(claimCondition.goLiveDate);
 * ```
 *
 * @public
 */
export declare class ClaimConditions {
    private dropMintAddress;
    private metaplex;
    constructor(dropAddress: string, metaplex: Metaplex);
    /**
     * Get the claim condition for this contract
     * @returns - The claim condition data for this NFT Drop
     *
     * @example
     * ```jsx
     * // Get the data of the claim condition on the drop
     * const claimCondition = await program.claimConditions.get();
     * // View the price of the drop
     * console.log(claimCondition.price);
     * // View the date when the drop will go live
     * console.log(claimCondition.goLiveDate);
     * ```
     */
    get(): Promise<NFTDropConditions>;
    assertCanClaimable(quantity: number): Promise<void>;
    /**
     * Set the claim condition settings to configure how people can claim your NFT Drop
     * @param metadata - The settings to use for the claim condition of this program
     * @returns - The transaction result of setting the claim condition
     *
     * @example
     * ```jsx
     * // Specify the settings for your claim condition
     * const claimCondition = {
     *   // The price of each NFT in this drop (in SOL or SPL tokens)
     *   price: 0.1,
     *   // The date for this drop to start
     *   goLiveDate: new Date(),
     *   // ...
     * };
     *
     * const tx = await program.claimConditions.set(claimCondition);
     * ```
     */
    set(metadata: NFTDropConditionsInput): Promise<TransactionResult>;
    private getCandyMachine;
}
//# sourceMappingURL=claim-conditions.d.ts.map