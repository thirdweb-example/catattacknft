/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
import type { LocalWalletConfig } from "./types";
type ReconnectLocalWalletProps = {
    onConnect: () => void;
    goBack: () => void;
    localWallet: LocalWalletConfig;
    supportedWallets: WalletConfig[];
    renderBackButton: boolean;
    persist: boolean;
    modalSize: "wide" | "compact";
};
/**
 * For No-Credential scenario
 */
export declare const ReconnectLocalWallet: React.FC<ReconnectLocalWalletProps>;
export {};
//# sourceMappingURL=ReconnectLocalWallet.d.ts.map