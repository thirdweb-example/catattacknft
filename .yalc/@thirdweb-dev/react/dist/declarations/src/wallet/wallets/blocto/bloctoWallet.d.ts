import type { WalletConfig } from "@thirdweb-dev/react-core";
import { BloctoWallet } from "@thirdweb-dev/wallets";
export type BloctoAdditionalOptions = {
    /**
     * Your app’s unique identifier that can be obtained at https://developers.blocto.app,
     * To get advanced features and support with Blocto.
     *
     * https://docs.blocto.app/blocto-sdk/register-app-id
     */
    appId?: string;
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
export declare const bloctoWallet: (options?: BloctoAdditionalOptions) => WalletConfig<BloctoWallet>;
//# sourceMappingURL=bloctoWallet.d.ts.map