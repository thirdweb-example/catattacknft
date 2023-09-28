import type { WalletConfig } from "@thirdweb-dev/react-core";
import { CoinbaseWallet } from "@thirdweb-dev/wallets";
import { ConnectUIProps } from "@thirdweb-dev/react-core";
type CoinbaseWalletOptions = {
    /**
     * Whether to use the Coinbase's default QR Code modal or show the custom UI in ConnectWallet Modal
     * @default "custom"
     */
    qrmodal?: "coinbase" | "custom";
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
export declare const coinbaseWallet: (options?: CoinbaseWalletOptions) => WalletConfig<CoinbaseWallet>;
export declare const CoinbaseNativeModalConnectUI: ({ close, walletConfig, open, supportedWallets, theme, }: ConnectUIProps<CoinbaseWallet>) => null;
export {};
//# sourceMappingURL=coinbaseWallet.d.ts.map