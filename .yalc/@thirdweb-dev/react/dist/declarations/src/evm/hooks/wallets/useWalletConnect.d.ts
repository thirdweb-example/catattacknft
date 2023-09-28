import { WC2_QRModalOptions } from "@thirdweb-dev/wallets";
export declare function useWalletConnectV1(): (options?: {
    chainId?: number;
}) => Promise<import("@thirdweb-dev/wallets").WalletConnect>;
export declare function useWalletConnect(): (options?: {
    chainId?: number;
    projectId?: string;
    qrModalOptions?: WC2_QRModalOptions;
}) => Promise<import("@thirdweb-dev/wallets").WalletConnect>;
//# sourceMappingURL=useWalletConnect.d.ts.map