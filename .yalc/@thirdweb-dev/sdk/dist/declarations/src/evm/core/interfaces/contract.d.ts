import { NetworkInput } from "../types";
/**
 * @public
 */
export interface UpdateableNetwork {
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): string;
    chainId: number;
}
//# sourceMappingURL=contract.d.ts.map