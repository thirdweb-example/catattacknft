import type { WalletConfig } from "@thirdweb-dev/react-core";
import { FrameWallet } from "@thirdweb-dev/wallets";
type FrameConfig = {
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
export declare const frameWallet: (config?: FrameConfig) => WalletConfig<FrameWallet>;
export {};
//# sourceMappingURL=frameWallet.d.ts.map