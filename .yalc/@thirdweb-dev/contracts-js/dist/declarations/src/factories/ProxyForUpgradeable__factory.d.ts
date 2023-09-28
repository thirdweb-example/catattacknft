import { Signer, ContractFactory, PayableOverrides, BytesLike } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyForUpgradeable, ProxyForUpgradeableInterface } from "../ProxyForUpgradeable.js";
type ProxyForUpgradeableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProxyForUpgradeable__factory extends ContractFactory {
    constructor(...args: ProxyForUpgradeableConstructorParams);
    deploy(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ProxyForUpgradeable>;
    getDeployTransaction(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ProxyForUpgradeable;
    connect(signer: Signer): ProxyForUpgradeable__factory;
    static readonly bytecode = "0x608060405260405161071f38038061071f83398101604081905261002291610314565b61002e82826000610035565b5050610431565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d083836040518060600160405280602781526020016106f8602791396101a9565b9392505050565b6100ea8161028760201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61029660201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6102115760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610148565b600080856001600160a01b03168560405161022c91906103e2565b600060405180830381855af49150503d8060008114610267576040519150601f19603f3d011682016040523d82523d6000602084013e61026c565b606091505b50909250905061027d828286610299565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a85750816100d0565b8251156102b85782518084602001fd5b8160405162461bcd60e51b815260040161014891906103fe565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103035781810151838201526020016102eb565b838111156100645750506000910152565b6000806040838503121561032757600080fd5b82516001600160a01b038116811461033e57600080fd5b60208401519092506001600160401b038082111561035b57600080fd5b818501915085601f83011261036f57600080fd5b815181811115610381576103816102d2565b604051601f8201601f19908116603f011681019083821181831017156103a9576103a96102d2565b816040528281528860208487010111156103c257600080fd5b6103d38360208301602088016102e8565b80955050505050509250929050565b600082516103f48184602087016102e8565b9190910192915050565b602081526000825180602084015261041d8160408501602087016102e8565b601f01601f19169190910160400192915050565b6102b8806104406000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025c602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b60606100ce84610055565b61012e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b031685604051610149919061020c565b600060405180830381855af49150503d8060008114610184576040519150601f19603f3d011682016040523d82523d6000602084013e610189565b606091505b50915091506101998282866101a3565b9695505050505050565b606083156101b257508161004e565b8251156101c25782518084602001fd5b8160405162461bcd60e51b81526004016101259190610228565b60005b838110156101f75781810151838201526020016101df565b83811115610206576000848401525b50505050565b6000825161021e8184602087016101dc565b9190910192915050565b60208152600082518060208401526102478160408501602087016101dc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220bf59c3125fa6d1becde4a91895f4640e23c89cff7d4000eed9616eb39e1a3ffa64736f6c634300080c0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    static createInterface(): ProxyForUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyForUpgradeable;
}
export {};
//# sourceMappingURL=ProxyForUpgradeable__factory.d.ts.map