import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721DelayedReveal, ERC721DelayedRevealInterface } from "../ERC721DelayedReveal.js";
type ERC721DelayedRevealConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721DelayedReveal__factory extends ContractFactory {
    constructor(...args: ERC721DelayedRevealConstructorParams);
    deploy(_defaultAdmin: string, _name: string, _symbol: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721DelayedReveal>;
    getDeployTransaction(_defaultAdmin: string, _name: string, _symbol: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721DelayedReveal;
    connect(signer: Signer): ERC721DelayedReveal__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162003856380380620038568339810160408190526200003491620004d8565b8484848484733cc6cdda760b79bafa08df41ecfa224f810dceb66001858581600290805190602001906200006a92919062000348565b5080516200008090600390602084019062000348565b50506000805550620000938282620000d6565b50506001601055620000a58562000204565b620000ba826001600160801b03831662000256565b620000c6600162000301565b50505050505050505050620005c8565b6daaeb6d7670e522a718067333cd4e3b1562000200576001600160a01b0382163b15620001b95780156200017857604051633e9f1edf60e11b81523060048201526001600160a01b03831660248201526daaeb6d7670e522a718067333cd4e90637d3e3dbe906044015b600060405180830381600087803b1580156200015b57600080fd5b505af115801562000170573d6000803e3d6000fd5b505050505050565b60405163a0af290360e01b81523060048201526001600160a01b03831660248201526daaeb6d7670e522a718067333cd4e9063a0af29039060440162000140565b604051632210724360e11b81523060048201526daaeb6d7670e522a718067333cd4e90634420e48690602401600060405180830381600087803b1580156200015b57600080fd5b5050565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b6127108111156200029f5760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640160405180910390fd5b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b600f805460ff19168215159081179091556040519081527f38475885990d8dfe9ca01f0ef160a1b5514426eab9ddbc953a3353410ba780969060200160405180910390a150565b82805462000356906200058b565b90600052602060002090601f0160209004810192826200037a5760008555620003c5565b82601f106200039557805160ff1916838001178555620003c5565b82800160010185558215620003c5579182015b82811115620003c5578251825591602001919060010190620003a8565b50620003d3929150620003d7565b5090565b5b80821115620003d35760008155600101620003d8565b80516001600160a01b03811681146200040657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200043357600080fd5b81516001600160401b03808211156200045057620004506200040b565b604051601f8301601f19908116603f011681019082821181831017156200047b576200047b6200040b565b816040528381526020925086838588010111156200049857600080fd5b600091505b83821015620004bc57858201830151818301840152908201906200049d565b83821115620004ce5760008385830101525b9695505050505050565b600080600080600060a08688031215620004f157600080fd5b620004fc86620003ee565b60208701519095506001600160401b03808211156200051a57600080fd5b6200052889838a0162000421565b955060408801519150808211156200053f57600080fd5b506200054e8882890162000421565b9350506200055f60608701620003ee565b60808701519092506001600160801b03811681146200057d57600080fd5b809150509295509295909350565b600181811c90821680620005a057607f821691505b60208210811415620005c257634e487b7160e01b600052602260045260246000fd5b50919050565b61327e80620005d86000396000f3fe6080604052600436106101e65760003560e01c80636352211e116101095780636352211e146104c557806363b45e2d146104e557806370a08231146104fa5780638da5cb5b1461051a578063938e3d7b1461052f57806395d89b411461054f5780639bcf7a15146105645780639fc4d68f14610584578063a05112fc146105a4578063a22cb465146105c4578063aad3ec96146105e4578063ac9650d8146105f7578063acd083f814610624578063b24f2d3914610639578063b88d4fde14610664578063c87b56dd14610684578063ce805642146106a4578063d37c353b146106c4578063e7150322146106e4578063e8a3d48514610704578063e985e9c51461071957600080fd5b806301ffc9a7146101eb57806306fdde0314610220578063081812fc14610242578063095ea7b31461026f57806313af40351461029157806318160ddd146102b157806323b872dd146102d45780632419f51b146102f45780632a55205a146103145780632f92023a1461035357806332f0cd64146103725780633b1475a71461039257806341f43434146103a757806342842e0e146103c957806342966c68146103e9578063492e224b146104095780634cc157df14610429578063504c6e011461046b57806357fd845514610485578063600dd5ea146104a5575b600080fd5b3480156101f757600080fd5b5061020b6102063660046127f1565b610762565b60405190151581526020015b60405180910390f35b34801561022c57600080fd5b506102356107cf565b6040516102179190612866565b34801561024e57600080fd5b5061026261025d366004612879565b610861565b6040516102179190612892565b34801561027b57600080fd5b5061028f61028a3660046128c2565b6108a5565b005b34801561029d57600080fd5b5061028f6102ac3660046128ec565b6108be565b3480156102bd57600080fd5b50600154600054035b604051908152602001610217565b3480156102e057600080fd5b5061028f6102ef366004612907565b6108f7565b34801561030057600080fd5b506102c661030f366004612879565b610922565b34801561032057600080fd5b5061033461032f366004612943565b610990565b604080516001600160a01b039093168352602083019190915201610217565b34801561035f57600080fd5b5061028f61036e3660046128c2565b5050565b34801561037e57600080fd5b5061028f61038d366004612973565b6109cd565b34801561039e57600080fd5b50600e546102c6565b3480156103b357600080fd5b506102626daaeb6d7670e522a718067333cd4e81565b3480156103d557600080fd5b5061028f6103e4366004612907565b610a3e565b3480156103f557600080fd5b5061028f610404366004612879565b610a63565b34801561041557600080fd5b5061020b610424366004612879565b610a6e565b34801561043557600080fd5b50610449610444366004612879565b610a94565b604080516001600160a01b03909316835261ffff909116602083015201610217565b34801561047757600080fd5b50600f5461020b9060ff1681565b34801561049157600080fd5b5061028f6104a03660046128ec565b610aff565b3480156104b157600080fd5b5061028f6104c03660046128c2565b610b6f565b3480156104d157600080fd5b506102626104e0366004612879565b610b9d565b3480156104f157600080fd5b50600c546102c6565b34801561050657600080fd5b506102c66105153660046128ec565b610baf565b34801561052657600080fd5b50610262610bfd565b34801561053b57600080fd5b5061028f61054a366004612a3b565b610c0c565b34801561055b57600080fd5b50610235610c39565b34801561057057600080fd5b5061028f61057f366004612a83565b610c48565b34801561059057600080fd5b5061023561059f366004612af0565b610c77565b3480156105b057600080fd5b506102356105bf366004612879565b610df8565b3480156105d057600080fd5b5061028f6105df366004612b3b565b610e92565b61028f6105f23660046128c2565b610ea6565b34801561060357600080fd5b50610617610612366004612b72565b610fc3565b6040516102179190612be6565b34801561063057600080fd5b506000546102c6565b34801561064557600080fd5b50600a546001600160a01b03811690600160a01b900461ffff16610449565b34801561067057600080fd5b5061028f61067f366004612c68565b6110b7565b34801561069057600080fd5b5061023561069f366004612879565b6110e4565b3480156106b057600080fd5b506102356106bf366004612af0565b611153565b3480156106d057600080fd5b506102c66106df366004612ccf565b6111f6565b3480156106f057600080fd5b506102356106ff366004612d48565b61128e565b34801561071057600080fd5b50610235611303565b34801561072557600080fd5b5061020b610734366004612da3565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b03198316148061079357506380ac58cd60e01b6001600160e01b03198316145b806107ae5750635b5e139f60e01b6001600160e01b03198316145b806107c957506001600160e01b0319821663152a902d60e11b145b92915050565b6060600280546107de90612dd6565b80601f016020809104026020016040519081016040528092919081815260200182805461080a90612dd6565b80156108575780601f1061082c57610100808354040283529160200191610857565b820191906000526020600020905b81548152906001019060200180831161083a57829003601f168201915b5050505050905090565b600061086c82611310565b610889576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b816108af8161133b565b6108b983836113ee565b505050565b6108c6611470565b6108eb5760405162461bcd60e51b81526004016108e290612e11565b60405180910390fd5b6108f481611493565b50565b826001600160a01b0381163314610911576109113361133b565b61091c8484846114e5565b50505050565b600061092d600c5490565b821061096b5760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064016108e2565b600c828154811061097e5761097e612e39565b90600052602060002001549050919050565b60008060008061099f86610a94565b90945084925061ffff1690506127106109b88287612e65565b6109c29190612e9a565b925050509250929050565b6109d5611470565b610a355760405162461bcd60e51b815260206004820152602b60248201527f4e6f7420617574686f72697a656420746f20736574206f70657261746f72207260448201526a32b9ba3934b1ba34b7b71760a91b60648201526084016108e2565b6108f4816114f0565b826001600160a01b0381163314610a5857610a583361133b565b61091c848484611537565b6108f4816001611552565b60008181526011602052604081208054829190610a8a90612dd6565b9050119050919050565b6000818152600b60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252829115610adb5780516020820151610af5565b600a546001600160a01b03811690600160a01b900461ffff165b9250925050915091565b610b07611470565b610b645760405162461bcd60e51b815260206004820152602860248201527f4e6f7420617574686f72697a656420746f2073756273637269626520746f207260448201526732b3b4b9ba393c9760c11b60648201526084016108e2565b6108f4816001611701565b610b77611470565b610b935760405162461bcd60e51b81526004016108e290612e11565b61036e82826117f9565b6000610ba88261187d565b5192915050565b60006001600160a01b038216610bd8576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b6009546001600160a01b031690565b610c14611470565b610c305760405162461bcd60e51b81526004016108e290612e11565b6108f481611997565b6060600380546107de90612dd6565b610c50611470565b610c6c5760405162461bcd60e51b81526004016108e290612e11565b6108b9838383611a79565b600083815260116020526040812080546060929190610c9590612dd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc190612dd6565b8015610d0e5780601f10610ce357610100808354040283529160200191610d0e565b820191906000526020600020905b815481529060010190602001808311610cf157829003601f168201915b50505050509050805160001415610d5b5760405162461bcd60e51b8152602060048201526011602482015270139bdd1a1a5b99c81d1bc81c995d99585b607a1b60448201526064016108e2565b60008082806020019051810190610d729190612eae565b91509150610d8182878761128e565b93508084878746604051602001610d9b9493929190612f2e565b6040516020818303038152906040528051906020012014610dee5760405162461bcd60e51b815260206004820152600d60248201526c496e636f7272656374206b657960981b60448201526064016108e2565b5050509392505050565b60116020526000908152604090208054610e1190612dd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3d90612dd6565b8015610e8a5780601f10610e5f57610100808354040283529160200191610e8a565b820191906000526020600020905b815481529060010190602001808311610e6d57829003601f168201915b505050505081565b81610e9c8161133b565b6108b98383611b20565b60026010541415610ef95760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016108e2565b6002601055600e54600054610f0f908390612f57565b1115610f5d5760405162461bcd60e51b815260206004820152601e60248201527f4e6f7420656e6f756768206c617a79206d696e74656420746f6b656e732e000060448201526064016108e2565b6000610f698383611bb6565b905080836001600160a01b0316336001600160a01b03167fff097c7d8b1957a4ff09ef1361b5fb54dcede3941ba836d0beb9d10bec725de685604051610fb191815260200190565b60405180910390a45050600160105550565b6060816001600160401b03811115610fdd57610fdd612990565b60405190808252806020026020018201604052801561101057816020015b6060815260200190600190039081610ffb5790505b50905060005b828110156110b0576110803085858481811061103457611034612e39565b90506020028101906110469190612f6f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611bc392505050565b82828151811061109257611092612e39565b602002602001018190525080806110a890612fb5565b915050611016565b5092915050565b836001600160a01b03811633146110d1576110d13361133b565b6110dd85858585611bef565b5050505050565b606060006110f183611c3a565b50905060006110ff84611d3f565b905061110a82610a6e565b1561113857806040516020016111209190612fd0565b60405160208183030381529060405292505050919050565b8061114285611ea0565b604051602001611120929190612ff5565b606061115d611470565b6111795760405162461bcd60e51b81526004016108e290612e11565b600061118485610922565b9050611191818585610c77565b91506111ac8160405180602001604052806000815250611fa5565b6111b68183611fc4565b847f6df1d8db2a036436ffe0b2d1833f2c5f1e624818dfce2578c0faa4b83ef9998d836040516111e69190612866565b60405180910390a2509392505050565b600081156112775760008061120d84860186613024565b91509150815160001415801561122257508015155b156112745761127488600e546112389190612f57565b86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611fa592505050565b50505b6112848686868686611fe3565b9695505050505050565b8251604080518083016020019091528181529060005b818110156112fa5760008585836040516020016112c393929190613068565b60408051601f198184030181529190528051602091820120888401820151188584018201526112f3915082612f57565b90506112a4565b50509392505050565b60088054610e1190612dd6565b60008054821080156107c9575050600090815260046020526040902054600160e01b900460ff161590565b600f5460ff16156108f4576daaeb6d7670e522a718067333cd4e3b156108f457604051633185c44d60e21b81526daaeb6d7670e522a718067333cd4e9063c61711349061138e903090859060040161307a565b602060405180830381865afa1580156113ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cf9190613094565b6108f45780604051633b79c77360e21b81526004016108e29190612892565b60006113f982610b9d565b9050806001600160a01b0316836001600160a01b0316141561142e5760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b03821614611465576114488133610734565b611465576040516367d9dca160e11b815260040160405180910390fd5b6108b98383836120ed565b600061147a610bfd565b6001600160a01b0316336001600160a01b031614905090565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b6108b9838383612149565b600f805460ff19168215159081179091556040519081527f38475885990d8dfe9ca01f0ef160a1b5514426eab9ddbc953a3353410ba780969060200160405180910390a150565b6108b9838383604051806020016040528060008152506110b7565b600061155d8361187d565b805190915082156115c3576000336001600160a01b038316148061158657506115868233610734565b806115a157503361159686610861565b6001600160a01b0316145b9050806115c157604051632ce44b5f60e11b815260040160405180910390fd5b505b6115cf600085836120ed565b6001600160a01b0380821660008181526005602090815260408083208054600160801b6000196001600160401b038084169190910181166001600160401b03198416811783900482166001908101831690930267ffffffffffffffff67ffffffffffffffff60801b0119909416179290921783558b86526004909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b1785559189018084529220805491949091166116c95760005482146116c957805460208701516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038716171781555b5050604051869250600091506001600160a01b03841690600080516020613229833981519152908390a4505060018054810190555050565b6daaeb6d7670e522a718067333cd4e3b1561036e576001600160a01b0382163b156117c857801561179557604051633e9f1edf60e11b81526daaeb6d7670e522a718067333cd4e90637d3e3dbe9061175f903090869060040161307a565b600060405180830381600087803b15801561177957600080fd5b505af115801561178d573d6000803e3d6000fd5b505050505050565b60405163a0af290360e01b81526daaeb6d7670e522a718067333cd4e9063a0af29039061175f903090869060040161307a565b604051632210724360e11b81526daaeb6d7670e522a718067333cd4e90634420e4869061175f903090600401612892565b61271081111561181b5760405162461bcd60e51b81526004016108e2906130b1565b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b60408051606081018252600080825260208201819052918101919091528160005481101561197e57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff1615159181018290529061197c5780516001600160a01b031615611913579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff1615159281019290925215611977579392505050565b611913565b505b604051636f96cda160e11b815260040160405180910390fd5b6000600880546119a690612dd6565b80601f01602080910402602001604051908101604052809291908181526020018280546119d290612dd6565b8015611a1f5780601f106119f457610100808354040283529160200191611a1f565b820191906000526020600020905b815481529060010190602001808311611a0257829003601f168201915b50508551939450611a3b93600893506020870192509050612742565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051611a6d9291906130da565b60405180910390a15050565b612710811115611a9b5760405162461bcd60e51b81526004016108e2906130b1565b6040805180820182526001600160a01b0384811680835260208084018681526000898152600b8352869020945185546001600160a01b031916941693909317845591516001909301929092559151838152909185917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a3505050565b6001600160a01b038216331415611b4a5760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000546107c98383612321565b6060611be883836040518060600160405280602781526020016132026027913961233b565b9392505050565b611bfa848484612149565b611c0c836001600160a01b031661240c565b1561091c57611c1d8484848461241b565b61091c576040516368d2bf6b60e11b815260040160405180910390fd5b6000806000611c48600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611c9857602002820191906000526020600020905b815481526020019060010190808311611c84575b5050505050905060005b82811015611d0457818181518110611cbc57611cbc612e39565b6020026020010151861015611cf257809350818181518110611ce057611ce0612e39565b60200260200101519450505050915091565b611cfd600182612f57565b9050611ca2565b5060405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081d1bdad95b9259608a1b60448201526064016108e2565b60606000611d4c600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611d9c57602002820191906000526020600020905b815481526020019060010190808311611d88575b5050505050905060005b82811015611d0457818181518110611dc057611dc0612e39565b6020026020010151851015611e8e57600d6000838381518110611de557611de5612e39565b602002602001015181526020019081526020016000208054611e0690612dd6565b80601f0160208091040260200160405190810160405280929190818152602001828054611e3290612dd6565b8015611e7f5780601f10611e5457610100808354040283529160200191611e7f565b820191906000526020600020905b815481529060010190602001808311611e6257829003601f168201915b50505050509350505050919050565b611e99600182612f57565b9050611da6565b606081611ec45750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611eee5780611ed881612fb5565b9150611ee79050600a83612e9a565b9150611ec8565b6000816001600160401b03811115611f0857611f08612990565b6040519080825280601f01601f191660200182016040528015611f32576020820181803683370190505b5090505b8415611f9d57611f47600183613108565b9150611f54600a8661311f565b611f5f906030612f57565b60f81b818381518110611f7457611f74612e39565b60200101906001600160f81b031916908160001a905350611f96600a86612e9a565b9450611f36565b949350505050565b600082815260116020908152604090912082516108b992840190612742565b6000828152600d6020908152604090912082516108b992840190612742565b6000611fed611470565b6120095760405162461bcd60e51b81526004016108e290612e11565b8561203e5760405162461bcd60e51b81526020600482015260056024820152640c08185b5d60da1b60448201526064016108e2565b6000600e549050612086818888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061250392505050565b600e919091559150807f2a0365091ef1a40953c670dce28177e37520648a6fdc91506bffac0ab045570d60016120bc8a84612f57565b6120c69190613108565b888888886040516120db95949392919061315c565b60405180910390a25095945050505050565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006121548261187d565b9050836001600160a01b031681600001516001600160a01b03161461218b5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b03861614806121a957506121a98533610734565b806121c45750336121b984610861565b6001600160a01b0316145b9050806121e457604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03841661220b57604051633a954ecd60e21b815260040160405180910390fd5b612217600084876120ed565b6001600160a01b03858116600090815260056020908152604080832080546001600160401b03198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217835587018084529220805491939091166122ea5760005482146122ea57805460208601516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b031660008051602061322983398151915260405160405180910390a46110dd565b61036e828260405180602001604052806000815250612570565b60606123468461240c565b6123a15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016108e2565b600080856001600160a01b0316856040516123bc9190613195565b600060405180830381855af49150503d80600081146123f7576040519150601f19603f3d011682016040523d82523d6000602084013e6123fc565b606091505b5091509150611284828286612709565b6001600160a01b03163b151590565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906124509033908990889088906004016131b1565b6020604051808303816000875af192505050801561248b575060408051601f3d908101601f19168201909252612488918101906131e4565b60015b6124e6573d8080156124b9576040519150601f19603f3d011682016040523d82523d6000602084013e6124be565b606091505b5080516124de576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b6000806125108486612f57565b600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018190556000818152600d602090815260409091208551929450849350612567929091860190612742565b50935093915050565b6000546001600160a01b03841661259957604051622e076360e81b815260040160405180910390fd5b826125b75760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038416600081815260056020908152604080832080546001600160801b031981166001600160401b038083168b018116918217600160401b6001600160401b031990941690921783900481168b01811690920217909155858452600490925290912080546001600160e01b0319168317600160a01b42909316929092029190911790558190818501906126509061240c565b156126c6575b60405182906001600160a01b03881690600090600080516020613229833981519152908290a461268f600087848060010195508761241b565b6126ac576040516368d2bf6b60e11b815260040160405180910390fd5b8082106126565782600054146126c157600080fd5b6126f9565b5b6040516001830192906001600160a01b03881690600090600080516020613229833981519152908290a48082106126c7575b50600090815561091c9085838684565b60608315612718575081611be8565b8251156127285782518084602001fd5b8160405162461bcd60e51b81526004016108e29190612866565b82805461274e90612dd6565b90600052602060002090601f01602090048101928261277057600085556127b6565b82601f1061278957805160ff19168380011785556127b6565b828001600101855582156127b6579182015b828111156127b657825182559160200191906001019061279b565b506127c29291506127c6565b5090565b5b808211156127c257600081556001016127c7565b6001600160e01b0319811681146108f457600080fd5b60006020828403121561280357600080fd5b8135611be8816127db565b60005b83811015612829578181015183820152602001612811565b8381111561091c5750506000910152565b6000815180845261285281602086016020860161280e565b601f01601f19169290920160200192915050565b602081526000611be8602083018461283a565b60006020828403121561288b57600080fd5b5035919050565b6001600160a01b0391909116815260200190565b80356001600160a01b03811681146128bd57600080fd5b919050565b600080604083850312156128d557600080fd5b6128de836128a6565b946020939093013593505050565b6000602082840312156128fe57600080fd5b611be8826128a6565b60008060006060848603121561291c57600080fd5b612925846128a6565b9250612933602085016128a6565b9150604084013590509250925092565b6000806040838503121561295657600080fd5b50508035926020909101359150565b80151581146108f457600080fd5b60006020828403121561298557600080fd5b8135611be881612965565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156129ce576129ce612990565b604052919050565b60006001600160401b038211156129ef576129ef612990565b50601f01601f191660200190565b6000612a10612a0b846129d6565b6129a6565b9050828152838383011115612a2457600080fd5b828260208301376000602084830101529392505050565b600060208284031215612a4d57600080fd5b81356001600160401b03811115612a6357600080fd5b8201601f81018413612a7457600080fd5b611f9d848235602084016129fd565b600080600060608486031215612a9857600080fd5b83359250612933602085016128a6565b60008083601f840112612aba57600080fd5b5081356001600160401b03811115612ad157600080fd5b602083019150836020828501011115612ae957600080fd5b9250929050565b600080600060408486031215612b0557600080fd5b8335925060208401356001600160401b03811115612b2257600080fd5b612b2e86828701612aa8565b9497909650939450505050565b60008060408385031215612b4e57600080fd5b612b57836128a6565b91506020830135612b6781612965565b809150509250929050565b60008060208385031215612b8557600080fd5b82356001600160401b0380821115612b9c57600080fd5b818501915085601f830112612bb057600080fd5b813581811115612bbf57600080fd5b8660208260051b8501011115612bd457600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612c3b57603f19888603018452612c2985835161283a565b94509285019290850190600101612c0d565b5092979650505050505050565b600082601f830112612c5957600080fd5b611be8838335602085016129fd565b60008060008060808587031215612c7e57600080fd5b612c87856128a6565b9350612c95602086016128a6565b92506040850135915060608501356001600160401b03811115612cb757600080fd5b612cc387828801612c48565b91505092959194509250565b600080600080600060608688031215612ce757600080fd5b8535945060208601356001600160401b0380821115612d0557600080fd5b612d1189838a01612aa8565b90965094506040880135915080821115612d2a57600080fd5b50612d3788828901612aa8565b969995985093965092949392505050565b600080600060408486031215612d5d57600080fd5b83356001600160401b0380821115612d7457600080fd5b612d8087838801612c48565b94506020860135915080821115612d9657600080fd5b50612b2e86828701612aa8565b60008060408385031215612db657600080fd5b612dbf836128a6565b9150612dcd602084016128a6565b90509250929050565b600181811c90821680612dea57607f821691505b60208210811415612e0b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612e7f57612e7f612e4f565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612ea957612ea9612e84565b500490565b60008060408385031215612ec157600080fd5b82516001600160401b03811115612ed757600080fd5b8301601f81018513612ee857600080fd5b8051612ef6612a0b826129d6565b818152866020838501011115612f0b57600080fd5b612f1c82602083016020860161280e565b60209590950151949694955050505050565b60008551612f40818460208a0161280e565b820184868237909301918252506020019392505050565b60008219821115612f6a57612f6a612e4f565b500190565b6000808335601e19843603018112612f8657600080fd5b8301803591506001600160401b03821115612fa057600080fd5b602001915036819003821315612ae957600080fd5b6000600019821415612fc957612fc9612e4f565b5060010190565b60008251612fe281846020870161280e565b600360fc1b920191825250600101919050565b6000835161300781846020880161280e565b83519083019061301b81836020880161280e565b01949350505050565b6000806040838503121561303757600080fd5b82356001600160401b0381111561304d57600080fd5b61305985828601612c48565b95602094909401359450505050565b82848237909101908152602001919050565b6001600160a01b0392831681529116602082015260400190565b6000602082840312156130a657600080fd5b8151611be881612965565b6020808252600f908201526e45786365656473206d61782062707360881b604082015260600190565b6040815260006130ed604083018561283a565b82810360208401526130ff818561283a565b95945050505050565b60008282101561311a5761311a612e4f565b500390565b60008261312e5761312e612e84565b500690565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b858152606060208201526000613176606083018688613133565b8281036040840152613189818587613133565b98975050505050505050565b600082516131a781846020870161280e565b9190910192915050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906112849083018461283a565b6000602082840312156131f657600080fd5b8151611be8816127db56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122006b4a7810dba8555180afb75fa95627e315ab4187f5ccb83d045911c3bc5b76564736f6c634300080c0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
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
    static createInterface(): ERC721DelayedRevealInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721DelayedReveal;
}
export {};
//# sourceMappingURL=ERC721DelayedReveal__factory.d.ts.map