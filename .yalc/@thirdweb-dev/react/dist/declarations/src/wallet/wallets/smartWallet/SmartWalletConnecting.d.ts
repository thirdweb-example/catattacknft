/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
import { SmartWalletConfig } from "./types";
export declare const gnosisAddressPrefixToChainId: {
    readonly eth: 1;
    readonly matic: 137;
    readonly avax: 43114;
    readonly bnb: 56;
    readonly oeth: 10;
    readonly gor: 5;
};
export declare const SmartWalletConnecting: React.FC<{
    onBack: () => void;
    onConnect: () => void;
    smartWallet: SmartWalletConfig;
    personalWallet: WalletConfig;
}>;
//# sourceMappingURL=SmartWalletConnecting.d.ts.map