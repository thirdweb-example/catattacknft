import { SDKOptions, SDKOptionsOutput } from "../../schema/sdk-options";
import { NetworkInput } from "../types";
import type { Signer, providers } from "ethers";
import EventEmitter from "eventemitter3";
/**
 * @internal
 */
export declare class RPCConnectionHandler extends EventEmitter {
    private provider;
    private signer;
    network: NetworkInput;
    readonly options: SDKOptionsOutput;
    constructor(network: NetworkInput, options: SDKOptions);
    /**
     * The function to call whenever the network changes, such as when the users connects their wallet, disconnects their wallet, the connected chain changes, etc.
     *
     * @param network - a network, signer or provider that ethers js can interpret
     */
    updateSignerOrProvider(network: NetworkInput): void;
    /**
     *
     * @returns whether or not a signer is set, `true` if there is no signer so the class is in "read only" mode
     */
    isReadOnly(): boolean;
    /**
     * Explicitly get the active signer.
     * @returns the active signer, if there is one
     */
    getSigner(): Signer | undefined;
    /**
     * Explicitly get the active provider.
     * @returns the active provider
     */
    getProvider(): providers.Provider;
    /**
     *
     * @returns the current signer if there is one, otherwise the active provider
     */
    getSignerOrProvider(): Signer | providers.Provider;
}
//# sourceMappingURL=rpc-connection-handler.d.ts.map