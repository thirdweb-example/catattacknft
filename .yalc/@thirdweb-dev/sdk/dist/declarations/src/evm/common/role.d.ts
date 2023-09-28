import { type BytesLike } from "ethers";
/**
 *
 * @internal
 */
declare const roleMap: {
    readonly admin: "";
    readonly transfer: "TRANSFER_ROLE";
    readonly minter: "MINTER_ROLE";
    readonly pauser: "PAUSER_ROLE";
    readonly lister: "LISTER_ROLE";
    readonly asset: "ASSET_ROLE";
    readonly unwrap: "UNWRAP_ROLE";
    readonly factory: "FACTORY_ROLE";
    readonly signer: "SIGNER_ROLE";
};
/**
 * @public
 */
export type Role = keyof typeof roleMap;
/**
 * @public
 */
export declare const ALL_ROLES: ("admin" | "minter" | "transfer" | "lister" | "asset" | "unwrap" | "pauser" | "factory" | "signer")[];
/**
 * @internal
 */
export declare function getRoleHash(role: Role): BytesLike;
export {};
//# sourceMappingURL=role.d.ts.map