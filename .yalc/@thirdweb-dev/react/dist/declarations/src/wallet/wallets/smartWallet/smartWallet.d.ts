import { WalletConfig, ConnectUIProps } from "@thirdweb-dev/react-core";
import { SmartWallet } from "@thirdweb-dev/wallets";
import { SmartWalletConfig, SmartWalletConfigOptions } from "./types";
export declare const smartWallet: (wallet: WalletConfig<any>, config: SmartWalletConfigOptions) => SmartWalletConfig;
export declare const SmartConnectUI: (props: ConnectUIProps<SmartWallet> & {
    personalWallet: WalletConfig;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=smartWallet.d.ts.map