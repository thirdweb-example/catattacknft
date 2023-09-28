import type { IAccountPermissions } from "@thirdweb-dev/contracts-js";
import { BigNumber, BytesLike } from "ethers";
import { z } from "zod";
export type SignerPermissions = {
    startDate: Date;
    expirationDate: Date;
    nativeTokenLimitPerTransaction: BigNumber;
    approvedCallTargets: string[];
};
export declare const SignerPermissionsSchema: z.ZodObject<{
    startDate: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
    expirationDate: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
    nativeTokenLimitPerTransaction: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    approvedCallTargets: z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">;
}, "strip", z.ZodTypeAny, {
    nativeTokenLimitPerTransaction: string;
    startDate: BigNumber;
    expirationDate: BigNumber;
    approvedCallTargets: string[];
}, {
    approvedCallTargets: string[];
    startDate?: number | Date | undefined;
    expirationDate?: number | Date | undefined;
    nativeTokenLimitPerTransaction?: string | number | undefined;
}>;
export type SignerPermissionsInput = z.input<typeof SignerPermissionsSchema>;
export type SignerPermissionsOutput = z.output<typeof SignerPermissionsSchema>;
export type SignerWithPermissions = {
    isAdmin?: boolean;
    signer: string;
    permissions: SignerPermissions;
};
export declare const PermissionSnapshotSchema: z.ZodArray<z.ZodObject<{
    signer: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    makeAdmin: z.ZodBoolean;
    permissions: z.ZodObject<{
        startDate: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
        expirationDate: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
        nativeTokenLimitPerTransaction: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
        approvedCallTargets: z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        nativeTokenLimitPerTransaction: string;
        startDate: BigNumber;
        expirationDate: BigNumber;
        approvedCallTargets: string[];
    }, {
        approvedCallTargets: string[];
        startDate?: number | Date | undefined;
        expirationDate?: number | Date | undefined;
        nativeTokenLimitPerTransaction?: string | number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    signer: string;
    permissions: {
        nativeTokenLimitPerTransaction: string;
        startDate: BigNumber;
        expirationDate: BigNumber;
        approvedCallTargets: string[];
    };
    makeAdmin: boolean;
}, {
    signer: string;
    permissions: {
        approvedCallTargets: string[];
        startDate?: number | Date | undefined;
        expirationDate?: number | Date | undefined;
        nativeTokenLimitPerTransaction?: string | number | undefined;
    };
    makeAdmin: boolean;
}>, "many">;
export type PermissionSnapshotInput = z.input<typeof PermissionSnapshotSchema>;
export type PermissionSnapshotOutput = z.output<typeof PermissionSnapshotSchema>;
export type SignedSignerPermissionsPayload = {
    payload: IAccountPermissions.SignerPermissionRequestStruct;
    signature: BytesLike;
};
export declare const SignerPermissionRequest: {
    name: string;
    type: string;
}[];
//# sourceMappingURL=account.d.ts.map