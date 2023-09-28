import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import { MagicAuthOptions } from "../connectors/magic/types";
import type { MagicAuthConnectOptions, MagicAuthConnector as MagicAuthConnectorType } from "../connectors/magic";
import type { OAuthProvider as _OAuthProvider, OAuthRedirectResult } from "@magic-ext/oauth";
export type MagicLinkAdditionalOptions = MagicAuthOptions;
export type MagicLinkOptions = WalletOptions<MagicAuthOptions>;
export type MagicLinkConnectOptions = MagicAuthConnectOptions;
export type MagicOAuthProvider = _OAuthProvider;
export declare class MagicLink extends AbstractClientWallet<MagicLinkOptions, MagicAuthConnectOptions> {
    connector?: Connector;
    magicConnector?: MagicAuthConnectorType;
    oAuthRedirectResult?: OAuthRedirectResult;
    static meta: {
        iconURL: string;
        name: string;
    };
    static id: string;
    get walletName(): "Magic Link";
    options: MagicLinkOptions;
    constructor(options: MagicLinkOptions);
    initializeConnector(): Promise<Connector<{}>>;
    protected getConnector(): Promise<Connector>;
    getMagic(): import("@magic-sdk/provider").InstanceWithExtensions<import("@magic-sdk/provider").SDKBase, import("@magic-ext/oauth").OAuthExtension[]>;
    autoConnect(options?: MagicAuthConnectOptions): Promise<string>;
    disconnect(): Promise<void>;
    connect(options: MagicAuthConnectOptions): Promise<string>;
}
//# sourceMappingURL=magic.d.ts.map