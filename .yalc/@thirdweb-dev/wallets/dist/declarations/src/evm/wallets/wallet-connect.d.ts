import { QRModalOptions } from "../connectors/wallet-connect/qrModalOptions";
import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
export type WC2_QRModalOptions = QRModalOptions;
type ConnectWithQrCodeArgs = {
    chainId?: number;
    onQrCodeUri: (uri: string) => void;
    onConnected: (accountAddress: string) => void;
};
export type WalletConnectOptions = {
    /**
     * Your project’s unique identifier that can be obtained at cloud.walletconnect.com. Enables following functionalities within Web3Modal: wallet and chain logos, optional WalletConnect RPC, support for all wallets from our Explorer and WalletConnect v2 support. Defaults to undefined.
     *
     * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
     */
    projectId?: string;
    /**
     * Whether to display the QR Code Modal.
     *
     * Defaults to `true`.
     */
    qrcode?: boolean;
    /**
     * options to customize the QR Code Modal
     *
     * https://docs.walletconnect.com/2.0/web3modal/options
     */
    qrModalOptions?: WC2_QRModalOptions;
};
export declare class WalletConnect extends AbstractClientWallet<WalletConnectOptions> {
    #private;
    connector?: Connector;
    static id: string;
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "WalletConnect";
    projectId: NonNullable<WalletConnectOptions["projectId"]>;
    qrcode: WalletConnectOptions["qrcode"];
    constructor(options?: WalletOptions<WalletConnectOptions>);
    protected getConnector(): Promise<Connector>;
    connectWithQrCode(options: ConnectWithQrCodeArgs): Promise<void>;
}
export {};
//# sourceMappingURL=wallet-connect.d.ts.map