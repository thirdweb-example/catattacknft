import type { NativeToken } from "../types/currency";
import { ChainId } from "./chains/ChainId";
/**
 * @public
 */
export declare const NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
/**
 * @public
 */
export declare const NATIVE_TOKENS: Record<number, NativeToken>;
/**
 * Returns the native token for a given chain
 * @param chainId - the chain id
 * @public
 */
export declare function getNativeTokenByChainId(chainId: ChainId): NativeToken;
export declare const LINK_TOKEN_ADDRESS: Record<number, string>;
//# sourceMappingURL=currency.d.ts.map