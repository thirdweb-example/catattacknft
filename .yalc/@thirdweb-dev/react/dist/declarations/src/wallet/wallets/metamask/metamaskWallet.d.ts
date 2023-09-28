import type { WalletConfig } from "@thirdweb-dev/react-core";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
type MetamaskWalletOptions = {
    /**
     * When connecting MetaMask using the QR Code - Wallet Connect connector is used which requires a project id.
     * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
     *
     * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
     */
    projectId?: string;
    /**
     * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
export declare const metamaskWallet: (options?: MetamaskWalletOptions) => WalletConfig<MetaMaskWallet>;
export {};
//# sourceMappingURL=metamaskWallet.d.ts.map