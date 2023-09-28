import type { Zora_IERC721Drop } from "@thirdweb-dev/contracts-js";
import { IERC721Drop } from "@thirdweb-dev/contracts-js/dist/declarations/src/Zora_IERC721Drop";
import { BigNumberish } from "ethers";
import { NFT } from "../../../core/schema/nft";
import type { ClaimOptions } from "../../types";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import type { Erc721 } from "./erc-721";
import { Transaction } from "./transactions";
/**
 * Claim ERC721 NFTs from a Zora Drop
 * @remarks Purchase NFTs on a Zora Drop
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */
export declare class Erc721ClaimableZora implements DetectableFeature {
    featureName: "ERC721ClaimZora";
    private erc721;
    private contractWrapper;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<Zora_IERC721Drop>);
    /**
     * Claim NFT
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
     * @param destinationAddress - Address you want to send the token to, needs to be the connected wallet address
     * @param quantity - Quantity of the tokens you want to claim
     * @param options - Not applicable
     *
     * @returns - Receipt for the transaction
     */
    to: {
        (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    getSaleDetails(): Promise<IERC721Drop.SaleDetailsStructOutput>;
}
//# sourceMappingURL=erc-721-claim-zora.d.ts.map