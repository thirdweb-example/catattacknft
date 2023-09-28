import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { TWSDKContext } from "../contexts/thirdweb-sdk";
/**
 * @internal
 */
export declare function useSDKContext(): TWSDKContext;
/**
 *
 * @returns {@link ThirdwebSDK}
 * Access the instance of the thirdweb SDK created by the ThirdwebProvider
 * to call methods using the connected wallet on the desiredChainId.
 * @example
 * ```javascript
 * const sdk = useSDK();
 * ```
 */
export declare function useSDK(): ThirdwebSDK | undefined;
/**
 * @internal
 */
export declare function useSDKChainId(): number | undefined;
//# sourceMappingURL=useSDK.d.ts.map