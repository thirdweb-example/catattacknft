import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { ILoyaltyCard } from "@thirdweb-dev/contracts-js";
import { BigNumberish } from "ethers";
export declare class Erc721LoyaltyCard implements DetectableFeature {
    featureName: "ERC721LoyaltyCard";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<ILoyaltyCard>);
    /**
     * Cancel loyalty card NFTs
     *
     * @remarks Cancel loyalty card NFTs held by the connected wallet
     *
     * @example
     * ```javascript
     * // The token ID of the loyalty card you want to cancel
     * const tokenId = 0;
     *
     * await contract.nft.loyaltyCard.cancel(tokenId);
     * ```
     */
    cancel: {
        (tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Revoke loyalty card NFTs
     *
     * @remarks Revoke loyalty card NFTs held by some owner.
     *
     * @example
     * ```javascript
     * // The token ID of the loyalty card you want to revoke
     * const tokenId = 0;
     *
     * await contract.nft.loyaltyCard.revoke(tokenId);
     * ```
     */
    revoke: {
        (tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-721-loyalty-card.d.ts.map