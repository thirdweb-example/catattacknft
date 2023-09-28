import type { WalletConfig } from "@thirdweb-dev/react-core";
import { PhantomWallet } from "@thirdweb-dev/wallets";
type PhantomWalletOptions = {
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
export declare const phantomWallet: (options?: PhantomWalletOptions) => WalletConfig<PhantomWallet>;
export {};
//# sourceMappingURL=phantomWallet.d.ts.map