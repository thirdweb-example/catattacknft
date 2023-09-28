import { RequiredParam } from "../../../core/query-utils/required-param";
/**
 * Hook for getting an instance of a `Token Drop` contract.
 * @param contractAddress - the address of the Token Drop contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "token-drop")
 *
 *   // Now you can use the token drop contract in the rest of the component
 *
 *   // For example, this function will get the connected wallets token balance
 *   async function balance() {
 *     const balance = await contract.balance()
 *     return balance
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const token = useTokenDrop("0x1234...");
 * + const token = useContract("0x1234...", "token-drop").contract;
 * ```
 */
export declare function useTokenDrop(contractAddress: RequiredParam<string>): import("@thirdweb-dev/sdk").TokenDrop | undefined;
//# sourceMappingURL=useTokenDrop.d.ts.map