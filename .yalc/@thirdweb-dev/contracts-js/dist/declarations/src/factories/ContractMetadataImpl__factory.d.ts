import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContractMetadataImpl, ContractMetadataImplInterface } from "../ContractMetadataImpl.js";
type ContractMetadataImplConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractMetadataImpl__factory extends ContractFactory {
    constructor(...args: ContractMetadataImplConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractMetadataImpl>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ContractMetadataImpl;
    connect(signer: Signer): ContractMetadataImpl__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610658806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063938e3d7b1461003b578063e8a3d48514610050575b600080fd5b61004e61004936600461045a565b61006e565b005b6100586100c3565b6040516100659190610558565b60405180910390f35b61007661015b565b6100b75760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015260640160405180910390fd5b6100c0816101df565b50565b60606100cd6102ca565b80546100d890610572565b80601f016020809104026020016040519081016040528092919081815260200182805461010490610572565b80156101515780601f1061012657610100808354040283529160200191610151565b820191906000526020600020905b81548152906001019060200180831161013457829003601f168201915b5050505050905090565b6000306391d148548261016c6102d4565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b03166024820152604401602060405180830381865afa1580156101b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101da91906105ad565b905090565b60006101e96102ca565b80546101f490610572565b80601f016020809104026020016040519081016040528092919081815260200182805461022090610572565b801561026d5780601f106102425761010080835404028352916020019161026d565b820191906000526020600020905b81548152906001019060200180831161025057829003601f168201915b505050505090508161027d6102ca565b815161028c92602001906103ab565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a1681836040516102be9291906105cf565b60405180910390a15050565b60006101da61034d565b60405163572b6c0560e01b8152336004820152600090309063572b6c0590602401602060405180830381865afa158015610312573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033691906105ad565b15610348575060131936013560601c90565b503390565b60008061037b60017fa7d40346e44ca145e94a946aa34a7d4a67245577dc18699a626fe0ffc6ce32816105fd565b60405160200161038d91815260200190565b60408051601f19818403018152919052805160209091012092915050565b8280546103b790610572565b90600052602060002090601f0160209004810192826103d9576000855561041f565b82601f106103f257805160ff191683800117855561041f565b8280016001018555821561041f579182015b8281111561041f578251825591602001919060010190610404565b5061042b92915061042f565b5090565b5b8082111561042b5760008155600101610430565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561046c57600080fd5b813567ffffffffffffffff8082111561048457600080fd5b818401915084601f83011261049857600080fd5b8135818111156104aa576104aa610444565b604051601f8201601f19908116603f011681019083821181831017156104d2576104d2610444565b816040528281528760208487010111156104eb57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b8181101561053157602081850181015186830182015201610515565b81811115610543576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061056b602083018461050b565b9392505050565b600181811c9082168061058657607f821691505b602082108114156105a757634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156105bf57600080fd5b8151801515811461056b57600080fd5b6040815260006105e2604083018561050b565b82810360208401526105f4818561050b565b95945050505050565b60008282101561061d57634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220e5d8c7b2950e1ffa5c118741caf5c78512689b35b970bd566187cbe76b5e28eb64736f6c634300080c0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ContractMetadataImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractMetadataImpl;
}
export {};
//# sourceMappingURL=ContractMetadataImpl__factory.d.ts.map