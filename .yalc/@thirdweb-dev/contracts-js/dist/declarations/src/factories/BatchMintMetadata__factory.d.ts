import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BatchMintMetadata, BatchMintMetadataInterface } from "../BatchMintMetadata.js";
type BatchMintMetadataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BatchMintMetadata__factory extends ContractFactory {
    constructor(...args: BatchMintMetadataConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BatchMintMetadata>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BatchMintMetadata;
    connect(signer: Signer): BatchMintMetadata__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061012a806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632419f51b14603757806363b45e2d146058575b600080fd5b6046604236600460c6565b605f565b60405190815260200160405180910390f35b6000546046565b60008054821060a45760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b604482015260640160405180910390fd5b6000828154811060b45760b460de565b90600052602060002001549050919050565b60006020828403121560d757600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fdfea26469706673582212206ec6468f5a7c518de219fa894a9cec1309e4d36ea8c36af8c8e16d4df54ec4bf64736f6c634300080c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BatchMintMetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BatchMintMetadata;
}
export {};
//# sourceMappingURL=BatchMintMetadata__factory.d.ts.map