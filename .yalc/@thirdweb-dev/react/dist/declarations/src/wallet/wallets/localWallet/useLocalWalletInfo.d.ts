/// <reference types="react" />
import { LocalWallet } from "@thirdweb-dev/wallets";
import { WalletData } from "@thirdweb-dev/wallets/src/evm/wallets/local-wallet";
import type { LocalWalletConfig } from "./types";
export declare function useLocalWalletInfo(localWalletConfig: LocalWalletConfig, persist: boolean): {
    setLocalWallet: import("react").Dispatch<import("react").SetStateAction<LocalWallet | null>>;
    localWallet: LocalWallet | null;
    walletData: "loading" | WalletData | null;
    meta: import("@thirdweb-dev/wallets/dist/declarations/src/evm/wallets/base").WalletMeta;
    persist: boolean;
};
//# sourceMappingURL=useLocalWalletInfo.d.ts.map