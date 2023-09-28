import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsEnumerable, PermissionsEnumerableInterface } from "../PermissionsEnumerable.js";
type PermissionsEnumerableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsEnumerable__factory extends ContractFactory {
    constructor(...args: PermissionsEnumerableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsEnumerable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsEnumerable;
    connect(signer: Signer): PermissionsEnumerable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610a33806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c8063248a9ca3146100885780632f2ff15d146100bb57806336568abe146100d05780639010d07c146100e357806391d148541461010e578063a217fddf14610131578063a32fa5b314610139578063ca15c8731461014c578063d547741f1461015f575b600080fd5b6100a8610096366004610826565b60009081526001602052604090205490565b6040519081526020015b60405180910390f35b6100ce6100c936600461083f565b610172565b005b6100ce6100de36600461083f565b61020f565b6100f66100f136600461087b565b61026e565b6040516001600160a01b0390911681526020016100b2565b61012161011c36600461083f565b61035d565b60405190151581526020016100b2565b6100a8600081565b61012161014736600461083f565b610386565b6100a861015a366004610826565b6103d8565b6100ce61016d36600461083f565b610461565b60008281526001602052604090205461018b9033610476565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156102015760405162461bcd60e51b815260206004820152601d60248201527f43616e206f6e6c79206772616e7420746f206e6f6e20686f6c6465727300000060448201526064015b60405180910390fd5b61020b82826104f4565b5050565b336001600160a01b038216146102645760405162461bcd60e51b815260206004820152601a60248201527921b0b71037b7363c903932b737bab731b2903337b91039b2b63360311b60448201526064016101f8565b61020b8282610508565b60008281526002602052604081205481805b828110156103535760008681526002602090815260408083208484526001019091529020546001600160a01b0316156102fd57848214156102eb5760008681526002602090815260408083209383526001909301905220546001600160a01b03169250610357915050565b6102f66001836108b3565b9150610341565b61030886600061035d565b801561032e57506000868152600260208181526040808420848052909201905290205481145b156103415761033e6001836108b3565b91505b61034c6001826108b3565b9050610280565b5050505b92915050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008281526020818152604080832083805290915281205460ff166103cf57506000828152602081815260408083206001600160a01b038516845290915290205460ff16610357565b50600192915050565b600081815260026020526040812054815b8181101561043c5760008481526002602090815260408083208484526001019091529020546001600160a01b03161561042a576104276001846108b3565b92505b6104356001826108b3565b90506103e9565b5061044883600061035d565b1561045b576104586001836108b3565b91505b50919050565b60008281526001602052604090205461026490335b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661020b576104b2816001600160a01b0316601461055e565b6104bd83602061055e565b6040516020016104ce9291906108fb565b60408051601f198184030181529082905262461bcd60e51b82526101f891600401610968565b6104fe8282610701565b61020b828261075a565b61051282826107c6565b60009182526002602081815260408085206001600160a01b0394909416808652928401808352818620805487526001909501835290852080546001600160a01b03191690559184525255565b6060600061056d83600261099b565b6105789060026108b3565b67ffffffffffffffff811115610590576105906109ba565b6040519080825280601f01601f1916602001820160405280156105ba576020820181803683370190505b509050600360fc1b816000815181106105d5576105d56109d0565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610604576106046109d0565b60200101906001600160f81b031916908160001a905350600061062884600261099b565b6106339060016108b3565b90505b60018111156106ab576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610667576106676109d0565b1a60f81b82828151811061067d5761067d6109d0565b60200101906001600160f81b031916908160001a90535060049490941c936106a4816109e6565b9050610636565b5083156106fa5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016101f8565b9392505050565b6000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916600117905551339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b60008281526002602052604081208054916001919061077983856108b3565b9091555050600092835260026020818152604080862084875260018101835281872080546001600160a01b039097166001600160a01b031990971687179055948652939091019052912055565b6107d08282610476565b6000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006020828403121561083857600080fd5b5035919050565b6000806040838503121561085257600080fd5b8235915060208301356001600160a01b038116811461087057600080fd5b809150509250929050565b6000806040838503121561088e57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b600082198211156108c6576108c661089d565b500190565b60005b838110156108e65781810151838201526020016108ce565b838111156108f5576000848401525b50505050565b7402832b936b4b9b9b4b7b7399d1030b1b1b7bab73a1605d1b81526000835161092b8160158501602088016108cb565b7001034b99036b4b9b9b4b733903937b6329607d1b601591840191820152835161095c8160268401602088016108cb565b01602601949350505050565b60208152600082518060208401526109878160408501602087016108cb565b601f01601f19169190910160400192915050565b60008160001904831182151516156109b5576109b561089d565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816109f5576109f561089d565b50600019019056fea2646970667358221220e7c796fe57866ff0fc75245458c1ad4837ac1817034bb66dfc9209bf9041c1db64736f6c634300080c0033";
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
        anonymous?: undefined;
    })[];
    static createInterface(): PermissionsEnumerableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsEnumerable;
}
export {};
//# sourceMappingURL=PermissionsEnumerable__factory.d.ts.map