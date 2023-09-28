import type { WalletConnectConnector as WalletConnectConnectorType } from "../connectors/wallet-connect";
import type { QRModalOptions } from "../connectors/wallet-connect/qrModalOptions";
import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import type { MetaMaskConnector as MetamaskConnectorType } from "../connectors/metamask";
type MetamaskAdditionalOptions = {
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
export type MetamaskWalletOptions = WalletOptions<MetamaskAdditionalOptions>;
type ConnectWithQrCodeArgs = {
    chainId?: number;
    onQrCodeUri: (uri: string) => void;
    onConnected: (accountAddress: string) => void;
};
export declare class MetaMaskWallet extends AbstractClientWallet<MetamaskAdditionalOptions> {
    connector?: Connector;
    walletConnectConnector?: WalletConnectConnectorType;
    metamaskConnector?: MetamaskConnectorType;
    isInjected: boolean;
    static meta: {
        name: string;
        iconURL: string;
        urls: {
            chrome: string;
            android: string;
            ios: string;
        };
    };
    static id: string;
    get walletName(): "MetaMask";
    constructor(options: MetamaskWalletOptions);
    protected getConnector(): Promise<Connector>;
    /**
     * connect to wallet with QR code
     *
     * @example
     * ```typescript
     * metamask.connectWithQrCode({
     *  chainId: 1,
     *  onQrCodeUri(qrCodeUri) {
     *    // render the QR code with `qrCodeUri`
     *  },
     *  onConnected(accountAddress)  {
     *    // update UI to show connected state
     *  },
     * })
     * ```
     */
    connectWithQrCode(options: ConnectWithQrCodeArgs): Promise<void>;
    switchAccount(): Promise<void>;
}
export {};
//# sourceMappingURL=metamask.d.ts.map