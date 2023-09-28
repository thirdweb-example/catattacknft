import { WagmiConnector } from "../../../lib/wagmi-core";
import { MagicAuthOptions, MagicConnectorBaseOptions, MagicOptions } from "./types";
import type { Chain } from "@thirdweb-dev/chains";
import { Signer } from "ethers";
import { OAuthExtension, OAuthProvider } from "@magic-ext/oauth";
import { InstanceWithExtensions, MagicSDKAdditionalConfiguration, MagicSDKExtensionsOption, SDKBase } from "@magic-sdk/provider";
import { Address } from "@thirdweb-dev/sdk";
import type { AbstractProvider } from "web3-core";
import { RPCProviderModule } from "@magic-sdk/provider/dist/types/modules/rpc-provider";
export type MagicAuthConnectOptions = {
    chainId?: number;
} & ({
    email: string;
} | {
    phoneNumber: string;
} | {
    oauthProvider: OAuthProvider;
} | {});
type MagicProvider = RPCProviderModule & AbstractProvider;
export declare abstract class MagicBaseConnector extends WagmiConnector<MagicProvider, MagicConnectorBaseOptions> {
    readonly id: string;
    readonly name: string;
    ready: boolean;
    provider: MagicProvider;
    magicOptions: MagicOptions;
    protected constructor(config: {
        chains?: Chain[];
        options: MagicConnectorBaseOptions;
    });
    getAccount(): Promise<Address>;
    getProvider(): Promise<MagicProvider>;
    getSigner(): Promise<Signer>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged(accounts: string[]): void;
    protected onChainChanged(chainId: string | number): void;
    protected onDisconnect(): void;
    disconnect(): Promise<void>;
    abstract getMagicSDK(): InstanceWithExtensions<SDKBase, OAuthExtension[]>;
}
export declare class MagicAuthConnector extends MagicBaseConnector {
    #private;
    magicSDK?: InstanceWithExtensions<SDKBase, OAuthExtension[]>;
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration<string, MagicSDKExtensionsOption<OAuthExtension["name"]>>;
    oauthProviders: OAuthProvider[];
    oauthRedirectURI?: string;
    constructor(config: {
        chains?: Chain[];
        options: MagicAuthOptions;
    });
    connect(options: MagicAuthConnectOptions): Promise<{
        provider: MagicProvider;
        chain: {
            id: number;
            unsupported: boolean;
        };
        account: string;
    }>;
    getChainId(): Promise<number>;
    initializeMagicSDK({ chainId }?: {
        chainId?: number;
    }): InstanceWithExtensions<SDKBase, OAuthExtension[]>;
    getMagicSDK(): InstanceWithExtensions<SDKBase, OAuthExtension[]>;
    setupListeners(): Promise<void>;
    switchChain(chainId: number): Promise<Chain>;
}
export {};
//# sourceMappingURL=index.d.ts.map