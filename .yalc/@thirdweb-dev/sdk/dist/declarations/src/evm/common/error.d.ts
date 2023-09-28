import { Feature } from "../constants/contract-features";
import { ContractSource } from "../schema/contracts/custom";
import { BigNumber, type BigNumberish, type providers } from "ethers";
/**
 * Error that may get thrown if IPFS returns nothing for a given uri.
 * @internal
 */
export declare class NotFoundError extends Error {
    /** @internal */
    constructor(identifier?: string);
}
/**
 * Error that may get thrown if an invalid address was passed
 * @internal
 */
export declare class InvalidAddressError extends Error {
    /** @internal */
    constructor(address?: string);
}
/**
 * @internal
 */
export declare class MissingRoleError extends Error {
    /** @internal */
    /** @internal */
    constructor(address: string, role: string);
}
/**
 * @internal
 */
export declare class AssetNotFoundError extends Error {
    /** @internal */
    /** @internal */
    constructor(message?: string);
}
/**
 * @internal
 */
export declare class UploadError extends Error {
    /** @internal */
    constructor(message: string);
}
/**
 * @internal
 */
export declare class FileNameMissingError extends Error {
    /** @internal */
    constructor();
}
/**
 * @internal
 */
export declare class DuplicateFileNameError extends Error {
    /** @internal */
    constructor(fileName: string);
}
/**
 * @internal
 */
export declare class NotEnoughTokensError extends Error {
    /** @internal */
    constructor(contractAddress: string, quantity: number, available: number);
}
/**
 * @internal
 */
export declare class MissingOwnerRoleError extends Error {
    /** @internal */
    constructor();
}
/**
 * @internal
 */
export declare class QuantityAboveLimitError extends Error {
    /** @internal */
    constructor(quantity: string);
}
/**
 * Thrown when data fails to fetch from storage.
 * @internal
 */
export declare class FetchError extends Error {
    innerError?: Error;
    /** @internal */
    constructor(message: string, innerError?: Error);
}
/**
 * Thrown when attempting to create a snapshot with duplicate leafs
 * @internal
 */
export declare class DuplicateLeafsError extends Error {
    constructor(message?: string);
}
/**
 * Thrown when attempting to update/cancel an auction that already started
 * @internal
 */
export declare class AuctionAlreadyStartedError extends Error {
    constructor(id?: string);
}
/**
 * @internal
 */
export declare class FunctionDeprecatedError extends Error {
    /** @internal */
    constructor(message: string);
}
/**
 * Thrown when trying to retrieve a listing from a marketplace that doesn't exist
 * @internal
 */
export declare class ListingNotFoundError extends Error {
    constructor(marketplaceContractAddress: string, listingId?: string);
}
/**
 * Thrown when trying to retrieve a listing of the wrong type
 * @internal
 */
export declare class WrongListingTypeError extends Error {
    constructor(marketplaceContractAddress: string, listingId?: string, actualType?: string, expectedType?: string);
}
/**
 * Thrown when attempting to transfer an asset that has restricted transferability
 * @internal
 */
export declare class RestrictedTransferError extends Error {
    constructor(assetAddress?: string);
}
/**
 * Thrown when attempting to execute an admin-role function.
 * @internal
 */
export declare class AdminRoleMissingError extends Error {
    constructor(address?: string, contractAddress?: string, message?: string);
}
/**
 * Thrown when attempting to close an auction that has not ended
 * @internal
 */
export declare class AuctionHasNotEndedError extends Error {
    constructor(id?: string, endTime?: BigNumberish);
}
/**
 * Thrown when attempting to call a contract function that is not implemented
 * @internal
 */
export declare class ExtensionNotImplementedError extends Error {
    constructor(feature: Feature);
}
/**
 * @internal
 */
export type FunctionInfo = {
    signature: string;
    inputs: Record<string, any>;
    value: BigNumber;
};
export type TransactionErrorInfo = {
    reason: string;
    from: string;
    to?: string;
    network: providers.Network;
    method?: string;
    data?: string;
    rpcUrl?: string;
    value?: BigNumber;
    hash?: string;
    contractName?: string;
    sources?: ContractSource[];
};
/**
 * @public
 */
export declare class TransactionError extends Error {
    #private;
    constructor(info: TransactionErrorInfo, raw: any);
    get reason(): string;
    get raw(): any;
    get info(): TransactionErrorInfo;
}
/**
 * @internal
 */
export declare function parseRevertReason(error: any): string;
/**
 * @internal
 * @param err
 * @param message
 */
export declare function includesErrorMessage(err: any, message: string): boolean;
//# sourceMappingURL=error.d.ts.map