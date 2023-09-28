/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
export declare const WalletSelector: React.FC<{
    walletConfigs: WalletConfig[];
    selectWallet: (wallet: WalletConfig) => void;
    onGetStarted: () => void;
    title: string;
}>;
export declare const WalletSelection: React.FC<{
    walletConfigs: WalletConfig[];
    selectWallet: (wallet: WalletConfig) => void;
    maxHeight?: string;
}>;
export declare function WalletEntryButton(props: {
    walletConfig: WalletConfig<any>;
    selectWallet: () => void;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=WalletSelector.d.ts.map