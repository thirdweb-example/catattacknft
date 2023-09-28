import { Signer, WalletAdapter } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";
import { z } from "zod";
/**
 * @internal
 */
export declare const OptionalPropertiesInput: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>>;
/**
 * @internal
 */
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, number, Date>;
/**
 * @internal
 */
export type TransactionResult = {
    signature: string;
};
/**
 * @internal
 */
export type WalletSigner = Signer | WalletAdapter;
/**
 * @internal
 */
export type AccountType = "nft-collection" | "nft-drop" | "token";
/**
 * @internal
 */
export type WalletAccount = {
    type: AccountType;
    address: string;
    name: string;
};
/**
 * @internal
 */
export declare const AddressSchema: z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodType<PublicKey, z.ZodTypeDef, PublicKey>, string, PublicKey>]>;
//# sourceMappingURL=common.d.ts.map