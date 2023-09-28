import { SafeWallet } from "@thirdweb-dev/wallets";
import { WalletConfig, ConnectUIProps } from "@thirdweb-dev/react-core";
import type { SafeWalletConfigOptions, SafeWalletConfig } from "./types";
export declare const safeWallet: (config?: SafeWalletConfigOptions & {
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
}) => SafeWalletConfig;
export declare const SafeConnectUI: (props: ConnectUIProps<SafeWallet> & {
    personalWallets: WalletConfig[];
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=safeWallet.d.ts.map