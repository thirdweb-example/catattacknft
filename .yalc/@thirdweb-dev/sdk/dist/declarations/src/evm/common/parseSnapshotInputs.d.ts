import { SnapshotInput } from "../types/claim-conditions/claim-conditions";
export declare function parseSnapshotInputs(inputs: SnapshotInput): Promise<{
    address: string;
    maxClaimable: string;
    price?: string | undefined;
    currencyAddress?: string | undefined;
}[]>;
//# sourceMappingURL=parseSnapshotInputs.d.ts.map