import { QueryAllParams } from "../../../core/schema/QueryParams";
import { NFT } from "../../../core/schema/nft";
import { TransactionResult } from "../../types/common";
import { CreatorOutput } from "../../types/programs";
import { JsonMetadata, Metadata, Metaplex, Nft, NftWithToken, Sft, SftWithToken } from "@metaplex-foundation/js";
import { PublicKey, SignaturesForAddressOptions, TransactionResponse } from "@solana/web3.js";
/**
 * @internal
 */
export declare class NFTHelper {
    private metaplex;
    private connection;
    constructor(metaplex: Metaplex);
    getRaw(nftAddress: string): Promise<Sft | SftWithToken | Nft | NftWithToken>;
    get(nftAddress: string): Promise<NFT>;
    transfer(receiverAddress: string, nftAddress: string, quantity?: number): Promise<TransactionResult>;
    creatorsOf(nftAddress: string): Promise<CreatorOutput[]>;
    balanceOf(walletAddress: string, nftAddress: string): Promise<number>;
    ownerOf(nftAddress: string): Promise<string | undefined>;
    supplyOf(nftAddress: string): Promise<string>;
    totalSupply(collectionAddress: string): Promise<number>;
    getAll(collectionAddress: string, queryParams?: QueryAllParams): Promise<NFT[]>;
    getTransactions(collectionAddress: string, options?: SignaturesForAddressOptions): Promise<TransactionResponse[]>;
    getAllMetadataAddresses(collectionAddress: string): Promise<PublicKey[]>;
    toNFTMetadata(meta: Nft | Sft | NftWithToken | SftWithToken | Metadata<JsonMetadata<string>>): Promise<NFT>;
    private toNFTMetadataResolved;
}
//# sourceMappingURL=nft-helper.d.ts.map