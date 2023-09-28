import type { WagmiConnector } from "../wagmi-connectors";
import type { utils } from "ethers";
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors per EIP-1474.
 * @see https://eips.ethereum.org/EIPS/eip-1474
 */
export declare class RpcError<T = undefined> extends Error {
    readonly cause: unknown;
    readonly code: number;
    readonly data?: T;
    constructor(
    /** Human-readable string */
    message: string, options: {
        cause?: unknown;
        /** Number error code */
        code: number;
        /** Other useful information about error */
        data?: T;
    });
}
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * @see https://eips.ethereum.org/EIPS/eip-1193
 */
export declare class ProviderRpcError<T = undefined> extends RpcError<T> {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(
    /** Human-readable string */
    message: string, options: {
        cause?: unknown;
        /**
         * Number error code
         * @see https://eips.ethereum.org/EIPS/eip-1193#error-standards
         */
        code: 4001 | 4100 | 4200 | 4900 | 4901 | 4902;
        /** Other useful information about error */
        data?: T;
    });
}
export declare class AddChainError extends Error {
    name: string;
    message: string;
}
export declare class ChainNotConfiguredError extends Error {
    name: string;
    constructor({ chainId, connectorId, }: {
        chainId: number;
        connectorId: string;
    });
}
export declare class ConnectorNotFoundError extends Error {
    name: string;
    message: string;
}
export declare class ResourceUnavailableError extends RpcError {
    name: string;
    constructor(cause: unknown);
}
export declare class SwitchChainError extends ProviderRpcError {
    name: string;
    constructor(cause: unknown);
}
export declare class SwitchChainNotSupportedError extends Error {
    name: string;
    constructor({ connector }: {
        connector: WagmiConnector;
    });
}
export declare class UserRejectedRequestError extends ProviderRpcError {
    name: string;
    constructor(cause: unknown);
}
export type EthersError = Error & {
    reason: string;
    code: keyof typeof utils.Logger.errors;
};
//# sourceMappingURL=errors.d.ts.map