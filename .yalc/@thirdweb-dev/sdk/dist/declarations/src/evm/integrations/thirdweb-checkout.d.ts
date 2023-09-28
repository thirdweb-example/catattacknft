import { SignatureDrop } from "@thirdweb-dev/contracts-js/dist/declarations/src/SignatureDrop";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { SignedPayload721WithQuantitySignature } from "../schema/contracts/common/signature";
import { PrebuiltEditionDrop, PrebuiltNFTDrop } from "../types/eips";
/**
 * @internal
 */
export declare const PAPER_API_URL: "https://paper.xyz/api/2022-08-12/platform/thirdweb";
/**
 * @internal
 */
export declare function parseChainIdToPaperChain(chainId: number): "Ethereum" | "Goerli" | "Polygon" | "Mumbai" | "Avalanche";
/**
 *
 * @param contractAddress
 * @param chainId
 * @internal
 * @returns the paper xyz contract id
 * @throws if the contract is not registered on paper xyz
 */
export declare function fetchRegisteredCheckoutId(contractAddress: string, chainId: number): Promise<string>;
/**
 * The parameters for creating a paper.xyz checkout link.
 * @public
 */
export type PaperCreateCheckoutLinkShardParams = {
    /**
     * The title of the checkout.
     */
    title: string;
    /**
     * The number of NFTs that will be purchased through the checkout flow.
     */
    quantity?: number;
    /**
     * The wallet address that the NFT will be sent to.
     */
    walletAddress?: string;
    /**
     * The email address of the recipient.
     */
    email?: string;
    /**
     * The description of the checkout.
     */
    description?: string;
    /**
     * The image that will be displayed on the checkout page.
     */
    imageUrl?: string;
    /**
     * Override the seller's Twitter handle for this checkout.
     */
    twitterHandleOverride?: string;
    /**
     * The time in minutes that the intent will be valid for.
     */
    expiresInMinutes?: number;
    /**
     * Determines whether the buyer or seller pays the network and service fees for this purchase. The seller will be billed if set to SELLER. (default: `BUYER`)
     */
    feeBearer?: "BUYER" | "SELLER";
    /**
     * Arbitrary data that will be included in webhooks and when viewing purchases in the paper.xyz dashboard.
     */
    metadata?: Record<string, string | number | null>;
    /**
     * If true, Paper will send buyers an email when their purchase is transferred to their wallet. (default: true)
     */
    sendEmailOnSuccess?: boolean;
    /**
     * The URL to prompt the user to navigate after they complete their purchase.
     */
    successCallbackUrl?: string;
    /**
     * The URL to redirect (or prompt the user to navigate) if the checkout link is expired or the buyer is not eligible to purchase (sold out, not allowlisted, sale not started, etc.).
     */
    cancelCallbackurl?: string;
    /**
     * If true, the checkout flow will redirect the user to the successCallbackUrl immediately after successful payment and bypass the final receipt page.
     */
    redirectAfterPayment?: boolean;
    /**
     * The maximum quantity the buyer is allowed to purchase in one transaction.
     */
    limitPerTransaction?: number;
};
/**
 * @internal
 */
export type PaperCreateCheckoutLinkIntentParams<TContract extends PrebuiltNFTDrop | PrebuiltEditionDrop | SignatureDrop> = PaperCreateCheckoutLinkShardParams & (TContract extends PrebuiltEditionDrop ? {
    contractArgs: {
        tokenId: string;
    };
} : TContract extends SignatureDrop ? {
    contractArgs: SignedPayload721WithQuantitySignature;
} : TContract extends PrebuiltNFTDrop ? {} : never);
/**
 * @internal
 */
export type PaperCreateCheckoutLinkIntentResult = {
    checkoutLinkIntentUrl: string;
};
/**
 * @internal
 */
export declare function createCheckoutLinkIntent<TContract extends PrebuiltNFTDrop | PrebuiltEditionDrop | SignatureDrop>(contractId: string, params: PaperCreateCheckoutLinkIntentParams<TContract>): Promise<string>;
/**
 * @internal
 */
export declare class PaperCheckout<TContract extends PrebuiltNFTDrop | PrebuiltEditionDrop | SignatureDrop> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    private getCheckoutId;
    isEnabled(): Promise<boolean>;
    createLinkIntent(params: PaperCreateCheckoutLinkIntentParams<TContract>): Promise<string>;
}
//# sourceMappingURL=thirdweb-checkout.d.ts.map