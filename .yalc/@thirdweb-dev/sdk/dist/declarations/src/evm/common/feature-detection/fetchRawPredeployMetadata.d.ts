import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchRawPredeployMetadata(publishMetadataUri: string, storage: ThirdwebStorage): Promise<import("zod").objectOutputType<{
    name: import("zod").ZodString;
    metadataUri: import("zod").ZodString;
    bytecodeUri: import("zod").ZodString;
    analytics: import("zod").ZodOptional<import("zod").ZodAny>;
}, import("zod").ZodAny, "strip">>;
//# sourceMappingURL=fetchRawPredeployMetadata.d.ts.map