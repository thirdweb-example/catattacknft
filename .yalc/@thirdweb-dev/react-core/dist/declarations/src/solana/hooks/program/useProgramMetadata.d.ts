import { createSOLProgramQueryKey } from "../../../core/query-utils/query-key";
import { RequiredParam } from "../../../core/query-utils/required-param";
import { UseProgramResult } from "./useProgram";
import { UseQueryResult } from "@tanstack/react-query";
import { NFTMetadata } from "@thirdweb-dev/sdk";
export declare function programMetadataQuery(program: RequiredParam<UseProgramResult["program"]>): {
    queryKey: ReturnType<typeof createSOLProgramQueryKey>;
    queryFn(): Promise<NFTMetadata>;
    enabled: boolean;
};
/**
 * @internal
 */
export declare function useProgramMetadata(program: RequiredParam<UseProgramResult["data"]>): UseQueryResult<NFTMetadata>;
//# sourceMappingURL=useProgramMetadata.d.ts.map