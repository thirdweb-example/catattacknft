import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AirdropERC721Claimable, AirdropERC721ClaimableInterface } from "../AirdropERC721Claimable.js";
type AirdropERC721ClaimableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AirdropERC721Claimable__factory extends ContractFactory {
    constructor(...args: AirdropERC721ClaimableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AirdropERC721Claimable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AirdropERC721Claimable;
    connect(signer: Signer): AirdropERC721Claimable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600054610100900460ff16158080156100315750600054600160ff909116105b8061005c575061004a3061013260201b6108501760201c565b15801561005c575060005460ff166001145b6100c35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156100e6576000805461ff0019166101001790555b801561012c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50610141565b6001600160a01b03163b151590565b6113eb806101506000396000f3fe608060405234801561001057600080fd5b50600436106100e65760003560e01c806305981769146100eb578063097b3cdb146101075780630ce56cac1461011c57806313af40351461013c5780632eb4a7ab1461014f5780633b4b57b014610158578063572b6c051461016b5780638da5cb5b1461018e57806391f7cfb9146101ae5780639f43ddd2146101b7578063a0a8e460146101c0578063a3e67610146101cf578063ac9650d8146101e2578063b73e0e8b14610202578063c90a9f8314610215578063cb2ef6f714610228578063d58778d614610247578063fc7e9c6f1461025a575b600080fd5b6100f460cf5481565b6040519081526020015b60405180910390f35b61011a610115366004610ec2565b610263565b005b6100f461012a366004610f23565b60d16020526000908152604090205481565b61011a61014a366004610f23565b610453565b6100f460d05481565b61011a610166366004610ec2565b6104a4565b61017e610179366004610f23565b61057f565b60405190151581526020016100fe565b61019661059d565b6040516001600160a01b0390911681526020016100fe565b6100f460cd5481565b6100f460ce5481565b604051600181526020016100fe565b60ca54610196906001600160a01b031681565b6101f56101f0366004610f3e565b6105b2565b6040516100fe9190610fdb565b60c954610196906001600160a01b031681565b61011a610223366004611111565b6106a6565b7541697264726f70455243373231436c61696d61626c6560501b6100f4565b6100f4610255366004611220565b61082f565b6100f460cc5481565b60d054600090156102ea576102e68484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060d0546040516001600160601b031960608d901b1660208201526034810188905290925060540190506040516020818303038152906040528051906020012061085f565b5090505b6001600160a01b038616600090815260d160205260409020548561034c5760405162461bcd60e51b8152602060048201526014602482015273436c61696d696e67207a65726f20746f6b656e7360601b60448201526064015b60405180910390fd5b60cd5486111561039a5760405162461bcd60e51b815260206004820152601960248201527832bc31b2b2b2399030bb30b4b630b13632903a37b5b2b7399760391b6044820152606401610343565b60ce548015806103a957508042105b6103e85760405162461bcd60e51b815260206004820152601060248201526f30b4b9323937b81032bc3834b932b21760811b6044820152606401610343565b6000836103f75760cf546103f9565b845b905080610406848a61124f565b11156104485760405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21038bab0b73a34ba3c9760791b6044820152606401610343565b505050505050505050565b61045b61092d565b6104985760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610343565b6104a181610957565b50565b600260015414156104f75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610343565b600260015560006105066109b2565b90506105158186868686610263565b61051f86866109c1565b856001600160a01b03166105316109b2565b6001600160a01b03167fa86305abc2db271df4609aa86a8d044bc11fb36939841bfdad6c1ab2b26e94718760405161056b91815260200190565b60405180910390a350506001805550505050565b6001600160a01b031660009081526065602052604090205460ff1690565b6000546201000090046001600160a01b031690565b6060816001600160401b038111156105cc576105cc61103d565b6040519080825280602002602001820160405280156105ff57816020015b60608152602001906001900390816105ea5790505b50905060005b8281101561069f5761066f3085858481811061062357610623611267565b9050602002810190610635919061127d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b5792505050565b82828151811061068157610681611267565b60200260200101819052508080610697906112c3565b915050610605565b5092915050565b600054610100900460ff16158080156106c65750600054600160ff909116105b806106e757506106d530610850565b1580156106e7575060005460ff166001145b61074a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610343565b6000805460ff19166001179055801561076d576000805461ff0019166101001790555b61077689610957565b61077e610c49565b61078788610c7a565b60ca80546001600160a01b03808a166001600160a01b03199283161790925560c980549289169290911691909117905584516107ca9060cb906020880190610dfb565b5060ce84905560cf83905560d0829055845160cd558015610448576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050505050505050565b60cb818154811061083f57600080fd5b600091825260209091200154905081565b6001600160a01b03163b151590565b6000808281805b87518110156109215761087a6002836112de565b9150600088828151811061089057610890611267565b602002602001015190508084116108d257604080516020810186905290810182905260600160405160208183030381529060405280519060200120935061090e565b604080516020810183905290810185905260600160405160208183030381529060405280519060200120935060018361090b919061124f565b92505b5080610919816112c3565b915050610866565b50941495939450505050565b600061093761059d565b6001600160a01b03166109486109b2565b6001600160a01b031614905090565b600080546001600160a01b038381166201000081810262010000600160b01b0319851617855560405193049190911692909183917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a35050565b60006109bc610cb2565b905090565b8060d160006109ce6109b2565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546109fd919061124f565b925050819055508060cd6000828254610a1691906112fd565b909155505060cc5460cb80546040805160208084028201810190925282815260009390929091830182828015610a6b57602002820191906000526020600020905b815481526020019060010190808311610a57575b505060c95460ca549495506001600160a01b039081169416925060009150505b85811015610b4957826001600160a01b03166342842e0e8389878981518110610ab657610ab6611267565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401600060405180830381600087803b158015610b1057600080fd5b505af1158015610b24573d6000803e3d6000fd5b50505050600185610b35919061124f565b9450610b4260018261124f565b9050610a8b565b50505060cc91909155505050565b6060610b6283610850565b610bbd5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610343565b600080846001600160a01b031684604051610bd89190611314565b600060405180830381855af49150503d8060008114610c13576040519150601f19603f3d011682016040523d82523d6000602084013e610c18565b606091505b5091509150610c40828260405180606001604052806027815260200161138f60279139610cd4565b95945050505050565b600054610100900460ff16610c705760405162461bcd60e51b815260040161034390611330565b610c78610d14565b565b600054610100900460ff16610ca15760405162461bcd60e51b815260040161034390611330565b610ca9610d41565b6104a181610d68565b6000610cbd3361057f565b15610ccf575060131936013560601c90565b503390565b60608315610ce3575081610d0d565b825115610cf35782518084602001fd5b8160405162461bcd60e51b8152600401610343919061137b565b9392505050565b600054610100900460ff16610d3b5760405162461bcd60e51b815260040161034390611330565b60018055565b600054610100900460ff16610c785760405162461bcd60e51b815260040161034390611330565b600054610100900460ff16610d8f5760405162461bcd60e51b815260040161034390611330565b60005b8151811015610df757600160656000848481518110610db357610db3611267565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580610def816112c3565b915050610d92565b5050565b828054828255906000526020600020908101928215610e36579160200282015b82811115610e36578251825591602001919060010190610e1b565b50610e42929150610e46565b5090565b5b80821115610e425760008155600101610e47565b80356001600160a01b0381168114610e7257600080fd5b919050565b60008083601f840112610e8957600080fd5b5081356001600160401b03811115610ea057600080fd5b6020830191508360208260051b8501011115610ebb57600080fd5b9250929050565b600080600080600060808688031215610eda57600080fd5b610ee386610e5b565b94506020860135935060408601356001600160401b03811115610f0557600080fd5b610f1188828901610e77565b96999598509660600135949350505050565b600060208284031215610f3557600080fd5b610d0d82610e5b565b60008060208385031215610f5157600080fd5b82356001600160401b03811115610f6757600080fd5b610f7385828601610e77565b90969095509350505050565b60005b83811015610f9a578181015183820152602001610f82565b83811115610fa9576000848401525b50505050565b60008151808452610fc7816020860160208601610f7f565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561103057603f1988860301845261101e858351610faf565b94509285019290850190600101611002565b5092979650505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561107b5761107b61103d565b604052919050565b60006001600160401b0382111561109c5761109c61103d565b5060051b60200190565b600082601f8301126110b757600080fd5b813560206110cc6110c783611083565b611053565b82815260059290921b840181019181810190868411156110eb57600080fd5b8286015b8481101561110657803583529183019183016110ef565b509695505050505050565b600080600080600080600080610100898b03121561112e57600080fd5b61113789610e5b565b97506020808a01356001600160401b038082111561115457600080fd5b818c0191508c601f83011261116857600080fd5b81356111766110c782611083565b81815260059190911b8301840190848101908f83111561119557600080fd5b938501935b828510156111ba576111ab85610e5b565b8252938501939085019061119a565b9b506111cb91505060408d01610e5b565b98506111d960608d01610e5b565b975060808c01359250808311156111ef57600080fd5b50506111fd8b828c016110a6565b989b979a50959894979660a0860135965060c08601359560e00135945092505050565b60006020828403121561123257600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561126257611262611239565b500190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261129457600080fd5b8301803591506001600160401b038211156112ae57600080fd5b602001915036819003821315610ebb57600080fd5b60006000198214156112d7576112d7611239565b5060010190565b60008160001904831182151516156112f8576112f8611239565b500290565b60008282101561130f5761130f611239565b500390565b60008251611326818460208701610f7f565b9190910192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b602081526000610d0d6020830184610faf56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220eec139ffa81c4682d407cd17df068d09d22fa7919a7212e7949052b34141fc5964736f6c634300080c0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): AirdropERC721ClaimableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AirdropERC721Claimable;
}
export {};
//# sourceMappingURL=AirdropERC721Claimable__factory.d.ts.map