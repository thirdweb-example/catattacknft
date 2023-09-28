import { RequiredParam } from "../../../core/query-utils/required-param";
/**
 * Hook for getting an instance of a `Split` contract. This contract supports fund distribution to multiple parties.
 * @param contractAddress - the address of the Split contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "split")
 *
 *   // Now you can use the split contract in the rest of the component
 *
 *   // For example, this function will return all the recipients of the split
 *   async function getRecipients() {
 *     const recipients = await contract.getAllRecipients()
 *     return recipients
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const split = useSplit("0x1234...");
 * + const split = useContract("0x1234...", "split").contract;
 * ```
 */
export declare function useSplit(contractAddress: RequiredParam<string>): import("@thirdweb-dev/sdk").Split | undefined;
//# sourceMappingURL=useSplit.d.ts.map