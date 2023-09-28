import { RequiredParam } from "../../../core/query-utils/required-param";
import { QueryClient, UseQueryResult } from "@tanstack/react-query";
import type { NFTCollection, NFTDrop, ThirdwebSDK, Token } from "@thirdweb-dev/sdk/solana";
type ProgramMap = Readonly<{
    "nft-collection": NFTCollection;
    "nft-drop": NFTDrop;
    token: Token;
}>;
type ProgramType = keyof ProgramMap;
export declare function programQuery<TProgramType extends ProgramType>(queryClient: QueryClient, sdk: RequiredParam<ThirdwebSDK>, address: RequiredParam<string>, type?: TProgramType): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program-instance", {
        readonly address: RequiredParam<string>;
        readonly type: TProgramType | undefined;
    }, {
        readonly persist: false;
    }];
    queryFn: () => Promise<ProgramMap[TProgramType]>;
    enabled: boolean;
    cacheTime: number;
    staleTime: number;
};
/**
 * Get an SDK instance to interact with any program
 * @param address - the address of the program to get an interface for
 * @param type - optionally, pass in the program type to get static typing
 *
 * @example
 * ```jsx
 * import { useProgram } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}").program;
 *
 *   // Now you can use the program in the rest of the component
 *
 *   // For example, we can make a transaction
 *   async function functionCall() {
 *     await program.call("mint", ...);
 *   }
 *
 *   ...
 * }
 * ```
 *
 * @public
 */
export declare function useProgram<TProgramType extends ProgramType>(address: RequiredParam<string>, type?: TProgramType): UseQueryResult<Readonly<{
    "nft-collection": NFTCollection;
    "nft-drop": NFTDrop;
    token: Token;
}>[TProgramType], unknown> & {
    program: Readonly<{
        "nft-collection": NFTCollection;
        "nft-drop": NFTDrop;
        token: Token;
    }>[TProgramType];
};
export type UseProgramResult = ReturnType<typeof useProgram>;
export {};
//# sourceMappingURL=useProgram.d.ts.map