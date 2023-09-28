import { RequiredParam } from "../../../core/query-utils/required-param";
import { ClaimTokenParams, TokenBurnParams, TokenContract, TokenParams, WalletAddress } from "../../types";
import { UseMutationResult } from "@tanstack/react-query";
import type { providers } from "ethers";
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get the total supply for this token
 *
 * @example
 * ```javascript
 * const { data: totalSupply, isLoading, error } = useTokenSupply(contract);
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a response object that includes the total minted supply
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetokensupply?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useTokenSupply(contract: RequiredParam<TokenContract>): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
}, unknown>;
/**
 * Get token balance for a specific wallet
 *
 * @example
 * ```javascript
 * const { data: balance, isLoading, error } = useTokenBalance(contract, "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a response object that includes the balance of the address
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetokenbalance?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useTokenBalance(contract: RequiredParam<TokenContract>, walletAddress: RequiredParam<WalletAddress>): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
}, unknown>;
/**
 * Get token decimals
 *
 * @example
 * ```javascript
 * const { data: decimals, isLoading, error } = useTokenDecimals(contract);
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a response object that includes the decimals of the ERC20 token
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetokendecimals?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useTokenDecimals(contract: RequiredParam<TokenContract>): import("@tanstack/react-query").UseQueryResult<number, unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Mint tokens
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: mintTokens,
 *     isLoading,
 *     error,
 *   } = useMintToken(contract);
 *
 *   if (error) {
 *     console.error("failed to mint tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintTokens({ to: "{{wallet_address}}", amount: 1000 })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to mint new tokens to the connected wallet
 * @twfeature ERC20Mintable
 * @see {@link https://portal.thirdweb.com/react/react.useminttoken?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useMintToken(contract: RequiredParam<TokenContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenParams, unknown>;
/**
 * Claim tokens to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: claimTokens,
 *     isLoading,
 *     error,
 *   } = useClaimToken(contract);
 *
 *   if (error) {
 *     console.error("failed to claim tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => claimTokens({ to: "{{wallet_address}}", amount: 100 })}
 *     >
 *       Claim Tokens!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to tokens to the wallet specified in the params
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimtoken?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useClaimToken(contract: RequiredParam<TokenContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, ClaimTokenParams, unknown>;
/**
 * Transfer tokens to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: transferTokens,
 *     isLoading,
 *     error,
 *   } = useTransferToken(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferTokens({ to: "{{wallet_address}}", amount: 1000 })}
 *     >
 *       Transfer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to transfer tokens
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetransfertoken?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useTransferToken(contract: RequiredParam<TokenContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenParams, unknown>;
/**
 * Airdrop tokens to a list of wallets
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: transferBatchTokens,
 *     isLoading,
 *     error,
 *   } = useTransferToken(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer batch tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferBatchTokens([{ to: "{{wallet_address}}", amount: 1000 }, { to: "{{wallet_address}}", amount: 2000 }])}
 *     >
 *       Airdrop
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to transfer batch tokens
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetransferbatchtoken?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useTransferBatchToken(contract: RequiredParam<TokenContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenParams[], unknown>;
/**
 * Burn tokens
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: burnTokens,
 *     isLoading,
 *     error,
 *   } = useBurnToken(contract);
 *
 *   if (error) {
 *     console.error("failed to burn tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnTokens({ amount: 1000 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to burn tokens from the connected wallet
 * @twfeature ERC20Burnable
 * @see {@link https://portal.thirdweb.com/react/react.useburntoken?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useBurnToken(contract: RequiredParam<TokenContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenBurnParams, unknown>;
//# sourceMappingURL=token.d.ts.map