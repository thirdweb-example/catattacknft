import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ForwarderConsumer, ForwarderConsumerInterface } from "../ForwarderConsumer.js";
type ForwarderConsumerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ForwarderConsumer__factory extends ContractFactory {
    constructor(...args: ForwarderConsumerConstructorParams);
    deploy(trustedForwarder: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ForwarderConsumer>;
    getDeployTransaction(trustedForwarder: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ForwarderConsumer;
    connect(signer: Signer): ForwarderConsumer__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161021138038061021183398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161018761008a600039600060cf01526101876000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063013c5f3914610046578063572b6c0514610050578063fc9c8d3914610078575b600080fd5b61004e6100a3565b005b61006361005e366004610121565b6100cd565b60405190151581526020015b60405180910390f35b60005461008b906001600160a01b031681565b6040516001600160a01b03909116815260200161006f565b6100ab6100ff565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b600061010a336100cd565b1561011c575060131936013560601c90565b503390565b60006020828403121561013357600080fd5b81356001600160a01b038116811461014a57600080fd5b939250505056fea2646970667358221220373652ac66e3ee1fe5ce092af300e47a3cab8859a822db6c59d56b17cc8660b064736f6c634300080c0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): ForwarderConsumerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ForwarderConsumer;
}
export {};
//# sourceMappingURL=ForwarderConsumer__factory.d.ts.map