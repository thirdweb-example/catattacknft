import { RequiredParam } from "../../../core/query-utils/required-param";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import type { ValidContractInstance } from "@thirdweb-dev/sdk";
import type { providers } from "ethers";
/**
 * Get the primary sale recipient
 *
 * @example
 * ```jsx
 * const { data: primarySaleRecipient, isLoading, error } = usePrimarySalesRecipient(contract);
 * ```
 *
 * Use this to get the primary sales recipient of your {@link SmartContract}
 * @param contract - an instance of a {@link SmartContract}
 * @returns the wallet address of the primary sales recipient
 * @twfeature PrimarySale
 * @see {@link https://portal.thirdweb.com/react/react.useprimarysalerecipient?utm_source=sdk | Documentation}
 * @beta
 */
export declare function usePrimarySaleRecipient(contract: RequiredParam<ValidContractInstance>): UseQueryResult<string, unknown>;
/**
 * Set the primary sale recipient
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updatePrimarySalesRecipient,
 *     isLoading,
 *     error,
 *   } = useUpdatePrimarySaleRecipient(contract);
 *
 *   if (error) {
 *     console.error("failed to update recipient", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updatePrimarySalesRecipient({ newRecipient: "{{wallet_address}}" })}
 *     >
 *       Update Recipient
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the primary sales recipient
 * @twfeature PrimarySale
 * @see {@link https://portal.thirdweb.com/react/react.useupdateprimarysalerecipient?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useUpdatePrimarySaleRecipient(contract: RequiredParam<ValidContractInstance>): UseMutationResult<{
    receipt: providers.TransactionReceipt;
}, unknown, string, unknown>;
/**
 * Get the royalty recipient and fee
 *
 * @example
 * ```jsx
 * const { data: settings, isLoading, error } = useRoyaltySettings(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns an object containing recipient address and the royalty basis points
 * @twfeature Royalty
 * @see {@link https://portal.thirdweb.com/react/react.useroyaltysettings?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useRoyaltySettings(contract: RequiredParam<ValidContractInstance>): UseQueryResult<{
    seller_fee_basis_points: number;
    fee_recipient: string;
}, unknown>;
/**
 * Set the royalty recipient and fee
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updateRoyaltySettings,
 *     isLoading,
 *     error,
 *   } = useUpdateRoyaltySettings(contract);
 *
 *   if (error) {
 *     console.error("failed to update royalty settings", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateRoyaltySettings({ updatePayload: { fee_recipient: "{{wallet_address}}", seller_fee_basis_points: 5_00 } })}
 *     >
 *       Update Royalty Settings
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the royalty settings
 * @twfeature Royalty
 * @see {@link https://portal.thirdweb.com/react/react.useupdateroyaltysettings?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useUpdateRoyaltySettings(contract: RequiredParam<ValidContractInstance>): UseMutationResult<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<{
        seller_fee_basis_points: number;
        fee_recipient: string;
    }>;
}, unknown, {
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
}, unknown>;
/**
 * Get the platform fee recipient and basis points
 *
 * @example
 * ```jsx
 * const { data: platformFees, isLoading, error } = usePlatformFees(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns an object containing the platform fee basis points and the fee recipient address
 * @twfeature PlatformFee
 * @see {@link https://portal.thirdweb.com/react/react.useplatformfees?utm_source=sdk | Documentation}
 * @beta
 */
export declare function usePlatformFees(contract: RequiredParam<ValidContractInstance>): UseQueryResult<{
    platform_fee_basis_points: number;
    platform_fee_recipient: string;
}, unknown>;
/**
 * Set the platform fee recipient and basis points
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updatePlatformFees,
 *     isLoading,
 *     error,
 *   } = useUpdatePlatformFees(contract);
 *
 *   if (error) {
 *     console.error("failed to update platform fees", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updatePlatformFees({ updatePayload: { fee_recipient: "{{wallet_address}}", platform_fee_basis_points: 5_00 } })}
 *     >
 *       Update Platform fees
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the platform fees settings
 * @twfeature PlatformFee
 * @see {@link https://portal.thirdweb.com/react/react.useupdateplatformfees?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useUpdatePlatformFees(contract: RequiredParam<ValidContractInstance>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, {
    platform_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
}, unknown>;
/**
 * Get the metadata of this contract
 *
 * @example
 * ```jsx
 * const { data: metadata, isLoading, error } = useMetadata(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a {@link CustomContractMetadata} object containing the metadata
 * @see {@link https://portal.thirdweb.com/react/react.usemetadata?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useMetadata(contract: RequiredParam<ValidContractInstance>): UseQueryResult;
/**
 * Set the metadata of this contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updateMetadata,
 *     isLoading,
 *     error,
 *   } = useUpdateMetadata(contract);
 *
 *   if (error) {
 *     console.error("failed to update metadata", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateMetadata({
 *        name: "My Contract",
 *        description: "This is my contract"
 *       })}
 *     >
 *       Update Contract Metadata
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the metadata
 * @see {@link https://portal.thirdweb.com/react/react.useupdatemetadata?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useUpdateMetadata(contract: RequiredParam<ValidContractInstance>): UseMutationResult<any, any, any>;
//# sourceMappingURL=contract-settings.d.ts.map