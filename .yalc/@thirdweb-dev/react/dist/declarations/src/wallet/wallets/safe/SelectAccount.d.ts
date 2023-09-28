/// <reference types="react" />
import { SafeWalletConfig } from "./types";
export declare const gnosisAddressPrefixToChainId: {
    readonly eth: 1;
    readonly matic: 137;
    readonly avax: 43114;
    readonly bnb: 56;
    readonly oeth: 10;
    readonly gor: 5;
    readonly "base-gor": 84531;
};
export declare const SelectAccount: React.FC<{
    onBack: () => void;
    onConnect: () => void;
    safeWalletConfig: SafeWalletConfig;
    renderBackButton?: boolean;
}>;
//# sourceMappingURL=SelectAccount.d.ts.map