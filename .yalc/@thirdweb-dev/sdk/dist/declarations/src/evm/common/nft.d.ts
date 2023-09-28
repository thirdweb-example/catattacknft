import { NFTMetadata, NFTMetadataOrUri } from "../../core/schema/nft";
import type { ThirdwebStorage, UploadProgressEvent } from "@thirdweb-dev/storage";
import { type BigNumberish, type providers } from "ethers";
export declare const FALLBACK_METADATA: {
    name: string;
};
/**
 * fetches the token metadata
 * @param tokenId - the id (to get it back in the output)
 * @param tokenUri - the uri to fetch
 * @param storage - which storage to fetch from
 *
 * @internal
 */
export declare function fetchTokenMetadata(tokenId: BigNumberish, tokenUri: string, storage: ThirdwebStorage): Promise<NFTMetadata>;
/**
 * @internal
 * @param contractAddress
 * @param provider
 * @param tokenId
 * @param storage
 */
export declare function fetchTokenMetadataForContract(contractAddress: string, provider: providers.Provider, tokenId: BigNumberish, storage: ThirdwebStorage): Promise<NFTMetadata>;
/**
 * @internal
 * @param metadata
 * @param storage
 */
export declare function uploadOrExtractURI(metadata: NFTMetadataOrUri, storage: ThirdwebStorage): Promise<string>;
/**
 * @internal
 * @param metadatas
 * @param storage
 * @param startNumber
 * @param contractAddress
 * @param signerAddress
 * @param options
 */
export declare function uploadOrExtractURIs(metadatas: NFTMetadataOrUri[], storage: ThirdwebStorage, startNumber?: number, options?: {
    onProgress: (event: UploadProgressEvent) => void;
}): Promise<string[]>;
export declare function getBaseUriFromBatch(uris: string[]): string;
//# sourceMappingURL=nft.d.ts.map