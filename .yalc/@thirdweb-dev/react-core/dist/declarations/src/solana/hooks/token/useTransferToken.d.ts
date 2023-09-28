import { RequiredParam } from "../../../core/query-utils/required-param";
import type { Amount } from "@thirdweb-dev/sdk";
import type { Token } from "@thirdweb-dev/sdk/solana";
export type TransferTokenMutationParams = {
    amount: Amount;
    receiverAddress: string;
};
/**
 * Transfer tokens from the connected wallet to another wallet
 * @param program - The program instance of the program to mint on
 *
 * @example
 * ```jsx
 * import { useProgram, useTransferToken } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: transfer, isLoading, error } = useTransferToken(program);
 *
 *   return (
 *     <button onClick={() => transfer({ to: "{{wallet_address}}", amount: 1 })}>
 *       Transfer
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useTransferToken(program: RequiredParam<Token>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult, unknown, TransferTokenMutationParams, unknown>;
//# sourceMappingURL=useTransferToken.d.ts.map