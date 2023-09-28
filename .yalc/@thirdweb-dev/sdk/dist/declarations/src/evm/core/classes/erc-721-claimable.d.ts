import type { NFT } from "../../../core/schema/nft";
import type { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import type { TransactionResultWithId } from "../types";
import type { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IClaimableERC721 } from "@thirdweb-dev/contracts-js";
import { BigNumberish } from "ethers";
import type { Erc721 } from "./erc-721";
/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */
export declare class Erc721Claimable implements DetectableFeature {
    featureName: "ERC721ClaimCustom";
    private erc721;
    private contractWrapper;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<IClaimableERC721>);
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param options - Options for claiming the NFTs
     *
     * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
     */
    getClaimTransaction(destinationAddress: AddressOrEns, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
    /**
     * Claim NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many NFTs you want to claim
     *
     * const tx = await contract.erc721.claimTo(address, quantity);
     * const receipt = tx[0].receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param options - Options for claiming the NFTs
     *
     * @returns - Receipt for the transaction
     */
    to: {
        (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
}
//# sourceMappingURL=erc-721-claimable.d.ts.map