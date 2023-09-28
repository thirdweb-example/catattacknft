import type { providers } from "ethers";
import type { Signer } from "ethers";
/**
 * util function to check for signer, ripped out of ethers Signer.isProvider
 *
 * @param value possible signer
 * @returns boolean if value is a signer
 * @internal
 */
export declare function isSigner(value: any): value is Signer;
/**
 * util function to check for provider, ripped out of ethers providers.Provider.isProvider
 *
 * @param value possible provider
 * @returns boolean if value is a provider
 * @internal
 */
export declare function isProvider(value: any): value is providers.Provider;
//# sourceMappingURL=getSignerAndProvider.d.ts.map