import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder.js";
type ERC721HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721Holder__factory extends ContractFactory {
    constructor(...args: ERC721HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721Holder;
    connect(signer: Signer): ERC721Holder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101af806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004e61003e36600461009d565b630a85bd0160e11b949350505050565b6040516001600160e01b0319909116815260200160405180910390f35b80356001600160a01b038116811461008257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156100b357600080fd5b6100bc8561006b565b93506100ca6020860161006b565b925060408501359150606085013567ffffffffffffffff808211156100ee57600080fd5b818701915087601f83011261010257600080fd5b81358181111561011457610114610087565b604051601f8201601f19908116603f0116810190838211818310171561013c5761013c610087565b816040528281528a602084870101111561015557600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea2646970667358221220e4d0b800bf348fd6f162e71ac153b6a9c75beecd51507fe35e3d6b900ef61b9f64736f6c634300080c0033";
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
    static createInterface(): ERC721HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Holder;
}
export {};
//# sourceMappingURL=ERC721Holder__factory.d.ts.map