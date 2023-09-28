/// <reference types="react" />
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
export interface TWSDKContext {
    sdk?: ThirdwebSDK;
    _inProvider?: true;
}
export declare const ThirdwebSDKContext: import("react").Context<TWSDKContext>;
//# sourceMappingURL=thirdweb-sdk.d.ts.map