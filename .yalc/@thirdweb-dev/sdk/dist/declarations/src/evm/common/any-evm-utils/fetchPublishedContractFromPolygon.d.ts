import { AddressOrEns } from "../../schema";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
export declare const THIRDWEB_DEPLOYER = "0xdd99b75f095d0c4d5112aCe938e4e6ed962fb024";
export declare function fetchPublishedContractFromPolygon(publisherAddress: AddressOrEns, contractName: string, version: string | undefined, storage: ThirdwebStorage, clientId?: string, secretKey?: string): Promise<{
    id: string;
    timestamp: string;
    metadataUri: string;
}>;
//# sourceMappingURL=fetchPublishedContractFromPolygon.d.ts.map