/// <reference types="react" />
import type { LocalWalletConfig } from "./types";
export declare const CreateLocalWallet_Password: React.FC<{
    onConnect: () => void;
    goBack: () => void;
    localWalletConf: LocalWalletConfig;
    renderBackButton: boolean;
    persist: boolean;
}>;
export declare const CreateLocalWallet_Guest: React.FC<{
    onConnect: () => void;
    goBack: () => void;
    localWallet: LocalWalletConfig;
    persist: boolean;
}>;
//# sourceMappingURL=CreateLocalWallet.d.ts.map