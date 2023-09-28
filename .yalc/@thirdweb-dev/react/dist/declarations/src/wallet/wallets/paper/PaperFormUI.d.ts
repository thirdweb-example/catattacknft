/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
import { PaperWallet } from "@thirdweb-dev/wallets";
import { PaperLoginType } from "./types";
export declare const PaperFormUI: (props: {
    onSelect: (loginType: PaperLoginType) => void;
    showOrSeparator?: boolean | undefined;
    googleLoginSupported: boolean;
    walletConfig: WalletConfig<PaperWallet>;
}) => import("react/jsx-runtime").JSX.Element;
export declare const PaperFormUIScreen: React.FC<{
    onSelect: (loginType: PaperLoginType) => void;
    onBack: () => void;
    modalSize: "compact" | "wide";
    googleLoginSupported: boolean;
    walletConfig: WalletConfig<PaperWallet>;
}>;
//# sourceMappingURL=PaperFormUI.d.ts.map