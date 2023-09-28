import type { CustomizationOptionsType } from "@paperxyz/sdk-common-utilities";
import { IframeCommunicator } from "./IframeCommunicator";
export declare class EmbeddedWalletIframeCommunicator<T extends {
    [key: string]: any;
}> extends IframeCommunicator<T> {
    clientId: string;
    constructor({ clientId, customizationOptions, }: {
        clientId: string;
        customizationOptions?: CustomizationOptionsType;
    });
    onIframeLoadedInitVariables(): Promise<{
        authCookie: string | null;
        deviceShareStored: string | null;
        walletUserId: string | null;
        clientId: string;
    }>;
}
export declare function createEmbeddedWalletIframeLink({ clientId, path, queryParams, }: {
    clientId: string;
    path: string;
    queryParams?: {
        [key: string]: string | number;
    };
}): URL;
export declare const EMBEDDED_WALLET_IFRAME_ID = "thirdweb-embedded-wallet-iframe";
//# sourceMappingURL=EmbeddedWalletIframeCommunicator.d.ts.map