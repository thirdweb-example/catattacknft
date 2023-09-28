import type { ZerionConnector } from "../connectors/zerion";
import type { WalletConnectConnector as WalletConnectConnectorType } from "../connectors/wallet-connect";
import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import { QRModalOptions } from "../connectors/wallet-connect/qrModalOptions";
type ConnectWithQrCodeArgs = {
    chainId?: number;
    onQrCodeUri: (uri: string) => void;
    onConnected: (accountAddress: string) => void;
};
type ZerionAdditionalOptions = {
    /**
     * Whether to open the default Wallet Connect QR code Modal for connecting to Zerion Wallet on mobile if Zerion is not injected when calling connect().
     */
    qrcode?: boolean;
    /**
     * When connecting MetaMask using the QR Code - Wallet Connect connector is used which requires a project id.
     * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
     *
     * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
     */
    projectId?: string;
    /**
     * options to customize the Wallet Connect QR Code Modal ( only relevant when qrcode is true )
     *
     * https://docs.walletconnect.com/2.0/web3modal/options
     */
    qrModalOptions?: QRModalOptions;
};
export declare class ZerionWallet extends AbstractClientWallet<ZerionAdditionalOptions> {
    connector?: Connector;
    zerionConnector?: ZerionConnector;
    walletConnectConnector?: WalletConnectConnectorType;
    isInjected: boolean;
    static id: "zerion";
    static meta: {
        name: string;
        iconURL: string;
        urls: {
            chrome: string;
            android: string;
            ios: string;
        };
    };
    get walletName(): string;
    constructor(options?: WalletOptions<ZerionAdditionalOptions>);
    protected getConnector(): Promise<Connector>;
    connectWithQrCode(options: ConnectWithQrCodeArgs): Promise<void>;
}
export {};
//# sourceMappingURL=zerion.d.ts.map