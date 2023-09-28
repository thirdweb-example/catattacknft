/// <reference types="react" />
import type { WalletConfig } from "@thirdweb-dev/react-core";
export declare const WCOpenURI: React.FC<{
    onBack: () => void;
    onConnected: () => void;
    walletConfig: WalletConfig<any>;
    appUriPrefix: {
        ios: string;
        android: string;
        other: string;
    };
    errorConnecting: boolean;
    onRetry: () => void;
    hideBackButton: boolean;
    onGetStarted: () => void;
}>;
//# sourceMappingURL=WCOpenUri.d.ts.map