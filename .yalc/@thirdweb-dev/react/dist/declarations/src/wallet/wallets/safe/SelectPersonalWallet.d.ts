/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
import { SafeWalletConfig } from "./types";
export declare const SelectpersonalWallet: React.FC<{
    onBack: () => void;
    safeWallet: SafeWalletConfig;
    personalWallets: WalletConfig[];
    selectWallet: (wallet: WalletConfig) => void;
    renderBackButton?: boolean;
}>;
//# sourceMappingURL=SelectPersonalWallet.d.ts.map