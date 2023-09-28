import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IClaimableERC1155 } from "@thirdweb-dev/contracts-js";
import { BigNumberish } from "ethers";
/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.drop.claim.to("0x...", tokenId, quantity);
 * ```
 */
export declare class ERC1155Claimable implements DetectableFeature {
    featureName: "ERC1155ClaimCustom";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<IClaimableERC1155>);
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param options - Options for claiming the NFTs
     *
     * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
     */
    getClaimTransaction(destinationAddress: AddressOrEns, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
    /**
     * Claim NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const tokenId = 0; // the id of the NFT you want to claim
     * const quantity = 1; // how many NFTs you want to claim
     *
     * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param options - Options for claiming the NFTs
     *
     * @returns - Receipt for the transaction
     */
    to: {
        (destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-1155-claimable.d.ts.map