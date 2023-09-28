import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721SignatureMint, ERC721SignatureMintInterface } from "../ERC721SignatureMint.js";
type ERC721SignatureMintConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721SignatureMint__factory extends ContractFactory {
    constructor(...args: ERC721SignatureMintConstructorParams);
    deploy(_defaultAdmin: string, _name: string, _symbol: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _primarySaleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721SignatureMint>;
    getDeployTransaction(_defaultAdmin: string, _name: string, _symbol: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _primarySaleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721SignatureMint;
    connect(signer: Signer): ERC721SignatureMint__factory;
    static readonly bytecode = "0x6101406040523480156200001257600080fd5b50604051620043253803806200432583398101604081905262000035916200060a565b6040518060400160405280601381526020017f5369676e61747572654d696e7445524337323100000000000000000000000000815250604051806040016040528060018152602001603160f81b8152508787878787733cc6cdda760b79bafa08df41ecfa224f810dceb6600185858160029080519060200190620000bb9291906200047a565b508051620000d19060039060208401906200047a565b50506000805550620000e48282620001be565b50620000f2905085620002ec565b62000107826001600160801b0383166200033e565b620001136001620003e9565b5050845160209586012084519486019490942060e08590526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818b01819052818301999099526060810194909452608080850193909352308483018190528151808603909301835260c09485019091528151919098012090529490945250506101205250620001b28162000430565b50505050505062000709565b6daaeb6d7670e522a718067333cd4e3b15620002e8576001600160a01b0382163b15620002a15780156200026057604051633e9f1edf60e11b81523060048201526001600160a01b03831660248201526daaeb6d7670e522a718067333cd4e90637d3e3dbe906044015b600060405180830381600087803b1580156200024357600080fd5b505af115801562000258573d6000803e3d6000fd5b505050505050565b60405163a0af290360e01b81523060048201526001600160a01b03831660248201526daaeb6d7670e522a718067333cd4e9063a0af29039060440162000228565b604051632210724360e11b81523060048201526daaeb6d7670e522a718067333cd4e90634420e48690602401600060405180830381600087803b1580156200024357600080fd5b5050565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b612710811115620003875760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640160405180910390fd5b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b600e805460ff19168215159081179091556040519081527f38475885990d8dfe9ca01f0ef160a1b5514426eab9ddbc953a3353410ba780969060200160405180910390a150565b601080546001600160a01b0319166001600160a01b0383169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a250565b8280546200048890620006cc565b90600052602060002090601f016020900481019282620004ac5760008555620004f7565b82601f10620004c757805160ff1916838001178555620004f7565b82800160010185558215620004f7579182015b82811115620004f7578251825591602001919060010190620004da565b506200050592915062000509565b5090565b5b808211156200050557600081556001016200050a565b80516001600160a01b03811681146200053857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200056557600080fd5b81516001600160401b03808211156200058257620005826200053d565b604051601f8301601f19908116603f01168101908282118183101715620005ad57620005ad6200053d565b81604052838152602092508683858801011115620005ca57600080fd5b600091505b83821015620005ee5785820183015181830184015290820190620005cf565b83821115620006005760008385830101525b9695505050505050565b60008060008060008060c087890312156200062457600080fd5b6200062f8762000520565b60208801519096506001600160401b03808211156200064d57600080fd5b6200065b8a838b0162000553565b965060408901519150808211156200067257600080fd5b506200068189828a0162000553565b945050620006926060880162000520565b60808801519093506001600160801b0381168114620006b057600080fd5b9150620006c060a0880162000520565b90509295509295509295565b600181811c90821680620006e157607f821691505b602082108114156200070357634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051613bcc6200075960003960006129df01526000612a2e01526000612a09015260006129620152600061298c015260006129b60152613bcc6000f3fe6080604052600436106101cf5760003560e01c80634cc157df116100fe5780634cc157df14610469578063504c6e01146104ab57806357fd8455146104c5578063600dd5ea146104e55780636352211e1461050557806363b45e2d146105255780636f4f28371461053a57806370a082311461055a578063754a81d91461057a5780638da5cb5b1461059a578063938e3d7b146105af57806395d89b41146105cf5780639bcf7a15146105e4578063a22cb46514610604578063ac9650d814610624578063b24f2d3914610651578063b88d4fde1461067c578063c87b56dd1461069c578063e8a3d485146106bc578063e985e9c5146106d157600080fd5b806275a317146101d457806301ffc9a7146101f657806306fdde031461022b578063079fe40e1461024d578063081812fc1461026f578063095ea7b31461028f57806313af4035146102af57806318160ddd146102cf57806323b872dd146102f25780632419f51b14610312578063252e82e8146103325780632a55205a1461037157806332f0cd641461039f5780633b1475a7146103bf57806341f43434146103d457806342842e0e146103f657806342966c6814610416578063430c208114610436578063439c7be514610456575b600080fd5b3480156101e057600080fd5b506101f46101ef366004613189565b6106f1565b005b34801561020257600080fd5b506102166102113660046131ec565b61074f565b60405190151581526020015b60405180910390f35b34801561023757600080fd5b506102406107bc565b6040516102229190613261565b34801561025957600080fd5b5061026261084e565b6040516102229190613281565b34801561027b57600080fd5b5061026261028a366004613295565b61085d565b34801561029b57600080fd5b506101f46102aa3660046132ae565b6108a1565b3480156102bb57600080fd5b506101f46102ca3660046132d8565b6108ba565b3480156102db57600080fd5b50600154600054035b604051908152602001610222565b3480156102fe57600080fd5b506101f461030d3660046132f3565b6108ea565b34801561031e57600080fd5b506102e461032d366004613295565b610915565b34801561033e57600080fd5b5061035261034d36600461332f565b610983565b6040805192151583526001600160a01b03909116602083015201610222565b34801561037d57600080fd5b5061039161038c3660046133ce565b6109c7565b6040516102229291906133f0565b3480156103ab57600080fd5b506101f46103ba366004613417565b610a04565b3480156103cb57600080fd5b506000546102e4565b3480156103e057600080fd5b506102626daaeb6d7670e522a718067333cd4e81565b34801561040257600080fd5b506101f46104113660046132f3565b610a75565b34801561042257600080fd5b506101f4610431366004613295565b610a9a565b34801561044257600080fd5b506102166104513660046132ae565b610aa5565b61026261046436600461332f565b610b04565b34801561047557600080fd5b50610489610484366004613295565b610c9f565b604080516001600160a01b03909316835261ffff909116602083015201610222565b3480156104b757600080fd5b50600e546102169060ff1681565b3480156104d157600080fd5b506101f46104e03660046132d8565b610d0a565b3480156104f157600080fd5b506101f46105003660046132ae565b610d7a565b34801561051157600080fd5b50610262610520366004613295565b610da8565b34801561053157600080fd5b50600c546102e4565b34801561054657600080fd5b506101f46105553660046132d8565b610dba565b34801561056657600080fd5b506102e46105753660046132d8565b610de7565b34801561058657600080fd5b506101f4610595366004613434565b610e35565b3480156105a657600080fd5b50610262610e79565b3480156105bb57600080fd5b506101f46105ca3660046134b1565b610e88565b3480156105db57600080fd5b50610240610eb5565b3480156105f057600080fd5b506101f46105ff3660046134e5565b610ec4565b34801561061057600080fd5b506101f461061f36600461350a565b610ef3565b34801561063057600080fd5b5061064461063f366004613541565b610f07565b60405161022291906135b5565b34801561065d57600080fd5b50600a546001600160a01b03811690600160a01b900461ffff16610489565b34801561068857600080fd5b506101f4610697366004613617565b610ffb565b3480156106a857600080fd5b506102406106b7366004613295565b611028565b3480156106c857600080fd5b50610240611116565b3480156106dd57600080fd5b506102166106ec366004613672565b6111a4565b6106f96111d2565b61071e5760405162461bcd60e51b8152600401610715906136a5565b60405180910390fd5b61073061072a60005490565b826111f5565b61074b8260016040518060200160405280600081525061126e565b5050565b60006301ffc9a760e01b6001600160e01b03198316148061078057506380ac58cd60e01b6001600160e01b03198316145b8061079b5750635b5e139f60e01b6001600160e01b03198316145b806107b657506001600160e01b0319821663152a902d60e11b145b92915050565b6060600280546107cb906136d6565b80601f01602080910402602001604051908101604052809291908181526020018280546107f7906136d6565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b5050505050905090565b6010546001600160a01b031690565b600061086882611407565b610885576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b816108ab81611432565b6108b583836114e5565b505050565b6108c26111d2565b6108de5760405162461bcd60e51b815260040161071590613711565b6108e781611567565b50565b826001600160a01b03811633146109045761090433611432565b61090f8484846115b9565b50505050565b6000610920600c5490565b821061095e5760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b6044820152606401610715565b600c828154811061097157610971613739565b90600052602060002001549050919050565b6000806109918585856115c4565b61014086013560009081526011602052604090205490915060ff161580156109bd57506109bd8161162a565b9150935093915050565b6000806000806109d686610c9f565b90945084925061ffff1690506127106109ef8287613765565b6109f9919061379a565b925050509250929050565b610a0c6111d2565b610a6c5760405162461bcd60e51b815260206004820152602b60248201527f4e6f7420617574686f72697a656420746f20736574206f70657261746f72207260448201526a32b9ba3934b1ba34b7b71760a91b6064820152608401610715565b6108e78161164f565b826001600160a01b0381163314610a8f57610a8f33611432565b61090f848484611696565b6108e78160016116b1565b600080610ab183610da8565b9050806001600160a01b0316846001600160a01b03161480610ad85750610ad881856111a4565b80610afc5750836001600160a01b0316610af18461085d565b6001600160a01b0316145b949350505050565b60008360a00135600114610b4e5760405162461bcd60e51b81526020600482015260116024820152707175616e746979206d757374206265203160781b6044820152606401610715565b600054610b5c858585611860565b91506000610b6d60208701876132d8565b9050610ba2610b8260808801606089016132d8565b60a0880135610b986101008a0160e08b016132d8565b8960c001356119e9565b6000610bb460408801602089016132d8565b6001600160a01b031614158015610bce5750604086013515155b15610bf157610bf182610be76040890160208a016132d8565b8860400135611ae3565b610c3c82610c0260808901896137ae565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111f592505050565b610c4a818760a00135611b8a565b81816001600160a01b0316846001600160a01b03167fee0cf9c3e87795b1932d13f80f892f620f567b4465e768ced5d64aa44ca1d64c89604051610c8e9190613879565b60405180910390a450509392505050565b6000818152600b60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252829115610ce65780516020820151610d00565b600a546001600160a01b03811690600160a01b900461ffff165b9250925050915091565b610d126111d2565b610d6f5760405162461bcd60e51b815260206004820152602860248201527f4e6f7420617574686f72697a656420746f2073756273637269626520746f207260448201526732b3b4b9ba393c9760c11b6064820152608401610715565b6108e7816001611ba4565b610d826111d2565b610d9e5760405162461bcd60e51b815260040161071590613711565b61074b8282611c9c565b6000610db382611d20565b5192915050565b610dc26111d2565b610dde5760405162461bcd60e51b815260040161071590613711565b6108e781611e3a565b60006001600160a01b038216610e10576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b610e3d6111d2565b610e595760405162461bcd60e51b8152600401610715906136a5565b610e6c610e6560005490565b8484611e84565b505061090f84848361126e565b6009546001600160a01b031690565b610e906111d2565b610eac5760405162461bcd60e51b815260040161071590613711565b6108e781611ef1565b6060600380546107cb906136d6565b610ecc6111d2565b610ee85760405162461bcd60e51b815260040161071590613711565b6108b5838383611ae3565b81610efd81611432565b6108b58383611fd3565b6060816001600160401b03811115610f2157610f216130e7565b604051908082528060200260200182016040528015610f5457816020015b6060815260200190600190039081610f3f5790505b50905060005b82811015610ff457610fc430858584818110610f7857610f78613739565b9050602002810190610f8a91906137ae565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061206992505050565b828281518110610fd657610fd6613739565b60200260200101819052508080610fec90613987565b915050610f5a565b5092915050565b836001600160a01b03811633146110155761101533611432565b6110218585858561208e565b5050505050565b6000818152600f6020526040812080546060929190611046906136d6565b80601f0160208091040260200160405190810160405280929190818152602001828054611072906136d6565b80156110bf5780601f10611094576101008083540402835291602001916110bf565b820191906000526020600020905b8154815290600101906020018083116110a257829003601f168201915b505050505090506000815111156110d65792915050565b60006110e1846120d9565b9050806110ed85612275565b6040516020016110fe9291906139a2565b60405160208183030381529060405292505050919050565b60088054611123906136d6565b80601f016020809104026020016040519081016040528092919081815260200182805461114f906136d6565b801561119c5780601f106111715761010080835404028352916020019161119c565b820191906000526020600020905b81548152906001019060200180831161117f57829003601f168201915b505050505081565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006111dc610e79565b6001600160a01b0316336001600160a01b031614905090565b6000828152600f60205260409020805461120e906136d6565b15905061124f5760405162461bcd60e51b815260206004820152600f60248201526e15549248185b1c9958591e481cd95d608a1b6044820152606401610715565b6000828152600f6020908152604090912082516108b592840190613032565b6000546001600160a01b03841661129757604051622e076360e81b815260040160405180910390fd5b826112b55760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038416600081815260056020908152604080832080546001600160801b031981166001600160401b038083168b018116918217600160401b6001600160401b031990941690921783900481168b01811690920217909155858452600490925290912080546001600160e01b0319168317600160a01b429093169290920291909117905581908185019061134e90612372565b156113c4575b60405182906001600160a01b03881690600090600080516020613b77833981519152908290a461138d6000878480600101955087612381565b6113aa576040516368d2bf6b60e11b815260040160405180910390fd5b8082106113545782600054146113bf57600080fd5b6113f7565b5b6040516001830192906001600160a01b03881690600090600080516020613b77833981519152908290a48082106113c5575b50600090815561090f9085838684565b60008054821080156107b6575050600090815260046020526040902054600160e01b900460ff161590565b600e5460ff16156108e7576daaeb6d7670e522a718067333cd4e3b156108e757604051633185c44d60e21b81526daaeb6d7670e522a718067333cd4e9063c61711349061148590309085906004016139d1565b602060405180830381865afa1580156114a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c691906139eb565b6108e75780604051633b79c77360e21b81526004016107159190613281565b60006114f082610da8565b9050806001600160a01b0316836001600160a01b031614156115255760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b0382161461155c5761153f81336111a4565b61155c576040516367d9dca160e11b815260040160405180910390fd5b6108b5838383612469565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b6108b58383836124c5565b600061162083838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061161a925061160e915088905061269d565b805190602001206127e4565b90612811565b90505b9392505050565b6000611634610e79565b6001600160a01b0316826001600160a01b0316149050919050565b600e805460ff19168215159081179091556040519081527f38475885990d8dfe9ca01f0ef160a1b5514426eab9ddbc953a3353410ba780969060200160405180910390a150565b6108b583838360405180602001604052806000815250610ffb565b60006116bc83611d20565b80519091508215611722576000336001600160a01b03831614806116e557506116e582336111a4565b806117005750336116f58661085d565b6001600160a01b0316145b90508061172057604051632ce44b5f60e11b815260040160405180910390fd5b505b61172e60008583612469565b6001600160a01b0380821660008181526005602090815260408083208054600160801b6000196001600160401b038084169190910181166001600160401b03198416811783900482166001908101831690930267ffffffffffffffff67ffffffffffffffff60801b0119909416179290921783558b86526004909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b17855591890180845292208054919490911661182857600054821461182857805460208701516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038716171781555b5050604051869250600091506001600160a01b03841690600080516020613b77833981519152908390a4505060018054810190555050565b60008061186e858585610983565b92509050806118ad5760405162461bcd60e51b815260206004820152600b60248201526a496e76616c69642072657160a81b6044820152606401610715565b426118c061012087016101008801613a08565b6001600160801b031611806118ee57506118e261014086016101208701613a08565b6001600160801b031642115b156119295760405162461bcd60e51b815260206004820152600b60248201526a14995c48195e1c1a5c995960aa1b6044820152606401610715565b600061193860208701876132d8565b6001600160a01b031614156119855760405162461bcd60e51b81526020600482015260136024820152721c9958da5c1a595b9d081d5b9919599a5b9959606a1b6044820152606401610715565b60008560a00135116119c15760405162461bcd60e51b8152602060048201526005602482015264302071747960d81b6044820152606401610715565b50610140909301356000908152601160205260409020805460ff191660011790555090919050565b80611a2a573415611a255760405162461bcd60e51b81526020600482015260066024820152652156616c756560d01b6044820152606401610715565b61090f565b6000611a368285613765565b905060006001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415611a685750348114611a6c565b5034155b80611aad5760405162461bcd60e51b8152602060048201526011602482015270496e76616c6964206d73672076616c756560781b6044820152606401610715565b60006001600160a01b03871615611ac45786611acc565b611acc61084e565b9050611ada85338386612835565b50505050505050565b612710811115611b055760405162461bcd60e51b815260040161071590613a23565b6040805180820182526001600160a01b0384811680835260208084018681526000898152600b8352869020945185546001600160a01b031916941693909317845591516001909301929092559151838152909185917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a3505050565b61074b82826040518060200160405280600081525061126e565b6daaeb6d7670e522a718067333cd4e3b1561074b576001600160a01b0382163b15611c6b578015611c3857604051633e9f1edf60e11b81526daaeb6d7670e522a718067333cd4e90637d3e3dbe90611c0290309086906004016139d1565b600060405180830381600087803b158015611c1c57600080fd5b505af1158015611c30573d6000803e3d6000fd5b505050505050565b60405163a0af290360e01b81526daaeb6d7670e522a718067333cd4e9063a0af290390611c0290309086906004016139d1565b604051632210724360e11b81526daaeb6d7670e522a718067333cd4e90634420e48690611c02903090600401613281565b612710811115611cbe5760405162461bcd60e51b815260040161071590613a23565b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b604080516060810182526000808252602082018190529181019190915281600054811015611e2157600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff16151591810182905290611e1f5780516001600160a01b031615611db6579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff1615159281019290925215611e1a579392505050565b611db6565b505b604051636f96cda160e11b815260040160405180910390fd5b601080546001600160a01b0319166001600160a01b0383169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a250565b600080611e918486613a4c565b600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018190556000818152600d602090815260409091208551929450849350611ee8929091860190613032565b50935093915050565b600060088054611f00906136d6565b80601f0160208091040260200160405190810160405280929190818152602001828054611f2c906136d6565b8015611f795780601f10611f4e57610100808354040283529160200191611f79565b820191906000526020600020905b815481529060010190602001808311611f5c57829003601f168201915b50508551939450611f9593600893506020870192509050613032565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051611fc7929190613a64565b60405180910390a15050565b6001600160a01b038216331415611ffd5760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60606116238383604051806060016040528060278152602001613b506027913961287a565b6120998484846124c5565b6120ab836001600160a01b0316612372565b1561090f576120bc84848484612381565b61090f576040516368d2bf6b60e11b815260040160405180910390fd5b606060006120e6600c5490565b90506000600c80548060200260200160405190810160405280929190818152602001828054801561213657602002820191906000526020600020905b815481526020019060010190808311612122575b5050505050905060005b8281101561223a5781818151811061215a5761215a613739565b602002602001015185101561222857600d600083838151811061217f5761217f613739565b6020026020010151815260200190815260200160002080546121a0906136d6565b80601f01602080910402602001604051908101604052809291908181526020018280546121cc906136d6565b80156122195780601f106121ee57610100808354040283529160200191612219565b820191906000526020600020905b8154815290600101906020018083116121fc57829003601f168201915b50505050509350505050919050565b612233600182613a4c565b9050612140565b5060405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081d1bdad95b9259608a1b6044820152606401610715565b6060816122995750506040805180820190915260018152600360fc1b602082015290565b8160005b81156122c357806122ad81613987565b91506122bc9050600a8361379a565b915061229d565b6000816001600160401b038111156122dd576122dd6130e7565b6040519080825280601f01601f191660200182016040528015612307576020820181803683370190505b5090505b8415610afc5761231c600183613a92565b9150612329600a86613aa9565b612334906030613a4c565b60f81b81838151811061234957612349613739565b60200101906001600160f81b031916908160001a90535061236b600a8661379a565b945061230b565b6001600160a01b03163b151590565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906123b6903390899088908890600401613abd565b6020604051808303816000875af19250505080156123f1575060408051601f3d908101601f191682019092526123ee91810190613af0565b60015b61244c573d80801561241f576040519150601f19603f3d011682016040523d82523d6000602084013e612424565b606091505b508051612444576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006124d082611d20565b9050836001600160a01b031681600001516001600160a01b0316146125075760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b0386161480612525575061252585336111a4565b806125405750336125358461085d565b6001600160a01b0316145b90508061256057604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03841661258757604051633a954ecd60e21b815260040160405180910390fd5b61259360008487612469565b6001600160a01b03858116600090815260056020908152604080832080546001600160401b03198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b4290921691909102178355870180845292208054919390911661266657600054821461266657805460208601516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b0316600080516020613b7783398151915260405160405180910390a4611021565b60607fef2a0374db4a48b74209fd1a525c32d62e54c4185cbabd807193b07a40081d446126cd60208401846132d8565b6126dd60408501602086016132d8565b60408501356126f260808701606088016132d8565b6126ff60808801886137ae565b60405161270d929190613b0d565b60405190819003902060a088013560c08901356127316101008b0160e08c016132d8565b6127436101208c016101008d01613a08565b6127556101408d016101208e01613a08565b60408051602081019c909c526001600160a01b039a8b16908c015297891660608b015260808a019690965293871660a089015260c088019290925260e08701526101008601529092166101208401526001600160801b039182166101408085019190915291166101608301528301356101808201526101a0016040516020818303038152906040529050919050565b60006107b66127f1612955565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060006128208585612a7c565b9150915061282d81612ac2565b509392505050565b8061283f5761090f565b6001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561286e57611a258282612c0b565b61090f84848484612cad565b606061288584612372565b6128e05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610715565b600080856001600160a01b0316856040516128fb9190613b1d565b600060405180830381855af49150503d8060008114612936576040519150601f19603f3d011682016040523d82523d6000602084013e61293b565b606091505b509150915061294b828286612d06565b9695505050505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156129ae57507f000000000000000000000000000000000000000000000000000000000000000046145b156129d857507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600080825160411415612ab35760208301516040840151606085015160001a612aa787828585612d3f565b94509450505050612abb565b506000905060025b9250929050565b6000816004811115612ad657612ad6613b39565b1415612adf5750565b6001816004811115612af357612af3613b39565b1415612b3c5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610715565b6002816004811115612b5057612b50613b39565b1415612b9e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610715565b6003816004811115612bb257612bb2613b39565b14156108e75760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610715565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114612c58576040519150601f19603f3d011682016040523d82523d6000602084013e612c5d565b606091505b50509050806108b55760405162461bcd60e51b815260206004820152601c60248201527b1b985d1a5d99481d1bdad95b881d1c985b9cd9995c8819985a5b195960221b6044820152606401610715565b816001600160a01b0316836001600160a01b03161415612ccc5761090f565b6001600160a01b038316301415612cf157611a256001600160a01b0385168383612df9565b61090f6001600160a01b038516848484612e4f565b60608315612d15575081611623565b825115612d255782518084602001fd5b8160405162461bcd60e51b81526004016107159190613261565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115612d6c5750600090506003612df0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612dc0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612de957600060019250925050612df0565b9150600090505b94509492505050565b6108b58363a9059cbb60e01b8484604051602401612e189291906133f0565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612e87565b6040516001600160a01b038085166024830152831660448201526064810182905261090f9085906323b872dd60e01b90608401612e18565b6000612edc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612f599092919063ffffffff16565b8051909150156108b55780806020019051810190612efa91906139eb565b6108b55760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610715565b6060611620848460008585612f6d85612372565b612fb95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610715565b600080866001600160a01b03168587604051612fd59190613b1d565b60006040518083038185875af1925050503d8060008114613012576040519150601f19603f3d011682016040523d82523d6000602084013e613017565b606091505b5091509150613027828286612d06565b979650505050505050565b82805461303e906136d6565b90600052602060002090601f01602090048101928261306057600085556130a6565b82601f1061307957805160ff19168380011785556130a6565b828001600101855582156130a6579182015b828111156130a657825182559160200191906001019061308b565b506130b29291506130b6565b5090565b5b808211156130b257600081556001016130b7565b80356001600160a01b03811681146130e257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261310e57600080fd5b81356001600160401b0380821115613128576131286130e7565b604051601f8301601f19908116603f01168101908282118183101715613150576131506130e7565b8160405283815286602085880101111561316957600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561319c57600080fd5b6131a5836130cb565b915060208301356001600160401b038111156131c057600080fd5b6131cc858286016130fd565b9150509250929050565b6001600160e01b0319811681146108e757600080fd5b6000602082840312156131fe57600080fd5b8135611623816131d6565b60005b8381101561322457818101518382015260200161320c565b8381111561090f5750506000910152565b6000815180845261324d816020860160208601613209565b601f01601f19169290920160200192915050565b6020815260006116236020830184613235565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6000602082840312156132a757600080fd5b5035919050565b600080604083850312156132c157600080fd5b6132ca836130cb565b946020939093013593505050565b6000602082840312156132ea57600080fd5b611623826130cb565b60008060006060848603121561330857600080fd5b613311846130cb565b925061331f602085016130cb565b9150604084013590509250925092565b60008060006040848603121561334457600080fd5b83356001600160401b038082111561335b57600080fd5b90850190610160828803121561337057600080fd5b9093506020850135908082111561338657600080fd5b818601915086601f83011261339a57600080fd5b8135818111156133a957600080fd5b8760208285010111156133bb57600080fd5b6020830194508093505050509250925092565b600080604083850312156133e157600080fd5b50508035926020909101359150565b6001600160a01b03929092168252602082015260400190565b80151581146108e757600080fd5b60006020828403121561342957600080fd5b813561162381613409565b6000806000806080858703121561344a57600080fd5b613453856130cb565b93506020850135925060408501356001600160401b038082111561347657600080fd5b613482888389016130fd565b9350606087013591508082111561349857600080fd5b506134a5878288016130fd565b91505092959194509250565b6000602082840312156134c357600080fd5b81356001600160401b038111156134d957600080fd5b610afc848285016130fd565b6000806000606084860312156134fa57600080fd5b8335925061331f602085016130cb565b6000806040838503121561351d57600080fd5b613526836130cb565b9150602083013561353681613409565b809150509250929050565b6000806020838503121561355457600080fd5b82356001600160401b038082111561356b57600080fd5b818501915085601f83011261357f57600080fd5b81358181111561358e57600080fd5b8660208260051b85010111156135a357600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561360a57603f198886030184526135f8858351613235565b945092850192908501906001016135dc565b5092979650505050505050565b6000806000806080858703121561362d57600080fd5b613636856130cb565b9350613644602086016130cb565b92506040850135915060608501356001600160401b0381111561366657600080fd5b6134a5878288016130fd565b6000806040838503121561368557600080fd5b61368e836130cb565b915061369c602084016130cb565b90509250929050565b6020808252601790820152762737ba1030baba3437b934bd32b2103a379036b4b73a1760491b604082015260600190565b600181811c908216806136ea57607f821691505b6020821081141561370b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561377f5761377f61374f565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826137a9576137a9613784565b500490565b6000808335601e198436030181126137c557600080fd5b8301803591506001600160401b038211156137df57600080fd5b602001915036819003821315612abb57600080fd5b6000808335601e1984360301811261380b57600080fd5b83016020810192503590506001600160401b0381111561382a57600080fd5b803603831315612abb57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b80356001600160801b03811681146130e257600080fd5b602081526138926020820161388d846130cb565b613274565b60006138a0602084016130cb565b6138ad6040840182613274565b50604083013560608301526138c4606084016130cb565b6138d16080840182613274565b506138df60808401846137f4565b6101608060a08601526138f761018086018385613839565b925060a086013560c086015260c086013560e086015261391960e087016130cb565b915061010061392a81870184613274565b613935818801613862565b92505061012061394f818701846001600160801b03169052565b61395a818801613862565b925050610140613974818701846001600160801b03169052565b9590950135939094019290925250919050565b600060001982141561399b5761399b61374f565b5060010190565b600083516139b4818460208801613209565b8351908301906139c8818360208801613209565b01949350505050565b6001600160a01b0392831681529116602082015260400190565b6000602082840312156139fd57600080fd5b815161162381613409565b600060208284031215613a1a57600080fd5b61162382613862565b6020808252600f908201526e45786365656473206d61782062707360881b604082015260600190565b60008219821115613a5f57613a5f61374f565b500190565b604081526000613a776040830185613235565b8281036020840152613a898185613235565b95945050505050565b600082821015613aa457613aa461374f565b500390565b600082613ab857613ab8613784565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061294b90830184613235565b600060208284031215613b0257600080fd5b8151611623816131d6565b8183823760009101908152919050565b60008251613b2f818460208701613209565b9190910192915050565b634e487b7160e01b600052602160045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212209952d50485cb3022d306fbbb401bff3db2297c96bff99ac2cd724705046638eb64736f6c634300080c0033";
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
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
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
    static createInterface(): ERC721SignatureMintInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721SignatureMint;
}
export {};
//# sourceMappingURL=ERC721SignatureMint__factory.d.ts.map