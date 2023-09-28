/// <reference types="react" />
import type { WalletConnect } from "@thirdweb-dev/wallets";
import type { WalletConfig } from "@thirdweb-dev/react-core";
export declare const WalletConnectScan: React.FC<{
    onBack: () => void;
    onConnected: () => void;
    walletConfig: WalletConfig<WalletConnect>;
    hideBackButton: boolean;
    modalSize: "wide" | "compact";
}>;
export declare const CopyButton: React.FC<{
    text: string;
    tip: string;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    hide?: boolean;
}>;
//# sourceMappingURL=WalletConnectScan.d.ts.map