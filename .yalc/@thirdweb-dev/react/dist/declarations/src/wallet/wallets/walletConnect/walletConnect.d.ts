import { WalletConnect } from "@thirdweb-dev/wallets";
import type { WalletConfig } from "@thirdweb-dev/react-core";
import type { WC2_QRModalOptions } from "@thirdweb-dev/wallets";
type walletConnectConfig = {
    /**
     * Your project’s unique identifier that can be obtained at https://cloud.walletconnect.com/
     *
     * Enables following functionalities within Web3Modal: wallet and chain logos, optional WalletConnect RPC, support for all wallets from our Explorer and WalletConnect v2 support. Defaults to undefined.
     *
     * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
     */
    projectId?: string;
    /**
     * options to customize QR Modal.
     *
     * https://docs.walletconnect.com/2.0/web3modal/options
     */
    qrModalOptions?: WC2_QRModalOptions;
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
export declare const walletConnect: (config?: walletConnectConfig) => WalletConfig<WalletConnect>;
export {};
//# sourceMappingURL=walletConnect.d.ts.map