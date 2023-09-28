/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
import { EmbeddedWallet } from "@thirdweb-dev/wallets";
import type { EmbeddedWalletLoginType } from "./types";
export declare const EmbeddedWalletFormUI: (props: {
    onSelect: (loginType: EmbeddedWalletLoginType) => void;
    showOrSeparator?: boolean | undefined;
    walletConfig: WalletConfig<EmbeddedWallet>;
}) => import("react/jsx-runtime").JSX.Element;
export declare const EmbeddedWalletFormUIScreen: React.FC<{
    onSelect: (loginType: EmbeddedWalletLoginType) => void;
    onBack: () => void;
    modalSize: "compact" | "wide";
    walletConfig: WalletConfig<EmbeddedWallet>;
}>;
//# sourceMappingURL=EmbeddedWalletFormUI.d.ts.map