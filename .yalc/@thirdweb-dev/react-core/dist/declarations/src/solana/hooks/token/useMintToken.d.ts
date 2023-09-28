import { RequiredParam } from "../../../core/query-utils/required-param";
import type { TokenParams } from "../../../evm";
import type { Token } from "@thirdweb-dev/sdk/solana";
/**
 * Mint tokens on your token program
 * @param program - The program instance of the program to mint on
 *
 * @example
 * ```jsx
 * import { useProgram, useMintToken } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: mint, isLoading, error } = useMintToken(program);
 *
 *   return (
 *     <button onClick={() => mint({ to: "{{wallet_address}}", amount: 1 })}>
 *       Mint
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useMintToken(program: RequiredParam<Token>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult, unknown, TokenParams, unknown>;
//# sourceMappingURL=useMintToken.d.ts.map