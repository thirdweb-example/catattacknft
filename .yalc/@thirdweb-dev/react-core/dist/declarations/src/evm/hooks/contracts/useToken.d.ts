import { RequiredParam } from "../../../core/query-utils/required-param";
/**
 * Hook for getting an instance of a `Token` contract. This contract supports ERC20 compliant tokens.
 * @param contractAddress - the address of the Token contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "token")
 *
 *   // Now you can use the token contract in the rest of the component
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
 * - const token = useToken("0x1234...");
 * + const token = useContract("0x1234...", "token").contract;
 * ```
 */
export declare function useToken(contractAddress: RequiredParam<string>): import("@thirdweb-dev/sdk").Token | undefined;
//# sourceMappingURL=useToken.d.ts.map