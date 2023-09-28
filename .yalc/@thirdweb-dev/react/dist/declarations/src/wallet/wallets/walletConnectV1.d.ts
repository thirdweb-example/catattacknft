/**
 * @deprecated Use `walletConnect` instead
 *
 * The WalletConnect v1.0 protocol has been shut down and no longer works.
 * To avoid breaking change, `walletConnectV1` is still available but is an alias of `walletConnect`.
 */
export declare const walletConnectV1: (config?: {
    projectId?: string | undefined;
    qrModalOptions?: import("@thirdweb-dev/wallets/dist/declarations/src/evm/connectors/wallet-connect/qrModalOptions").QRModalOptions | undefined;
    recommended?: boolean | undefined;
} | undefined) => import("@thirdweb-dev/react-core").WalletConfig<import("@thirdweb-dev/wallets").WalletConnect>;
//# sourceMappingURL=walletConnectV1.d.ts.map